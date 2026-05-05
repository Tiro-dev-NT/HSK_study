// ═══════════════════════════════════════════════════════
// THEME.JS — Theme & language toggles
// • Owns: applyTheme(), toggleTheme(), applyLang(), toggleLang()
// • Reads AppState.theme / AppState.lang
// • Writes to DOM + localStorage via AppState
// ═══════════════════════════════════════════════════════

var Theme = {
  setup: function() {
    Theme.setupTheme();
    Theme.setupLang();
  },

  setupTheme: function() {
    document.getElementById('themeToggle')?.addEventListener('click', Theme.toggleTheme);
    document.getElementById('themeToggleMobile')?.addEventListener('click', Theme.toggleTheme);
  },

  setupLang: function() {
    document.getElementById('langToggle')?.addEventListener('click', Theme.toggleLang);
    document.getElementById('langToggleMobile')?.addEventListener('click', Theme.toggleLang);
  },

  toggleTheme: function() {
    AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
    appTheme = AppState.theme; // keep alias in sync
    localStorage.setItem('hsk_theme', AppState.theme);
    Theme.applyTheme(AppState.theme);
  },

  applyTheme: function(t) {
    document.documentElement.setAttribute('data-theme', t);
    const icon = t === 'dark' ? '☀️' : '🌙';
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = icon;
    const btnM = document.getElementById('themeToggleMobile');
    if (btnM) btnM.textContent = icon;
  },

  toggleLang: function() {
    AppState.lang = AppState.lang === 'vi' ? 'en' : 'vi';
    appLang = AppState.lang; // keep alias in sync
    localStorage.setItem('hsk_lang', AppState.lang);
    Theme.applyLang(AppState.lang);
  },

  applyLang: function(lang) {
    const label = lang === 'vi' ? 'VI / EN' : 'EN / VI';
    const lt = document.getElementById('langToggle');
    if (lt) lt.textContent = label;
    const ltM = document.getElementById('langToggleMobile');
    if (ltM) ltM.textContent = lang.toUpperCase();
    // Update all data-vi/data-en elements
    document.querySelectorAll('[data-vi]').forEach(function(el) {
      el.textContent = lang === 'vi' ? el.dataset.vi : el.dataset.en;
    });
    // Update dictionary placeholder
    const ds = document.getElementById('dictSearch');
    if (ds) ds.placeholder = lang === 'vi'
      ? 'Tìm chữ Hán, pinyin hoặc nghĩa...'
      : 'Search hanzi, pinyin or meaning...';
  },
};

// ── Backward-compat global functions ──────────────────
function setupThemeToggles() { Theme.setupTheme(); }
function setupLangToggles()  { Theme.setupLang(); }
function toggleTheme()       { Theme.toggleTheme(); }
function toggleLang()        { Theme.toggleLang(); }
function applyTheme(t)       { Theme.applyTheme(t); }
function applyLang(lang)     { Theme.applyLang(lang); }
