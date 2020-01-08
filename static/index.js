quicklink.listen();
if(document.getElementsByClassName("twitter-tweet").length > 0) {
  var script = document.createElement("script");
  script.async = true;
  script.src = "https://platform.twitter.com/widgets.js";
  document.body.appendChild(script);
}
