// ═══════════════════════════════════════════════════════
// HSK 0 — NUMBERS & DATES (数字/日期) MODULE
// Phase O0.5 — 13 base numbers + weekdays + date expressions
// Flow: intro → numbers → quiz-num → calendar → quiz-cal → homework → done
// ═══════════════════════════════════════════════════════

var HSK0Numbers = (function() {

  var _state = {
    mode: 'intro',
    progress: {},
    quizIdx: 0,
    quizScore: 0,
    quizAnswered: false,
    quizList: [],
    quizType: ''
  };

  // ── Init ──────────────────────────────────────────────
  function init() {
    _loadProgress();
    _renderIntro();
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
    Object.keys(updates).forEach(function(k) { _state.progress[k] = updates[k]; });
    localStorage.setItem('hsk_progress_v0', JSON.stringify(_state.progress));
  }

  // ── Section 1: Intro ──────────────────────────────────
  function _renderIntro() {
    _state.mode = 'intro';
    var p = _state.progress;

    var html = `
      <div class="hsk0-hero">
        <div class="hsk0-hero-label">HSK 0 · Bài 5</div>
        <div class="hsk0-hero-title">🔢 Số đếm & Ngày tháng (数字/日期)</div>
        <div class="hsk0-hero-desc">Mua sắm, đặt lịch, giới thiệu ngày sinh — số đếm là nền tảng giao tiếp thực tế nhất!</div>
        <div class="hsk0-hero-chips">
          <span class="chip">🔢 13 số cơ bản</span>
          <span class="chip">📅 7 ngày + 12 tháng</span>
          <span class="chip">⏱ ~25 phút</span>
        </div>
      </div>

      <div class="hsk0-box">
        <div class="hsk0-box-title">💡 Học số để làm gì?</div>
        <div class="num-use-grid">
          <div class="num-use-item">💰 <strong>Mua sắm</strong><br><span style="font-family:serif">多少钱？</span><br>Bao nhiêu tiền?</div>
          <div class="num-use-item">📞 <strong>Số điện thoại</strong><br><span style="font-family:serif">我的号码是…</span><br>Số tôi là…</div>
          <div class="num-use-item">📅 <strong>Đặt lịch</strong><br><span style="font-family:serif">几月几号？</span><br>Ngày tháng mấy?</div>
          <div class="num-use-item">🎂 <strong>Tuổi tác</strong><br><span style="font-family:serif">你几岁？</span><br>Bạn bao nhiêu tuổi?</div>
        </div>
      </div>

      <div class="hsk0-box" style="background:#EFF6FF;border-color:#BFDBFE">
        <div style="font-size:13px;color:#1E40AF;line-height:1.8">
          📋 <strong>Nội dung bài học:</strong><br>
          1. 13 số cơ bản (0–10, 百, 千) + quy tắc ghép số${p.numbers_quiz_pct ? ' ✅' : ''}<br>
          2. Quiz số đếm (10 câu)${p.numbers_quiz_pct ? ' ✅ ' + p.numbers_quiz_pct + '%' : ''}<br>
          3. Ngày trong tuần + tháng + biểu thức ngày${p.numbers_cal_pct ? ' ✅' : ''}<br>
          4. Bài tập về nhà (15 câu, cần ≥80%)${p.numbers_hw_pct ? ' ✅ ' + p.numbers_hw_pct + '%' : ''}
        </div>
      </div>

      <button class="hsk0-btn-primary" onclick="HSK0Numbers.showNumbers()">
        ${p.numbers_quiz_pct ? '↺ Xem lại số đếm' : 'Bắt đầu học số đếm →'}
      </button>
      ${p.numbers_quiz_pct ? `<button class="hsk0-btn-secondary" onclick="HSK0Numbers.showCalendar()">Học ngày tháng 📅</button>` : ''}
      ${p.numbers_cal_pct ? `<button class="hsk0-btn-secondary" onclick="HSK0Numbers.startQuiz('hw')">Bài tập về nhà (15 câu)</button>` : ''}
    `;
    document.getElementById('hsk0-content').innerHTML = html;
  }

  // ── Section 2: Learn Numbers ──────────────────────────
  function showNumbers() {
    _state.mode = 'numbers';

    var cards = NUMBERS_BASE.map(function(n) {
      return `
        <button class="num-card" style="border-color:${n.color}"
          onclick="HSK0Numbers.speak('${n.char}')">
          <div class="num-card-char" style="color:${n.color}">${n.char}</div>
          <div class="num-card-arabic">${n.num}</div>
          <div class="num-card-pinyin">${n.pinyin}</div>
          <div class="num-card-vi">${n.vi}</div>
        </button>`;
    }).join('');

    var compoundRows = COMPOUND_EXAMPLES.map(function(c) {
      return `<div class="num-compound-row" onclick="HSK0Numbers.speak('${c.char}')">
        <span class="num-compound-val">${c.val}</span>
        <span class="num-compound-arrow">→</span>
        <span class="num-compound-char">${c.char}</span>
        <span class="num-compound-py">${c.py}</span>
        <span class="num-compound-rule">${c.rule}</span>
      </div>`;
    }).join('');

    var html = `
      <div class="hsk0-section-title">13 Số Cơ Bản — Nhấn để nghe phát âm</div>
      <div class="num-grid">${cards}</div>

      <div class="hsk0-box">
        <div class="hsk0-box-title">⚡ Ghép số — nhấn để nghe</div>
        <div class="num-compound-list">${compoundRows}</div>
      </div>

      <div class="hsk0-box" style="background:#FEF3C7;border-color:#FCD34D">
        <div style="font-size:13px;color:#92400E;line-height:1.9">
          ⚠️ <strong>3 quy tắc quan trọng:</strong><br>
          1. <strong>11–19</strong> = 十 + số đơn vị (十四 = 14, KHÔNG nói "一十四")<br>
          2. <strong>20–99</strong> = số chục + 十 [+ số đơn vị] (三十五 = 35)<br>
          3. <strong>200, 2000</strong>: dùng <strong style="color:#DC2626">两</strong> thay 二
          (<span style="font-family:serif">两百 ✓</span> · <span style="font-family:serif;text-decoration:line-through;opacity:0.6">二百 ✗</span>)
        </div>
      </div>

      <button class="hsk0-btn-primary" onclick="HSK0Numbers.startQuiz('num')">💪 Quiz số đếm (10 câu) →</button>
      <button class="hsk0-btn-secondary" onclick="HSK0Numbers._renderIntro()">← Giới thiệu</button>
    `;
    document.getElementById('hsk0-content').innerHTML = html;
  }

  // ── Section 3: Learn Calendar ─────────────────────────
  function showCalendar() {
    _state.mode = 'calendar';

    var dayCards = WEEKDAYS.map(function(d) {
      return `
        <button class="num-day-card${d.num >= 6 ? ' weekend' : ''}"
          onclick="HSK0Numbers.speak('${d.char}')">
          <div class="num-day-char">${d.char}</div>
          <div class="num-day-py">${d.pinyin}</div>
          <div class="num-day-vi">${d.vi}</div>
          <div class="num-day-alt">${d.alt}</div>
        </button>`;
    }).join('');

    var monthChips = MONTH_CHARS.map(function(c, i) {
      return `<span class="num-month-chip" onclick="HSK0Numbers.speak('${c}月')">${c}月</span>`;
    }).join('');

    var phraseRows = DATE_PHRASES.map(function(ph) {
      return `<div class="num-phrase-row" onclick="HSK0Numbers.speak('${ph.zh}')">
        <span class="num-phrase-zh">${ph.zh}</span>
        <span class="num-phrase-py">${ph.py}</span>
        <span class="num-phrase-vi">${ph.vi}</span>
      </div>`;
    }).join('');

    var html = `
      <div class="hsk0-section-title">Ngày trong tuần (星期) — Nhấn để nghe</div>
      <div class="num-weekday-grid">${dayCards}</div>

      <div class="hsk0-box">
        <div class="hsk0-box-title">📅 Tháng (月) — Quy tắc đơn giản</div>
        <div style="font-size:13px;color:var(--text);line-height:1.8">
          Tháng = số + 月: <strong>一月</strong> (T.1) · <strong>五月</strong> (T.5) · <strong>十二月</strong> (T.12)<br>
          Hỏi ngày: <strong>几号？</strong> · Hỏi tháng: <strong>几月？</strong> · Hỏi thứ: <strong>星期几？</strong><br>
          Ví dụ: <span style="font-family:serif;font-size:15px">三月八号</span> = ngày 8 tháng 3
        </div>
        <div class="num-month-row">${monthChips}</div>
      </div>

      <div class="hsk0-box">
        <div class="hsk0-box-title">🗓️ Biểu thức ngày thường gặp — Nhấn để nghe</div>
        <div class="num-phrase-list">${phraseRows}</div>
      </div>

      <div class="hsk0-box" style="background:#F0FDF4;border-color:#6EE7B7">
        <div style="font-size:13px;color:#065F46;line-height:1.7">
          💡 <strong>Định dạng ngày tháng Trung Quốc:</strong> Năm → Tháng → Ngày<br>
          <span style="font-family:serif">2025年3月8号</span><br>
          Đọc: èr líng èr wǔ nián sān yuè bā hào
        </div>
      </div>

      <button class="hsk0-btn-primary" onclick="HSK0Numbers.startQuiz('cal')">💪 Quiz ngày tháng (10 câu) →</button>
      <button class="hsk0-btn-secondary" onclick="HSK0Numbers.showNumbers()">← Số đếm</button>
    `;
    document.getElementById('hsk0-content').innerHTML = html;
  }

  // ── Quizzes ───────────────────────────────────────────
  function startQuiz(type) {
    _state.mode = 'quiz-' + type;
    _state.quizIdx = 0;
    _state.quizScore = 0;
    _state.quizAnswered = false;
    _state.quizType = type;
    _state.quizList = type === 'num' ? _buildNumbersQuiz()
                    : type === 'cal' ? _buildCalendarQuiz()
                    : _buildHomeworkQuiz();
    _renderQuiz();
  }

  function _buildNumbersQuiz() {
    var list = [];
    var pool = _shuffle(NUMBERS_BASE.slice());

    // 5 hanzi → arabic value
    pool.slice(0, 5).forEach(function(n) {
      var wrong = _shuffle(NUMBERS_BASE.filter(function(x) { return x.num !== n.num; })).slice(0, 3);
      var opts = _shuffle([String(n.num)].concat(wrong.map(function(x) { return String(x.num); })));
      list.push({
        type: 'visual-mcq', display: n.char,
        question: 'Chữ này là số mấy?',
        answer: String(n.num), options: opts
      });
    });

    // 3 value → hanzi
    pool.slice(5, 8).forEach(function(n) {
      var wrong = _shuffle(NUMBERS_BASE.filter(function(x) { return x.char !== n.char; })).slice(0, 3);
      var opts = _shuffle([n.char].concat(wrong.map(function(x) { return x.char; })));
      list.push({
        type: 'text-mcq',
        question: 'Số <strong>' + n.num + '</strong> viết bằng Hán tự là?',
        answer: n.char, options: opts
      });
    });

    // 2 compound → value
    _shuffle(QUIZ_COMPOUNDS.slice()).slice(0, 2).forEach(function(c) {
      var v = c.val;
      var wrong = _shuffle([v-1, v+1, v+10, Math.floor(v/10)+(v%10)*10]
        .filter(function(x) { return x > 0 && x !== v && x < 100; })).slice(0, 3);
      list.push({
        type: 'visual-mcq', display: c.char, displaySize: '36px',
        question: 'Đây là số mấy?',
        answer: String(v), options: _shuffle([String(v)].concat(wrong.map(String)))
      });
    });

    return _shuffle(list).slice(0, 10);
  }

  function _buildCalendarQuiz() {
    var list = [];
    var shuffledDays = _shuffle(WEEKDAYS.slice());

    // 5 weekday char → Vietnamese day name
    shuffledDays.slice(0, 5).forEach(function(d) {
      var wrong = _shuffle(WEEKDAYS.filter(function(x) { return x.num !== d.num; })).slice(0, 3);
      var opts = _shuffle([d.vi].concat(wrong.map(function(x) { return x.vi; })));
      list.push({
        type: 'visual-mcq', display: d.char, displaySize: '20px',
        question: 'Đây là thứ mấy?',
        answer: d.vi, options: opts
      });
    });

    // 3 month char → Vietnamese month
    _shuffle([1,2,3,4,5,6,7,8,9,10,11,12]).slice(0, 3).forEach(function(m) {
      var monthChar = MONTH_CHARS[m-1] + '月';
      var wrong = _shuffle([1,2,3,4,5,6,7,8,9,10,11,12].filter(function(x) { return x !== m; })).slice(0, 3);
      var opts = _shuffle(['Tháng ' + m].concat(wrong.map(function(x) { return 'Tháng ' + x; })));
      list.push({
        type: 'visual-mcq', display: monthChar, displaySize: '34px',
        question: 'Đây là tháng mấy?',
        answer: 'Tháng ' + m, options: opts
      });
    });

    // 2 Vietnamese phrase → Chinese
    _shuffle(DATE_PHRASES.slice()).slice(0, 2).forEach(function(ph) {
      var wrong = _shuffle(DATE_PHRASES.filter(function(x) { return x.zh !== ph.zh; })).slice(0, 3);
      var opts = _shuffle([ph.zh].concat(wrong.map(function(x) { return x.zh; })));
      list.push({
        type: 'text-mcq',
        question: '"<strong>' + ph.vi + '</strong>" trong tiếng Trung là?',
        answer: ph.zh, options: opts
      });
    });

    return _shuffle(list).slice(0, 10);
  }

  function _buildHomeworkQuiz() {
    var list = [];

    // 5 number: hanzi → value (all 13 numbers in pool)
    _shuffle(NUMBERS_BASE.slice()).slice(0, 5).forEach(function(n) {
      var wrong = _shuffle(NUMBERS_BASE.filter(function(x) { return x.num !== n.num; })).slice(0, 3);
      var opts = _shuffle([String(n.num)].concat(wrong.map(function(x) { return String(x.num); })));
      list.push({
        type: 'visual-mcq', display: n.char,
        question: 'Số mấy?',
        answer: String(n.num), options: opts
      });
    });

    // 4 weekday: char → Vietnamese
    _shuffle(WEEKDAYS.slice()).slice(0, 4).forEach(function(d) {
      var wrong = _shuffle(WEEKDAYS.filter(function(x) { return x.num !== d.num; })).slice(0, 3);
      var opts = _shuffle([d.vi].concat(wrong.map(function(x) { return x.vi; })));
      list.push({
        type: 'visual-mcq', display: d.char, displaySize: '20px',
        question: 'Thứ mấy?',
        answer: d.vi, options: opts
      });
    });

    // 3 compound: char → value
    _shuffle(QUIZ_COMPOUNDS.slice()).slice(0, 3).forEach(function(c) {
      var v = c.val;
      var wrong = _shuffle([v-1, v+1, v+10, v-10].filter(function(x) { return x > 0 && x !== v; })).slice(0, 3);
      list.push({
        type: 'visual-mcq', display: c.char, displaySize: '34px',
        question: 'Số mấy?',
        answer: String(v), options: _shuffle([String(v)].concat(wrong.map(String)))
      });
    });

    // 3 month: char → Vietnamese
    _shuffle([1,2,3,4,5,6,7,8,9,10,11,12]).slice(0, 3).forEach(function(m) {
      var monthChar = MONTH_CHARS[m-1] + '月';
      var wrong = _shuffle([1,2,3,4,5,6,7,8,9,10,11,12].filter(function(x) { return x !== m; })).slice(0, 3);
      var opts = _shuffle(['Tháng ' + m].concat(wrong.map(function(x) { return 'Tháng ' + x; })));
      list.push({
        type: 'visual-mcq', display: monthChar, displaySize: '32px',
        question: 'Tháng mấy?',
        answer: 'Tháng ' + m, options: opts
      });
    });

    return _shuffle(list).slice(0, 15);
  }

  // ── Quiz Renderer (shared) ────────────────────────────
  function _renderQuiz() {
    if (_state.quizIdx >= _state.quizList.length) {
      _renderQuizResult();
      return;
    }

    var q = _state.quizList[_state.quizIdx];
    var total = _state.quizList.length;
    var progress = Math.round(_state.quizIdx / total * 100);

    var visualSection = '';
    if (q.type === 'visual-mcq' && q.display) {
      var sz = q.displaySize || '50px';
      visualSection = `
        <div class="hsk0-quiz-audio" style="padding:20px">
          <div class="hsk0-quiz-word" style="font-size:${sz};font-family:'Noto Serif SC',serif;line-height:1.2">
            ${q.display}
          </div>
        </div>`;
    }

    var options = q.options.map(function(opt, i) {
      var isCorrect = (opt === q.answer);
      return `<button class="hsk0-quiz-option" data-correct="${isCorrect}"
        onclick="HSK0Numbers.pickAnswer(${i}, this)">${opt}</button>`;
    }).join('');

    document.getElementById('hsk0-content').innerHTML = `
      <div class="hsk0-quiz-progress" style="width:${progress}%"></div>
      <div class="hsk0-quiz-header">
        <div class="hsk0-quiz-label">Câu ${_state.quizIdx + 1}/${total}</div>
        <div class="hsk0-quiz-question">${q.question}</div>
      </div>
      ${visualSection}
      <div class="hsk0-quiz-options" id="quiz-options">${options}</div>
      <div class="hsk0-quiz-feedback" id="quiz-fb"></div>
      <button class="hsk0-btn-primary" id="quiz-next" style="display:none"
        onclick="HSK0Numbers.nextQuestion()">
        ${_state.quizIdx < total - 1 ? 'Câu tiếp theo →' : 'Xem kết quả 🎉'}
      </button>
    `;
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

    if (section === 'num') {
      _saveProgress({ numbers_quiz_pct: pct });
    } else if (section === 'cal') {
      _saveProgress({ numbers_cal_pct: pct });
    } else {
      _saveProgress({ numbers_hw_pct: pct, numbers_passed: passed });
    }

    var nextBtn = '';
    if (section === 'num') {
      nextBtn = '<button class="hsk0-btn-primary" onclick="HSK0Numbers.showCalendar()">Tiếp: Ngày tháng 📅 →</button>';
    } else if (section === 'cal') {
      nextBtn = '<button class="hsk0-btn-primary" onclick="HSK0Numbers.startQuiz(\'hw\')">Tiếp: Bài tập về nhà (15 câu) →</button>';
    } else if (section === 'hw' && passed) {
      nextBtn = '<button class="hsk0-btn-primary" onclick="HSK0Numbers._onComplete()">🎉 Xong Bài 5! →</button>';
    } else {
      nextBtn = '<button class="hsk0-btn-primary" onclick="HSK0Numbers.startQuiz(\'hw\')">Làm lại bài tập về nhà</button>';
    }

    var backFn = section === 'num' ? 'showNumbers' : section === 'cal' ? 'showCalendar' : '_renderIntro';

    document.getElementById('hsk0-content').innerHTML = `
      <div class="hsk0-result">
        <div class="hsk0-result-emoji">${emoji}</div>
        <div class="hsk0-result-title">${pct >= 80 ? 'Làm tốt lắm!' : 'Cố lên nhé!'}</div>
        <div class="hsk0-result-msg">
          ${pct >= 80 ? 'Bạn đã nắm vững phần này!' : 'Ôn lại bài học rồi thử lại nhé.'}
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
        <button class="hsk0-btn-secondary" onclick="HSK0Numbers.${backFn}()">← Xem lại bài học</button>
      </div>
    `;
  }

  // ── Complete ──────────────────────────────────────────
  function _onComplete() {
    _toast('🎉 Bài 5 hoàn thành! Bài 6 (Gõ Pinyin) sắp ra mắt.');
    setTimeout(function() { Router.navigateTo('tools'); }, 1800);
  }

  // ── TTS ───────────────────────────────────────────────
  function speak(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    u.rate = 0.8;
    window.speechSynthesis.speak(u);
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
    showNumbers: showNumbers,
    showCalendar: showCalendar,
    startQuiz: startQuiz,
    pickAnswer: pickAnswer,
    nextQuestion: nextQuestion,
    speak: speak,
    _renderIntro: _renderIntro,
    _onComplete: _onComplete
  };

})();

function initHSK0Numbers() {
  HSK0Numbers.init();
}
