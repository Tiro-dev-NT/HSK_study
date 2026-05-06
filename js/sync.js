// ═══════════════════════════════════════════════════════
// SYNC.JS — Push / Pull / Merge với Supabase
// • pushAll():   local  → cloud  (upsert)
// • pullAll():   cloud  → local  (overwrite)
// • mergeAll():  local ∪ cloud   (union/max strategy)
// • manualSync(): push + pull + refresh UI
// • autoSync():  trigger khi online hoặc vừa login
// ═══════════════════════════════════════════════════════

var Sync = {

  // ── Push tất cả local data lên cloud ───────────────
  pushAll: async function() {
    if (!SB || !Auth.user) return;
    var uid = Auth.user.id;

    try {
      // 1. Progress (một row mỗi level)
      var prog = AppState.progress || {};
      var progressRows = Object.keys(prog).filter(function(lv) {
        return prog[lv] && prog[lv].length > 0;
      }).map(function(lv) {
        return { user_id: uid, level: parseInt(lv), learned_words: prog[lv], updated_at: new Date().toISOString() };
      });
      if (progressRows.length > 0) {
        var r = await SB.from('user_progress').upsert(progressRows);
        if (r.error) console.error('[SYNC push progress]', r.error);
      }

      // 2. SRS data (batch 500)
      var srs = AppState.srsData || {};
      var srsKeys = Object.keys(srs);
      if (srsKeys.length > 0) {
        var srsRows = srsKeys.map(function(hanzi) {
          var c = srs[hanzi];
          return {
            user_id: uid, hanzi: hanzi,
            interval_days: c.interval, ease: c.ease, due_date: c.dueDate,
            reps: c.reps || 0, lapses: c.lapses || 0, last_review: c.lastReview || null,
            updated_at: new Date().toISOString()
          };
        });
        for (var i = 0; i < srsRows.length; i += 500) {
          var r2 = await SB.from('user_srs').upsert(srsRows.slice(i, i + 500));
          if (r2.error) console.error('[SYNC push srs batch]', r2.error);
        }
      }

      // 3. XP + streak
      var xp     = AppState.xpData || {};
      var streak = parseInt(localStorage.getItem('hsk_streak') || '0');
      var r3 = await SB.from('user_xp').upsert({
        user_id:     uid,
        total_xp:    xp.total    || 0,
        weekly_xp:   xp.weeklyXP || 0,
        week_start:  xp.weekStart || null,
        streak_days: streak,
        last_active: localStorage.getItem('hsk_last_active') || null,
        updated_at:  new Date().toISOString()
      });
      if (r3.error) console.error('[SYNC push xp]', r3.error);

      // 4. User decks
      var rawDecks = JSON.parse(localStorage.getItem('hsk_user_decks') || '[]');
      if (rawDecks.length > 0) {
        var deckRows = rawDecks.map(function(d) {
          return {
            user_id:    uid,
            name:       d.name,
            word_ids:   (d.words || []).map(function(w) { return w.h; }),
            updated_at: new Date().toISOString()
          };
        });
        var r4 = await SB.from('user_decks').upsert(deckRows, { onConflict: 'user_id,name' });
        if (r4.error) console.error('[SYNC push decks]', r4.error);
      }

      // 5. Settings
      var studySettings = JSON.parse(localStorage.getItem('hsk_settings') || '{}');
      var r5 = await SB.from('user_settings').upsert({
        user_id: uid, study: studySettings, updated_at: new Date().toISOString()
      });
      if (r5.error) console.error('[SYNC push settings]', r5.error);

    } catch(e) {
      console.error('[SYNC pushAll error]', e);
      throw e;
    }
  },

  // ── Pull tất cả cloud data về local (overwrite) ────
  pullAll: async function() {
    if (!SB || !Auth.user) return;
    var uid = Auth.user.id;

    try {
      // 1. Progress
      var pr = await SB.from('user_progress').select('level,learned_words').eq('user_id', uid);
      if (!pr.error && pr.data && pr.data.length > 0) {
        pr.data.forEach(function(row) {
          AppState.progress[row.level] = row.learned_words || [];
        });
        AppState.saveProgress();
        progress = AppState.progress;
      }

      // 2. SRS
      var sr = await SB.from('user_srs').select('hanzi,interval_days,ease,due_date,reps,lapses,last_review').eq('user_id', uid);
      if (!sr.error && sr.data && sr.data.length > 0) {
        sr.data.forEach(function(row) {
          AppState.srsData[row.hanzi] = {
            interval: row.interval_days, ease: row.ease, dueDate: row.due_date,
            reps: row.reps || 0, lapses: row.lapses || 0, lastReview: row.last_review || null
          };
        });
        AppState.saveSRSData();
        srsData = AppState.srsData;
      }

      // 3. XP + streak
      var xr = await SB.from('user_xp').select('*').eq('user_id', uid).maybeSingle();
      if (!xr.error && xr.data) {
        var d = xr.data;
        AppState.xpData.total    = d.total_xp    || 0;
        AppState.xpData.weeklyXP = d.weekly_xp   || 0;
        AppState.xpData.weekStart = d.week_start  || '';
        AppState.saveXP();
        xpData = AppState.xpData;
        localStorage.setItem('hsk_streak', d.streak_days || 0);
        if (d.last_active) localStorage.setItem('hsk_last_active', d.last_active);
      }

      // 4. Settings
      var setr = await SB.from('user_settings').select('study').eq('user_id', uid).maybeSingle();
      if (!setr.error && setr.data && setr.data.study && Object.keys(setr.data.study).length > 0) {
        localStorage.setItem('hsk_settings', JSON.stringify(setr.data.study));
        if (typeof Settings !== 'undefined') Settings.load();
      }

      // Refresh UI
      Sync._refreshUI();

    } catch(e) {
      console.error('[SYNC pullAll error]', e);
      throw e;
    }
  },

  // ── Merge: local ∪ cloud per-field strategy ────────
  mergeAll: async function() {
    if (!SB || !Auth.user) return;
    var uid = Auth.user.id;

    try {
      // Pull cloud data first
      var pr = await SB.from('user_progress').select('level,learned_words').eq('user_id', uid);
      if (!pr.error && pr.data) {
        pr.data.forEach(function(row) {
          var lv = row.level;
          var cloudWords = row.learned_words || [];
          var localWords = AppState.progress[lv] || [];
          // Union
          var merged = Array.from(new Set(localWords.concat(cloudWords)));
          AppState.progress[lv] = merged;
        });
        AppState.saveProgress();
        progress = AppState.progress;
      }

      var sr = await SB.from('user_srs').select('*').eq('user_id', uid);
      if (!sr.error && sr.data) {
        sr.data.forEach(function(row) {
          var local = AppState.srsData[row.hanzi];
          if (!local || (row.reps || 0) > (local.reps || 0)) {
            // Cloud is more progressed
            AppState.srsData[row.hanzi] = {
              interval: row.interval_days, ease: row.ease, dueDate: row.due_date,
              reps: row.reps || 0, lapses: row.lapses || 0, lastReview: row.last_review || null
            };
          }
        });
        AppState.saveSRSData();
        srsData = AppState.srsData;
      }

      var xr = await SB.from('user_xp').select('*').eq('user_id', uid).maybeSingle();
      if (!xr.error && xr.data) {
        var d = xr.data;
        AppState.xpData.total = Math.max(AppState.xpData.total || 0, d.total_xp || 0);
        AppState.saveXP();
        xpData = AppState.xpData;
        var cloudStreak = d.streak_days || 0;
        var localStreak = parseInt(localStorage.getItem('hsk_streak') || '0');
        localStorage.setItem('hsk_streak', Math.max(cloudStreak, localStreak));
      }

      // Then push merged state back to cloud
      await Sync.pushAll();
      Sync._refreshUI();

    } catch(e) {
      console.error('[SYNC mergeAll error]', e);
      throw e;
    }
  },

  // ── Manual sync (push + pull) ──────────────────────
  manualSync: async function() {
    if (!Auth.user) { showToast('Cần đăng nhập để sync'); return; }
    if (!navigator.onLine) { showToast('⚠️ Không có mạng'); return; }
    Sync.updateBadge('syncing');
    try {
      await Sync.pushAll();
      await Sync.pullAll();
      showToast('✅ Sync xong!');
    } catch(e) {
      console.error('[SYNC]', e);
      showToast('❌ Sync lỗi: ' + (e.message || ''));
    }
    Sync.updateBadge();
  },

  // ── Auto sync khi login hoặc online ───────────────
  autoSync: function() {
    if (!Auth.user) return;
    if (navigator.onLine) {
      setTimeout(Sync.manualSync, 1000); // delay 1s để app finish loading
    }
    window.removeEventListener('online', Sync._onlineHandler);
    Sync._onlineHandler = function() {
      if (Auth.user) Sync.manualSync();
    };
    window.addEventListener('online', Sync._onlineHandler);
  },

  _onlineHandler: null,

  // ── Sync badge / status indicator ─────────────────
  updateBadge: function(state) {
    var btn = document.getElementById('syncStatusBtn');
    if (!btn) return;
    if (!Auth.user) { btn.style.display = 'none'; return; }
    btn.style.display = '';
    if (state === 'syncing') {
      btn.textContent = '⏳';
      btn.title = 'Đang sync...';
      btn.disabled = true;
    } else if (!navigator.onLine) {
      btn.textContent = '🔴';
      btn.title = 'Offline — chưa sync';
      btn.disabled = false;
    } else {
      btn.textContent = '🔄';
      btn.title = 'Sync dữ liệu';
      btn.disabled = false;
    }
  },

  // ── Refresh UI after data change ──────────────────
  _refreshUI: function() {
    if (typeof buildLevelGrid === 'function') buildLevelGrid();
    if (typeof updateStats    === 'function') updateStats();
    if (typeof Gamification   !== 'undefined') {
      Gamification.renderXPBar();
      Gamification.renderStreakCalendar();
    }
  },
};
