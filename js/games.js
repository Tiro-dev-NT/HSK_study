// ═══════════════════════════════════════════════════════
// GAMES.JS — Game Center: Speed Quiz + Memory Flip
// • Reads: AppState.srsData, getAllWords(), shuffle()
// • Writes: XP via addXP()
// ═══════════════════════════════════════════════════════

var Games = {

  // ── Shared helpers ─────────────────────────────────

  _getWordPool: function(levels) {
    levels = levels || [1, 2, 3];
    var all = getAllWords();
    return all.filter(function(w) { return levels.indexOf(w.level) !== -1; });
  },

  _showHub: function() {
    document.getElementById('gamesHub').style.display = '';
    document.getElementById('gameSpeedQuiz').style.display = 'none';
    document.getElementById('gameMemory').style.display = 'none';
  },

  setup: function() {
    // Game card click → launch game
    document.querySelectorAll('.game-card:not(.game-coming)').forEach(function(card) {
      card.addEventListener('click', function() {
        var game = card.dataset.game;
        if (game === 'speed-quiz') SpeedQuiz.start();
        else if (game === 'memory') MemoryFlip.start();
      });
    });
  },
};

// ═══════════════════════════════════════════════════════
// SPEED QUIZ
// ═══════════════════════════════════════════════════════

var SpeedQuiz = {
  timer:    null,
  seconds:  60,
  score:    0,
  streak:   0,
  bestStreak: 0,
  wordPool: [],
  current:  null,
  answered: false,

  start: function() {
    document.getElementById('gamesHub').style.display = 'none';
    document.getElementById('gameSpeedQuiz').style.display = '';
    document.getElementById('gameMemory').style.display = 'none';

    SpeedQuiz.wordPool = shuffle(Games._getWordPool([1, 2, 3]));
    SpeedQuiz.score    = 0;
    SpeedQuiz.streak   = 0;
    SpeedQuiz.seconds  = 60;
    SpeedQuiz.answered = false;

    document.getElementById('sqResult').style.display = 'none';
    document.getElementById('sqCard') && (document.getElementById('sqCard').style.display = '');

    SpeedQuiz._updateScorebar();
    SpeedQuiz._nextCard();
    SpeedQuiz._startTimer();

    document.getElementById('sqExit').onclick = function() {
      SpeedQuiz._end();
      Games._showHub();
    };
    document.getElementById('sqPlayAgain').onclick = function() { SpeedQuiz.start(); };
    document.getElementById('sqBackHub').onclick = function() { Games._showHub(); };
  },

  _startTimer: function() {
    clearInterval(SpeedQuiz.timer);
    SpeedQuiz.timer = setInterval(function() {
      SpeedQuiz.seconds--;
      var el = document.getElementById('sqTimer');
      if (el) {
        el.textContent = SpeedQuiz.seconds;
        el.className = 'sq-timer' + (SpeedQuiz.seconds <= 10 ? ' sq-timer-danger' : '');
      }
      if (SpeedQuiz.seconds <= 0) {
        clearInterval(SpeedQuiz.timer);
        SpeedQuiz._end();
      }
    }, 1000);
  },

  _nextCard: function() {
    if (!SpeedQuiz.wordPool.length) {
      SpeedQuiz.wordPool = shuffle(Games._getWordPool([1, 2, 3]));
    }
    SpeedQuiz.current  = SpeedQuiz.wordPool.pop();
    SpeedQuiz.answered = false;

    document.getElementById('sqHanzi').textContent  = SpeedQuiz.current.h;
    document.getElementById('sqPinyin').textContent = SpeedQuiz.current.p;

    var allWords = getAllWords();
    var wrong = shuffle(allWords.filter(function(w) {
      return w.h !== SpeedQuiz.current.h;
    })).slice(0, 3);
    var opts = shuffle([SpeedQuiz.current].concat(wrong));

    var optEl = document.getElementById('sqOptions');
    optEl.innerHTML = opts.map(function(o) {
      return '<button class="sq-opt" data-h="' + o.h + '">' +
        (AppState.lang === 'vi' ? o.v : o.e) +
      '</button>';
    }).join('');

    optEl.querySelectorAll('.sq-opt').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (SpeedQuiz.answered) return;
        SpeedQuiz._answer(btn, btn.dataset.h === SpeedQuiz.current.h);
      });
    });
  },

  _answer: function(btn, isCorrect) {
    SpeedQuiz.answered = true;
    if (isCorrect) {
      btn.classList.add('sq-correct');
      SpeedQuiz.streak++;
      var bonus  = Math.floor(SpeedQuiz.streak / 3) * 5;
      SpeedQuiz.score += 10 + bonus;
    } else {
      btn.classList.add('sq-wrong');
      // highlight correct
      document.querySelectorAll('.sq-opt').forEach(function(b) {
        if (b.dataset.h === SpeedQuiz.current.h) b.classList.add('sq-correct');
      });
      SpeedQuiz.streak = 0;
    }
    SpeedQuiz._updateScorebar();
    if (typeof Dictionary !== 'undefined') Dictionary.playTTS(SpeedQuiz.current.h);
    setTimeout(function() {
      if (SpeedQuiz.seconds > 0) SpeedQuiz._nextCard();
    }, 700);
  },

  _updateScorebar: function() {
    document.getElementById('sqScore').textContent  = SpeedQuiz.score;
    document.getElementById('sqStreak').textContent = SpeedQuiz.streak;
  },

  _end: function() {
    clearInterval(SpeedQuiz.timer);
    var xpEarned = Math.floor(SpeedQuiz.score / 5);
    if (xpEarned > 0 && typeof addXP === 'function') addXP(xpEarned);

    document.getElementById('sqResult').style.display  = '';
    document.getElementById('sqFinalScore').textContent = SpeedQuiz.score;
    document.getElementById('sqXPEarned').textContent   = xpEarned;
    var emoji = SpeedQuiz.score >= 200 ? '🏆' : SpeedQuiz.score >= 100 ? '🥈' : '💪';
    document.getElementById('sqResultEmoji').textContent = emoji;
  },
};

// ═══════════════════════════════════════════════════════
// MEMORY FLIP
// ═══════════════════════════════════════════════════════

var MemoryFlip = {
  pairs:     8,
  found:     0,
  moves:     0,
  flipped:   [],   // at most 2 card elements
  locked:    false,
  words:     [],

  start: function() {
    document.getElementById('gamesHub').style.display = 'none';
    document.getElementById('gameSpeedQuiz').style.display = 'none';
    document.getElementById('gameMemory').style.display = '';

    MemoryFlip.found   = 0;
    MemoryFlip.moves   = 0;
    MemoryFlip.flipped = [];
    MemoryFlip.locked  = false;

    document.getElementById('memResult').style.display = 'none';
    document.getElementById('memPairs').textContent = '0';
    document.getElementById('memMoves').textContent = '0';

    // Pick 8 random words from HSK 1-2
    var pool = shuffle(Games._getWordPool([1, 2]));
    MemoryFlip.words = pool.slice(0, MemoryFlip.pairs);

    MemoryFlip._buildGrid();

    document.getElementById('memExit').onclick     = function() { Games._showHub(); };
    document.getElementById('memPlayAgain').onclick = function() { MemoryFlip.start(); };
    document.getElementById('memBackHub').onclick   = function() { Games._showHub(); };
  },

  _buildGrid: function() {
    // Create 16 cards: hanzi side + meaning side for each word
    var cards = [];
    MemoryFlip.words.forEach(function(w, idx) {
      cards.push({ id: idx, type: 'hanzi',   text: w.h, word: w });
      cards.push({ id: idx, type: 'meaning', text: AppState.lang === 'vi' ? w.v : w.e, word: w });
    });
    cards = shuffle(cards);

    var grid = document.getElementById('memGrid');
    grid.innerHTML = '';
    cards.forEach(function(card) {
      var el = document.createElement('div');
      el.className = 'mem-card';
      el.dataset.id   = card.id;
      el.dataset.type = card.type;
      el.innerHTML =
        '<div class="mem-card-inner">' +
          '<div class="mem-card-front">?</div>' +
          '<div class="mem-card-back ' + (card.type === 'hanzi' ? 'mem-hanzi' : 'mem-meaning') + '">' + card.text + '</div>' +
        '</div>';
      el.addEventListener('click', function() { MemoryFlip._flip(el); });
      grid.appendChild(el);
    });
  },

  _flip: function(el) {
    if (MemoryFlip.locked) return;
    if (el.classList.contains('mem-flipped') || el.classList.contains('mem-matched')) return;
    if (MemoryFlip.flipped.length >= 2) return;

    el.classList.add('mem-flipped');
    MemoryFlip.flipped.push(el);

    if (MemoryFlip.flipped.length === 2) {
      MemoryFlip.moves++;
      document.getElementById('memMoves').textContent = MemoryFlip.moves;
      MemoryFlip._checkMatch();
    }
  },

  _checkMatch: function() {
    var a = MemoryFlip.flipped[0];
    var b = MemoryFlip.flipped[1];
    var match = a.dataset.id === b.dataset.id && a.dataset.type !== b.dataset.type;

    MemoryFlip.locked = true;
    setTimeout(function() {
      if (match) {
        a.classList.add('mem-matched');
        b.classList.add('mem-matched');
        MemoryFlip.found++;
        document.getElementById('memPairs').textContent = MemoryFlip.found;
        if (typeof Dictionary !== 'undefined') {
          Dictionary.playTTS(a.dataset.type === 'hanzi'
            ? a.querySelector('.mem-card-back').textContent
            : b.querySelector('.mem-card-back').textContent);
        }
        if (MemoryFlip.found >= MemoryFlip.pairs) {
          MemoryFlip._end();
        }
      } else {
        a.classList.remove('mem-flipped');
        b.classList.remove('mem-flipped');
      }
      MemoryFlip.flipped = [];
      MemoryFlip.locked  = false;
    }, 900);
  },

  _end: function() {
    var xpEarned = Math.max(10, 80 - MemoryFlip.moves * 2);
    if (typeof addXP === 'function') addXP(xpEarned);
    document.getElementById('memResult').style.display   = '';
    document.getElementById('memFinalMoves').textContent = MemoryFlip.moves;
    document.getElementById('memXPEarned').textContent   = xpEarned;
  },
};
