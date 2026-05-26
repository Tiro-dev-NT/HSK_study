// ═══════════════════════════════════════════════════════
// HSK 0 — FINAL EXAM MODULE (Thi cuối HSK 0)
// Phase O0 — 25 câu covering tất cả 6 bài, gate ≥70%
// On pass: hsk0_final_passed = true → unlock Phase P (Story Mai)
// ═══════════════════════════════════════════════════════

var HSK0Final = (function() {

  var PASS_PCT = 70;
  var TOTAL_Q  = 25;

  var _state = {
    progress: {},
    examList: [],
    examIdx: 0,
    examScore: 0,
    answered: false
  };

  // ── Init ──────────────────────────────────────────────
  function init() {
    _loadProgress();
    _renderIntro();
  }

  function _loadProgress() {
    try {
      _state.progress = JSON.parse(localStorage.getItem('hsk_progress_v0') || '{}');
    } catch(e) { _state.progress = {}; }
  }

  function _saveProgress(updates) {
    Object.keys(updates).forEach(function(k) { _state.progress[k] = updates[k]; });
    localStorage.setItem('hsk_progress_v0', JSON.stringify(_state.progress));
  }

  // ── Intro ─────────────────────────────────────────────
  function _renderIntro() {
    var p = _state.progress;
    var done = [
      p.tones_passed, p.initials_passed, p.finals_passed,
      p.strokes_passed, p.numbers_passed, p.typing_passed
    ];
    var doneCount = done.filter(Boolean).length;
    var allDone = doneCount === 6;

    var prevResult = p.hsk0_final_pct !== undefined
      ? `<div class="hsk0-box" style="background:#F0FDF4;border-color:#6EE7B7">
           <div style="font-size:13px;color:#065F46">
             📊 Lần thi gần nhất: <strong>${p.hsk0_final_pct}%</strong>
             ${p.hsk0_final_passed ? ' — ✅ ĐÃ QUA' : ' — ❌ Chưa qua (cần ≥' + PASS_PCT + '%)'}
           </div>
         </div>` : '';

    var warningBox = !allDone
      ? `<div class="hsk0-box" style="background:#FEF3C7;border-color:#FCD34D">
           <div style="font-size:13px;color:#92400E">
             ⚠️ Bạn mới hoàn thành <strong>${doneCount}/6 bài</strong>.
             Nên học hết trước khi thi để đạt kết quả tốt nhất!
           </div>
         </div>` : '';

    var coverageRows = [
      { label: 'Bài 1: 4 Thanh điệu', key: 'tones_passed', q: '5 câu' },
      { label: 'Bài 2-3: Âm đầu & Vần', key: 'initials_passed', q: '4 câu' },
      { label: 'Bài 4: 8 Nét cơ bản', key: 'strokes_passed', q: '4 câu' },
      { label: 'Bài 5: Số đếm & Ngày tháng', key: 'numbers_passed', q: '6 câu' },
      { label: 'Bài 6: Gõ Pinyin', key: 'typing_passed', q: '6 câu' }
    ].map(function(r) {
      var icon = p[r.key] ? '✅' : '○';
      return `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #E5E7EB;font-size:13px">
        <span>${icon} ${r.label}</span>
        <span style="color:var(--text-secondary)">${r.q}</span>
      </div>`;
    }).join('');

    document.getElementById('hsk0-content').innerHTML = `
      <div class="hsk0-hero" style="background:linear-gradient(135deg,#1E3A5F 0%,#374151 100%)">
        <div class="hsk0-hero-label">HSK 0 · Thi cuối</div>
        <div class="hsk0-hero-title">🎓 Thi cuối HSK 0 Nhập Môn</div>
        <div class="hsk0-hero-desc">25 câu trắc nghiệm bao phủ tất cả 6 bài học. Cần ≥${PASS_PCT}% để hoàn thành HSK 0.</div>
        <div class="hsk0-hero-chips">
          <span class="chip">📝 25 câu</span>
          <span class="chip">🎯 Cần ≥${PASS_PCT}%</span>
          <span class="chip">⏱ ~15 phút</span>
        </div>
      </div>

      ${prevResult}
      ${warningBox}

      <div class="hsk0-box">
        <div class="hsk0-box-title">📋 Nội dung đề thi</div>
        ${coverageRows}
      </div>

      <button class="hsk0-btn-primary" onclick="HSK0Final.startExam()">
        ${p.hsk0_final_passed ? '↺ Thi lại' : '📝 Bắt đầu thi →'}
      </button>
    `;
  }

  // ── Build exam questions ──────────────────────────────
  function startExam() {
    _state.examList = _buildExam();
    _state.examIdx  = 0;
    _state.examScore = 0;
    _state.answered  = false;
    _renderQuestion();
  }

  function _buildExam() {
    var list = [];

    // 5 tone questions
    _shuffle(HSK0_TONE_BANK.slice()).slice(0, 5).forEach(function(q) {
      list.push({ question: q.q, answer: q.ans, options: q.opts });
    });

    // 4 initial questions
    _shuffle(HSK0_INITIAL_BANK.slice()).slice(0, 4).forEach(function(q) {
      list.push({ question: q.q, answer: q.ans, options: q.opts });
    });

    // 4 stroke questions
    _shuffle(HSK0_STROKE_BANK.slice()).slice(0, 4).forEach(function(q) {
      list.push({ question: q.q, answer: q.ans, options: q.opts });
    });

    // 4 number questions (3 base + 1 compound)
    _shuffle(NUMBERS_BASE.slice()).slice(0, 3).forEach(function(n) {
      var wrong = _shuffle(NUMBERS_BASE.filter(function(x) { return x.num !== n.num; })).slice(0, 3);
      list.push({
        display: n.char, displaySize: '48px',
        question: 'Chữ này là số mấy?',
        answer: String(n.num),
        options: _shuffle([String(n.num)].concat(wrong.map(function(x) { return String(x.num); })))
      });
    });
    var comp = _shuffle(QUIZ_COMPOUNDS.slice())[0];
    var cv = comp.val;
    var cwrong = _shuffle([cv-1,cv+1,cv+10,cv-10].filter(function(x){return x>0&&x!==cv;})).slice(0,3);
    list.push({
      display: comp.char, displaySize: '36px',
      question: 'Đây là số mấy?',
      answer: String(cv),
      options: _shuffle([String(cv)].concat(cwrong.map(String)))
    });

    // 4 calendar questions (2 weekday + 1 month + 1 date phrase)
    _shuffle(WEEKDAYS.slice()).slice(0, 2).forEach(function(d) {
      var wrong = _shuffle(WEEKDAYS.filter(function(x) { return x.num !== d.num; })).slice(0, 3);
      list.push({
        display: d.char, displaySize: '18px',
        question: 'Đây là thứ mấy?',
        answer: d.vi,
        options: _shuffle([d.vi].concat(wrong.map(function(x) { return x.vi; })))
      });
    });
    var m = Math.floor(Math.random() * 12) + 1;
    var mChar = MONTH_CHARS[m-1] + '月';
    var mWrong = _shuffle([1,2,3,4,5,6,7,8,9,10,11,12].filter(function(x){return x!==m;})).slice(0,3);
    list.push({
      display: mChar, displaySize: '30px',
      question: 'Đây là tháng mấy?',
      answer: 'Tháng ' + m,
      options: _shuffle(['Tháng '+m].concat(mWrong.map(function(x){return 'Tháng '+x;})))
    });
    var ph = _shuffle(DATE_PHRASES.slice())[0];
    var phWrong = _shuffle(DATE_PHRASES.filter(function(x){return x.zh!==ph.zh;})).slice(0,3);
    list.push({
      display: ph.zh, displaySize: '26px',
      question: 'Cụm từ này có nghĩa là gì?',
      answer: ph.vi,
      options: _shuffle([ph.vi].concat(phWrong.map(function(x){return x.vi;})))
    });

    // 4 pinyin typing questions
    _shuffle(TYPING_POOL.slice()).slice(0, 4).forEach(function(item) {
      var wrong = _shuffle(TYPING_POOL.filter(function(x) { return x.base !== item.base; })).slice(0, 3);
      list.push({
        display: item.char, displaySize: '46px',
        question: 'Pinyin của chữ này là gì?',
        answer: item.base,
        options: _shuffle([item.base].concat(wrong.map(function(x){return x.base;})))
      });
    });

    return _shuffle(list).slice(0, TOTAL_Q);
  }

  // ── Quiz renderer (shared MCQ pattern) ────────────────
  function _renderQuestion() {
    if (_state.examIdx >= _state.examList.length) {
      _renderResult();
      return;
    }

    var q     = _state.examList[_state.examIdx];
    var total = _state.examList.length;
    var pct   = Math.round(_state.examIdx / total * 100);

    var visual = '';
    if (q.display) {
      var isChinese = /[一-鿿]/.test(q.display);
      visual = `
        <div class="hsk0-quiz-audio" style="padding:18px">
          <div class="hsk0-quiz-word"
            style="font-size:${q.displaySize};${isChinese ? "font-family:'Noto Serif SC',serif;" : ''}line-height:1.2">
            ${q.display}
          </div>
        </div>`;
    }

    var options = q.options.map(function(opt, i) {
      var isCorrect = (opt === q.answer);
      var isChinese = /[一-鿿]/.test(opt);
      return `<button class="hsk0-quiz-option" data-correct="${isCorrect}"
        onclick="HSK0Final.pickAnswer(${i},this)"
        style="${isChinese ? 'font-family:Noto Serif SC,serif;font-size:20px' : ''}">${opt}</button>`;
    }).join('');

    document.getElementById('hsk0-content').innerHTML = `
      <div class="hsk0-quiz-progress" style="width:${pct}%"></div>
      <div class="hsk0-quiz-header">
        <div class="hsk0-quiz-label">Câu ${_state.examIdx + 1}/${total} · ✅ ${_state.examScore} đúng</div>
        <div class="hsk0-quiz-question">${q.question}</div>
      </div>
      ${visual}
      <div class="hsk0-quiz-options">${options}</div>
      <div class="hsk0-quiz-feedback" id="exam-fb"></div>
      <button class="hsk0-btn-primary" id="exam-next" style="display:none"
        onclick="HSK0Final.nextQuestion()">
        ${_state.examIdx < total - 1 ? 'Câu tiếp theo →' : 'Xem kết quả 🎉'}
      </button>
    `;
  }

  function pickAnswer(idx, btn) {
    if (_state.answered) return;
    _state.answered = true;

    var isCorrect = btn.dataset.correct === 'true';
    if (isCorrect) _state.examScore++;

    document.querySelectorAll('.hsk0-quiz-option').forEach(function(b) {
      b.disabled = true;
      if (b.dataset.correct === 'true') b.classList.add('correct');
      else if (b === btn && !isCorrect) b.classList.add('wrong');
    });

    var fb = document.getElementById('exam-fb');
    fb.textContent = isCorrect ? '✅ Đúng rồi!' : '❌ Chưa đúng. Đáp án đúng đã được đánh dấu.';
    fb.className = 'hsk0-quiz-feedback show ' + (isCorrect ? 'correct' : 'wrong');
    document.getElementById('exam-next').style.display = 'block';
  }

  function nextQuestion() {
    _state.examIdx++;
    _state.answered = false;
    _renderQuestion();
  }

  // ── Result screen ─────────────────────────────────────
  function _renderResult() {
    var total  = _state.examList.length;
    var pct    = Math.round(_state.examScore / total * 100);
    var passed = pct >= PASS_PCT;

    if (passed) localStorage.setItem('hsk0_passed', '1');
    _saveProgress({
      hsk0_final_pct: pct,
      hsk0_final_passed: passed || _state.progress.hsk0_final_passed,
      hsk0_passed: passed || _state.progress.hsk0_passed
    });

    var emoji = pct === 100 ? '🏆' : pct >= 80 ? '🎓' : pct >= PASS_PCT ? '🎉' : pct >= 55 ? '💪' : '📚';

    var resultBox = passed
      ? `<div class="hsk0-box" style="background:#F0FDF4;border-color:#6EE7B7;text-align:center;padding:20px">
           <div style="font-size:32px;margin-bottom:8px">🎓</div>
           <div style="font-weight:700;font-size:16px;color:#065F46">HSK 0 Nhập Môn — HOÀN THÀNH!</div>
           <div style="font-size:13px;color:#047857;margin-top:6px">
             Bạn đã nắm vững nền tảng: Thanh điệu · Âm vần · Nét viết · Số đếm · Gõ Pinyin
           </div>
         </div>
         <div class="hsk0-box" style="background:#EFF6FF;border-color:#BFDBFE">
           <div style="font-size:13px;color:#1E40AF;line-height:1.8">
             🚀 <strong>Tiếp theo:</strong><br>
             • Học từ vựng HSK 1 → tab <strong>Học</strong><br>
             • Khóa học Story Mai (Phase P) — sắp ra mắt<br>
             • Làm quen Dictionary → tab <strong>Từ điển</strong>
           </div>
         </div>`
      : `<div class="hsk0-box" style="background:#FEF3C7;border-color:#FCD34D">
           <div style="font-size:13px;color:#92400E;line-height:1.8">
             💡 <strong>Gợi ý ôn tập:</strong><br>
             ${pct < 50 ? '• Ôn lại toàn bộ 6 bài học HSK 0<br>' : ''}
             • Ôn kỹ phần chưa chắc trước khi thi lại<br>
             • Cần ≥${PASS_PCT}% (${Math.ceil(total * PASS_PCT / 100)}/${total} câu đúng)
           </div>
         </div>`;

    document.getElementById('hsk0-content').innerHTML = `
      <div class="hsk0-result">
        <div class="hsk0-result-emoji">${emoji}</div>
        <div class="hsk0-result-title">${passed ? 'Xuất sắc! Đã qua!' : pct >= 55 ? 'Gần rồi! Cố thêm!' : 'Chưa qua — ôn lại nhé!'}</div>
        <div class="hsk0-result-msg">${passed ? 'Bạn đã hoàn thành HSK 0 Nhập Môn!' : 'Cần ≥' + PASS_PCT + '% để hoàn thành.'}</div>
        <div class="hsk0-result-stats">
          <div class="hsk0-stat">
            <div class="hsk0-stat-value">${_state.examScore}/${total}</div>
            <div class="hsk0-stat-label">Đúng</div>
          </div>
          <div class="hsk0-stat">
            <div class="hsk0-stat-value" style="color:${passed ? '#059669' : '#DC2626'}">${pct}%</div>
            <div class="hsk0-stat-label">Tỉ lệ</div>
          </div>
          <div class="hsk0-stat">
            <div class="hsk0-stat-value">${PASS_PCT}%</div>
            <div class="hsk0-stat-label">Cần đạt</div>
          </div>
        </div>
        ${resultBox}
        ${passed
          ? '<button class="hsk0-btn-primary" onclick="Router.navigateTo(\'learn\')">🚀 Bắt đầu học từ vựng →</button>'
          : '<button class="hsk0-btn-primary" onclick="HSK0Final.startExam()">↺ Thi lại</button>'
        }
        <button class="hsk0-btn-secondary" onclick="Router.navigateTo(\'tools\')">← Về Công cụ</button>
      </div>
    `;
  }

  // ── Utils ─────────────────────────────────────────────
  function _shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  // ── Public API ────────────────────────────────────────
  return {
    init: init,
    startExam: startExam,
    pickAnswer: pickAnswer,
    nextQuestion: nextQuestion
  };

})();

function initHSK0Final() {
  HSK0Final.init();
}

function initHsk0FinalExam() {
  HSK0Final.init();
}
