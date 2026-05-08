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
    [1, 2, 3, 4, 5, 6].forEach(function(lv) {
      const info        = LEVEL_INFO[lv];
      const card        = document.createElement('div');
      card.className    = 'level-card';
      const learned     = (AppState.progress[lv] || []).length;
      const realCount   = (HSK_DATA[lv] || []).length;
      const displayCount = realCount || info.count;
      card.innerHTML =
        '<div class="level-badge">' + info.label + '</div>' +
        '<div class="level-count">' + displayCount + ' từ' + (!realCount ? ' (coming soon)' : '') + '</div>' +
        '<div class="level-count" style="margin-top:4px;color:var(--accent)">' + learned + '/' + displayCount + ' học</div>';
      card.addEventListener('click', function() {
        Router.navigateTo('learn');
        // Notify decks module via custom event (no direct coupling)
        setTimeout(function() {
          document.dispatchEvent(new CustomEvent('hsk:openDeck', { detail: { deckId: 'sys_hsk' + lv } }));
        }, 50);
      });
      grid.appendChild(card);
    });
  },

  // ── Helpers ────────────────────────────────────────
  _getWeekStart: function() {
    const d = new Date();
    d.setDate(d.getDate() - d.getDay());
    return d.toISOString().split('T')[0];
  },
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
