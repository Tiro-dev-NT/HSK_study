// ═══════════════════════════════════════════════════════
// RACING QUIZ (C6) — Race vs 4 CPU, answer to advance
// ═══════════════════════════════════════════════════════

var RacingQuiz = {
  TRACK_LEN: 20,
  LANES: 5,
  CPU_NAMES: ['🚗 Bot A', '🚙 Bot B', '🚐 Bot C', '🚕 Bot D'],
  CPU_EMOJIS: ['🚗', '🚙', '🚐', '🚕'],

  positions: [],    // [player, cpu1, cpu2, cpu3, cpu4]
  wordPool: [],
  current: null,
  answered: false,
  finished: false,
  cpuTimer: null,
  timers: [],
  finishOrder: [],

  start: function() {
    RacingQuiz.positions = [0, 0, 0, 0, 0];
    RacingQuiz.finished = false;
    RacingQuiz.answered = false;
    RacingQuiz.finishOrder = [];
    RacingQuiz.wordPool = shuffle(Games._getWordPool([1, 2, 3]));

    var canvas = document.getElementById('gameCanvas');
    canvas.innerHTML = RacingQuiz._renderHTML();
    canvas.style.display = '';
    document.getElementById('gamesHub').style.display = 'none';
    ['gameSpeedQuiz','gameMemory','gameWordle'].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.style.display = 'none';
    });

    RacingQuiz._renderTrack();
    RacingQuiz._bindEvents();

    // Countdown then start
    Games.countdown(null, function() {
      RacingQuiz._nextQuestion();
      RacingQuiz._startCPU();
    });

    RacingQuiz.raceTimeout = setTimeout(function() {
      if (!RacingQuiz.finished) {
        var sorted = [0,1,2,3,4].sort(function(a,b) {
          return RacingQuiz.positions[b] - RacingQuiz.positions[a];
        });
        RacingQuiz.finishOrder = sorted;
        RacingQuiz._endRace();
      }
    }, 90000);
  },

  _renderHTML: function() {
    return '<div class="race-game premium">' +
      '<div class="boss-header">' +
        '<button class="btn-exit" id="raceExit">✕</button>' +
        '<h2 style="margin:0">🏎️ Racing Quiz</h2>' +
      '</div>' +
      '<div class="race-track" id="raceTrack"></div>' +
      '<div class="race-question" id="raceQuestion"></div>' +
      '<div class="race-options" id="raceOptions"></div>' +
      '<div class="race-result" id="raceResult" style="display:none">' +
        '<h3 id="raceResultTitle"></h3>' +
        '<div class="race-podium" id="racePodium"></div>' +
        '<div class="race-ranking" id="raceRanking"></div>' +
        '<p id="raceXPMsg"></p>' +
        '<div class="sq-btns">' +
          '<button class="btn-primary" id="racePlayAgain">🔄 Chơi lại</button>' +
          '<button class="btn-secondary" id="raceBackHub">← Về menu</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  },

  _bindEvents: function() {
    document.getElementById('raceExit').onclick = function() { RacingQuiz.cleanup(); Games._showHub(); };
    document.getElementById('racePlayAgain').onclick = function() { RacingQuiz.cleanup(); RacingQuiz.start(); };
    document.getElementById('raceBackHub').onclick = function() { RacingQuiz.cleanup(); Games._showHub(); };
  },

  // ── Track rendering ────────────────────────────────
  _renderTrack: function() {
    var track = document.getElementById('raceTrack');
    if (!track) return;
    var labels = ['🏎️ Bạn'].concat(RacingQuiz.CPU_NAMES);
    var emojis = ['🏎️'].concat(RacingQuiz.CPU_EMOJIS);
    var html = '';
    for (var lane = 0; lane < RacingQuiz.LANES; lane++) {
      html += '<div class="race-lane">';
      html += '<div class="race-label">' + labels[lane] + '</div>';
      html += '<div class="race-cells">';
      for (var cell = 0; cell < RacingQuiz.TRACK_LEN; cell++) {
        var isHere = RacingQuiz.positions[lane] === cell;
        var isFinish = cell === RacingQuiz.TRACK_LEN - 1;
        html += '<div class="race-cell' + (isHere ? ' race-active' : '') + (isFinish ? ' race-finish' : '') + '">';
        if (isHere) html += '<span class="race-car">' + emojis[lane] + '</span>';
        if (isFinish && !isHere) html += '🏁';
        html += '</div>';
      }
      html += '</div></div>';
    }
    track.innerHTML = html;
  },

  // ── Questions ──────────────────────────────────────
  _nextQuestion: function() {
    if (RacingQuiz.finished) return;
    if (!RacingQuiz.wordPool.length) {
      RacingQuiz.wordPool = shuffle(Games._getWordPool([1, 2, 3]));
    }
    RacingQuiz.current = RacingQuiz.wordPool.pop();
    RacingQuiz.answered = false;

    var qEl = document.getElementById('raceQuestion');
    if (qEl) qEl.innerHTML = '<span class="boss-q-hanzi">' + RacingQuiz.current.h + '</span> — Nghĩa là gì?';

    var allWords = getAllWords();
    var wrong = shuffle(allWords.filter(function(w) { return w.h !== RacingQuiz.current.h; })).slice(0, 3);
    var opts = shuffle([RacingQuiz.current].concat(wrong));

    var optEl = document.getElementById('raceOptions');
    if (!optEl) return;
    optEl.innerHTML = opts.map(function(o) {
      return '<button class="boss-opt" data-h="' + o.h + '">' + (AppState.lang === 'vi' ? o.v : o.e) + '</button>';
    }).join('');

    optEl.querySelectorAll('.boss-opt').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (RacingQuiz.answered) return;
        RacingQuiz._answer(btn, btn.dataset.h === RacingQuiz.current.h);
      });
    });
  },

  _answer: function(btn, isCorrect) {
    RacingQuiz.answered = true;
    if (isCorrect) {
      btn.classList.add('sq-correct');
      RacingQuiz.positions[0] = Math.min(RacingQuiz.TRACK_LEN - 1, RacingQuiz.positions[0] + 1);
      RacingQuiz._checkFinish(0);
    } else {
      btn.classList.add('sq-wrong');
      document.querySelectorAll('#raceOptions .boss-opt').forEach(function(b) {
        if (b.dataset.h === RacingQuiz.current.h) b.classList.add('sq-correct');
      });
    }
    RacingQuiz._renderTrack();

    if (isCorrect) {
      var playerCar = document.querySelector('.race-lane:first-child .race-active');
      if (playerCar) Games.particles.damageFloat(playerCar, '+1', '#22C55E');
    } else {
      var track = document.getElementById('raceTrack');
      if (track) {
        var lane = track.querySelector('.race-lane');
        if (lane) Games.animate.shake(lane);
      }
      var laneEl = document.querySelector('.race-lane');
      if (laneEl) Games.particles.damageFloat(laneEl, '❌', '#EF4444');
    }

    var t = setTimeout(function() {
      if (!RacingQuiz.finished) RacingQuiz._nextQuestion();
    }, 700);
    RacingQuiz.timers.push(t);
  },

  // ── CPU movement ───────────────────────────────────
  _startCPU: function() {
    RacingQuiz.cpuTimer = setInterval(function() {
      if (RacingQuiz.finished) { clearInterval(RacingQuiz.cpuTimer); return; }
      for (var i = 1; i < RacingQuiz.LANES; i++) {
        if (RacingQuiz.positions[i] >= RacingQuiz.TRACK_LEN - 1) continue;
        if (Math.random() < 0.6) {
          RacingQuiz.positions[i]++;
          RacingQuiz._checkFinish(i);
        }
      }
      RacingQuiz._renderTrack();
    }, 2000);
  },

  _checkFinish: function(laneIdx) {
    if (RacingQuiz.positions[laneIdx] >= RacingQuiz.TRACK_LEN - 1) {
      // Already in finish order?
      if (RacingQuiz.finishOrder.indexOf(laneIdx) === -1) {
        RacingQuiz.finishOrder.push(laneIdx);
      }
      // All finished?
      if (RacingQuiz.finishOrder.length >= RacingQuiz.LANES) {
        RacingQuiz._endRace();
      }
    }
  },

  _endRace: function() {
    if (RacingQuiz.finished) return;
    RacingQuiz.finished = true;
    clearInterval(RacingQuiz.cpuTimer);

    // Add any not yet finished
    for (var i = 0; i < RacingQuiz.LANES; i++) {
      if (RacingQuiz.finishOrder.indexOf(i) === -1) RacingQuiz.finishOrder.push(i);
    }

    var playerRank = RacingQuiz.finishOrder.indexOf(0) + 1;
    var xp = playerRank === 1 ? 100 : playerRank === 2 ? 60 : playerRank === 3 ? 30 : 0;
    if (xp > 0 && typeof addXP === 'function') addXP(xp);
    if (typeof Quests !== 'undefined') Quests.incrementMetric('racing_done');

    // Save best
    var scores = Games.getScores();
    if (!scores.racingBest || playerRank < scores.racingBest) {
      Games.saveScore('racingBest', playerRank);
    }

    var names = ['🏎️ Bạn', '🚗 Bot A', '🚙 Bot B', '🚐 Bot C', '🚕 Bot D'];
    var rankHTML = RacingQuiz.finishOrder.map(function(idx, pos) {
      var medal = pos === 0 ? '🥇' : pos === 1 ? '🥈' : pos === 2 ? '🥉' : '#' + (pos + 1);
      var highlight = idx === 0 ? ' style="font-weight:bold;color:var(--accent)"' : '';
      return '<div' + highlight + '>' + medal + ' ' + names[idx] + '</div>';
    }).join('');

    // Podium for top 3
    var podiumEl = document.getElementById('racePodium');
    if (podiumEl && RacingQuiz.finishOrder.length >= 3) {
      var top3 = RacingQuiz.finishOrder.slice(0, 3);
      var podiumOrder = [top3[1], top3[0], top3[2]]; // silver, gold, bronze layout
      var classes = ['silver', 'gold', 'bronze'];
      podiumEl.innerHTML = podiumOrder.map(function(idx, i) {
        return '<div class="race-podium-item">' +
          '<div class="race-podium-name">' + names[idx] + '</div>' +
          '<div class="race-podium-bar ' + classes[i] + '"></div>' +
        '</div>';
      }).join('');
    }

    if (playerRank === 1) Games.particles.confetti();

    document.getElementById('raceResultTitle').textContent = playerRank <= 3 ? '🎉 Hạng ' + playerRank + '!' : 'Về hạng ' + playerRank;
    document.getElementById('raceRanking').innerHTML = rankHTML;
    document.getElementById('raceXPMsg').textContent = xp > 0 ? '+' + xp + ' XP' : 'Không có XP';
    document.getElementById('raceResult').style.display = '';
    document.getElementById('raceQuestion').style.display = 'none';
    document.getElementById('raceOptions').style.display = 'none';
  },

  cleanup: function() {
    clearTimeout(RacingQuiz.raceTimeout);
    clearInterval(RacingQuiz.cpuTimer);
    RacingQuiz.timers.forEach(function(t) { clearTimeout(t); });
    RacingQuiz.timers = [];
    var canvas = document.getElementById('gameCanvas');
    if (canvas) canvas.innerHTML = '';
  }
};
