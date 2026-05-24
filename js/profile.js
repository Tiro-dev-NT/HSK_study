// ═══════════════════════════════════════════════════════
// PROFILE.JS — "Tôi" tab (Wave 2)
// Reads from AppState, Gamification, getLevelStats()
// No external deps beyond existing globals
// ═══════════════════════════════════════════════════════

var Profile = (function() {

  // ── Badge definitions ─────────────────────────────────
  var BADGES = [
    { id:'streak7',  emoji:'🔥', name:'7 ngày liên tiếp',   cond:'streak >= 7',  check: function(s) { return s.streak >= 7;  } },
    { id:'streak30', emoji:'💪', name:'30 ngày bất bại',    cond:'streak >= 30', check: function(s) { return s.streak >= 30; } },
    { id:'words100', emoji:'📚', name:'100 từ đầu tiên',    cond:'learned >= 100',  check: function(s) { return s.learned >= 100;  } },
    { id:'words500', emoji:'🎓', name:'500 từ thành thạo',  cond:'learned >= 500',  check: function(s) { return s.learned >= 500;  } },
    { id:'words1k',  emoji:'🏆', name:'1.000 từ vựng!',     cond:'learned >= 1000', check: function(s) { return s.learned >= 1000; } },
    { id:'xp500',    emoji:'⭐', name:'500 XP tuần đầu',    cond:'weeklyXP >= 500',  check: function(s) { return s.weeklyXP >= 500;  } },
    { id:'hsk1done', emoji:'📕', name:'Hoàn thành HSK 1',   cond:'HSK 1 >= 80%',  check: function(s) { return (s.levelPct[1] || 0) >= 80; } },
    { id:'hsk3done', emoji:'📒', name:'Hoàn thành HSK 3',   cond:'HSK 3 >= 80%',  check: function(s) { return (s.levelPct[3] || 0) >= 80; } },
    { id:'pro',      emoji:'💎', name:'Thành viên Pro',      cond:'isPro',         check: function(s) { return s.isPro; } },
  ];

  // ── Band config (v2.0 vs v3.0) ───────────────────────
  var BANDS_V2 = [
    { name:'Sơ cấp',   range:'1 – 2', levels:[1,2], tint:'rgba(16,185,129,.05)',  edge:'rgba(16,185,129,.18)',  dotColor:'#10B981' },
    { name:'Trung cấp',range:'3 – 4', levels:[3,4], tint:'rgba(99,102,241,.05)',  edge:'rgba(99,102,241,.18)',  dotColor:'#6366F1' },
    { name:'Cao cấp',  range:'5 – 6', levels:[5,6], tint:'rgba(220,38,38,.04)',   edge:'rgba(220,38,38,.18)',   dotColor:'#DC2626' },
  ];
  var BANDS_V3 = [
    { name:'Sơ cấp',   range:'1 – 3', levels:[1,2,3], tint:'rgba(16,185,129,.05)',  edge:'rgba(16,185,129,.18)',  dotColor:'#10B981' },
    { name:'Trung cấp',range:'4 – 6', levels:[4,5,6], tint:'rgba(99,102,241,.05)',  edge:'rgba(99,102,241,.18)',  dotColor:'#6366F1' },
    { name:'Cao cấp',  range:'7 – 9', levels:[7,8,9], tint:'rgba(220,38,38,.04)',   edge:'rgba(220,38,38,.18)',   dotColor:'#DC2626' },
  ];

  // ── Collect snapshot of user stats ───────────────────
  function _snapshot() {
    var streak  = (typeof Gamification !== 'undefined') ? Gamification.getStreak() : 0;
    var learned = (typeof AppState !== 'undefined')     ? AppState.totalLearned() : 0;
    var weeklyXP = (typeof xpData !== 'undefined' && xpData.weeklyXP) ? xpData.weeklyXP
                 : (typeof AppState !== 'undefined' ? (AppState.xpData.weeklyXP || 0) : 0);
    var totalXP  = (typeof AppState !== 'undefined') ? (AppState.xpData.total || AppState.xpData.weeklyXP || 0) : 0;
    var version  = (typeof AppState !== 'undefined') ? AppState.version : 2;
    var isPro    = (typeof Monetization !== 'undefined') ? Monetization.isProSync() : false;

    var levelInfo = (typeof activeLevelInfo === 'function') ? activeLevelInfo() : {};
    var levelPct = {};
    var bands = (version === 3) ? BANDS_V3 : BANDS_V2;
    bands.forEach(function(b) {
      b.levels.forEach(function(lv) {
        var info = levelInfo[lv] || {};
        var total = info.count || 0;
        if (!total) { levelPct[lv] = 0; return; }
        var stats = (typeof getLevelStats === 'function') ? getLevelStats(lv) : { mastered:0, total:total };
        levelPct[lv] = Math.round((stats.mastered / total) * 100);
      });
    });

    return { streak:streak, learned:learned, weeklyXP:weeklyXP, totalXP:totalXP,
             version:version, isPro:isPro, levelPct:levelPct };
  }

  // ── Render profile header ─────────────────────────────
  function _renderHeader(snap) {
    var user = (typeof AppState !== 'undefined') ? AppState.user : null;
    var name = (user && user.user_metadata && user.user_metadata.name)
               ? user.user_metadata.name
               : (user && user.email ? user.email.split('@')[0] : 'Bạn');
    var initial = (name || 'B').charAt(0).toUpperCase();

    var avatar = document.getElementById('profAvatar');
    var nameEl = document.getElementById('profName');
    var badge  = document.getElementById('profLevelBadge');
    var pro    = document.getElementById('profProBadge');
    var meta   = document.getElementById('profMeta');
    var upBtn  = document.getElementById('profUpgradeBtn');

    if (avatar) avatar.textContent = initial;
    if (nameEl) nameEl.textContent = name;

    // Find current HSK level (first level < 80% mastered)
    var levelInfo = (typeof activeLevelInfo === 'function') ? activeLevelInfo() : {};
    var maxLevel  = (snap.version === 3) ? 9 : 6;
    var currentLevel = maxLevel;
    for (var lv = 1; lv <= maxLevel; lv++) {
      if ((snap.levelPct[lv] || 0) < 80) { currentLevel = lv; break; }
    }
    var lvLabel = (snap.version === 3) ? 'HSK 3.0 L' + currentLevel : 'HSK ' + currentLevel;

    if (badge) badge.textContent = '● ' + lvLabel;
    if (pro)   { pro.style.display = snap.isPro ? 'inline-flex' : 'none'; }
    if (upBtn) { upBtn.classList.toggle('hidden', snap.isPro); }

    var email = (user && user.email) ? user.email : '';
    var joinInfo = email ? '· ' + email : '';
    if (meta) meta.textContent = 'Streak ' + snap.streak + ' ngày · ' + snap.learned + ' từ đã học ' + joinInfo;
  }

  // ── Render quick stats row ────────────────────────────
  function _renderStats(snap) {
    var s = document.getElementById('profStatStreak');
    var w = document.getElementById('profStatWords');
    var x = document.getElementById('profStatXP');
    var t = document.getElementById('profStatXPTotal');
    if (s) s.textContent = snap.streak;
    if (w) w.textContent = snap.learned;
    if (x) x.textContent = snap.weeklyXP;
    if (t) t.textContent = snap.totalXP;
  }

  // ── Render HSK bands ──────────────────────────────────
  function _renderBands(snap) {
    var bands     = (snap.version === 3) ? BANDS_V3 : BANDS_V2;
    var levelInfo = (typeof activeLevelInfo === 'function') ? activeLevelInfo() : {};
    var version   = snap.version;

    // Title + subtitle
    var titleEl = document.getElementById('profHskTitle');
    var subEl   = document.getElementById('profHskSub');
    if (titleEl) titleEl.textContent = 'Tiến độ HSK ' + (version === 3 ? '3.0 — 9 cấp' : '2.0 — 6 cấp');

    // Total learned / total possible
    var totalWords = 0, learnedWords = 0;
    bands.forEach(function(b) {
      b.levels.forEach(function(lv) {
        var info = levelInfo[lv] || {};
        totalWords += info.count || 0;
        var stats = (typeof getLevelStats === 'function') ? getLevelStats(lv) : { mastered:0 };
        learnedWords += stats.mastered || 0;
      });
    });
    if (subEl) subEl.textContent = learnedWords.toLocaleString() + ' / ' + totalWords.toLocaleString() + ' từ đã thành thạo';

    // Band legend
    var legendEl = document.getElementById('profBandLegend');
    if (legendEl) {
      legendEl.innerHTML = bands.map(function(b) {
        return '<div class="prof-band-legend-item">' +
               '<span class="prof-band-dot" style="background:' + b.dotColor + '"></span>' +
               b.name + ' (' + b.range + ')' +
               '</div>';
      }).join('');
    }

    // Bands grid
    var grid = document.getElementById('profBandsGrid');
    if (!grid) return;
    grid.innerHTML = bands.map(function(b) {
      var levelsHtml = b.levels.map(function(lv) {
        var info  = levelInfo[lv] || {};
        var pct   = snap.levelPct[lv] || 0;
        var label = (version === 3) ? 'L' + lv : 'HSK ' + lv;
        var isDone   = pct >= 100;
        var isActive = !isDone && pct > 0;
        var chipBg, chipColor, chipBorder;
        if (isDone) {
          chipBg = b.dotColor; chipColor = '#fff'; chipBorder = 'none';
        } else if (isActive) {
          chipBg = b.dotColor + '1A'; chipColor = b.dotColor; chipBorder = '1.5px solid ' + b.dotColor;
        } else {
          chipBg = 'var(--surface2)'; chipColor = 'var(--text2)'; chipBorder = 'none';
        }
        return '<div class="prof-level-row">' +
               '<div class="prof-level-chip" style="background:' + chipBg + ';color:' + chipColor + ';border:' + chipBorder + '">' +
               (isDone ? '✓' : lv) +
               '</div>' +
               '<div class="prof-level-detail">' +
               '<div class="prof-level-meta">' +
               '<span class="prof-level-name">' + label + '</span>' +
               '<span class="prof-level-pct" style="color:' + (pct === 0 ? 'var(--text2)' : b.dotColor) + '">' + pct + '%</span>' +
               '</div>' +
               '<div class="prof-level-bar"><div class="prof-level-fill" style="width:' + pct + '%;background:' + b.dotColor + '"></div></div>' +
               '</div>' +
               '</div>';
      }).join('');
      return '<div class="prof-band-group" style="background:' + b.tint + ';border:1px solid ' + b.edge + '">' +
             '<div class="prof-band-label"><span class="prof-band-name">' + b.name + '</span><span class="prof-band-range">HSK ' + b.range + '</span></div>' +
             levelsHtml +
             '</div>';
    }).join('');
  }

  // ── Render XP bar chart (7 days, today = rightmost) ──
  function _renderXpChart(snap) {
    var xpEl  = document.getElementById('profXpWeek');
    var bars  = document.getElementById('profXpBars');
    if (xpEl) xpEl.textContent = snap.weeklyXP + ' XP';
    if (!bars) return;

    // We only have weeklyXP total — distribute across 7 bars for visual, highlighting today
    // If no XP, show empty bars
    var totalXP = snap.weeklyXP;
    // Approximate distribution: ramping up, today gets ~30%
    var weights = [0.05, 0.08, 0.1, 0.12, 0.15, 0.2, 0.3];
    var values  = weights.map(function(w) { return Math.round(totalXP * w); });
    var maxVal  = Math.max.apply(null, values) || 1;

    bars.innerHTML = values.map(function(v, i) {
      var heightPct = Math.max(3, Math.round((v / maxVal) * 100));
      var cls = i === 6 ? 'today' : (v > 0 ? 'has-data' : '');
      return '<div class="prof-xp-bar-wrap">' +
             '<div class="prof-xp-bar ' + cls + '" style="height:' + heightPct + '%"></div>' +
             '</div>';
    }).join('');
  }

  // ── Render recent achievements (preview, 3 items) ─────
  function _renderAchvPreview(snap) {
    var list = document.getElementById('profAchvPreview');
    if (!list) return;
    var items = [];
    if (snap.streak >= 7)   items.push({ emoji:'🔥', name:'Chuỗi ' + snap.streak + ' ngày', date:'Đang duy trì', color:'#DC2626' });
    if (snap.learned >= 100) items.push({ emoji:'📚', name:'Đạt ' + snap.learned + ' từ', date:'Tổng cộng', color:'#F59E0B' });
    if ((snap.levelPct[1] || 0) >= 80) items.push({ emoji:'📕', name:'Hoàn thành HSK 1', date:'100%+', color:'#10B981' });
    if ((snap.levelPct[3] || 0) >= 80) items.push({ emoji:'📒', name:'Hoàn thành HSK 3', date:'100%+', color:'#10B981' });
    if (snap.isPro)          items.push({ emoji:'💎', name:'Thành viên Pro', date:'Đang hoạt động', color:'#F59E0B' });
    // Fallback items if nothing earned yet
    if (items.length === 0) {
      items.push({ emoji:'🌱', name:'Mới bắt đầu hành trình', date:'Học thêm để mở khóa!', color:'#6B7280' });
    }
    items = items.slice(0, 3);
    list.innerHTML = items.map(function(a) {
      return '<div class="prof-achv-row">' +
             '<div class="prof-achv-icon" style="background:' + a.color + '18">' + a.emoji + '</div>' +
             '<div class="prof-achv-text">' +
             '<div class="prof-achv-name">' + a.name + '</div>' +
             '<div class="prof-achv-date">' + a.date + '</div>' +
             '</div></div>';
    }).join('');
  }

  // ── Render full badge grid (Thành tích tab) ───────────
  function _renderBadgeGrid(snap) {
    var grid = document.getElementById('profBadgeGrid');
    if (!grid) return;
    grid.innerHTML = BADGES.map(function(b) {
      var earned = b.check(snap);
      return '<div class="prof-badge-item ' + (earned ? '' : 'locked') + '">' +
             '<div class="prof-badge-emoji">' + b.emoji + '</div>' +
             '<div class="prof-badge-name">' + b.name + '</div>' +
             '<div class="prof-badge-cond">' + b.cond + '</div>' +
             '</div>';
    }).join('');
  }

  // ── Settings tab extras ───────────────────────────────
  function _renderSettings(snap) {
    var emailEl   = document.getElementById('profSettingEmail');
    var versionEl = document.getElementById('profHskVersionDesc');
    var user = (typeof AppState !== 'undefined') ? AppState.user : null;
    if (emailEl) emailEl.textContent = (user && user.email) ? user.email : 'Chưa đăng nhập';
    if (versionEl) versionEl.textContent = snap.version === 3 ? 'HSK 3.0 (9 cấp)' : 'HSK 2.0 (6 cấp)';
  }

  // ── Tab switching ─────────────────────────────────────
  function switchTab(tabId) {
    document.querySelectorAll('.prof-tab').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    document.querySelectorAll('.prof-panel').forEach(function(panel) {
      panel.classList.toggle('active', panel.id === 'profPanel-' + tabId);
    });
    if (tabId === 'upgrade') { Router.navigateTo('pricing'); }
  }

  // ── Public API ────────────────────────────────────────
  return {

    setup: function() {
      var snap = _snapshot();
      _renderHeader(snap);
      _renderStats(snap);
      _renderBands(snap);
      _renderXpChart(snap);
      _renderAchvPreview(snap);
      _renderBadgeGrid(snap);
      _renderSettings(snap);

      // Wire tab clicks
      document.querySelectorAll('.prof-tab').forEach(function(btn) {
        btn.addEventListener('click', function() { Profile.switchTab(btn.dataset.tab); });
      });
    },

    switchTab: switchTab,

    goSettings: function() { Profile.switchTab('settings'); }
  };

}());
