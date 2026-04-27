(function () {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  function toArray(list) {
    return Array.prototype.slice.call(list);
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  ready(function () {
    var reducedMotion = prefersReducedMotion();

    document.body.classList.add("hx-interactive-ready");

    setupReveal(reducedMotion);
    setupTilt(reducedMotion);
    setupCursorGlow(reducedMotion);
    setupMetricCounters(reducedMotion);
  });

  function setupReveal(reducedMotion) {
    var nodes = toArray(document.querySelectorAll([
      ".hx-hero",
      ".page__content > h1",
      ".page__content > p",
      ".page__content > ul",
      ".page__content > hr",
      ".paper-box"
    ].join(",")));

    nodes.forEach(function (node, index) {
      node.classList.add("hx-reveal");
      node.style.setProperty("--hx-reveal-delay", Math.min(index * 36, 240) + "ms");
    });

    if (reducedMotion || !("IntersectionObserver" in window)) {
      nodes.forEach(function (node) {
        node.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12
    });

    nodes.forEach(function (node) {
      observer.observe(node);
    });
  }

  function setupTilt(reducedMotion) {
    if (reducedMotion || (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)) {
      return;
    }

    toArray(document.querySelectorAll(".hx-hero, .paper-box, .hx-metric-grid div")).forEach(function (node) {
      node.classList.add("hx-tilt");

      node.addEventListener("pointermove", function (event) {
        var rect = node.getBoundingClientRect();
        var x = (event.clientX - rect.left) / rect.width;
        var y = (event.clientY - rect.top) / rect.height;

        node.style.setProperty("--hx-tilt-x", ((0.5 - y) * 7).toFixed(2) + "deg");
        node.style.setProperty("--hx-tilt-y", ((x - 0.5) * 9).toFixed(2) + "deg");
      });

      node.addEventListener("pointerleave", function () {
        node.style.setProperty("--hx-tilt-x", "0deg");
        node.style.setProperty("--hx-tilt-y", "0deg");
      });
    });
  }

  function setupCursorGlow(reducedMotion) {
    if (reducedMotion || (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)) {
      return;
    }

    var glow = document.createElement("div");
    var pending = false;
    var x = 0;
    var y = 0;

    glow.className = "hx-cursor-glow";
    glow.setAttribute("aria-hidden", "true");
    document.body.appendChild(glow);

    window.addEventListener("pointermove", function (event) {
      x = event.clientX;
      y = event.clientY;
      document.body.classList.add("hx-pointer-active");

      if (pending) {
        return;
      }

      pending = true;
      window.requestAnimationFrame(function () {
        glow.style.setProperty("--hx-cursor-x", x + "px");
        glow.style.setProperty("--hx-cursor-y", y + "px");
        pending = false;
      });
    });

    document.addEventListener("mouseleave", function () {
      document.body.classList.remove("hx-pointer-active");
    });
  }

  function setupMetricCounters(reducedMotion) {
    var metrics = toArray(document.querySelectorAll(".hx-metric-grid span"));

    function getNumber(node) {
      var match = node.textContent.replace(/,/g, "").match(/\d+/);
      return match ? parseInt(match[0], 10) : null;
    }

    function animate(node, startValue) {
      var target = getNumber(node);
      var start = typeof startValue === "number" ? startValue : 0;
      var startTime;
      var duration = reducedMotion ? 0 : 900;

      if (target === null || node.getAttribute("data-hx-counting") === "true") {
        return;
      }

      if (duration === 0) {
        node.textContent = target.toLocaleString("en-US");
        node.setAttribute("data-hx-last-value", target);
        return;
      }

      node.setAttribute("data-hx-counting", "true");

      function tick(timestamp) {
        if (!startTime) {
          startTime = timestamp;
        }

        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = Math.round(start + (target - start) * eased).toLocaleString("en-US");

        if (progress < 1) {
          window.requestAnimationFrame(tick);
        } else {
          node.removeAttribute("data-hx-counting");
          node.setAttribute("data-hx-counted", "true");
          node.setAttribute("data-hx-last-value", target);
        }
      }

      window.requestAnimationFrame(tick);
    }

    function rememberCurrentValue(node) {
      var current = getNumber(node);

      if (current !== null) {
        node.setAttribute("data-hx-last-value", current);
      }
    }

    window.addEventListener("hx-github-stars-updated", function () {
      toArray(document.querySelectorAll("[data-github-star-total]")).forEach(function (node) {
        var start = parseInt(node.getAttribute("data-hx-last-value") || "0", 10);

        animate(node, isNaN(start) ? 0 : start);
      });
    });

    if (!("IntersectionObserver" in window)) {
      metrics.forEach(function (node) {
        rememberCurrentValue(node);

        if (!node.hasAttribute("data-github-star-total")) {
          animate(node);
        }
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        animate(entry.target);
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.5
    });

    metrics.forEach(function (node) {
      rememberCurrentValue(node);

      if (node.hasAttribute("data-github-star-total")) {
        return;
      }

      observer.observe(node);
    });
  }
}());
