(function () {
  var starNodes = Array.prototype.slice.call(document.querySelectorAll("[data-github-stars]"));
  var totalNodes = Array.prototype.slice.call(document.querySelectorAll("[data-github-star-total]"));

  if (!starNodes.length && !totalNodes.length) {
    return;
  }

  var repos = [];
  var seen = {};

  starNodes.forEach(function (node) {
    var repo = node.getAttribute("data-github-stars");

    if (repo && !seen[repo]) {
      seen[repo] = true;
      repos.push(repo);
    }
  });

  function formatNumber(value) {
    return Number(value).toLocaleString("en-US");
  }

  function applyStars(repoStars, allReposLoaded) {
    starNodes.forEach(function (node) {
      var repo = node.getAttribute("data-github-stars");
      var stars = repoStars[repo];

      if (typeof stars !== "number") {
        return;
      }

      var template = node.getAttribute("data-star-label") || "{stars} stars";
      node.textContent = template.replace("{stars}", formatNumber(stars));
    });

    if (!allReposLoaded) {
      return;
    }

    var total = repos.reduce(function (sum, repo) {
      return sum + repoStars[repo];
    }, 0);

    totalNodes.forEach(function (node) {
      node.textContent = formatNumber(total);
    });
  }

  Promise.all(repos.map(function (repo) {
    return fetch("https://api.github.com/repos/" + repo)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("GitHub API returned " + response.status + " for " + repo);
        }

        return response.json();
      })
      .then(function (data) {
        return {
          repo: repo,
          stars: data.stargazers_count
        };
      })
      .catch(function (error) {
        if (window.console && window.console.warn) {
          window.console.warn(error);
        }

        return {
          repo: repo,
          stars: null
        };
      });
  })).then(function (results) {
    var repoStars = {};
    var allReposLoaded = true;

    results.forEach(function (result) {
      if (typeof result.stars === "number") {
        repoStars[result.repo] = result.stars;
      } else {
        allReposLoaded = false;
      }
    });

    applyStars(repoStars, allReposLoaded);
  });
}());
