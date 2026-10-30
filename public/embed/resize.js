/* AirSucks smell diagnostic — optional iframe auto-resize.
 * Include once on a page that embeds https://airsucks.com/embed/smell/.
 * Listens for height messages from airsucks.com only and resizes the iframe
 * that sent them. No cookies, no tracking, no other effect on the page. */
(function () {
  if (window.__airsucksResize) return;
  window.__airsucksResize = true;
  var ORIGIN = "https://airsucks.com";
  window.addEventListener("message", function (e) {
    if (e.origin !== ORIGIN) return;
    var d = e.data;
    if (!d || d.type !== "airsucks:height" || typeof d.height !== "number") return;
    var frames = document.getElementsByTagName("iframe");
    for (var i = 0; i < frames.length; i++) {
      if (frames[i].contentWindow === e.source) {
        frames[i].style.height = Math.max(320, Math.ceil(d.height)) + "px";
        break;
      }
    }
  });
})();
