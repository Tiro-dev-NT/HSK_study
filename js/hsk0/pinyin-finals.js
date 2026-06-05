// ═══════════════════════════════════════════════════════
// HSK 0 — PINYIN FINALS (韵母) MODULE
// Phase O0.3 — 36 finals, 6 groups, 3 quiz sections
// ═══════════════════════════════════════════════════════

var HSK0Finals = (function() {

  var _state = {
    mode: 'intro',
    selectedFinal: null,
    quizIdx: 0,
    quizScore: 0,
    quizAnswered: false,
    quizList: [],
    progress: {}
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
    _state.progress['finals_' + section] = {
      score: score,
      total: total,
      pct: pct,
      completed_at: new Date().toISOString()
    };
    if (section === 'hw' && pct >= 80) {
      _state.progress.finals_passed = true;
      _state.progress.finals_score = pct;
      _state.progress.finals_completed_at = new Date().toISOString().slice(0, 10);
    }
    localStorage.setItem('hsk_progress_v0', JSON.stringify(_state.progress));
  }

  // ── Render Intro ──────────────────────────────────────
  function _renderIntro() {
    var html = `
      <div class="hsk0-hero">
        <div class="hsk0-hero-label">HSK 0 · Bài 3</div>
        <div class="hsk0-hero-title">🎵 36 Vần Pinyin (韵母 Finals)</div>
        <div class="hsk0-hero-desc">Final là phần âm đứng sau initial. Nếu initial giống phụ âm đầu, final giống phần vần: a, ai, ang, ian, ueng...</div>
        <div class="hsk0-hero-chips">
          <span class="chip">🎯 36 finals</span>
          <span class="chip">⏱ ~25 phút</span>
          <span class="chip">🔊 Có audio</span>
        </div>
      </div>

      <div class="hsk0-box">
        <div class="hsk0-box-title">🔎 Final khác Initial thế nào?</div>
        <div class="hsk0-compare-grid">
          <div class="hsk0-compare-item" onclick="HSK0Finals.speak('妈')">
            <div class="hsk0-compare-zh">妈</div>
            <div class="hsk0-compare-py">m + a = mā</div>
            <div class="hsk0-compare-vi">m là initial · a là final</div>
          </div>
          <div class="hsk0-compare-item" onclick="HSK0Finals.speak('上')">
            <div class="hsk0-compare-zh">上</div>
            <div class="hsk0-compare-py">sh + ang = shàng</div>
            <div class="hsk0-compare-vi">sh là initial · ang là final</div>
          </div>
        </div>
        <div class="hsk0-warn">⚠️ <strong>in</strong> và <strong>ing</strong>, <strong>an</strong> và <strong>ang</strong> nghe gần giống nhưng vị trí kết thúc khác nhau. Đọc sai final có thể thành từ khác.</div>
      </div>

      <div class="hsk0-box" style="background:#F0FDF4;border-color:#6EE7B7">
        <div style="font-size:13px;color:#065F46;line-height:1.6">
          💡 <strong>Lợi thế người Việt:</strong> Bạn đã quen với nhiều vần như <strong>a, ai, ao, an, ang</strong>. Phần khó của tiếng Trung là <strong>ü</strong>, cặp <strong>-n / -ng</strong>, và các quy tắc viết tắt như <strong>iou → iu</strong>, <strong>uei → ui</strong>.
        </div>
      </div>

      <button class="hsk0-btn-primary" onclick="HSK0Finals.startGroups()">Bắt đầu học 6 nhóm →</button>
    `;
    document.getElementById('hsk0-content').innerHTML = html;
  }

  // ── Render Groups ─────────────────────────────────────
  function startGroups() {
    _state.mode = 'groups';
    var html = '<div class="hsk0-section-title">6 Nhóm Vần Pinyin</div>';

    FINAL_GROUPS.forEach(function(grp) {
      var finals = FINALS_36.filter(function(f) { return f.group === grp.id; });
      var buttons = finals.map(function(fin) {
        return `<button class="hsk0-initial-btn" style="border-color:${grp.color}" onclick="HSK0Finals.showDetail('${fin.final}')">${fin.final}</button>`;
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
          • <strong>e / er</strong> — er phải quặt lưỡi<br>
          • <strong>in / ing</strong>, <strong>en / eng</strong>, <strong>an / ang</strong> — khác nhau ở -n trước và -ng sau<br>
          • <strong>uan / uang</strong>, <strong>iou / iao</strong>, <strong>ü / u</strong> — khác nhau ở độ mở miệng và tròn môi
        </div>
      </div>
      <button class="hsk0-btn-primary" onclick="HSK0Finals.startQuiz('recog')">💪 Luyện tập nhận diện (10 câu) →</button>
      <button class="hsk0-btn-secondary" onclick="HSK0Finals.startQuiz('discrim')">🎧 Luyện phân biệt nhanh</button>
    `;

    document.getElementById('hsk0-content').innerHTML = html;
  }

  // ── Show Detail Panel ─────────────────────────────────
  function showDetail(finalName) {
    var fin = FINALS_36.find(function(f) { return f.final === finalName; });
    if (!fin) return;

    var words = fin.words.map(function(w) {
      return `<div class="hsk0-word-item" onclick="HSK0Finals.speak('${w.h}')">
        <span class="hsk0-word-zh">${w.h}</span>
        <span class="hsk0-word-py">${w.p}</span>
        <span class="hsk0-word-vi">${w.v}</span>
      </div>`;
    }).join('');

    var note = fin.note ? `
      <div class="hsk0-detail-row">
        <span class="hsk0-detail-label">Ghi chú:</span>
        <span>${fin.note}</span>
      </div>
    ` : '';

    var html = `
      <div class="hsk0-detail-panel">
        <div class="hsk0-detail-header">
          <div class="hsk0-detail-initial">${fin.final}</div>
          <button class="hsk0-btn-close" onclick="HSK0Finals.closeDetail()">✕</button>
        </div>
        <div class="hsk0-detail-body">
          <div class="hsk0-detail-row">
            <span class="hsk0-detail-label">IPA:</span>
            <span>${fin.ipa}</span>
          </div>
          <div class="hsk0-detail-row">
            <span class="hsk0-detail-label">Gần đúng VN:</span>
            <span>${fin.vnApprox}</span>
          </div>
          <div class="hsk0-detail-row">
            <span class="hsk0-detail-label">Vị trí:</span>
            <span>${fin.position}</span>
          </div>
          ${note}
          <button class="hsk0-btn-play" onclick="HSK0Finals.speak('${fin.sampleZh}')">🔊 Nghe mẫu: ${fin.samplePinyin} (${fin.sampleZh} = ${fin.sampleVi})</button>
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
    var samples = ['a', 'ü', 'ai', 'üe', 'iao', 'iou', 'uei', 'an', 'ang', 'er'];
    return samples.map(function(finalName) {
      var data = _findFinal(finalName);
      return {
        type: 'audio-mcq',
        audio: data.sampleZh,
        question: '听音选择正确的韵母 (Nghe và chọn vần đúng)',
        answer: finalName,
        options: _generateOptions(finalName)
      };
    });
  }

  function _buildDiscrimQuiz() {
    var items = [
      {pair:['e','er'], answer:'e', audio:'喝'},
      {pair:['e','er'], answer:'er', audio:'二'},
      {pair:['in','ing'], answer:'in', audio:'新'},
      {pair:['en','eng'], answer:'eng', audio:'冷'},
      {pair:['an','ang'], answer:'an', audio:'看'},
      {pair:['uan','uang'], answer:'uang', audio:'光'},
      {pair:['iou','iao'], answer:'iou', audio:'六'},
      {pair:['ü','u'], answer:'ü', audio:'去'},
      {pair:['in','ing'], answer:'ing', audio:'听'},
      {pair:['an','ang'], answer:'ang', audio:'上'}
    ];

    return items.map(function(item) {
      var other = item.pair[0] === item.answer ? item.pair[1] : item.pair[0];
      return {
        type: 'audio-mcq',
        audio: item.audio,
        question: `Phân biệt: <strong>${item.pair[0]}</strong> hay <strong>${item.pair[1]}</strong>?`,
        answer: item.answer,
        options: _optionsFrom(item.answer, [other])
      };
    });
  }

  function _buildHomeworkQuiz() {
    var all = [];

    ['o', 'ie', 'uai', 'ian', 'ong'].forEach(function(finalName) {
      var data = _findFinal(finalName);
      all.push({
        type: 'audio-mcq',
        audio: data.sampleZh,
        question: 'Chọn vần đúng',
        answer: finalName,
        options: _generateOptions(finalName)
      });
    });

    [
      {pair:['e','er'], answer:'er', audio:'儿子'},
      {pair:['en','eng'], answer:'en', audio:'人'},
      {pair:['uan','uang'], answer:'uan', audio:'玩'},
      {pair:['iou','iao'], answer:'iao', audio:'小'},
      {pair:['ü','u'], answer:'u', audio:'书'}
    ].forEach(function(item) {
      var other = item.pair[0] === item.answer ? item.pair[1] : item.pair[0];
      all.push({
        type: 'audio-mcq',
        audio: item.audio,
        question: `${item.pair[0]} hay ${item.pair[1]}?`,
        answer: item.answer,
        options: _optionsFrom(item.answer, [other])
      });
    });

    [
      {q:'Trong pinyin, iou thường viết rút gọn thành gì sau initial?', opts:['iu','iao','ie','uai'], ans:0},
      {q:'Trong pinyin, uei thường viết rút gọn thành gì sau initial?', opts:['ui','uo','ua','üe'], ans:0},
      {q:'ü khác u ở điểm nào?', opts:['Lưỡi như i nhưng môi tròn','Không cần tròn môi','Luôn kết thúc bằng ng','Chỉ dùng cho thanh 4'], ans:0},
      {q:'Cặp nào khác nhau ở -n trước và -ng sau?', opts:['an / ang','ai / ei','ua / uo','ü / u'], ans:0},
      {q:'Vần nào là vần quặt lưỡi đặc biệt?', opts:['er','eng','en','ei'], ans:0}
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

  function _findFinal(finalName) {
    return FINALS_36.find(function(f) { return f.final === finalName; });
  }

  function _generateOptions(correct) {
    return _optionsFrom(correct, []);
  }

  function _optionsFrom(correct, required) {
    var all = FINALS_36.map(function(f) { return f.final; });
    var opts = [correct];
    (required || []).forEach(function(item) {
      if (opts.indexOf(item) === -1) opts.push(item);
    });
    var pool = all.filter(function(item) { return opts.indexOf(item) === -1; });
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
          <button class="hsk0-btn-play-big" onclick="HSK0Finals.speak('${q.audio}')">🔊 Nghe phát âm</button>
        </div>
      `;
    }

    var options = q.options.map(function(opt, i) {
      var isAnswer = (typeof q.answer === 'number' ? i === q.answer : opt === q.answer);
      return `<button class="hsk0-quiz-option" data-idx="${i}" data-correct="${isAnswer}" onclick="HSK0Finals.pickAnswer(${i})">${opt}</button>`;
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
      <button class="hsk0-btn-primary" id="quiz-next" style="display:none" onclick="HSK0Finals.nextQuestion()">
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
    var msg = pct === 100 ? 'Hoàn hảo! Bạn đã nghe vần rất chắc.' :
              pct >= 80 ? 'Đạt yêu cầu! Có thể chuyển sang phần tiếp theo.' :
              pct >= 60 ? 'Gần được rồi! Cần luyện thêm các cặp dễ nhầm.' :
              'Cần ôn lại 6 nhóm vần trước nhé!';

    var section = _state.mode.replace('quiz-', '');
    _saveProgress(section, _state.quizScore, total);

    var nextBtn = '';
    if (section === 'recog' && passed) {
      nextBtn = '<button class="hsk0-btn-primary" onclick="HSK0Finals.startQuiz(\'discrim\')">Tiếp: Luyện phân biệt (10 câu) →</button>';
    } else if (section === 'discrim' && passed) {
      nextBtn = '<button class="hsk0-btn-primary" onclick="HSK0Finals.startQuiz(\'hw\')">Tiếp: Bài tập về nhà (15 câu) →</button>';
    } else if (section === 'hw' && passed) {
      nextBtn = '<div class="hsk0-box" style="background:var(--green-light);border-color:#6EE7B7;margin-top:16px"><div style="font-size:14px;font-weight:700;color:#065F46;text-align:center">🎉 Chúc mừng! Bạn đã hoàn thành Bài 3. Bài 4 (8 nét viết cơ bản) đã được mở khóa trong tiến trình HSK 0.</div></div>';
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
        <button class="hsk0-btn-secondary" onclick="HSK0Finals.startGroups()">← Xem lại 6 nhóm</button>
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
function initHSK0PinyinFinals() {
  HSK0Finals.init();
}
