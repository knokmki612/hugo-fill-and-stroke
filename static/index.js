const swup = new Swup({
  linkSelector: `a[href^="${window.location.origin}"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup])`,
  plugins: [
    new SwupScrollPlugin({
      animateScroll: false
    }),
    new SwupPreloadPlugin()
  ]
});
if(document.getElementsByClassName("twitter-tweet").length > 0) {
  var script = document.createElement("script");
  script.async = true;
  script.src = "https://platform.twitter.com/widgets.js";
  document.body.appendChild(script);
}
