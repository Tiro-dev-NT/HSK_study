// ═══════════════════════════════════════════════════════
// CLOZE / SENTENCE FILL (F5) — Điền từ vào câu
// ═══════════════════════════════════════════════════════

var ClozeGame = {
  pool: [],
  current: null,
  round: 0,
  totalRounds: 10,
  correct: 0,
  answered: false,
  timers: [],

  start: function() {
    ClozeGame.round = 0;
    ClozeGame.correct = 0;

    var allWords = getAllWords();
    var pool = [];
    allWords.forEach(function(w) {
      if (!w.ex || !w.ex.zh) return;
      if (w.ex.zh.indexOf(w.h) === -1) return;
      pool.push(w);
    });
    ClozeGame.pool = shuffle(pool);

    var canvas = document.getElementById('gameCanvas');
    canvas.style.display = '';
    document.getElementById('gamesHub').style.display = 'none';
    ['gameSpeedQuiz','gameMemory','gameWordle'].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.style.display = 'none';
    });

    if (!ClozeGame.pool.length) {
      canvas.innerHTML = '<div class="boss-game"><div class="boss-header"><button class="btn-exit" id="clozeExit0">✕</button><h2 style="margin:0">📋 Cloze</h2></div>' +
        '<p style="text-align:center;color:var(--text2);padding:40px">Sắp có thêm câu mẫu cho HSK 1-3. Hãy thử học HSK 4+ trước!</p></div>';
      document.getElementById('clozeExit0').onclick = function() { Games._showHub(); };
      return;
    }

    canvas.innerHTML = '<div class="cloze-game">' +
      '<div class="boss-header">' +
        '<button class="btn-exit" id="clozeExit">✕</button>' +
        '<h2 style="margin:0">📋 Cloze Fill</h2>' +
        '<div class="sent-progress" id="clozeProgress">0/' + ClozeGame.totalRounds + '</div>' +
      '</div>' +
      '<div class="cloze-sentence" id="clozeSentence"></div>' +
      '<div class="cloze-options" id="clozeOptions"></div>' +
      '<div class="cloze-feedback" id="clozeFeedback"></div>' +
      '<div class="cloze-result" id="clozeResult" style="display:none">' +
        '<h3 id="clozeResultTitle"></h3>' +
        '<p id="clozeResultDesc"></p>' +
        '<div class="sq-btns">' +
          '<button class="btn-primary" id="clozePlayAgain">🔄 Chơi lại</button>' +
          '<button class="btn-secondary" id="clozeBackHub">← Về menu</button>' +
        '</div>' +
      '</div>' +
    '</div>';

    document.getElementById('clozeExit').onclick = function() { ClozeGame.cleanup(); Games._showHub(); };
    document.getElementById('clozePlayAgain').onclick = function() { ClozeGame.cleanup(); ClozeGame.start(); };
    document.getElementById('clozeBackHub').onclick = function() { ClozeGame.cleanup(); Games._showHub(); };

    ClozeGame._nextRound();
  },

  _nextRound: function() {
    if (ClozeGame.round >= ClozeGame.totalRounds || !ClozeGame.pool.length) {
      ClozeGame._endGame();
      return;
    }

    ClozeGame.current = ClozeGame.pool.pop();
    ClozeGame.round++;
    ClozeGame.answered = false;

    document.getElementById('clozeProgress').textContent = ClozeGame.round + '/' + ClozeGame.totalRounds;
    document.getElementById('clozeFeedback').textContent = '';
    document.getElementById('clozeFeedback').className = 'cloze-feedback';

    var sentence = ClozeGame.current.ex.zh.split(ClozeGame.current.h).join('<span class="cloze-blank">＿＿＿</span>');
    var transEl = ClozeGame.current.ex.vi || ClozeGame.current.ex.en || '';
    document.getElementById('clozeSentence').innerHTML =
      '<div class="cloze-zh">' + sentence + '</div>' +
      (transEl ? '<div class="cloze-trans">' + transEl + '</div>' : '');

    // Build 4 MCQ options: correct + 3 distractors (same level)
    var allWords = getAllWords();
    var sameLevel = allWords.filter(function(w) {
      return w.level === ClozeGame.current.level && w.h !== ClozeGame.current.h;
    });
    var distractors = shuffle(sameLevel).slice(0, 3);
    var opts = shuffle([ClozeGame.current].concat(distractors));

    var optEl = document.getElementById('clozeOptions');
    optEl.innerHTML = opts.map(function(o) {
      return '<button class="boss-opt cloze-opt" data-h="' + o.h + '">' + o.h + ' (' + o.p + ')</button>';
    }).join('');

    optEl.querySelectorAll('.cloze-opt').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (ClozeGame.answered) return;
        ClozeGame._answer(btn, btn.dataset.h === ClozeGame.current.h);
      });
    });
  },

  _answer: function(btn, isCorrect) {
    ClozeGame.answered = true;
    var fb = document.getElementById('clozeFeedback');

    if (isCorrect) {
      btn.classList.add('sq-correct');
      ClozeGame.correct++;
      if (typeof addXP === 'function') addXP(15);
      if (typeof updateSRSCard === 'function') updateSRSCard(ClozeGame.current.h, 3);
      fb.textContent = '✅ Chính xác! +15 XP';
      fb.className = 'cloze-feedback sent-correct';
    } else {
      btn.classList.add('sq-wrong');
      document.querySelectorAll('.cloze-opt').forEach(function(b) {
        if (b.dataset.h === ClozeGame.current.h) b.classList.add('sq-correct');
      });
      if (typeof updateSRSCard === 'function') updateSRSCard(ClozeGame.current.h, 0);
      fb.textContent = '❌ Sai! Đáp án: ' + ClozeGame.current.h;
      fb.className = 'cloze-feedback sent-wrong';
    }

    var t = setTimeout(function() { ClozeGame._nextRound(); }, 1500);
    ClozeGame.timers.push(t);
  },

  _endGame: function() {
    var xpTotal = ClozeGame.correct * 15;
    document.getElementById('clozeResultTitle').textContent = '📋 Kết quả: ' + ClozeGame.correct + '/' + ClozeGame.round + ' đúng';
    document.getElementById('clozeResultDesc').textContent = 'Tổng: +' + xpTotal + ' XP';
    document.getElementById('clozeResult').style.display = '';
    document.getElementById('clozeSentence').style.display = 'none';
    document.getElementById('clozeOptions').style.display = 'none';
    document.getElementById('clozeFeedback').style.display = 'none';
  },

  cleanup: function() {
    ClozeGame.timers.forEach(function(t) { clearTimeout(t); });
    ClozeGame.timers = [];
    var canvas = document.getElementById('gameCanvas');
    if (canvas) canvas.innerHTML = '';
  }
};
