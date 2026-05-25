// ═══════════════════════════════════════════════════════
// HSK 0 — PINYIN TYPING (拼音输入法) MODULE
// Phase O0.6 — Luyện gõ Pinyin trên điện thoại / máy tính
// Flow: intro → guide → drill(20q) → quiz(10q) → homework(15q) → done
// ═══════════════════════════════════════════════════════

var HSK0Typing = (function() {

  var _state = {
    mode: 'intro',
    progress: {},
    drillList: [],
    drillIdx: 0,
    drillScore: 0,
    quizList: [],
    quizIdx: 0,
    quizScore: 0,
    quizAnswered: false,
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
        <div class="hsk0-hero-label">HSK 0 · Bài 6</div>
        <div class="hsk0-hero-title">⌨️ Gõ Pinyin (拼音输入法)</div>
        <div class="hsk0-hero-desc">Học cách gõ tiếng Trung trên điện thoại và máy tính — kỹ năng không thể thiếu để tự tra từ và nhắn tin!</div>
        <div class="hsk0-hero-chips">
          <span class="chip">📱 iOS · Android · Windows</span>
          <span class="chip">⌨️ 20 ký tự thực hành</span>
          <span class="chip">⏱ ~20 phút</span>
        </div>
      </div>

      <div class="hsk0-box">
        <div class="hsk0-box-title">💡 Pinyin input hoạt động thế nào?</div>
        <div class="typing-how-grid">
          <div class="typing-how-step">
            <div class="typing-how-num">1</div>
            <div class="typing-how-text">Gõ chữ cái Pinyin<br><span class="typing-how-sub">không cần dấu thanh</span></div>
          </div>
          <div class="typing-how-step">
            <div class="typing-how-num">2</div>
            <div class="typing-how-text">Xem danh sách<br><span class="typing-how-sub">ký tự gợi ý</span></div>
          </div>
          <div class="typing-how-step">
            <div class="typing-how-num">3</div>
            <div class="typing-how-text">Chọn đúng<br><span class="typing-how-sub">ký tự cần dùng</span></div>
          </div>
        </div>
        <div class="typing-example-row">
          <span class="typing-eg-input">m a</span>
          <span class="typing-eg-arrow">→</span>
          <div class="typing-eg-cands">
            <span class="typing-eg-cand active">妈</span>
            <span class="typing-eg-cand">马</span>
            <span class="typing-eg-cand">吗</span>
            <span class="typing-eg-cand">麻</span>
          </div>
        </div>
      </div>

      <div class="hsk0-box" style="background:#EFF6FF;border-color:#BFDBFE">
        <div style="font-size:13px;color:#1E40AF;line-height:1.9">
          📋 <strong>Nội dung bài học:</strong><br>
          1. Hướng dẫn cài đặt bàn phím (iOS / Android / Windows)${p.typing_guide_seen ? ' ✅' : ''}<br>
          2. Luyện gõ 20 ký tự (thực hành typing)${p.typing_drill_done ? ' ✅ Hoàn thành' : ''}<br>
          3. Quiz nhận diện Pinyin (10 câu)${p.typing_quiz_pct !== undefined ? ' ✅ ' + p.typing_quiz_pct + '%' : ''}<br>
          4. Bài tập về nhà (15 câu, cần ≥80%)${p.typing_hw_pct !== undefined ? ' ✅ ' + p.typing_hw_pct + '%' : ''}
        </div>
      </div>

      <button class="hsk0-btn-primary" onclick="HSK0Typing.showGuide()">
        ${p.typing_guide_seen ? '↺ Xem lại hướng dẫn' : '📱 Cài đặt bàn phím →'}
      </button>
      ${p.typing_guide_seen ? `<button class="hsk0-btn-secondary" onclick="HSK0Typing.startDrill()">⌨️ Luyện gõ (20 ký tự)</button>` : ''}
      ${p.typing_drill_done ? `<button class="hsk0-btn-secondary" onclick="HSK0Typing.startQuiz('mc')">Quiz Pinyin (10 câu)</button>` : ''}
      ${p.typing_quiz_pct !== undefined ? `<button class="hsk0-btn-secondary" onclick="HSK0Typing.startQuiz('hw')">Bài tập về nhà (15 câu)</button>` : ''}
    `;
    document.getElementById('hsk0-content').innerHTML = html;
  }

  // ── Section 2: Platform Guide ─────────────────────────
  function showGuide() {
    _state.mode = 'guide';
    _saveProgress({ typing_guide_seen: true });

    var cards = TYPING_PLATFORMS.map(function(p) {
      var steps = p.steps.map(function(s, i) {
        return `<div class="typing-step">
          <span class="typing-step-num">${i + 1}</span>
          <span>${s}</span>
        </div>`;
      }).join('');
      return `
        <div class="typing-platform-card" style="border-color:${p.color};background:${p.bg}">
          <div class="typing-platform-header" style="color:${p.color}">
            <span class="typing-platform-icon">${p.icon}</span>
            <span class="typing-platform-name">${p.name}</span>
          </div>
          <div class="typing-steps">${steps}</div>
        </div>`;
    }).join('');

    var html = `
      <div class="hsk0-section-title">📱 Cài đặt bàn phím Pinyin theo thiết bị</div>
      ${cards}

      <div class="hsk0-box" style="background:#FEF3C7;border-color:#FCD34D">
        <div style="font-size:13px;color:#92400E;line-height:1.9">
          ⚠️ <strong>Mẹo quan trọng:</strong><br>
          • Khi gõ, <strong>không cần gõ dấu thanh điệu</strong> (chỉ gõ chữ cái thường)<br>
          • Nhiều chữ có cùng Pinyin → cần chọn đúng chữ từ danh sách gợi ý<br>
          • Ví dụ: "ma" gợi ý: <span style="font-family:serif">妈 马 吗 麻 骂</span> — cần chọn đúng nghĩa<br>
          • Luyện mỗi ngày 5 phút, chỉ 2-3 tuần là quen tốc độ!
        </div>
      </div>

      <button class="hsk0-btn-primary" onclick="HSK0Typing.startDrill()">⌨️ Bắt đầu luyện gõ (20 ký tự) →</button>
      <button class="hsk0-btn-secondary" onclick="HSK0Typing._renderIntro()">← Giới thiệu</button>
    `;
    document.getElementById('hsk0-content').innerHTML = html;
  }

  // ── Section 3: Typing Drill ───────────────────────────
  function startDrill() {
    _state.mode = 'drill';
    _state.drillList = _shuffle(TYPING_POOL.slice()).slice(0, 20);
    _state.drillIdx = 0;
    _state.drillScore = 0;
    _renderDrill();
  }

  function _renderDrill() {
    if (_state.drillIdx >= _state.drillList.length) {
      _renderDrillResult();
      return;
    }

    var item = _state.drillList[_state.drillIdx];
    var total = _state.drillList.length;
    var progress = Math.round(_state.drillIdx / total * 100);

    var candsHtml = item.cands.map(function(c, i) {
      return `<span class="typing-cand" id="drill-cand-${i}">${c}</span>`;
    }).join('');

    document.getElementById('hsk0-content').innerHTML = `
      <div class="hsk0-quiz-progress" style="width:${progress}%"></div>
      <div class="hsk0-quiz-header">
        <div class="hsk0-quiz-label">Ký tự ${_state.drillIdx + 1}/${total} · ✅ ${_state.drillScore} đúng</div>
        <div style="font-size:13px;color:var(--text-secondary);margin-top:4px">Gõ Pinyin cho chữ dưới đây (không cần dấu thanh)</div>
      </div>

      <div class="typing-drill-card">
        <div class="typing-drill-char">${item.char}</div>
        <div class="typing-drill-meaning">${item.vi}</div>

        <div class="typing-candidate-label">📱 Danh sách gợi ý của bàn phím:</div>
        <div class="typing-candidates" id="drill-cands">${candsHtml}</div>

        <div class="typing-input-wrap">
          <input type="text" id="typing-input" class="typing-input"
            placeholder="gõ pinyin..." autocomplete="off" autocapitalize="none"
            spellcheck="false"
            oninput="HSK0Typing._onType(this.value)"
            onkeydown="if(event.key==='Enter') HSK0Typing.checkInput()" />
          <button class="typing-check-btn" id="typing-check-btn" onclick="HSK0Typing.checkInput()">✓</button>
        </div>
        <div class="hsk0-quiz-feedback" id="drill-fb"></div>
      </div>

      <button class="hsk0-btn-secondary" onclick="HSK0Typing._renderIntro()">← Về giới thiệu</button>
    `;

    setTimeout(function() {
      var inp = document.getElementById('typing-input');
      if (inp) inp.focus();
    }, 80);
  }

  function _onType(val) {
    var stripped = _stripTones(val);
    var item = _state.drillList[_state.drillIdx];
    if (!item) return;
    item.cands.forEach(function(c, i) {
      var el = document.getElementById('drill-cand-' + i);
      if (el) {
        var matches = stripped.length > 0 && item.base.startsWith(stripped);
        el.classList.toggle('active', matches);
      }
    });
  }

  function checkInput() {
    var inp = document.getElementById('typing-input');
    var btn = document.getElementById('typing-check-btn');
    if (!inp || inp.disabled) return;
    var val = _stripTones(inp.value);
    if (!val) { inp.focus(); return; }

    var item = _state.drillList[_state.drillIdx];
    var correct = (val === item.base);
    if (correct) _state.drillScore++;

    // Highlight correct candidate, dim others
    item.cands.forEach(function(c, i) {
      var el = document.getElementById('drill-cand-' + i);
      if (!el) return;
      if (c === item.char) el.classList.add('correct');
      else el.classList.remove('active');
    });

    var fb = document.getElementById('drill-fb');
    if (correct) {
      fb.textContent = '✅ Đúng! ' + item.pinyin;
      fb.className = 'hsk0-quiz-feedback show correct';
    } else {
      fb.innerHTML = '❌ Chưa đúng. Pinyin đúng: <strong>' + item.base + '</strong> (' + item.pinyin + ')';
      fb.className = 'hsk0-quiz-feedback show wrong';
    }

    inp.disabled = true;
    if (btn) btn.disabled = true;

    setTimeout(function() {
      _state.drillIdx++;
      _renderDrill();
    }, 1400);
  }

  function _renderDrillResult() {
    var total = _state.drillList.length;
    var pct = Math.round(_state.drillScore / total * 100);
    _saveProgress({ typing_drill_done: true, typing_drill_pct: pct });

    var emoji = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '💪' : '📚';
    document.getElementById('hsk0-content').innerHTML = `
      <div class="hsk0-result">
        <div class="hsk0-result-emoji">${emoji}</div>
        <div class="hsk0-result-title">${pct >= 80 ? 'Gõ tốt lắm!' : 'Cần luyện thêm!'}</div>
        <div class="hsk0-result-msg">Bạn gõ đúng ${_state.drillScore}/${total} ký tự</div>
        <div class="hsk0-result-stats">
          <div class="hsk0-stat">
            <div class="hsk0-stat-value">${_state.drillScore}/${total}</div>
            <div class="hsk0-stat-label">Đúng</div>
          </div>
          <div class="hsk0-stat">
            <div class="hsk0-stat-value">${pct}%</div>
            <div class="hsk0-stat-label">Tỉ lệ</div>
          </div>
        </div>
        <button class="hsk0-btn-primary" onclick="HSK0Typing.startQuiz('mc')">💪 Quiz Pinyin (10 câu) →</button>
        <button class="hsk0-btn-secondary" onclick="HSK0Typing.startDrill()">↺ Luyện lại</button>
      </div>
    `;
  }

  // ── Sections 4 & 5: Quizzes ───────────────────────────
  function startQuiz(type) {
    _state.mode = 'quiz-' + type;
    _state.quizIdx = 0;
    _state.quizScore = 0;
    _state.quizAnswered = false;
    _state.quizType = type;
    _state.quizList = type === 'mc' ? _buildMCQuiz(10) : _buildHomeworkQuiz(15);
    _renderQuiz();
  }

  function _buildMCQuiz(count) {
    var pool = _shuffle(TYPING_POOL.slice()).slice(0, count);
    return pool.map(function(item) {
      var wrong = _shuffle(TYPING_POOL.filter(function(x) {
        return x.base !== item.base;
      })).slice(0, 3);
      var opts = _shuffle([item.base].concat(wrong.map(function(x) { return x.base; })));
      return {
        type: 'visual-mcq',
        display: item.char,
        displaySize: '52px',
        question: 'Pinyin của chữ này là gì?',
        answer: item.base,
        hint: item.pinyin + ' (' + item.vi + ')',
        options: opts
      };
    });
  }

  function _buildHomeworkQuiz(count) {
    var pool = _shuffle(TYPING_POOL.slice()).slice(0, count);
    return pool.map(function(item, i) {
      var isReverse = (i % 3 === 0);
      if (isReverse) {
        // pinyin → char (pick the correct character)
        var wrong = _shuffle(TYPING_POOL.filter(function(x) { return x.char !== item.char; })).slice(0, 3);
        var opts = _shuffle([item.char].concat(wrong.map(function(x) { return x.char; })));
        return {
          type: 'visual-mcq',
          question: 'Gõ "<strong>' + item.base + '</strong>" → chọn chữ đúng:',
          answer: item.char,
          options: opts,
          isChar: true,
          hint: item.pinyin + ' = ' + item.vi
        };
      } else {
        // char → pinyin
        var wrong2 = _shuffle(TYPING_POOL.filter(function(x) { return x.base !== item.base; })).slice(0, 3);
        var opts2 = _shuffle([item.base].concat(wrong2.map(function(x) { return x.base; })));
        return {
          type: 'visual-mcq',
          display: item.char,
          displaySize: '44px',
          question: 'Pinyin của chữ này là gì?',
          answer: item.base,
          options: opts2,
          hint: item.pinyin + ' (' + item.vi + ')'
        };
      }
    });
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
    if (q.display) {
      visualSection = `
        <div class="hsk0-quiz-audio" style="padding:20px">
          <div class="hsk0-quiz-word" style="font-size:${q.displaySize};font-family:'Noto Serif SC',serif;line-height:1.2">
            ${q.display}
          </div>
        </div>`;
    }

    var options = q.options.map(function(opt, i) {
      var isCorrect = (opt === q.answer);
      var isChinese = /[一-鿿]/.test(opt);
      return `<button class="hsk0-quiz-option" data-correct="${isCorrect}"
        onclick="HSK0Typing.pickAnswer(${i}, this)"
        style="${isChinese ? 'font-family:Noto Serif SC,serif;font-size:22px' : ''}">${opt}</button>`;
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
        onclick="HSK0Typing.nextQuestion()">
        ${_state.quizIdx < total - 1 ? 'Câu tiếp theo →' : 'Xem kết quả 🎉'}
      </button>
    `;
  }

  function pickAnswer(idx, btn) {
    if (_state.quizAnswered) return;
    _state.quizAnswered = true;

    var isCorrect = btn.dataset.correct === 'true';
    if (isCorrect) _state.quizScore++;

    var q = _state.quizList[_state.quizIdx];

    document.querySelectorAll('.hsk0-quiz-option').forEach(function(b) {
      b.disabled = true;
      if (b.dataset.correct === 'true') b.classList.add('correct');
      else if (b === btn && !isCorrect) b.classList.add('wrong');
    });

    var fb = document.getElementById('quiz-fb');
    if (isCorrect) {
      fb.textContent = '✅ Đúng rồi!' + (q.hint ? ' ' + q.hint : '');
    } else {
      fb.innerHTML = '❌ Chưa đúng.' + (q.hint ? ' Gợi ý: <strong>' + q.hint + '</strong>' : '');
    }
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

    if (section === 'mc') {
      _saveProgress({ typing_quiz_pct: pct });
    } else {
      _saveProgress({ typing_hw_pct: pct, typing_passed: passed });
    }

    var nextBtn = '';
    if (section === 'mc') {
      nextBtn = '<button class="hsk0-btn-primary" onclick="HSK0Typing.startQuiz(\'hw\')">Tiếp: Bài tập về nhà (15 câu) →</button>';
    } else if (passed) {
      nextBtn = '<button class="hsk0-btn-primary" onclick="HSK0Typing._onComplete()">🎉 Xong Bài 6! →</button>';
    } else {
      nextBtn = '<button class="hsk0-btn-primary" onclick="HSK0Typing.startQuiz(\'hw\')">Làm lại bài tập về nhà</button>';
    }

    var backFn = section === 'mc' ? 'startDrill' : '_renderIntro';

    document.getElementById('hsk0-content').innerHTML = `
      <div class="hsk0-result">
        <div class="hsk0-result-emoji">${emoji}</div>
        <div class="hsk0-result-title">${pct >= 80 ? 'Xuất sắc!' : 'Cố lên nhé!'}</div>
        <div class="hsk0-result-msg">${pct >= 80 ? 'Bạn đã nắm vững Pinyin input!' : 'Ôn lại rồi thử lại nhé.'}</div>
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
        <button class="hsk0-btn-secondary" onclick="HSK0Typing.${backFn}()">← Xem lại</button>
      </div>
    `;
  }

  // ── Complete ──────────────────────────────────────────
  function _onComplete() {
    _saveProgress({ typing_passed: true });
    _toast('🎉 Bài 6 xong! Sẵn sàng cho Thi cuối HSK 0!');
    setTimeout(function() { Router.navigateTo('hsk0-final'); }, 1400);
  }

  // ── Utils ─────────────────────────────────────────────
  function _stripTones(str) {
    return (str || '').toLowerCase()
      .replace(/[āáǎà]/g, 'a').replace(/[ēéěè]/g, 'e')
      .replace(/[īíǐì]/g, 'i').replace(/[ōóǒò]/g, 'o')
      .replace(/[ūúǔù]/g, 'u').replace(/[ǖǘǚǜü]/g, 'u')
      .replace(/\s+/g, '').trim();
  }

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
    }, 3200);
  }

  // ── Public API ────────────────────────────────────────
  return {
    init: init,
    showGuide: showGuide,
    startDrill: startDrill,
    checkInput: checkInput,
    startQuiz: startQuiz,
    pickAnswer: pickAnswer,
    nextQuestion: nextQuestion,
    _renderIntro: _renderIntro,
    _onComplete: _onComplete,
    _onType: _onType
  };

})();

function initHSK0Typing() {
  HSK0Typing.init();
}
