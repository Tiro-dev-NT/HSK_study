// ═══════════════════════════════════════════════════════
// RIGHTSIDEBAR.JS — E6 Right sidebar + E5 Quick settings
//                 + B4 Self-compare weekly XP
// ═══════════════════════════════════════════════════════

var RightSidebar = {

  _collapsed: false,

  init: function() {
    var btn = document.getElementById('rsCollapseBtn');
    if (btn) btn.addEventListener('click', RightSidebar.toggleCollapse);
    RightSidebar._collapsed = localStorage.getItem('hsk_rs_collapsed') === '1';
    if (RightSidebar._collapsed) {
      document.getElementById('rightSidebar').classList.add('collapsed');
    }
    RightSidebar.syncQuickSettings();
    RightSidebar.render();
  },

  toggleCollapse: function() {
    RightSidebar._collapsed = !RightSidebar._collapsed;
    document.getElementById('rightSidebar').classList.toggle('collapsed', RightSidebar._collapsed);
    localStorage.setItem('hsk_rs_collapsed', RightSidebar._collapsed ? '1' : '0');
  },

  // ── Render all widgets ─────────────────────────────
  render: function() {
    RightSidebar.renderStats();
    RightSidebar.renderXP();
    RightSidebar.renderStreakCal();
  },

  renderStats: function() {
    var lEl = document.getElementById('rsLearned');
    var sEl = document.getElementById('rsStreak');
    var dEl = document.getElementById('rsDue');
    if (lEl) lEl.textContent = AppState.totalLearned();
    if (sEl) sEl.textContent = parseInt(localStorage.getItem('hsk_streak') || '0');
    if (dEl) {
      var today = new Date().toISOString().split('T')[0];
      var due = Object.values(AppState.srsData).filter(function(s) {
        return s.dueDate && s.dueDate <= today;
      }).length;
      dEl.textContent = due;
    }
  },

  renderXP: function() {
    var xp      = AppState.xpData || {};
    var total   = xp.total   || 0;
    var weekly  = xp.weeklyXP || 0;
    var XP_LV   = 500;
    var level   = Math.floor(total / XP_LV) + 1;
    var inLevel = total % XP_LV;
    var pct     = Math.min(100, Math.round(inLevel / XP_LV * 100));

    var totEl  = document.getElementById('rsXpTotal');
    var lvEl   = document.getElementById('rsXpLevel');
    var fillEl = document.getElementById('rsXpFill');
    var wkEl   = document.getElementById('rsWeeklyXp');
    if (totEl)  totEl.textContent  = total;
    if (lvEl)   lvEl.textContent   = 'Cấp ' + level;
    if (fillEl) fillEl.style.width = pct + '%';
    if (wkEl)   wkEl.textContent   = '+' + weekly + ' XP tuần này';

    // B4: compare vs last week
    RightSidebar.renderSelfCompare(weekly);
  },

  // B4 — Self-compare: so sánh tuần này vs tuần trước
  renderSelfCompare: function(thisWeekXP) {
    var vsEl = document.getElementById('rsVsLast');
    if (!vsEl) return;
    var lastWeek = parseInt(localStorage.getItem('hsk_last_week_xp') || '0');
    if (lastWeek === 0) { vsEl.textContent = ''; return; }
    var diff = thisWeekXP - lastWeek;
    if (diff > 0) {
      vsEl.textContent = '↑ +' + diff + ' vs tuần trước';
      vsEl.className = 'rs-vs-last up';
    } else if (diff < 0) {
      vsEl.textContent = '↓ ' + diff + ' vs tuần trước';
      vsEl.className = 'rs-vs-last down';
    } else {
      vsEl.textContent = '= Bằng tuần trước';
      vsEl.className = 'rs-vs-last same';
    }
  },

  renderStreakCal: function() {
    var cal = document.getElementById('rsStreakCal');
    if (!cal) return;
    var today      = new Date();
    var dayNames   = ['CN','T2','T3','T4','T5','T6','T7'];
    var activeDays = JSON.parse(localStorage.getItem('hsk_active_days') || '[]');
    var html = '';
    for (var i = 6; i >= 0; i--) {
      var d = new Date(today);
      d.setDate(today.getDate() - i);
      var dateStr  = d.toISOString().split('T')[0];
      var isActive = activeDays.includes(dateStr);
      var isToday  = i === 0;
      html += '<div class="rs-sc-day' + (isActive ? ' active' : '') + (isToday ? ' today' : '') + '">' +
        '<span class="rs-sc-dot">' + (isActive ? '🔥' : '○') + '</span>' +
        '<span class="rs-sc-label">' + dayNames[d.getDay()] + '</span>' +
      '</div>';
    }
    cal.innerHTML = html;
  },

  // ── E5 Quick settings ──────────────────────────────
  syncQuickSettings: function() {
    var s = (typeof appSettings !== 'undefined') ? appSettings : {};
    var py = document.getElementById('qsPinyin');
    var en = document.getElementById('qsEnglish');
    var hl = document.getElementById('qsHintLevel');
    var sm = document.getElementById('qsSrsMode');
    if (py) py.checked   = s.showPinyin  !== false;
    if (en) en.checked   = s.showEnglish === true;
    if (hl) hl.value     = s.hintLevel   || 'medium';
    if (sm) sm.value     = s.srsMode     || 'simple';
  },

  togglePinyin: function(val) {
    if (typeof appSettings !== 'undefined') {
      appSettings.showPinyin = val;
      localStorage.setItem('hsk_settings', JSON.stringify(appSettings));
    }
  },

  toggleEnglish: function(val) {
    if (typeof appSettings !== 'undefined') {
      appSettings.showEnglish = val;
      localStorage.setItem('hsk_settings', JSON.stringify(appSettings));
    }
  },

  setHintLevel: function(val) {
    if (typeof appSettings !== 'undefined') {
      appSettings.hintLevel = val;
      localStorage.setItem('hsk_settings', JSON.stringify(appSettings));
      // sync main settings UI if open
      var el = document.getElementById('setHintLevel');
      if (el) el.value = val;
    }
  },

  setSrsMode: function(val) {
    if (typeof appSettings !== 'undefined') {
      appSettings.srsMode = val;
      localStorage.setItem('hsk_settings', JSON.stringify(appSettings));
      var el = document.getElementById('setSrsMode');
      if (el) el.value = val;
      // apply SRS button mode immediately
      if (typeof Session !== 'undefined' && Session.applySrsMode) Session.applySrsMode();
    }
  },
};

// ── B4: lưu XP tuần trước khi sang tuần mới ──────────
(function trackLastWeekXP() {
  var xp = (typeof AppState !== 'undefined' && AppState.xpData) ? AppState.xpData : {};
  var weekStart = (new Date());
  weekStart.setDate(weekStart.getDate() - weekStart.getDay());
  var currentWeekStart = weekStart.toISOString().split('T')[0];
  var savedWeekStart   = localStorage.getItem('hsk_xp_week_start_tracked');
  if (savedWeekStart && savedWeekStart !== currentWeekStart) {
    // New week — save last week's XP
    var lastWeekXP = parseInt(localStorage.getItem('hsk_xp_prev_week_snapshot') || '0');
    localStorage.setItem('hsk_last_week_xp', lastWeekXP);
  }
  // Snapshot current weekly XP for next comparison
  if (xp.weeklyXP !== undefined) {
    localStorage.setItem('hsk_xp_prev_week_snapshot', xp.weeklyXP || 0);
    localStorage.setItem('hsk_xp_week_start_tracked', currentWeekStart);
  }
})();
