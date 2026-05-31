// ═══════════════════════════════════════════════════════
// COURSE.JS — Lesson Player (Phase P — Truyện Mai)
// Entry: Course.init() called by router after fragment inject
// Requires: COURSE_DATA, srsData, loadSRS, saveSRS,
//           Gamification.addXP, Router.navigateTo
// ═══════════════════════════════════════════════════════

// ── Visual-novel cast registry ──────────────────────────
var VN_CHARACTERS = {
  narrator: { name: 'Người dẫn', role: '',           emoji: '📖', color: '#F59E0B', img: '',                              pitch: 1,    rate: 0.9  },
  laoli:    { name: '李老师',    role: 'Giáo viên',  emoji: '👨‍🏫', color: '#1F2937', img: 'assets/mai/cast/laoli.webp',    pitch: 0.7,  rate: 0.85 },
  mai:      { name: 'Mai',       role: 'Học sinh',   emoji: '👧',  color: '#DC2626', img: '',                              pitch: 1.25, rate: 0.95 },
  xiaomei:  { name: '小美',      role: 'Bạn học',    emoji: '👩',  color: '#10B981', img: 'assets/mai/cast/xiaomei.webp',  pitch: 1.4,  rate: 1.0  },
  class:    { name: 'Cả lớp',    role: '',           emoji: '👥',  color: '#6B7280', img: '',                              pitch: 1,    rate: 1.0  }
};

// ── Chapter definitions for HSK 1 path ──────────────────
var COURSE_CHAPTERS = [
  { label: 'Câu chuyện chính',    from: 1,  to: 12 },
  { label: 'Củng cố từ vựng',     from: 13, to: 21 },
  { label: 'Đọc thêm',            from: 22, to: 30 },
  { label: 'Hành động hằng ngày', from: 31, to: 46 }
];

var Course = {

  // ── State ──────────────────────────────────────────
  lessonId:          null,
  lesson:            null,
  step:              0,      // index into lesson.steps[]
  phase:             'intro', // intro|dialogue|checkpoint|vocab|workbook|complete
  difficulty:        'normal',
  checkpointAnswers: {},
  workbookAnswers:   {},
  workbookScore:     0,
  _srsAdded:         false,
  _pendingId:        null,   // set before Router.navigateTo('course') for in-app nav
  _showPinyin:       true,   // VN pinyin toggle (persists across steps)
  _showVi:           true,   // VN nghĩa-Việt toggle (persists across steps)

  // ── Entry point ─────────────────────────────────────
  init: function() {
    var urlId = new URLSearchParams(location.search).get('id');
    var id = Course._pendingId || (urlId ? parseInt(urlId, 10) : null);
    Course._pendingId = null;

    if (!id) {
      Course.renderList();
      return;
    }
    if (typeof isDebtBlocked === 'function' && isDebtBlocked()) {
      Course._renderDebtWarning(id);
      return;
    }
    Course.loadLesson(id);
  },

  // ── Lesson list view (Duolingo-style path) ────────────
  renderList: function() {
    var progress = JSON.parse(localStorage.getItem('hsk_course_progress') || '{}');
    var ids = (typeof COURSE_DATA !== 'undefined')
      ? Object.keys(COURSE_DATA).map(Number).sort(function(a, b) { return a - b; })
      : [];
    var totalLessons = ids.length;
    var completedCount = 0;
    var nextId = null;

    // Find next lesson (first incomplete) and count completed
    for (var i = 0; i < ids.length; i++) {
      var id = ids[i];
      if (progress[id] && progress[id].completed) {
        completedCount++;
      } else if (nextId === null) {
        nextId = id;
      }
    }

    var html = '<div class="cs-header">' +
      '<button class="cs-back" onclick="Course._goBack()">← Quay lại</button>' +
      '<span class="cs-lesson-num">Truyện Mai — HSK 1</span>' +
      '<span class="cs-path-progress">' + completedCount + '/' + totalLessons + ' bài</span>' +
    '</div>';

    html += '<div class="cs-path">';

    // Hero: "Bước tiếp theo" or completion
    if (nextId !== null) {
      var nextLesson = COURSE_DATA[nextId];
      var isInProgress = progress[nextId] && !progress[nextId].completed;
      html += '<div class="cs-path-hero">' +
        '<div class="cs-hero-label">' + (isInProgress ? '▶ Đang học dở' : '📍 Bước tiếp theo') + '</div>' +
        '<div class="cs-hero-title">Bài ' + nextId + ' — ' + escapeHtml(nextLesson.title) + '</div>' +
        '<div class="cs-hero-context">' + escapeHtml(nextLesson.context) + '</div>' +
        '<button class="cs-hero-btn" onclick="Course.loadLesson(' + nextId + ')">' +
          (isInProgress ? '▶ Học tiếp' : '▶ Bắt đầu') +
        '</button>' +
      '</div>';
    } else {
      html += '<div class="cs-path-hero cs-path-hero--done">' +
        '<div class="cs-hero-label">🎉 Hoàn thành!</div>' +
        '<div class="cs-hero-title">Bạn đã học xong HSK 1</div>' +
        '<div class="cs-hero-context">Tuyệt vời! Tiếp tục ôn tập hoặc chờ HSK 2.</div>' +
      '</div>';
    }

    // Chapters with nodes
    for (var ci = 0; ci < COURSE_CHAPTERS.length; ci++) {
      var chapter = COURSE_CHAPTERS[ci];
      var chapterIds = [];
      var chapterDone = 0;

      // Collect lessons in this chapter
      for (var j = 0; j < ids.length; j++) {
        var lid = ids[j];
        if (lid >= chapter.from && lid <= chapter.to) {
          chapterIds.push(lid);
          if (progress[lid] && progress[lid].completed) chapterDone++;
        }
      }

      if (chapterIds.length === 0) continue;

      var chapterTotal = chapterIds.length;
      var chapterPct = Math.round(chapterDone / chapterTotal * 100);

      html += '<div class="cs-chapter">' +
        '<div class="cs-chapter-header">' +
          '<span class="cs-chapter-label">Chương ' + (ci + 1) + '</span>' +
          '<span class="cs-chapter-title">' + escapeHtml(chapter.label) + '</span>' +
          '<span class="cs-chapter-count">' + chapterDone + '/' + chapterTotal + '</span>' +
        '</div>' +
        '<div class="cs-chapter-bar"><div class="cs-chapter-fill" style="width:' + chapterPct + '%"></div></div>' +
        '<div class="cs-nodes">';

      // Render nodes
      for (var k = 0; k < chapterIds.length; k++) {
        var nid = chapterIds[k];
        var lesson = COURSE_DATA[nid];
        var prog = progress[nid];
        var isDone = prog && prog.completed;
        var isCurrent = (nid === nextId);
        var isLocked = !isDone && !isCurrent && nextId !== null && nid > nextId;

        var nodeClass = 'cs-node';
        var nodeIcon = nid;
        if (isDone) {
          nodeClass += ' cs-node--done';
          nodeIcon = '✓';
        } else if (isCurrent) {
          nodeClass += ' cs-node--current';
        } else if (isLocked) {
          nodeClass += ' cs-node--locked';
        }

        html += '<button class="' + nodeClass + '" ' +
          'onclick="Course._handleNodeClick(' + nid + ', ' + isLocked + ', ' + (nextId || 0) + ')" ' +
          'title="Bài ' + nid + ': ' + escapeAttr(lesson.title) + '">' +
          '<span class="cs-node-icon">' + nodeIcon + '</span>' +
        '</button>';
      }

      html += '</div></div>'; // .cs-nodes, .cs-chapter
    }

    html += '</div>'; // .cs-path

    Course._getEl().innerHTML = html;
  },

  _handleNodeClick: function(id, isLocked, nextId) {
    if (isLocked && nextId) {
      var ok = confirm('Bài này đang khóa. Nên học Bài ' + nextId + ' trước.\n\nVẫn muốn mở?');
      if (!ok) return;
    }
    Course.loadLesson(id);
  },

  loadLesson: function(id) {
    Course.lessonId   = id;
    Course.step       = 0;
    Course.phase      = 'intro';
    Course.difficulty = 'normal';
    Course.checkpointAnswers = {};
    Course.workbookAnswers   = {};
    Course.workbookScore     = 0;
    Course._srsAdded  = false;
    Course.lesson     = (typeof COURSE_DATA !== 'undefined') ? COURSE_DATA[id] : null;

    if (!Course.lesson) {
      Course._renderComingSoon(id);
      return;
    }
    // Sync URL so refresh / bookmark / "Bài tiếp theo" resume the right lesson.
    // replaceState (not push) → no extra history entry, matches old in-place behavior.
    try { history.replaceState({ page: 'course', id: id }, '', '/course?id=' + id); } catch (e) {}
    Course._loadProgress();
    Course.render();
  },

  // ── Master render dispatcher ────────────────────────
  render: function() {
    var fns = {
      intro:       Course._renderIntro,
      dialogue:    Course._renderDialogue,
      choice:      Course._renderChoiceVN,
      checkpoint:  Course._renderCheckpoint,
      vocab:       Course._renderVocab,
      workbook:    Course._renderWorkbook,
      complete:    Course._renderComplete
    };
    if (fns[Course.phase]) fns[Course.phase]();
  },

  // ── Navigation ──────────────────────────────────────
  next: function() {
    if (Course.phase === 'intro') {
      Course.phase = 'dialogue';
      Course.step  = 0;
      Course._saveProgress();
      Course.render();
      return;
    }
    if (Course.phase === 'dialogue') {
      Course.step++;
      var steps = Course.lesson.steps;
      if (Course.step >= steps.length) {
        Course.phase = 'vocab';
      } else if (steps[Course.step].type === 'checkpoint') {
        Course.phase = 'checkpoint';
        Course.checkpointAnswers = {};
      } else if (steps[Course.step].type === 'choice') {
        Course.phase = 'choice';
      } else {
        Course.phase = 'dialogue';
      }
      Course._saveProgress();
      Course.render();
      return;
    }
    if (Course.phase === 'choice') {
      return;
    }
    if (Course.phase === 'checkpoint') {
      // only advance after all questions answered — handled in _answerCheckpoint
      return;
    }
    if (Course.phase === 'vocab') {
      Course.phase = 'workbook';
      Course._saveProgress();
      Course.render();
      return;
    }
  },

  prev: function() {
    if ((Course.phase === 'dialogue' || Course.phase === 'choice') && Course.step > 0) {
      Course.step--;
      // Skip back over checkpoints and choices
      var s = Course.lesson.steps[Course.step];
      if (s && (s.type === 'checkpoint' || s.type === 'choice')) Course.step--;
      if (Course.step < 0) Course.step = 0;
      Course.phase = 'dialogue';
      Course.render();
    }
  },

  // ── Speaker label ────────────────────────────────────
  _speakerLabel: function(speaker) {
    var map = { mai: 'Mai', laoli: '李老师 (Thầy Lý)', xiaomei: '小美 (Tiểu Mỹ)', class: 'Cả lớp' };
    return map[speaker] || speaker;
  },

  // ── Mai expression image ─────────────────────────────
  _maiImg: function(expression) {
    var valid = ['happy','sad','surprise','curious','focused','confused'];
    var expr  = (expression && valid.indexOf(expression) !== -1) ? expression : 'happy';
    return 'assets/mai/expressions/' + expr + '.webp';
  },

  // ── PHASE: intro ────────────────────────────────────
  _renderIntro: function() {
    var l = Course.lesson;
    var chips = (l.vocabPreview || []).map(function(w) {
      return '<span class="cs-vocab-chip">' + w + '</span>';
    }).join('');

    Course._getEl().innerHTML =
      '<div class="cs-header">' +
        '<button class="cs-back" onclick="Course._goBack()">← Quay lại</button>' +
        '<span class="cs-lesson-num">Bài ' + l.id + '</span>' +
      '</div>' +
      '<div class="cs-intro">' +
        '<div class="cs-intro-scene">' +
          '<img src="' + Course._maiImg('happy') + '" alt="Mai" class="cs-mai-img" onerror="this.src=\'assets/icon-soft.webp\'">' +
        '</div>' +
        '<h2 class="cs-intro-title">' + l.title + '</h2>' +
        '<p class="cs-intro-context">' + l.context + '</p>' +
        '<div class="cs-intro-vocab">' +
          '<div class="cs-intro-vocab-label">Từ vựng sẽ gặp</div>' +
          '<div class="cs-vocab-chips">' + chips + '</div>' +
        '</div>' +
        '<button class="cs-btn-primary cs-start-btn" onclick="Course.next()">▶ Bắt đầu học</button>' +
      '</div>';
  },

  // ── PHASE: dialogue ──────────────────────────────────
  _renderDialogue: function() {
    var l     = Course.lesson;
    var steps = l.steps;
    var s     = steps[Course.step];
    if (!s || s.type !== 'dialogue') { Course.phase = 'vocab'; Course.render(); return; }

    // Dispatch to visual-novel renderer when step has cast data
    if (s.cast && s.cast.length) {
      Course._renderDialogueVN();
      return;
    }

    // ── Legacy single-Mai renderer (steps without cast field) ──
    var dialogueSteps = steps.filter(function(x) { return x.type === 'dialogue'; }).length;
    var dialogueDone  = steps.slice(0, Course.step + 1).filter(function(x) { return x.type === 'dialogue'; }).length;
    var pct           = Math.round((dialogueDone / (dialogueSteps || 1)) * 50);

    var isMai    = (s.speaker === 'mai');
    var expr     = isMai ? s.expression : null;
    var sceneClass = isMai ? '' : (s.speaker === 'laoli' || s.speaker === 'xiaomei') ? ' cs-scene--teacher' : ' cs-scene--class';
    var dotsHTML = isMai
      ? '<div class="cs-speaking-dots"><span></span><span></span><span></span></div>'
      : '';

    Course._getEl().innerHTML =
      '<div class="cs-header">' +
        '<button class="cs-back" onclick="Course._goBack()">← Quay lại</button>' +
        '<span class="cs-lesson-num">Bài ' + l.id + ': ' + l.title + '</span>' +
        '<div class="cs-progress-wrap"><div class="cs-progress-bar" style="width:' + pct + '%"></div></div>' +
      '</div>' +
      '<div class="cs-scene' + sceneClass + '" id="cs-scene-wrap">' +
        '<img src="' + Course._maiImg(expr) + '" alt="Mai" class="cs-mai-scene" id="cs-mai-img" onerror="this.src=\'assets/icon-soft.webp\'">' +
        dotsHTML +
      '</div>' +
      '<div class="cs-dialogue-card" id="cs-dlg-card">' +
        '<div class="cs-speaker">' + Course._speakerLabel(s.speaker) + '</div>' +
        '<div class="cs-text-zh">' + s.text + '</div>' +
        '<div class="cs-text-py">' + s.pinyin + '</div>' +
        '<div class="cs-text-vn">' + s.meaning + '</div>' +
      '</div>' +
      '<div class="cs-controls">' +
        '<button class="cs-btn-icon" id="cs-tts-btn" onclick="Course._tts(\'' + s.text.replace(/'/g, "\\'") + '\')" title="Nghe">🔊</button>' +
        '<button class="cs-btn-secondary" onclick="Course.prev()" ' + (Course.step === 0 ? 'disabled' : '') + '>◄ Trước</button>' +
        '<button class="cs-btn-primary" onclick="Course.next()">Tiếp ►</button>' +
      '</div>';

    requestAnimationFrame(function() {
      var mai = document.getElementById('cs-mai-img');
      var dlg = document.getElementById('cs-dlg-card');
      if (mai) { mai.classList.add('cs-mai-enter'); }
      if (dlg) { dlg.classList.add('cs-enter'); }
    });
  },

  // ── PHASE: dialogue — Visual Novel renderer ───────────
  _renderDialogueVN: function() {
    Course._hideWordPopup();
    var l     = Course.lesson;
    var steps = l.steps;
    var s     = steps[Course.step];

    var dlgTotal = steps.filter(function(x) { return x.type === 'dialogue'; }).length;
    var dlgDone  = steps.slice(0, Course.step + 1).filter(function(x) { return x.type === 'dialogue'; }).length;
    var pct      = Math.round((dlgDone / (dlgTotal || 1)) * 50);

    var isNarrator = (s.speaker === 'narrator');
    var ch = Course._vnChar(s.speaker);

    // Nearest scene tag — look backward
    var sceneText = '📍 Lớp học tiếng Trung';
    var sceneStep = null;
    for (var si = Course.step; si >= 0; si--) {
      if (steps[si] && steps[si].scene) { sceneText = steps[si].scene; sceneStep = steps[si]; break; }
    }
    var bgUrl = Course._sceneBg(sceneStep, sceneText);

    // Cast row HTML
    var CAST_ORDER = ['laoli', 'mai', 'xiaomei'];
    var castHTML;
    if (isNarrator) {
      castHTML = '<div class="cs-vn-narrator-card">' + (s.text || '') + '</div>';
    } else {
      var castKeys = (s.cast || []).slice().sort(function(a, b) {
        return CAST_ORDER.indexOf(a) - CAST_ORDER.indexOf(b);
      });
      castHTML = castKeys.map(function(k) {
        var c      = Course._vnChar(k);
        var active = (k === s.speaker);
        var imgSrc = (k === 'mai') ? Course._maiImg(s.expression) : (c.img || '');
        return '<div class="cs-vn-char ' + (active ? 'active' : 'inactive') + '" style="--char-color:' + c.color + '">' +
          '<div class="cs-vn-avatar">' +
            '<span class="cs-vn-avatar-emoji">' + c.emoji + '</span>' +
            (imgSrc ? '<img src="' + imgSrc + '" alt="" class="cs-vn-avatar-img" onerror="this.style.display=\'none\'">' : '') +
          '</div>' +
          '<div class="cs-vn-char-name">' + c.name.split(/[\s(]/)[0] + '</div>' +
          (c.role ? '<div class="cs-vn-char-role">' + c.role + '</div>' : '') +
        '</div>';
      }).join('');
    }

    // Dialogue box HTML (hidden for narrator steps)
    var dlgHTML = '';
    if (!isNarrator) {
      var pyHTML = (Course._showPinyin !== false && s.pinyin)
        ? '<div class="cs-vn-dlg-pinyin">' + s.pinyin + '</div>' : '';
      dlgHTML =
        '<div class="cs-vn-dlg" id="cs-vn-dlg">' +
          '<div class="cs-vn-dlg-header">' +
            '<div class="cs-vn-dlg-speaker" style="background:' + ch.color + '">' +
              ch.emoji + '&thinsp;' + ch.name +
            '</div>' +
            '<button class="cs-vn-speak-btn" id="cs-vn-speak-btn" onclick="Course._vnTts()" title="Nghe">🔊</button>' +
          '</div>' +
          pyHTML +
          '<div class="cs-vn-dlg-hanzi">' + Course._vnHanziHTML(s.text, s.vocab) + '</div>' +
          (Course._showVi !== false
            ? '<div class="cs-vn-dlg-vi">' + (s.meaning || '') + '</div>'
            : '') +
        '</div>';
    }

    Course._getEl().innerHTML =
      '<div class="cs-header">' +
        '<button class="cs-back" onclick="Course._goBack()">← Quay lại</button>' +
        '<span class="cs-lesson-num">Bài ' + l.id + ': ' + l.title + '</span>' +
        '<button class="cs-vn-py-toggle" onclick="Course._togglePinyin()" title="Bật/tắt pinyin">' +
          (Course._showPinyin !== false ? 'Py✓' : 'Py') +
        '</button>' +
        '<button class="cs-vn-py-toggle" onclick="Course._toggleVi()" title="Bật/tắt nghĩa">' +
          (Course._showVi !== false ? 'Vi✓' : 'Vi') +
        '</button>' +
        '<div class="cs-progress-wrap"><div class="cs-progress-bar" style="width:' + pct + '%"></div></div>' +
      '</div>' +
      '<div class="cs-vn-stage" style="background-image:url(\'' + bgUrl + '\')">' +
        '<div class="cs-vn-scene-tag">' + sceneText + '</div>' +
        '<div class="cs-vn-cast">' + castHTML + '</div>' +
      '</div>' +
      dlgHTML +
      '<div class="cs-controls">' +
        '<button class="cs-btn-secondary" onclick="Course.prev()" ' + (Course.step === 0 ? 'disabled' : '') + '>◄ Trước</button>' +
        '<button class="cs-btn-primary" onclick="Course.next()">Tiếp ►</button>' +
      '</div>';

    // Auto-play TTS after render (narrator included — pre-gen MP3 available)
    setTimeout(function() { Course._vnTts(); }, 150);
  },

  // ── VN: background image resolver ────────────────────
  _sceneBg: function(step, sceneText) {
    // Explicit bg field on step takes priority
    if (step && step.bg) return 'assets/mai/scenes/' + step.bg + '.webp';
    // Keyword fallback from scene text (Vietnamese, accent-insensitive)
    var t = (sceneText || '').toLowerCase()
      .replace(/[àáâãäå]/g,'a').replace(/[èéêë]/g,'e').replace(/[ìíîï]/g,'i')
      .replace(/[òóôõö]/g,'o').replace(/[ùúûü]/g,'u').replace(/[ýÿ]/g,'y')
      .replace(/[đ]/g,'d').replace(/[ă]/g,'a').replace(/[ơ]/g,'o').replace(/[ư]/g,'u');
    if (/ky tuc|phong ngu|ky tuc xa/.test(t))              return 'assets/mai/scenes/dorm-room.webp';
    if (/san truong|khuon vien|cong truong|truoc cong/.test(t)) return 'assets/mai/scenes/campus.webp';
    if (/cang tin|can tin|nha an|bua trua/.test(t))        return 'assets/mai/scenes/cafeteria.webp';
    if (/thu vien/.test(t))                                return 'assets/mai/scenes/library.webp';
    if (/pho|duong|tram xe|cua hang|sieu thi/.test(t))    return 'assets/mai/scenes/street.webp';
    if (/phong khach|nha|gia dinh|o nha/.test(t))         return 'assets/mai/scenes/home.webp';
    if (/kham|benh vien|y te|phong y/.test(t))            return 'assets/mai/scenes/clinic.webp';
    return 'assets/mai/scenes/classroom.webp'; // default
  },

  // ── VN: word-level tap lookup (xem pinyin + nghĩa từng từ) ──
  _vnLookup: null,
  _vnCurWord: null,
  _buildVnLookup: function() {
    if (Course._vnLookup) return Course._vnLookup;
    var m = {};
    if (typeof HSK3_DATA !== 'undefined') {
      for (var lv = 1; lv <= 9; lv++) {
        var arr = HSK3_DATA[lv] || [];
        for (var i = 0; i < arr.length; i++) {
          var w = arr[i];
          if (w && w.h && !m[w.h]) m[w.h] = { p: w.p, v: w.v, e: w.e, level: lv, _word: w };
        }
      }
    }
    Course._vnLookup = m;
    return m;
  },

  _esc: function(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function(c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  },

  // Tách câu Hán thành các từ chạm được; highlight từ trọng tâm (vocab) của bước
  _vnHanziHTML: function(text, focus) {
    if (!text) return '';
    var map = Course._buildVnLookup();
    var foc = {};
    (focus || []).forEach(function(w) { foc[w] = 1; });
    var out = '', i = 0, n = text.length;
    while (i < n) {
      var ch = text[i];
      if (!/[一-鿿]/.test(ch)) {
        out += '<span class="cs-vn-h-skip">' + Course._esc(ch) + '</span>';
        i++; continue;
      }
      var word = ch;
      for (var len = Math.min(4, n - i); len >= 1; len--) {
        if (map[text.substr(i, len)]) { word = text.substr(i, len); break; }
      }
      var cls = 'cs-vn-word' + (map[word] ? ' cs-vn-h-known' : '') + (foc[word] ? ' cs-vn-h-focus' : '');
      out += '<span class="' + cls + '" data-h="' + Course._esc(word) + '" onclick="Course._vnWordTap(this)">' + Course._esc(word) + '</span>';
      i += word.length;
    }
    return out;
  },

  _vnWordTap: function(el) {
    var h = el.getAttribute('data-h');
    var info = Course._buildVnLookup()[h];
    Course._vnCurWord = info ? info._word : { h: h };
    Course._hideWordPopup();

    var pop = document.createElement('div');
    pop.className = 'cs-vn-wordpop';
    pop.id = 'csVnWordpop';
    pop.innerHTML =
      '<div class="cs-vn-wp-head">' +
        '<span class="cs-vn-wp-h">' + Course._esc(h) + '</span>' +
        '<button class="cs-vn-wp-ic" onclick="Course._vnSpeakCur()" title="Nghe">🔊</button>' +
        '<button class="cs-vn-wp-ic" onclick="Course._hideWordPopup()" title="Đóng">✕</button>' +
      '</div>' +
      (info
        ? '<div class="cs-vn-wp-py">' + Course._esc(info.p) + '</div>' +
          '<div class="cs-vn-wp-vi">' + Course._esc(info.v || info.e) + '</div>' +
          '<div class="cs-vn-wp-foot">' +
            '<span class="cs-vn-wp-lv">HSK ' + info.level + '</span>' +
            '<button class="cs-vn-wp-add" onclick="Course._vnAddCur()">+ Kho</button>' +
          '</div>'
        : '<div class="cs-vn-wp-vi">Không có trong từ điển HSK</div>');
    document.body.appendChild(pop);

    var r = el.getBoundingClientRect();
    var W = 220;
    pop.style.left = Math.max(8, Math.min(r.left, window.innerWidth - W - 8)) + 'px';
    pop.style.top  = (window.scrollY + r.bottom + 6) + 'px';

    Course._vnSpeakCur();
    setTimeout(function() { document.addEventListener('click', Course._vnPopOutside, true); }, 0);
  },

  _vnPopOutside: function(e) {
    var pop = document.getElementById('csVnWordpop');
    if (pop && !pop.contains(e.target) && !(e.target.classList && e.target.classList.contains('cs-vn-word'))) {
      Course._hideWordPopup();
    }
  },

  _hideWordPopup: function() {
    var pop = document.getElementById('csVnWordpop');
    if (pop && pop.parentNode) pop.parentNode.removeChild(pop);
    document.removeEventListener('click', Course._vnPopOutside, true);
  },

  _vnSpeakCur: function() {
    var w = Course._vnCurWord;
    if (!w || !w.h) return;
    if (typeof Dictionary !== 'undefined' && Dictionary.playTTS) { Dictionary.playTTS(w.h); return; }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(w.h);
      u.lang = 'zh-CN'; u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  },

  _vnAddCur: function() {
    var w = Course._vnCurWord;
    if (w && w.h && typeof openAddToDeckPopup === 'function') openAddToDeckPopup(w);
    Course._hideWordPopup();
  },

  // ── VN: character lookup ──────────────────────────────
  _vnChar: function(key) {
    return VN_CHARACTERS[key] || { name: key, role: '', emoji: '👤', color: '#6B7280', img: '', pitch: 1, rate: 1 };
  },

  // ── PHASE: choice (active recall) ────────────────────
  _renderChoiceVN: function() {
    Course._hideWordPopup();
    var l     = Course.lesson;
    var steps = l.steps;
    var s     = steps[Course.step];
    if (!s || s.type !== 'choice') { Course.phase = 'dialogue'; Course.step++; Course.render(); return; }

    var dlgTotal = steps.filter(function(x) { return x.type === 'dialogue'; }).length;
    var dlgDone  = steps.slice(0, Course.step + 1).filter(function(x) { return x.type === 'dialogue'; }).length;
    var pct      = Math.round((dlgDone / (dlgTotal || 1)) * 50);

    var sceneText = '📍 Lớp học tiếng Trung';
    var sceneStep = null;
    for (var si = Course.step; si >= 0; si--) {
      if (steps[si] && steps[si].scene) { sceneText = steps[si].scene; sceneStep = steps[si]; break; }
    }
    var bgUrl = Course._sceneBg(sceneStep, sceneText);

    var CAST_ORDER = ['laoli', 'mai', 'xiaomei'];
    var castKeys = (s.cast || []).slice().sort(function(a, b) {
      return CAST_ORDER.indexOf(a) - CAST_ORDER.indexOf(b);
    });
    var castHTML = castKeys.map(function(k) {
      var c      = Course._vnChar(k);
      var active = (k === s.speaker);
      var imgSrc = (k === 'mai') ? Course._maiImg(s.expression) : (c.img || '');
      return '<div class="cs-vn-char ' + (active ? 'active' : 'inactive') + '" style="--char-color:' + c.color + '">' +
        '<div class="cs-vn-avatar">' +
          '<span class="cs-vn-avatar-emoji">' + c.emoji + '</span>' +
          (imgSrc ? '<img src="' + imgSrc + '" alt="" class="cs-vn-avatar-img" onerror="this.style.display=\'none\'">' : '') +
        '</div>' +
        '<div class="cs-vn-char-name">' + c.name.split(/[\s(]/)[0] + '</div>' +
        (c.role ? '<div class="cs-vn-char-role">' + c.role + '</div>' : '') +
      '</div>';
    }).join('');

    // correctIdx: index of the correct option
    var correctIdx = -1;
    for (var i = 0; i < s.options.length; i++) {
      if (s.options[i].correct) { correctIdx = i; break; }
    }

    // State: wrongSet = set of wrong indices tried; solved = correct was chosen
    var stateKey  = 'choice_' + Course.step;
    var wrongSet  = Course.checkpointAnswers[stateKey + '_wrong'] || {};
    var solved    = Course.checkpointAnswers[stateKey + '_solved'] === true;
    var lastWrong = Course.checkpointAnswers[stateKey + '_lastWrong'];

    var optsHTML = s.options.map(function(opt, oi) {
      var state    = '';
      var disabled = '';
      if (solved) {
        // All locked after correct
        disabled = 'disabled';
        if (oi === correctIdx) state = ' is-correct';
        else if (wrongSet[oi]) state = ' is-wrong';
      } else {
        // Only lock wrong ones already tried
        if (wrongSet[oi]) { state = ' is-wrong'; disabled = 'disabled'; }
      }
      var pyHTML = (Course._showPinyin !== false && opt.pinyin)
        ? '<div class="cs-vn-choice-py">' + opt.pinyin + '</div>' : '';
      return '<button class="cs-vn-choice-opt' + state + '" ' + disabled + ' onclick="Course._answerChoice(' + oi + ')">' +
        '<div class="cs-vn-choice-hanzi">' + opt.text + '</div>' +
        pyHTML +
      '</button>';
    }).join('');

    // Show feedback for last wrong attempt or for solved state
    var feedbackHTML = '';
    if (solved) {
      feedbackHTML = '<div class="cs-vn-choice-feedback cs-vn-choice-feedback--ok">' + s.options[correctIdx].feedback + '</div>';
    } else if (lastWrong !== undefined) {
      feedbackHTML = '<div class="cs-vn-choice-feedback">' + s.options[lastWrong].feedback + '</div>';
    }

    Course._getEl().innerHTML =
      '<div class="cs-header">' +
        '<button class="cs-back" onclick="Course._goBack()">← Quay lại</button>' +
        '<span class="cs-lesson-num">Bài ' + l.id + ': ' + l.title + '</span>' +
        '<button class="cs-vn-py-toggle" onclick="Course._togglePinyin()" title="Bật/tắt pinyin">' +
          (Course._showPinyin !== false ? 'Py✓' : 'Py') +
        '</button>' +
        '<button class="cs-vn-py-toggle" onclick="Course._toggleVi()" title="Bật/tắt nghĩa">' +
          (Course._showVi !== false ? 'Vi✓' : 'Vi') +
        '</button>' +
        '<div class="cs-progress-wrap"><div class="cs-progress-bar" style="width:' + pct + '%"></div></div>' +
      '</div>' +
      '<div class="cs-vn-stage" style="background-image:url(\'' + bgUrl + '\')">' +
        '<div class="cs-vn-scene-tag">' + sceneText + '</div>' +
        '<div class="cs-vn-cast">' + castHTML + '</div>' +
      '</div>' +
      '<div class="cs-vn-choice-box">' +
        '<div class="cs-vn-choice-q">' + (s.q || '') + '</div>' +
        '<div class="cs-vn-choice-opts">' + optsHTML + '</div>' +
        feedbackHTML +
      '</div>' +
      '<div class="cs-controls">' +
        '<button class="cs-btn-secondary" onclick="Course.prev()" ' + (Course.step === 0 ? 'disabled' : '') + '>◄ Trước</button>' +
        (solved
          ? '<button class="cs-btn-primary" onclick="Course._continueAfterChoice()">Tiếp ►</button>'
          : '') +
      '</div>';
  },

  _answerChoice: function(idx) {
    var s = Course.lesson.steps[Course.step];
    if (!s || s.type !== 'choice') return;

    var correctIdx = -1;
    for (var i = 0; i < s.options.length; i++) {
      if (s.options[i].correct) { correctIdx = i; break; }
    }

    var stateKey = 'choice_' + Course.step;
    if (Course.checkpointAnswers[stateKey + '_solved']) return; // already done

    if (idx === correctIdx) {
      Course.checkpointAnswers[stateKey + '_solved'] = true;
      // Play TTS for correct answer
      var opt = s.options[idx];
      if (opt.text && window.speechSynthesis) {
        window.speechSynthesis.cancel();
        var u = new SpeechSynthesisUtterance(opt.text);
        u.lang = 'zh-CN'; u.rate = 0.85;
        window.speechSynthesis.speak(u);
      }
    } else {
      // Mark this option as wrong, allow retry on others
      if (!Course.checkpointAnswers[stateKey + '_wrong']) {
        Course.checkpointAnswers[stateKey + '_wrong'] = {};
      }
      Course.checkpointAnswers[stateKey + '_wrong'][idx] = true;
      Course.checkpointAnswers[stateKey + '_lastWrong'] = idx;
    }

    Course.render();
  },

  _continueAfterChoice: function() {
    Course.step++;
    var steps = Course.lesson.steps;
    if (Course.step >= steps.length) {
      Course.phase = 'vocab';
    } else {
      Course.phase = 'dialogue';
    }
    Course._saveProgress();
    Course.render();
  },

  // ── VN: TTS per-character voice ───────────────────────
  // Tries pre-gen MP3 cache first; falls back to Web Speech for non-narrator.
  // Narrator steps with Vietnamese text (no CJK) have no MP3 → silently no-op.
  // Content-stable audio slug — djb2 over UTF-8 of "speaker|text".
  // MUST match scripts/mai-tts-gen.py slug_for() exactly so pre-gen MP3
  // filenames line up. Keying by content (not step index) means inserting
  // choice/checkpoint steps never shifts which file a dialogue plays.
  _audioSlug: function(speaker, text) {
    var bytes = new TextEncoder().encode((speaker || 'narrator') + '|' + text);
    var h = 5381;
    for (var i = 0; i < bytes.length; i++) { h = (h * 33 + bytes[i]) >>> 0; }
    return ('00000000' + h.toString(16)).slice(-8);
  },

  _vnTts: function() {
    var lesson = Course.lesson;
    if (!lesson) return;
    var s = lesson.steps[Course.step];
    if (!s || s.type !== 'dialogue' || !s.text) return;

    var isNarr   = (s.speaker === 'narrator');
    // Narrator lines with Vietnamese-only text have no pre-gen MP3
    // (mirrors the skip rule in scripts/mai-tts-gen.py) — stay silent
    // instead of firing a guaranteed-404 fetch + Web Speech fallback.
    if (isNarr && !/[一-鿿]/.test(s.text)) return;
    var slug     = Course._audioSlug(s.speaker, s.text);
    var src      = 'assets/mai/audio/L' + Course.lessonId + '_' + slug + '.mp3';
    var activeEl = document.querySelector('.cs-vn-char.active');
    var btn      = document.getElementById('cs-vn-speak-btn');

    var cleanup = function() {
      var el = document.querySelector('.cs-vn-char.cs-vn-speaking');
      if (el) el.classList.remove('cs-vn-speaking');
      if (btn) { btn.textContent = '🔊'; btn.style.opacity = ''; }
    };

    var usedFallback = false;
    var speechFallback = function() {
      if (usedFallback) return;
      usedFallback = true;
      // Narrator fallback is silent — avoid reading VN text with a ZH voice
      if (isNarr || !window.speechSynthesis) { cleanup(); return; }
      window.speechSynthesis.cancel();
      var ch = Course._vnChar(s.speaker);
      var u  = new SpeechSynthesisUtterance(s.text);
      u.lang  = 'zh-CN';
      u.pitch = ch.pitch || 1;
      u.rate  = ch.rate  || 0.9;
      var vs = window.speechSynthesis.getVoices().filter(function(v) {
        return /zh|cmn|Chinese|Mandarin/i.test(v.lang + v.name);
      });
      if (vs.length) u.voice = vs[0];
      u.onend = u.onerror = cleanup;
      window.speechSynthesis.speak(u);
    };

    if (activeEl) activeEl.classList.add('cs-vn-speaking');
    if (btn) { btn.textContent = '🔉'; btn.style.opacity = '0.7'; }

    var a = new Audio(src);
    a.onended = cleanup;
    a.onerror = speechFallback;
    a.play().catch(speechFallback);
  },

  // ── VN: pinyin toggle ─────────────────────────────────
  _togglePinyin: function() {
    Course._showPinyin = !Course._showPinyin;
    Course.render();
  },

  _toggleVi: function() {
    Course._showVi = !Course._showVi;
    Course.render();
  },

  // ── PHASE: checkpoint ────────────────────────────────
  _renderCheckpoint: function() {
    var s = Course.lesson.steps[Course.step];
    if (!s || s.type !== 'checkpoint') { Course.phase = 'dialogue'; Course.step++; Course.render(); return; }

    var qs = s.questions.map(function(q, qi) {
      var opts = q.options.map(function(opt, oi) {
        var state = '';
        if (Course.checkpointAnswers[qi] !== undefined) {
          if (oi === q.answer) state = ' cs-opt-correct';
          else if (Course.checkpointAnswers[qi] === oi) state = ' cs-opt-wrong';
        }
        var disabled = Course.checkpointAnswers[qi] !== undefined ? 'disabled' : '';
        return '<button class="cs-opt' + state + '" ' + disabled + ' onclick="Course._answerCheckpoint(' + qi + ',' + oi + ')">' + opt + '</button>';
      }).join('');
      return '<div class="cs-question"><div class="cs-q-text">' + (qi + 1) + '. ' + q.q + '</div><div class="cs-opts">' + opts + '</div></div>';
    }).join('');

    var allAnswered = s.questions.every(function(_, qi) { return Course.checkpointAnswers[qi] !== undefined; });

    Course._getEl().innerHTML =
      '<div class="cs-header">' +
        '<span class="cs-checkpoint-badge">📝 Kiểm tra nhanh</span>' +
      '</div>' +
      '<div class="cs-checkpoint">' +
        '<h3 class="cs-checkpoint-title">Ôn lại vừa học</h3>' +
        qs +
        (allAnswered ? '<button class="cs-btn-primary cs-checkpoint-next" onclick="Course._continueAfterCheckpoint()">Tiếp tục →</button>' : '') +
      '</div>';
  },

  _answerCheckpoint: function(qi, oi) {
    if (Course.checkpointAnswers[qi] !== undefined) return;
    Course.checkpointAnswers[qi] = oi;
    Course.render();
  },

  _continueAfterCheckpoint: function() {
    Course.step++;
    var steps = Course.lesson.steps;
    if (Course.step >= steps.length) {
      Course.phase = 'vocab';
    } else {
      Course.phase = 'dialogue';
    }
    Course._saveProgress();
    Course.render();
  },

  // ── PHASE: vocab review ──────────────────────────────
  _renderVocab: function() {
    var l     = Course.lesson;
    var vocab = l.vocab || [];

    var cards = vocab.map(function(w) {
      return '<div class="cs-vocab-card">' +
        '<div class="cs-vc-hanzi">' + w.h + '</div>' +
        '<div class="cs-vc-pinyin">' + w.p + '</div>' +
        '<div class="cs-vc-meaning">' + w.v + '</div>' +
      '</div>';
    }).join('');

    Course._getEl().innerHTML =
      '<div class="cs-header">' +
        '<button class="cs-back" onclick="Course._goBack()">← Quay lại</button>' +
        '<span class="cs-lesson-num">Từ vựng bài ' + l.id + '</span>' +
        '<div class="cs-progress-wrap"><div class="cs-progress-bar" style="width:65%"></div></div>' +
      '</div>' +
      '<div class="cs-vocab-review">' +
        '<h3 class="cs-section-title">📚 ' + vocab.length + ' từ mới trong bài</h3>' +
        '<div class="cs-vocab-grid">' + cards + '</div>' +
        '<button class="cs-btn-primary cs-vocab-next" onclick="Course.next()">Tiếp: Làm bài tập →</button>' +
      '</div>';
  },

  // ── PHASE: workbook ──────────────────────────────────
  _renderWorkbook: function() {
    var l  = Course.lesson;
    var wb = l.workbook[Course.difficulty] || [];

    var tabs = ['easy','normal','hard'].map(function(d) {
      var labels = { easy: 'Nhẹ', normal: 'Chuẩn', hard: 'Nặng' };
      var active = d === Course.difficulty ? ' cs-diff-active' : '';
      return '<button class="cs-diff-tab' + active + '" onclick="Course.setDifficulty(\'' + d + '\')">' + labels[d] + '</button>';
    }).join('');

    var exercises = wb.map(function(ex, ei) {
      return Course._renderExercise(ex, ei);
    }).join('');

    var doneCount = Object.keys(Course.workbookAnswers).length;
    var showCheck = doneCount === wb.length && wb.length > 0;

    Course._getEl().innerHTML =
      '<div class="cs-header">' +
        '<button class="cs-back" onclick="Course._goBack()">← Quay lại</button>' +
        '<span class="cs-lesson-num">Bài tập — Bài ' + l.id + '</span>' +
        '<div class="cs-progress-wrap"><div class="cs-progress-bar" style="width:80%"></div></div>' +
      '</div>' +
      '<div class="cs-workbook">' +
        '<div class="cs-diff-tabs">' + tabs + '</div>' +
        '<div class="cs-exercises" id="csExercises">' + exercises + '</div>' +
        (showCheck ? '<button class="cs-btn-primary cs-wb-submit" onclick="Course._submitWorkbook()">Nộp bài ✓</button>' : '') +
      '</div>';
  },

  _renderExercise: function(ex, ei) {
    var answered = Course.workbookAnswers[ei];

    if (ex.type === 'fill') {
      var opts = ex.options.map(function(opt) {
        var state = '';
        if (answered !== undefined) {
          if (opt === ex.answer) state = ' cs-opt-correct';
          else if (opt === answered) state = ' cs-opt-wrong';
        }
        var disabled = answered !== undefined ? 'disabled' : '';
        return '<button class="cs-opt cs-opt-sm' + state + '" ' + disabled + ' onclick="Course._answerWorkbook(' + ei + ',\'' + opt.replace(/'/g, "\\'") + '\')">' + opt + '</button>';
      }).join('');

      var parts = ex.sentence.split('___');
      var filled = answered ? '<span class="cs-blank-filled' + (answered === ex.answer ? ' cs-correct' : ' cs-wrong') + '">' + answered + '</span>' : '<span class="cs-blank">___</span>';
      var sentence = parts[0] + filled + (parts[1] || '');

      return '<div class="cs-exercise cs-fill">' +
        '<div class="cs-ex-num">' + (ei + 1) + '</div>' +
        '<div class="cs-ex-sentence">' + sentence + '</div>' +
        '<div class="cs-opts">' + opts + '</div>' +
      '</div>';
    }

    if (ex.type === 'order') {
      var shuffled = Course._shuffle(ex.words.slice(), ei);
      var wordBtns = shuffled.map(function(w) {
        return '<button class="cs-word-btn" onclick="Course._selectOrderWord(this, ' + ei + ')" data-word="' + w + '">' + w + '</button>';
      }).join('');
      var resultClass = answered !== undefined ? (answered === ex.answer ? ' cs-correct' : ' cs-wrong') : '';
      return '<div class="cs-exercise cs-order" id="csOrder' + ei + '">' +
        '<div class="cs-ex-num">' + (ei + 1) + '</div>' +
        '<div class="cs-ex-label">Sắp xếp thành câu đúng:</div>' +
        '<div class="cs-word-btns">' + wordBtns + '</div>' +
        '<div class="cs-order-result' + resultClass + '" id="csOrderResult' + ei + '">' + (answered || '') + '</div>' +
        (answered === undefined ? '<button class="cs-btn-sm" onclick="Course._confirmOrder(' + ei + ')">Xác nhận</button>' : '') +
      '</div>';
    }

    if (ex.type === 'translate') {
      var checked = answered !== undefined;
      return '<div class="cs-exercise cs-translate">' +
        '<div class="cs-ex-num">' + (ei + 1) + '</div>' +
        '<div class="cs-ex-label">Dịch sang tiếng Trung:</div>' +
        '<div class="cs-ex-prompt">' + ex.prompt + '</div>' +
        '<input class="cs-translate-input" id="csTransInput' + ei + '" placeholder="Nhập câu tiếng Trung..." ' + (checked ? 'disabled value="' + (answered || '').replace(/"/g, '&quot;') + '"' : '') + '>' +
        (checked ? '<div class="cs-translate-ans">Gợi ý đáp án: <strong>' + ex.answer + '</strong></div>' : '<button class="cs-btn-sm" onclick="Course._submitTranslate(' + ei + ')">Kiểm tra</button>') +
      '</div>';
    }

    return '';
  },

  _shuffle: function(arr, seed) {
    // deterministic shuffle by exercise index so it's consistent on re-render
    for (var i = arr.length - 1; i > 0; i--) {
      var j = (seed * 7 + i * 3) % (i + 1);
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  },

  _answerWorkbook: function(ei, val) {
    if (Course.workbookAnswers[ei] !== undefined) return;
    Course.workbookAnswers[ei] = val;
    Course._rerenderWorkbook();
  },

  _selectOrderWord: function(btn, ei) {
    btn.classList.toggle('cs-word-selected');
  },

  _confirmOrder: function(ei) {
    var container = document.getElementById('csOrder' + ei);
    if (!container) return;
    var selected = Array.from(container.querySelectorAll('.cs-word-btn.cs-word-selected')).map(function(b) { return b.dataset.word; });
    // if none selected, take all in order
    if (!selected.length) {
      selected = Array.from(container.querySelectorAll('.cs-word-btn')).map(function(b) { return b.dataset.word; });
    }
    Course.workbookAnswers[ei] = selected.join('');
    Course._rerenderWorkbook();
  },

  _submitTranslate: function(ei) {
    var input = document.getElementById('csTransInput' + ei);
    var val   = input ? input.value.trim() : '';
    Course.workbookAnswers[ei] = val || '(bỏ trống)';
    Course._rerenderWorkbook();
  },

  _rerenderWorkbook: function() {
    // Re-render workbook without losing scroll position
    var el = document.getElementById('csExercises');
    if (!el) { Course._renderWorkbook(); return; }
    var wb = Course.lesson.workbook[Course.difficulty] || [];
    el.innerHTML = wb.map(function(ex, ei) { return Course._renderExercise(ex, ei); }).join('');

    var doneCount = Object.keys(Course.workbookAnswers).length;
    if (doneCount === wb.length && wb.length > 0) {
      var existing = document.querySelector('.cs-wb-submit');
      if (!existing) {
        var btn = document.createElement('button');
        btn.className = 'cs-btn-primary cs-wb-submit';
        btn.textContent = 'Nộp bài ✓';
        btn.onclick = Course._submitWorkbook;
        el.parentNode.appendChild(btn);
      }
    }
  },

  _submitWorkbook: function() {
    var wb      = Course.lesson.workbook[Course.difficulty] || [];
    var correct = 0;
    wb.forEach(function(ex, ei) {
      var ans = Course.workbookAnswers[ei];
      if (ex.type === 'fill' || ex.type === 'order') {
        if (ans === ex.answer) correct++;
      } else if (ex.type === 'translate') {
        correct++;  // translate auto-pass (self-check)
      }
    });
    Course.workbookScore = wb.length > 0 ? Math.round((correct / wb.length) * 100) : 0;

    if (Course.workbookScore < 70) {
      Course._showRetryOverlay(Course.workbookScore);
      return;
    }
    Course.phase = 'complete';
    Course._saveProgress();
    Course.render();
  },

  _showRetryOverlay: function(score) {
    var overlay = document.createElement('div');
    overlay.className = 'cs-overlay';
    overlay.innerHTML =
      '<div class="cs-overlay-box">' +
        '<div class="cs-overlay-icon">😅</div>' +
        '<div class="cs-overlay-title">Gần đúng rồi! ' + score + '%</div>' +
        '<div class="cs-overlay-msg">Cần đạt 70% để hoàn thành bài. Xem lại câu sai và thử lại nhé!</div>' +
        '<button class="cs-btn-primary" onclick="this.closest(\'.cs-overlay\').remove();Course.workbookAnswers={};Course._rerenderWorkbook()">Làm lại</button>' +
      '</div>';
    document.getElementById('csCoursePage').appendChild(overlay);
  },

  // ── PHASE: complete ──────────────────────────────────
  _renderComplete: function() {
    var l      = Course.lesson;
    var xpGain = 50 + (Course.workbookScore >= 90 ? 20 : 0);

    Course._addVocabToSRS();
    if (typeof Gamification !== 'undefined') Gamification.addXP(xpGain);

    var nextId = l.id + 1;
    var hasNext = typeof COURSE_DATA !== 'undefined' && !!COURSE_DATA[nextId];

    Course._getEl().innerHTML =
      '<div class="cs-complete">' +
        '<div class="cs-confetti" aria-hidden="true">' + Course._confettiHTML() + '</div>' +
        '<img src="' + Course._maiImg('happy') + '" alt="Mai" class="cs-mai-complete" onerror="this.src=\'assets/icon-soft.webp\'">' +
        '<h2 class="cs-complete-title">Hoàn thành Bài ' + l.id + '! 🎉</h2>' +
        '<div class="cs-xp-badge">+' + xpGain + ' XP</div>' +
        '<p class="cs-complete-msg">Bạn đã học được ' + (l.vocab || []).length + ' từ mới. Từ đã được thêm vào SRS để ôn luyện.</p>' +
        '<div class="cs-complete-btns">' +
          (hasNext ? '<button class="cs-btn-primary" onclick="Course.loadLesson(' + nextId + ')">Bài tiếp theo →</button>' : '') +
          '<button class="cs-btn-secondary" onclick="Router.navigateTo(\'learn\')">← Về Học</button>' +
        '</div>' +
      '</div>';
  },

  _confettiHTML: function() {
    var colors = ['#DC2626','#F59E0B','#10B981','#3B82F6','#8B5CF6'];
    var pieces = '';
    for (var i = 0; i < 20; i++) {
      var c = colors[i % colors.length];
      var left = (i * 5) + '%';
      var delay = (i * 0.15) + 's';
      pieces += '<span style="background:' + c + ';left:' + left + ';animation-delay:' + delay + '"></span>';
    }
    return pieces;
  },

  // ── SRS integration ──────────────────────────────────
  _addVocabToSRS: function() {
    if (Course._srsAdded) return;
    Course._srsAdded = true;

    if (typeof srsData === 'undefined' || typeof saveSRS !== 'function') return;
    if (typeof loadSRS === 'function') loadSRS();

    var today    = new Date().toISOString().split('T')[0];
    var lessonId = Course.lessonId;
    var steps    = Course.lesson.steps || [];

    steps.forEach(function(s) {
      if (s.type !== 'dialogue' || !s.vocab || !s.vocab.length) return;
      s.vocab.forEach(function(hanzi) {
        if (!srsData[hanzi]) {
          srsData[hanzi] = {
            interval:        0,
            ease:            2.5,
            dueDate:         today,
            reps:            0,
            lapses:          0,
            lastReview:      null,
            source:          'story',
            source_lesson:   lessonId,
            source_sentence: s.text
          };
        }
      });
    });
    saveSRS();
  },

  // ── TTS ──────────────────────────────────────────────
  _tts: function(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    var utt  = new SpeechSynthesisUtterance(text);
    utt.lang = 'zh-CN';
    utt.rate = 0.85;

    // Speaking animation on Mai
    var mai = document.getElementById('cs-mai-img');
    var btn = document.getElementById('cs-tts-btn');
    if (mai) { mai.classList.add('cs-mai-speaking'); mai.classList.remove('cs-mai-enter'); }
    if (btn) { btn.textContent = '🔉'; btn.style.opacity = '0.7'; }

    utt.onend = utt.onerror = function() {
      if (mai) { mai.classList.remove('cs-mai-speaking'); }
      if (btn) { btn.textContent = '🔊'; btn.style.opacity = ''; }
    };

    window.speechSynthesis.speak(utt);
  },

  // ── Difficulty ───────────────────────────────────────
  setDifficulty: function(d) {
    Course.difficulty        = d;
    Course.workbookAnswers   = {};
    Course.workbookScore     = 0;
    Course._renderWorkbook();
  },

  // ── Special screens ──────────────────────────────────
  _renderDebtWarning: function(pendingId) {
    var dueN = (typeof getDueCount === 'function') ? getDueCount() : '?';
    Course._getEl().innerHTML =
      '<div class="cs-debt-warning">' +
        '<div class="cs-debt-icon">💪</div>' +
        '<h3>Bạn có ' + dueN + ' từ đang chờ ôn!</h3>' +
        '<p>Ôn xong rồi học bài mới để nhớ lâu hơn nhé.</p>' +
        '<div class="cs-debt-btns">' +
          '<button class="cs-btn-primary" onclick="Router.navigateTo(\'practice\')">Ôn ngay</button>' +
          '<button class="cs-btn-secondary" onclick="Course._pendingId=' + pendingId + ';Course.loadLesson(' + pendingId + ')">Vẫn học bài mới</button>' +
        '</div>' +
      '</div>';
  },

  _renderComingSoon: function(id) {
    Course._getEl().innerHTML =
      '<div class="cs-coming-soon">' +
        '<div class="cs-coming-icon">📝</div>' +
        '<h3>Bài ' + id + ' đang được biên soạn</h3>' +
        '<p>Sắp ra mắt! Hiện tại bạn có thể học Bài 1 → 12.</p>' +
        '<button class="cs-btn-primary" onclick="Router.navigateTo(\'learn\')">← Về Học</button>' +
      '</div>';
  },

  // ── Progress persistence ─────────────────────────────
  _saveProgress: function() {
    var key = 'hsk_course_progress';
    var all = JSON.parse(localStorage.getItem(key) || '{}');
    all[Course.lessonId] = {
      step:       Course.step,
      phase:      Course.phase,
      difficulty: Course.difficulty,
      completed:  Course.phase === 'complete'
    };
    localStorage.setItem(key, JSON.stringify(all));
  },

  _loadProgress: function() {
    var key  = 'hsk_course_progress';
    var all  = JSON.parse(localStorage.getItem(key) || '{}');
    var prog = all[Course.lessonId];
    if (!prog) return;
    if (prog.completed) return; // restart on revisit
    Course.step       = prog.step       || 0;
    Course.phase      = prog.phase      || 'intro';
    Course.difficulty = prog.difficulty || 'normal';
  },

  // ── Helpers ──────────────────────────────────────────
  _getEl: function() {
    return document.getElementById('csCoursePage') || document.getElementById('content');
  },

  _goBack: function() {
    window.speechSynthesis && window.speechSynthesis.cancel();
    Router.navigateTo('learn');
  }
};
