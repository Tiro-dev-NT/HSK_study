// ═══════════════════════════════════════════════════════
// QUIZ.JS — Advanced vocabulary quiz
// • B5a: Scope (HSK / Topic / Deck / SRS Adaptive / Wrong)
// • B5b: Modes (Forward / Reverse / Pinyin / Mix)
// • B5c: SRS integration — updateSRSCard on every answer
// • B5d: Wrong-word review + session history (localStorage)
// ═══════════════════════════════════════════════════════

var Quiz = {
  _wrongHistory: [],  // words answered wrong in current session
  _scope: 'hsk',
  _mode:  'forward',

  setup: function() {
    document.querySelectorAll('.scope-tab').forEach(function(btn) {
      btn.addEventListener('click', function() { Quiz._switchScope(btn.dataset.scope); });
    });

    document.querySelectorAll('.level-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.level-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
      });
    });

    Quiz._populateTopics();
    Quiz._populateDecks();

    document.querySelector('.scope-tab[data-scope="wrong"]')
      ?.addEventListener('click', Quiz._updateWrongCount);
    document.querySelector('.scope-tab[data-scope="adaptive"]')
      ?.addEventListener('click', Quiz._updateAdaptiveStats);

    document.getElementById('clearWrongHistory')?.addEventListener('click', function() {
      if (confirm(AppState.lang === 'vi' ? 'Xóa toàn bộ lịch sử từ sai?' : 'Clear all wrong word history?')) {
        localStorage.removeItem('quiz_wrong');
        Quiz._updateWrongCount();
      }
    });

    document.getElementById('startQuiz')?.addEventListener('click', Quiz.start);
    document.getElementById('retryQuiz')?.addEventListener('click', Quiz._backToSetup);
    document.getElementById('reviewWrongBtn')?.addEventListener('click', Quiz._reviewWrong);
    document.getElementById('showQuizHistory')?.addEventListener('click', Quiz._showHistory);
    document.getElementById('closeHistory')?.addEventListener('click', Quiz._hideHistory);
  },

  _switchScope: function(scope) {
    Quiz._scope = scope;
    document.querySelectorAll('.scope-tab').forEach(function(b) {
      b.classList.toggle('active', b.dataset.scope === scope);
    });
    document.querySelectorAll('.scope-panel').forEach(function(p) { p.style.display = 'none'; });
    var panel = document.getElementById('scope-' + scope);
    if (panel) panel.style.display = 'block';
  },

  _populateTopics: function() {
    var sel = document.getElementById('quizTopic');
    if (!sel || typeof TOPIC_META === 'undefined') return;
    sel.innerHTML = '';
    Object.entries(TOPIC_META).forEach(function(entry) {
      var key = entry[0], meta = entry[1];
      var opt = document.createElement('option');
      opt.value = key;
      opt.textContent = meta.icon + ' ' + meta.vi;
      sel.appendChild(opt);
    });
  },

  _populateDecks: function() {
    var sel = document.getElementById('quizDeck');
    if (!sel) return;
    var userDecks = (typeof decks !== 'undefined')
      ? Object.values(decks).filter(function(d) { return !d.isSystem && d.words && d.words.length > 0; })
      : [];
    sel.innerHTML = '<option value="">-- Chọn bộ thẻ --</option>';
    userDecks.forEach(function(d) {
      var opt = document.createElement('option');
      opt.value = d.id;
      opt.textContent = (d.icon || '📝') + ' ' + (d.title || d.name || 'Bộ thẻ') + ' (' + d.words.length + ' từ)';
      sel.appendChild(opt);
    });
    if (userDecks.length === 0) {
      var opt = document.createElement('option');
      opt.disabled = true;
      opt.textContent = AppState.lang === 'vi' ? 'Chưa có bộ thẻ nào' : 'No custom decks yet';
      sel.appendChild(opt);
    }
  },

  _updateWrongCount: function() {
    var el = document.getElementById('wrongCount');
    if (!el) return;
    var wrong = JSON.parse(localStorage.getItem('quiz_wrong') || '[]');
    el.textContent = AppState.lang === 'vi'
      ? wrong.length + ' từ trong danh sách ôn sai'
      : wrong.length + ' words in wrong list';
  },

  _updateAdaptiveStats: function() {
    var el = document.getElementById('adaptiveStats');
    if (!el || typeof categorizeDeck === 'undefined') return;
    var cat = categorizeDeck(getAllWords());
    el.innerHTML =
      '<span class="adapt-stat adapt-due">'  + cat.dueCards.length  + ' đến hạn</span>' +
      '<span class="adapt-stat adapt-reln">' + cat.relearning.length + ' ôn lại</span>' +
      '<span class="adapt-stat adapt-new">'  + cat.newCards.length  + ' từ mới</span>';
  },

  // B5a: build word pool from selected scope
  _buildPool: function() {
    var scope = Quiz._scope;
    var pool  = [];
    var lang  = AppState.lang;

    if (scope === 'hsk') {
      var activeBtn = document.querySelector('.level-btn.active');
      var lv = activeBtn ? activeBtn.dataset.level : '1';
      if (lv === 'mix') {
        [1,2,3,4,5,6].forEach(function(l) {
          (HSK_DATA[l] || []).forEach(function(w) { pool.push(Object.assign({}, w, {level: l})); });
        });
      } else {
        var lvNum = parseInt(lv);
        (HSK_DATA[lvNum] || []).forEach(function(w) { pool.push(Object.assign({}, w, {level: lvNum})); });
      }

    } else if (scope === 'topic') {
      var topic = document.getElementById('quizTopic').value;
      getAllWords().forEach(function(w) { if (w.t === topic) pool.push(w); });

    } else if (scope === 'deck') {
      var deckId = document.getElementById('quizDeck').value;
      if (!deckId) {
        alert(lang === 'vi' ? 'Vui lòng chọn một bộ thẻ' : 'Please select a deck');
        return null;
      }
      var deck = (typeof decks !== 'undefined') ? decks[deckId] : null;
      if (deck && deck.words) {
        var allW = getAllWords();
        deck.words.forEach(function(hanzi) {
          var w = allW.find(function(x) { return x.h === hanzi; });
          if (w) pool.push(w);
        });
      }

    } else if (scope === 'adaptive') {
      var cat = categorizeDeck(getAllWords());
      pool = [].concat(cat.relearning, cat.dueCards, cat.newCards);

    } else if (scope === 'wrong') {
      var wrongHanzi = JSON.parse(localStorage.getItem('quiz_wrong') || '[]');
      if (wrongHanzi.length === 0) {
        alert(lang === 'vi' ? 'Chưa có từ nào trong danh sách sai' : 'No wrong words yet');
        return null;
      }
      var allW = getAllWords();
      wrongHanzi.forEach(function(h) {
        var w = allW.find(function(x) { return x.h === h; });
        if (w) pool.push(w);
      });
    }

    return pool;
  },

  start: function() {
    var pool = Quiz._buildPool();
    if (pool === null) return;
    if (!pool || pool.length === 0) {
      alert(AppState.lang === 'vi' ? 'Không có từ nào trong phạm vi này!' : 'No words in this scope!');
      return;
    }

    var count  = parseInt(document.getElementById('quizCount').value);
    var modeEl = document.querySelector('input[name="qMode"]:checked');
    Quiz._mode = modeEl ? modeEl.value : 'forward';
    Quiz._wrongHistory = [];

    AppState.qDeck     = shuffle(pool).slice(0, Math.min(count, pool.length));
    AppState.qIndex    = 0;
    AppState.qScore    = 0;
    AppState.qAnswered = false;
    qDeck = AppState.qDeck; qIndex = 0; qScore = 0; qAnswered = false;

    document.getElementById('quizSetup').style.display   = 'none';
    document.getElementById('quizArea').style.display    = 'block';
    document.getElementById('quizResult').style.display  = 'none';
    document.getElementById('quizHistory').style.display = 'none';
    document.getElementById('qTotal').textContent = AppState.qDeck.length;
    Quiz._showQuestion();
  },

  _getCurrentMode: function() {
    if (Quiz._mode !== 'mix') return Quiz._mode;
    return ['forward', 'reverse', 'pinyin'][Math.floor(Math.random() * 3)];
  },

  // B5b: render question based on active mode
  _showQuestion: function() {
    AppState.qAnswered = false;
    qAnswered = false;
    var w     = AppState.qDeck[AppState.qIndex];
    var lang  = AppState.lang;
    var qmode = Quiz._getCurrentMode();
    AppState._currentQMode = qmode;

    document.getElementById('qCurrent').textContent = AppState.qIndex + 1;
    document.getElementById('qScore').textContent   = AppState.qScore;

    var allWords = getAllWords();
    var questionText, questionSub, getOptText, wrongFilter;

    if (qmode === 'forward') {
      // Hanzi → pick Meaning
      questionText = w.h;
      questionSub  = w.p;
      getOptText   = function(o) { return lang === 'vi' ? (o.v || '') : (o.e || ''); };
      wrongFilter  = function(x) { return x.h !== w.h; };

    } else if (qmode === 'reverse') {
      // Meaning → pick Hanzi
      questionText = lang === 'vi' ? (w.v || '') : (w.e || '');
      questionSub  = '';
      getOptText   = function(o) { return o.h; };
      wrongFilter  = function(x) { return x.h !== w.h; };

    } else {
      // Hanzi → pick Pinyin
      questionText = w.h;
      questionSub  = '';
      getOptText   = function(o) { return o.p || ''; };
      wrongFilter  = function(x) { return x.h !== w.h && x.p !== w.p; };
    }

    var badge = document.getElementById('qTypeBadge');
    if (badge) {
      var labels = {
        forward: lang === 'vi' ? '汉字 → 意思' : '汉字 → Meaning',
        reverse: lang === 'vi' ? '意思 → 汉字' : 'Meaning → 汉字',
        pinyin:  '汉字 → 拼音'
      };
      badge.textContent = labels[qmode] || '';
    }

    document.getElementById('qQuestion').textContent = questionText;
    var subEl = document.getElementById('qSub');
    if (subEl) {
      subEl.textContent = questionSub;
      subEl.style.display = questionSub ? 'block' : 'none';
    }

    var wrong   = shuffle(allWords.filter(wrongFilter)).slice(0, 3);
    var options = shuffle([w].concat(wrong));
    var optEl   = document.getElementById('qOptions');
    optEl.innerHTML = options.map(function(o, i) {
      return '<button class="q-opt" data-idx="' + i + '" data-correct="' + (o.h === w.h) + '">' +
        getOptText(o) +
      '</button>';
    }).join('');
    optEl.querySelectorAll('.q-opt').forEach(function(btn) {
      btn.addEventListener('click', function() { Quiz._answerQuestion(btn); });
    });
  },

  // B5c: update SRS on every answer
  _answerQuestion: function(btn) {
    if (AppState.qAnswered) return;
    AppState.qAnswered = true;
    qAnswered = true;
    var correct = btn.dataset.correct === 'true';
    var w = AppState.qDeck[AppState.qIndex];

    if (correct) {
      AppState.qScore++;
      qScore = AppState.qScore;
      btn.classList.add('correct');
      if (typeof updateSRSCard !== 'undefined') updateSRSCard(w.h, 2); // Good
    } else {
      btn.classList.add('wrong');
      document.querySelectorAll('.q-opt[data-correct="true"]').forEach(function(b) {
        b.classList.add('correct');
      });
      if (typeof updateSRSCard !== 'undefined') updateSRSCard(w.h, 0); // Again
      Quiz._wrongHistory.push(w);
    }

    setTimeout(function() {
      AppState.qIndex++;
      qIndex = AppState.qIndex;
      if (AppState.qIndex >= AppState.qDeck.length) Quiz._endQuiz();
      else Quiz._showQuestion();
    }, 900);
  },

  // B5d: show wrong list + save session
  _endQuiz: function() {
    document.getElementById('quizArea').style.display   = 'none';
    document.getElementById('quizResult').style.display = 'block';
    var pct  = Math.round(AppState.qScore / AppState.qDeck.length * 100);
    document.getElementById('resultScore').textContent  = pct + '%';
    var lang = AppState.lang;
    var msgs = {
      vi: pct >= 80 ? 'Xuất sắc! 🌟' : pct >= 60 ? 'Tốt lắm! 👍' : 'Cần luyện thêm 💪',
      en: pct >= 80 ? 'Excellent! 🌟' : pct >= 60 ? 'Good job! 👍' : 'Keep practicing 💪',
    };
    document.getElementById('resultMsg').textContent = msgs[lang] || msgs.vi;

    var wrongReview = document.getElementById('wrongReview');
    var wrongList   = document.getElementById('wrongList');
    var reviewBtn   = document.getElementById('reviewWrongBtn');

    if (Quiz._wrongHistory.length > 0) {
      if (wrongList) {
        wrongList.innerHTML = Quiz._wrongHistory.map(function(w) {
          return '<div class="wrong-item">' +
            '<span class="wi-hanzi">'  + w.h + '</span>' +
            '<span class="wi-pinyin">' + (w.p || '') + '</span>' +
            '<span class="wi-meaning">' + (lang === 'vi' ? (w.v || '') : (w.e || '')) + '</span>' +
          '</div>';
        }).join('');
      }
      if (wrongReview) wrongReview.style.display = 'block';
      if (reviewBtn)   reviewBtn.style.display   = 'inline-block';

      // Persist wrong words (union, capped at 200)
      var existing = JSON.parse(localStorage.getItem('quiz_wrong') || '[]');
      var newWrong = Quiz._wrongHistory.map(function(w) { return w.h; });
      var combined = [];
      var seen = {};
      newWrong.concat(existing).forEach(function(h) { if (!seen[h]) { seen[h] = 1; combined.push(h); } });
      localStorage.setItem('quiz_wrong', JSON.stringify(combined.slice(0, 200)));
    } else {
      if (wrongReview) wrongReview.style.display = 'none';
      if (reviewBtn)   reviewBtn.style.display   = 'none';
    }

    Quiz._saveSession(pct);
  },

  _saveSession: function(pct) {
    var session = {
      date:  new Date().toISOString(),
      scope: Quiz._scope,
      mode:  Quiz._mode,
      total: AppState.qDeck.length,
      score: AppState.qScore,
      pct:   pct,
      wrong: Quiz._wrongHistory.map(function(w) { return w.h; })
    };
    var history = JSON.parse(localStorage.getItem('quiz_history') || '[]');
    history.unshift(session);
    localStorage.setItem('quiz_history', JSON.stringify(history.slice(0, 50)));
  },

  _reviewWrong: function() {
    if (!Quiz._wrongHistory || Quiz._wrongHistory.length === 0) return;
    AppState.qDeck     = shuffle(Quiz._wrongHistory.slice());
    AppState.qIndex    = 0;
    AppState.qScore    = 0;
    AppState.qAnswered = false;
    Quiz._wrongHistory = [];
    Quiz._mode         = 'forward';
    qDeck = AppState.qDeck; qIndex = 0; qScore = 0; qAnswered = false;

    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('quizArea').style.display   = 'block';
    document.getElementById('qTotal').textContent = AppState.qDeck.length;
    Quiz._showQuestion();
  },

  _showHistory: function() {
    var history  = JSON.parse(localStorage.getItem('quiz_history') || '[]');
    var histList = document.getElementById('historyList');
    var lang     = AppState.lang;
    if (!histList) return;

    if (history.length === 0) {
      histList.innerHTML = '<p style="text-align:center;color:var(--text3);padding:40px 0">' +
        (lang === 'vi' ? 'Chưa có lịch sử' : 'No history yet') + '</p>';
    } else {
      var scopeL = { hsk:'HSK', topic:'Chủ đề', deck:'Bộ thẻ', adaptive:'SRS', wrong:'Ôn sai' };
      var modeL  = { forward:'Hán→Nghĩa', reverse:'Nghĩa→Hán', pinyin:'Hán→Phiên âm', mix:'Hỗn hợp' };
      histList.innerHTML = history.map(function(s) {
        var d       = new Date(s.date);
        var dateStr = d.toLocaleDateString('vi-VN') + ' ' + d.toLocaleTimeString('vi-VN', {hour:'2-digit', minute:'2-digit'});
        var cls     = s.pct >= 80 ? 'good' : s.pct >= 60 ? 'ok' : 'poor';
        return '<div class="hist-item">' +
          '<div class="hist-left">' +
            '<div class="hist-date">' + dateStr + '</div>' +
            '<div class="hist-tags">' +
              '<span class="hist-tag">' + (scopeL[s.scope] || s.scope) + '</span>' +
              '<span class="hist-tag">' + (modeL[s.mode]  || s.mode)  + '</span>' +
            '</div>' +
            '<div class="hist-detail">' + s.score + '/' + s.total + (lang === 'vi' ? ' đúng' : ' correct') +
              (s.wrong && s.wrong.length ? ' · ' + s.wrong.length + (lang === 'vi' ? ' sai' : ' wrong') : '') +
            '</div>' +
          '</div>' +
          '<div class="hist-score hist-score--' + cls + '">' + s.pct + '%</div>' +
        '</div>';
      }).join('');
    }

    document.getElementById('quizSetup').style.display   = 'none';
    document.getElementById('quizResult').style.display  = 'none';
    document.getElementById('quizArea').style.display    = 'none';
    document.getElementById('quizHistory').style.display = 'block';
  },

  _hideHistory: function() {
    document.getElementById('quizHistory').style.display = 'none';
    document.getElementById('quizSetup').style.display   = 'flex';
    Quiz._populateDecks();
  },

  _backToSetup: function() {
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('quizSetup').style.display  = 'flex';
    document.getElementById('quizArea').style.display   = 'none';
    Quiz._populateDecks();
  },
};

// ── Backward-compat global functions ──────────────────
function setupQuiz()         { Quiz.setup(); }
function startQuiz()         { Quiz.start(); }
function showQuestion()      { Quiz._showQuestion(); }
function answerQuestion(btn) { Quiz._answerQuestion(btn); }
function endQuiz()           { Quiz._endQuiz(); }
