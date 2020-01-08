barba.init({
  transitions: [{
    beforeEnter({ trigger }) {
      if (trigger !== 'back') window.scrollTo(0, 0);
    }
  }]
});
if(document.getElementsByClassName("twitter-tweet").length > 0) {
  var script = document.createElement("script");
  script.async = true;
  script.src = "https://platform.twitter.com/widgets.js";
  document.body.appendChild(script);
}
