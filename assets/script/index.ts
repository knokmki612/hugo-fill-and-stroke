import cssHasPseudo from "css-has-pseudo/browser";

cssHasPseudo(document);

(() => {
  if (document.getElementsByClassName("twitter-tweet").length === 0) return;
  if (!window.twttr) {
    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);
  } else {
    window.twttr.widgets.load();
  }
})();
