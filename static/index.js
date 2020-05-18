barba.init({
  transitions: [{
    leave({ trigger }) {
      if (trigger !== 'back') document.scrollingElement.scrollTo(0, 0);
    }
  }],
  prevent: ({ href }) => !/(\/|html)$/.test(href)
});
if(document.getElementsByClassName("twitter-tweet").length > 0) {
  var script = document.createElement("script");
  script.async = true;
  script.src = "https://platform.twitter.com/widgets.js";
  document.body.appendChild(script);
}
