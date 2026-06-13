// ═══════════════════════════════════════════════════════
// LESSON-PRACTICE.JS — C1 Lesson Practice Suite (v2 GUIDED)
// • Route /lesson-practice?id=N (tab Học). Sinh bài tập RUNTIME từ
//   COURSE_DATA[id] (giáo trình Mai HSK 1-4) — KHÔNG tạo data mới.
// • v2 (spec §9, 2026-06-12): guided stepper là MẶC ĐỊNH —
//   Bối cảnh → Hội thoại → Điền từ → Nghe chọn → Chép chính tả →
//   Sắp xếp → Luyện dịch → Tổng hợp (bài thiếu dạng nào skip bước đó).
//   Tab tự do hạ vai trò → sheet danh sách bước (jump không khoá).
//   Resume lastStep+câu · mobile header 1 hàng + stepper compact ·
//   Tổng hợp cap 12 câu (guided) · TID-3 mode "che từ" cho Luyện dịch.
// • Tái dùng Course.exerciseAPI (isCorrect/pushWrong/speak/audioUrl/char)
//   + Course.checkLessonGate — KHÔNG đụng flow visual-novel của course.js.
// • 0 AI credit · 0 bảng Supabase mới. Key localStorage: lesson_practice_v1
//   (record bài: {tabKey:{done,total,best}, _steps, _lastStep, _lastIdx, _done}).
// • Auto-gen thuần client, deterministic (seed = id) → ngày nào cũng cùng đề.
// ═══════════════════════════════════════════════════════

var LessonPractice = {

  lessonId: null,
  lesson:   null,
  sets:     null,
  steps:    [],        // các bước active của bài (STEP_DEFS đã lọc rỗng)
  stepIdx:  0,
  tab:      'context', // key của bước hiện tại (giữ tên 'tab' cho tabState)
  tabState: {},        // { key: { idx, answers:{}, checked:{}, build:[], reveal:{}, mode } }
  doneSteps: {},       // { key: 1 } — bước đã hoàn thành (session + persisted _steps)
  finished: false,     // đã tới màn kết quả bài
  mixLimit: 12,        // cap Tổng hợp trong guided flow (§9.5) — "Làm thêm" mở full
  MIX_CAP:  12,
  _resume:  null,      // { key, idx } — đọc từ _lastStep/_lastIdx khi vào bài
  _pendingId: null,    // set bởi caller trước Router.navigateTo('lesson-practice')
  _levelPoolCache: {},
  _audioAll: null,     // trạng thái "Nghe toàn bộ"
  _docShowVi: true,
  _docShowPy: true,

  // Thứ tự bước cố định (§9.1 — pedagogy: context → input → nhận diện → sản xuất → chốt)
  STEP_DEFS: [
    { key: 'context',   label: 'Bối cảnh',      icon: 'book-open' },
    { key: 'doc',       label: 'Hội thoại',     icon: 'headphones' },
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
    LessonPractice.finished = false;
    LessonPractice.mixLimit = Math.min(LessonPractice.MIX_CAP, (LessonPractice.sets.mix || []).length);
    // Toggle Hội thoại persist (§9.5: đúng 2 toggle)
    LessonPractice._docShowVi = localStorage.getItem('lp_doc_vi') !== '0';
    LessonPractice._docShowPy = localStorage.getItem('lp_doc_py') !== '0';

    // Bước active = STEP_DEFS lọc bước rỗng, đánh số lại runtime (§9.1)
    LessonPractice.steps = LessonPractice.STEP_DEFS.filter(function(s) {
      return LessonPractice._stepAvailable(s.key);
    });
    if (!LessonPractice.steps.length) { LessonPractice._renderMissing(); return; }

    // Resume (§9.2): _lastStep + vị trí câu từ lesson_practice_v1
    var rec = LessonPractice._loadProg()[id] || {};
    LessonPractice.doneSteps = {};
    Object.keys(rec._steps || {}).forEach(function(k) { LessonPractice.doneSteps[k] = 1; });
    LessonPractice._resume = null;
    if (rec._lastStep) {
      var ri = LessonPractice._stepIndexOf(rec._lastStep);
      if (ri > 0 || (ri === 0 && (rec._lastIdx | 0) > 0)) {
        LessonPractice._resume = { key: rec._lastStep, idx: rec._lastIdx | 0 };
      }
    }

    LessonPractice.stepIdx = 0;
    LessonPractice.tab = LessonPractice.steps[0].key;
    // Bài không có màn Bối cảnh → resume thẳng vào bước dở
    if (LessonPractice.tab !== 'context' && LessonPractice._resume) {
      LessonPractice._applyResume();
    }
    try { history.replaceState({ page: 'lesson-practice', id: id }, '', '/lesson-practice?id=' + id); } catch (e) {}
    LessonPractice._bindKeys();
    LessonPractice.render();
  },

  _stepAvailable: function(key) {
    if (key === 'context') {
      var l = LessonPractice.lesson;
      return !!(l && (l.context || (l.vocabPreview || []).length));
    }
    return LessonPractice._tabCount(key) > 0;
  },

  _stepIndexOf: function(key) {
    for (var i = 0; i < LessonPractice.steps.length; i++) {
      if (LessonPractice.steps[i].key === key) return i;
    }
    return -1;
  },

  // Số câu hiển thị của 1 bước (mix bị cap trong guided flow §9.5)
  _tabCount: function(key) {
    var s = LessonPractice.sets;
    if (!s) return 0;
    if (key === 'mix') return Math.min((s.mix || []).length, LessonPractice.mixLimit || LessonPractice.MIX_CAP);
    return (s[key] || []).length;
  },

  // Set bài tập hiệu lực của 1 bước (mix capped)
  _setFor: function(key) {
    var s = LessonPractice.sets;
    if (!s) return [];
    if (key === 'mix') return (s.mix || []).slice(0, LessonPractice.mixLimit);
    return s[key] || [];
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
        doc.push({ speaker: s.speaker || 'narrator', text: s.text, pinyin: s.pinyin || '', meaning: s.meaning || '', expression: s.expression || '' });
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
    // toks giữ lại theo thứ tự đáp án — dùng cho mode "che từ" (TID-3)
    var translate = wbTr.map(function(e) {
      var clean = LessonPractice._stripPunc(e.answer);
      var toks  = LessonPractice._segment(clean, vset);
      return { type: 'translate', prompt: e.prompt, answer: clean, toks: toks,
               words: LessonPractice._wordBank(toks, level, rng), explain: e.explain };
    });
    var tCount = 0;
    spoken.forEach(function(d) {
      if (tCount >= 6 || !d.meaning) return;
      var clean = LessonPractice._stripPunc(d.text);
      var toks  = LessonPractice._segment(clean, vset);
      if (toks.length >= 2 && toks.length <= 8) {
        translate.push({ type: 'translate', prompt: d.meaning, answer: clean, toks: toks,
                         words: LessonPractice._wordBank(toks, level, rng), py: d.pinyin, _autogen: true });
        tCount++;
      }
    });

    // mix = trộn seeded từ các set + MCQ vocab (guided cap 12 — §9.5)
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
  //  GUIDED FLOW (§9.2)
  // ═══════════════════════════════════════════════════
  _curStep: function() { return LessonPractice.steps[LessonPractice.stepIdx] || LessonPractice.steps[0]; },

  _markStepDone: function(key) { LessonPractice.doneSteps[key] = 1; },

  // CTA "Bước tiếp theo →" / "Bắt đầu →" — auto-advance, hết bước cuối → kết quả bài
  nextStep: function() {
    LessonPractice._stopAll();
    LessonPractice._markStepDone(LessonPractice.tab);
    if (LessonPractice.stepIdx >= LessonPractice.steps.length - 1) { LessonPractice._finish(); return; }
    LessonPractice.stepIdx++;
    LessonPractice.tab = LessonPractice.steps[LessonPractice.stepIdx].key;
    LessonPractice.finished = false;
    LessonPractice._saveMeta(LessonPractice.tab, LessonPractice._state().idx);
    LessonPractice.render();
  },

  // Jump tự do qua sheet/tab bar — KHÔNG khoá bước, không phá state bước dở (§9.2)
  jumpStep: function(i) {
    LessonPractice.closeStepSheet();
    if (i === LessonPractice.stepIdx && !LessonPractice.finished) return;
    LessonPractice._stopAll();
    LessonPractice.finished = false;
    LessonPractice.stepIdx = i;
    LessonPractice.tab = LessonPractice.steps[i].key;
    LessonPractice._saveMeta(LessonPractice.tab, LessonPractice._state().idx);
    LessonPractice.render();
  },

  _applyResume: function() {
    var r = LessonPractice._resume;
    LessonPractice._resume = null;
    if (!r) return;
    var i = LessonPractice._stepIndexOf(r.key);
    if (i < 0) return;
    LessonPractice.stepIdx = i;
    LessonPractice.tab = r.key;
    if (r.key !== 'context' && r.key !== 'doc') {
      var st = LessonPractice._state();
      st.idx = Math.min(r.idx, LessonPractice._setFor(r.key).length);
    }
  },

  resumeGo: function() {
    LessonPractice._applyResume();
    LessonPractice.render();
  },

  // "Học từ đầu" trên màn Bối cảnh khi có resume
  startFresh: function() {
    LessonPractice._resume = null;
    LessonPractice.tabState = {};
    LessonPractice.doneSteps = {};
    LessonPractice._saveMeta(null, 0);
    LessonPractice.nextStep();
  },

  _finish: function() {
    LessonPractice.finished = true;
    LessonPractice._saveMeta(null, 0, { done: true });
    LessonPractice.render();
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
          LessonPractice._headerHTML(l) +
          LessonPractice._stepperHTML() +
          LessonPractice._tabsHTML() +
          '<div class="lp-exarea" id="lpExarea">' + LessonPractice._bodyHTML() + '</div>' +
        '</div>' +
      '</div>';
  },

  _bodyHTML: function() {
    if (LessonPractice.finished) return LessonPractice._finishHTML();
    if (LessonPractice.tab === 'context') return LessonPractice._contextHTML();
    if (LessonPractice.tab === 'doc') return LessonPractice._docHTML();
    var set = LessonPractice._setFor(LessonPractice.tab);
    if (!set.length) return LessonPractice._emptyHTML();
    return LessonPractice._exerciseHTML(set);
  },

  _ic: function(name, size) {
    return (typeof Icons !== 'undefined') ? Icons.get(name, { size: size || 18 }) : '';
  },

  // Header gộp 1 hàng (§9.3): ‹ back + title + ⋯ (mobile) / actions inline (desktop)
  _headerHTML: function(l) {
    var vlen = (l.vocab || []).length;
    var docN = (LessonPractice.sets.doc || []).length;
    return '<div class="lp-header"><div class="lp-h-bar">' +
      '<button class="lp-back" onclick="Router.navigateTo(\'learn\')" aria-label="Về Học">' + LessonPractice._ic('chevron-left', 18) + '<span class="lp-back-txt">Về Học</span></button>' +
      '<h1 class="lp-h-title">Bài ' + l.id + ': ' + LessonPractice._esc(l.title || '') + '</h1>' +
      '<div class="lp-h-actions">' +
        (docN > 0 ? '<button class="lp-btn" onclick="LessonPractice.playAll()" id="lpPlayAll">' + LessonPractice._ic('volume', 16) + 'Nghe toàn bộ</button>' : '') +
        '<button class="lp-btn" onclick="LessonPractice.openVocab()">' + LessonPractice._ic('book-open', 16) + 'Từ vựng (' + vlen + ')</button>' +
      '</div>' +
      '<button class="lp-menu-btn" onclick="LessonPractice.openMenu()" aria-label="Menu">' + LessonPractice._ic('more-h', 20) + '</button>' +
    '</div></div>';
  },

  // Stepper compact (mobile <1024): "Bước x/y · Tên bước" + dots — tap mở sheet bước.
  // Dots KHÔNG hiện số câu (§9.5).
  _stepperHTML: function() {
    var cur = LessonPractice._curStep();
    var label = LessonPractice.finished
      ? 'Hoàn thành bài 🎉'
      : 'Bước ' + (LessonPractice.stepIdx + 1) + '/' + LessonPractice.steps.length + ' · ' + cur.label;
    var dots = LessonPractice.steps.map(function(s, i) {
      var cls = 'lp-dot';
      if (LessonPractice.finished || LessonPractice.doneSteps[s.key]) cls += ' lp-dot--done';
      if (!LessonPractice.finished && i === LessonPractice.stepIdx) cls += ' lp-dot--cur';
      return '<span class="' + cls + '"></span>';
    }).join('');
    return '<button class="lp-stepper" onclick="LessonPractice.openStepSheet()" aria-label="Danh sách bước">' +
      '<span class="lp-stepper-label">' + label + '</span>' +
      '<span class="lp-stepper-dots">' + dots + '</span>' +
    '</button>';
  },

  // Tab bar desktop (≥1024): đầy đủ bước, ✓ khi xong, KHÔNG badge số (MASTER §⚖️)
  _tabsHTML: function() {
    var html = '<div class="lp-tabs" role="tablist">';
    LessonPractice.steps.forEach(function(s, i) {
      var active = (!LessonPractice.finished && i === LessonPractice.stepIdx) ? ' lp-tab--active' : '';
      var done = LessonPractice.doneSteps[s.key] ? '<span class="lp-tab-done">' + LessonPractice._ic('check', 14) + '</span>' : '';
      html += '<button class="lp-tab' + active + '" role="tab" onclick="LessonPractice.jumpStep(' + i + ')">' +
        LessonPractice._ic(s.icon, 16) +
        '<span>' + s.label + '</span>' + done +
      '</button>';
    });
    html += '</div>';
    return html;
  },

  // URL ảnh scene = bg của step đầu có bg (tái dùng cho bước 0 + banner Hội thoại)
  _sceneBgUrl: function() {
    var steps = (LessonPractice.lesson && LessonPractice.lesson.steps) || [];
    for (var i = 0; i < steps.length; i++) {
      if (steps[i].bg) return 'assets/mai/scenes/' + steps[i].bg + '.webp';
    }
    return 'assets/mai/scenes/classroom.webp';
  },

  // ── Bước 0: Bối cảnh (§9.1 — màn mở đầu NHẸ, giữ "chất truyện") ──
  _contextHTML: function() {
    var l = LessonPractice.lesson;
    var bg = LessonPractice._sceneBgUrl();

    var chips = (l.vocabPreview || []).map(function(h, ci) {
      var w = null;
      (l.vocab || []).some(function(x) { if (x.h === h) { w = x; return true; } return false; });
      return '<button class="lp-chip" onclick="LessonPractice.speakChip(' + ci + ')">' +
        '<span class="lp-chip-h">' + LessonPractice._esc(h) + '</span>' +
        (w && w.p ? '<span class="lp-chip-p">' + LessonPractice._esc(w.p) + '</span>' : '') +
      '</button>';
    }).join('');

    // Banner nhẹ "nên học truyện trước" (không chặn) — dismiss là nhớ (§9.5)
    var banner = '';
    var courseProg = {};
    try { courseProg = JSON.parse(localStorage.getItem('hsk_course_progress') || '{}'); } catch (e) {}
    var storyDone = courseProg[l.id] && courseProg[l.id].completed;
    if (!storyDone && localStorage.getItem('lp_hint_story') !== '1') {
      banner = '<div class="lp-banner" id="lpStoryBanner">' +
        '<span>💡 Nên học truyện Mai bài này trước để nắm bối cảnh.</span>' +
        '<button class="lp-banner-link" onclick="Course._pendingId=' + l.id + ';Router.navigateTo(\'course\')">Học truyện →</button>' +
        '<button class="lp-banner-x" onclick="LessonPractice.dismissStoryHint()" aria-label="Đóng">' + LessonPractice._ic('x', 14) + '</button>' +
      '</div>';
    }

    // 1 CTA primary duy nhất (§9.5) — resume thì CTA = "Tiếp tục Bước k"
    var cta;
    if (LessonPractice._resume) {
      var ri = LessonPractice._stepIndexOf(LessonPractice._resume.key);
      var rl = ri >= 0 ? LessonPractice.steps[ri].label : '';
      cta = '<button class="lp-btn lp-btn--primary lp-btn--lg" onclick="LessonPractice.resumeGo()">Tiếp tục Bước ' + (ri + 1) + ': ' + rl + ' ' + LessonPractice._ic('arrow-right', 16) + '</button>' +
        '<button class="lp-btn" onclick="LessonPractice.startFresh()">Học từ đầu</button>';
    } else {
      cta = '<button class="lp-btn lp-btn--primary lp-btn--lg" onclick="LessonPractice.nextStep()">Bắt đầu ' + LessonPractice._ic('arrow-right', 16) + '</button>';
    }

    return '<div class="lp-context">' +
      '<div class="lp-context-scene"><img src="' + bg + '" alt="" loading="lazy" onerror="this.parentNode.style.display=\'none\'"></div>' +
      (l.context ? '<p class="lp-context-text">' + LessonPractice._esc(l.context) + '</p>' : '') +
      (chips ? '<div class="lp-context-chips">' + chips + '</div>' : '') +
      banner +
      '<div class="lp-result-btns lp-context-cta">' + cta + '</div>' +
    '</div>';
  },

  speakChip: function(ci) {
    var h = (LessonPractice.lesson.vocabPreview || [])[ci];
    if (h && typeof Course !== 'undefined' && Course.exerciseAPI) Course.exerciseAPI.speak(h);
  },

  dismissStoryHint: function() {
    try { localStorage.setItem('lp_hint_story', '1'); } catch (e) {}
    var b = document.getElementById('lpStoryBanner');
    if (b && b.parentNode) b.parentNode.removeChild(b);
  },

  _renderExarea: function() {
    var area = document.getElementById('lpExarea');
    if (!area) { LessonPractice.render(); return; }
    area.innerHTML = LessonPractice._bodyHTML();
  },

  // ── Hội thoại (bước 1) — 2 toggle: Ẩn pinyin · Ẩn nghĩa (§9.5) ──
  // DECISION 2026-06-12 (spec §⚖️): transcript + CHẤT TRUYỆN NHẸ — scene banner
  // mỏng + avatar/expression theo từng dòng + narrator nhạt + highlight dòng
  // đang phát. KHÔNG replay visual-novel (/course = HỌC · /lesson-practice = ÔN).
  _docHTML: function() {
    var doc = (LessonPractice.sets && LessonPractice.sets.doc) || [];
    if (!doc.length) return LessonPractice._emptyHTML();
    var api = (typeof Course !== 'undefined' && Course.exerciseAPI) ? Course.exerciseAPI : null;
    var lines = doc.map(function(d, i) {
      var c = api ? api.char(d.speaker) : { name: d.speaker, emoji: '👤', img: '' };
      var py = d.pinyin ? '<div class="lp-doc-py"' + (LessonPractice._docShowPy ? '' : ' hidden') + '>' + LessonPractice._esc(d.pinyin) + '</div>' : '';
      var vi = d.meaning ? '<div class="lp-doc-vi"' + (LessonPractice._docShowVi ? '' : ' hidden') + '>' + LessonPractice._esc(d.meaning) + '</div>' : '';
      var playBtn = '<button class="lp-doc-play" title="Nghe" onclick="LessonPractice.playDoc(' + i + ')">' + LessonPractice._ic('volume', 18) + '</button>';
      // Narrator: dòng dẫn nhạt, italic, KHÔNG avatar (DECISION #4)
      if (d.speaker === 'narrator') {
        return '<div class="lp-doc-line lp-doc-line--narr" id="lpDocLine' + i + '">' +
          '<div class="lp-doc-body">' +
            '<div class="lp-doc-hanzi lp-doc-hanzi--narr">' + LessonPractice._esc(d.text) + '</div>' + py + vi +
          '</div>' + playBtn +
        '</div>';
      }
      // Mai: sprite expression theo dòng (DECISION #2); speaker khác: ảnh cast tĩnh
      var imgSrc = (d.speaker === 'mai' && api && api.maiImg) ? api.maiImg(d.expression) : (c.img || '');
      var avatar = imgSrc
        ? '<img src="' + imgSrc + '" alt="" onerror="this.onerror=null;this.parentNode.textContent=\'' + (c.emoji || '👤') + '\'">'
        : (c.emoji || '👤');
      return '<div class="lp-doc-line" id="lpDocLine' + i + '">' +
        '<div class="lp-doc-avatar" style="color:' + (c.color || 'var(--text2)') + '">' + avatar + '</div>' +
        '<div class="lp-doc-body">' +
          '<div class="lp-doc-name">' + LessonPractice._esc(c.name || d.speaker) + '</div>' +
          '<div class="lp-doc-hanzi">' + LessonPractice._esc(d.text) + '</div>' + py + vi +
        '</div>' + playBtn +
      '</div>';
    }).join('');
    return '<div class="lp-doc-scene"><img src="' + LessonPractice._sceneBgUrl() + '" alt="" loading="lazy" onerror="this.parentNode.style.display=\'none\'"></div>' +
      '<div class="lp-doc-bar">' +
        '<button class="lp-btn" onclick="LessonPractice.toggleDocPy()">' + (LessonPractice._docShowPy ? 'Ẩn pinyin' : 'Hiện pinyin') + '</button>' +
        '<button class="lp-btn" onclick="LessonPractice.toggleDocVi()">' + (LessonPractice._docShowVi ? 'Ẩn nghĩa' : 'Hiện nghĩa') + '</button>' +
      '</div>' +
      '<div class="lp-doc">' + lines + '</div>' +
      '<div class="lp-actions lp-actions--center">' + LessonPractice._nextStepBtn() + '</div>';
  },

  toggleDocVi: function() {
    LessonPractice._docShowVi = !LessonPractice._docShowVi;
    try { localStorage.setItem('lp_doc_vi', LessonPractice._docShowVi ? '1' : '0'); } catch (e) {}
    LessonPractice._renderExarea();
  },

  toggleDocPy: function() {
    LessonPractice._docShowPy = !LessonPractice._docShowPy;
    try { localStorage.setItem('lp_doc_py', LessonPractice._docShowPy ? '1' : '0'); } catch (e) {}
    LessonPractice._renderExarea();
  },

  // Nút primary "Bước tiếp theo / Hoàn thành bài" dùng chung
  _nextStepBtn: function() {
    var last = LessonPractice.stepIdx >= LessonPractice.steps.length - 1;
    var label = last ? 'Hoàn thành bài 🎉'
      : 'Bước tiếp theo: ' + LessonPractice.steps[LessonPractice.stepIdx + 1].label + ' ';
    return '<button class="lp-btn lp-btn--primary lp-btn--lg" onclick="LessonPractice.nextStep()">' + label + (last ? '' : LessonPractice._ic('arrow-right', 16)) + '</button>';
  },

  // ── Exercise steps (1 câu/màn) ───────────────────────
  _state: function() {
    var t = LessonPractice.tab;
    if (!LessonPractice.tabState[t]) {
      LessonPractice.tabState[t] = {
        idx: 0, answers: {}, checked: {}, build: [], reveal: {},
        mode: (t === 'translate') ? (localStorage.getItem('lp_translate_mode') === 'mask' ? 'mask' : 'bank') : undefined
      };
    }
    return LessonPractice.tabState[t];
  },

  // TID-3: mode "che từ" đang bật cho bước Luyện dịch?
  _maskOn: function() {
    return LessonPractice.tab === 'translate' && LessonPractice._state().mode === 'mask';
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
    else if (item.type === 'translate') {
      body = LessonPractice._maskOn()
        ? LessonPractice._maskHTML(item, idx, checked, ans)
        : LessonPractice._buildHTML(item, idx, checked, ans, 'translate');
      if (LessonPractice.tab === 'translate') body = LessonPractice._modesHTML() + body;
    }

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

  // order / translate — word-bank build (mức dễ)
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

  // ── TID-3: mode "câu mẫu che từ" cho Luyện dịch ─────
  // Đáp án mẫu = chip che (lộ chữ đầu + độ dài). Click chip / Ctrl+Space mở
  // DẦN từng từ; "Hiện tất cả" = đầu hàng → đẩy SRS. Gõ câu rồi Enter nộp.
  _modesHTML: function() {
    var mode = LessonPractice._state().mode || 'bank';
    return '<div class="lp-modes" role="group" aria-label="Chế độ luyện dịch">' +
      '<button class="lp-mode' + (mode === 'bank' ? ' lp-mode--on' : '') + '" onclick="LessonPractice.setTranslateMode(\'bank\')">Ghép từ</button>' +
      '<button class="lp-mode' + (mode === 'mask' ? ' lp-mode--on' : '') + '" onclick="LessonPractice.setTranslateMode(\'mask\')">🧠 Che từ</button>' +
    '</div>';
  },

  setTranslateMode: function(m) {
    var st = LessonPractice._state();
    if (st.mode === m) return;
    st.mode = m;
    try { localStorage.setItem('lp_translate_mode', m); } catch (e) {}
    if (!st.checked[st.idx]) { st.build = []; delete st.reveal[st.idx]; }
    LessonPractice._renderExarea();
  },

  _maskToks: function(item) {
    if (item.toks && item.toks.length) return item.toks;
    return LessonPractice._stripPunc(item.answer || '').split('');
  },

  _maskText: function(tok) {
    if (tok.length <= 1) return '＊';
    var s = LessonPractice._esc(tok.charAt(0));
    for (var i = 1; i < tok.length; i++) s += '＊';
    return s;
  },

  _maskHTML: function(item, idx, checked, ans) {
    var toks = LessonPractice._maskToks(item);
    var rev  = LessonPractice._state().reveal[idx] || {};
    var chips = toks.map(function(t, ti) {
      if (checked || rev[ti]) return '<span class="lp-mask lp-mask--open">' + LessonPractice._esc(t) + '</span>';
      return '<button class="lp-mask" id="lpMask' + ti + '" onclick="LessonPractice.revealWord(' + ti + ')" title="Mở từ này">' + LessonPractice._maskText(t) + '</button>';
    }).join('');
    var giveup = checked ? '' : '<button class="lp-mask-all" onclick="LessonPractice.maskGiveUp()">Hiện tất cả</button>';
    var surrendered = ans === '(đã xem đáp án)';
    return '<div class="lp-q-label">Dịch sang tiếng Trung — nhớ lại rồi gõ câu (chip là gợi ý, mở dần từng từ):</div>' +
      '<div class="lp-q-prompt">' + LessonPractice._esc(item.prompt) + '</div>' +
      '<div class="lp-maskrow">' + chips + giveup + '</div>' +
      '<input class="lp-input" id="lpInput" placeholder="Gõ câu tiếng Trung…" ' +
        (checked ? 'disabled value="' + (surrendered ? '' : LessonPractice._attr(ans)) + '"' : 'onkeydown="LessonPractice._inputKey(event)"') + '>';
  },

  revealWord: function(ti) {
    var st = LessonPractice._state();
    if (st.checked[st.idx]) return;
    (st.reveal[st.idx] = st.reveal[st.idx] || {})[ti] = 1;
    var set = LessonPractice._setFor(LessonPractice.tab);
    var item = set[st.idx];
    if (!item) return;
    var tok = LessonPractice._maskToks(item)[ti];
    var el = document.getElementById('lpMask' + ti);
    // Update DOM tại chỗ — KHÔNG re-render để không mất chữ đang gõ trong input
    if (el && tok !== undefined) el.outerHTML = '<span class="lp-mask lp-mask--open">' + LessonPractice._esc(tok) + '</span>';
  },

  revealNext: function() {
    var st = LessonPractice._state();
    if (st.checked[st.idx]) return;
    var set = LessonPractice._setFor(LessonPractice.tab);
    var item = set[st.idx];
    if (!item) return;
    var toks = LessonPractice._maskToks(item);
    var rev = st.reveal[st.idx] || {};
    for (var ti = 0; ti < toks.length; ti++) {
      if (!rev[ti]) { LessonPractice.revealWord(ti); return; }
    }
  },

  // "Hiện tất cả" = đầu hàng: tính là cần ôn → đẩy SRS (TID-3)
  maskGiveUp: function() {
    var st = LessonPractice._state();
    if (st.checked[st.idx]) return;
    var set = LessonPractice._setFor(LessonPractice.tab);
    var item = set[st.idx];
    if (!item) return;
    var toks = LessonPractice._maskToks(item);
    var rev = st.reveal[st.idx] = st.reveal[st.idx] || {};
    for (var ti = 0; ti < toks.length; ti++) rev[ti] = 1;
    var ans = '(đã xem đáp án)';
    st.answers[st.idx] = ans;
    LessonPractice._commitCheck(item, ans);   // sai → tự đẩy SRS
    LessonPractice._renderExarea();
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
    var fb;
    if (ans === '(đã xem đáp án)') {
      fb = '<div class="lp-feedback lp-feedback--no">👀 Đã xem đáp án: <b>' + LessonPractice._esc(item.answer) + '</b> — câu này sẽ vào ôn tập.</div>';
    } else if (LessonPractice._itemCorrect(item, ans)) {
      fb = '<div class="lp-feedback lp-feedback--ok">✓ Chính xác!</div>';
    } else {
      fb = '<div class="lp-feedback lp-feedback--no">✗ Chưa đúng. Đáp án: <b>' + LessonPractice._esc(item.answer) + '</b></div>';
    }
    var explain = '';
    var ex = item.explain || item.feedback;
    if (ex) explain = '<div class="lp-explain">💡 ' + LessonPractice._esc(ex) + '</div>';
    return fb + explain;
  },

  // Đúng 1 primary CTA/màn (§9.5): MCQ chưa check → chọn đáp án LÀ hành động
  // chính (không hiện nút Kiểm tra thừa); input types → Kiểm tra; checked → Câu tiếp.
  _actionsHTML: function(item, idx, checked) {
    var st = LessonPractice._state();
    var set = LessonPractice._setFor(LessonPractice.tab);
    var last = idx >= set.length - 1;
    var isMcq = !!item.options || item.type === 'vocabmcq';
    var btn = '';
    if (checked) {
      btn = '<button class="lp-btn lp-btn--primary" onclick="LessonPractice.next()">' + (last ? 'Xem kết quả' : 'Câu tiếp') + ' ' + LessonPractice._ic('arrow-right', 16) + '</button>';
    } else if (!isMcq) {
      btn = '<button class="lp-btn lp-btn--primary" onclick="LessonPractice.check()">Kiểm tra</button>';
    }
    var audioItem = (item.type === 'listen' || item.type === 'dictation');
    var maskMode = LessonPractice._maskOn() && item.type === 'translate' && !checked;
    var hint = '<div class="lp-kbd-hint">' +
      (checked
        ? '<span><span class="lp-kbd">Enter</span> tiếp</span>'
        : (isMcq ? '<span><span class="lp-kbd">1</span>–<span class="lp-kbd">4</span> chọn</span>'
                 : '<span><span class="lp-kbd">Enter</span> ' + (maskMode ? 'nộp' : 'kiểm tra') + '</span>')) +
      (maskMode ? '<span><span class="lp-kbd">Ctrl</span>+<span class="lp-kbd">Space</span> mở từ</span>' : '') +
      (audioItem && !checked ? '<span><span class="lp-kbd">Ctrl</span> nghe lại</span>' : '') +
    '</div>';
    return '<div class="lp-actions">' + btn + hint + '</div>';
  },

  // ── Interaction ──────────────────────────────────────
  pick: function(oi) {
    var st = LessonPractice._state();
    if (st.checked[st.idx]) return;
    var set = LessonPractice._setFor(LessonPractice.tab);
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
    var set = LessonPractice._setFor(LessonPractice.tab);
    var item = set[st.idx];
    var ans;
    var typed = item.type === 'dictation' || (item.type === 'translate' && LessonPractice._maskOn());
    if (typed) {
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
    if (ans === '(đã xem đáp án)') return false;
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
    LessonPractice._saveMeta(LessonPractice.tab, st.idx);  // resume đúng câu (§9.2)
    LessonPractice._renderExarea();
    var area = document.getElementById('lpExarea');
    if (area && area.scrollIntoView) { try { area.scrollIntoView({ block: 'nearest' }); } catch (e) {} }
  },

  // ── Mini-result 1 bước (§9.2: primary duy nhất = Bước tiếp theo) ──
  _resultHTML: function(set) {
    var st = LessonPractice._state();
    // Resume rơi đúng màn result của session mới (chưa trả lời câu nào) →
    // hiện "đã xong trước đó" thay vì 0% gây hiểu nhầm, không ghi đè kết quả.
    if (!Object.keys(st.checked).length) {
      var prevRec = (LessonPractice._loadProg()[LessonPractice.lessonId] || {})[LessonPractice.tab];
      return '<div class="lp-result">' +
        '<div class="lp-result-emoji">✅</div>' +
        '<div class="lp-result-score">Bước này bạn đã hoàn thành</div>' +
        '<div class="lp-result-sub">' + (prevRec ? 'Kết quả tốt nhất: ' + (prevRec.best || 0) + '%' : 'Làm lại để cải thiện kết quả nhé.') + '</div>' +
        '<div class="lp-result-btns">' +
          '<button class="lp-btn" onclick="LessonPractice.retry()">' + LessonPractice._ic('refresh', 16) + 'Làm lại</button>' +
          LessonPractice._nextStepBtn() +
        '</div>' +
      '</div>';
    }
    var correct = 0;
    set.forEach(function(item, i) {
      if (st.checked[i] && LessonPractice._itemCorrect(item, st.answers[i])) correct++;
    });
    var total = set.length;
    var pct = total ? Math.round(correct / total * 100) : 0;
    LessonPractice._markStepDone(LessonPractice.tab);   // trước _saveResult để _steps có bước này
    LessonPractice._saveResult(LessonPractice.tab, correct, total);
    // Quest hook (TODO Q1 wire metric): nếu có Quests.incrementMetric('skills_today') thì gọi.
    if (typeof Quests !== 'undefined' && Quests.incrementMetric) {
      try { Quests.incrementMetric('skills_today', 0); } catch (e) {}
    }
    var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : '💪';
    // "Làm thêm" cho Tổng hợp khi pool còn câu ngoài cap (§9.5)
    var more = '';
    if (LessonPractice.tab === 'mix') {
      var rawLen = (LessonPractice.sets.mix || []).length;
      if (rawLen > LessonPractice.mixLimit) {
        more = '<button class="lp-btn" onclick="LessonPractice.moreMix()">Làm thêm +' + (rawLen - LessonPractice.mixLimit) + ' câu</button>';
      }
    }
    return '<div class="lp-result">' +
      '<div class="lp-result-emoji">' + emoji + '</div>' +
      '<div class="lp-result-score">' + correct + '/' + total + ' đúng (' + pct + '%)</div>' +
      '<div class="lp-result-sub">' + (pct >= 70 ? 'Làm tốt lắm! Câu sai đã được thêm vào ôn tập.' : 'Cố lên — xem lại câu sai rồi thử lại nhé.') + '</div>' +
      '<div class="lp-result-btns">' +
        '<button class="lp-btn" onclick="LessonPractice.retry()">' + LessonPractice._ic('refresh', 16) + 'Làm lại</button>' +
        more +
        LessonPractice._nextStepBtn() +
      '</div>' +
    '</div>';
  },

  moreMix: function() {
    LessonPractice.mixLimit = (LessonPractice.sets.mix || []).length;
    LessonPractice._renderExarea(); // st.idx đang = cap cũ → tiếp tục câu kế
  },

  retry: function() {
    var mode = (LessonPractice.tabState[LessonPractice.tab] || {}).mode;
    LessonPractice.tabState[LessonPractice.tab] = { idx: 0, answers: {}, checked: {}, build: [], reveal: {}, mode: mode };
    LessonPractice._saveMeta(LessonPractice.tab, 0);
    LessonPractice._renderExarea();
  },

  // ── Màn kết quả BÀI (hết bước cuối — §9.2) ───────────
  _finishHTML: function() {
    var prog = LessonPractice._loadProg();
    var rec  = prog[LessonPractice.lessonId] || {};
    var rows = LessonPractice.steps.filter(function(s) {
      return s.key !== 'context' && s.key !== 'doc';
    }).map(function(s) {
      var r = rec[s.key];
      var best = r ? (r.best || 0) : 0;
      return '<div class="lp-fin-row">' +
        '<span class="lp-fin-label">' + LessonPractice._ic(s.icon, 16) + s.label + '</span>' +
        '<span class="lp-fin-track"><span class="lp-fin-fill" style="width:' + best + '%"></span></span>' +
        '<span class="lp-fin-pct">' + (r ? best + '%' : '—') + '</span>' +
      '</div>';
    }).join('');
    var nextId = LessonPractice._nextLessonId();
    return '<div class="lp-result lp-finish">' +
      '<div class="lp-result-emoji">🎓</div>' +
      '<div class="lp-result-score">Hoàn thành Bài ' + LessonPractice.lessonId + '!</div>' +
      '<div class="lp-result-sub">Kết quả tốt nhất từng dạng:</div>' +
      (rows ? '<div class="lp-fin-rows">' + rows + '</div>' : '') +
      '<div class="lp-result-btns">' +
        '<button class="lp-btn" onclick="LessonPractice.openSheet()">' + LessonPractice._ic('list', 16) + 'Về danh sách</button>' +
        (nextId
          ? '<button class="lp-btn lp-btn--primary lp-btn--lg" onclick="LessonPractice.gotoLesson(' + nextId + ')">Bài tiếp theo ' + LessonPractice._ic('arrow-right', 16) + '</button>'
          : '<button class="lp-btn lp-btn--primary" onclick="Router.navigateTo(\'learn\')">Về Học</button>') +
      '</div>' +
    '</div>';
  },

  _nextLessonId: function() {
    var ids = LessonPractice._levelLessonIds();
    var i = ids.indexOf(LessonPractice.lessonId);
    return (i >= 0 && i < ids.length - 1) ? ids[i + 1] : null;
  },

  _levelLessonIds: function() {
    var level = LessonPractice._levelOf(LessonPractice.lessonId);
    return Object.keys(COURSE_DATA).map(Number).filter(function(id) {
      return LessonPractice._levelOf(id) === level;
    }).sort(function(a, b) { return a - b; });
  },

  // ── Audio ────────────────────────────────────────────
  playItem: function() {
    var st = LessonPractice._state();
    var set = LessonPractice._setFor(LessonPractice.tab);
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

  // Highlight dòng đang phát (karaoke-style, DECISION #3) + scroll theo
  _setPlayingLine: function(i) {
    var prev = document.querySelector('.lp-doc-line--playing');
    if (prev) prev.classList.remove('lp-doc-line--playing');
    if (i == null) return;
    var el = document.getElementById('lpDocLine' + i);
    if (el) {
      el.classList.add('lp-doc-line--playing');
      try { el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {}
    }
  },

  playDoc: function(i) {
    var doc = (LessonPractice.sets && LessonPractice.sets.doc) || [];
    var d = doc[i];
    if (!d) return;
    if (LessonPractice._audioAll) LessonPractice._stopAll(); // không chồng lên queue
    LessonPractice._setPlayingLine(i);
    LessonPractice._playDocLine(d, function() { LessonPractice._setPlayingLine(null); });
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
    // Giữ index gốc trong doc để highlight đúng dòng (karaoke, DECISION #3)
    var queue = [];
    doc.forEach(function(d, i) { if (/[一-鿿]/.test(d.text)) queue.push({ d: d, idx: i }); });
    if (!queue.length) return;
    LessonPractice._audioAll = { i: 0, queue: queue };
    var btn = document.getElementById('lpPlayAll');
    if (btn) btn.classList.add('lp-doc-play--on');
    LessonPractice._stepAll();
  },

  _stepAll: function() {
    var s = LessonPractice._audioAll;
    if (!s || s.i >= s.queue.length) { LessonPractice._stopAll(); return; }
    var cur = s.queue[s.i];
    LessonPractice._setPlayingLine(cur.idx);
    LessonPractice._playDocLine(cur.d, function() {
      if (!LessonPractice._audioAll) return;
      LessonPractice._audioAll.i++;
      LessonPractice._stepAll();
    });
  },

  _stopAll: function() {
    LessonPractice._audioAll = null;
    if (LessonPractice._audioEl) { try { LessonPractice._audioEl.pause(); } catch (e) {} LessonPractice._audioEl = null; }
    if (window.speechSynthesis) try { window.speechSynthesis.cancel(); } catch (e) {}
    LessonPractice._setPlayingLine(null);
    var btn = document.getElementById('lpPlayAll');
    if (btn) btn.classList.remove('lp-doc-play--on');
  },

  // ── Sidebar + lessons ────────────────────────────────
  _sidebarHTML: function() {
    return '<aside class="lp-sidebar">' + LessonPractice._lessonListHTML() + '</aside>';
  },

  _lessonListHTML: function() {
    var level = LessonPractice._levelOf(LessonPractice.lessonId);
    var ids = LessonPractice._levelLessonIds();
    var prog = LessonPractice._loadProg();
    var html = '<div class="lp-sidebar-title">Bài học HSK ' + level + '</div>';
    ids.forEach(function(id) {
      var l = COURSE_DATA[id];
      var active = id === LessonPractice.lessonId ? ' lp-lesson-item--active' : '';
      var rec = prog[id] || {};
      var pct = LessonPractice._lessonPct(id, prog);
      // Nhãn resume trên card (§9.2)
      var resume = '';
      if (rec._lastStep && !rec._done) {
        var rl = null;
        LessonPractice.STEP_DEFS.some(function(s) { if (s.key === rec._lastStep) { rl = s.label; return true; } return false; });
        if (rl) resume = '<span class="lp-li-resume">▶ Tiếp tục: ' + rl + '</span>';
      }
      html += '<button class="lp-lesson-item' + active + '" onclick="LessonPractice.gotoLesson(' + id + ')">' +
        '<span class="lp-li-num">' + id + '</span>' +
        '<span class="lp-li-body">' +
          '<span class="lp-li-title">' + LessonPractice._esc(l.title || ('Bài ' + id)) + '</span>' +
          resume +
          (pct > 0 ? '<span class="lp-li-track"><span class="lp-li-fill" style="width:' + pct + '%"></span></span>' : '') +
        '</span>' +
        (pct > 0 ? '<span class="lp-li-pct">' + pct + '%</span>' : '') +
      '</button>';
    });
    return html;
  },

  gotoLesson: function(id) {
    if (id === LessonPractice.lessonId && !LessonPractice.finished) { LessonPractice.closeSheet(); return; }
    LessonPractice._stopAll();
    LessonPractice.closeSheet();
    LessonPractice._gateAndLoad(id);
  },

  // ── Bottom-sheets (danh sách bài · danh sách bước · menu ⋯) ──
  _openBackdrop: function(id, innerHTML) {
    LessonPractice._closeAllSheets();
    var back = document.createElement('div');
    back.className = 'lp-sheet-backdrop';
    back.id = id;
    back.onclick = function(e) { if (e.target === back) LessonPractice._closeAllSheets(); };
    back.innerHTML = '<div class="lp-sheet"><div class="lp-sheet-grip"></div>' + innerHTML + '</div>';
    document.body.appendChild(back);
  },

  _closeAllSheets: function() {
    ['lpSheet', 'lpStepSheet', 'lpMenu'].forEach(function(id) {
      var s = document.getElementById(id);
      if (s && s.parentNode) s.parentNode.removeChild(s);
    });
  },

  openSheet: function() { LessonPractice._openBackdrop('lpSheet', LessonPractice._lessonListHTML()); },
  closeSheet: function() { LessonPractice._closeAllSheets(); },

  // Sheet danh sách bước = tab bar cũ chuyển vào sheet (§9.2) — số câu chỉ hiện ở đây (§9.5)
  openStepSheet: function() {
    var html = '<div class="lp-sidebar-title">Các bước trong bài</div>';
    LessonPractice.steps.forEach(function(s, i) {
      var state = LessonPractice.doneSteps[s.key] ? '<span class="lp-step-state lp-step-state--done">' + LessonPractice._ic('check', 14) + '</span>'
        : (!LessonPractice.finished && i === LessonPractice.stepIdx) ? '<span class="lp-step-state lp-step-state--cur">●</span>'
        : '<span class="lp-step-state">○</span>';
      var n = (s.key === 'context') ? 0 : LessonPractice._tabCount(s.key);
      var count = n > 0 ? '<span class="lp-step-count">' + n + (s.key === 'doc' ? ' câu thoại' : ' câu') + '</span>' : '';
      var active = (!LessonPractice.finished && i === LessonPractice.stepIdx) ? ' lp-step-row--active' : '';
      html += '<button class="lp-step-row' + active + '" onclick="LessonPractice.jumpStep(' + i + ')">' +
        state +
        '<span class="lp-step-name">Bước ' + (i + 1) + ' · ' + s.label + '</span>' +
        count +
      '</button>';
    });
    LessonPractice._openBackdrop('lpStepSheet', html);
  },
  closeStepSheet: function() { LessonPractice._closeAllSheets(); },

  // Menu ⋯ mobile (§9.3): Nghe toàn bộ · Từ vựng · Danh sách bài
  openMenu: function() {
    var docN = (LessonPractice.sets.doc || []).length;
    var vlen = (LessonPractice.lesson.vocab || []).length;
    var html = '';
    if (docN > 0) html += '<button class="lp-step-row" onclick="LessonPractice._closeAllSheets();LessonPractice.playAll()">' + LessonPractice._ic('volume', 18) + '<span class="lp-step-name">Nghe toàn bộ hội thoại</span></button>';
    html += '<button class="lp-step-row" onclick="LessonPractice._closeAllSheets();LessonPractice.openVocab()">' + LessonPractice._ic('book-open', 18) + '<span class="lp-step-name">Từ vựng (' + vlen + ')</span></button>';
    html += '<button class="lp-step-row" onclick="LessonPractice.openSheet()">' + LessonPractice._ic('list', 18) + '<span class="lp-step-name">Danh sách bài</span></button>';
    LessonPractice._openBackdrop('lpMenu', html);
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
    if (document.getElementById('lpVocab') || document.getElementById('lpSheet') ||
        document.getElementById('lpStepSheet') || document.getElementById('lpMenu')) return;
    if (LessonPractice.finished) return;

    var tab = LessonPractice.tab;
    if (tab === 'context') {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (LessonPractice._resume) LessonPractice.resumeGo(); else LessonPractice.nextStep();
      }
      return;
    }
    if (tab === 'doc') {
      if (e.key === 'Enter') { e.preventDefault(); LessonPractice.nextStep(); }
      return;
    }

    var st = LessonPractice._state();
    var set = LessonPractice._setFor(tab);
    var item = set[st.idx];
    if (!item) { // màn mini-result → Enter = Bước tiếp theo (primary)
      if (e.key === 'Enter') { e.preventDefault(); LessonPractice.nextStep(); }
      return;
    }
    var checked = !!st.checked[st.idx];

    // TID-3: Ctrl+Space mở dần từng từ (mode che từ)
    if (e.ctrlKey && e.code === 'Space' && LessonPractice._maskOn() && item.type === 'translate' && !checked) {
      e.preventDefault();
      LessonPractice.revealNext();
      return;
    }
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
  // Record bài: { tabKey:{done,total,best}, _steps:{key:1}, _lastStep, _lastIdx, _done }
  _loadProg: function() {
    try { return JSON.parse(localStorage.getItem('lesson_practice_v1') || '{}'); } catch (e) { return {}; }
  },

  _saveProg: function(all) {
    try { localStorage.setItem('lesson_practice_v1', JSON.stringify(all)); } catch (e) {}
  },

  _saveResult: function(tab, done, total) {
    var all = LessonPractice._loadProg();
    var id = LessonPractice.lessonId;
    all[id] = all[id] || {};
    var pct = total ? Math.round(done / total * 100) : 0;
    var prev = all[id][tab] || {};
    all[id][tab] = { done: done, total: total, best: Math.max(prev.best || 0, pct) };
    all[id]._steps = LessonPractice._stepsCopy();
    LessonPractice._saveProg(all);
  },

  // lastStep + vị trí câu để resume (§9.2). extra.done = hoàn thành bài.
  _saveMeta: function(lastStep, lastIdx, extra) {
    var all = LessonPractice._loadProg();
    var id = LessonPractice.lessonId;
    all[id] = all[id] || {};
    all[id]._lastStep = lastStep || null;
    all[id]._lastIdx  = lastIdx | 0;
    all[id]._steps    = LessonPractice._stepsCopy();
    if (extra && extra.done) all[id]._done = 1;
    LessonPractice._saveProg(all);
  },

  _stepsCopy: function() {
    var o = {};
    Object.keys(LessonPractice.doneSteps).forEach(function(k) { o[k] = 1; });
    return o;
  },

  // % luyện tập của 1 bài = trung bình best các bước bài tập (bỏ doc/context/_meta)
  _lessonPct: function(id, prog) {
    var rec = prog[id];
    if (!rec) return 0;
    var sum = 0, cnt = 0;
    Object.keys(rec).forEach(function(k) {
      if (k === 'doc' || k === 'context' || k.charAt(0) === '_') return;
      sum += rec[k].best || 0; cnt++;
    });
    return cnt ? Math.round(sum / cnt) : 0;
  },

  // ── Empty / gate / missing ───────────────────────────
  _emptyHTML: function() {
    return '<div class="lp-empty">' +
      '<img class="lp-empty-img" src="assets/mascot/be-rong-book.webp" alt="" onerror="this.style.display=\'none\'">' +
      '<div class="lp-empty-title">Bài này chưa có dạng bài tập này</div>' +
      '<div class="lp-empty-sub">Bấm "Bước tiếp theo" hoặc chọn bước khác trong danh sách.</div>' +
      '<div class="lp-result-btns" style="margin-top:16px">' + LessonPractice._nextStepBtn() + '</div>' +
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
      '<div class="lp-empty-sub">Vào tab Học → chọn một bài Truyện Mai rồi bấm "Luyện tập bài này".</div>' +
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
