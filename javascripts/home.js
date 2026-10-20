/* =========================================================
   NICO PORTFOLIO – HOME JS (nur Startseite)
   1) Wissenskugel (rotierendes neuronales Netz) im Canvas
   2) Konsolen-Tipp-Effekt (whoami ...)
   3) Scroll-Reveal für Content unter dem Hero
   Läuft nur wenn .nico-hero existiert (nur Startseite).
   ========================================================= */

(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- 1) Wissenskugel ---------------- */
  function sphere(canvas) {
    var box = canvas.parentElement;
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0, R = 0, cx = 0, cy = 0;

    var N = 82;
    var pts = [];
    (function build() {
      var off = 2 / N, inc = Math.PI * (3 - Math.sqrt(5));
      for (var i = 0; i < N; i++) {
        var y = i * off - 1 + off / 2;
        var r = Math.sqrt(1 - y * y);
        var phi = i * inc;
        pts.push({ x: Math.cos(phi) * r, y: y, z: Math.sin(phi) * r });
      }
    })();
    // Kanten: jede Ecke mit ihren nächsten Nachbarn verbinden
    var edges = [];
    for (var i = 0; i < N; i++) {
      var d = [];
      for (var j = 0; j < N; j++) if (j !== i) {
        var dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, dz = pts[i].z - pts[j].z;
        d.push({ j: j, dist: dx * dx + dy * dy + dz * dz });
      }
      d.sort(function (a, b) { return a.dist - b.dist; });
      for (var k = 0; k < 3; k++) if (i < d[k].j) edges.push([i, d[k].j]);
    }
    var pulses = [];

    function resize() {
      W = box.clientWidth; H = box.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      R = Math.min(W, H) * 0.38; cx = W / 2; cy = H / 2;
    }
    resize();
    window.addEventListener("resize", resize);

    var ax = 0, ay = 0;
    function rot(p) {
      var cosY = Math.cos(ay), sinY = Math.sin(ay);
      var x = p.x * cosY - p.z * sinY;
      var z = p.x * sinY + p.z * cosY;
      var cosX = Math.cos(ax), sinX = Math.sin(ax);
      var y = p.y * cosX - z * sinX;
      z = p.y * sinX + z * cosX;
      return { x: x, y: y, z: z };
    }
    function proj(r) {
      var persp = 1.9 / (1.9 - r.z);      // leichte Perspektive
      return { sx: cx + r.x * R * persp, sy: cy + r.y * R * persp, depth: (r.z + 1) / 2, persp: persp };
    }

    function frame() {
      ay += 0.0022; ax = Math.sin(ay * 0.4) * 0.35;
      ctx.clearRect(0, 0, W, H);
      var P = pts.map(function (p) { return proj(rot(p)); });

      // Kanten
      for (var e = 0; e < edges.length; e++) {
        var a = P[edges[e][0]], b = P[edges[e][1]];
        var dep = (a.depth + b.depth) / 2;
        ctx.strokeStyle = "rgba(139,150,255," + (0.05 + dep * 0.22).toFixed(3) + ")";
        ctx.lineWidth = 0.6 + dep * 0.5;
        ctx.beginPath(); ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy); ctx.stroke();
      }
      // gelegentlich einen Puls über eine Kante schicken
      if (Math.random() < 0.04 && pulses.length < 6) {
        pulses.push({ e: (Math.random() * edges.length) | 0, t: 0, sp: 0.012 + Math.random() * 0.02 });
      }
      for (var q = pulses.length - 1; q >= 0; q--) {
        var pl = pulses[q]; pl.t += pl.sp;
        if (pl.t >= 1) { pulses.splice(q, 1); continue; }
        var ea = P[edges[pl.e][0]], eb = P[edges[pl.e][1]];
        var px = ea.sx + (eb.sx - ea.sx) * pl.t, py = ea.sy + (eb.sy - ea.sy) * pl.t;
        ctx.fillStyle = "rgba(174,181,255,0.9)";
        ctx.beginPath(); ctx.arc(px, py, 1.8, 0, 6.283); ctx.fill();
      }
      // Knoten
      for (var n = 0; n < P.length; n++) {
        var pt = P[n];
        var rr = 1.1 + pt.depth * 2.0;
        ctx.fillStyle = "rgba(139,150,255," + (0.35 + pt.depth * 0.6).toFixed(3) + ")";
        ctx.beginPath(); ctx.arc(pt.sx, pt.sy, rr, 0, 6.283); ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }
    var raf;
    if (reduce) { ay = 0.6; ax = 0.3; frame(); cancelAnimationFrame(raf); }
    else raf = requestAnimationFrame(frame);
  }

  /* ---------------- 2) Konsolen-Typing ---------------- */
  function typeTerminal(term) {
    var cursor = term.querySelector(".term__cursor");
    var nodes = Array.prototype.slice.call(term.querySelectorAll(".type"));
    term.classList.add("is-typing");
    nodes.forEach(function (n) { n.dataset.txt = n.textContent; n.textContent = ""; });

    if (reduce) {
      nodes.forEach(function (n) { n.textContent = n.dataset.txt; n.classList.add("done"); });
      if (cursor) term.appendChild(cursor);
      return;
    }
    var i = 0;
    function line() {
      if (i >= nodes.length) { if (cursor) term.appendChild(cursor); return; }
      var el = nodes[i]; el.classList.add("active");
      var txt = el.dataset.txt, c = 0;
      // Cursor ans Ende der aktuellen Zeile
      if (cursor && el.parentElement) el.parentElement.appendChild(cursor);
      var isCmd = el.classList.contains("cmd");
      var step = isCmd ? 32 : 9;   // Befehle langsamer/tippig, Ausgabe schneller
      function ch() {
        el.textContent = txt.slice(0, ++c);
        if (c < txt.length) setTimeout(ch, isCmd ? (28 + Math.random() * 42) : step);
        else { el.classList.remove("active"); el.classList.add("done"); i++; setTimeout(line, isCmd ? 160 : 90); }
      }
      ch();
    }
    setTimeout(line, 420);
  }

  /* ---------------- 3) Scroll-Reveal ---------------- */
  function reveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window) || reduce) {
      items.forEach(function (el) { el.classList.add("is-in"); }); return;
    }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  function init() {
    var hero = document.querySelector(".nico-hero[data-nico-hero]");
    reveal();                          // Reveal läuft auch ohne Hero (schadet nicht)
    if (!hero || hero.dataset.ready) return;
    hero.dataset.ready = "1";
    var cv = hero.querySelector("canvas[data-sphere]");
    if (cv) sphere(cv);
    var term = hero.querySelector("[data-term]");
    if (term) typeTerminal(term);
  }

  function boot() { requestAnimationFrame(init); }

  // Direkt starten (fängt den normalen Seitenaufruf ab) ...
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
  window.addEventListener("load", boot);              // Sicherheitsnetz
  // ... UND auf Material-Navigation reagieren (instant nav).
  if (typeof window.document$ !== "undefined" && window.document$.subscribe) {
    window.document$.subscribe(boot);
  }
})();