/* Kopiert Text in die Zwischenablage und gibt kurz Feedback am Button. */
window.nicoCopy = function (text, btn) {
  var done = function () {
    var lbl = btn.querySelector(".lbl");
    var old = lbl ? lbl.textContent : "";
    if (lbl) lbl.textContent = "Kopiert ✓";
    btn.classList.add("is-copied");
    setTimeout(function () {
      if (lbl) lbl.textContent = old;
      btn.classList.remove("is-copied");
    }, 1500);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(fallback);
  } else { fallback(); }
  function fallback() {
    var t = document.createElement("textarea");
    t.value = text; t.style.position = "fixed"; t.style.opacity = "0";
    document.body.appendChild(t); t.select();
    try { document.execCommand("copy"); done(); } catch (e) {}
    document.body.removeChild(t);
  }
};