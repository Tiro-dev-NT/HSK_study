// ═══════════════════════════════════════════════════════
// HSK 0 — PLACEMENT TEST MODULE (Kiểm tra trình độ)
// Phase O0 — 30 câu, gate ≥80% → skip HSK 0 & go to vocab
// Progress: hsk0_placement_pct, hsk0_placement_passed
// ═══════════════════════════════════════════════════════

var HSK0Placement = (function() {

  var PASS_PCT = 80;
  var TOTAL_Q  = 30;

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

    var prevResult = p.hsk0_placement_pct !== undefined
      ? `<div class="hsk0-box" style="background:${p.hsk0_placement_passed ? '#F0FDF4' : '#FEF3C7'};border-color:${p.hsk0_placement_passed ? '#6EE7B7' : '#FCD34D'}">
           <div style="font-size:13px;color:${p.hsk0_placement_passed ? '#065F46' : '#92400E'}">
             📊 Lần kiểm tra gần nhất: <strong>${p.hsk0_placement_pct}%</strong>
             ${p.hsk0_placement_passed ? ' — ✅ ĐÃ QUA (bỏ qua HSK 0)' : ' — Chưa đủ để bỏ qua HSK 0'}
           </div>
         </div>` : '';

    document.getElementById('hsk0-content').innerHTML = `
      <div class="hsk0-hero" style="background:linear-gradient(135deg,#7C3AED 0%,#4F46E5 100%)">
        <div class="hsk0-hero-label">HSK 0 · Kiểm tra đầu vào</div>
        <div class="hsk0-hero-title">⚡ Bạn đã biết Pinyin chưa?</div>
        <div class="hsk0-hero-desc">Nếu bạn đã học Pinyin từ trước, làm bài kiểm tra nhanh này để bỏ qua 6 bài HSK 0 và vào thẳng từ vựng!</div>
        <div class="hsk0-hero-chips">
          <span class="chip">📝 30 câu</span>
          <span class="chip">🎯 Cần ≥${PASS_PCT}%</span>
          <span class="chip">⏱ ~12 phút</span>
        </div>
      </div>

      ${prevResult}

      <div class="hsk0-box">
        <div class="hsk0-box-title">📋 Bài kiểm tra gồm những gì?</div>
        <div style="font-size:13px;color:var(--text);line-height:1.9">
          ✦ 6 câu về <strong>4 thanh điệu</strong> (tone marks)<br>
          ✦ 6 câu về <strong>âm đầu</strong> (initials: zh/ch/sh vs z/c/s, j/q/x...)<br>
          ✦ 5 câu về <strong>8 nét cơ bản</strong> (stroke names + directions)<br>
          ✦ 7 câu về <strong>số đếm & ngày tháng</strong> (numbers + calendar)<br>
          ✦ 6 câu về <strong>Pinyin typing</strong> (char → pinyin recognition)
        </div>
      </div>

      <div class="hsk0-box" style="background:#F5F3FF;border-color:#C4B5FD">
        <div style="font-size:13px;color:#5B21B6;line-height:1.8">
          💡 <strong>Kết quả:</strong><br>
          • ≥${PASS_PCT}% → Bỏ qua toàn bộ HSK 0, vào học từ vựng ngay<br>
          • &lt;${PASS_PCT}% → Học từng bài HSK 0 theo thứ tự (khuyến khích!)<br>
          <em>Kết quả không ảnh hưởng đến tài khoản hay tiến độ học.</em>
        </div>
      </div>

      <button class="hsk0-btn-primary" onclick="HSK0Placement.startTest()">
        ${p.hsk0_placement_passed ? '↺ Kiểm tra lại' : '⚡ Bắt đầu kiểm tra →'}
      </button>
      <button class="hsk0-btn-secondary" onclick="Router.navigateTo('learn')">Không, tôi muốn học từng bài</button>
    `;
  }

  // ── Build placement questions ─────────────────────────
  function startTest() {
    _state.examList = _buildPlacement();
    _state.examIdx  = 0;
    _state.examScore = 0;
    _state.answered  = false;
    _renderQuestion();
  }

  function _buildPlacement() {
    var list = [];

    // 6 tone questions (all 4 from TONE_BANK + 2 about tone rules)
    _shuffle(HSK0_TONE_BANK.slice()).slice(0, 6).forEach(function(q) {
      list.push({ question: q.q, answer: q.ans, options: q.opts });
    });

    // 6 initial questions
    _shuffle(HSK0_INITIAL_BANK.slice()).slice(0, 6).forEach(function(q) {
      list.push({ question: q.q, answer: q.ans, options: q.opts });
    });

    // 5 stroke questions
    _shuffle(HSK0_STROKE_BANK.slice()).slice(0, 5).forEach(function(q) {
      list.push({ question: q.q, answer: q.ans, options: q.opts });
    });

    // 7 number + calendar questions
    // 3 base numbers: char → value
    _shuffle(NUMBERS_BASE.slice()).slice(0, 3).forEach(function(n) {
      var wrong = _shuffle(NUMBERS_BASE.filter(function(x){return x.num!==n.num;})).slice(0,3);
      list.push({
        display: n.char, displaySize: '46px',
        question: 'Chữ này là số mấy?',
        answer: String(n.num),
        options: _shuffle([String(n.num)].concat(wrong.map(function(x){return String(x.num);})))
      });
    });
    // 2 compound numbers
    _shuffle(QUIZ_COMPOUNDS.slice()).slice(0, 2).forEach(function(c) {
      var v = c.val;
      var w = _shuffle([v-1,v+1,v+10,v-10].filter(function(x){return x>0&&x!==v;})).slice(0,3);
      list.push({
        display: c.char, displaySize: '34px',
        question: 'Ghép số: đây là bao nhiêu?',
        answer: String(v),
        options: _shuffle([String(v)].concat(w.map(String)))
      });
    });
    // 2 weekday
    _shuffle(WEEKDAYS.slice()).slice(0, 2).forEach(function(d) {
      var wrong = _shuffle(WEEKDAYS.filter(function(x){return x.num!==d.num;})).slice(0,3);
      list.push({
        display: d.char, displaySize: '16px',
        question: 'Đây là thứ mấy?',
        answer: d.vi,
        options: _shuffle([d.vi].concat(wrong.map(function(x){return x.vi;})))
      });
    });

    // 6 pinyin recognition questions (char → pinyin base)
    _shuffle(TYPING_POOL.slice()).slice(0, 6).forEach(function(item) {
      var wrong = _shuffle(TYPING_POOL.filter(function(x){return x.base!==item.base;})).slice(0,3);
      list.push({
        display: item.char, displaySize: '46px',
        question: 'Pinyin của chữ này là gì?',
        answer: item.base,
        options: _shuffle([item.base].concat(wrong.map(function(x){return x.base;})))
      });
    });

    return _shuffle(list).slice(0, TOTAL_Q);
  }

  // ── Quiz renderer ─────────────────────────────────────
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
        onclick="HSK0Placement.pickAnswer(${i},this)"
        style="${isChinese ? 'font-family:Noto Serif SC,serif;font-size:20px' : ''}">${opt}</button>`;
    }).join('');

    document.getElementById('hsk0-content').innerHTML = `
      <div class="hsk0-quiz-progress" style="width:${pct}%;background:#7C3AED"></div>
      <div class="hsk0-quiz-header">
        <div class="hsk0-quiz-label">Câu ${_state.examIdx + 1}/${total} · ✅ ${_state.examScore} đúng</div>
        <div class="hsk0-quiz-question">${q.question}</div>
      </div>
      ${visual}
      <div class="hsk0-quiz-options">${options}</div>
      <div class="hsk0-quiz-feedback" id="pl-fb"></div>
      <button class="hsk0-btn-primary" id="pl-next" style="display:none"
        onclick="HSK0Placement.nextQuestion()">
        ${_state.examIdx < total - 1 ? 'Câu tiếp theo →' : 'Xem kết quả ⚡'}
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

    var fb = document.getElementById('pl-fb');
    fb.textContent = isCorrect ? '✅ Đúng!' : '❌ Chưa đúng. Đáp án đúng đã được đánh dấu.';
    fb.className = 'hsk0-quiz-feedback show ' + (isCorrect ? 'correct' : 'wrong');
    document.getElementById('pl-next').style.display = 'block';
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

    _saveProgress({
      hsk0_placement_pct: pct,
      hsk0_placement_passed: passed,
      // If passed, mark all O0 bài as complete (skip them)
      tones_passed:    passed || _state.progress.tones_passed,
      initials_passed: passed || _state.progress.initials_passed,
      finals_passed:   passed || _state.progress.finals_passed,
      strokes_passed:  passed || _state.progress.strokes_passed,
      numbers_passed:  passed || _state.progress.numbers_passed,
      typing_passed:   passed || _state.progress.typing_passed
    });

    var emoji = pct === 100 ? '🏆' : pct >= 90 ? '⚡' : pct >= PASS_PCT ? '🎉' : pct >= 60 ? '💪' : '📚';

    var resultContent = passed
      ? `<div class="hsk0-box" style="background:#F5F3FF;border-color:#A78BFA;text-align:center;padding:20px">
           <div style="font-size:30px;margin-bottom:8px">⚡</div>
           <div style="font-weight:700;font-size:16px;color:#5B21B6">Bạn đã thành thạo nền tảng Pinyin!</div>
           <div style="font-size:13px;color:#7C3AED;margin-top:6px">
             Tất cả bài học HSK 0 đã được đánh dấu hoàn thành.<br>Bắt đầu học từ vựng HSK 1 ngay!
           </div>
         </div>
         <button class="hsk0-btn-primary" onclick="Router.navigateTo('learn')">🚀 Vào học từ vựng HSK 1 →</button>
         <button class="hsk0-btn-secondary" onclick="Router.navigateTo('learn')">Tham khảo bài học HSK 0</button>`
      : `<div class="hsk0-box" style="background:#FEF3C7;border-color:#FCD34D">
           <div style="font-size:13px;color:#92400E;line-height:1.9">
             💡 <strong>Kết quả ${pct}% — chưa đạt ${PASS_PCT}%:</strong><br>
             ${pct < 50 ? '• Nên học toàn bộ khóa HSK 0 từ đầu<br>' : '• Ôn lại các phần còn yếu<br>'}
             • Nhấp vào từng bài để học và làm bài tập<br>
             • Sau đó thi cuối HSK 0 (25 câu, cần ≥70%)
           </div>
         </div>
         <button class="hsk0-btn-primary" onclick="Router.navigateTo('learn')">📚 Học từng bài HSK 0</button>
         <button class="hsk0-btn-secondary" onclick="HSK0Placement.startTest()">↺ Kiểm tra lại</button>`;

    document.getElementById('hsk0-content').innerHTML = `
      <div class="hsk0-result">
        <div class="hsk0-result-emoji">${emoji}</div>
        <div class="hsk0-result-title">${passed ? 'Bỏ qua HSK 0 thành công!' : 'Nên học từng bài HSK 0!'}</div>
        <div class="hsk0-result-msg">Bạn trả lời đúng ${_state.examScore}/${total} câu</div>
        <div class="hsk0-result-stats">
          <div class="hsk0-stat">
            <div class="hsk0-stat-value">${_state.examScore}/${total}</div>
            <div class="hsk0-stat-label">Đúng</div>
          </div>
          <div class="hsk0-stat">
            <div class="hsk0-stat-value" style="color:${passed ? '#7C3AED' : '#DC2626'}">${pct}%</div>
            <div class="hsk0-stat-label">Tỉ lệ</div>
          </div>
          <div class="hsk0-stat">
            <div class="hsk0-stat-value">${PASS_PCT}%</div>
            <div class="hsk0-stat-label">Cần đạt</div>
          </div>
        </div>
        ${resultContent}
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
    startTest: startTest,
    pickAnswer: pickAnswer,
    nextQuestion: nextQuestion
  };

})();

function initHSK0Placement() {
  HSK0Placement.init();
}
