// ═══════════════════════════════════════════════════════
// BOSS BATTLE (C5) — RPG-style vocab quiz vs Boss
// ═══════════════════════════════════════════════════════

var BossBattle = {
  // State
  level: null,        // 'easy'|'medium'|'final'
  playerHP: 0,
  bossHP: 0,
  bossMaxHP: 0,
  playerMaxHP: 100,
  turn: 0,
  wordPool: [],
  current: null,
  answered: false,
  gameOver: false,
  timers: [],
  comboCount: 0,

  LEVELS: {
    easy:   { bossHP: 100, playerDmg: 20, bossDmg: 10, emoji: '👹', name: 'Yêu quái', skill: false },
    medium: { bossHP: 200, playerDmg: 15, bossDmg: 15, emoji: '🐉', name: 'Rồng lửa', skill: false },
    final:  { bossHP: 300, playerDmg: 10, bossDmg: 20, emoji: '👑', name: 'Ma Vương', skill: true }
  },

  // ── Level Select Screen ────────────────────────────
  _showLevelSelect: function() {
    var canvas = document.getElementById('gameCanvas');
    canvas.style.display = '';
    document.getElementById('gamesHub').style.display = 'none';
    ['gameSpeedQuiz','gameMemory','gameWordle'].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.style.display = 'none';
    });
    var scores = Games.getScores();
    var best = (scores.bossBestLevel) || {};
    canvas.innerHTML =
      '<div class="boss-game">' +
        '<div class="boss-header">' +
          '<button class="btn-exit" id="bossLevelExit">✕</button>' +
          '<h2 style="margin:0">⚔️ Boss Battle</h2>' +
        '</div>' +
        '<div class="boss-level-select">' +
          '<h3>Chọn cấp độ Boss</h3>' +
          '<div class="boss-levels">' +
            '<button class="boss-level-btn" data-level="easy"><span class="boss-avatar">👹</span><div>Yêu quái<br><small>HP 100 · Dễ</small></div>' + (best.easy ? ' <span class="boss-cleared">✅</span>' : '') + '</button>' +
            '<button class="boss-level-btn" data-level="medium"><span class="boss-avatar">🐉</span><div>Rồng lửa<br><small>HP 200 · Vừa</small></div>' + (best.medium ? ' <span class="boss-cleared">✅</span>' : '') + '</button>' +
            '<button class="boss-level-btn" data-level="final"><span class="boss-avatar">👑</span><div>Ma Vương<br><small>HP 300 · Khó</small></div>' + (best.final ? ' <span class="boss-cleared">✅</span>' : '') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.getElementById('bossLevelExit').onclick = function() { BossBattle.cleanup(); Games._showHub(); };
    canvas.querySelectorAll('.boss-level-btn').forEach(function(btn) {
      btn.addEventListener('click', function() { BossBattle.start(btn.dataset.level); });
    });
  },

  // ── Start ──────────────────────────────────────────
  start: function(level) {
    var cfg = BossBattle.LEVELS[level];
    if (!cfg) return;

    BossBattle.level = level;
    BossBattle.playerHP = BossBattle.playerMaxHP;
    BossBattle.bossHP = cfg.bossHP;
    BossBattle.bossMaxHP = cfg.bossHP;
    BossBattle.turn = 0;
    BossBattle.gameOver = false;
    BossBattle.answered = false;
    BossBattle.comboCount = 0;

    BossBattle.wordPool = shuffle(Games._getWordPool([1, 2, 3, 4]));

    var canvas = document.getElementById('gameCanvas');
    canvas.innerHTML = BossBattle._renderHTML(cfg);
    canvas.style.display = '';
    document.getElementById('gamesHub').style.display = 'none';
    // Hide C1-C4 containers
    ['gameSpeedQuiz','gameMemory','gameWordle'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });

    BossBattle._nextQuestion();
    BossBattle._bindEvents();
  },

  _renderHTML: function(cfg) {
    var bgClass = BossBattle.level === 'easy' ? 'boss-bg-easy' : BossBattle.level === 'medium' ? 'boss-bg-medium' : 'boss-bg-hard';
    return '<div class="boss-game premium ' + bgClass + '">' +
      '<div class="boss-header">' +
        '<button class="btn-exit" id="bossExit">✕</button>' +
        '<h2 style="margin:0">⚔️ Boss Battle — ' + cfg.name + '</h2>' +
      '</div>' +
      '<div class="boss-arena" id="bossArena">' +
        '<div class="boss-fighter boss-player" id="bossPlayerEl">' +
          '<div class="boss-avatar">🧑</div>' +
          '<div class="boss-name">Bạn</div>' +
          '<div class="boss-hp-bar"><div class="boss-hp-fill boss-hp-player hp-shimmer" id="bossPlayerHP" style="width:100%"></div></div>' +
          '<div class="boss-hp-text" id="bossPlayerHPText">' + BossBattle.playerMaxHP + '/' + BossBattle.playerMaxHP + '</div>' +
        '</div>' +
        '<div class="boss-vs">VS</div>' +
        '<div class="boss-fighter boss-enemy" id="bossEnemyEl">' +
          '<div class="boss-avatar">' + cfg.emoji + '</div>' +
          '<div class="boss-name">' + cfg.name + '</div>' +
          '<div class="boss-hp-bar"><div class="boss-hp-fill boss-hp-enemy hp-shimmer" id="bossEnemyHP" style="width:100%"></div></div>' +
          '<div class="boss-hp-text" id="bossEnemyHPText">' + cfg.bossHP + '/' + cfg.bossHP + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="boss-skill-msg" id="bossSkillMsg" style="display:none"></div>' +
      '<div class="boss-question" id="bossQuestion"></div>' +
      '<div class="boss-options" id="bossOptions"></div>' +
      '<div class="boss-result" id="bossResult" style="display:none">' +
        '<div class="boss-result-emoji" id="bossResultEmoji"></div>' +
        '<h3 id="bossResultTitle"></h3>' +
        '<p id="bossResultDesc"></p>' +
        '<div class="sq-btns">' +
          '<button class="btn-primary" id="bossPlayAgain">🔄 Chơi lại</button>' +
          '<button class="btn-secondary" id="bossBackHub">← Về menu</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  },

  _bindEvents: function() {
    document.getElementById('bossExit').onclick = function() { BossBattle.cleanup(); Games._showHub(); };
    document.getElementById('bossPlayAgain').onclick = function() { BossBattle.start(BossBattle.level); };
    document.getElementById('bossBackHub').onclick = function() { BossBattle.cleanup(); Games._showHub(); };
  },

  // ── Question ───────────────────────────────────────
  _nextQuestion: function() {
    if (BossBattle.gameOver) return;
    if (!BossBattle.wordPool.length) {
      BossBattle.wordPool = shuffle(Games._getWordPool([1, 2, 3, 4]));
    }
    BossBattle.current = BossBattle.wordPool.pop();
    BossBattle.answered = false;
    BossBattle.turn++;

    // Alternate question type
    var isHanziToMeaning = Math.random() > 0.5;
    var qEl = document.getElementById('bossQuestion');
    if (isHanziToMeaning) {
      qEl.innerHTML = '<div class="boss-q-hanzi">' + BossBattle.current.h + '</div><div class="boss-q-sub">Chọn nghĩa đúng:</div>';
    } else {
      var meaning = AppState.lang === 'vi' ? BossBattle.current.v : BossBattle.current.e;
      qEl.innerHTML = '<div class="boss-q-meaning">' + meaning + '</div><div class="boss-q-sub">Chọn chữ Hán đúng:</div>';
    }

    var allWords = getAllWords();
    var wrong = shuffle(allWords.filter(function(w) { return w.h !== BossBattle.current.h; })).slice(0, 3);
    var opts = shuffle([BossBattle.current].concat(wrong));

    var optEl = document.getElementById('bossOptions');
    optEl.innerHTML = opts.map(function(o) {
      var display = isHanziToMeaning ? (AppState.lang === 'vi' ? o.v : o.e) : o.h;
      return '<button class="boss-opt" data-h="' + o.h + '">' + display + '</button>';
    }).join('');

    optEl.querySelectorAll('.boss-opt').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (BossBattle.answered) return;
        BossBattle._answer(btn, btn.dataset.h === BossBattle.current.h);
      });
    });
  },

  _answer: function(btn, isCorrect) {
    BossBattle.answered = true;
    var cfg = BossBattle.LEVELS[BossBattle.level];

    if (isCorrect) {
      btn.classList.add('sq-correct');
      BossBattle.comboCount++;
      var dmgMultiplier = BossBattle.comboCount >= 3 ? 1.5 : 1;
      var dmg = Math.floor(cfg.playerDmg * dmgMultiplier);
      BossBattle.bossHP = Math.max(0, BossBattle.bossHP - dmg);

      // Visual effects
      var enemyEl = document.getElementById('bossEnemyEl');
      if (enemyEl) {
        enemyEl.classList.add('boss-hit-anim');
        Games.particles.damageFloat(enemyEl, '-' + dmg, '#EF4444');
        Games.particles.burst(enemyEl, 4, '💥');
        var t0 = setTimeout(function() { enemyEl.classList.remove('boss-hit-anim'); }, 400);
        BossBattle.timers.push(t0);
      }
      var playerEl = document.getElementById('bossPlayerEl');
      if (playerEl) {
        playerEl.classList.add('player-attack-anim');
        var t1 = setTimeout(function() { playerEl.classList.remove('player-attack-anim'); }, 300);
        BossBattle.timers.push(t1);
      }

      // Combo badge
      if (BossBattle.comboCount >= 3) {
        var comboEl = document.querySelector('.game-combo-badge');
        if (comboEl) comboEl.remove();
        var badge = document.createElement('span');
        badge.className = 'game-combo-badge';
        badge.textContent = '🔥 Combo x' + BossBattle.comboCount + '!';
        var arena = document.getElementById('bossArena');
        if (arena) { arena.style.position = 'relative'; arena.appendChild(badge); }
        var t2 = setTimeout(function() { badge.remove(); }, 1500);
        BossBattle.timers.push(t2);
      }
    } else {
      btn.classList.add('sq-wrong');
      document.querySelectorAll('.boss-opt').forEach(function(b) {
        if (b.dataset.h === BossBattle.current.h) b.classList.add('sq-correct');
      });
      BossBattle.comboCount = 0;
      var bossDmg = cfg.bossDmg;
      if (cfg.skill && BossBattle.turn % 3 === 0) {
        bossDmg *= 2;
        var msg = document.getElementById('bossSkillMsg');
        if (msg) { msg.textContent = '💥 ' + cfg.name + ' dùng Tuyệt chiêu! Sát thương x2!'; msg.style.display = ''; msg.style.animation = 'skill-announce .4s ease-out'; }
        var t3 = setTimeout(function() { if (msg) msg.style.display = 'none'; }, 2000);
        BossBattle.timers.push(t3);
      }
      BossBattle.playerHP = Math.max(0, BossBattle.playerHP - bossDmg);

      // Shake arena + damage float on player
      var arena = document.getElementById('bossArena');
      if (arena) {
        arena.classList.add('screen-shake-anim');
        var t4 = setTimeout(function() { arena.classList.remove('screen-shake-anim'); }, 300);
        BossBattle.timers.push(t4);
      }
      var pEl = document.getElementById('bossPlayerEl');
      if (pEl) Games.particles.damageFloat(pEl, '-' + bossDmg, '#F59E0B');
    }

    BossBattle._updateHP();

    var t5 = setTimeout(function() {
      if (BossBattle.bossHP <= 0) { BossBattle._finish(true); return; }
      if (BossBattle.playerHP <= 0) { BossBattle._finish(false); return; }
      BossBattle._nextQuestion();
    }, 900);
    BossBattle.timers.push(t5);
  },

  _updateHP: function() {
    var pFill = document.getElementById('bossPlayerHP');
    var eFill = document.getElementById('bossEnemyHP');
    var pText = document.getElementById('bossPlayerHPText');
    var eText = document.getElementById('bossEnemyHPText');
    var pPct = Math.max(0, BossBattle.playerHP / BossBattle.playerMaxHP * 100);
    var ePct = Math.max(0, BossBattle.bossHP / BossBattle.bossMaxHP * 100);
    if (pFill) {
      pFill.style.width = pPct + '%';
      pFill.classList.toggle('hp-critical', pPct < 20);
    }
    if (eFill) {
      eFill.style.width = ePct + '%';
      eFill.classList.toggle('hp-critical', ePct < 20);
    }
    if (pText) pText.textContent = BossBattle.playerHP + '/' + BossBattle.playerMaxHP;
    if (eText) eText.textContent = BossBattle.bossHP + '/' + BossBattle.bossMaxHP;
  },

  _finish: function(won) {
    BossBattle.gameOver = true;
    var xp = 0;
    if (won) {
      xp = BossBattle.level === 'easy' ? 50 : BossBattle.level === 'medium' ? 100 : 200;
      if (typeof addXP === 'function') addXP(xp);
      var scores = Games.getScores();
      if (!scores.bossBestLevel) scores.bossBestLevel = {};
      scores.bossBestLevel[BossBattle.level] = true;
      Games.saveScore('bossBestLevel', scores.bossBestLevel);
      // Victory confetti + boss death
      Games.particles.confetti();
      var enemyEl = document.getElementById('bossEnemyEl');
      if (enemyEl) enemyEl.classList.add('boss-death-anim');
    } else {
      // Defeat: desaturate
      var game = document.querySelector('.boss-game');
      if (game) game.style.filter = 'saturate(0.3)';
    }

    var res = document.getElementById('bossResult');
    document.getElementById('bossResultEmoji').textContent = won ? '🎉' : '💀';
    document.getElementById('bossResultTitle').textContent = won ? 'Chiến thắng! +' + xp + ' XP' : 'Thất bại!';
    document.getElementById('bossResultDesc').textContent = won ? 'Bạn đã hạ gục ' + BossBattle.LEVELS[BossBattle.level].name + '!' : 'Boss đã hạ gục bạn. Thử lại nhé!';
    if (res) res.style.display = '';
    document.getElementById('bossOptions').style.display = 'none';
    document.getElementById('bossQuestion').style.display = 'none';
  },

  cleanup: function() {
    BossBattle.timers.forEach(function(t) { clearTimeout(t); });
    BossBattle.timers = [];
    var canvas = document.getElementById('gameCanvas');
    if (canvas) canvas.innerHTML = '';
  }
};
