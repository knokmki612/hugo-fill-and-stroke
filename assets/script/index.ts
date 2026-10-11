(() => {
  const buttons = document.querySelectorAll<HTMLButtonElement>(
    ".site-header-menu button[aria-expanded][aria-controls]",
  );
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
    });
  });
})();

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
