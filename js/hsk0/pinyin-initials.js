// ═══════════════════════════════════════════════════════
// HSK 0 — PINYIN INITIALS (声母) MODULE
// Phase O0.2 — 21 initials, 6 groups, 3 quiz sections
// ═══════════════════════════════════════════════════════

var HSK0Initials = (function() {

  var _state = {
    mode: 'intro',           // intro | groups | quiz-recog | quiz-discrim | quiz-hw | result
    selectedInitial: null,
    quizIdx: 0,
    quizScore: 0,
    quizAnswered: false,
    quizList: []
  };

  // ── Init ──────────────────────────────────────────────
  function init() {
    _loadProgress();
    _renderIntro();
  }

  // ── Progress ──────────────────────────────────────────
  function _loadProgress() {
    var key = 'hsk_progress_v0';
    var data = localStorage.getItem(key);
    if (data) {
      try {
        _state.progress = JSON.parse(data);
      } catch(e) {
        _state.progress = {};
      }
    } else {
      _state.progress = {};
    }
  }

  function _saveProgress(section, score, total) {
    var pct = Math.round(score / total * 100);
    _state.progress['initials_' + section] = {
      score: score,
      total: total,
      pct: pct,
      completed_at: new Date().toISOString()
    };
    if (section === 'homework' && pct >= 80) {
      _state.progress.initials_passed = true;
    }
    localStorage.setItem('hsk_progress_v0', JSON.stringify(_state.progress));
  }

  // ── Render Intro ──────────────────────────────────────
  function _renderIntro() {
    var html = `
      <div class="hsk0-hero">
        <div class="hsk0-hero-label">HSK 0 · Bài 2</div>
        <div class="hsk0-hero-title">🗣️ 21 Phụ Âm Đầu (声母 Initials)</div>
        <div class="hsk0-hero-desc">Pinyin có 21 phụ âm đầu, chia làm 6 nhóm theo vị trí phát âm. Một số giống tiếng Việt, một số hoàn toàn mới.</div>
        <div class="hsk0-hero-chips">
          <span class="chip">🎯 21 initials</span>
          <span class="chip">⏱ ~20 phút</span>
          <span class="chip">🔊 Có audio</span>
        </div>
      </div>

      <div class="hsk0-box">
        <div class="hsk0-box-title">⚠️ Tại sao phụ âm đầu quan trọng?</div>
        <div class="hsk0-compare-grid">
          <div class="hsk0-compare-item">
            <div class="hsk0-compare-zh">爸爸</div>
            <div class="hsk0-compare-py">bàba</div>
            <div class="hsk0-compare-vi">Bố</div>
          </div>
          <div class="hsk0-compare-item">
            <div class="hsk0-compare-zh">妈妈</div>
            <div class="hsk0-compare-py">māma</div>
            <div class="hsk0-compare-vi">Mẹ</div>
          </div>
        </div>
        <div class="hsk0-warn">⚠️ <strong>b</strong> và <strong>m</strong> đều dùng môi, nhưng <strong>b</strong> không rung thanh quản còn <strong>m</strong> là âm mũi. Đọc sai → nghĩa sai!</div>
      </div>

      <div class="hsk0-box" style="background:#F0FDF4;border-color:#6EE7B7">
        <div style="font-size:13px;color:#065F46;line-height:1.6">
          💡 <strong>Lợi thế người Việt:</strong> Tiếng Việt có nhiều phụ âm tương tự (b/p/m/d/t/n/l/g/k/h). Bạn chỉ cần học thêm 9 âm mới: <strong>f, j, q, x, zh, ch, sh, r, z, c, s</strong>.
        </div>
      </div>

      <button class="hsk0-btn-primary" onclick="HSK0Initials.startGroups()">Bắt đầu học 6 nhóm →</button>
    `;
    document.getElementById('hsk0-content').innerHTML = html;
  }

  // ── Render Groups ─────────────────────────────────────
  function startGroups() {
    _state.mode = 'groups';
    var html = '<div class="hsk0-section-title">6 Nhóm Phụ Âm Đầu</div>';

    INITIAL_GROUPS.forEach(function(grp) {
      var initials = INITIALS_21.filter(function(i) { return i.group === grp.id; });
      var buttons = initials.map(function(ini) {
        return `<button class="hsk0-initial-btn" style="border-color:${grp.color}" onclick="HSK0Initials.showDetail('${ini.initial}')">${ini.initial}</button>`;
      }).join('');

      html += `
        <div class="hsk0-group-card" style="border-left:4px solid ${grp.color}">
          <div class="hsk0-group-header">
            <div class="hsk0-group-name" style="color:${grp.color}">${grp.name}</div>
            <div class="hsk0-group-desc">${grp.desc}</div>
          </div>
          <div class="hsk0-initial-grid">${buttons}</div>
        </div>
      `;
    });

    html += `
      <div class="hsk0-box" style="margin-top:20px">
        <div style="font-size:13px;font-weight:700;color:var(--text2);margin-bottom:8px">🔥 Cặp dễ nhầm nhất:</div>
        <div style="font-size:13px;color:var(--text);line-height:1.6">
          • <strong>b/p</strong>, <strong>d/t</strong>, <strong>g/k</strong> — khác nhau ở bật hơi<br>
          • <strong>j/zh</strong>, <strong>z/zh</strong>, <strong>c/ch</strong>, <strong>s/sh</strong> — khác nhau ở vị trí lưỡi
        </div>
      </div>
      <button class="hsk0-btn-primary" onclick="HSK0Initials.startQuiz('recog')">💪 Luyện tập nhận diện (10 câu) →</button>
    `;

    document.getElementById('hsk0-content').innerHTML = html;
  }

  // ── Show Detail Panel ─────────────────────────────────
  function showDetail(initial) {
    var ini = INITIALS_21.find(function(i) { return i.initial === initial; });
    if (!ini) return;

    var words = ini.words.map(function(w) {
      return `<div class="hsk0-word-item" onclick="HSK0Initials.speak('${w.h}')">
        <span class="hsk0-word-zh">${w.h}</span>
        <span class="hsk0-word-py">${w.p}</span>
        <span class="hsk0-word-vi">${w.v}</span>
      </div>`;
    }).join('');

    var html = `
      <div class="hsk0-detail-panel">
        <div class="hsk0-detail-header">
          <div class="hsk0-detail-initial">${ini.initial}</div>
          <button class="hsk0-btn-close" onclick="HSK0Initials.closeDetail()">✕</button>
        </div>
        <div class="hsk0-detail-body">
          <div class="hsk0-detail-row">
            <span class="hsk0-detail-label">IPA:</span>
            <span>${ini.ipa}</span>
          </div>
          <div class="hsk0-detail-row">
            <span class="hsk0-detail-label">Gần đúng VN:</span>
            <span>${ini.vnApprox}</span>
          </div>
          <div class="hsk0-detail-row">
            <span class="hsk0-detail-label">Vị trí:</span>
            <span>${ini.position}</span>
          </div>
          <button class="hsk0-btn-play" onclick="HSK0Initials.speak('${ini.exampleZh}')">🔊 Nghe: ${ini.example} (${ini.exampleZh} = ${ini.exampleVi})</button>
          <div class="hsk0-detail-words-title">Từ ví dụ HSK:</div>
          <div class="hsk0-detail-words">${words}</div>
        </div>
      </div>
    `;

    var panel = document.createElement('div');
    panel.id = 'hsk0-detail-overlay';
    panel.className = 'hsk0-overlay';
    panel.innerHTML = html;
    document.body.appendChild(panel);
    setTimeout(function() { panel.classList.add('show'); }, 10);
  }

  function closeDetail() {
    var panel = document.getElementById('hsk0-detail-overlay');
    if (panel) {
      panel.classList.remove('show');
      setTimeout(function() { panel.remove(); }, 300);
    }
  }

  // ── TTS ───────────────────────────────────────────────
  function speak(text) {
    // Audio-first (R2 mp3) → fallback Web Speech, qua TTSAudio.
    if (typeof TTSAudio !== 'undefined') { TTSAudio.speak(text, { rate: 0.75, force: true }); return; }
    if (!window.speechSynthesis) {
      _toast('Cần Chrome/Edge để nghe TTS');
      return;
    }
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    u.rate = 0.75;
    window.speechSynthesis.speak(u);
  }

  // ── Quiz ──────────────────────────────────────────────
  function startQuiz(type) {
    _state.mode = 'quiz-' + type;
    _state.quizIdx = 0;
    _state.quizScore = 0;
    _state.quizAnswered = false;

    if (type === 'recog') {
      _state.quizList = _buildRecogQuiz();
    } else if (type === 'discrim') {
      _state.quizList = _buildDiscrimQuiz();
    } else if (type === 'hw') {
      _state.quizList = _buildHomeworkQuiz();
    }

    _renderQuiz();
  }

  function _buildRecogQuiz() {
    // 10 câu: nghe initial → chọn đúng từ 4 option
    var samples = ['b','p','m','d','t','n','g','k','j','zh'];
    return samples.map(function(ini) {
      var data = INITIALS_21.find(function(i) { return i.initial === ini; });
      var word = data.words[0];
      var options = _generateOptions(ini);
      return {
        type: 'audio-mcq',
        audio: word.h,
        question: '听音选择正确的声母 (Nghe và chọn phụ âm đầu đúng)',
        answer: ini,
        options: options
      };
    });
  }

  function _buildDiscrimQuiz() {
    // 10 câu: phân biệt cặp dễ nhầm
    var pairs = [
      ['b','p'], ['d','t'], ['g','k'], ['j','zh'], ['z','zh'],
      ['c','ch'], ['s','sh'], ['n','l'], ['f','h'], ['q','x']
    ];
    return pairs.map(function(pair) {
      var pick = pair[Math.random() > 0.5 ? 0 : 1];
      var data = INITIALS_21.find(function(i) { return i.initial === pick; });
      var word = data.words[0];
      return {
        type: 'audio-mcq',
        audio: word.h,
        question: `Phân biệt: <strong>${pair[0]}</strong> hay <strong>${pair[1]}</strong>?`,
        answer: pick,
        options: pair.concat([pair[0], pair[1]]).slice(0, 4) // ensure 4 options
      };
    });
  }

  function _buildHomeworkQuiz() {
    // 15 câu: trộn recognition + discrimination + từ vựng
    var all = [];
    // 5 câu recognition
    ['f','l','h','x','r'].forEach(function(ini) {
      var data = INITIALS_21.find(function(i) { return i.initial === ini; });
      var word = data.words[0];
      all.push({
        type: 'audio-mcq',
        audio: word.h,
        question: 'Chọn phụ âm đầu đúng',
        answer: ini,
        options: _generateOptions(ini)
      });
    });
    // 5 câu discrimination
    [['b','p'],['j','q'],['zh','z'],['ch','c'],['sh','s']].forEach(function(pair) {
      var pick = pair[0];
      var data = INITIALS_21.find(function(i) { return i.initial === pick; });
      var word = data.words[0];
      all.push({
        type: 'audio-mcq',
        audio: word.h,
        question: `${pair[0]} hay ${pair[1]}?`,
        answer: pick,
        options: pair.concat(pair).slice(0,4)
      });
    });
    // 5 câu vocab matching
    [
      {q:'朋友 (péngyou) nghĩa là gì?', opts:['Bạn bè','Gia đình','Giáo viên','Học sinh'], ans:0},
      {q:'老师 (lǎoshī) nghĩa là gì?', opts:['Học sinh','Sách','Giáo viên','Trường'], ans:2},
      {q:'谢谢 (xièxie) nghĩa là gì?', opts:['Xin lỗi','Cảm ơn','Tạm biệt','Xin chào'], ans:1},
      {q:'中国 (Zhōngguó) nghĩa là gì?', opts:['Việt Nam','Trung Quốc','Nhật Bản','Hàn Quốc'], ans:1},
      {q:'Chữ nào bắt đầu bằng "zh"?', opts:['这 (zhè)','的 (de)','是 (shì)','我 (wǒ)'], ans:0}
    ].forEach(function(item) {
      all.push({
        type: 'text-mcq',
        question: item.q,
        options: item.opts,
        answer: item.ans
      });
    });
    return all;
  }

  function _generateOptions(correct) {
    var all = INITIALS_21.map(function(i) { return i.initial; });
    var pool = all.filter(function(i) { return i !== correct; });
    var opts = [correct];
    while (opts.length < 4 && pool.length > 0) {
      var idx = Math.floor(Math.random() * pool.length);
      opts.push(pool.splice(idx, 1)[0]);
    }
    return _shuffle(opts);
  }

  function _shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
    }
    return arr;
  }

  function _renderQuiz() {
    if (_state.quizIdx >= _state.quizList.length) {
      _renderResult();
      return;
    }

    var q = _state.quizList[_state.quizIdx];
    var progress = Math.round(_state.quizIdx / _state.quizList.length * 100);

    var audioSection = '';
    if (q.type === 'audio-mcq') {
      audioSection = `
        <div class="hsk0-quiz-audio">
          <div class="hsk0-quiz-word">${q.audio}</div>
          <button class="hsk0-btn-play-big" onclick="HSK0Initials.speak('${q.audio}')">🔊 Nghe phát âm</button>
        </div>
      `;
    }

    var options = q.options.map(function(opt, i) {
      var isAnswer = (typeof q.answer === 'number' ? i === q.answer : opt === q.answer);
      return `<button class="hsk0-quiz-option" data-idx="${i}" data-correct="${isAnswer}" onclick="HSK0Initials.pickAnswer(${i})">${opt}</button>`;
    }).join('');

    var html = `
      <div class="hsk0-quiz-progress" style="width:${progress}%"></div>
      <div class="hsk0-quiz-header">
        <div class="hsk0-quiz-label">Câu ${_state.quizIdx + 1}/${_state.quizList.length}</div>
        <div class="hsk0-quiz-question">${q.question}</div>
      </div>
      ${audioSection}
      <div class="hsk0-quiz-options" id="quiz-options">${options}</div>
      <div class="hsk0-quiz-feedback" id="quiz-fb"></div>
      <button class="hsk0-btn-primary" id="quiz-next" style="display:none" onclick="HSK0Initials.nextQuestion()">
        ${_state.quizIdx < _state.quizList.length - 1 ? 'Câu tiếp theo →' : 'Xem kết quả 🎉'}
      </button>
    `;

    document.getElementById('hsk0-content').innerHTML = html;
  }

  function pickAnswer(idx) {
    if (_state.quizAnswered) return;
    _state.quizAnswered = true;

    var q = _state.quizList[_state.quizIdx];
    var correct = (typeof q.answer === 'number' ? idx === q.answer : q.options[idx] === q.answer);

    if (correct) _state.quizScore++;

    var btns = document.querySelectorAll('.hsk0-quiz-option');
    btns.forEach(function(btn, i) {
      btn.disabled = true;
      if (btn.dataset.correct === 'true') {
        btn.classList.add('correct');
      } else if (i === idx && !correct) {
        btn.classList.add('wrong');
      }
    });

    var fb = document.getElementById('quiz-fb');
    fb.textContent = correct ? '✅ Đúng rồi!' : '❌ Chưa đúng. Đáp án đúng đã được đánh dấu.';
    fb.className = 'hsk0-quiz-feedback show ' + (correct ? 'correct' : 'wrong');

    document.getElementById('quiz-next').style.display = 'block';
  }

  function nextQuestion() {
    _state.quizIdx++;
    _state.quizAnswered = false;
    _renderQuiz();
  }

  function _renderResult() {
    var total = _state.quizList.length;
    var pct = Math.round(_state.quizScore / total * 100);
    var passed = pct >= 80;
    var emoji = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '💪' : '📚';
    var msg = pct === 100 ? 'Hoàn hảo! Master initials rồi!' :
              pct >= 80 ? 'Đạt yêu cầu! Tiếp tục luyện thêm nhé.' :
              pct >= 60 ? 'Gần được rồi! Cần luyện thêm 1 chút.' :
              'Cần ôn lại phần lý thuyết trước nhé!';

    var section = _state.mode.replace('quiz-', '');
    _saveProgress(section, _state.quizScore, total);

    var nextBtn = '';
    if (section === 'recog' && passed) {
      nextBtn = '<button class="hsk0-btn-primary" onclick="HSK0Initials.startQuiz(\'discrim\')">Tiếp: Luyện phân biệt (10 câu) →</button>';
    } else if (section === 'discrim' && passed) {
      nextBtn = '<button class="hsk0-btn-primary" onclick="HSK0Initials.startQuiz(\'hw\')">Tiếp: Bài tập về nhà (15 câu) →</button>';
    } else if (section === 'hw' && passed) {
      nextBtn = '<button class="hsk0-btn-primary" onclick="Router.navigateTo(\'hsk0-pinyin-finals\')">Tiếp: Bài 3 — Vần 韵母 →</button>';
    }

    var html = `
      <div class="hsk0-result">
        <div class="hsk0-result-emoji">${emoji}</div>
        <div class="hsk0-result-title">${pct === 100 ? 'Xuất sắc!' : pct >= 80 ? 'Làm tốt lắm!' : 'Cố lên nhé!'}</div>
        <div class="hsk0-result-msg">${msg}</div>
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
        <button class="hsk0-btn-secondary" onclick="HSK0Initials.startGroups()">← Xem lại 6 nhóm</button>
      </div>
    `;

    document.getElementById('hsk0-content').innerHTML = html;
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
    }, 2500);
  }

  // ── Public API ────────────────────────────────────────
  return {
    init: init,
    startGroups: startGroups,
    showDetail: showDetail,
    closeDetail: closeDetail,
    speak: speak,
    startQuiz: startQuiz,
    pickAnswer: pickAnswer,
    nextQuestion: nextQuestion
  };

})();

// Expose global init function for router
function initHSK0PinyinInitials() {
  HSK0Initials.init();
}
