// ═══════════════════════════════════════════════════════
// SENTENCE BUILDER (C7) — Arrange words to form correct sentence
// ═══════════════════════════════════════════════════════

var SentenceBuilder = {
  pool: [],          // sentences with ex.zh and ex.vi
  current: null,     // { zh, chars[], vi, py }
  selected: [],      // indices of chars placed in slots
  bank: [],          // indices remaining in bank
  round: 0,
  totalRounds: 10,
  correct: 0,
  usedHint: false,
  xpPerCorrect: 20,
  timers: [],

  start: function() {
    SentenceBuilder.round = 0;
    SentenceBuilder.correct = 0;

    // Build pool: words with ex.zh and ex.vi, sentence > 1 char
    var allWords = getAllWords();
    var pool = [];
    allWords.forEach(function(w) {
      if (!w.ex || !w.ex.zh || !w.ex.vi) return;
      var zh = w.ex.zh.replace(/[。，！？、；：""''（）\s]/g, '');
      if (zh.length <= 1) return;
      pool.push({
        zh: w.ex.zh,
        chars: SentenceBuilder._splitSentence(w.ex.zh),
        vi: w.ex.vi,
        py: w.ex.py || ''
      });
    });
    // Filter sentences with > 1 token
    pool = pool.filter(function(s) { return s.chars.length > 1; });
    SentenceBuilder.pool = shuffle(pool);

    if (SentenceBuilder.pool.length === 0) {
      alert('Không đủ dữ liệu câu mẫu!');
      return;
    }

    var canvas = document.getElementById('gameCanvas');
    canvas.innerHTML = SentenceBuilder._renderHTML();
    canvas.style.display = '';
    document.getElementById('gamesHub').style.display = 'none';
    ['gameSpeedQuiz','gameMemory','gameWordle'].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.style.display = 'none';
    });

    SentenceBuilder._bindEvents();
    SentenceBuilder._nextSentence();
  },

  _splitSentence: function(zh) {
    // Split by punctuation/spaces, keep meaningful tokens (chars/words)
    // Simple: split into individual characters, removing punctuation
    var clean = zh.replace(/[。，！？、；：""''（）「」『』\s·…—\-\.]/g, '');
    return clean.split('');
  },

  _renderHTML: function() {
    return '<div class="sent-game">' +
      '<div class="sent-header">' +
        '<button class="btn-exit" id="sentExit">✕</button>' +
        '<div class="sent-title">📝 Sentence Builder</div>' +
        '<div class="sent-progress" id="sentProgress">1/' + SentenceBuilder.totalRounds + '</div>' +
      '</div>' +
      '<div class="sent-progress-dots" id="sentDots"></div>' +
      '<div class="sent-prompt" id="sentPrompt"></div>' +
      '<div class="sent-slots" id="sentSlots"></div>' +
      '<div class="sent-bank" id="sentBank"></div>' +
      '<div class="sent-actions">' +
        '<button class="btn-secondary" id="sentHint">💡 Gợi ý</button>' +
        '<button class="btn-secondary" id="sentSkip">⏭ Bỏ qua</button>' +
        '<button class="btn-primary" id="sentCheck" disabled>✓ Kiểm tra</button>' +
      '</div>' +
      '<div class="sent-feedback" id="sentFeedback" style="display:none"></div>' +
      '<div class="sent-result" id="sentResult" style="display:none">' +
        '<h3 id="sentResultTitle"></h3>' +
        '<p id="sentResultDesc"></p>' +
        '<div class="sq-btns">' +
          '<button class="btn-primary" id="sentPlayAgain">🔄 Chơi lại</button>' +
          '<button class="btn-secondary" id="sentBackHub">← Về menu</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  },

  _bindEvents: function() {
    document.getElementById('sentExit').onclick = function() { SentenceBuilder.cleanup(); Games._showHub(); };
    document.getElementById('sentPlayAgain').onclick = function() { SentenceBuilder.cleanup(); SentenceBuilder.start(); };
    document.getElementById('sentBackHub').onclick = function() { SentenceBuilder.cleanup(); Games._showHub(); };
    document.getElementById('sentHint').onclick = function() { SentenceBuilder._useHint(); };
    document.getElementById('sentSkip').onclick = function() { SentenceBuilder._skip(); };
    document.getElementById('sentCheck').onclick = function() { SentenceBuilder._check(); };
  },

  _nextSentence: function() {
    if (SentenceBuilder.round >= SentenceBuilder.totalRounds) {
      SentenceBuilder._endGame();
      return;
    }

    // Wrap around if pool exhausted
    if (SentenceBuilder.pool.length === 0) {
      var allWords = getAllWords();
      var pool = [];
      allWords.forEach(function(w) {
        if (!w.ex || !w.ex.zh || !w.ex.vi) return;
        var zh = w.ex.zh.replace(/[。，！？、；：""''（）\s]/g, '');
        if (zh.length <= 1) return;
        pool.push({
          zh: w.ex.zh,
          chars: SentenceBuilder._splitSentence(w.ex.zh),
          vi: w.ex.vi,
          py: w.ex.py || ''
        });
      });
      pool = pool.filter(function(s) { return s.chars.length > 1; });
      SentenceBuilder.pool = shuffle(pool);
    }

    SentenceBuilder.current = SentenceBuilder.pool.pop();
    SentenceBuilder.usedHint = false;
    SentenceBuilder.selected = [];
    SentenceBuilder.bank = [];
    for (var i = 0; i < SentenceBuilder.current.chars.length; i++) {
      SentenceBuilder.bank.push(i);
    }
    SentenceBuilder.bank = shuffle(SentenceBuilder.bank.slice());

    SentenceBuilder.round++;
    document.getElementById('sentProgress').textContent = SentenceBuilder.round + '/' + SentenceBuilder.totalRounds;

    // Progress dots
    var dotsEl = document.getElementById('sentDots');
    if (dotsEl) {
      var dotsHTML = '';
      for (var d = 0; d < SentenceBuilder.totalRounds; d++) {
        var cls = 'sent-progress-dot';
        if (d < SentenceBuilder.round - 1) cls += ' dot-done';
        else if (d === SentenceBuilder.round - 1) cls += ' dot-current';
        dotsHTML += '<span class="' + cls + '"></span>';
      }
      dotsEl.innerHTML = dotsHTML;
    }

    document.getElementById('sentPrompt').innerHTML = '<div class="sent-vi">' + SentenceBuilder.current.vi + '</div>';
    document.getElementById('sentFeedback').style.display = 'none';
    document.getElementById('sentCheck').disabled = true;

    SentenceBuilder._renderBankAndSlots();
  },

  _renderBankAndSlots: function() {
    var chars = SentenceBuilder.current.chars;

    // Slots
    var slotsEl = document.getElementById('sentSlots');
    var slotHTML = '';
    SentenceBuilder.selected.forEach(function(idx, pos) {
      slotHTML += '<span class="sent-slot sent-filled" data-pos="' + pos + '">' + chars[idx] + '</span>';
    });
    // Empty remaining slots
    var remaining = chars.length - SentenceBuilder.selected.length;
    for (var i = 0; i < remaining; i++) {
      slotHTML += '<span class="sent-slot sent-empty" data-pos="' + (SentenceBuilder.selected.length + i) + '"></span>';
    }
    slotsEl.innerHTML = slotHTML;

    // Click slot to return to bank
    slotsEl.querySelectorAll('.sent-filled').forEach(function(el) {
      el.addEventListener('click', function() {
        var pos = parseInt(el.dataset.pos);
        var charIdx = SentenceBuilder.selected[pos];
        SentenceBuilder.selected.splice(pos, 1);
        SentenceBuilder.bank.push(charIdx);
        SentenceBuilder._renderBankAndSlots();
        document.getElementById('sentCheck').disabled = true;
      });
    });

    // Bank
    var bankEl = document.getElementById('sentBank');
    var bankHTML = '';
    SentenceBuilder.bank.forEach(function(idx) {
      bankHTML += '<span class="sent-token" data-idx="' + idx + '">' + chars[idx] + '</span>';
    });
    bankEl.innerHTML = bankHTML;

    bankEl.querySelectorAll('.sent-token').forEach(function(el) {
      el.addEventListener('click', function() {
        var idx = parseInt(el.dataset.idx);
        var bPos = SentenceBuilder.bank.indexOf(idx);
        if (bPos === -1) return;
        SentenceBuilder.bank.splice(bPos, 1);
        SentenceBuilder.selected.push(idx);
        SentenceBuilder._renderBankAndSlots();
        if (SentenceBuilder.bank.length === 0) {
          document.getElementById('sentCheck').disabled = false;
        }
      });
    });
  },

  _check: function() {
    var chars = SentenceBuilder.current.chars;
    var userAnswer = SentenceBuilder.selected.map(function(idx) { return chars[idx]; }).join('');
    var correctAnswer = chars.join('');

    var fb = document.getElementById('sentFeedback');
    if (userAnswer === correctAnswer) {
      SentenceBuilder.correct++;
      var xp = SentenceBuilder.usedHint ? Math.floor(SentenceBuilder.xpPerCorrect / 2) : SentenceBuilder.xpPerCorrect;
      fb.innerHTML = '<span class="sent-checkmark">✅</span> Chính xác! +' + xp + ' XP' +
        (SentenceBuilder.current.py ? '<br><small>Pinyin: ' + SentenceBuilder.current.py + '</small>' : '');
      fb.className = 'sent-feedback sent-correct';
      if (typeof addXP === 'function') addXP(xp);
      Games.animate.flash(document.getElementById('sentSlots'), '#22C55E');
    } else {
      fb.innerHTML = '❌ Sai rồi! Đáp án: ' + SentenceBuilder.current.zh +
        (SentenceBuilder.current.py ? '<br><small>Pinyin: ' + SentenceBuilder.current.py + '</small>' : '');
      fb.className = 'sent-feedback sent-wrong';
      // Shake wrong slots
      document.querySelectorAll('.sent-filled').forEach(function(el) {
        el.classList.add('sent-wrong-shake');
      });
      Games.animate.shake(document.getElementById('sentSlots'));
    }
    fb.style.display = '';

    // Disable interaction
    document.getElementById('sentCheck').disabled = true;
    document.getElementById('sentHint').disabled = true;

    var t = setTimeout(function() {
      document.getElementById('sentHint').disabled = false;
      SentenceBuilder._nextSentence();
    }, 2000);
    SentenceBuilder.timers.push(t);
  },

  _useHint: function() {
    if (SentenceBuilder.usedHint || !SentenceBuilder.current) return;
    SentenceBuilder.usedHint = true;

    // Find first position not correctly placed
    var chars = SentenceBuilder.current.chars;
    for (var pos = 0; pos < chars.length; pos++) {
      if (pos < SentenceBuilder.selected.length && SentenceBuilder.selected[pos] === pos) continue;
      // Need to place char[pos] at position pos
      // Remove from wherever it is
      var inSelected = SentenceBuilder.selected.indexOf(pos);
      if (inSelected !== -1) SentenceBuilder.selected.splice(inSelected, 1);
      var inBank = SentenceBuilder.bank.indexOf(pos);
      if (inBank !== -1) SentenceBuilder.bank.splice(inBank, 1);
      // Insert at correct position
      SentenceBuilder.selected.splice(pos, 0, pos);
      break;
    }
    SentenceBuilder._renderBankAndSlots();
    if (SentenceBuilder.bank.length === 0) {
      document.getElementById('sentCheck').disabled = false;
    }
  },

  _skip: function() {
    SentenceBuilder._nextSentence();
  },

  _endGame: function() {
    var totalXP = SentenceBuilder.correct * SentenceBuilder.xpPerCorrect;
    document.getElementById('sentResultTitle').textContent = '📝 Kết quả: ' + SentenceBuilder.correct + '/' + SentenceBuilder.totalRounds + ' đúng';
    document.getElementById('sentResultDesc').textContent = 'Tổng XP đã nhận trong round này.';
    document.getElementById('sentResult').style.display = '';
    document.getElementById('sentPrompt').style.display = 'none';
    document.getElementById('sentSlots').style.display = 'none';
    document.getElementById('sentBank').style.display = 'none';
    document.querySelector('.sent-actions').style.display = 'none';
    document.getElementById('sentFeedback').style.display = 'none';
    if (typeof Quests !== 'undefined') Quests.incrementMetric('sentence_done');

    // Save score
    var scores = Games.getScores();
    if (!scores.sentenceBest || SentenceBuilder.correct > scores.sentenceBest) {
      Games.saveScore('sentenceBest', SentenceBuilder.correct);
    }
  },

  cleanup: function() {
    SentenceBuilder.timers.forEach(function(t) { clearTimeout(t); });
    SentenceBuilder.timers = [];
    var canvas = document.getElementById('gameCanvas');
    if (canvas) canvas.innerHTML = '';
  }
};
