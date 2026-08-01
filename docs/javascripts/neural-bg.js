/* =========================================================
   NICO PORTFOLIO – NEURAL BACKGROUND (site-wide)
   Ambientes, langsam driftendes neuronales Netz hinter dem
   gesamten Inhalt. Selbstständig: injiziert Canvas + Styles.
   - dezent, stört das Lesen nicht (Content liegt darüber)
   - pausiert bei inaktivem Tab, respektiert reduced-motion
   - passt Farbe an Hell/Dunkel-Schema an

   ►► HIER STELLST DU DIE INTENSITÄT EIN ◄◄
   Bei `mkdocs serve` siehst du Änderungen sofort.
   ========================================================= */
var NN = {
  density:   12000,   // KLEINER = MEHR Knoten (11000 dichter, 16000 luftiger)
  linkDist:  150,     // Reichweite der Verbindungslinien in px
  speed:     0.18,    // Driftgeschwindigkeit
  nodeR:     1.7,     // Knotenradius
  dark:  { line: 0.30, dot: 0.75 },   // Deckkraft im Dark Mode  (0..1)
  light: { line: 0.17, dot: 0.55 }    // Deckkraft im Light Mode (0..1)
};
/* ===================================================== */

(function () {
  "use strict";
  if (window.__nnBg) return;
  window.__nnBg = true;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var style = document.createElement("style");
  style.textContent =
    "#nn-bg{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:0;pointer-events:none;display:block;}" +
    ".md-container{position:relative;z-index:1;}" +
    ".md-header{z-index:5;}";
  document.head.appendChild(style);

  var canvas = document.createElement("canvas");
  canvas.id = "nn-bg";
  canvas.setAttribute("aria-hidden", "true");
  canvas.style.cssText =
    "position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:0;pointer-events:none;display:block;";
  document.body.insertBefore(canvas, document.body.firstChild);
  var ctx = canvas.getContext("2d");

  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var W = 0, H = 0, nodes = [], LINK = NN.linkDist, pulses = [];

  var col;
  function readTheme() {
    var s = document.body.getAttribute("data-md-color-scheme") ||
            document.documentElement.getAttribute("data-md-color-scheme");
    var a = (s === "default") ? NN.light : NN.dark;
    var rgb = (s === "default") ? [79, 91, 213] : [139, 150, 255];
    col = { r: rgb[0], g: rgb[1], b: rgb[2], line: a.line, dot: a.dot };
  }
  readTheme();
  new MutationObserver(readTheme).observe(document.body,
    { attributes: true, attributeFilter: ["data-md-color-scheme"] });

  function build() {
    var count = Math.max(24, Math.min(120, Math.floor((W * H) / NN.density)));
    nodes = [];
    for (var i = 0; i < count; i++) nodes.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * NN.speed,
      vy: (Math.random() - 0.5) * NN.speed
    });
  }
  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    LINK = NN.linkDist;
    build();
  }

  function draw() {
    if (!nodes || !nodes.length) return;
    ctx.clearRect(0, 0, W, H);
    var i, a, b;
    for (i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (!n) continue;                         // <- absichern
      n.x += n.vx; n.y += n.vy;
      if (n.x < -20) n.x = W + 20; else if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20; else if (n.y > H + 20) n.y = -20;
    }
    for (a = 0; a < nodes.length; a++) {
      for (b = a + 1; b < nodes.length; b++) {
        var dx = nodes[a].x - nodes[b].x, dy = nodes[a].y - nodes[b].y;
        var d = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK) {
          var al = (1 - d / LINK) * col.line;
          ctx.strokeStyle = "rgba(" + col.r + "," + col.g + "," + col.b + "," + al.toFixed(3) + ")";
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(nodes[a].x, nodes[a].y); ctx.lineTo(nodes[b].x, nodes[b].y); ctx.stroke();
        }
      }
    }
    if (Math.random() < 0.02 && pulses.length < 4 && nodes.length > 2) {
      var i1 = (Math.random() * nodes.length) | 0, i2 = (Math.random() * nodes.length) | 0;
      if (i1 !== i2) pulses.push({ a: i1, b: i2, t: 0, sp: 0.008 + Math.random() * 0.012 });
    }
    for (var q = pulses.length - 1; q >= 0; q--) {
      var pl = pulses[q]; pl.t += pl.sp;
      if (pl.t >= 1) { pulses.splice(q, 1); continue; }
      var na = nodes[pl.a], nb = nodes[pl.b];
      if (!na || !nb) { pulses.splice(q, 1); continue; }   // <- diese Zeile ergänzen
      ctx.fillStyle = "rgba(" + col.r + "," + col.g + "," + col.b + ",0.6)";
      ctx.beginPath(); ctx.arc(na.x + (nb.x - na.x) * pl.t, na.y + (nb.y - na.y) * pl.t, 1.7, 0, 6.283); ctx.fill();
    }
    ctx.fillStyle = "rgba(" + col.r + "," + col.g + "," + col.b + "," + col.dot + ")";
    for (var k = 0; k < nodes.length; k++) {
      ctx.beginPath(); ctx.arc(nodes[k].x, nodes[k].y, NN.nodeR, 0, 6.283); ctx.fill();
    }
  }

  var raf = null, running = false;
  function loop() { draw(); raf = requestAnimationFrame(loop); }
  function start() { if (!running && !reduce) { running = true; raf = requestAnimationFrame(loop); } }
  function stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = null; }

  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", function () { document.hidden ? stop() : start(); });

  resize();
  reduce ? draw() : start();
})();
