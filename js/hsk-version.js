// ═══════════════════════════════════════════════════════
// HSK-VERSION.JS — HSK 3.0 Dual-Mode Switch
// • Lazy-loads v3 data scripts on demand
// • Switches AppState.version + reloads namespaced progress/srs
// • Rebuilds UI after switch (level grid, decks, dictionary)
// ═══════════════════════════════════════════════════════

var HSKVersion = (function() {

  var _v3Loaded = false;
  var _v3Loading = false;
  var _pendingCallbacks = [];

  // Scripts loaded for all 9 levels (L1-L9 data)
  var V3_SCRIPTS = [
    'js/data/v3/hsk3_data.js',
    'js/data/v3/hsk3_lvl1.js',
    'js/data/v3/hsk3_lvl2.js',
    'js/data/v3/hsk3_lvl3.js',
    'js/data/v3/hsk3_lvl4.js',
    'js/data/v3/hsk3_lvl5.js',
    'js/data/v3/hsk3_lvl6.js',
    'js/data/v3/hsk3_lvl7.js',
    'js/data/v3/hsk3_lvl8.js',
    'js/data/v3/hsk3_lvl9.js',
  ];

  function _loadV3Data(callback) {
    if (_v3Loaded) { callback(); return; }
    if (_v3Loading) { _pendingCallbacks.push(callback); return; }

    _v3Loading = true;
    _pendingCallbacks.push(callback);

    var loaded = 0;
    var total = V3_SCRIPTS.length;

    V3_SCRIPTS.forEach(function(src) {
      var existing = document.querySelector('script[src^="' + src + '"]');
      if (existing) { loaded++; if (loaded === total) _onAllLoaded(); return; }

      var s = document.createElement('script');
      s.src = src + '?v=1.1';
      s.onload = function() {
        loaded++;
        if (loaded === total) _onAllLoaded();
      };
      s.onerror = function() {
        console.error('[HSKVersion] Failed to load', src);
        loaded++;
        if (loaded === total) _onAllLoaded();
      };
      document.head.appendChild(s);
    });
  }

  function _onAllLoaded() {
    _v3Loaded = true;
    _v3Loading = false;
    var cbs = _pendingCallbacks.slice();
    _pendingCallbacks = [];
    cbs.forEach(function(cb) { cb(); });
  }

  // ── Core switch ─────────────────────────────────────
  function switchTo(ver) {
    if (ver === AppState.version) return;

    if (ver === 3) {
      var btn = document.getElementById('ver30');
      if (btn) { btn.textContent = 'HSK 3.0 ⏳'; btn.disabled = true; }

      _loadV3Data(function() {
        _applySwitch(3);
        if (btn) { btn.textContent = 'HSK 3.0'; btn.disabled = false; }
      });
    } else {
      _applySwitch(2);
    }
  }

  function _applySwitch(ver) {
    // 1. Persist version
    AppState.version = ver;
    Storage.set('hsk_version', ver);

    // 2. Reload namespaced progress + srs via Storage API
    var progKey = ver === 3 ? 'hsk_progress_v3' : 'hsk_progress';
    var srsKey  = ver === 3 ? 'hsk_srs_v3'      : 'hsk_srs';
    AppState.progress = Storage.getOr(progKey, {});
    AppState.srsData  = Storage.getOr(srsKey,  {});

    // 3. Sync compat aliases used by older modules
    if (typeof progress !== 'undefined') progress = AppState.progress;
    if (typeof srsData  !== 'undefined') srsData  = AppState.srsData;

    // 4. Update toggle button states
    var btn20 = document.getElementById('ver20');
    var btn30 = document.getElementById('ver30');
    if (btn20) btn20.classList.toggle('active', ver === 2);
    if (btn30) btn30.classList.toggle('active', ver === 3);

    // 5. Rebuild level grid + stats
    if (typeof Gamification !== 'undefined' && Gamification.buildLevelGrid) {
      Gamification.buildLevelGrid();
    }
    if (typeof Gamification !== 'undefined' && Gamification.updateStats) {
      Gamification.updateStats();
    }
    if (typeof Gamification !== 'undefined' && Gamification.renderAnalytics) {
      Gamification.renderAnalytics();
    }

    // 6. Rebuild system decks for new version
    if (typeof loadDecks === 'function') {
      loadDecks();
    }

    // 7. Refresh dictionary if open
    if (typeof Dictionary !== 'undefined' && Dictionary.searchDict) {
      var inp = document.getElementById('dictSearch');
      if (inp) Dictionary.searchDict(inp.value.trim());
    }

    // 8. Toast notification
    if (typeof showToast === 'function') {
      showToast(ver === 3 ? '✅ Đã chuyển sang HSK 3.0 (2021)' : '✅ Đã chuyển sang HSK 2.0');
    }

    document.dispatchEvent(new CustomEvent('hsk:versionChanged', { detail: { version: ver } }));
  }

  // ── Init: wire buttons ──────────────────────────────
  function init() {
    var btn20 = document.getElementById('ver20');
    var btn30 = document.getElementById('ver30');

    if (btn20) {
      btn20.classList.toggle('active', AppState.version === 2);
      btn20.addEventListener('click', function() { switchTo(2); });
    }
    if (btn30) {
      btn30.classList.toggle('active', AppState.version === 3);
      btn30.addEventListener('click', function() { switchTo(3); });
    }

    // If user returns with v3 saved, auto-load data silently
    if (AppState.version === 3) {
      _loadV3Data(function() {
        // Rebuild level grid (home page)
        if (typeof Gamification !== 'undefined' && Gamification.buildLevelGrid) {
          Gamification.buildLevelGrid();
        }
        // Rebuild deck browser (vault/learn page) — system decks now have correct word counts
        if (typeof loadDecks === 'function')         loadDecks();
        if (typeof renderDeckBrowser === 'function') renderDeckBrowser();
        // Refresh dictionary if it's open
        if (typeof Dictionary !== 'undefined' && Dictionary.searchDict) {
          var inp = document.getElementById('dictSearch');
          if (inp) Dictionary.searchDict(inp.value.trim());
        }
      });
    }
  }

  return { init: init, switchTo: switchTo, isV3Loaded: function() { return _v3Loaded; }, preloadV3: _loadV3Data };
}());
