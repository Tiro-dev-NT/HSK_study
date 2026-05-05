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
    ['applyTheme',           function() { Theme.applyTheme(AppState.theme); }],
    ['applyLang',            function() { Theme.applyLang(AppState.lang); }],
    ['loadSRS',              function() { if (typeof loadSRS === 'function') loadSRS(); }],
    ['setupRouting',         function() { Router.setup(); }],
    ['setupDictionary',      function() { Dictionary.setup(); }],
    ['setupHSKVersion',      function() { Dictionary.setupHSKVersion(); }],
    ['buildRadicalBrowser',  function() { Dictionary.buildRadicalBrowser(); }],
    ['setupDecks',           function() { if (typeof setupDecks === 'function') setupDecks(); }],
    ['setupSessionHandlers', function() { Session.setup(); }],
    ['setupQuiz',            function() { Quiz.setup(); }],
    ['setupTheme',           function() { Theme.setupTheme(); }],
    ['setupLang',            function() { Theme.setupLang(); }],
    ['buildLevelGrid',       function() { Gamification.buildLevelGrid(); }],
    ['updateStats',          function() { Gamification.updateStats(); }],
    ['setupFeedback',        function() { Feedback.setup(); }],
    ['loadSettings',         function() { Settings.load(); }],
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
});

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
