// ═══════════════════════════════════════════════════════
// QUIZ.JS — Advanced vocabulary quiz
// • B5a: Scope (HSK / Topic / Deck / SRS Adaptive / Wrong)
// • B5b: Modes (Forward / Reverse / Pinyin / Mix)
// • B5c: SRS integration — updateSRSCard on every answer
// • B5d: Wrong-word review + session history (localStorage)
// • B5g: Daily Challenge + Survival Mode
// ═══════════════════════════════════════════════════════

var Quiz = {
  _wrongHistory: [],  // words answered wrong in current session
  _scope: 'hsk',
  _mode:  'forward',
  _survivalTimer: null,
  _survivalTimeLeft: 0,
  _specialModeCosts: {
    'tone-trainer': 120,
    'cloze': 120
  },

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
    document.querySelectorAll('[data-quiz-mode]').forEach(function(card) {
      var btn = card.querySelector('button');
      btn?.addEventListener('click', function() {
        Quiz._startSpecialMode(card.dataset.quizMode);
      });
    });

    // B5g: Daily Challenge + Survival Mode
    document.getElementById('startDailyChallenge')?.addEventListener('click', Quiz._startDailyChallenge);
    document.getElementById('startSurvivalMode')?.addEventListener('click', Quiz._startSurvival);
    document.getElementById('replaySurvival')?.addEventListener('click', Quiz._startSurvival);
    document.getElementById('dailyBackBtn')?.addEventListener('click', Quiz._backToSetup);
    document.getElementById('survivalBackBtn')?.addEventListener('click', Quiz._backToSetup);

    // Back button during active quiz
    document.getElementById('quizBackBtn')?.addEventListener('click', function() {
      var inProgress = AppState.qIndex > 0 || AppState.qScore > 0;
      var lang = AppState.lang;
      if (inProgress) {
        var msg = lang === 'vi' ? 'Bỏ bài kiểm tra hiện tại?' : 'Abandon current quiz?';
        if (!confirm(msg)) return;
      }
      Quiz._backToSetup();
    });

    // Update Daily Challenge card status on load
    Quiz._updateDailyChallengeCard();

    // Clear survival timer when user navigates away or hides page
    document.addEventListener('visibilitychange', function() {
      if (document.hidden && Quiz._survivalTimer) {
        clearInterval(Quiz._survivalTimer);
        Quiz._survivalTimer = null;
      }
    });
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
      var activeData = activeHSKData();
      if (lv === 'mix') {
        var lvCount = activeLevelCount();
        for (var l = 1; l <= lvCount; l++) {
          (activeData[l] || []).forEach(function(w) { pool.push(Object.assign({}, w, {level: l})); });
        }
      } else {
        var lvNum = parseInt(lv);
        (activeData[lvNum] || []).forEach(function(w) { pool.push(Object.assign({}, w, {level: lvNum})); });
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
    AppState.qSessionType = 'standard';
    qDeck = AppState.qDeck; qIndex = 0; qScore = 0; qAnswered = false;

    Quiz._hideAllPanels();
    document.getElementById('quizArea').style.display    = 'block';
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
      questionText = w.h;
      questionSub  = w.p;
      getOptText   = function(o) { return lang === 'vi' ? (o.v || '') : (o.e || ''); };
      wrongFilter  = function(x) { return x.h !== w.h; };

    } else if (qmode === 'reverse') {
      questionText = lang === 'vi' ? (w.v || '') : (w.e || '');
      questionSub  = '';
      getOptText   = function(o) { return o.h; };
      wrongFilter  = function(x) { return x.h !== w.h; };

    } else {
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

    // Survival timer
    if (AppState.qSessionType === 'survival') {
      Quiz._startSurvivalTimer();
    }
  },

  // B5c: update SRS on every answer
  _answerQuestion: function(btn) {
    if (AppState.qAnswered) return;
    AppState.qAnswered = true;
    qAnswered = true;
    var correct = btn.dataset.correct === 'true';
    var w = AppState.qDeck[AppState.qIndex];

    // Stop survival timer
    if (AppState.qSessionType === 'survival' && Quiz._survivalTimer) {
      clearInterval(Quiz._survivalTimer);
      Quiz._survivalTimer = null;
    }

    if (correct) {
      AppState.qScore++;
      qScore = AppState.qScore;
      btn.classList.add('correct');
      if (typeof updateSRSCard !== 'undefined') updateSRSCard(w.h, 2);
    } else {
      btn.classList.add('wrong');
      document.querySelectorAll('.q-opt[data-correct="true"]').forEach(function(b) {
        b.classList.add('correct');
      });
      if (typeof updateSRSCard !== 'undefined') updateSRSCard(w.h, 0);
      Quiz._wrongHistory.push(w);
    }

    // Survival mode: wrong = game over
    if (AppState.qSessionType === 'survival' && !correct) {
      setTimeout(function() { Quiz._endSurvival(); }, 900);
      return;
    }

    setTimeout(function() {
      AppState.qIndex++;
      qIndex = AppState.qIndex;

      // Survival: add more words infinitely
      if (AppState.qSessionType === 'survival' && AppState.qIndex >= AppState.qDeck.length) {
        var allW = getAllWords();
        var moreWords = shuffle(allW).slice(0, 20);
        AppState.qDeck = AppState.qDeck.concat(moreWords);
        qDeck = AppState.qDeck;
      }

      if (AppState.qSessionType !== 'survival' && AppState.qIndex >= AppState.qDeck.length) {
        if (AppState.qSessionType === 'daily') Quiz._endDailyChallenge();
        else Quiz._endQuiz();
      } else {
        // Update survival HUD
        if (AppState.qSessionType === 'survival') {
          Quiz._updateSurvivalHUD();
        }
        Quiz._showQuestion();
      }
    }, 900);
  },

  // B5d: show wrong list + save session
  _endQuiz: function() {
    Quiz._hideAllPanels();
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
    AppState.qSessionType = 'standard';
    Quiz._wrongHistory = [];
    Quiz._mode         = 'forward';
    qDeck = AppState.qDeck; qIndex = 0; qScore = 0; qAnswered = false;

    Quiz._hideAllPanels();
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

    Quiz._hideAllPanels();
    document.getElementById('quizHistory').style.display = 'block';
  },

  _hideHistory: function() {
    document.getElementById('quizHistory').style.display = 'none';
    document.getElementById('quizSetup').style.display   = 'flex';
    Quiz._populateDecks();
  },

  _backToSetup: function() {
    // Clean up survival timer if running
    if (Quiz._survivalTimer) { clearInterval(Quiz._survivalTimer); Quiz._survivalTimer = null; }
    Quiz._hideAllPanels();
    document.getElementById('quizSetup').style.display  = 'flex';
    Quiz._populateDecks();
    Quiz._updateDailyChallengeCard();
  },

  _startSpecialMode: function(mode) {
    // Cloze + Tone: free 1 lượt/ngày, Pro unlimited (matrix 2026-05-21)
    if ((mode === 'tone-trainer' || mode === 'cloze') &&
        typeof Monetization !== 'undefined' &&
        !Monetization.checkDailyLimit('game_' + mode,
          mode === 'cloze' ? 'Cloze Fill' : 'Tone Trainer')) {
      return;
    }
    if (mode === 'tone-trainer' && typeof ToneTrainer !== 'undefined') {
      ToneTrainer.start('quiz');
    } else if (mode === 'cloze' && typeof ClozeGame !== 'undefined') {
      ClozeGame.start('quiz');
    }
  },

  _hideAllPanels: function() {
    ['quizSetup','quizArea','quizResult','quizHistory','dailyChallengeResult','survivalResult'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
  },

  // ═══════════════════════════════════════════════════════
  // B5g: DAILY CHALLENGE
  // ═══════════════════════════════════════════════════════

  _getDailyDate: function() {
    return new Date().toISOString().split('T')[0]; // local-ish via ISO, good enough
  },

  _seededRandom: function(seed) {
    // Simple seeded PRNG (mulberry32)
    var h = 0;
    for (var i = 0; i < seed.length; i++) {
      h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
    }
    return function() {
      h |= 0; h = h + 0x6D2B79F5 | 0;
      var t = Math.imul(h ^ h >>> 15, 1 | h);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  },

  _buildDailyPool: function() {
    var date = Quiz._getDailyDate();
    var userId = (typeof Auth !== 'undefined' && Auth.user) ? Auth.user.id : 'local';
    var seed = date + '_' + userId;
    var rng = Quiz._seededRandom(seed);

    var allWords = getAllWords();
    if (allWords.length < 10) return [];

    // Seeded shuffle
    var pool = allWords.slice();
    for (var i = pool.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
    }
    return pool.slice(0, 10);
  },

  _isDailyChallengeCompleted: function() {
    var date = Quiz._getDailyDate();
    return AppState.dailyChallenge[date] !== undefined;
  },

  _updateDailyChallengeCard: function() {
    var statusEl = document.getElementById('dailyChallengeStatus');
    var btnEl = document.getElementById('startDailyChallenge');
    if (!statusEl || !btnEl) return;

    var lang = AppState.lang;
    var date = Quiz._getDailyDate();
    var result = AppState.dailyChallenge[date];

    if (result) {
      // Already completed — show result + countdown
      btnEl.style.display = 'none';
      var now = new Date();
      var midnight = new Date(now);
      midnight.setDate(midnight.getDate() + 1);
      midnight.setHours(0, 0, 0, 0);
      var diffMs = midnight - now;
      var hours = Math.floor(diffMs / 3600000);
      var mins = Math.floor((diffMs % 3600000) / 60000);

      statusEl.innerHTML =
        '<div class="dc-done-score">' + result.score + '/' + result.total + '</div>' +
        '<div class="dc-done-xp">+' + result.xp + ' XP</div>' +
        '<div class="dc-countdown">' +
          (lang === 'vi' ? 'Bài mới sau ' : 'Next in ') + hours + 'h ' + mins + 'm' +
        '</div>';
      statusEl.style.display = 'block';

      // Streak display
      var streak = AppState.dailyChallengeStreak;
      if (streak.current > 0) {
        statusEl.innerHTML += '<div class="dc-streak">🔥 ' +
          (lang === 'vi' ? 'Chuỗi: ' : 'Streak: ') + streak.current +
          (lang === 'vi' ? ' ngày' : ' days') + '</div>';
      }
    } else {
      btnEl.style.display = '';
      statusEl.innerHTML = '';
      statusEl.style.display = 'none';
      // Show streak
      var streak = AppState.dailyChallengeStreak;
      if (streak.current > 0) {
        statusEl.innerHTML = '<div class="dc-streak">🔥 ' +
          (AppState.lang === 'vi' ? 'Chuỗi: ' : 'Streak: ') + streak.current +
          (AppState.lang === 'vi' ? ' ngày' : ' days') + '</div>';
        statusEl.style.display = 'block';
      }
    }

    // Survival high score
    var shsEl = document.getElementById('survivalHighScoreDisplay');
    if (shsEl) {
      var hs = AppState.survivalHighScore;
      if (hs.score > 0) {
        shsEl.innerHTML = '🏆 ' + (lang === 'vi' ? 'Kỷ lục: ' : 'Best: ') + hs.score +
          (lang === 'vi' ? ' câu' : ' pts');
        shsEl.style.display = 'block';
      } else {
        shsEl.style.display = 'none';
      }
    }
  },

  _startDailyChallenge: function() {
    if (Quiz._isDailyChallengeCompleted()) {
      if (typeof showToast === 'function')
        showToast(AppState.lang === 'vi' ? 'Bạn đã hoàn thành thử thách hôm nay!' : 'Already completed today!');
      return;
    }

    var pool = Quiz._buildDailyPool();
    if (pool.length < 10) {
      alert(AppState.lang === 'vi' ? 'Không đủ từ vựng!' : 'Not enough vocabulary!');
      return;
    }

    Quiz._mode = 'mix';
    Quiz._wrongHistory = [];
    AppState.qDeck = pool;
    AppState.qIndex = 0;
    AppState.qScore = 0;
    AppState.qAnswered = false;
    AppState.qSessionType = 'daily';
    qDeck = AppState.qDeck; qIndex = 0; qScore = 0; qAnswered = false;

    Quiz._hideAllPanels();
    document.getElementById('quizArea').style.display = 'block';
    document.getElementById('qTotal').textContent = '10';
    Quiz._showQuestion();
  },

  _endDailyChallenge: function() {
    var date = Quiz._getDailyDate();
    var score = AppState.qScore;
    var total = 10;
    var pct = Math.round(score / total * 100);

    // XP: base 10 per correct, bonus 2x if ≥ 8/10
    var baseXP = score * 10;
    var xpEarned = score >= 8 ? baseXP * 2 : baseXP;
    if (xpEarned > 0 && typeof addXP === 'function') addXP(xpEarned);
    if (typeof Quests !== 'undefined') Quests.incrementMetric('daily_challenge_done', 1);

    // Save result
    AppState.dailyChallenge[date] = {
      score: score,
      total: total,
      xp: xpEarned,
      completedAt: new Date().toISOString()
    };
    AppState.saveDailyChallenge();

    // Update daily challenge streak
    var streak = AppState.dailyChallengeStreak;
    var yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (streak.lastDate === yesterday) {
      streak.current++;
    } else if (streak.lastDate !== date) {
      streak.current = 1;
    }
    streak.lastDate = date;
    if (streak.current > streak.best) streak.best = streak.current;
    AppState.saveDailyChallengeStreak();

    if (typeof checkAndUpdateStreak === 'function') checkAndUpdateStreak();

    // Show daily result
    Quiz._hideAllPanels();
    var resultEl = document.getElementById('dailyChallengeResult');
    if (resultEl) {
      var lang = AppState.lang;
      var bonusText = score >= 8
        ? (lang === 'vi' ? ' (x2 bonus!)' : ' (x2 bonus!)')
        : '';
      resultEl.innerHTML =
        '<div class="quiz-result" style="display:block">' +
          '<div class="result-circle"><span>' + pct + '%</span><small>' + (lang === 'vi' ? 'điểm' : 'pts') + '</small></div>' +
          '<h2>🏆 ' + (lang === 'vi' ? 'Thử thách hàng ngày' : 'Daily Challenge') + '</h2>' +
          '<div class="dc-result-detail">' +
            '<div>' + score + '/' + total + (lang === 'vi' ? ' đúng' : ' correct') + '</div>' +
            '<div class="dc-xp-earned">+' + xpEarned + ' XP' + bonusText + '</div>' +
            '<div class="dc-streak">🔥 ' + (lang === 'vi' ? 'Chuỗi: ' : 'Streak: ') + streak.current + (lang === 'vi' ? ' ngày' : ' days') + '</div>' +
          '</div>' +
          '<div style="margin-top:16px">' +
            '<button class="btn-primary" id="dailyBackBtn" data-vi="Quay lại" data-en="Back">Quay lại</button>' +
          '</div>' +
        '</div>';
      resultEl.style.display = 'block';
      document.getElementById('dailyBackBtn')?.addEventListener('click', Quiz._backToSetup);
    }

    // Save session to history
    Quiz._saveSession(pct);
  },

  // ═══════════════════════════════════════════════════════
  // B5g: SURVIVAL MODE
  // ═══════════════════════════════════════════════════════

  _getSurvivalTimerDuration: function() {
    var level = Math.floor(AppState.qScore / 5);
    var durations = [15, 12, 10, 8, 6];
    return durations[Math.min(level, durations.length - 1)];
  },

  _getSurvivalLevel: function() {
    return Math.floor(AppState.qScore / 5) + 1;
  },

  _startSurvival: function() {
    var allWords = getAllWords();
    if (allWords.length < 20) {
      alert(AppState.lang === 'vi' ? 'Không đủ từ vựng!' : 'Not enough vocabulary!');
      return;
    }

    // Survival: free 1 lượt/ngày, Pro unlimited (matrix 2026-05-21)
    if (typeof Monetization !== 'undefined' &&
        !Monetization.checkDailyLimit('survival', 'Survival Mode')) {
      return;
    }

    Quiz._mode = 'mix';
    Quiz._wrongHistory = [];
    AppState.qDeck = shuffle(allWords).slice(0, 50);
    AppState.qIndex = 0;
    AppState.qScore = 0;
    AppState.qAnswered = false;
    AppState.qSessionType = 'survival';
    qDeck = AppState.qDeck; qIndex = 0; qScore = 0; qAnswered = false;

    Quiz._hideAllPanels();
    document.getElementById('quizArea').style.display = 'block';
    document.getElementById('qTotal').textContent = '∞';

    // Show survival HUD
    Quiz._updateSurvivalHUD();
    Quiz._showQuestion();
  },

  _updateSurvivalHUD: function() {
    var badge = document.getElementById('qTypeBadge');
    if (badge) {
      var lang = AppState.lang;
      var level = Quiz._getSurvivalLevel();
      badge.textContent = '💀 ' + (lang === 'vi' ? 'Survival' : 'Survival') +
        ' — Level ' + level + ' — ' + AppState.qScore + (lang === 'vi' ? ' đúng' : ' correct');
    }
  },

  _startSurvivalTimer: function() {
    if (Quiz._survivalTimer) clearInterval(Quiz._survivalTimer);
    var duration = Quiz._getSurvivalTimerDuration();
    Quiz._survivalTimeLeft = duration;

    var scoreEl = document.getElementById('qScore');
    // Use existing score element to also show timer
    var timerEl = document.getElementById('survivalTimerDisplay');
    if (!timerEl) {
      var progressBar = document.querySelector('.quiz-progress');
      if (progressBar) {
        timerEl = document.createElement('span');
        timerEl.id = 'survivalTimerDisplay';
        timerEl.className = 'survival-timer-badge';
        progressBar.appendChild(timerEl);
      }
    }
    if (timerEl) timerEl.textContent = ' ⏱ ' + duration + 's';

    Quiz._survivalTimer = setInterval(function() {
      Quiz._survivalTimeLeft--;
      if (timerEl) {
        timerEl.textContent = ' ⏱ ' + Quiz._survivalTimeLeft + 's';
        if (Quiz._survivalTimeLeft <= 3) timerEl.classList.add('timer-danger');
        else timerEl.classList.remove('timer-danger');
      }
      if (Quiz._survivalTimeLeft <= 0) {
        clearInterval(Quiz._survivalTimer);
        Quiz._survivalTimer = null;
        // Time's up = game over
        Quiz._endSurvival();
      }
    }, 1000);
  },

  _endSurvival: function() {
    if (Quiz._survivalTimer) { clearInterval(Quiz._survivalTimer); Quiz._survivalTimer = null; }

    var score = AppState.qScore;
    var level = Quiz._getSurvivalLevel();

    // XP: 5 per correct answer
    var xpEarned = score * 5;
    if (xpEarned > 0 && typeof addXP === 'function') addXP(xpEarned);

    // Update high score
    var isNewBest = false;
    if (score > AppState.survivalHighScore.score) {
      AppState.survivalHighScore.score = score;
      AppState.survivalHighScore.date = new Date().toISOString();
      AppState.saveSurvivalHighScore();
      isNewBest = true;
    }

    if (typeof checkAndUpdateStreak === 'function') checkAndUpdateStreak();

    // Remove survival timer display
    var timerEl = document.getElementById('survivalTimerDisplay');
    if (timerEl) timerEl.remove();

    // Show survival result
    Quiz._hideAllPanels();
    var resultEl = document.getElementById('survivalResult');
    if (resultEl) {
      var lang = AppState.lang;
      resultEl.innerHTML =
        '<div class="quiz-result" style="display:block">' +
          '<div class="result-circle"><span>' + score + '</span><small>' + (lang === 'vi' ? 'câu đúng' : 'correct') + '</small></div>' +
          '<h2>💀 ' + (lang === 'vi' ? 'Game Over!' : 'Game Over!') + '</h2>' +
          '<div class="sv-result-detail">' +
            '<div>Level ' + level + '</div>' +
            '<div>+' + xpEarned + ' XP</div>' +
            (isNewBest ? '<div class="sv-new-best">🏆 ' + (lang === 'vi' ? 'Kỷ lục mới!' : 'New High Score!') + '</div>' : '') +
            '<div class="sv-best">' + (lang === 'vi' ? 'Kỷ lục: ' : 'Best: ') + AppState.survivalHighScore.score + '</div>' +
          '</div>' +
          '<div style="display:flex;gap:10px;justify-content:center;margin-top:16px;flex-wrap:wrap">' +
            '<button class="btn-primary" id="replaySurvival" data-vi="🔄 Chơi lại" data-en="🔄 Replay">🔄 Chơi lại</button>' +
            '<button class="btn-outline" id="survivalBackBtn" data-vi="Quay lại" data-en="Back">Quay lại</button>' +
          '</div>' +
        '</div>';
      resultEl.style.display = 'block';
      document.getElementById('replaySurvival')?.addEventListener('click', Quiz._startSurvival);
      document.getElementById('survivalBackBtn')?.addEventListener('click', Quiz._backToSetup);
    }
  },
};

// ── Backward-compat global functions ──────────────────
function setupQuiz()         { Quiz.setup(); }
function startQuiz()         { Quiz.start(); }
function showQuestion()      { Quiz._showQuestion(); }
function answerQuestion(btn) { Quiz._answerQuestion(btn); }
function endQuiz()           { Quiz._endQuiz(); }
