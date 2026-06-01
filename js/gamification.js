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
    if (typeof Leaderboard !== 'undefined' && Leaderboard.recordActivity) Leaderboard.recordActivity();
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
    const broke     = lastActive !== yesterday && streak > 1;
    const newStreak = lastActive === yesterday ? streak + 1 : 1;
    localStorage.setItem('hsk_streak', newStreak);
    localStorage.setItem('hsk_last_active', today);
    Gamification._recordActiveDay();
    // Milestone XP rewards (existing)
    if (newStreak === 7 || newStreak === 30) Gamification.addXP(100);
    // Milestone TOKEN rewards (added 2026-05-23, see TOKEN_SINK_ROADMAP.md)
    if (typeof Quests !== 'undefined' && typeof Quests.addToken === 'function') {
      if (newStreak === 7)   Quests.addToken(100,  'streak_7');
      if (newStreak === 30)  Quests.addToken(300,  'streak_30');
      if (newStreak === 60)  Quests.addToken(500,  'streak_60');
      if (newStreak === 100) Quests.addToken(800,  'streak_100');
      if (newStreak === 365) Quests.addToken(2000, 'streak_365');
    }
    Gamification.updateStats();
    // Streak insurance modal — only if streak actually broke
    if (broke) Gamification._showStreakInsurance(streak);
  },

  _showStreakInsurance: function(lostStreak) {
    if (typeof Quests === 'undefined') return;
    var bal = Quests.getBalance();
    if (bal < 50) return; // can't afford, no point showing

    var monthKey = new Date().toISOString().slice(0, 7); // 'YYYY-MM'
    var used = JSON.parse(localStorage.getItem('hsk_streak_insurance_used') || '{"month":"","count":0}');
    if (used.month !== monthKey) used = { month: monthKey, count: 0 };
    if (used.count >= 2) return; // max 2/tháng

    // Build modal
    var overlay = document.createElement('div');
    overlay.id = 'streakInsuranceOverlay';
    overlay.style.cssText =
      'position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:10001;' +
      'display:flex;align-items:center;justify-content:center;padding:20px';
    overlay.innerHTML =
      '<div style="background:var(--surface);border-radius:16px;padding:28px 24px;max-width:360px;width:100%;text-align:center;box-shadow:0 8px 40px rgba(0,0,0,.3)">' +
        '<div style="font-size:40px;margin-bottom:12px">😢</div>' +
        '<h3 style="margin:0 0 8px;font-size:18px;font-weight:700;color:var(--text)">Streak ' + lostStreak + ' ngày vừa mất!</h3>' +
        '<p style="margin:0 0 20px;font-size:13px;color:var(--text2);line-height:1.5">' +
          'Dùng bảo hiểm streak để khôi phục lại chuỗi ngày của bạn.<br>' +
          '<strong style="color:var(--hoang-kim)">50 🪙</strong> · còn ' + (2 - used.count) + ' lần trong tháng này' +
        '</p>' +
        '<div style="display:flex;gap:12px;justify-content:center">' +
          '<button id="streakInsuranceUse" style="flex:1;padding:10px 0;background:var(--chau-hong);color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;font-family:var(--font-ui)">' +
            'Dùng bảo hiểm (50🪙)' +
          '</button>' +
          '<button id="streakInsuranceSkip" style="flex:1;padding:10px 0;background:var(--surface2);color:var(--text2);border:1px solid var(--border);border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;font-family:var(--font-ui)">' +
            'Bỏ qua' +
          '</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);

    document.getElementById('streakInsuranceUse').addEventListener('click', function() {
      if (!Quests.spendToken(50, 'streak_insurance')) return;
      // Restore streak
      localStorage.setItem('hsk_streak', lostStreak);
      // Update usage counter
      used.count++;
      localStorage.setItem('hsk_streak_insurance_used', JSON.stringify(used));
      overlay.remove();
      Gamification.updateStats();
      // Quick thank-you toast
      var t = document.createElement('div');
      t.textContent = 'Streak ' + lostStreak + ' ngày đã được khôi phục! 🔥';
      t.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#10B981;color:#fff;' +
        'padding:10px 20px;border-radius:100px;font-size:13px;font-weight:600;z-index:10002;font-family:var(--font-ui)';
      document.body.appendChild(t);
      setTimeout(function() { t.remove(); }, 3000);
    });

    document.getElementById('streakInsuranceSkip').addEventListener('click', function() {
      overlay.remove();
    });
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
    var tbStreak = document.getElementById('topbarStreakBadge');
    if (tbStreak) tbStreak.textContent = '🔥 ' + Gamification.getStreak();
    if (dEl) {
      const today = new Date().toISOString().split('T')[0];
      const due   = Object.values(AppState.srsData).filter(function(s) {
        return s.dueDate && s.dueDate <= today;
      }).length;
      dEl.textContent = due;
      // Sync due review card on home page
      var dEl2 = document.getElementById('statDue2');
      if (dEl2) dEl2.textContent = due;
    }

    // Word Journey widget
    if (typeof getJourneyStats === 'function') {
      const stages = getJourneyStats();
      const total = stages.reduce(function(a,b){return a+b;}, 0);
      const stagesEl = document.getElementById('journeyStages');
      const barEl = document.getElementById('journeyBar');
      if (stagesEl && total > 0) {
        const icons = ['🌱','👀','🧠','💪','🔥'];
        stagesEl.innerHTML = stages.map(function(count, i) {
          return '<span title="' + ['Mới gặp','Đang học','Đang nhớ','Gần thuộc','Thuộc rồi'][i] + ': ' + count + ' từ">' + icons[i] + ' ' + count + '</span>';
        }).join('');
      }
      if (barEl && total > 0) {
        const colors = ['#6B7280','#3B82F6','#8B5CF6','#F59E0B','#10B981'];
        barEl.innerHTML = stages.map(function(count, i) {
          const pct = (count / total * 100).toFixed(1);
          return '<div style="width:' + pct + '%;background:' + colors[i] + ';height:100%"></div>';
        }).join('');
      }
    }

    Gamification.renderXPBar();
    Gamification.renderStreakCalendar();
    Gamification._updateContinueCard();
    Gamification._updateGreeting();
    Gamification.renderHSKMap();
    if (typeof RightSidebar !== 'undefined') RightSidebar.render();
  },

  // ── Level Grid (Home page) ─────────────────────────
  buildLevelGrid: function() {
    const grid = document.getElementById('levelGrid');
    if (!grid) return;
    grid.innerHTML = '';
    var count = activeLevelCount();
    var levelInfo = activeLevelInfo();
    var isV3  = typeof AppState !== 'undefined' && AppState.version === 3;
    var isPro = typeof Monetization !== 'undefined' ? Monetization.isProSync() : false;
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

      // Pro gate: HSK 3.0 L4-L9 locked for free users
      var isGated = isV3 && lv >= PRO_LEVEL_MIN && !isPro;

      var isEN = typeof AppState !== 'undefined' && AppState.lang === 'en';
      var lblNew      = isEN ? 'New' : 'Chưa học';
      var lblLearning = isEN ? 'Learning' : 'Đang học';
      var lblDue      = isEN ? 'Due' : 'Cần ôn';
      var lblMastered = isEN ? 'Mastered' : 'Đã thuộc';
      var lblWords    = isEN ? 'new words' : 'từ mới';
      var lblPreview  = isEN ? 'Preview' : 'Xem thử';

      var badgeHtml = isGated
        ? '<div class="level-badge">' + info.label + ' <span style="font-size:0.75em">🔒</span></div>'
        : '<div class="level-badge">' + info.label + '</div>';

      var countHtml = isGated
        ? '<div class="level-count" style="color:#F59E0B">' + lblPreview + ' ' + PREVIEW_WORD_COUNT + '/' + displayCount + ' ' + lblWords + '</div>'
        : '<div class="level-count">' + displayCount + ' ' + lblWords + (!realCount ? ' (coming soon)' : '') + '</div>';

      card.innerHTML =
        badgeHtml +
        countHtml +
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

    document.getElementById('wotdHanzi').textContent = word.h;
    document.getElementById('wotdPinyin').textContent = word.p;
    var isEN = AppState.lang === 'en';
    document.getElementById('wotdMeaning').textContent = isEN ? word.e : word.v;
    // HSK level badge
    var badgesEl = document.getElementById('wotdBadges');
    if (badgesEl) {
      var lvLabel = word.level ? 'HSK ' + word.level : '';
      badgesEl.innerHTML = lvLabel
        ? '<span class="wotd-hsk-badge">' + lvLabel + '</span>'
        : '';
    }
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
          delayBetweenStrokes: 300, autoAnimate: true,
          charDataLoader: function(char, onComplete) {
            fetch('https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/' + encodeURIComponent(char) + '.json')
              .then(function(res) { return res.json(); })
              .then(onComplete);
          }
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
  },

  // ── HSK Map (visual progress path on home page) ───────
  renderHSKMap: function() {
    var map = document.getElementById('hskMap');
    if (!map) return;
    var isV3 = typeof AppState !== 'undefined' && AppState.version === 3;
    var count = activeLevelCount();
    var levelInfo = activeLevelInfo();

    // Find current level = first level not yet 80% mastered
    var currentLevel = count;
    for (var lv = 1; lv <= count; lv++) {
      var wds = getNewWordsForLevel(lv);
      var st  = getLevelStats(lv);
      var p   = wds.length ? Math.round(st.mastered / wds.length * 100) : 0;
      if (p < 80) { currentLevel = lv; break; }
    }

    var titleEl = document.getElementById('hskMapTitle');
    var linkEl  = document.getElementById('hskMapLink');
    if (titleEl) titleEl.textContent = isV3 ? 'Bản đồ HSK 3.0' : 'Bản đồ HSK 2.0';
    if (linkEl)  linkEl.textContent  = 'Bạn ở HSK ' + currentLevel + ' →';

    // Build HTML — each step = bubble + connector + label
    var html = '';
    for (var lv = 1; lv <= count; lv++) {
      var wds    = getNewWordsForLevel(lv);
      var st     = getLevelStats(lv);
      var pct    = wds.length ? Math.round(st.mastered / wds.length * 100) : 0;
      var isDone    = pct >= 80;
      var isCurrent = lv === currentLevel;
      var stepCls   = 'hsk-map-step' +
        (isDone ? ' hsk-map-step--done' : isCurrent ? ' hsk-map-step--current' : '');
      var info  = levelInfo[lv] || {};
      var lbl   = isV3 ? 'L' + lv : (info.label || ('L' + lv));
      var lvStr = lv;

      html += '<div class="' + stepCls + '" data-level="' + lv + '" title="' +
        (info.label || 'HSK ' + lv) + ' — ' + pct + '%">' +
        '<div class="hsk-map-top">' +
          '<div class="hsk-map-bubble">' + (isDone ? '✓' : lvStr) + '</div>' +
          (lv < count ? '<div class="hsk-map-line' + (isDone ? ' done' : '') + '"></div>' : '') +
        '</div>' +
        '<div class="hsk-map-step-lbl">' + lbl + '</div>' +
      '</div>';
    }
    map.innerHTML = html;

    // Event delegation for level click
    map.onclick = function(e) {
      var step = e.target.closest('.hsk-map-step');
      if (!step) return;
      var lvNum = parseInt(step.dataset.level);
      Router.navigateTo('learn');
      setTimeout(function() {
        document.dispatchEvent(new CustomEvent('hsk:openDeck',
          { detail: { deckId: 'sys_hsk' + lvNum } }));
      }, 50);
    };
  },

  // ── Continue card (home page big red card) ────────────
  _updateContinueCard: function() {
    var titleEl = document.getElementById('hccTitle');
    var fillEl  = document.getElementById('hccBarFill');
    var pctEl   = document.getElementById('hccPct');
    if (!titleEl) return;
    var count = activeLevelCount();
    var levelInfo = activeLevelInfo();
    var currentLevel = count;
    for (var lv = 1; lv <= count; lv++) {
      var wds = getNewWordsForLevel(lv);
      var st  = getLevelStats(lv);
      var p   = wds.length ? Math.round(st.mastered / wds.length * 100) : 0;
      if (p < 80) { currentLevel = lv; break; }
    }
    var info    = levelInfo[currentLevel] || {};
    var wds     = getNewWordsForLevel(currentLevel);
    var st      = getLevelStats(currentLevel);
    var total   = wds.length || (info.count || 0);
    var mastered = st.mastered || 0;
    var pct     = total ? Math.round(mastered / total * 100) : 0;
    var isV3    = typeof AppState !== 'undefined' && AppState.version === 3;
    var prefix  = isV3 ? 'HSK 3.0 · L' : 'HSK ';
    var suffix  = info.label ? ' — ' + info.label : '';
    titleEl.textContent = prefix + currentLevel + suffix;
    if (fillEl) fillEl.style.width = pct + '%';
    if (pctEl)  pctEl.textContent  = mastered + '/' + total + ' · ' + pct + '%';
  },

  // ── Greeting (personalised with name + time of day) ───
  _updateGreeting: function() {
    var el  = document.getElementById('greetingText');
    if (!el) return;
    var hour = new Date().getHours();
    var time = hour < 5 ? 'buổi đêm' : hour < 12 ? 'buổi sáng' : hour < 18 ? 'buổi chiều' : 'buổi tối';
    var name = '';
    try {
      var cache = JSON.parse(localStorage.getItem('hsk_user_cache') || '{}');
      var meta  = (cache.user_metadata) || {};
      var raw   = meta.name || meta.full_name || cache.email || '';
      name = raw.split('@')[0].split(' ')[0];
    } catch(e) {}
    el.textContent = 'Chào ' + time + (name ? ', ' + name : '') + '! 👋';

    // Avatar initial in greeting row + topbar button
    var initial = name ? name.charAt(0).toUpperCase() : '学';
    var avatarEl   = document.getElementById('greetingAvatar');
    var topbarBtn  = document.getElementById('topbarUserBtn');
    if (avatarEl)  avatarEl.textContent  = initial;
    if (topbarBtn) topbarBtn.textContent = initial;
  }
};

// ── Backward-compat global functions ──────────────────
function renderHSKMap()           { Gamification.renderHSKMap(); }
function addXP(amount)            { Gamification.addXP(amount); }
function checkAndUpdateStreak()   { Gamification.checkAndUpdateStreak(); }
function updateStats()            { Gamification.updateStats(); }
function buildLevelGrid()         { Gamification.buildLevelGrid(); }
function renderXPBar()            { Gamification.renderXPBar(); }
function renderStreakCalendar()   { Gamification.renderStreakCalendar(); }
function getStreak()              { return Gamification.getStreak(); }
function recordActiveDay()        { Gamification._recordActiveDay(); }
