// ═══════════════════════════════════════════════════════
// MOCK-EXAM.JS — Phase O3: HSK Mock Exam Simulator
// Reuses HSK3_DATA vocab + Dictionary.playTTS for audio
// ═══════════════════════════════════════════════════════

var MockExam = (function() {

  // Exam configuration per HSK level (simplified vocab MCQ format)
  var EXAM_CONFIG = {
    1: { listen: 20, read: 20, totalMin: 20, label: 'Sơ cấp 1' },
    2: { listen: 25, read: 25, totalMin: 24, label: 'Sơ cấp 2' },
    3: { listen: 30, read: 30, totalMin: 30, label: 'Trung cấp 1' },
    4: { listen: 35, read: 35, totalMin: 35, label: 'Trung cấp 2' },
    5: { listen: 40, read: 40, totalMin: 40, label: 'Cao cấp 1' },
    6: { listen: 45, read: 45, totalMin: 45, label: 'Cao cấp 2' },
  };

  var _state = null;

  function _mkState(level) {
    return {
      level:      level,
      questions:  [],
      qIndex:     0,
      answers:    [],   // { correct, word, type } per question
      timer:      null,
      timeLeft:   0,
      playCount:  0,    // TTS plays for current question (max 2)
      quick:      null, // { key, isBoss, title, cfg } khi là ải/trùm từ lộ trình
    };
  }

  // Config đang dùng — quick (ải/trùm) override count, ngược lại dùng chuẩn
  function _cfg(level) {
    if (_state && _state.quick) return _state.quick.cfg;
    return EXAM_CONFIG[level];
  }

  // Lưu pass ải/trùm để node trong lộ trình hiện ✓
  function _saveCheckpoint(key) {
    try {
      var d = JSON.parse(localStorage.getItem('hsk_course_checkpoints') || '{}');
      d[key] = { passed: true, ts: Date.now() };
      localStorage.setItem('hsk_course_checkpoints', JSON.stringify(d));
    } catch (e) {}
  }

  // ── Shuffle utility ───────────────────────────────────
  function _shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function _formatTime(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  // ── TTS (delegate to Dictionary if available) ─────────
  function _playTTS(text) {
    if (typeof Dictionary !== 'undefined' && Dictionary.playTTS) {
      Dictionary.playTTS(text);
    } else if (window.speechSynthesis) {
      var msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'zh-CN';
      msg.rate = 0.9;
      window.speechSynthesis.cancel();
      setTimeout(function() { window.speechSynthesis.speak(msg); }, 50);
    }
  }

  // ── Vocabulary pool (cumulative: levels 1..selected) ──
  function _getPool(level) {
    var pool = [];
    for (var l = 1; l <= level; l++) {
      var words = (window.HSK3_DATA && HSK3_DATA[l]) ? HSK3_DATA[l] : [];
      words.forEach(function(w) {
        if (w.h && w.v) pool.push(Object.assign({}, w, { hsk_level: l }));
      });
    }
    return pool;
  }

  // ── Build all questions ───────────────────────────────
  function _buildQuestions(level) {
    var cfg  = _cfg(level);
    var pool = _getPool(level);
    if (pool.length < 4) return [];

    // Separate shuffles so listen/read questions differ when possible
    var listenPool = _shuffle(pool).slice(0, cfg.listen);
    var listenHanzi = {};
    listenPool.forEach(function(w) { listenHanzi[w.h] = 1; });

    var readPool = _shuffle(pool.filter(function(w) { return !listenHanzi[w.h]; }));
    if (readPool.length < cfg.read) readPool = _shuffle(pool); // fallback: allow overlap
    readPool = readPool.slice(0, cfg.read);

    var questions = [];

    listenPool.forEach(function(word) {
      var distractors = _shuffle(pool.filter(function(x) { return x.h !== word.h; })).slice(0, 3);
      questions.push({ type: 'listen', word: word, options: _shuffle([word].concat(distractors)) });
    });

    readPool.forEach(function(word) {
      var distractors = _shuffle(pool.filter(function(x) { return x.h !== word.h; })).slice(0, 3);
      questions.push({ type: 'read', word: word, options: _shuffle([word].concat(distractors)) });
    });

    return questions;
  }

  // ── Timer ─────────────────────────────────────────────
  function _startTimer() {
    _stopTimer();
    var timerEl = document.getElementById('meTimer');
    _state.timer = setInterval(function() {
      _state.timeLeft--;
      if (timerEl) {
        timerEl.textContent = _formatTime(_state.timeLeft);
        timerEl.classList.toggle('me-timer--danger', _state.timeLeft <= 60);
      }
      if (_state.timeLeft <= 0) {
        _stopTimer();
        _endExam(true);
      }
    }, 1000);
  }

  function _stopTimer() {
    if (_state && _state.timer) {
      clearInterval(_state.timer);
      _state.timer = null;
    }
  }

  // ── Play button state ─────────────────────────────────
  function _updatePlayBtn() {
    var btn     = document.getElementById('mePlayBtn');
    var countEl = document.getElementById('mePlayCount');
    if (!btn || !_state) return;
    var remaining = 2 - _state.playCount; // 2 total plays: 1 auto + 1 manual
    btn.disabled = remaining <= 0;
    btn.textContent = remaining > 0 ? '▶ Phát lại' : '🔇 Hết lượt';
    if (countEl) countEl.textContent = remaining > 0 ? 'còn ' + remaining + ' lần' : 'đã hết lượt';
  }

  // ── Render one question ───────────────────────────────
  function _showQuestion() {
    if (!_state) return;
    var q   = _state.questions[_state.qIndex];
    if (!q) return;
    var cfg = _cfg(_state.level);
    var isListen = q.type === 'listen';

    // Section badge
    var badge = document.getElementById('meSectionBadge');
    if (badge) {
      badge.textContent  = isListen ? '听力 · Nghe' : '阅读 · Đọc';
      badge.className    = 'me-section-badge me-section-badge--' + (isListen ? 'listen' : 'read');
    }

    // Q counter (per-section numbering)
    var sectionIdx   = isListen ? _state.qIndex + 1 : _state.qIndex - cfg.listen + 1;
    var sectionTotal = isListen ? cfg.listen : cfg.read;
    var curEl = document.getElementById('meCurrent');
    var totEl = document.getElementById('meTotal');
    if (curEl) curEl.textContent = sectionIdx;
    if (totEl) totEl.textContent = sectionTotal;

    // Overall progress bar
    var prog = document.getElementById('meProgress');
    if (prog) prog.style.width = (_state.qIndex / _state.questions.length * 100) + '%';

    // Audio vs hanzi
    var audioRow = document.getElementById('meAudioRow');
    var hanziEl  = document.getElementById('meQHanzi');

    if (isListen) {
      if (audioRow) audioRow.style.display = 'flex';
      if (hanziEl)  hanziEl.style.display  = 'none';
      _state.playCount = 1; // auto-play counts as first play
      _updatePlayBtn();
      setTimeout(function() { _playTTS(q.word.h); }, 300);
    } else {
      if (audioRow) audioRow.style.display = 'none';
      if (hanziEl) {
        hanziEl.style.display = 'block';
        hanziEl.textContent   = q.word.h;
      }
    }

    // Options
    var optEl   = document.getElementById('meOptions');
    var letters = ['A', 'B', 'C', 'D'];
    var lang    = (typeof AppState !== 'undefined' && AppState.lang) ? AppState.lang : 'vi';
    if (optEl) {
      optEl.innerHTML = q.options.map(function(o, i) {
        var txt = lang === 'vi' ? (o.v || '') : (o.e || '');
        return '<button class="me-opt" data-h="' + o.h + '">' +
          '<span class="me-opt-letter">' + letters[i] + '</span>' +
          '<span class="me-opt-text">' + txt + '</span>' +
        '</button>';
      }).join('');
      optEl.querySelectorAll('.me-opt').forEach(function(btn) {
        btn.addEventListener('click', function() { _answer(btn, q); });
      });
    }

    var nextBtn = document.getElementById('meNextBtn');
    if (nextBtn) nextBtn.style.display = 'none';
  }

  // ── Handle answer selection ───────────────────────────
  function _answer(btn, q) {
    if (!_state) return;
    var optEl = document.getElementById('meOptions');
    if (!optEl) return;
    optEl.querySelectorAll('.me-opt').forEach(function(b) { b.disabled = true; });

    var correct = btn.dataset.h === q.word.h;
    btn.classList.add(correct ? 'me-opt--correct' : 'me-opt--wrong');
    if (!correct) {
      optEl.querySelectorAll('.me-opt').forEach(function(b) {
        if (b.dataset.h === q.word.h) b.classList.add('me-opt--correct');
      });
    }

    _state.answers[_state.qIndex] = { correct: correct, word: q.word, type: q.type };

    var nextBtn = document.getElementById('meNextBtn');
    if (nextBtn) nextBtn.style.display = 'block';
  }

  // ── Advance to next question ──────────────────────────
  function _next() {
    if (!_state) return;
    // Record unanswered question as wrong
    if (!_state.answers[_state.qIndex]) {
      var q = _state.questions[_state.qIndex];
      _state.answers[_state.qIndex] = { correct: false, word: q.word, type: q.type };
    }
    if (window.speechSynthesis) window.speechSynthesis.cancel();

    _state.qIndex++;
    if (_state.qIndex >= _state.questions.length) {
      _endExam(false);
      return;
    }

    // Section transition: listening → reading
    var prevWasListen = _state.questions[_state.qIndex - 1].type === 'listen';
    var nowIsRead     = _state.questions[_state.qIndex].type === 'read';
    if (prevWasListen && nowIsRead) {
      _showSectionBreak();
    } else {
      _showQuestion();
    }
  }

  // ── Section break screen ──────────────────────────────
  function _showSectionBreak() {
    if (!_state) return;
    _stopTimer(); // pause timer during break
    var cfg     = _cfg(_state.level);
    var examEl  = document.getElementById('meExam');
    var breakEl = document.getElementById('meSectionBreak');
    if (examEl) examEl.style.display = 'none';
    if (breakEl) {
      breakEl.style.display = 'flex';
      breakEl.innerHTML =
        '<div class="me-break-inner">' +
          '<div class="me-break-icon">📖</div>' +
          '<h2 class="me-break-title">阅读 · Phần Đọc</h2>' +
          '<p class="me-break-sub">' + cfg.read + ' câu · đọc hiểu từ vựng</p>' +
          '<p class="me-break-note">Thời gian còn lại: <strong>' + _formatTime(_state.timeLeft) + '</strong></p>' +
          '<button class="btn-primary me-break-btn" id="meBreakContinue">Bắt đầu phần Đọc →</button>' +
        '</div>';
      var cont = document.getElementById('meBreakContinue');
      if (cont) cont.addEventListener('click', function() {
        breakEl.style.display = 'none';
        if (examEl) examEl.style.display = 'block';
        _startTimer();
        _showQuestion();
      });
    }
  }

  // ── End exam (time-up or completed) ──────────────────
  function _endExam(timeUp) {
    if (!_state) return;
    _stopTimer();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    // Mark any remaining unanswered as wrong
    for (var i = 0; i < _state.questions.length; i++) {
      if (!_state.answers[i]) {
        var q = _state.questions[i];
        _state.answers[i] = { correct: false, word: q.word, type: q.type };
      }
    }
    _renderResult(timeUp);
  }

  // ── Result screen ─────────────────────────────────────
  function _renderResult(timeUp) {
    if (!_state) return;
    var cfg = _cfg(_state.level);

    var listenCorrect = 0, readCorrect = 0;
    _state.answers.forEach(function(a) {
      if (!a) return;
      if (a.correct && a.type === 'listen') listenCorrect++;
      if (a.correct && a.type === 'read')   readCorrect++;
    });
    var total        = cfg.listen + cfg.read;
    var totalCorrect = listenCorrect + readCorrect;
    var pct          = Math.round(totalCorrect / total * 100);
    var passed       = pct >= 60;
    var wrongList    = _state.answers.filter(function(a) { return a && !a.correct; });

    // Track quest progress (only if passed)
    if (passed && typeof Quests !== 'undefined') Quests.incrementMetric('mock_passed', 1);

    // Lát 2: lưu pass ải/trùm để node lộ trình hiện ✓
    if (_state.quick && passed) _saveCheckpoint(_state.quick.key);

    ['meExam','meSectionBreak'].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.style.display = 'none';
    });

    var resultEl = document.getElementById('meResult');
    if (!resultEl) return;

    var wrongHTML = wrongList.length === 0
      ? '<div class="me-perfect">🎉 Hoàn hảo! Không có câu sai.</div>'
      : '<div class="me-wrong-section">' +
          '<h3 class="me-wrong-title">Câu sai (' + wrongList.length + ')</h3>' +
          '<div class="me-wrong-list">' +
            wrongList.map(function(a) {
              return '<div class="me-wrong-item">' +
                '<span class="me-wi-type">' + (a.type === 'listen' ? '🎧' : '📖') + '</span>' +
                '<span class="me-wi-h">' + a.word.h + '</span>' +
                '<span class="me-wi-p">' + (a.word.p || '') + '</span>' +
                '<span class="me-wi-v">' + (a.word.v || '') + '</span>' +
              '</div>';
            }).join('') +
          '</div>' +
        '</div>';

    resultEl.innerHTML =
      '<div class="me-result-inner">' +
        (timeUp ? '<div class="me-time-up-banner">⏰ Hết giờ — bài thi đã tự động nộp</div>' : '') +
        '<div class="me-result-header">' +
          '<div class="me-result-circle ' + (passed ? 'me-circle--pass' : 'me-circle--fail') + '">' +
            '<span class="me-circle-pct">' + pct + '%</span>' +
            '<span class="me-circle-label">' + (passed ? 'ĐẠT' : 'CHƯA ĐẠT') + '</span>' +
          '</div>' +
          '<div class="me-result-meta">' +
            '<div class="me-result-level">HSK ' + _state.level + ' — ' + cfg.label + '</div>' +
            '<div class="me-result-score">' + totalCorrect + ' / ' + total + ' câu đúng</div>' +
          '</div>' +
        '</div>' +
        '<div class="me-result-sections">' +
          '<div class="me-result-section">' +
            '<div class="me-rs-label">🎧 Nghe (听力)</div>' +
            '<div class="me-rs-score">' + listenCorrect + ' / ' + cfg.listen + '</div>' +
            '<div class="me-rs-bar"><div style="width:' + Math.round(listenCorrect / cfg.listen * 100) + '%"></div></div>' +
          '</div>' +
          '<div class="me-result-section">' +
            '<div class="me-rs-label">📖 Đọc (阅读)</div>' +
            '<div class="me-rs-score">' + readCorrect + ' / ' + cfg.read + '</div>' +
            '<div class="me-rs-bar"><div style="width:' + Math.round(readCorrect / cfg.read * 100) + '%"></div></div>' +
          '</div>' +
        '</div>' +
        wrongHTML +
        '<div class="me-result-actions">' +
          ((passed && _state.quick && _state.quick.isBoss)
            ? '<button class="btn-primary" id="meMapBtn">🗺️ Xem vùng đã chinh phục</button>'
            : '<button class="btn-primary" id="meRetryBtn">🔄 Thi lại</button>') +
          '<button class="btn-outline" id="meBackBtn">' + (_state.quick ? '← Về lộ trình' : '← Luyện tập') + '</button>' +
        '</div>' +
      '</div>';

    resultEl.style.display = 'block';

    var retryBtn = document.getElementById('meRetryBtn');
    if (retryBtn) retryBtn.addEventListener('click', function() {
      resultEl.style.display = 'none';
      if (_state && _state.quick) {
        var q = _state.quick, lv = _state.level;
        _state = _mkState(lv); _state.quick = q;
        _startExam();
        return;
      }
      var savedLevel = _state.level;
      _state = _mkState(savedLevel);
      var setupEl = document.getElementById('meSetup');
      if (setupEl) setupEl.style.display = 'block';
      // Re-activate the correct level button
      document.querySelectorAll('.me-level-btn').forEach(function(b) {
        b.classList.toggle('active', parseInt(b.dataset.level) === savedLevel);
      });
      _updatePreview(savedLevel);
    });

    var mapBtn = document.getElementById('meMapBtn');
    if (mapBtn) mapBtn.addEventListener('click', function() {
      // Handoff ăn mừng → Bản đồ HSK highlight vùng vừa chinh phục (Lát 3)
      try { sessionStorage.setItem('bdh_celebrate_level', String(_state.level)); } catch (e) {}
      if (typeof Router !== 'undefined') Router.navigateTo('ban-do-hsk');
    });

    var backBtn = document.getElementById('meBackBtn');
    if (backBtn) backBtn.addEventListener('click', function() {
      var dest = (_state && _state.quick) ? 'course' : 'practice';
      if (typeof Router !== 'undefined') Router.navigateTo(dest);
    });
  }

  // ── Setup preview table ───────────────────────────────
  function _updatePreview(level) {
    var cfg = EXAM_CONFIG[level];
    if (!cfg) return;
    var el = document.getElementById('meSetupPreview');
    if (!el) return;
    var total = cfg.listen + cfg.read;
    var pass  = Math.ceil(total * 0.6);
    el.innerHTML =
      '<div class="me-preview-row"><span>🎧 Nghe (听力)</span><span>' + cfg.listen + ' câu</span></div>' +
      '<div class="me-preview-row"><span>📖 Đọc (阅读)</span><span>' + cfg.read + ' câu</span></div>' +
      '<div class="me-preview-row me-preview-total"><span>⏱ Thời gian</span><span>' + cfg.totalMin + ' phút</span></div>' +
      '<div class="me-preview-row"><span>Ngưỡng đạt</span><span>≥ 60% (' + pass + '/' + total + ')</span></div>';
  }

  // ── Start exam from setup ─────────────────────────────
  function _startExam() {
    if (!_state) return;
    var cfg = _cfg(_state.level);
    if (!cfg) return;

    var questions = _buildQuestions(_state.level);
    if (!questions || questions.length < cfg.listen + cfg.read) {
      var msg = 'Không đủ dữ liệu từ vựng cho HSK ' + _state.level + '. Vui lòng thử cấp khác.';
      if (typeof showToast === 'function') showToast(msg); else alert(msg);
      return;
    }

    _state.questions = questions;
    _state.qIndex    = 0;
    _state.answers   = [];
    _state.timeLeft  = cfg.totalMin * 60;
    _state.playCount = 0;

    var setupEl = document.getElementById('meSetup');
    var examEl  = document.getElementById('meExam');
    if (setupEl) setupEl.style.display = 'none';
    if (examEl)  examEl.style.display  = 'block';

    var timerEl = document.getElementById('meTimer');
    if (timerEl) timerEl.textContent = _formatTime(_state.timeLeft);

    // Exit button
    var exitBtn = document.getElementById('meExitBtn');
    if (exitBtn) exitBtn.addEventListener('click', function() {
      if (confirm('Bỏ bài thi? Kết quả sẽ không được lưu.')) {
        _stopTimer();
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        var dest = (_state && _state.quick) ? 'course' : 'practice';
        if (typeof Router !== 'undefined') Router.navigateTo(dest);
      }
    });

    // Replay TTS button
    var playBtn = document.getElementById('mePlayBtn');
    if (playBtn) playBtn.addEventListener('click', function() {
      if (!_state || _state.playCount >= 2) return;
      var q = _state.questions[_state.qIndex];
      if (!q || q.type !== 'listen') return;
      _state.playCount++;
      _updatePlayBtn();
      _playTTS(q.word.h);
    });

    // Next question button
    var nextBtn = document.getElementById('meNextBtn');
    if (nextBtn) nextBtn.addEventListener('click', _next);

    _startTimer();
    _showQuestion();
  }

  // ── Public: init (called by router on each navigation) ─
  function init() {
    // Clean up any running timer from a previous visit
    if (_state) _stopTimer();
    if (window.speechSynthesis) window.speechSynthesis.cancel();

    // Handoff từ lộ trình: ải chương / trùm cấp → chạy mini-mock ngay
    try {
      var raw = sessionStorage.getItem('hsk_course_checkpoint');
      if (raw) {
        sessionStorage.removeItem('hsk_course_checkpoint');
        var cp  = JSON.parse(raw);
        var per = Math.max(3, Math.round((cp.count || 10) / 2));
        _state = _mkState(cp.level);
        _state.quick = {
          key: cp.key, isBoss: !!cp.isBoss, title: cp.title || ('HSK ' + cp.level),
          cfg: { listen: per, read: per, totalMin: Math.max(5, per), label: cp.title || ('HSK ' + cp.level) }
        };
        _startExam();
        return;
      }
    } catch (e) {}

    _state = _mkState(1);

    var setupEl = document.getElementById('meSetup');
    if (setupEl) setupEl.style.display = 'block';
    ['meExam','meSectionBreak','meResult'].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.style.display = 'none';
    });

    // Level selector buttons
    document.querySelectorAll('.me-level-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.me-level-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        _state.level = parseInt(btn.dataset.level);
        _updatePreview(_state.level);
      });
    });

    var startBtn = document.getElementById('meStartBtn');
    if (startBtn) startBtn.addEventListener('click', _startExam);

    _updatePreview(1);
  }

  return { init: init };

}());
