// Sections ease in. First module in the file on purpose: if anything below it throws, the content is already safe.
(function () {
  clearTimeout(window.__reveal);                      // site.js is alive; the blank-page guard is not needed
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('is-in'); }); return; }
  var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('is-in'); io.unobserve(x.target); } }); }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
})();

// The hero clip. A <video> handles its own buffering, but autoplay is refused often enough — a reduced-motion
// preference, a data saver, some iOS states — that the page must not depend on it. If it has not started shortly
// after load, drop to the final frame so nobody sits looking at a dirty car forever.
(function () {
  var v = document.querySelector('.car-film');
  if (!v) return;
  var p = v.play();
  if (p && p.catch) { p.catch(function () {}); }
  setTimeout(function () {
    if (v.currentTime === 0 || v.paused) { v.poster = 'hero-still.jpg'; }
  }, 2200);
})();

// Anchor jumps have to clear the sticky banner + header, whose height depends on how the banner wraps.
(function () {
  var bar = document.querySelector('.topbar');
  if (!bar) return;
  function measure() { document.documentElement.style.setProperty('--topbar', (bar.offsetHeight + 8) + 'px'); }
  measure();
  if (window.ResizeObserver) new ResizeObserver(measure).observe(bar); else window.addEventListener('resize', measure);
})();

// Shade picker: the tinted photo fades in over the clear-glass photo
(function () {
  var top = document.getElementById('shade-top'), range = document.getElementById('shade-range');
  if (!top || !range) return;
  var btns = Array.prototype.slice.call(document.querySelectorAll('.shade'));
  var book = document.getElementById('shade-book'), base = book && book.getAttribute('href');
  function set(v, from) {
    top.style.opacity = v;
    if (book) {
      var hit = btns.filter(function (b) { return Math.abs(Number(b.getAttribute('data-v')) - v) < 0.06; })[0];
      var label = hit ? hit.textContent.trim() : Math.round(v * 100) + '% of full tint';
      book.textContent = 'Book online with ' + label;
      book.setAttribute('href', base + (base.indexOf('?') < 0 ? '?' : '&') + 'shade=' + encodeURIComponent(label));
    }
    if (from !== 'range') range.value = Math.round(v * 100);
    btns.forEach(function (b) { b.setAttribute('aria-pressed', Math.abs(Number(b.getAttribute('data-v')) - v) < 0.06 ? 'true' : 'false'); });
  }
  btns.forEach(function (b) { b.addEventListener('click', function () { set(Number(b.getAttribute('data-v'))); }); });
  range.addEventListener('input', function () { set(range.value / 100, 'range'); });
})();


