// ═══════════════════════════════════════════════════════
// GAMES.JS — Game Center: Speed Quiz + Memory Flip + Pinyin Wordle
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
    document.getElementById('gameWordle').style.display = 'none';
    var canvas = document.getElementById('gameCanvas');
    if (canvas) { canvas.style.display = 'none'; canvas.innerHTML = ''; }
  },

  setup: function() {
    // Game card click → launch game
    document.querySelectorAll('.game-card:not(.game-coming)').forEach(function(card) {
      card.addEventListener('click', function() {
        var game = card.dataset.game;
        if (game === 'speed-quiz') SpeedQuiz.start();
        else if (game === 'memory') MemoryFlip.start();
        else if (game === 'wordle') PinyinWordle.start();
        else if (game === 'boss-battle' && typeof BossBattle !== 'undefined') BossBattle._showLevelSelect();
        else if (game === 'racing' && typeof RacingQuiz !== 'undefined') RacingQuiz.start();
        else if (game === 'sentence' && typeof SentenceBuilder !== 'undefined') SentenceBuilder.start();
        else if (game === 'handwriting' && typeof HandwritingGame !== 'undefined') HandwritingGame.start();
        else if (game === 'tone-trainer' && typeof ToneTrainer !== 'undefined') ToneTrainer.start();
        else if (game === 'cloze' && typeof ClozeGame !== 'undefined') ClozeGame.start();
      });
    });
  },

  // ── Persistent best scores ─────────────────────────
  getScores: function() {
    return JSON.parse(localStorage.getItem('game_scores') || '{}');
  },
  saveScore: function(key, val) {
    var scores = Games.getScores();
    scores[key] = val;
    localStorage.setItem('game_scores', JSON.stringify(scores));
  },

  // ── Visual Utilities (C8) ─────────────────────────
  particles: {
    burst: function(el, count, emoji) {
      if (!el) return;
      var rect = el.getBoundingClientRect();
      for (var i = 0; i < (count || 5); i++) {
        var p = document.createElement('span');
        p.className = 'game-particle';
        p.textContent = emoji || '✨';
        p.style.left = (rect.left + rect.width/2 + (Math.random()-0.5)*40) + 'px';
        p.style.top = (rect.top + (Math.random()-0.5)*20) + 'px';
        p.style.position = 'fixed';
        document.body.appendChild(p);
        setTimeout(function(el) { el.remove(); }.bind(null, p), 1000);
      }
    },
    confetti: function(container) {
      var wrap = document.createElement('div');
      wrap.className = 'game-confetti';
      var colors = ['#EF4444','#F59E0B','#22C55E','#3B82F6','#8B5CF6','#EC4899'];
      for (var i = 0; i < 40; i++) {
        var piece = document.createElement('div');
        piece.className = 'game-confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.top = '-10px';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = (Math.random() * 0.5) + 's';
        piece.style.animationDuration = (1.5 + Math.random()) + 's';
        wrap.appendChild(piece);
      }
      (container || document.body).appendChild(wrap);
      setTimeout(function() { wrap.remove(); }, 3000);
    },
    damageFloat: function(el, text, color) {
      if (!el) return;
      var rect = el.getBoundingClientRect();
      var f = document.createElement('span');
      f.className = 'game-damage-float';
      f.textContent = text;
      f.style.left = (rect.left + rect.width/2 - 15) + 'px';
      f.style.top = (rect.top - 10) + 'px';
      f.style.color = color || '#EF4444';
      f.style.position = 'fixed';
      document.body.appendChild(f);
      setTimeout(function() { f.remove(); }, 1000);
    }
  },

  animate: {
    shake: function(el) {
      if (!el) return;
      el.style.animation = 'none';
      el.offsetHeight;
      el.style.animation = 'screen-shake .3s ease';
      setTimeout(function() { el.style.animation = ''; }, 300);
    },
    flash: function(el, color) {
      if (!el) return;
      el.style.boxShadow = '0 0 20px ' + (color || '#22C55E') + '80';
      setTimeout(function() { el.style.boxShadow = ''; }, 600);
    },
    countTo: function(el, from, to, ms) {
      if (!el) return;
      var start = Date.now();
      var timer = setInterval(function() {
        var pct = Math.min(1, (Date.now() - start) / ms);
        el.textContent = Math.round(from + (to - from) * pct);
        if (pct >= 1) clearInterval(timer);
      }, 30);
    }
  },

  countdown: function(container, callback) {
    var overlay = document.createElement('div');
    overlay.className = 'game-countdown';
    overlay.innerHTML = '<span>3</span>';
    (container || document.body).appendChild(overlay);
    var count = 3;
    var interval = setInterval(function() {
      count--;
      if (count > 0) {
        overlay.innerHTML = '<span>' + count + '</span>';
      } else if (count === 0) {
        overlay.innerHTML = '<span>GO!</span>';
      } else {
        clearInterval(interval);
        overlay.remove();
        if (callback) callback();
      }
    }, 700);
  }
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

    var prev = Games.getScores();
    if (SpeedQuiz.score > (prev.speed_best || 0))
      Games.saveScore('speed_best', SpeedQuiz.score);

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

    var prev = Games.getScores();
    if (!prev.memory_best || MemoryFlip.moves < prev.memory_best)
      Games.saveScore('memory_best', MemoryFlip.moves);

    document.getElementById('memResult').style.display   = '';
    document.getElementById('memFinalMoves').textContent = MemoryFlip.moves;
    document.getElementById('memXPEarned').textContent   = xpEarned;
  },
};

// ═══════════════════════════════════════════════════════
// PINYIN WORDLE — Guess the 2-syllable pinyin in 5 tries
// ═══════════════════════════════════════════════════════

var PinyinWordle = {
  answer:      null,   // { word, syllables: ['ni','hao'] }
  guesses:     [],
  current:     [],     // syllables being built for current guess
  maxAttempts: 5,
  pool:        null,   // cached answer pool
  keyboard:    null,   // sorted unique bare syllables

  // ── Strip tone diacritics → bare ASCII syllable ────
  _stripTone: function(s) {
    return s.toLowerCase()
      .replace(/[āáǎà]/g, 'a')
      .replace(/[ēéěè]/g, 'e')
      .replace(/[īíǐì]/g, 'i')
      .replace(/[ōóǒò]/g, 'o')
      .replace(/[ūúǔù]/g, 'u')
      .replace(/[ǖǘǚǜü]/g, 'u');
  },

  // ── Split pinyin string into exactly charCount bare syllables ──
  _splitPinyin: function(pinyinStr, charCount) {
    var parts = pinyinStr.trim().split(/\s+/);
    if (parts.length === charCount) {
      return parts.map(PinyinWordle._stripTone);
    }
    if (charCount === 2 && parts.length === 1) {
      var bare = PinyinWordle._stripTone(pinyinStr.replace(/\s/g, ''));
      // Try each split point; require second part to start with initial + vowel
      var initials = ['zh','ch','sh','b','p','m','f','d','t','n','l',
                      'g','k','h','j','q','x','r','z','c','s','y','w'];
      var vowels = 'aeiou';
      for (var i = 2; i < bare.length; i++) {
        var second = bare.slice(i);
        for (var k = 0; k < initials.length; k++) {
          if (second.indexOf(initials[k]) === 0) {
            var after = second.slice(initials[k].length);
            if (after.length > 0 && vowels.indexOf(after[0]) !== -1) {
              return [bare.slice(0, i), second];
            }
          }
        }
      }
    }
    return null;
  },

  // ── Build answer pool from HSK 1–3 2-char words ───
  _buildPool: function() {
    if (PinyinWordle.pool) return;
    var pool = [];
    var all = getAllWords();
    all.forEach(function(w) {
      if (w.h.length !== 2) return;
      if ((w.level || 1) > 3) return;
      var syllables = PinyinWordle._splitPinyin(w.p, 2);
      if (!syllables || !syllables[0] || !syllables[1]) return;
      pool.push({ word: w, syllables: syllables });
    });
    PinyinWordle.pool = pool;

    var sylSet = {};
    pool.forEach(function(p) {
      sylSet[p.syllables[0]] = true;
      sylSet[p.syllables[1]] = true;
    });
    PinyinWordle.keyboard = Object.keys(sylSet).sort();
  },

  // ── Start a new game ──────────────────────────────
  start: function() {
    PinyinWordle._buildPool();

    ['gamesHub','gameSpeedQuiz','gameMemory'].forEach(function(id) {
      document.getElementById(id).style.display = 'none';
    });
    document.getElementById('gameWordle').style.display = '';

    var pool = PinyinWordle.pool;
    PinyinWordle.answer  = pool[Math.floor(Math.random() * pool.length)];
    PinyinWordle.guesses = [];
    PinyinWordle.current = [];

    document.getElementById('wdResult').style.display  = 'none';
    document.getElementById('wdMessage').textContent   = '';
    document.getElementById('wdAttempts').textContent  = '0';

    var w = PinyinWordle.answer.word;
    var meaning = AppState.lang === 'vi' ? w.v : w.e;
    document.getElementById('wdHint').innerHTML =
      '<span class="wd-hanzi">' + w.h + '</span>' +
      '<span class="wd-meaning">(' + meaning + ')</span>';

    PinyinWordle._buildGrid();
    PinyinWordle._buildKeyboard();

    document.getElementById('wdExit').onclick     = function() { Games._showHub(); };
    document.getElementById('wdPlayAgain').onclick = function() { PinyinWordle.start(); };
    document.getElementById('wdBackHub').onclick   = function() { Games._showHub(); };
  },

  // ── Build 5×2 grid ───────────────────────────────
  _buildGrid: function() {
    var grid = document.getElementById('wdGrid');
    grid.innerHTML = '';
    for (var row = 0; row < PinyinWordle.maxAttempts; row++) {
      var rowEl = document.createElement('div');
      rowEl.className = 'wd-row';
      for (var col = 0; col < 2; col++) {
        var cell = document.createElement('div');
        cell.className = 'wd-cell';
        cell.id = 'wdCell' + row + '_' + col;
        rowEl.appendChild(cell);
      }
      grid.appendChild(rowEl);
    }
  },

  // ── Build syllable keyboard ───────────────────────
  _buildKeyboard: function() {
    var kb = document.getElementById('wdKeyboard');
    kb.innerHTML = '';

    // Current-guess input slots
    var inputArea = document.createElement('div');
    inputArea.className = 'wd-input-area';

    var slot0 = document.createElement('div');
    slot0.className = 'wd-input-slot'; slot0.id = 'wdSlot0'; slot0.textContent = '?';
    var slot1 = document.createElement('div');
    slot1.className = 'wd-input-slot'; slot1.id = 'wdSlot1'; slot1.textContent = '?';

    var submitBtn = document.createElement('button');
    submitBtn.className = 'btn-primary wd-action-btn';
    submitBtn.id = 'wdSubmit';
    submitBtn.textContent = '✓ Thử';
    submitBtn.disabled = true;
    submitBtn.onclick = PinyinWordle._submit;

    var clearBtn = document.createElement('button');
    clearBtn.className = 'btn-secondary wd-action-btn';
    clearBtn.id = 'wdClear';
    clearBtn.textContent = '✕ Xóa';
    clearBtn.onclick = function() {
      PinyinWordle.current = [];
      PinyinWordle._updateSlots();
    };

    inputArea.appendChild(slot0);
    inputArea.appendChild(slot1);
    inputArea.appendChild(submitBtn);
    inputArea.appendChild(clearBtn);
    kb.appendChild(inputArea);

    // Syllable buttons
    var syllablesDiv = document.createElement('div');
    syllablesDiv.className = 'wd-syllables';
    PinyinWordle.keyboard.forEach(function(syl) {
      var btn = document.createElement('button');
      btn.className = 'wd-key';
      btn.dataset.syl = syl;
      btn.textContent = syl;
      btn.onclick = function() {
        if (PinyinWordle.current.length < 2) {
          PinyinWordle.current.push(syl);
          PinyinWordle._updateSlots();
        }
      };
      syllablesDiv.appendChild(btn);
    });
    kb.appendChild(syllablesDiv);
  },

  // ── Sync input slot display ───────────────────────
  _updateSlots: function() {
    var s0 = document.getElementById('wdSlot0');
    var s1 = document.getElementById('wdSlot1');
    var sb = document.getElementById('wdSubmit');
    if (s0) { s0.textContent = PinyinWordle.current[0] || '?'; s0.className = 'wd-input-slot' + (PinyinWordle.current[0] ? ' wd-filled' : ''); }
    if (s1) { s1.textContent = PinyinWordle.current[1] || '?'; s1.className = 'wd-input-slot' + (PinyinWordle.current[1] ? ' wd-filled' : ''); }
    if (sb) sb.disabled = PinyinWordle.current.length < 2;
  },

  // ── Submit a guess ────────────────────────────────
  _submit: function() {
    if (PinyinWordle.current.length < 2) return;
    var guess  = PinyinWordle.current.slice();
    var answer = PinyinWordle.answer.syllables;
    var row    = PinyinWordle.guesses.length;
    var result = PinyinWordle._compare(guess, answer);

    PinyinWordle.guesses.push({ guess: guess, result: result });
    PinyinWordle.current = [];

    // Fill grid cells
    result.forEach(function(r, col) {
      var cell = document.getElementById('wdCell' + row + '_' + col);
      if (!cell) return;
      cell.textContent = guess[col];
      cell.classList.add(r === 2 ? 'wd-correct' : r === 1 ? 'wd-present' : 'wd-absent');
    });

    PinyinWordle._colorKeys(guess, result);
    PinyinWordle._updateSlots();

    var attEl = document.getElementById('wdAttempts');
    if (attEl) attEl.textContent = PinyinWordle.guesses.length;

    if (result.every(function(r) { return r === 2; })) {
      PinyinWordle._finish(true);
    } else if (PinyinWordle.guesses.length >= PinyinWordle.maxAttempts) {
      PinyinWordle._finish(false);
    }
  },

  // ── Compare guess vs answer: 2=correct, 1=present, 0=absent ──
  _compare: function(guess, answer) {
    var result = [0, 0];
    var pool   = answer.slice();
    for (var i = 0; i < 2; i++) {
      if (guess[i] === answer[i]) { result[i] = 2; pool[i] = null; }
    }
    for (var i = 0; i < 2; i++) {
      if (result[i] === 2) continue;
      var idx = pool.indexOf(guess[i]);
      if (idx !== -1) { result[i] = 1; pool[idx] = null; }
    }
    return result;
  },

  // ── Update keyboard key colors ────────────────────
  _colorKeys: function(guess, result) {
    var prio = { 'wd-correct': 3, 'wd-present': 2, 'wd-absent': 1 };
    guess.forEach(function(syl, i) {
      var cls = result[i] === 2 ? 'wd-correct' : result[i] === 1 ? 'wd-present' : 'wd-absent';
      document.querySelectorAll('.wd-key[data-syl="' + syl + '"]').forEach(function(btn) {
        var curr = btn.classList.contains('wd-correct') ? 3
                 : btn.classList.contains('wd-present') ? 2
                 : btn.classList.contains('wd-absent')  ? 1 : 0;
        if ((prio[cls] || 0) > curr) {
          btn.classList.remove('wd-correct', 'wd-present', 'wd-absent');
          btn.classList.add(cls);
        }
      });
    });
  },

  // ── Win / lose ────────────────────────────────────
  _finish: function(won) {
    var w = PinyinWordle.answer.word;
    document.getElementById('wdMessage').textContent = won ? '🎉 Chính xác!' : '😢 Hết lượt!';
    var xp = won ? Math.max(20, 50 - (PinyinWordle.guesses.length - 1) * 8) : 0;
    if (xp > 0 && typeof addXP === 'function') addXP(xp);

    if (won) {
      var prev = Games.getScores();
      Games.saveScore('wordle_wins', (prev.wordle_wins || 0) + 1);
    }

    setTimeout(function() {
      document.getElementById('wdResultEmoji').textContent = won ? '🏆' : '😢';
      document.getElementById('wdResultTitle').textContent = won ? 'Xuất sắc! +' + xp + ' XP' : 'Chưa được!';
      document.getElementById('wdAnswerReveal').innerHTML  =
        'Đáp án: <strong>' + w.h + '</strong> — ' +
        PinyinWordle.answer.syllables.join(' · ') + '<br><small>(' + (AppState.lang === 'vi' ? w.v : w.e) + ')</small>';
      document.getElementById('wdResult').style.display = '';
    }, 600);
  },
};
