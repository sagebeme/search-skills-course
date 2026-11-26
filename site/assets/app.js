/* Find It Free: the library card, the course search and the lesson reader.
   Everything personal (name, stamps, ticks, notes) stays in this browser's localStorage. */
(function () {
  'use strict';
  var COURSE = window.COURSE || { lessons: [], extras: {}, siteCount: 0 };
  var LESSONS = COURSE.lessons;

  /* ---------- Saved progress ---------- */
  var KEY = 'find-it-free-v1';
  function load() {
    try { var s = JSON.parse(localStorage.getItem(KEY) || '{}'); return { name: s.name || '', stamps: s.stamps || {}, ticks: s.ticks || {}, notes: s.notes || {} }; }
    catch (e) { return { name: '', stamps: {}, ticks: {}, notes: {} }; }
  }
  var state = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); return true; } catch (e) { return false; } }

  /* ---------- Small helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function slug(s) { return String(s).toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-'); }
  function shortDate(iso) { var d = new Date(iso); return isNaN(d) ? '' : d.toLocaleDateString(undefined, { day: 'numeric', month: 'short' }); }
  function stampCount() { return LESSONS.filter(function (l) { return state.stamps[l.id]; }).length; }
  function nextLesson() { for (var i = 0; i < LESSONS.length; i++) if (!state.stamps[LESSONS[i].id]) return LESSONS[i]; return null; }
  function pageHref(id, hash) { return 'lesson.html?l=' + encodeURIComponent(id) + (hash ? '#' + hash : ''); }

  /* ---------- The card on the home page ---------- */
  function paintCard() {
    $all('[data-stamp]').forEach(function (el) {
      var at = state.stamps[el.getAttribute('data-stamp')];
      el.innerHTML = at ? '<span class="stamp">' + esc(shortDate(at)) + '</span>' : '<span class="visually-hidden">Not stamped</span>';
    });
    $all('[data-done]').forEach(function (el) {
      el.textContent = state.stamps[el.getAttribute('data-done')] ? ', stamped' : '';
    });
    var foot = $('#card-foot');
    var n = stampCount();
    if (foot && n) foot.textContent = n === LESSONS.length ? 'All ' + n + ' lessons stamped. You found it free.' : 'Stamped ' + n + ' of ' + LESSONS.length + '.';
    var start = $('#hero-start');
    var next = nextLesson();
    if (start && n) {
      if (next) { start.href = pageHref(next.id); start.textContent = 'Carry on with lesson ' + next.num; }
      else { start.href = pageHref('resources'); start.textContent = 'Open the resource list'; }
    }
  }

  function initHolder() {
    var input = $('#holder');
    if (!input) return;
    input.value = state.name;
    input.addEventListener('input', function () { state.name = input.value.slice(0, 40); save(); });
  }

  /* ---------- The course search ---------- */
  // Each page is split into sections at its ## and ### headings, so a result can link to the exact spot.
  function plain(md) {
    return md.replace(/```[\s\S]*?```/g, function (m) { return m.replace(/```\w*/g, ' '); })
      .replace(/<[^>]+>/g, ' ')
      .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/[*_`>#|]/g, ' ')
      .replace(/-{3,}/g, ' ')
      .replace(/\s+/g, ' ').trim();
  }
  var INDEX = null;
  function buildIndex() {
    var pages = LESSONS.map(function (l) { return { id: l.id, title: 'Lesson ' + l.num + ': ' + l.short, md: l.md }; });
    Object.keys(COURSE.extras).forEach(function (k) { var e = COURSE.extras[k]; pages.push({ id: e.id, title: e.short, md: e.md }); });
    var out = [];
    pages.forEach(function (p) {
      var heading = p.title, hash = '', buf = [];
      function flush() { var t = plain(buf.join('\n')); if (t) out.push({ page: p.id, pageTitle: p.title, heading: heading, hash: hash, text: t, low: t.toLowerCase(), headLow: heading.toLowerCase() }); buf = []; }
      p.md.split('\n').forEach(function (line) {
        var m = /^(#{2,3})\s+(.+)$/.exec(line);
        if (m) { flush(); heading = plain(m[2]); hash = slug(m[2]); }
        else if (!/^#\s/.test(line)) buf.push(line);
      });
      flush();
    });
    return out;
  }

  // Understands: plain words (all must appear), "exact phrases", -word / -"phrase" (must not appear),
  // and OR / | between two terms (either one will do).
  function parseQuery(q) {
    q = q.replace(/[\u201c\u201d\u201e]/g, '"');
    var re = /(-?)"([^"]*)"|(\S+)/g, m, tokens = [];
    while ((m = re.exec(q))) {
      if (m[2] !== undefined) { if (m[2].trim()) tokens.push({ neg: m[1] === '-', text: m[2].trim().toLowerCase(), phrase: true }); }
      else if (m[3] === 'OR' || m[3] === '|') tokens.push({ or: true });
      else if (m[3].length > 1 && m[3][0] === '-') tokens.push({ neg: true, text: m[3].slice(1).toLowerCase() });
      else if (m[3] !== '-') tokens.push({ neg: false, text: m[3].toLowerCase() });
    }
    var groups = [], negs = [], joinNext = false;
    tokens.forEach(function (t) {
      if (t.or) { joinNext = groups.length > 0; return; }
      if (t.neg) { negs.push(t); joinNext = false; return; }
      if (joinNext) groups[groups.length - 1].push(t); else groups.push([t]);
      joinNext = false;
    });
    return { groups: groups, negs: negs };
  }
  function termRe(t) {
    var body = t.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
    return new RegExp((/^\w/.test(t.text) ? '\\b' : '') + body, 'gi');
  }
  function countIn(t, s) { var m = s.match(termRe(t)); return m ? m.length : 0; }

  function search(q) {
    INDEX = INDEX || buildIndex();
    var parsed = parseQuery(q);
    if (!parsed.groups.length) return { parsed: parsed, hits: [] };
    var hits = [];
    INDEX.forEach(function (sec) {
      var hay = sec.headLow + ' ' + sec.low, score = 0;
      for (var i = 0; i < parsed.negs.length; i++) if (countIn(parsed.negs[i], hay)) return;
      for (var g = 0; g < parsed.groups.length; g++) {
        var best = 0;
        parsed.groups[g].forEach(function (t) { best += countIn(t, sec.low) + 5 * countIn(t, sec.headLow); });
        if (!best) return;
        score += best;
      }
      hits.push({ sec: sec, score: score });
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    return { parsed: parsed, hits: hits };
  }

  function snippet(sec, terms) {
    var text = sec.text, first = -1;
    terms.forEach(function (t) { var r = termRe(t); var m = r.exec(text); if (m && (first < 0 || m.index < first)) first = m.index; });
    var start = Math.max(0, first - 70), end = Math.min(text.length, (first < 0 ? 0 : first) + 170);
    var cut = (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
    var html = esc(cut);
    terms.forEach(function (t) {
      var safe = esc(t.text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
      html = html.replace(new RegExp('(' + (/^\w/.test(t.text) ? '\\b' : '') + safe + ')', 'gi'), '<mark>$1</mark>');
    });
    return html;
  }

  function explain(parsed) {
    var want = parsed.groups.map(function (g) {
      return g.map(function (t) { return t.phrase ? '“' + t.text + '”' : t.text; }).join(' or ');
    });
    var s = 'Sections with ' + want.join(', and ');
    if (parsed.negs.length) s += ', but not ' + parsed.negs.map(function (t) { return t.phrase ? '“' + t.text + '”' : t.text; }).join(' or ');
    return s;
  }

  function initSearch() {
    var form = $('#search-form'), input = $('#q'), list = $('#results'), status = $('#search-status');
    if (!form) return;
    function run(push) {
      var q = input.value.trim();
      list.innerHTML = '';
      var howto = $('#howto'); if (howto) howto.hidden = !!q;
      if (!q) { status.textContent = 'Type a word, or tap an example.'; return; }
      var r = search(q);
      if (!r.parsed.groups.length) { status.textContent = 'Add at least one word to look for, not only minus words.'; return; }
      var terms = [].concat.apply([], r.parsed.groups);
      var shown = r.hits.slice(0, 8);
      status.textContent = r.hits.length
        ? explain(r.parsed) + ': ' + r.hits.length + (r.hits.length === 1 ? ' match.' : ' matches.') + (r.hits.length > shown.length ? ' Showing the best ' + shown.length + '.' : '')
        : 'Nothing found. Try fewer words, check the spelling, or drop a minus word.';
      list.innerHTML = shown.map(function (h) {
        return '<li><a href="' + esc(pageHref(h.sec.page, h.sec.hash)) + '">' +
          '<span class="results__where">' + esc(h.sec.pageTitle) + '</span>' +
          '<span class="results__head">' + esc(h.sec.heading) + '</span>' +
          '<span class="results__snip">' + snippet(h.sec, terms) + '</span></a></li>';
      }).join('');
      if (push && history.replaceState) history.replaceState(null, '', '?q=' + encodeURIComponent(q) + '#search');
    }
    form.addEventListener('submit', function (e) { e.preventDefault(); run(true); });
    var timer;
    input.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(function () { run(false); }, 160); });
    $all('.chip[data-q]').forEach(function (b) {
      b.addEventListener('click', function () { input.value = b.getAttribute('data-q'); run(true); input.focus(); });
    });
    var q0 = new URLSearchParams(location.search).get('q');
    if (q0) { input.value = q0; run(false); }
  }

  /* ---------- The lesson reader ---------- */
  function findPage(id) {
    for (var i = 0; i < LESSONS.length; i++) if (LESSONS[i].id === id) return { lesson: LESSONS[i], index: i };
    if (COURSE.extras[id]) return { extra: COURSE.extras[id] };
    return null;
  }

  // Links between Markdown files become links between pages of this site.
  function rewriteLinks(root) {
    $all('a[href]', root).forEach(function (a) {
      var href = a.getAttribute('href');
      if (/^https?:/i.test(href)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; return; }
      var m = /([\w.-]+)\.md(#.*)?$/.exec(href);
      if (!m) return;
      var name = m[1] === 'README' ? 'about' : m[1];
      a.href = pageHref(name) + (m[2] || '');
    });
  }

  function wrapExercise(root, lessonId) {
    var h = $all('h2', root).filter(function (x) { return /^exercise/i.test(x.textContent.trim()); })[0];
    if (!h) return;
    var box = document.createElement('section');
    box.className = 'exercise';
    box.setAttribute('aria-labelledby', h.id);
    h.parentNode.insertBefore(box, h);
    var node = h;
    while (node && !(node !== h && node.tagName === 'H2')) { var next = node.nextSibling; box.appendChild(node); node = next; }
    var ticks = state.ticks[lessonId] || [];
    $all(':scope > ol > li, :scope > ul > li', box).forEach(function (li, i) {
      var id = 'tick-' + i;
      var cb = document.createElement('input');
      cb.type = 'checkbox'; cb.id = id; cb.className = 'tick'; cb.checked = !!ticks[i];
      cb.setAttribute('aria-label', 'Done: step ' + (i + 1));
      cb.addEventListener('change', function () { var t = state.ticks[lessonId] || []; t[i] = cb.checked; state.ticks[lessonId] = t; save(); });
      li.classList.add('has-tick');
      li.insertBefore(cb, li.firstChild);
    });
  }

  function renderLesson() {
    var article = $('#lesson');
    if (!article || !window.marked) return;
    var id = new URLSearchParams(location.search).get('l') || (LESSONS[0] && LESSONS[0].id);
    var found = findPage(id);
    if (!found) {
      $('#lesson-title').textContent = 'No lesson here';
      article.innerHTML = '<p>There is no page called “' + esc(id) + '”. <a href="index.html#lessons">See all the lessons</a>.</p>';
      return;
    }
    var page = found.lesson || found.extra;
    var md = page.md.replace(/^# .+\n/m, '');
    article.innerHTML = window.marked.parse(md);

    $all('h2, h3', article).forEach(function (h) { if (!h.id) h.id = slug(h.textContent); });
    rewriteLinks(article);
    $all('table', article).forEach(function (t) { var w = document.createElement('div'); w.className = 'table-wrap'; w.tabIndex = 0; t.parentNode.insertBefore(w, t); w.appendChild(t); });

    var title = found.lesson ? page.title : page.title;
    $('#lesson-title').textContent = title;
    document.title = (found.lesson ? 'Lesson ' + page.num + ': ' + page.short : page.short) + ' (Find It Free)';

    if (found.lesson) {
      var l = page;
      var num = $('#lesson-num'); num.textContent = l.num; num.hidden = false;
      $('#lesson-meta').textContent = 'Lesson ' + l.num + (l.time ? ', about ' + l.time : '');
      var fig = document.createElement('figure');
      fig.className = 'lesson-shot';
      fig.innerHTML = '<span class="shot shot--lesson" data-slot="lesson-' + esc(l.num) + '" data-kind="' + esc(l.kind) + '" data-alt="' + esc(l.alt) + '"><img src="images/' + esc(l.image) + '" alt="' + esc(l.alt) + '" style="object-position:' + esc(l.pos) + '"></span>';
      var firstH2 = $('h2', article);
      article.insertBefore(fig, firstH2 || null);
      wrapExercise(article, l.id);
      initSide(l, found.index);
    } else {
      $('#lesson-meta').textContent = page.id === 'resources' ? COURSE.siteCount + ' free sites, sorted by what they are for' : '';
      document.body.classList.add('page-extra');
    }
    buildToc(article);
    buildPager(found);

    if (location.hash) { var target = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (target) target.scrollIntoView(); }
  }

  function buildToc(article) {
    var toc = $('#toc'), side = $('#side');
    if (!toc) return;
    var hs = $all(':scope > h2, :scope > section > h2', article);
    toc.innerHTML = hs.map(function (h) { return '<li><a href="#' + esc(h.id) + '">' + esc(h.textContent) + '</a></li>'; }).join('');
    if (hs.length) side.hidden = false;
  }

  function initSide(l) {
    var side = $('#side'); side.hidden = false;
    var btn = $('#stamp-btn'), status = $('#stamp-status'), mark = $('#stamp-mark');
    function paint(animate) {
      var at = state.stamps[l.id];
      if (at) {
        status.textContent = 'Stamped on ' + shortDate(at) + '. Nice work.';
        mark.textContent = shortDate(at); mark.hidden = false;
        if (animate) { mark.classList.remove('lands'); void mark.offsetWidth; mark.classList.add('lands'); }
        btn.textContent = 'Remove the stamp'; btn.classList.remove('btn--primary');
      } else {
        status.textContent = 'Not stamped yet. Do the exercise, then stamp your card.';
        mark.hidden = true; btn.textContent = 'Stamp my card'; btn.classList.add('btn--primary');
      }
    }
    btn.addEventListener('click', function () {
      if (state.stamps[l.id]) delete state.stamps[l.id]; else state.stamps[l.id] = new Date().toISOString();
      var ok = save(); paint(!!state.stamps[l.id]);
      if (!ok) status.textContent = 'This browser will not save progress (private window?). The stamp lasts until you close the tab.';
    });
    paint(false);

    var notes = $('#notes'), ns = $('#notes-status'), t;
    notes.value = state.notes[l.id] || '';
    notes.addEventListener('input', function () {
      clearTimeout(t);
      t = setTimeout(function () { state.notes[l.id] = notes.value; ns.textContent = save() ? 'Saved in this browser.' : 'Could not save here. Copy your notes somewhere safe.'; }, 300);
    });
  }

  function buildPager(found) {
    var pager = $('#pager');
    if (!pager) return;
    var html = '';
    if (found.lesson) {
      var prev = LESSONS[found.index - 1], next = LESSONS[found.index + 1];
      if (prev) html += '<a class="pager__link" href="' + pageHref(prev.id) + '"><small>Back to lesson ' + prev.num + '</small><span>' + esc(prev.short) + '</span></a>';
      if (next) html += '<a class="pager__link pager__link--next" href="' + pageHref(next.id) + '"><small>Next: lesson ' + next.num + '</small><span>' + esc(next.short) + '</span></a>';
      else html += '<a class="pager__link pager__link--next" href="' + pageHref('resources') + '"><small>You finished the course</small><span>Keep the resource list</span></a>';
    } else {
      html = '<a class="pager__link pager__link--next" href="index.html#lessons"><small>Back to</small><span>All lessons</span></a>';
    }
    pager.innerHTML = html;
  }

  /* ---------- Light / dark ---------- */
  // Follows the device until the reader presses the button; then their choice is remembered.
  function initTheme() {
    var btn = $('#theme-toggle'), root = document.documentElement;
    if (!btn) return;
    var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    function isDark() { var t = root.getAttribute('data-theme'); return t ? t === 'dark' : !!(media && media.matches); }
    function paint() { var d = isDark(); btn.textContent = d ? 'Light mode' : 'Dark mode'; }
    btn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('find-it-free-theme', next); } catch (e) { /* not saved; still switches for this page */ }
      paint();
    });
    if (media && media.addEventListener) media.addEventListener('change', paint);
    paint();
  }

  initTheme();
  initHolder();
  paintCard();
  initSearch();
  renderLesson();
})();
