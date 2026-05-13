// ═══════════════════════════════════════════════════════
// TONE TRAINER (F4) — Nghe TTS, chọn thanh đúng
// ═══════════════════════════════════════════════════════

var ToneTrainer = {
  wordPool: [],
  current: null,
  round: 0,
  totalRounds: 10,
  correct: 0,
  syllables: [],
  userTones: [],
  timers: [],

  TONE_MAP: {
    'ā': 1, 'á': 2, 'ǎ': 3, 'à': 4,
    'ē': 1, 'é': 2, 'ě': 3, 'è': 4,
    'ī': 1, 'í': 2, 'ǐ': 3, 'ì': 4,
    'ō': 1, 'ó': 2, 'ǒ': 3, 'ò': 4,
    'ū': 1, 'ú': 2, 'ǔ': 3, 'ù': 4,
    'ǖ': 1, 'ǘ': 2, 'ǚ': 3, 'ǜ': 4
  },

  _getTone: function(syllable) {
    for (var i = 0; i < syllable.length; i++) {
      var ch = syllable[i];
      if (ToneTrainer.TONE_MAP[ch]) return ToneTrainer.TONE_MAP[ch];
    }
    return 5; // neutral / light tone
  },

  start: function(exitTo) {
    ToneTrainer._exitTo = exitTo || 'games';
    ToneTrainer.round = 0;
    ToneTrainer.correct = 0;
    ToneTrainer.wordPool = shuffle(Games._getWordPool([1, 2, 3, 4])).filter(function(w) {
      var parts = w.p.trim().split(/\s+/);
      return parts.length >= 1 && parts.some(function(s) { return ToneTrainer._getTone(s) > 0; });
    }).slice(0, 30);

    var canvas = document.getElementById('gameCanvas');
    canvas.style.display = '';
    document.getElementById('gamesHub').style.display = 'none';
    ['gameSpeedQuiz','gameMemory','gameWordle'].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.style.display = 'none';
    });

    canvas.innerHTML = '<div class="tone-game">' +
      '<div class="boss-header">' +
        '<button class="btn-exit" id="toneExit">✕</button>' +
        '<h2 style="margin:0">🎵 Tone Trainer</h2>' +
        '<div class="sent-progress" id="toneProgress">0/' + ToneTrainer.totalRounds + '</div>' +
      '</div>' +
      '<div class="tone-play-area" id="tonePlayArea"></div>' +
      '<div class="tone-syllables" id="toneSyllables"></div>' +
      '<div class="tone-feedback" id="toneFeedback"></div>' +
      '<div class="tone-result" id="toneResult" style="display:none">' +
        '<h3 id="toneResultTitle"></h3>' +
        '<p id="toneResultDesc"></p>' +
        '<div class="sq-btns">' +
          '<button class="btn-primary" id="tonePlayAgain">🔄 Chơi lại</button>' +
          '<button class="btn-secondary" id="toneBackHub">← Về menu</button>' +
        '</div>' +
      '</div>' +
    '</div>';

    document.getElementById('toneExit').onclick = function() { ToneTrainer.cleanup(); ToneTrainer._goBack(); };
    document.getElementById('tonePlayAgain').onclick = function() { ToneTrainer.cleanup(); ToneTrainer.start(ToneTrainer._exitTo); };
    document.getElementById('toneBackHub').onclick = function() { ToneTrainer.cleanup(); ToneTrainer._goBack(); };

    ToneTrainer._nextRound();
  },

  _nextRound: function() {
    if (ToneTrainer.round >= ToneTrainer.totalRounds || !ToneTrainer.wordPool.length) {
      ToneTrainer._endGame();
      return;
    }

    ToneTrainer.current = ToneTrainer.wordPool.pop();
    ToneTrainer.round++;
    ToneTrainer.syllables = ToneTrainer.current.p.trim().split(/\s+/);
    ToneTrainer.userTones = ToneTrainer.syllables.map(function() { return 0; });

    document.getElementById('toneProgress').textContent = ToneTrainer.round + '/' + ToneTrainer.totalRounds;
    document.getElementById('toneFeedback').textContent = '';
    document.getElementById('toneFeedback').className = 'tone-feedback';

    var playArea = document.getElementById('tonePlayArea');
    playArea.innerHTML =
      '<div class="tone-hanzi">' + ToneTrainer.current.h + '</div>' +
      '<button class="wotd-btn" id="toneTTSBtn">🔊 Nghe phát âm</button>';
    document.getElementById('toneTTSBtn').onclick = function() {
      if (typeof Dictionary !== 'undefined') Dictionary.playTTS(ToneTrainer.current.h);
      else if ('speechSynthesis' in window) {
        var u = new SpeechSynthesisUtterance(ToneTrainer.current.h);
        u.lang = 'zh-CN'; speechSynthesis.speak(u);
      }
    };
    // Auto-play TTS
    document.getElementById('toneTTSBtn').click();

    ToneTrainer._renderToneSelector();
  },

  _renderToneSelector: function() {
    var el = document.getElementById('toneSyllables');
    var html = '';
    ToneTrainer.syllables.forEach(function(syl, sIdx) {
      html += '<div class="tone-syl-group" data-sidx="' + sIdx + '">' +
        '<div class="tone-syl-label">Âm tiết ' + (sIdx + 1) + '</div>' +
        '<div class="tone-btns">';
      for (var t = 1; t <= 5; t++) {
        var toneLabel = t === 1 ? 'ˉ' : t === 2 ? 'ˊ' : t === 3 ? 'ˇ' : t === 4 ? 'ˋ' : '·';
        var toneText = t === 5 ? 'nhẹ' : t;
        var selected = ToneTrainer.userTones[sIdx] === t ? ' tone-selected' : '';
        html += '<button class="tone-btn' + selected + '" data-sidx="' + sIdx + '" data-tone="' + t + '">' + toneLabel + ' ' + toneText + '</button>';
      }
      html += '</div></div>';
    });
    html += '<button class="btn-primary" id="toneCheckBtn" style="margin-top:12px">✓ Kiểm tra</button>';
    el.innerHTML = html;

    el.querySelectorAll('.tone-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var sIdx = parseInt(btn.dataset.sidx);
        var tone = parseInt(btn.dataset.tone);
        ToneTrainer.userTones[sIdx] = tone;
        ToneTrainer._renderToneSelector();
      });
    });

    document.getElementById('toneCheckBtn').onclick = function() {
      var allSelected = ToneTrainer.userTones.every(function(t) { return t > 0; });
      if (!allSelected) return;
      ToneTrainer._checkAnswer();
    };
  },

  _checkAnswer: function() {
    var correctTones = ToneTrainer.syllables.map(function(s) { return ToneTrainer._getTone(s); });
    var allCorrect = true;
    for (var i = 0; i < correctTones.length; i++) {
      if (ToneTrainer.userTones[i] !== correctTones[i]) { allCorrect = false; break; }
    }

    var fb = document.getElementById('toneFeedback');
    if (allCorrect) {
      ToneTrainer.correct++;
      if (typeof addXP === 'function') addXP(10);
      fb.textContent = '✅ Chính xác! +10 XP — ' + ToneTrainer.current.p;
      fb.className = 'tone-feedback sent-correct';
    } else {
      var correctStr = correctTones.join(', ');
      fb.textContent = '❌ Sai! Đáp án: thanh ' + correctStr + ' — ' + ToneTrainer.current.p;
      fb.className = 'tone-feedback sent-wrong';
    }

    var t = setTimeout(function() { ToneTrainer._nextRound(); }, 2000);
    ToneTrainer.timers.push(t);
  },

  _endGame: function() {
    var xpTotal = ToneTrainer.correct * 10;
    document.getElementById('toneResultTitle').textContent = '🎵 Kết quả: ' + ToneTrainer.correct + '/' + ToneTrainer.round + ' đúng';
    document.getElementById('toneResultDesc').textContent = 'Tổng: +' + xpTotal + ' XP';
    document.getElementById('toneResult').style.display = '';
    document.getElementById('tonePlayArea').style.display = 'none';
    document.getElementById('toneSyllables').style.display = 'none';
    document.getElementById('toneFeedback').style.display = 'none';
  },

  _goBack: function() {
    if (ToneTrainer._exitTo === 'quiz' && typeof Quiz !== 'undefined') Quiz._backToSetup();
    else Games._showHub();
  },

  cleanup: function() {
    ToneTrainer.timers.forEach(function(t) { clearTimeout(t); });
    ToneTrainer.timers = [];
    var canvas = document.getElementById('gameCanvas');
    if (canvas) canvas.innerHTML = '';
  }
};
