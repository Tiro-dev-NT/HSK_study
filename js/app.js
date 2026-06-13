// ═══════════════════════════════════════════════════════
// APP.JS — Application entry point (init only)
//
// Module load order (defined in index.html <script> tags):
//   data.js → hsk*.js → radicals.js → srs.js
//   → state.js → router.js → theme.js → gamification.js
//   → dictionary.js → quiz.js → feedback.js → settings.js
//   → decks.js → session.js → app.js (last)
//
// This file ONLY calls setup functions from those modules.
// ═══════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
  var initSteps = [
    ['applyTheme',      function() { Theme.applyTheme(AppState.theme); }],
    ['applyLang',       function() { Theme.applyLang(AppState.lang); }],
    ['loadSRS',         function() { if (typeof loadSRS === 'function') loadSRS(); }],
    ['setupRouting',    function() { Router.setup(); }],
    ['setupTheme',      function() { Theme.setupTheme(); }],
    ['setupLang',       function() { Theme.setupLang(); }],
    ['buildLevelGrid',  function() { Gamification.buildLevelGrid(); }],
    ['renderHSKMap',    function() { Gamification.renderHSKMap(); }],
    ['updateStats',     function() { Gamification.updateStats(); }],
    ['setupFeedback',   function() { Feedback.setup(); }],
    ['loadSettings',    function() { Settings.load(); }],
    ['setupGames',      function() { if (typeof Games !== 'undefined') Games.setup(); }],
    ['setupAuth',       function() { if (typeof Auth !== 'undefined') { Auth.setup(); Auth.init(); Auth.checkExtensionBridge(); } }],
    ['setupSyncWindow', function() { if (typeof SyncWindow !== 'undefined') SyncWindow.init(); }],
    ['setupRightSidebar', function() { if (typeof RightSidebar !== 'undefined') RightSidebar.init(); }],
    ['initQuests',      function() { if (typeof Quests !== 'undefined') Quests.init(); }],
    ['setupSidebar',    function() { _initSidebarCollapse(); }],
    ['setupCmdPalette', function() { if (typeof CmdPalette !== 'undefined') CmdPalette.setup(); }],
    ['setupLookupPanel', function() { if (typeof LookupPanel !== 'undefined') LookupPanel.init(); }],
    ['firstRunGuide',   function() { if (typeof AppGuide !== 'undefined') AppGuide.maybeShowFirstRun(); }],
    ['initPresence',    function() { if (typeof Presence !== 'undefined') Presence.init(); }],
  ];

  initSteps.forEach(function(step) {
    var name = step[0];
    var fn   = step[1];
    try {
      fn();
    } catch(e) {
      console.error('[INIT] ' + name + ' failed:', e);
    }
  });

  console.log('[HSK] App initialized OK — modules: State, Router, Theme, Gamification, Dictionary, Quiz, Feedback, Settings, Session');

  _prefetchVocabRest();
  _registerServiceWorker();
});

// ── Prefetch HSK 3.0 vocab L5-9 (~2.3MB) ─────────────────────────────
// Tách khỏi first-paint (index.html chỉ load L1-4). Home đã vẽ xong với
// count tĩnh (LEVEL_INFO_V3) → giờ kéo nốt L5-9 ở nền rồi re-render lưới
// cấp/bản đồ/stats để lấp mastered+due. Route vocab vẫn gate qua DataLoader
// (lưới an toàn nếu user click trước khi prefetch xong). Self-heal khác
// (lookup-panel _wordSet) tự rebuild khi vocab tăng — không cần đụng.
function _prefetchVocabRest() {
  if (typeof DataLoader === 'undefined' || !DataLoader.ensure) return;
  var kick = function() {
    DataLoader.ensure('hsk3_rest').then(function() {
      try {
        if (typeof Gamification !== 'undefined') {
          Gamification.buildLevelGrid();   // no-op nếu không ở home (guard #levelGrid)
          Gamification.renderHSKMap();      // no-op nếu không ở home (guard #hskMap)
          Gamification.updateStats();
        }
      } catch (e) { console.warn('[vocab-rest] re-render home failed:', e); }
      // Cho module khác (vd đang mở từ điển) cơ hội refresh nếu cần.
      try { document.dispatchEvent(new Event('hsk3-vocab-ready')); } catch (e) {}
    }).catch(function(e) {
      console.warn('[vocab-rest] prefetch failed (route-gate sẽ thử lại):', e && e.message);
    });
  };
  // Nhường first-paint 1 nhịp rồi prefetch ngay (KHÔNG chờ idle lâu — SRS/từ
  // điển cần sẵn sớm). rIC có timeout ngắn để mạng rảnh là chạy liền.
  if (typeof requestIdleCallback === 'function') {
    requestIdleCallback(kick, { timeout: 1500 });
  } else {
    setTimeout(kick, 200);
  }
}

// ── Service Worker (PWA bước 1) ──────────────────────────────────────
// Cache app shell + asset versioned ?v=. updateViaCache:'none' → sw.js luôn
// được revalidate (đẩy bản mới/kill-switch ăn ngay). Kill-switch thủ công:
// chạy window.__killSW() ở console, hoặc deploy sw.js "tự sát" (xem sw.js).
function _registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  // Chỉ chạy trên http(s) — file:// hay preview không hỗ trợ.
  if (location.protocol !== 'https:' && location.hostname !== 'localhost' &&
      location.hostname !== '127.0.0.1') return;
  try {
    navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' })
      .then(function(reg) {
        // Có bản SW mới chờ → kích hoạt ngay (skipWaiting có chủ đích).
        if (reg.waiting) reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        reg.addEventListener('updatefound', function() {
          var nw = reg.installing;
          if (!nw) return;
          nw.addEventListener('statechange', function() {
            if (nw.state === 'installed' && reg.waiting) {
              reg.waiting.postMessage({ type: 'SKIP_WAITING' });
            }
          });
        });
      })
      .catch(function(e) { console.warn('[SW] register failed:', e && e.message); });

    // SW mới nắm quyền → reload 1 lần để chạy đúng asset bản mới.
    // Bỏ qua lần claim của bản cài ĐẦU TIÊN (chưa có controller) để không
    // reload thừa ở lượt truy cập đầu — chỉ reload khi đây là UPDATE.
    var _hadController = !!navigator.serviceWorker.controller;
    var _refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', function() {
      if (!_hadController || _refreshing) return;
      _refreshing = true;
      location.reload();
    });
  } catch (e) { console.warn('[SW] setup error:', e && e.message); }

  // Kill-switch thủ công (gõ window.__killSW() ở console nếu kẹt cache).
  window.__killSW = function() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.getRegistrations().then(function(regs) {
      regs.forEach(function(r) { r.unregister(); });
    });
    if (window.caches && caches.keys) {
      caches.keys().then(function(keys) { keys.forEach(function(k) { caches.delete(k); }); });
    }
    console.log('[SW] killed — unregistered + caches cleared. Reload để chạy bản network thuần.');
  };
}

// ── Sidebar collapse ────────────────────────────────────────────
function _initSidebarCollapse() {
  var btn     = document.getElementById('sidebarCollapseBtn');
  var sidebar = document.getElementById('sidebar');
  if (!btn || !sidebar) return;

  var KEY = 'hsk_sidebar_collapsed';
  var isCollapsed = localStorage.getItem(KEY) === '1';
  if (isCollapsed) {
    sidebar.classList.add('collapsed');
    btn.title = 'Mở rộng';
  }

  btn.addEventListener('click', function() {
    var now = sidebar.classList.toggle('collapsed');
    localStorage.setItem(KEY, now ? '1' : '0');
    btn.title = now ? 'Mở rộng' : 'Thu gọn';
  });
}

// ── showToast — kept here as a global utility used by Settings ──
function showToast(msg) {
  var t = document.getElementById('appToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'appToast';
    t.style.cssText = [
      'position:fixed', 'bottom:90px', 'left:50%', 'transform:translateX(-50%)',
      'background:var(--surface)', 'color:var(--text)', 'border:1px solid var(--border)',
      'border-radius:12px', 'padding:10px 20px', 'font-size:14px', 'font-weight:600',
      'box-shadow:0 4px 20px rgba(0,0,0,.3)', 'z-index:9999',
      'transition:opacity .3s', 'pointer-events:none',
    ].join(';');
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(function() { t.style.opacity = '0'; }, 2200);
}

// ── shuffle — global utility used by Dictionary, Session, Quiz ──
function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}
