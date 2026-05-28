// ═══════════════════════════════════════════════════════
// COURSE.JS — Lesson Player (Phase P — Truyện Mai)
// Entry: Course.init() called by router after fragment inject
// Requires: COURSE_DATA, srsData, loadSRS, saveSRS,
//           Gamification.addXP, Router.navigateTo
// ═══════════════════════════════════════════════════════

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

  // ── Entry point ─────────────────────────────────────
  init: function() {
    var id = Course._pendingId || parseInt(new URLSearchParams(location.search).get('id') || '1', 10);
    Course._pendingId = null;

    if (typeof isDebtBlocked === 'function' && isDebtBlocked()) {
      Course._renderDebtWarning(id);
      return;
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
    Course._loadProgress();
    Course.render();
  },

  // ── Master render dispatcher ────────────────────────
  render: function() {
    var fns = {
      intro:       Course._renderIntro,
      dialogue:    Course._renderDialogue,
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
      } else {
        Course.phase = 'dialogue';
      }
      Course._saveProgress();
      Course.render();
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
    if (Course.phase === 'dialogue' && Course.step > 0) {
      Course.step--;
      // Skip back over checkpoints
      var s = Course.lesson.steps[Course.step];
      if (s && s.type === 'checkpoint') Course.step--;
      if (Course.step < 0) Course.step = 0;
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

    // Count only dialogue steps for progress
    var dialogueSteps = steps.filter(function(x) { return x.type === 'dialogue'; }).length;
    var dialogueDone  = steps.slice(0, Course.step + 1).filter(function(x) { return x.type === 'dialogue'; }).length;
    var pct           = Math.round((dialogueDone / (dialogueSteps || 1)) * 50); // dialogue = 0-50%

    var isMai = (s.speaker === 'mai');
    var expr  = isMai ? s.expression : null;

    Course._getEl().innerHTML =
      '<div class="cs-header">' +
        '<button class="cs-back" onclick="Course._goBack()">← Quay lại</button>' +
        '<span class="cs-lesson-num">Bài ' + l.id + ': ' + l.title + '</span>' +
        '<div class="cs-progress-wrap"><div class="cs-progress-bar" style="width:' + pct + '%"></div></div>' +
      '</div>' +
      '<div class="cs-scene">' +
        '<img src="' + Course._maiImg(expr) + '" alt="Mai" class="cs-mai-scene" onerror="this.src=\'assets/icon-soft.webp\'">' +
      '</div>' +
      '<div class="cs-dialogue-card">' +
        '<div class="cs-speaker">' + Course._speakerLabel(s.speaker) + '</div>' +
        '<div class="cs-text-zh">' + s.text + '</div>' +
        '<div class="cs-text-py">' + s.pinyin + '</div>' +
        '<div class="cs-text-vn">' + s.meaning + '</div>' +
      '</div>' +
      '<div class="cs-controls">' +
        '<button class="cs-btn-icon" onclick="Course._tts(\'' + s.text.replace(/'/g, "\\'") + '\')" title="Nghe">🔊</button>' +
        '<button class="cs-btn-secondary" onclick="Course.prev()" ' + (Course.step === 0 ? 'disabled' : '') + '>◄ Trước</button>' +
        '<button class="cs-btn-primary" onclick="Course.next()">Tiếp ►</button>' +
      '</div>';
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
        '<p>Sắp ra mắt! Hiện tại bạn có thể học Bài 1 → 3.</p>' +
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
