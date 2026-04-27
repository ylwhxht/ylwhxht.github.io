(function () {
  var starNodes = Array.prototype.slice.call(document.querySelectorAll("[data-github-stars]"));
  var totalNodes = Array.prototype.slice.call(document.querySelectorAll("[data-github-star-total]"));

  if (!starNodes.length && !totalNodes.length) {
    return;
  }

  var repos = [];
  var seenRepos = {};
  var totalUser = totalNodes.length ? totalNodes[0].getAttribute("data-github-user-stars") : null;

  starNodes.forEach(function (node) {
    var repo = node.getAttribute("data-github-stars");

    if (repo && !seenRepos[repo]) {
      seenRepos[repo] = true;
      repos.push(repo);
    }
  });

  function formatNumber(value) {
    return Number(value).toLocaleString("en-US");
  }

  function fetchJson(url) {
    return fetch(url).then(function (response) {
      if (!response.ok) {
        throw new Error("GitHub API returned " + response.status + " for " + url);
      }

      return response.json();
    });
  }

  function fetchRepoStars(repo) {
    return fetchJson("https://api.github.com/repos/" + repo)
      .then(function (data) {
        return {
          repo: repo,
          stars: data.stargazers_count
        };
      })
      .catch(function (error) {
        warn(error);

        return {
          repo: repo,
          stars: null
        };
      });
  }

  function fetchUserStarTotal(user, page, total) {
    var url = "https://api.github.com/users/" + user + "/repos?per_page=100&type=owner&page=" + page;

    return fetchJson(url).then(function (repoPage) {
      var pageTotal = repoPage.reduce(function (sum, repo) {
        return sum + (repo.stargazers_count || 0);
      }, total);

      if (repoPage.length === 100) {
        return fetchUserStarTotal(user, page + 1, pageTotal);
      }

      return pageTotal;
    });
  }

  function warn(error) {
    if (window.console && window.console.warn) {
      window.console.warn(error);
    }
  }

  function applyRepoStars(repoStars) {
    starNodes.forEach(function (node) {
      var repo = node.getAttribute("data-github-stars");
      var stars = repoStars[repo];

      if (typeof stars !== "number") {
        return;
      }

      var template = node.getAttribute("data-star-label") || "{stars} stars";
      node.textContent = template.replace("{stars}", formatNumber(stars));
    });
  }

  function applyTotalStars(total) {
    if (typeof total !== "number") {
      return;
    }

    totalNodes.forEach(function (node) {
      node.textContent = formatNumber(total);
    });
  }

  function emitUpdated(repoStars, total) {
    if (typeof window.CustomEvent !== "function") {
      return;
    }

    window.dispatchEvent(new CustomEvent("hx-github-stars-updated", {
      detail: {
        repoStars: repoStars,
        total: total
      }
    }));
  }

  var repoStarsPromise = Promise.all(repos.map(fetchRepoStars)).then(function (results) {
    var repoStars = {};

    results.forEach(function (result) {
      if (typeof result.stars === "number") {
        repoStars[result.repo] = result.stars;
      }
    });

    return repoStars;
  });

  var totalStarsPromise = totalUser ? fetchUserStarTotal(totalUser, 1, 0).catch(function (error) {
    warn(error);
    return null;
  }) : Promise.resolve(null);

  Promise.all([repoStarsPromise, totalStarsPromise]).then(function (results) {
    var repoStars = results[0];
    var total = results[1];

    applyRepoStars(repoStars);
    applyTotalStars(total);
    emitUpdated(repoStars, total);
  });
}());
