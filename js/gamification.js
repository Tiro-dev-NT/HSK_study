// ═══════════════════════════════════════════════════════
// GAMIFICATION.JS — XP, Streak, Calendar, Level Grid
// • Owns: addXP(), checkAndUpdateStreak(), renderXPBar(),
//         renderStreakCalendar(), buildLevelGrid(), updateStats()
// • Reads: AppState.xpData, AppState.progress, AppState.srsData
// • Writes: localStorage via AppState
// • NO direct calls to other modules (uses CustomEvent to notify)
// ═══════════════════════════════════════════════════════

var Gamification = {
  XP_PER_LEVEL: 500,

  // ── XP ─────────────────────────────────────────────
  addXP: function(amount) {
    const weekStart = Gamification._getWeekStart();
    if (AppState.xpData.weekStart !== weekStart) {
      AppState.xpData.weeklyXP = 0;
      AppState.xpData.weekStart = weekStart;
    }
    AppState.xpData.total    = (AppState.xpData.total    || 0) + amount;
    AppState.xpData.weeklyXP = (AppState.xpData.weeklyXP || 0) + amount;
    // E7: track daily XP for heatmap
    var today = new Date().toISOString().split('T')[0];
    if (!AppState.xpData.dailyXP) AppState.xpData.dailyXP = {};
    AppState.xpData.dailyXP[today] = (AppState.xpData.dailyXP[today] || 0) + amount;
    AppState.saveXP();
    if (typeof Quests !== 'undefined') Quests.incrementMetric('xp_earned_today', amount);
    // keep compat alias in sync
    xpData.total    = AppState.xpData.total;
    xpData.weeklyXP = AppState.xpData.weeklyXP;
    xpData.weekStart = AppState.xpData.weekStart;
    AppState.saveXP();
  },

  renderXPBar: function() {
    const xpEl    = document.getElementById('xpTotal');
    const fillEl  = document.getElementById('xpBarFill');
    const levelEl = document.getElementById('xpLevelLabel');
    const weekEl  = document.getElementById('xpThisWeek');
    if (!xpEl) return;
    const total      = AppState.xpData.total || 0;
    const level      = Math.floor(total / Gamification.XP_PER_LEVEL) + 1;
    const xpInLevel  = total % Gamification.XP_PER_LEVEL;
    const pct        = Math.min(100, Math.round(xpInLevel / Gamification.XP_PER_LEVEL * 100));
    xpEl.textContent = total;
    if (fillEl)  fillEl.style.width = pct + '%';
    if (levelEl) levelEl.textContent = 'Cấp ' + level + ' (' + xpInLevel + '/' + Gamification.XP_PER_LEVEL + ' XP)';
    if (weekEl)  weekEl.textContent  = '+' + (AppState.xpData.weeklyXP || 0) + ' XP tuần này';
  },

  // ── Streak ─────────────────────────────────────────
  getStreak: function() {
    return parseInt(localStorage.getItem('hsk_streak') || '0');
  },

  checkAndUpdateStreak: function() {
    const today     = new Date().toISOString().split('T')[0];
    const lastActive = localStorage.getItem('hsk_last_active') || '';
    const streak    = Gamification.getStreak();
    if (lastActive === today) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const newStreak = lastActive === yesterday ? streak + 1 : 1;
    localStorage.setItem('hsk_streak', newStreak);
    localStorage.setItem('hsk_last_active', today);
    Gamification._recordActiveDay();
    if (newStreak === 7 || newStreak === 30) Gamification.addXP(100);
    Gamification.updateStats();
  },

  _recordActiveDay: function() {
    const today = new Date().toISOString().split('T')[0];
    const days  = JSON.parse(localStorage.getItem('hsk_active_days') || '[]');
    if (!days.includes(today)) {
      days.push(today);
      localStorage.setItem('hsk_active_days', JSON.stringify(days.slice(-30)));
    }
  },

  // ── Streak Calendar ────────────────────────────────
  renderStreakCalendar: function() {
    const cal = document.getElementById('streakCalendar');
    if (!cal) return;
    const today      = new Date();
    const dayNames   = ['CN','T2','T3','T4','T5','T6','T7'];
    const activeDays = JSON.parse(localStorage.getItem('hsk_active_days') || '[]');
    let html = '<div class="sc-title">🔥 7 ngày gần đây</div><div class="sc-days">';
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dateStr  = d.toISOString().split('T')[0];
      const isToday  = i === 0;
      const isActive = activeDays.includes(dateStr);
      const dayName  = dayNames[d.getDay()];
      html += '<div class="sc-day' + (isActive ? ' active' : '') + (isToday ? ' today' : '') + '">' +
        '<span class="sc-dot">' + (isActive ? '🔥' : '○') + '</span>' +
        '<span class="sc-label">' + dayName + '</span>' +
      '</div>';
    }
    html += '</div>';
    cal.innerHTML = html;
  },

  // ── Stats row ──────────────────────────────────────
  updateStats: function() {
    const lEl = document.getElementById('statLearned');
    const sEl = document.getElementById('statStreak');
    const dEl = document.getElementById('statDue');
    if (lEl) lEl.textContent = AppState.totalLearned();
    if (sEl) sEl.textContent = Gamification.getStreak();
    if (dEl) {
      const today = new Date().toISOString().split('T')[0];
      const due   = Object.values(AppState.srsData).filter(function(s) {
        return s.dueDate && s.dueDate <= today;
      }).length;
      dEl.textContent = due;
    }
    Gamification.renderXPBar();
    Gamification.renderStreakCalendar();
    if (typeof RightSidebar !== 'undefined') RightSidebar.render();
  },

  // ── Level Grid (Home page) ─────────────────────────
  buildLevelGrid: function() {
    const grid = document.getElementById('levelGrid');
    if (!grid) return;
    grid.innerHTML = '';
    var count = activeLevelCount();
    var levelInfo = activeLevelInfo();
    for (let lv = 1; lv <= count; lv++) {
      const info = levelInfo[lv];
      if (!info) continue;
      const card = document.createElement('div');
      card.className = 'level-card';
      const newWords = getNewWordsForLevel(lv);
      const realCount = newWords.length;
      const displayCount = realCount || info.count;
      const stats = getLevelStats(lv);
      const pct = displayCount ? Math.round(stats.mastered / displayCount * 100) : 0;

      var isEN = typeof AppState !== 'undefined' && AppState.lang === 'en';
      var lblNew      = isEN ? 'New' : 'Chưa học';
      var lblLearning = isEN ? 'Learning' : 'Đang học';
      var lblDue      = isEN ? 'Due' : 'Cần ôn';
      var lblMastered = isEN ? 'Mastered' : 'Đã thuộc';
      var lblWords    = isEN ? 'new words' : 'từ mới';

      card.innerHTML =
        '<div class="level-badge">' + info.label + '</div>' +
        '<div class="level-count">' + displayCount + ' ' + lblWords + (!realCount ? ' (coming soon)' : '') + '</div>' +
        '<div class="level-progress-bar"><div class="level-progress-fill" style="width:' + pct + '%;background:' + info.color + '"></div></div>' +
        '<div class="level-stats-grid">' +
          '<span class="ls-item ls-new" title="' + lblNew + '">🆕 ' + stats.new + '</span>' +
          '<span class="ls-item ls-learning" title="' + lblLearning + '">📖 ' + stats.learning + '</span>' +
          '<span class="ls-item ls-due" title="' + lblDue + '">🔄 ' + stats.due + '</span>' +
          '<span class="ls-item ls-mastered" title="' + lblMastered + '">✅ ' + stats.mastered + '</span>' +
        '</div>';
      card.addEventListener('click', function() {
        Router.navigateTo('learn');
        setTimeout(function() {
          document.dispatchEvent(new CustomEvent('hsk:openDeck', { detail: { deckId: 'sys_hsk' + lv } }));
        }, 50);
      });
      grid.appendChild(card);
    }

    // Show dedup note for HSK 3.0 (explains why count differs from official ~11,092)
    var note = document.getElementById('hsk3-count-note');
    if (note) {
      var isV3 = typeof AppState !== 'undefined' && AppState.version === 3;
      var isEN = typeof AppState !== 'undefined' && AppState.lang === 'en';
      if (isV3) {
        note.style.display = 'block';
        note.innerHTML = isEN
          ? '<span class="hsk3-note-icon">ℹ️</span> HSK 3.0 L7–9 shows only words not already covered in L1–6 (duplicates removed). The official Hanban total (~11,092) counts overlapping words across levels.'
          : '<span class="hsk3-note-icon">ℹ️</span> HSK 3.0 L7–9 chỉ hiển thị từ <em>mới</em> chưa có ở L1–6 (đã lọc trùng lặp). Tổng chính thức Hanban (~11,092) đếm cả từ xuất hiện ở nhiều cấp độ.';
      } else {
        note.style.display = 'none';
      }
    }
  },

  // ── Helpers ────────────────────────────────────────
  _getWeekStart: function() {
    const d = new Date();
    d.setDate(d.getDate() - d.getDay());
    return d.toISOString().split('T')[0];
  },

  // ── Word of the Day ────────────────────────────────
  renderWOTD: function() {
    var card = document.getElementById('wotdCard');
    if (!card) return;
    var all = getAllWords();
    if (!all.length) return;

    var today = new Date().toISOString().split('T')[0];
    var cached = null;
    var wotdKey = 'hsk_wotd_v' + (AppState.version || 2);
    try { cached = JSON.parse(localStorage.getItem(wotdKey) || 'null'); } catch(e) {}
    var word;
    if (cached && cached.date === today && cached.hanzi) {
      word = all.find(function(w) { return w.h === cached.hanzi; });
    }
    if (!word) {
      var hash = 0;
      for (var i = 0; i < today.length; i++) {
        hash = ((hash << 5) - hash) + today.charCodeAt(i);
        hash = hash & hash;
      }
      var idx = Math.abs(hash) % all.length;
      word = all[idx];
      localStorage.setItem(wotdKey, JSON.stringify({ date: today, hanzi: word.h }));
    }

    document.getElementById('wotdHanzi').textContent = word.h.charAt(0);
    document.getElementById('wotdPinyin').textContent = word.p;
    var isEN = AppState.lang === 'en';
    document.getElementById('wotdMeaning').textContent = isEN ? word.e : word.v;
    var exEl = document.getElementById('wotdExample');
    if (word.ex && word.ex.zh) {
      exEl.innerHTML = '<span class="wotd-ex-zh">' + word.ex.zh + '</span>' +
        (word.ex.py ? '<br><span class="wotd-ex-py">' + word.ex.py + '</span>' : '') +
        '<br><span class="wotd-ex-vi">' + (isEN ? (word.ex.en || word.ex.vi) : word.ex.vi) + '</span>';
      exEl.style.display = '';
    } else {
      exEl.style.display = 'none';
    }

    // HanziWriter animation
    var writerEl = document.getElementById('wotdWriter');
    if (writerEl && typeof HanziWriter !== 'undefined') {
      writerEl.innerHTML = '';
      try {
        var writer = HanziWriter.create(writerEl, word.h.charAt(0), {
          width: 100, height: 100, padding: 5,
          strokeColor: getComputedStyle(document.documentElement).getPropertyValue('--text').trim() || '#333',
          delayBetweenStrokes: 300, autoAnimate: true
        });
      } catch(e) {}
    }

    document.getElementById('wotdTTS').onclick = function() {
      if (typeof Dictionary !== 'undefined') Dictionary.playTTS(word.h);
      else if ('speechSynthesis' in window) {
        var u = new SpeechSynthesisUtterance(word.h);
        u.lang = 'zh-CN'; speechSynthesis.speak(u);
      }
    };
    document.getElementById('wotdDetail').onclick = function() {
      if (typeof Dictionary !== 'undefined' && Dictionary.openModal) {
        Dictionary.openModal(word);
      }
    };
  },

  // ── Progress Analytics ────────────────────────────
  renderAnalytics: function() {
    Gamification._renderReadiness();
    Gamification._renderWeakWords();
    Gamification._renderXPTrend();
  },

  _renderReadiness: function() {
    var el = document.getElementById('readinessChart');
    if (!el) return;
    var html = '';
    var count = activeLevelCount();
    var levelInfo = activeLevelInfo();
    for (var lv = 1; lv <= count; lv++) {
      var info = levelInfo[lv];
      var words = getNewWordsForLevel(lv);
      var total = words.length || (info ? info.count : 0);
      if (!total) continue;
      var stats = getLevelStats(lv);
      var pct = Math.round(stats.mastered / total * 100);
      var color = info ? info.color : 'var(--primary)';
      html += '<div class="readiness-row">' +
        '<span class="readiness-label">' + (info ? info.label : 'HSK ' + lv) + '</span>' +
        '<div class="readiness-bar"><div class="readiness-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
        '<span class="readiness-pct">' + pct + '%</span>' +
      '</div>';
    }
    el.innerHTML = html;
  },

  _renderWeakWords: function() {
    var el = document.getElementById('weakWordsList');
    if (!el) return;
    var srs = AppState.srsData || {};
    var entries = [];
    Object.keys(srs).forEach(function(hanzi) {
      var s = srs[hanzi];
      if (s.lapses && s.lapses > 0) {
        entries.push({ h: hanzi, lapses: s.lapses });
      }
    });
    entries.sort(function(a, b) { return b.lapses - a.lapses; });
    entries = entries.slice(0, 8);

    if (!entries.length) {
      el.innerHTML = '<div class="weak-empty">Chưa có dữ liệu — học thêm để phân tích!</div>';
      return;
    }
    var all = getAllWords();
    var html = '';
    entries.forEach(function(e) {
      var w = all.find(function(wd) { return wd.h === e.h; });
      html += '<div class="weak-item">' +
        '<span class="weak-hanzi">' + e.h + '</span>' +
        '<span class="weak-pinyin">' + (w ? w.p : '') + '</span>' +
        '<span class="weak-lapses">' + e.lapses + ' lần sai</span>' +
      '</div>';
    });
    el.innerHTML = html;
  },

  _renderXPTrend: function() {
    var el = document.getElementById('xpTrendChart');
    if (!el) return;
    var daily = (AppState.xpData && AppState.xpData.dailyXP) || {};
    var days = [];
    for (var i = 13; i >= 0; i--) {
      var d = new Date(); d.setDate(d.getDate() - i);
      var key = d.toISOString().split('T')[0];
      days.push({ date: key, xp: daily[key] || 0, label: (d.getDate()) + '/' + (d.getMonth()+1) });
    }
    var hasData = days.some(function(d) { return d.xp > 0; });
    if (!hasData) {
      el.innerHTML = '<div class="weak-empty">Chưa có dữ liệu XP — học để thấy biểu đồ!</div>';
      return;
    }
    var maxXP = Math.max.apply(null, days.map(function(d) { return d.xp; })) || 1;
    var html = '<div class="xp-trend-bars">';
    days.forEach(function(d) {
      var h = Math.max(2, Math.round(d.xp / maxXP * 80));
      html += '<div class="xp-trend-col" title="' + d.label + ': ' + d.xp + ' XP">' +
        '<div class="xp-trend-bar" style="height:' + h + 'px"></div>' +
        '<span class="xp-trend-label">' + d.label + '</span>' +
      '</div>';
    });
    html += '</div>';
    el.innerHTML = html;
  }
};

// ── Backward-compat global functions ──────────────────
function addXP(amount)            { Gamification.addXP(amount); }
function checkAndUpdateStreak()   { Gamification.checkAndUpdateStreak(); }
function updateStats()            { Gamification.updateStats(); }
function buildLevelGrid()         { Gamification.buildLevelGrid(); }
function renderXPBar()            { Gamification.renderXPBar(); }
function renderStreakCalendar()   { Gamification.renderStreakCalendar(); }
function getStreak()              { return Gamification.getStreak(); }
function recordActiveDay()        { Gamification._recordActiveDay(); }
