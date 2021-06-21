const swup = new Swup({
  linkSelector: `a[href^="${window.location.origin}"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup])`,
  plugins: [
    new SwupScrollPlugin({
      animateScroll: false,
    }),
    new SwupPreloadPlugin(),
  ],
});

const loadTwitter = () => {
  if (document.getElementsByClassName("twitter-tweet").length === 0) return;
  if (!window.twttr) {
    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);
  } else {
    window.twttr.widgets.load();
  }
};

swup.on("pageView", loadTwitter);

loadTwitter();
