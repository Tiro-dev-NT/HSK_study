// ═══════════════════════════════════════════════════════
// LESSON-PRACTICE.JS — C1 Lesson Practice Suite
// • Route /lesson-practice?id=N (tab Học). Sinh bài tập RUNTIME từ
//   COURSE_DATA[id] (giáo trình Mai HSK 1-4) — KHÔNG tạo data mới.
// • Tái dùng Course.exerciseAPI (isCorrect/pushWrong/speak/audioUrl/char) +
//   Course.checkLessonGate — KHÔNG đụng flow visual-novel của course.js.
// • 0 AI credit · 0 bảng Supabase mới. Key localStorage MỚI: lesson_practice_v1.
// • Auto-gen thuần client, deterministic (seed = id) → ngày nào cũng cùng đề.
// ═══════════════════════════════════════════════════════

var LessonPractice = {

  lessonId: null,
  lesson:   null,
  sets:     null,
  tab:      'doc',
  tabState: {},        // { tabKey: { idx, answers:{}, checked:{}, build:[] } }
  _pendingId: null,    // set bởi caller trước Router.navigateTo('lesson-practice')
  _levelPoolCache: {},
  _audioAll: null,     // trạng thái "Nghe toàn bộ"

  // Thứ tự 7 tab (doc = transcript, 5 dạng bài, mix = tổng hợp)
  TABS: [
    { key: 'doc',       label: 'Hội thoại',     icon: 'book-open' },
    { key: 'fill',      label: 'Điền từ',       icon: 'pencil-fill' },
    { key: 'listen',    label: 'Nghe chọn',     icon: 'ear' },
    { key: 'dictation', label: 'Chép chính tả', icon: 'keyboard-dictation' },
    { key: 'order',     label: 'Sắp xếp',       icon: 'shuffle-order' },
    { key: 'translate', label: 'Luyện dịch',    icon: 'translate' },
    { key: 'mix',       label: 'Tổng hợp',      icon: 'layers-mix' }
  ],

  // ── Entry ────────────────────────────────────────────
  // open(id): dùng bởi nút ngoài (course completion, learn-hub). Theo pattern
  // _pendingId của Course/Handout (router fetch fragment theo TÊN page, không
  // hiểu query → không truyền ?id qua navigateTo).
  open: function(id) {
    LessonPractice._pendingId = id;
    if (typeof Router !== 'undefined') Router.navigateTo('lesson-practice');
  },

  init: function() {
    var urlId = new URLSearchParams(location.search).get('id');
    var id = LessonPractice._pendingId || (urlId ? parseInt(urlId, 10) : null);
    LessonPractice._pendingId = null;

    if (typeof COURSE_DATA === 'undefined') { LessonPractice._renderMissing(); return; }
    if (!id || !COURSE_DATA[id]) {
      // Không có id → mở bài dở đầu tiên (hoặc bài 1)
      id = LessonPractice._defaultLessonId();
    }
    if (!id) { LessonPractice._renderMissing(); return; }
    LessonPractice._gateAndLoad(id);
  },

  _defaultLessonId: function() {
    var prog = {};
    try { prog = JSON.parse(localStorage.getItem('hsk_course_progress') || '{}'); } catch (e) {}
    var ids = Object.keys(COURSE_DATA).map(Number).sort(function(a, b) { return a - b; });
    for (var i = 0; i < ids.length; i++) {
      if (!(prog[ids[i]] && prog[ids[i]].completed)) return ids[i];
    }
    return ids[0] || null;
  },

  // Gate dùng CHUNG với course (HSK level>=3 → Pro). KHÔNG tự chế.
  _gateAndLoad: function(id) {
    var go = function() { LessonPractice._load(id); };
    if (typeof Course !== 'undefined' && Course.checkLessonGate) {
      Course.checkLessonGate(id, go, function() {
        var lv = LessonPractice._levelOf(id);
        if (typeof Monetization !== 'undefined' && Monetization.showGate) {
          Monetization.showGate('Luyện tập bài Mai HSK ' + lv);
        }
        LessonPractice._renderGate(lv);
      });
    } else { go(); }
  },

  _load: function(id) {
    LessonPractice.lessonId = id;
    LessonPractice.lesson   = COURSE_DATA[id];
    LessonPractice.sets     = LessonPractice._buildSets(LessonPractice.lesson);
    LessonPractice.tabState = {};
    // Chọn tab mặc định = tab đầu tiên có nội dung (ưu tiên Hội thoại)
    LessonPractice.tab = LessonPractice._firstNonEmptyTab();
    try { history.replaceState({ page: 'lesson-practice', id: id }, '', '/lesson-practice?id=' + id); } catch (e) {}
    LessonPractice._bindKeys();
    LessonPractice.render();
  },

  _firstNonEmptyTab: function() {
    var t = LessonPractice.TABS;
    for (var i = 0; i < t.length; i++) {
      if (LessonPractice._tabCount(t[i].key) > 0) return t[i].key;
    }
    return 'doc';
  },

  _tabCount: function(key) {
    var s = LessonPractice.sets;
    if (!s) return 0;
    return (s[key] || []).length;
  },

  // ═══════════════════════════════════════════════════
  //  GENERATOR — _buildSets(lesson)
  // ═══════════════════════════════════════════════════
  _buildSets: function(lesson) {
    var id    = lesson.id;
    var rng   = LessonPractice._rng(id);
    var level = lesson.level || 1;
    var vocab = lesson.vocab || [];
    var wb    = lesson.workbook || {};
    var allWb = [].concat(wb.easy || [], wb.normal || [], wb.hard || []);

    // doc: câu thoại có chữ Hán (transcript để đọc lại)
    var doc = [];
    (lesson.steps || []).forEach(function(s) {
      if (s.type === 'dialogue' && s.text && /[一-鿿]/.test(s.text)) {
        doc.push({ speaker: s.speaker || 'narrator', text: s.text, pinyin: s.pinyin || '', meaning: s.meaning || '' });
      }
    });

    // Workbook tách theo dạng
    var fill   = allWb.filter(function(e) { return e.type === 'fill'; });
    var listen = allWb.filter(function(e) { return e.type === 'listen'; });
    var wbDict = allWb.filter(function(e) { return e.type === 'dictation'; });
    var wbOrd  = allWb.filter(function(e) { return e.type === 'order'; });
    var wbTr   = allWb.filter(function(e) { return e.type === 'translate'; });

    // Tập từ ghép để segment (longest-match)
    var vset = {};
    vocab.forEach(function(w) { if (w.h && w.h.length > 1) vset[w.h] = true; });
    (lesson.vocabPreview || []).forEach(function(h) { if (h && h.length > 1) vset[h] = true; });

    // Câu thoại "đẹp" cho auto-gen: non-narrator, 4-12 chữ, có pinyin
    var spoken = doc.filter(function(d) {
      var c = LessonPractice._stripPunc(d.text);
      return d.speaker !== 'narrator' && c.length >= 4 && c.length <= 12 && d.pinyin;
    });

    // dictation = workbook + auto-gen từ thoại (max 6) — phát file R2 giọng thật
    var dictation = wbDict.map(function(e) { return LessonPractice._clone(e); });
    spoken.slice(0, 6).forEach(function(d) {
      dictation.push({
        type: 'dictation',
        audio: d.text, answer: LessonPractice._stripPunc(d.text),
        py: d.pinyin, hint: d.meaning,
        _autogen: true, _speaker: d.speaker, _r2text: d.text
      });
    });

    // order = workbook + auto-gen (tách 4-8 token)
    var order = wbOrd.map(function(e) { return LessonPractice._clone(e); });
    var oCount = 0;
    spoken.forEach(function(d) {
      if (oCount >= 6) return;
      var clean = LessonPractice._stripPunc(d.text);
      var toks  = LessonPractice._segment(clean, vset);
      if (toks.length >= 4 && toks.length <= 8) {
        order.push({ type: 'order', words: LessonPractice._shuffleArr(toks.slice(), rng), answer: clean, py: d.pinyin, explain: d.meaning, _autogen: true });
        oCount++;
      }
    });

    // translate = workbook (build word-bank) + auto-gen (đề = nghĩa VI)
    var translate = wbTr.map(function(e) {
      var clean = LessonPractice._stripPunc(e.answer);
      var toks  = LessonPractice._segment(clean, vset);
      return { type: 'translate', prompt: e.prompt, answer: clean,
               words: LessonPractice._wordBank(toks, level, rng), explain: e.explain };
    });
    var tCount = 0;
    spoken.forEach(function(d) {
      if (tCount >= 6 || !d.meaning) return;
      var clean = LessonPractice._stripPunc(d.text);
      var toks  = LessonPractice._segment(clean, vset);
      if (toks.length >= 2 && toks.length <= 8) {
        translate.push({ type: 'translate', prompt: d.meaning, answer: clean,
                         words: LessonPractice._wordBank(toks, level, rng), py: d.pinyin, _autogen: true });
        tCount++;
      }
    });

    // mix = trộn seeded 15-20 câu từ các set + MCQ vocab
    var pool = [];
    [fill, listen, order, translate, dictation].forEach(function(arr) {
      arr.forEach(function(e) { pool.push(LessonPractice._clone(e)); });
    });
    LessonPractice._vocabMCQ(lesson, rng).forEach(function(e) { pool.push(e); });
    var mix = LessonPractice._shuffleArr(pool, rng).slice(0, 20);

    return { doc: doc, fill: fill, listen: listen, dictation: dictation, order: order, translate: translate, mix: mix };
  },

  // MCQ "X nghĩa là gì?" — 4 đáp án VI, đáp nhiễu lấy từ chính vocab bài
  _vocabMCQ: function(lesson, rng) {
    var vocab = (lesson.vocab || []).filter(function(w) { return w.h && w.v; });
    if (vocab.length < 4) return [];
    var pick  = LessonPractice._shuffleArr(vocab.slice(), rng).slice(0, 6);
    var out = [];
    pick.forEach(function(w) {
      var distract = [];
      var others = LessonPractice._shuffleArr(vocab.filter(function(x) { return x.v !== w.v; }), rng);
      for (var i = 0; i < others.length && distract.length < 3; i++) {
        if (distract.indexOf(others[i].v) === -1) distract.push(others[i].v);
      }
      if (distract.length < 3) return;
      var opts = LessonPractice._shuffleArr([w.v].concat(distract), rng);
      out.push({ type: 'vocabmcq', prompt: w.h + ' nghĩa là gì?', options: opts, answer: w.v, _hanzi: w.h, py: w.p });
    });
    return out;
  },

  // Word-bank cho translate: token đúng + 4-6 chữ nhiễu cùng cấp
  _wordBank: function(toks, level, rng) {
    var bank = toks.slice();
    var used = {}; toks.forEach(function(t) { used[t] = true; });
    var pool = LessonPractice._levelPool(level);
    var want = 4 + Math.floor(rng() * 3);   // 4-6
    var tries = 0;
    while (bank.length - toks.length < want && tries < 240 && pool.length) {
      var c = pool[Math.floor(rng() * pool.length)];
      tries++;
      if (!c || used[c]) continue;
      used[c] = true; bank.push(c);
    }
    return LessonPractice._shuffleArr(bank, rng);
  },

  // Pool chữ đơn của các bài cùng cấp (cho đáp nhiễu translate)
  _levelPool: function(level) {
    if (LessonPractice._levelPoolCache[level]) return LessonPractice._levelPoolCache[level];
    var chars = {}, list = [];
    if (typeof COURSE_DATA !== 'undefined') {
      Object.keys(COURSE_DATA).forEach(function(k) {
        var l = COURSE_DATA[k];
        if ((l.level || 1) !== level) return;
        (l.vocab || []).forEach(function(w) {
          if (w.h && w.h.length === 1 && !chars[w.h]) { chars[w.h] = true; list.push(w.h); }
        });
      });
    }
    LessonPractice._levelPoolCache[level] = list;
    return list;
  },

  // ── Segment longest-match (4→2 ký tự, fallback từng chữ) ──
  _segment: function(text, vset) {
    var toks = [], i = 0, n = text.length;
    while (i < n) {
      var matched = false;
      for (var L = Math.min(4, n - i); L >= 2; L--) {
        var sub = text.substr(i, L);
        if (vset[sub]) { toks.push(sub); i += L; matched = true; break; }
      }
      if (!matched) { toks.push(text.charAt(i)); i++; }
    }
    return toks;
  },

  _stripPunc: function(s) {
    return String(s == null ? '' : s).replace(/[\s。，？！、,.?!；：;:""''「」『』（）()]/g, '');
  },

  _clone: function(o) { return JSON.parse(JSON.stringify(o)); },

  // Seeded RNG (mulberry32) — deterministic theo lessonId
  _rng: function(seed) {
    var s = (seed * 2654435761) >>> 0;
    return function() {
      s = (s + 0x6D2B79F5) | 0;
      var t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  },

  _shuffleArr: function(arr, rng) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  },

  _levelOf: function(id) {
    var l = (typeof COURSE_DATA !== 'undefined') ? COURSE_DATA[id] : null;
    return (l && l.level) ? l.level : 1;
  },

  // ═══════════════════════════════════════════════════
  //  RENDER
  // ═══════════════════════════════════════════════════
  _el: function() { return document.getElementById('lpPage'); },

  render: function() {
    var el = LessonPractice._el();
    if (!el || !LessonPractice.lesson) return;
    var l = LessonPractice.lesson;
    el.innerHTML =
      '<div class="lp-shell">' +
        LessonPractice._sidebarHTML() +
        '<div class="lp-main">' +
          '<button class="lp-sheet-btn" onclick="LessonPractice.openSheet()">' + LessonPractice._ic('list', 16) + 'Danh sách bài</button>' +
          LessonPractice._headerHTML(l) +
          LessonPractice._tabsHTML() +
          '<div class="lp-exarea" id="lpExarea">' + LessonPractice._tabContentHTML() + '</div>' +
        '</div>' +
      '</div>';
  },

  _ic: function(name, size) {
    return (typeof Icons !== 'undefined') ? Icons.get(name, { size: size || 18 }) : '';
  },

  _headerHTML: function(l) {
    var vlen = (l.vocab || []).length;
    var docN = LessonPractice._tabCount('doc');
    return '<div class="lp-header">' +
      '<button class="lp-back" onclick="Router.navigateTo(\'learn\')">' + LessonPractice._ic('chevron-left', 16) + 'Về Học</button>' +
      '<div class="lp-h-row">' +
        '<h1 class="lp-h-title">Bài ' + l.id + ': ' + LessonPractice._esc(l.title || '') + '</h1>' +
        '<div class="lp-h-actions">' +
          (docN > 0 ? '<button class="lp-btn" onclick="LessonPractice.playAll()" id="lpPlayAll">' + LessonPractice._ic('volume', 16) + 'Nghe toàn bộ</button>' : '') +
          '<button class="lp-btn" onclick="LessonPractice.openVocab()">' + LessonPractice._ic('book-open', 16) + 'Từ vựng (' + vlen + ')</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  },

  _tabsHTML: function() {
    var html = '<div class="lp-tabs" role="tablist">';
    LessonPractice.TABS.forEach(function(t) {
      var n = LessonPractice._tabCount(t.key);
      if (n === 0) return; // ẩn tab rỗng
      var active = t.key === LessonPractice.tab ? ' lp-tab--active' : '';
      html += '<button class="lp-tab' + active + '" role="tab" onclick="LessonPractice.switchTab(\'' + t.key + '\')">' +
        LessonPractice._ic(t.icon, 16) +
        '<span>' + t.label + '</span>' +
        '<span class="lp-tab-badge">' + n + '</span>' +
      '</button>';
    });
    html += '</div>';
    return html;
  },

  switchTab: function(key) {
    if (LessonPractice.tab === key) return;
    LessonPractice._stopAll();
    LessonPractice.tab = key;
    LessonPractice.render();
  },

  _tabContentHTML: function() {
    if (LessonPractice.tab === 'doc') return LessonPractice._docHTML();
    var set = (LessonPractice.sets && LessonPractice.sets[LessonPractice.tab]) || [];
    if (!set.length) return LessonPractice._emptyHTML();
    return LessonPractice._exerciseHTML(set);
  },

  _renderExarea: function() {
    var area = document.getElementById('lpExarea');
    if (!area) { LessonPractice.render(); return; }
    area.innerHTML = LessonPractice._tabContentHTML();
  },

  // ── Hội thoại tab ────────────────────────────────────
  _docHTML: function() {
    var doc = (LessonPractice.sets && LessonPractice.sets.doc) || [];
    if (!doc.length) return LessonPractice._emptyHTML();
    var lines = doc.map(function(d, i) {
      var c = (typeof Course !== 'undefined' && Course.exerciseAPI) ? Course.exerciseAPI.char(d.speaker) : { name: d.speaker, emoji: '👤', img: '' };
      var narr = d.speaker === 'narrator' ? ' lp-doc-line--narr' : '';
      var avatar = c.img ? '<img src="' + c.img + '" alt="" onerror="this.style.display=\'none\'">' : (c.emoji || '👤');
      return '<div class="lp-doc-line' + narr + '">' +
        '<div class="lp-doc-avatar" style="color:' + (c.color || 'var(--text2)') + '">' + avatar + '</div>' +
        '<div class="lp-doc-body">' +
          '<div class="lp-doc-name">' + LessonPractice._esc(c.name || d.speaker) + '</div>' +
          '<div class="lp-doc-hanzi">' + LessonPractice._esc(d.text) + '</div>' +
          (d.pinyin ? '<div class="lp-doc-py">' + LessonPractice._esc(d.pinyin) + '</div>' : '') +
          (d.meaning ? '<div class="lp-doc-vi" id="lpDocVi' + i + '"' + (LessonPractice._docShowVi ? '' : ' hidden') + '>' + LessonPractice._esc(d.meaning) + '</div>' : '') +
        '</div>' +
        '<button class="lp-doc-play" title="Nghe" onclick="LessonPractice.playDoc(' + i + ')">' + LessonPractice._ic('volume', 18) + '</button>' +
      '</div>';
    }).join('');
    return '<div class="lp-doc-bar">' +
        '<button class="lp-btn" onclick="LessonPractice.toggleDocVi()">' + LessonPractice._ic('book-open', 16) + (LessonPractice._docShowVi ? 'Ẩn nghĩa' : 'Hiện nghĩa') + '</button>' +
      '</div>' +
      '<div class="lp-doc">' + lines + '</div>';
  },

  _docShowVi: true,
  toggleDocVi: function() {
    LessonPractice._docShowVi = !LessonPractice._docShowVi;
    LessonPractice._renderExarea();
  },

  // ── Exercise tabs (1 câu/màn) ────────────────────────
  _state: function() {
    var t = LessonPractice.tab;
    if (!LessonPractice.tabState[t]) LessonPractice.tabState[t] = { idx: 0, answers: {}, checked: {}, build: [] };
    return LessonPractice.tabState[t];
  },

  _exerciseHTML: function(set) {
    var st = LessonPractice._state();
    if (st.idx >= set.length) return LessonPractice._resultHTML(set);
    var item = set[st.idx];
    var idx  = st.idx;
    var checked = !!st.checked[idx];
    var ans = st.answers[idx];

    var progPct = Math.round((idx / set.length) * 100);
    var head = '<div class="lp-progress">' +
        '<div class="lp-progress-track"><div class="lp-progress-fill" style="width:' + progPct + '%"></div></div>' +
        '<span class="lp-progress-label">' + (idx + 1) + '/' + set.length + '</span>' +
      '</div>';

    return head + LessonPractice._itemHTML(item, idx, checked, ans);
  },

  _itemHTML: function(item, idx, checked, ans) {
    var body = '';
    if (item.type === 'fill')           body = LessonPractice._fillHTML(item, idx, checked, ans);
    else if (item.type === 'listen')    body = LessonPractice._mcqAudioHTML(item, idx, checked, ans, 'listen');
    else if (item.type === 'vocabmcq')  body = LessonPractice._vmcqHTML(item, idx, checked, ans);
    else if (item.type === 'dictation') body = LessonPractice._dictHTML(item, idx, checked, ans);
    else if (item.type === 'order')     body = LessonPractice._buildHTML(item, idx, checked, ans, 'order');
    else if (item.type === 'translate') body = LessonPractice._buildHTML(item, idx, checked, ans, 'translate');

    var feedback = '';
    if (checked) feedback = LessonPractice._feedbackHTML(item, ans);

    var actions = LessonPractice._actionsHTML(item, idx, checked);
    return body + feedback + actions;
  },

  // fill — MCQ điền chỗ trống
  _fillHTML: function(item, idx, checked, ans) {
    var parts = (item.sentence || '').split('___');
    var blank;
    if (ans !== undefined) {
      var ok = ans === item.answer;
      blank = '<span class="lp-blank lp-blank--filled ' + (ok ? 'lp-blank--ok' : 'lp-blank--no') + '">' + LessonPractice._esc(ans) + '</span>';
    } else {
      blank = '<span class="lp-blank">___</span>';
    }
    var sentence = LessonPractice._esc(parts[0] || '') + blank + LessonPractice._esc(parts[1] || '');
    return '<div class="lp-q-label">Chọn từ điền vào chỗ trống:</div>' +
      '<div class="lp-q-sentence">' + sentence + '</div>' +
      LessonPractice._optsHTML(item.options, idx, checked, ans, item.answer);
  },

  // listen — nghe rồi chọn
  _mcqAudioHTML: function(item, idx, checked, ans) {
    var reveal = '';
    if (checked) {
      reveal = '<div class="lp-q-label" style="margin-top:8px">Đáp án: <b style="color:var(--text)">' + LessonPractice._esc(item.answer) + '</b>' +
        (item.py ? ' <span class="lp-reveal-py">' + LessonPractice._esc(item.py) + '</span>' : '') + '</div>';
    }
    return '<div class="lp-q-label">Nghe rồi chọn đáp án đúng:</div>' +
      LessonPractice._playBtnHTML(item) +
      LessonPractice._optsHTML(item.options, idx, checked, ans, item.answer) +
      reveal;
  },

  // vocab MCQ
  _vmcqHTML: function(item, idx, checked, ans) {
    return '<div class="lp-q-label">Từ vựng:</div>' +
      '<div class="lp-q-sentence">' + LessonPractice._esc(item.prompt) +
        (item.py ? ' <span class="lp-reveal-py">(' + LessonPractice._esc(item.py) + ')</span>' : '') + '</div>' +
      LessonPractice._optsHTML(item.options, idx, checked, ans, item.answer);
  },

  _optsHTML: function(options, idx, checked, ans, correct) {
    var html = '<div class="lp-opts">';
    (options || []).forEach(function(opt, oi) {
      var cls = '';
      if (checked) {
        if (opt === correct) cls = ' lp-opt--correct';
        else if (opt === ans) cls = ' lp-opt--wrong';
      }
      var dis = checked ? 'disabled' : '';
      html += '<button class="lp-opt' + cls + '" ' + dis + ' onclick="LessonPractice.pick(' + oi + ')">' +
        '<span class="lp-opt-key">' + (oi + 1) + '</span>' +
        '<span>' + LessonPractice._esc(opt) + '</span>' +
      '</button>';
    });
    html += '</div>';
    return html;
  },

  // dictation — nghe gõ lại chữ Hán
  _dictHTML: function(item, idx, checked, ans) {
    var revealed = '';
    if (checked) {
      var ok = Course.exerciseAPI.isCorrect(item, ans);
      revealed = '<div class="lp-q-label" style="margin-top:6px">Đáp án: <b style="color:var(--text)">' + LessonPractice._esc(item.answer) + '</b>' +
        (item.py ? ' <span class="lp-reveal-py">' + LessonPractice._esc(item.py) + '</span>' : '') + '</div>';
    }
    return '<div class="lp-q-label">Nghe rồi gõ lại chữ Hán (听写):</div>' +
      LessonPractice._playBtnHTML(item) +
      (item.hint ? '<div class="lp-q-prompt">' + LessonPractice._esc(item.hint) + '</div>' : '') +
      '<input class="lp-input" id="lpInput" placeholder="Gõ chữ Hán bạn nghe được…" ' +
        (checked ? 'disabled value="' + LessonPractice._attr(ans) + '"' : 'value="' + LessonPractice._attr(ans || '') + '" onkeydown="LessonPractice._inputKey(event)"') + '>' +
      revealed;
  },

  // order / translate — word-bank build
  _buildHTML: function(item, idx, checked, ans, kind) {
    var st = LessonPractice._state();
    var words = item.words || [];
    var build = checked ? LessonPractice._answerToBuild(ans, words) : (st.build || []);

    var buildHtml = build.map(function(wi, pos) {
      return '<button class="lp-word lp-word--inbuild" ' + (checked ? 'disabled' : '') + ' onclick="LessonPractice.unbuild(' + pos + ')">' + LessonPractice._esc(words[wi]) + '</button>';
    }).join('');

    var used = {}; build.forEach(function(wi) { used[wi] = true; });
    var bankHtml = words.map(function(w, wi) {
      var u = used[wi] ? ' lp-word--used' : '';
      return '<button class="lp-word' + u + '" ' + (checked ? 'disabled' : '') + ' onclick="LessonPractice.build(' + wi + ')">' + LessonPractice._esc(w) + '</button>';
    }).join('');

    var label = kind === 'translate'
      ? '<div class="lp-q-label">Dịch sang tiếng Trung — chạm từ để ghép câu:</div><div class="lp-q-prompt">' + LessonPractice._esc(item.prompt) + '</div>'
      : '<div class="lp-q-label">Sắp xếp thành câu đúng:</div>';

    return label +
      '<div class="lp-build" data-ph="Chạm từ bên dưới để ghép…">' + buildHtml + '</div>' +
      '<div class="lp-wordbank">' + bankHtml + '</div>';
  },

  _answerToBuild: function(ans, words) {
    // tái dựng vị trí build từ chuỗi answer đã lưu (chỉ để hiển thị sau khi check)
    var build = [], used = {}, rest = ans || '';
    while (rest.length) {
      var hit = -1, hitLen = 0;
      for (var wi = 0; wi < words.length; wi++) {
        if (used[wi]) continue;
        var w = words[wi];
        if (w && rest.indexOf(w) === 0 && w.length > hitLen) { hit = wi; hitLen = w.length; }
      }
      if (hit === -1) break;
      build.push(hit); used[hit] = true; rest = rest.slice(hitLen);
    }
    return build;
  },

  _playBtnHTML: function(item) {
    return '<button class="lp-play" onclick="LessonPractice.playItem()">' + LessonPractice._ic('volume', 20) + 'Nghe' + '</button>';
  },

  _feedbackHTML: function(item, ans) {
    var ok = LessonPractice._itemCorrect(item, ans);
    var fb = ok
      ? '<div class="lp-feedback lp-feedback--ok">✓ Chính xác!</div>'
      : '<div class="lp-feedback lp-feedback--no">✗ Chưa đúng. Đáp án: <b>' + LessonPractice._esc(item.answer) + '</b></div>';
    var explain = '';
    var ex = item.explain || item.feedback;
    if (ex) explain = '<div class="lp-explain">💡 ' + LessonPractice._esc(ex) + '</div>';
    return fb + explain;
  },

  _actionsHTML: function(item, idx, checked) {
    var st = LessonPractice._state();
    var set = LessonPractice.sets[LessonPractice.tab] || [];
    var last = idx >= set.length - 1;
    var btn;
    if (!checked) {
      btn = '<button class="lp-btn lp-btn--primary" onclick="LessonPractice.check()">Kiểm tra</button>';
    } else {
      btn = '<button class="lp-btn lp-btn--primary" onclick="LessonPractice.next()">' + (last ? 'Xem kết quả' : 'Câu tiếp') + ' ' + LessonPractice._ic('arrow-right', 16) + '</button>';
    }
    var audioTab = (LessonPractice.tab === 'listen' || LessonPractice.tab === 'dictation' || item.type === 'listen' || item.type === 'dictation');
    var hint = '<div class="lp-kbd-hint">' +
      '<span><span class="lp-kbd">Enter</span> ' + (checked ? 'tiếp' : 'kiểm tra') + '</span>' +
      (audioTab ? '<span><span class="lp-kbd">Ctrl</span> nghe lại</span>' : '') +
      ((item.options) ? '<span><span class="lp-kbd">1</span>–<span class="lp-kbd">4</span> chọn</span>' : '') +
    '</div>';
    return '<div class="lp-actions">' + btn + hint + '</div>';
  },

  // ── Interaction ──────────────────────────────────────
  pick: function(oi) {
    var st = LessonPractice._state();
    if (st.checked[st.idx]) return;
    var set = LessonPractice.sets[LessonPractice.tab] || [];
    var item = set[st.idx];
    var opt = (item.options || [])[oi];
    if (opt === undefined) return;
    st.answers[st.idx] = opt;
    LessonPractice._commitCheck(item, opt);
    LessonPractice._renderExarea();
  },

  build: function(wi) {
    var st = LessonPractice._state();
    if (st.checked[st.idx]) return;
    st.build = st.build || [];
    if (st.build.indexOf(wi) !== -1) return; // mỗi ô dùng 1 lần
    st.build.push(wi);
    LessonPractice._renderExarea();
  },

  unbuild: function(pos) {
    var st = LessonPractice._state();
    if (st.checked[st.idx]) return;
    st.build.splice(pos, 1);
    LessonPractice._renderExarea();
  },

  check: function() {
    var st = LessonPractice._state();
    if (st.checked[st.idx]) return;
    var set = LessonPractice.sets[LessonPractice.tab] || [];
    var item = set[st.idx];
    var ans;
    if (item.type === 'dictation') {
      var inp = document.getElementById('lpInput');
      ans = inp ? inp.value.trim() : '';
      if (!ans) ans = '(bỏ trống)';
    } else if (item.type === 'order' || item.type === 'translate') {
      var words = item.words || [];
      ans = (st.build || []).map(function(wi) { return words[wi]; }).join('');
      if (!ans) ans = '(bỏ trống)';
    } else {
      return; // MCQ check tự động qua pick()
    }
    st.answers[st.idx] = ans;
    LessonPractice._commitCheck(item, ans);
    LessonPractice._renderExarea();
  },

  _commitCheck: function(item, ans) {
    var st = LessonPractice._state();
    st.checked[st.idx] = true;
    if (!LessonPractice._itemCorrect(item, ans)) LessonPractice._pushSRS(item);
  },

  _itemCorrect: function(item, ans) {
    if (item.type === 'vocabmcq') return ans === item.answer;
    return Course.exerciseAPI.isCorrect(item, ans);
  },

  _pushSRS: function(item) {
    if (typeof Course === 'undefined' || !Course.exerciseAPI) return;
    var ctx = { vocab: LessonPractice.lesson.vocab || [], lessonId: LessonPractice.lessonId };
    if (item.type === 'vocabmcq') {
      Course.exerciseAPI.pushWrong({ answer: item._hanzi }, ctx);
    } else {
      Course.exerciseAPI.pushWrong(item, ctx);
    }
  },

  next: function() {
    var st = LessonPractice._state();
    st.idx++;
    st.build = [];
    LessonPractice._renderExarea();
    var area = document.getElementById('lpExarea');
    if (area && area.scrollIntoView) { try { area.scrollIntoView({ block: 'nearest' }); } catch (e) {} }
  },

  // ── Result mini-screen ───────────────────────────────
  _resultHTML: function(set) {
    var st = LessonPractice._state();
    var correct = 0;
    set.forEach(function(item, i) {
      if (st.checked[i] && LessonPractice._itemCorrect(item, st.answers[i])) correct++;
    });
    var total = set.length;
    var pct = total ? Math.round(correct / total * 100) : 0;
    LessonPractice._saveResult(LessonPractice.tab, correct, total);
    // Quest hook (TODO Q1 wire metric): nếu có Quests.incrementMetric('skills_today') thì gọi.
    if (typeof Quests !== 'undefined' && Quests.incrementMetric) {
      try { Quests.incrementMetric('skills_today', 0); } catch (e) {}
    }
    var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : '💪';
    var nextTab = LessonPractice._nextTabKey();
    return '<div class="lp-result">' +
      '<div class="lp-result-emoji">' + emoji + '</div>' +
      '<div class="lp-result-score">' + correct + '/' + total + ' đúng (' + pct + '%)</div>' +
      '<div class="lp-result-sub">' + (pct >= 70 ? 'Làm tốt lắm! Câu sai đã được thêm vào ôn tập.' : 'Cố lên — xem lại câu sai rồi thử lại nhé.') + '</div>' +
      '<div class="lp-result-btns">' +
        '<button class="lp-btn" onclick="LessonPractice.retry()">' + LessonPractice._ic('refresh', 16) + 'Làm lại</button>' +
        (nextTab ? '<button class="lp-btn lp-btn--primary" onclick="LessonPractice.switchTab(\'' + nextTab + '\')">' + LessonPractice._tabLabel(nextTab) + ' ' + LessonPractice._ic('arrow-right', 16) + '</button>' : '') +
      '</div>' +
    '</div>';
  },

  _nextTabKey: function() {
    var keys = LessonPractice.TABS.map(function(t) { return t.key; }).filter(function(k) { return LessonPractice._tabCount(k) > 0; });
    var i = keys.indexOf(LessonPractice.tab);
    return (i >= 0 && i < keys.length - 1) ? keys[i + 1] : null;
  },

  _tabLabel: function(key) {
    for (var i = 0; i < LessonPractice.TABS.length; i++) if (LessonPractice.TABS[i].key === key) return LessonPractice.TABS[i].label;
    return key;
  },

  retry: function() {
    LessonPractice.tabState[LessonPractice.tab] = { idx: 0, answers: {}, checked: {}, build: [] };
    LessonPractice._renderExarea();
  },

  // ── Audio ────────────────────────────────────────────
  playItem: function() {
    var st = LessonPractice._state();
    var set = LessonPractice.sets[LessonPractice.tab] || [];
    LessonPractice._playAudioFor(set[st.idx]);
  },

  _playAudioFor: function(item) {
    if (!item) return;
    var url = (item._autogen && item._r2text && typeof Course !== 'undefined' && Course.exerciseAPI)
      ? Course.exerciseAPI.audioUrl(LessonPractice.lessonId, item._speaker, item._r2text) : '';
    var fallback = function() { Course.exerciseAPI.speak(item.audio || item.answer || ''); };
    if (url) {
      var a = new Audio(url);
      a.onerror = fallback;
      a.play().catch(fallback);
    } else { fallback(); }
  },

  playDoc: function(i) {
    var doc = (LessonPractice.sets && LessonPractice.sets.doc) || [];
    var d = doc[i];
    if (!d) return;
    LessonPractice._playDocLine(d);
  },

  _playDocLine: function(d, onend) {
    var url = (typeof Course !== 'undefined' && Course.exerciseAPI && d.speaker !== 'narrator')
      ? Course.exerciseAPI.audioUrl(LessonPractice.lessonId, d.speaker, d.text) : '';
    var fb = function() {
      if (typeof Course !== 'undefined' && Course.exerciseAPI) {
        Course.exerciseAPI.speak(d.text);
        // Web Speech không có callback đáng tin trong queue → onend sau khoảng ước lượng
        if (onend) setTimeout(onend, 1200 + d.text.length * 220);
      } else if (onend) { onend(); }
    };
    if (url) {
      var a = new Audio(url);
      LessonPractice._audioEl = a;
      a.onended = function() { if (onend) onend(); };
      a.onerror = fb;
      a.play().catch(fb);
    } else { fb(); }
  },

  playAll: function() {
    if (LessonPractice._audioAll) { LessonPractice._stopAll(); return; }
    var doc = (LessonPractice.sets && LessonPractice.sets.doc) || [];
    var queue = doc.filter(function(d) { return /[一-鿿]/.test(d.text); });
    if (!queue.length) return;
    LessonPractice._audioAll = { i: 0, queue: queue };
    var btn = document.getElementById('lpPlayAll');
    if (btn) btn.classList.add('lp-doc-play--on');
    LessonPractice._stepAll();
  },

  _stepAll: function() {
    var s = LessonPractice._audioAll;
    if (!s || s.i >= s.queue.length) { LessonPractice._stopAll(); return; }
    var d = s.queue[s.i];
    LessonPractice._playDocLine(d, function() {
      if (!LessonPractice._audioAll) return;
      LessonPractice._audioAll.i++;
      LessonPractice._stepAll();
    });
  },

  _stopAll: function() {
    LessonPractice._audioAll = null;
    if (LessonPractice._audioEl) { try { LessonPractice._audioEl.pause(); } catch (e) {} LessonPractice._audioEl = null; }
    if (window.speechSynthesis) try { window.speechSynthesis.cancel(); } catch (e) {}
    var btn = document.getElementById('lpPlayAll');
    if (btn) btn.classList.remove('lp-doc-play--on');
  },

  // ── Sidebar + lessons ────────────────────────────────
  _sidebarHTML: function() {
    return '<aside class="lp-sidebar">' + LessonPractice._lessonListHTML() + '</aside>';
  },

  _lessonListHTML: function() {
    var level = LessonPractice._levelOf(LessonPractice.lessonId);
    var ids = Object.keys(COURSE_DATA).map(Number).filter(function(id) {
      return LessonPractice._levelOf(id) === level;
    }).sort(function(a, b) { return a - b; });
    var prog = LessonPractice._loadProg();
    var html = '<div class="lp-sidebar-title">Bài học HSK ' + level + '</div>';
    ids.forEach(function(id) {
      var l = COURSE_DATA[id];
      var active = id === LessonPractice.lessonId ? ' lp-lesson-item--active' : '';
      var pct = LessonPractice._lessonPct(id, prog);
      html += '<button class="lp-lesson-item' + active + '" onclick="LessonPractice.gotoLesson(' + id + ')">' +
        '<span class="lp-li-num">' + id + '</span>' +
        '<span class="lp-li-body">' +
          '<span class="lp-li-title">' + LessonPractice._esc(l.title || ('Bài ' + id)) + '</span>' +
          (pct > 0 ? '<span class="lp-li-track"><span class="lp-li-fill" style="width:' + pct + '%"></span></span>' : '') +
        '</span>' +
        (pct > 0 ? '<span class="lp-li-pct">' + pct + '%</span>' : '') +
      '</button>';
    });
    return html;
  },

  gotoLesson: function(id) {
    if (id === LessonPractice.lessonId) { LessonPractice.closeSheet(); return; }
    LessonPractice._stopAll();
    LessonPractice.closeSheet();
    LessonPractice._gateAndLoad(id);
  },

  // ── Mobile bottom-sheet ──────────────────────────────
  openSheet: function() {
    LessonPractice.closeSheet();
    var back = document.createElement('div');
    back.className = 'lp-sheet-backdrop';
    back.id = 'lpSheet';
    back.onclick = function(e) { if (e.target === back) LessonPractice.closeSheet(); };
    back.innerHTML = '<div class="lp-sheet"><div class="lp-sheet-grip"></div>' + LessonPractice._lessonListHTML() + '</div>';
    document.body.appendChild(back);
  },

  closeSheet: function() {
    var s = document.getElementById('lpSheet');
    if (s && s.parentNode) s.parentNode.removeChild(s);
  },

  // ── Vocab modal ──────────────────────────────────────
  openVocab: function() {
    LessonPractice.closeVocab();
    var vocab = (LessonPractice.lesson.vocab || []);
    var rows = vocab.map(function(w) {
      return '<div class="lp-vrow"><span class="lp-vh">' + LessonPractice._esc(w.h) + '</span>' +
        '<span class="lp-vp">' + LessonPractice._esc(w.p || '') + '</span>' +
        '<span class="lp-vv">' + LessonPractice._esc(w.v || '') + '</span></div>';
    }).join('');
    var back = document.createElement('div');
    back.className = 'lp-modal-backdrop';
    back.id = 'lpVocab';
    back.onclick = function(e) { if (e.target === back) LessonPractice.closeVocab(); };
    back.innerHTML = '<div class="lp-modal">' +
        '<div class="lp-modal-head"><span class="lp-modal-title">Từ vựng bài ' + LessonPractice.lessonId + ' (' + vocab.length + ')</span>' +
          '<button class="lp-modal-close" onclick="LessonPractice.closeVocab()">' + LessonPractice._ic('x', 18) + '</button></div>' +
        '<div class="lp-vlist">' + rows + '</div>' +
      '</div>';
    document.body.appendChild(back);
  },

  closeVocab: function() {
    var s = document.getElementById('lpVocab');
    if (s && s.parentNode) s.parentNode.removeChild(s);
  },

  // ── Keyboard ─────────────────────────────────────────
  _bindKeys: function() {
    document.removeEventListener('keydown', LessonPractice._onKey);
    document.addEventListener('keydown', LessonPractice._onKey);
  },

  _onKey: function(e) {
    if (!LessonPractice._el()) { document.removeEventListener('keydown', LessonPractice._onKey); return; }
    if (LessonPractice.tab === 'doc') return;
    if (document.getElementById('lpVocab') || document.getElementById('lpSheet')) return;
    var st = LessonPractice._state();
    var set = LessonPractice.sets[LessonPractice.tab] || [];
    var item = set[st.idx];
    if (!item) return; // màn kết quả
    var checked = !!st.checked[st.idx];

    if (e.key === 'Control') {
      if (item.type === 'listen' || item.type === 'dictation') { LessonPractice._playAudioFor(item); }
      return;
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      if (checked) LessonPractice.next();
      else if (item.type === 'dictation' || item.type === 'order' || item.type === 'translate') LessonPractice.check();
      return;
    }
    if (!checked && item.options && /^[1-9]$/.test(e.key)) {
      var oi = parseInt(e.key, 10) - 1;
      if (oi < item.options.length) { e.preventDefault(); LessonPractice.pick(oi); }
    }
  },

  _inputKey: function(e) {
    if (e.key === 'Enter') { e.preventDefault(); LessonPractice.check(); }
  },

  // ── Progress (lesson_practice_v1) ────────────────────
  _loadProg: function() {
    try { return JSON.parse(localStorage.getItem('lesson_practice_v1') || '{}'); } catch (e) { return {}; }
  },

  _saveResult: function(tab, done, total) {
    var all = LessonPractice._loadProg();
    var id = LessonPractice.lessonId;
    all[id] = all[id] || {};
    var pct = total ? Math.round(done / total * 100) : 0;
    var prev = all[id][tab] || {};
    all[id][tab] = { done: done, total: total, best: Math.max(prev.best || 0, pct) };
    try { localStorage.setItem('lesson_practice_v1', JSON.stringify(all)); } catch (e) {}
  },

  // % luyện tập của 1 bài = trung bình best các tab bài tập (bỏ doc)
  _lessonPct: function(id, prog) {
    var rec = prog[id];
    if (!rec) return 0;
    var sum = 0, cnt = 0;
    Object.keys(rec).forEach(function(k) {
      if (k === 'doc') return;
      sum += rec[k].best || 0; cnt++;
    });
    return cnt ? Math.round(sum / cnt) : 0;
  },

  // ── Empty / gate / missing ───────────────────────────
  _emptyHTML: function() {
    return '<div class="lp-empty">' +
      '<img class="lp-empty-img" src="assets/mascot/be-rong-book.webp" alt="" onerror="this.style.display=\'none\'">' +
      '<div class="lp-empty-title">Bài này chưa có dạng bài tập này</div>' +
      '<div class="lp-empty-sub">Thử tab khác hoặc bài khác trong danh sách bên trái nhé.</div>' +
    '</div>';
  },

  _renderGate: function(lv) {
    var el = LessonPractice._el();
    if (!el) return;
    el.innerHTML = '<div class="lp-empty">' +
      '<div class="lp-empty-title">Luyện tập bài Mai HSK ' + lv + ' — dành cho thành viên Pro</div>' +
      '<div class="lp-empty-sub">HSK 1 và HSK 2 luôn miễn phí. Nâng cấp Pro để mở khóa.</div>' +
      '<div class="lp-result-btns" style="margin-top:16px">' +
        '<button class="lp-btn lp-btn--primary" onclick="Router.navigateTo(\'pricing\')">Xem gói Pro</button>' +
        '<button class="lp-btn" onclick="Router.navigateTo(\'learn\')">Về Học</button>' +
      '</div></div>';
  },

  _renderMissing: function() {
    var el = LessonPractice._el();
    if (!el) return;
    el.innerHTML = '<div class="lp-empty">' +
      '<div class="lp-empty-title">Chưa chọn bài để luyện tập</div>' +
      '<div class="lp-empty-sub">Vào tab Học → chọn một bài Truyện Mai rồi bấm “Luyện tập bài này”.</div>' +
      '<div class="lp-result-btns" style="margin-top:16px"><button class="lp-btn lp-btn--primary" onclick="Router.navigateTo(\'learn\')">Về Học</button></div>' +
    '</div>';
  },

  // ── utils ────────────────────────────────────────────
  _esc: function(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function(c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  },
  _attr: function(s) { return String(s == null ? '' : s).replace(/"/g, '&quot;'); }
};
