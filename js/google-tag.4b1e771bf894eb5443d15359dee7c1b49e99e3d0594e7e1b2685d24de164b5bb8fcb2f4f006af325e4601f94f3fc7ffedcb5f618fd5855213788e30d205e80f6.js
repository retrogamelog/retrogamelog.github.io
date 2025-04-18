"use strict";
(() => {
  // ns-hugo-params:<stdin>
  var stdin_default = { googleAds: null, measurementId: "GTM-P3JTCFX6" };

  // <stdin>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", /* @__PURE__ */ new Date());
  gtag("config", stdin_default.measurementId);
  if (typeof stdin_default.googleAds !== "undefined") {
    gtag("config", stdin_default.googleAds);
  }
})();
