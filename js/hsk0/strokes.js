// ═══════════════════════════════════════════════════════
// HSK 0 — BASIC STROKES (笔画) MODULE
// Phase O0.4 — 8 basic strokes: demo + quiz + canvas practice
// Uses SVG animation + custom canvas (no HanziWriter needed)
// ═══════════════════════════════════════════════════════

var HSK0Strokes = (function() {

  var _state = {
    mode: 'intro',
    progress: {},
    quizIdx: 0,
    quizScore: 0,
    quizAnswered: false,
    quizList: [],
    quizType: '',
    practiceIdx: 0,
    practiceAttempts: 0,
    practiceResults: [],
    drawing: false,
    points: []
  };

  // ── Init ──────────────────────────────────────────────
  function init() {
    _loadProgress();
    _renderIntro();
    // Non-blocking gate hint if O0.3 not passed
    if (!_state.progress.finals_passed) {
      setTimeout(function() {
        _toast('💡 Nên học Bài 3 (Vần 韵母) trước để có nền tảng tốt hơn');
      }, 800);
    }
  }

  // ── Progress ──────────────────────────────────────────
  function _loadProgress() {
    try {
      _state.progress = JSON.parse(localStorage.getItem('hsk_progress_v0') || '{}');
    } catch(e) {
      _state.progress = {};
    }
  }

  function _saveProgress(updates) {
    Object.keys(updates).forEach(function(k) {
      _state.progress[k] = updates[k];
    });
    localStorage.setItem('hsk_progress_v0', JSON.stringify(_state.progress));
  }

  // ── SVG Helpers ───────────────────────────────────────
  function _makeSVG(stroke, opts) {
    opts = opts || {};
    var size = opts.size || 120;
    var animated = opts.animated !== false;
    var color = opts.color || stroke.color;
    var delay = opts.delay || 0;
    var uid = stroke.type + '-' + (opts.uid || Math.random().toString(36).slice(2,5));

    var markerId = 'arrow-' + uid;
    var marker = `<defs>
      <marker id="${markerId}" markerWidth="9" markerHeight="7"
        refX="8" refY="3.5" orient="auto" markerUnits="strokeWidth">
        <polygon points="0 0, 9 3.5, 0 7" fill="${color}"/>
      </marker>
    </defs>`;

    var pathAttrs = `d="${stroke.svgPath}"
      stroke="${color}" stroke-width="13"
      stroke-linecap="round" stroke-linejoin="round"
      fill="none" marker-end="url(#${markerId})"`;

    var animAttrs = animated ?
      `class="stroke-path-anim" style="animation-delay:${delay}ms"` : '';

    return `<svg width="${size}" height="${size}" viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg" style="display:block">
      ${marker}
      <path ${pathAttrs} ${animAttrs}/>
    </svg>`;
  }

  function _makeGhostSVG(stroke, size) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg" style="display:block">
      <path d="${stroke.svgPath}"
        stroke="${stroke.color}" stroke-width="16"
        stroke-linecap="round" stroke-linejoin="round"
        stroke-dasharray="12 8" fill="none" opacity="0.22"/>
    </svg>`;
  }

  // ── Section 1: Intro ──────────────────────────────────
  function _renderIntro() {
    _state.mode = 'intro';
    var p = _state.progress;
    var doneRecog = p.strokes_recog_passed ? ' ✅' : '';
    var donePractice = p.strokes_practice_pct >= 50 ? ' ✅' : '';
    var doneHW = p.strokes_passed ? ' ✅' : '';

    var html = `
      <div class="hsk0-hero">
        <div class="hsk0-hero-label">HSK 0 · Bài 4</div>
        <div class="hsk0-hero-title">✏️ 8 Nét Viết Cơ Bản (笔画)</div>
        <div class="hsk0-hero-desc">Mọi chữ Hán đều được ghép từ 8 nét cơ bản này. Nắm vững 8 nét = hiểu cấu trúc toàn bộ hán tự!</div>
        <div class="hsk0-hero-chips">
          <span class="chip">✏️ 8 nét</span>
          <span class="chip">⏱ ~25 phút</span>
          <span class="chip">🎨 Có luyện viết</span>
        </div>
      </div>

      <div class="hsk0-box">
        <div class="hsk0-box-title">💡 Tại sao học nét trước?</div>
        <div style="font-size:13px;line-height:1.7;color:var(--text)">
          Giống như bảng chữ cái có các nét cơ bản, tiếng Trung có <strong>8 nét cơ bản</strong>. Mọi hán tự đều là tổ hợp của 8 nét này:
        </div>
        <div class="stroke-intro-demo">
          <div class="stroke-intro-char">大</div>
          <div class="stroke-intro-equals">=</div>
          <div class="stroke-intro-parts">
            <span class="stroke-tag" style="color:#DC2626;border-color:#FCA5A5">横 ngang</span>
            <span class="stroke-tag" style="color:#7C3AED;border-color:#C4B5FD">撇 phẩy</span>
            <span class="stroke-tag" style="color:#D97706;border-color:#FCD34D">捺 mác</span>
          </div>
        </div>
        <div style="font-size:13px;line-height:1.6;color:var(--text-secondary)">
          Học nét trước giúp bạn: tra từ điển bằng bộ thủ, hiểu thứ tự viết, nhớ chữ bền hơn.
        </div>
      </div>

      <div class="hsk0-box" style="background:#EFF6FF;border-color:#BFDBFE">
        <div style="font-size:13px;color:#1E40AF;line-height:1.7">
          📋 <strong>Nội dung bài học:</strong><br>
          1. Demo 8 nét với animation${doneRecog ? '' : ''}<br>
          2. Quiz nhận diện 10 câu${doneRecog}<br>
          3. Luyện viết tay trực tiếp${donePractice}<br>
          4. Bài tập về nhà 15 câu (cần ≥80% để unlock Bài 5)${doneHW}
        </div>
      </div>

      <button class="hsk0-btn-primary" onclick="HSK0Strokes.showDemo()">
        ${p.strokes_recog_passed ? '↺ Xem lại 8 nét →' : 'Bắt đầu xem 8 nét →'}
      </button>
      ${p.strokes_recog_passed ? `<button class="hsk0-btn-secondary" onclick="HSK0Strokes.startPractice()">Luyện viết ✏️</button>` : ''}
      ${p.strokes_practice_pct ? `<button class="hsk0-btn-secondary" onclick="HSK0Strokes.startQuiz('hw')">Bài tập về nhà (15 câu)</button>` : ''}
    `;
    document.getElementById('hsk0-content').innerHTML = html;
  }

  // ── Section 2: Demo ───────────────────────────────────
  function showDemo() {
    _state.mode = 'demo';

    var cards = STROKES_8.map(function(s, i) {
      return `
        <div class="stroke-demo-card">
          <div class="stroke-demo-svg" id="svg-demo-${s.type}">
            ${_makeSVG(s, { size: 100, delay: i * 120, uid: 'demo' })}
          </div>
          <div class="stroke-demo-info">
            <span class="stroke-demo-char" style="color:${s.color}">${s.char}</span>
            <span class="stroke-demo-name">${s.nameVN}</span>
            <span class="stroke-demo-pinyin">${s.pinyin}</span>
            <span class="stroke-demo-dir">${s.direction}</span>
          </div>
          <div class="stroke-demo-desc">${s.desc}</div>
          <div class="stroke-demo-examples">
            <span class="stroke-ex-label">Chữ ví dụ:</span>
            ${[s.exChar].concat(s.moreEx.slice(0,2)).map(function(c) {
              return `<span class="stroke-ex-char" onclick="HSK0Strokes.speak('${c}')">${c}</span>`;
            }).join('')}
          </div>
          <button class="stroke-replay-btn" onclick="HSK0Strokes.replayStroke('${s.type}')">↺ Xem lại</button>
        </div>
      `;
    }).join('');

    var html = `
      <div class="hsk0-section-title">8 Nét Cơ Bản — Nhấn vào chữ để nghe phát âm</div>
      <div class="stroke-demo-grid">${cards}</div>

      <div class="hsk0-box" style="background:#FFFBEB;border-color:#FDE68A;margin-top:4px">
        <div style="font-size:13px;color:#92400E;line-height:1.6">
          🖊️ <strong>Quy tắc viết:</strong> Trong tiếng Trung, thứ tự nét rất quan trọng.<br>
          Nguyên tắc chung: <strong>trái trước phải · trên trước dưới · ngang trước dọc</strong>
        </div>
      </div>

      <button class="hsk0-btn-primary" onclick="HSK0Strokes.startQuiz('recog')">
        💪 Luyện nhận diện (10 câu) →
      </button>
      <button class="hsk0-btn-secondary" onclick="HSK0Strokes._renderIntro()">← Giới thiệu</button>
    `;
    document.getElementById('hsk0-content').innerHTML = html;
  }

  function replayStroke(type) {
    var container = document.getElementById('svg-demo-' + type);
    if (!container) return;
    var stroke = STROKES_8.find(function(s) { return s.type === type; });
    if (!stroke) return;
    // Clear then re-insert to restart CSS animation
    container.innerHTML = '';
    setTimeout(function() {
      container.innerHTML = _makeSVG(stroke, { size: 100, uid: 'r' + Date.now() });
    }, 20);
  }

  function speak(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    u.rate = 0.8;
    window.speechSynthesis.speak(u);
  }

  // ── Section 3: Recognition Quiz ───────────────────────
  function startQuiz(type) {
    _state.mode = 'quiz-' + type;
    _state.quizIdx = 0;
    _state.quizScore = 0;
    _state.quizAnswered = false;
    _state.quizType = type;
    _state.quizList = type === 'recog' ? _buildRecogQuiz() : _buildHomeworkQuiz();
    _renderQuiz();
  }

  function _buildRecogQuiz() {
    var pool = _shuffle(STROKES_8.slice());
    var list = pool.slice(); // 8 strokes
    // Add 2 more (random repeats to reach 10)
    list.push(pool[Math.floor(Math.random() * 8)]);
    list.push(pool[Math.floor(Math.random() * 8)]);

    return list.slice(0, 10).map(function(stroke) {
      return {
        type: 'visual-mcq',
        svgHtml: _makeSVG(stroke, { size: 90, animated: false, uid: 'q' + stroke.type }),
        question: 'Đây là nét gì?',
        answer: stroke.nameVN,
        options: _buildNameOptions(stroke)
      };
    });
  }

  function _buildHomeworkQuiz() {
    var list = [];
    var pool = _shuffle(STROKES_8.slice());

    // 6 visual MCQ: show SVG → pick VN name
    pool.slice(0, 6).forEach(function(stroke) {
      list.push({
        type: 'visual-mcq',
        svgHtml: _makeSVG(stroke, { size: 85, animated: false, uid: 'hw' + stroke.type }),
        question: 'Đây là nét gì?',
        answer: stroke.nameVN,
        options: _buildNameOptions(stroke)
      });
    });

    // 5 name → Hán tự: show VN name → pick Chinese char
    _shuffle(STROKES_8.slice()).slice(0, 5).forEach(function(stroke) {
      var wrong = _shuffle(STROKES_8.filter(function(s) { return s.type !== stroke.type; })).slice(0, 3);
      var opts = _shuffle([stroke.char].concat(wrong.map(function(s) { return s.char; })));
      list.push({
        type: 'text-mcq',
        question: 'Nét "' + stroke.nameVN + '" (' + stroke.pinyin + ') — ký hiệu Hán tự là?',
        answer: stroke.char,
        options: opts
      });
    });

    // 4 name → direction: show name → pick direction arrow
    _shuffle(STROKES_8.slice()).slice(0, 4).forEach(function(stroke) {
      var allDirs = STROKES_8.map(function(s) { return s.direction; });
      var wrongDirs = _shuffle(allDirs.filter(function(d) { return d !== stroke.direction; })).slice(0, 3);
      var opts = _shuffle([stroke.direction].concat(wrongDirs));
      list.push({
        type: 'text-mcq',
        question: 'Nét <strong>' + stroke.char + ' ' + stroke.pinyin + '</strong> (' + stroke.nameVN + ') — hướng bút là?',
        answer: stroke.direction,
        options: opts
      });
    });

    return _shuffle(list).slice(0, 15);
  }

  function _buildNameOptions(correctStroke) {
    var wrong = _shuffle(STROKES_8.filter(function(s) { return s.type !== correctStroke.type; })).slice(0, 3);
    return _shuffle([correctStroke.nameVN].concat(wrong.map(function(s) { return s.nameVN; })));
  }

  function _renderQuiz() {
    if (_state.quizIdx >= _state.quizList.length) {
      _renderQuizResult();
      return;
    }

    var q = _state.quizList[_state.quizIdx];
    var total = _state.quizList.length;
    var progress = Math.round(_state.quizIdx / total * 100);

    var visualSection = '';
    if (q.type === 'visual-mcq') {
      visualSection = `
        <div class="hsk0-quiz-audio" style="padding:20px">
          <div style="display:flex;justify-content:center">${q.svgHtml}</div>
        </div>
      `;
    }

    var options = q.options.map(function(opt, i) {
      var isCorrect = (opt === q.answer);
      return `<button class="hsk0-quiz-option" data-correct="${isCorrect}"
        onclick="HSK0Strokes.pickAnswer(${i}, this)">${opt}</button>`;
    }).join('');

    var html = `
      <div class="hsk0-quiz-progress" style="width:${progress}%"></div>
      <div class="hsk0-quiz-header">
        <div class="hsk0-quiz-label">Câu ${_state.quizIdx + 1}/${total}</div>
        <div class="hsk0-quiz-question">${q.question}</div>
      </div>
      ${visualSection}
      <div class="hsk0-quiz-options" id="quiz-options">${options}</div>
      <div class="hsk0-quiz-feedback" id="quiz-fb"></div>
      <button class="hsk0-btn-primary" id="quiz-next" style="display:none"
        onclick="HSK0Strokes.nextQuestion()">
        ${_state.quizIdx < total - 1 ? 'Câu tiếp theo →' : 'Xem kết quả 🎉'}
      </button>
    `;
    document.getElementById('hsk0-content').innerHTML = html;
  }

  function pickAnswer(idx, btn) {
    if (_state.quizAnswered) return;
    _state.quizAnswered = true;

    var isCorrect = btn.dataset.correct === 'true';
    if (isCorrect) _state.quizScore++;

    document.querySelectorAll('.hsk0-quiz-option').forEach(function(b) {
      b.disabled = true;
      if (b.dataset.correct === 'true') b.classList.add('correct');
      else if (b === btn && !isCorrect) b.classList.add('wrong');
    });

    var fb = document.getElementById('quiz-fb');
    fb.textContent = isCorrect ? '✅ Đúng rồi!' : '❌ Chưa đúng. Đáp án đúng đã được đánh dấu.';
    fb.className = 'hsk0-quiz-feedback show ' + (isCorrect ? 'correct' : 'wrong');
    document.getElementById('quiz-next').style.display = 'block';
  }

  function nextQuestion() {
    _state.quizIdx++;
    _state.quizAnswered = false;
    _renderQuiz();
  }

  function _renderQuizResult() {
    var total = _state.quizList.length;
    var pct = Math.round(_state.quizScore / total * 100);
    var passed = pct >= 80;
    var emoji = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '💪' : '📚';
    var section = _state.quizType;

    if (section === 'recog') {
      _saveProgress({ strokes_recog_pct: pct, strokes_recog_passed: passed });
    } else {
      _saveProgress({ strokes_hw_pct: pct, strokes_hw_passed: passed, strokes_passed: passed });
    }

    var nextBtn = '';
    if (section === 'recog' && passed) {
      nextBtn = '<button class="hsk0-btn-primary" onclick="HSK0Strokes.startPractice()">Tiếp: Luyện viết ✏️ →</button>';
    } else if (section === 'recog') {
      nextBtn = '<button class="hsk0-btn-primary" onclick="HSK0Strokes.startQuiz(\'recog\')">Làm lại quiz nhận diện</button>';
    } else if (section === 'hw' && passed) {
      nextBtn = '<button class="hsk0-btn-primary" onclick="HSK0Strokes._onComplete()">🎉 Xong Bài 4! →</button>';
    } else {
      nextBtn = '<button class="hsk0-btn-primary" onclick="HSK0Strokes.startQuiz(\'hw\')">Làm lại bài tập về nhà</button>';
    }

    var html = `
      <div class="hsk0-result">
        <div class="hsk0-result-emoji">${emoji}</div>
        <div class="hsk0-result-title">${pct >= 80 ? 'Làm tốt lắm!' : 'Cố lên nhé!'}</div>
        <div class="hsk0-result-msg">
          ${pct >= 80
            ? 'Bạn đã nắm được các nét cơ bản!'
            : 'Ôn lại phần demo 8 nét rồi thử lại nhé.'}
        </div>
        <div class="hsk0-result-stats">
          <div class="hsk0-stat">
            <div class="hsk0-stat-value">${_state.quizScore}/${total}</div>
            <div class="hsk0-stat-label">Đúng</div>
          </div>
          <div class="hsk0-stat">
            <div class="hsk0-stat-value">${pct}%</div>
            <div class="hsk0-stat-label">Tỉ lệ</div>
          </div>
        </div>
        ${nextBtn}
        <button class="hsk0-btn-secondary" onclick="HSK0Strokes.showDemo()">← Xem lại 8 nét</button>
      </div>
    `;
    document.getElementById('hsk0-content').innerHTML = html;
  }

  // ── Section 4: Practice (Canvas) ─────────────────────
  function startPractice() {
    _state.mode = 'practice';
    _state.practiceIdx = 0;
    _state.practiceAttempts = 0;
    _state.practiceResults = [];
    _renderPractice();
  }

  function _renderPractice() {
    var stroke = STROKES_8[_state.practiceIdx];
    var progress = Math.round(_state.practiceIdx / STROKES_8.length * 100);
    var canvasSize = 240;

    var html = `
      <div class="hsk0-quiz-progress" style="width:${progress}%"></div>

      <div class="practice-header">
        <div class="practice-counter">Nét ${_state.practiceIdx + 1}/8</div>
        <div class="practice-title" style="color:${stroke.color}">
          ${stroke.char} ${stroke.pinyin} — ${stroke.nameVN}
        </div>
        <div class="practice-desc">${stroke.desc}</div>
      </div>

      <div class="practice-area">
        <div class="practice-guide-label">🎯 Vẽ nét theo hướng mũi tên (chuột hoặc ngón tay):</div>
        <div class="practice-canvas-wrap" id="canvas-wrap" style="width:${canvasSize}px;height:${canvasSize}px">
          <div class="practice-ghost">${_makeGhostSVG(stroke, canvasSize)}</div>
          <canvas id="practice-canvas" width="${canvasSize}" height="${canvasSize}"
            style="position:absolute;top:0;left:0;cursor:crosshair;touch-action:none;z-index:2">
          </canvas>
        </div>
        <div class="practice-attempts" id="practice-attempts">
          Lần thử: ${_state.practiceAttempts + 1}/3
        </div>
        <div class="practice-feedback" id="practice-fb"></div>
        <div style="display:flex;gap:10px;margin-top:10px">
          <button class="stroke-replay-btn" style="flex:1" onclick="HSK0Strokes.clearCanvas()">↺ Xoá</button>
          <button class="hsk0-btn-primary" id="practice-check" style="flex:2;margin:0;display:none"
            onclick="HSK0Strokes.checkStroke()">Kiểm tra ✓</button>
        </div>
      </div>

      <div class="practice-ref">
        <div class="practice-ref-label">Tham khảo hướng nét:</div>
        <div style="display:flex;align-items:center;gap:16px;justify-content:center">
          ${_makeSVG(stroke, { size: 72, uid: 'ref' })}
          <div>
            <div style="font-size:28px;font-weight:800">${stroke.direction}</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:4px">${stroke.nameVN}</div>
          </div>
        </div>
      </div>
    `;
    document.getElementById('hsk0-content').innerHTML = html;
    _initCanvas(stroke, canvasSize);
  }

  function _initCanvas(stroke, size) {
    var canvas = document.getElementById('practice-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    _state.points = [];
    _state.drawing = false;

    ctx.strokeStyle = stroke.color;
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    function getPoint(e) {
      var rect = canvas.getBoundingClientRect();
      var scaleX = canvas.width / rect.width;
      var scaleY = canvas.height / rect.height;
      var clientX = e.clientX !== undefined ? e.clientX : e.touches[0].clientX;
      var clientY = e.clientY !== undefined ? e.clientY : e.touches[0].clientY;
      return { x: (clientX - rect.left) * scaleX, y: (clientY - rect.top) * scaleY };
    }

    function onStart(e) {
      e.preventDefault();
      _state.drawing = true;
      _state.points = [];
      ctx.clearRect(0, 0, size, size);
      var pt = getPoint(e);
      _state.points.push(pt);
      ctx.beginPath();
      ctx.moveTo(pt.x, pt.y);
      var fb = document.getElementById('practice-fb');
      if (fb) { fb.textContent = ''; fb.className = 'practice-feedback'; }
      var checkBtn = document.getElementById('practice-check');
      if (checkBtn) checkBtn.style.display = 'none';
    }

    function onMove(e) {
      e.preventDefault();
      if (!_state.drawing) return;
      var pt = getPoint(e);
      _state.points.push(pt);
      ctx.lineTo(pt.x, pt.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(pt.x, pt.y);
    }

    function onEnd(e) {
      e.preventDefault();
      if (!_state.drawing) return;
      _state.drawing = false;
      if (_state.points.length > 4) {
        var checkBtn = document.getElementById('practice-check');
        if (checkBtn) checkBtn.style.display = 'block';
      }
    }

    canvas.addEventListener('mousedown', onStart);
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseup', onEnd);
    canvas.addEventListener('touchstart', onStart, { passive: false });
    canvas.addEventListener('touchmove', onMove, { passive: false });
    canvas.addEventListener('touchend', onEnd, { passive: false });
  }

  function clearCanvas() {
    _state.points = [];
    _state.drawing = false;
    var canvas = document.getElementById('practice-canvas');
    if (canvas) canvas.getContext('2d').clearRect(0, 0, 240, 240);
    var fb = document.getElementById('practice-fb');
    if (fb) { fb.textContent = ''; fb.className = 'practice-feedback'; }
    var checkBtn = document.getElementById('practice-check');
    if (checkBtn) checkBtn.style.display = 'none';
  }

  function checkStroke() {
    var stroke = STROKES_8[_state.practiceIdx];
    var correct = _analyzeDrawing(_state.points, stroke.practice);
    _state.practiceAttempts++;

    var fb = document.getElementById('practice-fb');
    if (!fb) return;

    if (correct) {
      _state.practiceResults.push({ type: stroke.type, passed: true, attempts: _state.practiceAttempts });
      fb.className = 'practice-feedback correct';
      fb.textContent = '✅ Đúng rồi! Nét ' + stroke.nameVN + ' chuẩn!';
      setTimeout(_nextStroke, 900);
    } else if (_state.practiceAttempts >= 3) {
      _state.practiceResults.push({ type: stroke.type, passed: false, attempts: 3 });
      fb.className = 'practice-feedback wrong';
      fb.innerHTML = '❌ Chưa đúng. Hướng bút: <strong>' + stroke.direction + '</strong> — ' + stroke.desc;
      setTimeout(_nextStroke, 1600);
    } else {
      fb.className = 'practice-feedback wrong';
      fb.innerHTML = '❌ Chưa đúng! Thử lại (' + _state.practiceAttempts + '/3 lần)' +
        (_state.practiceAttempts >= 2 ? '<br><small>💡 ' + stroke.desc + '</small>' : '');
      var el = document.getElementById('practice-attempts');
      if (el) el.textContent = 'Lần thử: ' + (_state.practiceAttempts + 1) + '/3';
      clearCanvas();
    }
  }

  function _nextStroke() {
    _state.practiceIdx++;
    _state.practiceAttempts = 0;
    if (_state.practiceIdx >= STROKES_8.length) {
      _renderPracticeResult();
    } else {
      _renderPractice();
    }
  }

  function _renderPracticeResult() {
    var passed = _state.practiceResults.filter(function(r) { return r.passed; }).length;
    var total = STROKES_8.length;
    var pct = Math.round(passed / total * 100);
    _saveProgress({ strokes_practice_pct: pct });

    var rows = _state.practiceResults.map(function(r) {
      var s = STROKES_8.find(function(x) { return x.type === r.type; });
      return `<div class="practice-result-row ${r.passed ? 'pass' : 'fail'}">
        <span style="color:${s.color};font-size:20px;font-family:'Noto Serif SC',serif;width:36px">${s.char}</span>
        <span style="flex:1">${s.nameVN} (${s.pinyin})</span>
        <span>${r.passed ? '✅' : '❌'} ${r.attempts}/${r.attempts >= 3 && !r.passed ? '3' : r.attempts} lần</span>
      </div>`;
    }).join('');

    var html = `
      <div class="hsk0-result">
        <div class="hsk0-result-emoji">✏️</div>
        <div class="hsk0-result-title">Luyện viết xong!</div>
        <div class="hsk0-result-msg">Bạn viết đúng ${passed}/${total} nét. Tiếp tục làm bài tập về nhà!</div>
        <div class="hsk0-result-stats">
          <div class="hsk0-stat">
            <div class="hsk0-stat-value">${passed}/${total}</div>
            <div class="hsk0-stat-label">Nét đúng</div>
          </div>
          <div class="hsk0-stat">
            <div class="hsk0-stat-value">${pct}%</div>
            <div class="hsk0-stat-label">Tỉ lệ</div>
          </div>
        </div>
        <div class="practice-result-list">${rows}</div>
        <button class="hsk0-btn-primary" onclick="HSK0Strokes.startQuiz('hw')">
          Tiếp: Bài tập về nhà (15 câu) →
        </button>
        <button class="hsk0-btn-secondary" onclick="HSK0Strokes.startPractice()">↺ Luyện viết lại</button>
      </div>
    `;
    document.getElementById('hsk0-content').innerHTML = html;
  }

  // ── Drawing Analysis ──────────────────────────────────
  function _analyzeDrawing(points, practice) {
    if (!points || points.length < 5) return false;

    if (practice.type === 'compound') {
      return _analyzeCompound(points, practice);
    }

    var p0 = points[0];
    var pN = points[points.length - 1];
    var dx = pN.x - p0.x;
    var dy = pN.y - p0.y;
    var len = Math.sqrt(dx * dx + dy * dy);
    if (len < 20) return false;

    if (practice.type === 'short' && len > (practice.maxLen || 120)) return false;

    var angle = Math.atan2(dy, dx) * 180 / Math.PI;
    return angle >= practice.angleMin && angle <= practice.angleMax;
  }

  function _analyzeCompound(points, practice) {
    var n = points.length;
    if (n < 10) return false;

    var split = practice.split || 0.5;
    var mid = Math.floor(n * split);
    if (mid < 4 || n - mid < 4) return false;

    var p0 = points[0], pm = points[mid], pN = points[n - 1];

    var dx1 = pm.x - p0.x, dy1 = pm.y - p0.y;
    var len1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
    if (len1 < 18) return false;

    var dx2 = pN.x - pm.x, dy2 = pN.y - pm.y;
    var len2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
    if (len2 < 12) return false;

    var angle1 = Math.atan2(dy1, dx1) * 180 / Math.PI;
    var angle2 = Math.atan2(dy2, dx2) * 180 / Math.PI;

    if (practice.turn === 'right-down') {
      // First: horizontal right (≈0°, allow [-45,45])
      // Second: down (≈90°, allow [45,135])
      return Math.abs(angle1) < 45 && angle2 > 45 && angle2 < 135;
    }

    if (practice.turn === 'down-left') {
      // First: vertical down (≈90°, allow [50,130])
      // Second: going left (>120° or <-120°)
      return angle1 > 50 && angle1 < 130 && (angle2 > 120 || angle2 < -120);
    }

    return false;
  }

  // ── Complete ──────────────────────────────────────────
  function _onComplete() {
    _toast('🎉 Bài 4 hoàn thành! Bài 5 (Số đếm) sắp ra mắt.');
    setTimeout(function() { Router.navigateTo('tools'); }, 1800);
  }

  // ── Utils ─────────────────────────────────────────────
  function _shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  function _toast(msg) {
    var t = document.createElement('div');
    t.className = 'hsk0-toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function() { t.classList.add('show'); }, 10);
    setTimeout(function() {
      t.classList.remove('show');
      setTimeout(function() { t.remove(); }, 300);
    }, 2800);
  }

  // ── Public API ────────────────────────────────────────
  return {
    init: init,
    showDemo: showDemo,
    replayStroke: replayStroke,
    speak: speak,
    startQuiz: startQuiz,
    pickAnswer: pickAnswer,
    nextQuestion: nextQuestion,
    startPractice: startPractice,
    clearCanvas: clearCanvas,
    checkStroke: checkStroke,
    _renderIntro: _renderIntro,
    _onComplete: _onComplete
  };

})();

function initHSK0Strokes() {
  HSK0Strokes.init();
}
