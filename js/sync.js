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
  // (Sync Cutoff 15/6 đã bỏ — pushAll luôn được phép cho user đã đăng nhập)
  pushAll: async function() {
    if (!SB || !Auth.user) return;
    var uid = Auth.user.id;

    try {
      // 1. Progress (một row mỗi level)
      var prog = AppState.progress || {};
      var progressRows = Object.keys(prog).filter(function(lv) {
        return prog[lv] && prog[lv].length > 0;
      }).map(function(lv) {
        return { user_id: uid, level: parseInt(lv), hsk_version: AppState.version, learned_words: prog[lv], updated_at: new Date().toISOString() };
      });
      if (progressRows.length > 0) {
        var r = await SB.from('user_progress').upsert(progressRows);
        if (r.error) throw new Error('[push progress] ' + r.error.message);
      }

      // 2. SRS data (batch 500)
      var srs = AppState.srsData || {};
      var srsKeys = Object.keys(srs);
      if (srsKeys.length > 0) {
        var srsRows = srsKeys.map(function(hanzi) {
          var c = srs[hanzi];
          return {
            user_id: uid, hanzi: hanzi, hsk_version: AppState.version,
            interval_days: c.interval, ease: c.ease, due_date: c.dueDate,
            reps: c.reps || 0, lapses: c.lapses || 0, last_review: c.lastReview || null,
            tags: c.tags || [],
            word_data: c.source === 'import' ? {
              p: c.p, v: c.v, e: c.e, level: c.level, t: c.t, ex: c.ex, source: c.source
            } : null,
            updated_at: new Date().toISOString()
          };
        });
        var srsFailed = 0, srsLastErr = null;
        for (var i = 0; i < srsRows.length; i += 500) {
          var r2 = await SB.from('user_srs').upsert(srsRows.slice(i, i + 500));
          if (r2.error) { srsFailed++; srsLastErr = r2.error; }
        }
        if (srsFailed > 0) throw new Error('[push srs] ' + srsFailed + ' batch(es) failed: ' + srsLastErr.message);
      }

      // 3. XP + streak — chỉ push nếu local có dữ liệu thực (tránh ghi đè cloud khi thiết bị mới)
      var xp     = AppState.xpData || {};
      var streak = parseInt(localStorage.getItem('hsk_streak') || '0');
      var localHasData = (xp.total || 0) > 0 || streak > 0
                         || srsKeys.length > 0 || progressRows.length > 0;
      if (localHasData) {
        var r3 = await SB.from('user_xp').upsert({
          user_id:     uid,
          total_xp:    xp.total    || 0,
          weekly_xp:   xp.weeklyXP || 0,
          week_start:  xp.weekStart || null,
          streak_days: streak,
          last_active: localStorage.getItem('hsk_last_active') || null,
          daily_xp:   xp.dailyXP || {},
          updated_at:  new Date().toISOString()
        });
        if (r3.error) throw new Error('[push xp] ' + r3.error.message);
      }

      // 4. User decks — đọc qua decks.js (nguồn key duy nhất: hsk_decks_v3)
      var rawDecks = (typeof getUserDecksForSync === 'function') ? getUserDecksForSync() : [];
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
        if (r4.error) throw new Error('[push decks] ' + r4.error.message);
      }

      // 5. Settings + quiz/game activity — chỉ push nếu local có cài đặt hoặc activity thực
      var studySettings = JSON.parse(localStorage.getItem('hsk_settings') || '{}');
      var globalData = {
        quiz_wrong:   JSON.parse(localStorage.getItem('quiz_wrong')   || '[]'),
        quiz_history: JSON.parse(localStorage.getItem('quiz_history') || '[]'),
        game_scores:  JSON.parse(localStorage.getItem('game_scores')  || '{}'),
        daily_challenge: JSON.parse(localStorage.getItem('hsk_daily_challenge') || '{}'),
        daily_challenge_streak: JSON.parse(localStorage.getItem('hsk_daily_challenge_streak') || '{}'),
        survival_high_score: JSON.parse(localStorage.getItem('hsk_survival_high_score') || '{}'),
      };
      var hasSettings = Object.keys(studySettings).length > 0;
      var hasActivity = globalData.quiz_history.length > 0 || globalData.quiz_wrong.length > 0
                        || Object.keys(globalData.game_scores).length > 0;
      if (hasSettings || hasActivity) {
        var r5 = await SB.from('user_settings').upsert({
          user_id: uid, study: studySettings, global: globalData, updated_at: new Date().toISOString()
        });
        if (r5.error) throw new Error('[push settings] ' + r5.error.message);
      }

    } catch(e) {
      console.error('[SYNC pushAll error]', e);
      throw e;
    }
  },

  // ── Lấy TẤT CẢ row SRS (paginate, bỏ cap 2000) ────
  // PostgREST mặc định cap ~1000 row/request → phải kéo theo trang.
  // Trước đây .limit(2000) truncate im lặng khi user có >2000 thẻ (mất lịch ôn khi đổi máy).
  _fetchAllSRS: async function(uid) {
    var PAGE = 1000;
    var all = [];
    for (var from = 0; ; from += PAGE) {
      var r = await SB.from('user_srs')
        .select('hanzi,interval_days,ease,due_date,reps,lapses,last_review,tags,word_data')
        .eq('user_id', uid).eq('hsk_version', AppState.version)
        .range(from, from + PAGE - 1);
      if (r.error) return { data: all, error: r.error };
      if (r.data && r.data.length) all = all.concat(r.data);
      if (!r.data || r.data.length < PAGE) break;
    }
    return { data: all, error: null };
  },

  // ── Pull tất cả cloud data về local (overwrite) ────
  pullAll: async function() {
    if (!SB || !Auth.user) return;
    var uid = Auth.user.id;

    try {
      // 1. Progress
      var pr = await SB.from('user_progress').select('level,learned_words').eq('user_id', uid).eq('hsk_version', AppState.version);
      if (!pr.error && pr.data && pr.data.length > 0) {
        pr.data.forEach(function(row) {
          AppState.progress[row.level] = row.learned_words || [];
        });
        AppState.saveProgress();
        progress = AppState.progress;
      }

      // 2. SRS — paginate full (bỏ cap 2000)
      var sr = await Sync._fetchAllSRS(uid);
      if (!sr.error && sr.data && sr.data.length > 0) {
        sr.data.forEach(function(row) {
          var entry = {
            interval: row.interval_days, ease: row.ease, dueDate: row.due_date,
            reps: row.reps || 0, lapses: row.lapses || 0, lastReview: row.last_review || null,
            tags: row.tags || []
          };
          if (row.word_data) Object.assign(entry, row.word_data);
          AppState.srsData[row.hanzi] = entry;
        });
        AppState.saveSRSData();
        srsData = AppState.srsData;
      }

      // 3. XP + streak — chỉ ghi đè nếu cloud có dữ liệu thực (tránh reset về 0)
      var xr = await SB.from('user_xp').select('*').eq('user_id', uid).maybeSingle();
      if (!xr.error && xr.data && ((xr.data.total_xp || 0) > 0 || (xr.data.streak_days || 0) > 0)) {
        var d = xr.data;
        AppState.xpData.total    = d.total_xp    || 0;
        AppState.xpData.weeklyXP = d.weekly_xp   || 0;
        AppState.xpData.weekStart = d.week_start  || '';
        if (d.daily_xp) AppState.xpData.dailyXP = d.daily_xp;
        AppState.saveXP();
        xpData = AppState.xpData;
        localStorage.setItem('hsk_streak', d.streak_days || 0);
        if (d.last_active) localStorage.setItem('hsk_last_active', d.last_active);
      }

      // 4. User decks — merge vào decks.js (giữ system decks + deck local chưa push)
      var dr = await SB.from('user_decks').select('name,word_ids').eq('user_id', uid).limit(200);
      if (!dr.error && dr.data && dr.data.length > 0) {
        var pulledDecks = dr.data.map(function(row) {
          return { name: row.name, words: (row.word_ids || []).map(function(h) { return { h: h }; }) };
        });
        if (typeof applyUserDecksFromSync === 'function') applyUserDecksFromSync(pulledDecks, 'merge');
      }

      // 5. Settings + quiz/game activity
      var setr = await SB.from('user_settings').select('study,global').eq('user_id', uid).maybeSingle();
      if (!setr.error && setr.data) {
        if (setr.data.study && Object.keys(setr.data.study).length > 0) {
          localStorage.setItem('hsk_settings', JSON.stringify(setr.data.study));
          if (typeof Settings !== 'undefined') Settings.load();
        }
        var g = setr.data.global || {};
        if (g.quiz_wrong && g.quiz_wrong.length > 0)
          localStorage.setItem('quiz_wrong', JSON.stringify(g.quiz_wrong));
        if (g.quiz_history && g.quiz_history.length > 0)
          localStorage.setItem('quiz_history', JSON.stringify(g.quiz_history));
        if (g.game_scores)
          localStorage.setItem('game_scores', JSON.stringify(g.game_scores));
        // B5g: Daily Challenge + Survival
        if (g.daily_challenge && Object.keys(g.daily_challenge).length > 0) {
          localStorage.setItem('hsk_daily_challenge', JSON.stringify(g.daily_challenge));
          AppState.dailyChallenge = g.daily_challenge;
        }
        if (g.daily_challenge_streak && g.daily_challenge_streak.current !== undefined) {
          localStorage.setItem('hsk_daily_challenge_streak', JSON.stringify(g.daily_challenge_streak));
          AppState.dailyChallengeStreak = g.daily_challenge_streak;
        }
        if (g.survival_high_score && (g.survival_high_score.score || 0) > (AppState.survivalHighScore.score || 0)) {
          localStorage.setItem('hsk_survival_high_score', JSON.stringify(g.survival_high_score));
          AppState.survivalHighScore = g.survival_high_score;
        }
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
      var pr = await SB.from('user_progress').select('level,learned_words').eq('user_id', uid).eq('hsk_version', AppState.version);
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

      var sr = await Sync._fetchAllSRS(uid);
      if (!sr.error && sr.data) {
        sr.data.forEach(function(row) {
          var local = AppState.srsData[row.hanzi];
          var localTags = (local && local.tags) ? local.tags : [];
          var cloudTags = row.tags || [];
          // union tags from both sides
          var mergedTags = localTags.slice();
          cloudTags.forEach(function(t) {
            if (mergedTags.indexOf(t) < 0) mergedTags.push(t);
          });

          if (!local || (row.reps || 0) > (local.reps || 0)) {
            // Cloud is more progressed
            var entry = {
              interval: row.interval_days, ease: row.ease, dueDate: row.due_date,
              reps: row.reps || 0, lapses: row.lapses || 0, lastReview: row.last_review || null,
              tags: mergedTags
            };
            // restore word_data if present (imported vocab metadata)
            if (row.word_data) Object.assign(entry, row.word_data);
            AppState.srsData[row.hanzi] = entry;
          } else if (local) {
            // Local thắng nhưng vẫn union tags
            local.tags = mergedTags;
            // if local missing word_data fields but cloud has them, restore
            if (row.word_data && !local.source) Object.assign(local, row.word_data);
          }
        });
        AppState.saveSRSData();
        srsData = AppState.srsData;
      }

      var xr = await SB.from('user_xp').select('*').eq('user_id', uid).maybeSingle();
      if (!xr.error && xr.data) {
        var d = xr.data;
        AppState.xpData.total = Math.max(AppState.xpData.total || 0, d.total_xp || 0);
        // merge dailyXP: take max per day
        if (d.daily_xp) {
          var localDaily = AppState.xpData.dailyXP || {};
          var cloudDaily = d.daily_xp || {};
          Object.keys(cloudDaily).forEach(function(day) {
            localDaily[day] = Math.max(localDaily[day] || 0, cloudDaily[day] || 0);
          });
          AppState.xpData.dailyXP = localDaily;
        }
        AppState.saveXP();
        xpData = AppState.xpData;
        var cloudStreak = d.streak_days || 0;
        var localStreak = parseInt(localStorage.getItem('hsk_streak') || '0');
        localStorage.setItem('hsk_streak', Math.max(cloudStreak, localStreak));
      }

      // Decks: merge by name (union words) — qua decks.js, giữ deck local chưa push
      var dr2 = await SB.from('user_decks').select('name,word_ids').eq('user_id', uid).limit(200);
      if (!dr2.error && dr2.data && dr2.data.length > 0) {
        var pulledDecks2 = dr2.data.map(function(row) {
          return { name: row.name, words: (row.word_ids || []).map(function(h) { return { h: h }; }) };
        });
        if (typeof applyUserDecksFromSync === 'function') applyUserDecksFromSync(pulledDecks2, 'merge');
      }

      // Quiz + game data: merge from cloud settings
      var setr2 = await SB.from('user_settings').select('global').eq('user_id', uid).maybeSingle();
      if (!setr2.error && setr2.data && setr2.data.global) {
        var g = setr2.data.global;

        // quiz_wrong: union set, cap 200
        var localWrong = JSON.parse(localStorage.getItem('quiz_wrong') || '[]');
        var cloudWrong = g.quiz_wrong || [];
        var wrongSet = {};
        localWrong.concat(cloudWrong).forEach(function(h) { wrongSet[h] = true; });
        localStorage.setItem('quiz_wrong', JSON.stringify(Object.keys(wrongSet).slice(0, 200)));

        // quiz_history: merge by date ISO string, dedup, latest 50
        var localHist = JSON.parse(localStorage.getItem('quiz_history') || '[]');
        var cloudHist = g.quiz_history || [];
        var histMap = {};
        localHist.concat(cloudHist).forEach(function(s) { histMap[s.date] = s; });
        var mergedHist = Object.values(histMap).sort(function(a, b) { return b.date.localeCompare(a.date); }).slice(0, 50);
        localStorage.setItem('quiz_history', JSON.stringify(mergedHist));

        // game_scores: speed_best=max, memory_best=min, wordle_wins=max
        var localGS = JSON.parse(localStorage.getItem('game_scores') || '{}');
        var cloudGS = g.game_scores || {};
        var mergedGS = {
          speed_best:  Math.max(localGS.speed_best  || 0, cloudGS.speed_best  || 0),
          memory_best: Math.min(localGS.memory_best || 9999, cloudGS.memory_best || 9999),
          wordle_wins: Math.max(localGS.wordle_wins || 0, cloudGS.wordle_wins || 0),
        };
        if (mergedGS.memory_best === 9999) delete mergedGS.memory_best;

        // game scores: C5-C7 premium games
        // bossBestLevel: union cleared levels
        var localBoss = localGS.bossBestLevel || {};
        var cloudBoss = cloudGS.bossBestLevel || {};
        var mergedBoss = {};
        Object.keys(localBoss).forEach(function(k) { mergedBoss[k] = true; });
        Object.keys(cloudBoss).forEach(function(k) { mergedBoss[k] = true; });
        if (Object.keys(mergedBoss).length > 0) mergedGS.bossBestLevel = mergedBoss;

        // racingBest: min (lower rank = better)
        var localRace = localGS.racingBest || 99;
        var cloudRace = cloudGS.racingBest || 99;
        var bestRace = Math.min(localRace, cloudRace);
        if (bestRace < 99) mergedGS.racingBest = bestRace;

        // sentenceBest: max
        mergedGS.sentenceBest = Math.max(localGS.sentenceBest || 0, cloudGS.sentenceBest || 0);
        if (mergedGS.sentenceBest === 0) delete mergedGS.sentenceBest;

        // handwritingBest: max
        mergedGS.handwritingBest = Math.max(localGS.handwritingBest || 0, cloudGS.handwritingBest || 0);
        if (mergedGS.handwritingBest === 0) delete mergedGS.handwritingBest;

        localStorage.setItem('game_scores', JSON.stringify(mergedGS));
      }

      // Refresh UI first (data already saved to localStorage above)
      Sync._refreshUI();

      // Then push merged state to cloud — wrap separately so a push failure
      // does NOT undo the already-saved merged data or skip the UI refresh.
      try {
        await Sync.pushAll();
      } catch(pushErr) {
        console.warn('[SYNC mergeAll] push failed after merge — local data safe:', pushErr.message);
        // Surface to caller as a soft warning, not a hard throw
      }

    } catch(e) {
      console.error('[SYNC mergeAll error]', e);
      throw e;
    }
  },

  // ── Dangerous push detection ──────────────────────
  _isDangerousPush: async function() {
    var xp = AppState.xpData || {};
    var srs = AppState.srsData || {};
    var prog = AppState.progress || {};
    var localEmpty = (xp.total || 0) === 0
      && Object.keys(srs).length === 0
      && Object.keys(prog).every(function(lv) { return !prog[lv] || prog[lv].length === 0; });
    if (!localEmpty) return false;
    // Check cloud
    try {
      var res = await SB.from('user_xp').select('total_xp').eq('user_id', Auth.user.id).maybeSingle();
      if (!res.error && res.data && (res.data.total_xp || 0) > 0) return true;
    } catch(e) { console.warn('[SYNC _isDangerousPush]', e); }
    return false;
  },

  // ── Manual sync (push + pull) ──────────────────────
  manualSync: async function() {
    if (!Auth.user) { showToast('Cần đăng nhập để sync'); return; }
    if (!navigator.onLine) { showToast('⚠️ Không có mạng'); return; }
    Sync.updateBadge('syncing');
    try {
      if (await Sync._isDangerousPush()) {
        console.warn('[SYNC] Local rỗng nhưng cloud có data → chỉ pull, không push');
        await Sync.pullAll();
      } else {
        await Sync.pushAll();
        await Sync.pullAll();
      }
      showToast('✅ Sync xong!');
    } catch(e) {
      console.error('[SYNC]', e);
      showToast('❌ Sync lỗi: ' + (e.message || ''));
    }
    Sync.updateBadge();
  },

  // ── Force Push / Force Pull ────────────────────────
  forcePush: async function() {
    if (!Auth.user) { showToast('Cần đăng nhập'); return; }
    if (!confirm('⚠️ Đẩy toàn bộ dữ liệu LOCAL lên cloud?\nDữ liệu cloud sẽ bị ghi đè!')) return;
    Sync.updateBadge('syncing');
    try {
      await Sync.pushAll();
      showToast('✅ Đã đẩy local lên cloud!');
    } catch(e) {
      console.error('[SYNC forcePush]', e);
      showToast('❌ Lỗi: ' + (e.message || ''));
    }
    Sync.updateBadge();
  },

  forcePull: async function() {
    if (!Auth.user) { showToast('Cần đăng nhập'); return; }
    if (!confirm('⚠️ Tải toàn bộ dữ liệu từ CLOUD về?\nDữ liệu local sẽ bị ghi đè!')) return;
    Sync.updateBadge('syncing');
    try {
      await Sync.pullAll();
      showToast('✅ Đã tải cloud về! Đang reload...');
      setTimeout(function() { location.reload(); }, 1000);
    } catch(e) {
      console.error('[SYNC forcePull]', e);
      showToast('❌ Lỗi: ' + (e.message || ''));
    }
    Sync.updateBadge();
  },

  // ── Auto sync khi login hoặc online ───────────────
  autoSync: function() {
    if (!Auth.user) return;
    if (navigator.onLine) {
      setTimeout(async function() {
        Sync.updateBadge('syncing');
        try { await Sync.mergeAll(); } catch(e) { console.error('[SYNC autoSync]', e); }
        Sync.updateBadge();
      }, 1000);
    }
    window.removeEventListener('online', Sync._onlineHandler);
    Sync._onlineHandler = async function() {
      if (!Auth.user) return;
      Sync.updateBadge('syncing');
      try { await Sync.mergeAll(); } catch(e) { console.error('[SYNC autoSync online]', e); }
      Sync.updateBadge();
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
