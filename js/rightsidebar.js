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
    RightSidebar.renderHeatmap();
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

  // ── E7: Heatmap 12 tuần ────────────────────────────
  renderHeatmap: function() {
    var container = document.getElementById('rsHeatmap');
    if (!container) return;
    var dailyXP = (AppState.xpData && AppState.xpData.dailyXP) ? AppState.xpData.dailyXP : {};
    var today = new Date();
    var html = '';
    // 12 columns (weeks), each with 7 rows (days)
    for (var w = 11; w >= 0; w--) {
      html += '<div class="rs-heatmap-col">';
      for (var d = 0; d < 7; d++) {
        var offset = w * 7 + (6 - d);
        var date = new Date(today);
        date.setDate(today.getDate() - offset);
        var dateStr = date.toISOString().split('T')[0];
        var xp = dailyXP[dateStr] || 0;
        var lvl = xp === 0 ? 0 : xp < 50 ? 1 : xp < 100 ? 2 : xp < 200 ? 3 : 4;
        html += '<span class="hm-cell hm-' + lvl + '" title="' + dateStr + ': ' + xp + ' XP"></span>';
      }
      html += '</div>';
    }
    container.innerHTML = html;
  },

  // ── E8: Related words ──────────────────────────────
  renderRelated: function(currentWord) {
    var section = document.getElementById('rsRelated');
    var list = document.getElementById('rsRelatedList');
    if (!section || !list) return;
    if (!currentWord || !currentWord.h) { section.style.display = 'none'; return; }

    var results = [];
    var allWords = (typeof getAllWords === 'function') ? getAllWords() : [];
    var currentH = currentWord.h;

    // Find by shared radical
    if (typeof RADICALS !== 'undefined') {
      var chars = currentH.split('');
      for (var i = 0; i < chars.length && results.length < 5; i++) {
        var radical = null;
        for (var r in RADICALS) {
          if (RADICALS[r].chars && RADICALS[r].chars.indexOf(chars[i]) !== -1) { radical = r; break; }
        }
        if (radical && RADICALS[radical].chars) {
          var relChars = RADICALS[radical].chars;
          for (var j = 0; j < allWords.length && results.length < 5; j++) {
            var w = allWords[j];
            if (w.h === currentH) continue;
            if (results.some(function(x){return x.h===w.h;})) continue;
            for (var k = 0; k < relChars.length; k++) {
              if (w.h.indexOf(relChars[k]) !== -1) { results.push(w); break; }
            }
          }
        }
      }
    }

    // Fill with same topic
    if (results.length < 5 && currentWord.t) {
      for (var i = 0; i < allWords.length && results.length < 5; i++) {
        var w = allWords[i];
        if (w.h === currentH) continue;
        if (results.some(function(x){return x.h===w.h;})) continue;
        if (w.t === currentWord.t) results.push(w);
      }
    }

    if (results.length === 0) { section.style.display = 'none'; return; }
    section.style.display = '';
    var html = '';
    results.forEach(function(w) {
      html += '<div class="rs-related-item" data-hanzi="' + w.h + '">' +
        '<span class="rs-related-h">' + w.h + '</span>' +
        '<span class="rs-related-p">' + (w.p || '') + '</span>' +
        '<div class="rs-related-v">' + (w.v || w.e || '') + '</div>' +
      '</div>';
    });
    list.innerHTML = html;
    // Click handler
    list.querySelectorAll('.rs-related-item').forEach(function(el) {
      el.addEventListener('click', function() {
        var hanzi = el.getAttribute('data-hanzi');
        var word = allWords.find(function(w){return w.h === hanzi;});
        if (word && typeof Dictionary !== 'undefined' && Dictionary.show) Dictionary.show(word);
      });
    });
  },

  clearRelated: function() {
    var section = document.getElementById('rsRelated');
    if (section) section.style.display = 'none';
  },

  // ── Smart Right-Rail: route-aware context (Desktop Polish Wave 1) ──
  onNavigate: function(page) {
    var section = document.getElementById('rsCtxSection');
    if (!section) return;
    var html = '';
    // Học hub + các trang học (input)
    if (page === 'learn' || page === 'handout' || page === 'grammar' ||
        page === 'reading' || page === 'topics' || page === 'ban-do-hsk') {
      html = RightSidebar._ctxLearn();
    // Luyện tập (output, đo skill)
    } else if (page === 'practice' || page === 'quiz' || page === 'mock-exam' ||
               page === 'hskk' || page === 'speaking' || page === 'writing' ||
               page === 'games') {
      html = RightSidebar._ctxPractice();
    // Từ điển → từ vừa tra gần đây
    } else if (page === 'dictionary') {
      html = RightSidebar._ctxDictionary();
    // Công cụ khác → phím tắt
    } else if (page === 'tools' || page === 'text-analyzer' || page === 'tutor') {
      html = RightSidebar._ctxTools();
    }
    if (!html) {
      section.innerHTML = '';
      section.style.display = 'none';
      return;
    }
    section.innerHTML = html;
    section.style.display = '';
  },

  _ctxLearn: function() {
    var streak = parseInt(localStorage.getItem('hsk_streak') || '0');
    var streakHtml = streak > 0
      ? '<div class="rs-ctx-streak">🔥 Chuỗi <strong>' + streak + '</strong> ngày — học hôm nay để giữ lửa!</div>'
      : '<div class="rs-ctx-streak">🔥 Học 1 bài hôm nay để bắt đầu chuỗi!</div>';
    var lastId = localStorage.getItem('hsk_last_deck_id') || 'sys_hsk1';
    var deck = (typeof decks !== 'undefined') ? decks[lastId] : null;
    if (!deck) {
      return '<div class="rs-section-title">📚 Tiếp tục học</div>' + streakHtml +
        '<button class="rs-ctx-btn" onclick="Router.navigateTo(\'learn\')">Chọn bộ thẻ →</button>';
    }
    var prog = (typeof getDeckProgress === 'function') ? getDeckProgress(deck) : { pct: 0, dueCount: 0 };
    var pct  = prog.pct || 0;
    var due  = prog.dueCount || 0;
    return '<div class="rs-section-title">📚 Tiếp tục học</div>' +
      '<div class="rs-ctx-deck-card">' +
        '<div class="rs-ctx-deck-icon" style="background:' + (deck.color || '#DC2626') + '">' + (deck.icon || '📕') + '</div>' +
        '<div class="rs-ctx-deck-info">' +
          '<div class="rs-ctx-deck-name">' + deck.title + '</div>' +
          '<div class="rs-ctx-bar-wrap"><div class="rs-ctx-bar-fill" style="width:' + pct + '%"></div></div>' +
          '<div class="rs-ctx-meta">' + pct + '% · ' + due + ' cần ôn</div>' +
        '</div>' +
      '</div>' +
      '<button class="rs-ctx-btn" onclick="learnHubOpenDeck && learnHubOpenDeck(\'' + lastId + '\')">▶ Học tiếp →</button>' +
      streakHtml;
  },

  _ctxDictionary: function() {
    var recent = [];
    try { recent = JSON.parse(localStorage.getItem('hsk_dict_recent') || '[]'); } catch(e) {}
    if (!recent.length) {
      return '<div class="rs-section-title">🔍 Từ vừa tra</div>' +
        '<div class="rs-ctx-empty">Chưa có từ nào. Gõ vào ô tìm kiếm để bắt đầu tra cứu.</div>';
    }
    var chips = recent.slice(0, 8).map(function(q) {
      var safe = String(q).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      var disp = String(q).replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return '<button class="rs-ctx-word-chip" onclick="RightSidebar.dictLookup(\'' + safe + '\')">' + disp + '</button>';
    }).join('');
    return '<div class="rs-section-title">🔍 Từ vừa tra gần đây</div>' +
      '<div class="rs-ctx-word-chips">' + chips + '</div>';
  },

  dictLookup: function(q) {
    if (typeof Dictionary === 'undefined') return;
    var inp = document.getElementById('dictSearch');
    if (inp) inp.value = q;
    if (Dictionary.searchDict) Dictionary.searchDict(q);
  },

  _ctxPractice: function() {
    var today = new Date().toISOString().split('T')[0];
    var due = 0;
    if (typeof AppState !== 'undefined' && AppState.srsData) {
      due = Object.values(AppState.srsData).filter(function(s) {
        return s.dueDate && s.dueDate <= today;
      }).length;
    }
    return '<div class="rs-section-title">⚡ Ôn luyện hôm nay</div>' +
      '<div class="rs-ctx-big-row">' +
        '<span class="rs-ctx-big-num">' + due + '</span>' +
        '<span class="rs-ctx-big-label">từ cần ôn</span>' +
      '</div>' +
      (due > 0 ?
        '<button class="rs-ctx-btn" onclick="Router.navigateTo(\'quiz\')">Ôn tập ngay →</button>' :
        '<div class="rs-ctx-done">✅ Hôm nay đã ôn xong!</div>');
  },

  _ctxTools: function() {
    var isMac = navigator.platform && navigator.platform.indexOf('Mac') !== -1;
    var shortcut = isMac ? '⌘K' : 'Ctrl+K';
    return '<div class="rs-section-title">🔍 Phím tắt</div>' +
      '<div class="rs-ctx-tip"><kbd class="rs-ctx-kbd">' + shortcut + '</kbd><span>Command Palette</span></div>' +
      '<div class="rs-ctx-tip"><kbd class="rs-ctx-kbd">/</kbd><span>Tìm kiếm topbar</span></div>' +
      '<div class="rs-ctx-tip"><kbd class="rs-ctx-kbd">Esc</kbd><span>Đóng popup / palette</span></div>';
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
