// ═══════════════════════════════════════════════════════
// SETTINGS.JS — App settings modal
// • Owns: loadSettings(), openSettings(), closeSettings(),
//         saveSettings(), resetSettings(), applySettings()
// • Reads/writes: appSettings (global object), localStorage
// • NOTE: appSettings is intentionally global so other modules
//   (srs.js, dictionary.js) can read it without importing this file
// ═══════════════════════════════════════════════════════

const SETTINGS_KEY = 'hsk_settings';

const SETTINGS_DEFAULT = {
  newPerDay:         20,
  maxReviews:        200,
  graduateInterval:  1,
  easyInterval:      4,
  newOrder:          'seq',
  autoTTS:           true,
  showPinyin:        true,
  showEnglish:       false,
  defaultMode:       'flashcard',
  hintDelay:         0,
  soundFx:           true,
  srsMode:           'simple',
  hintLevel:         'medium',
  primaryColor:      '#C0392B',
  primaryLight:      '#E74C3C',
};

var appSettings = { ...SETTINGS_DEFAULT };

var Settings = {

  load: function() {
    try {
      const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
      appSettings = Object.assign({}, SETTINGS_DEFAULT, saved);
    } catch(e) {
      appSettings = Object.assign({}, SETTINGS_DEFAULT);
    }
    Settings.apply();
  },

  apply: function() {
    if (typeof SRS_NEW_PER_DAY !== 'undefined') window._srsNewPerDay = appSettings.newPerDay;
    const chip = document.querySelector('.mode-chip[data-mode="' + appSettings.defaultMode + '"]');
    if (chip) {
      document.querySelectorAll('.mode-chip').forEach(function(b) { b.classList.remove('active'); });
      chip.classList.add('active');
      if (typeof currentLearnMode !== 'undefined') currentLearnMode = appSettings.defaultMode;
    }
    // Apply primary color
    if (appSettings.primaryColor) {
      document.documentElement.style.setProperty('--primary', appSettings.primaryColor);
      document.documentElement.style.setProperty('--primary-light', appSettings.primaryLight || appSettings.primaryColor);
    }
  },

  open: function() {
    const s = appSettings;
    document.getElementById('setNewPerDay').value        = s.newPerDay;
    document.getElementById('setMaxReviews').value       = s.maxReviews;
    document.getElementById('setGraduateInterval').value = s.graduateInterval;
    document.getElementById('setEasyInterval').value     = s.easyInterval;
    document.getElementById('setNewOrder').value         = s.newOrder;
    document.getElementById('setAutoTTS').checked        = s.autoTTS;
    document.getElementById('setShowPinyin').checked     = s.showPinyin;
    document.getElementById('setShowEnglish').checked    = s.showEnglish;
    document.getElementById('setDefaultMode').value      = s.defaultMode;
    document.getElementById('setHintDelay').value        = String(s.hintDelay);
    document.getElementById('setSoundFx').checked        = s.soundFx;
    document.getElementById('setSrsMode').value          = s.srsMode;
    document.getElementById('setHintLevel').value        = s.hintLevel;
    // Dark mode toggle
    const dmEl = document.getElementById('setDarkMode');
    if (dmEl) dmEl.checked = (typeof AppState !== 'undefined' ? AppState.theme : localStorage.getItem('hsk_theme')) === 'dark';
    // Language buttons
    const lang = typeof AppState !== 'undefined' ? AppState.lang : 'vi';
    document.getElementById('smLangVI')?.classList.toggle('active', lang === 'vi');
    document.getElementById('smLangEN')?.classList.toggle('active', lang === 'en');
    // Color dots
    document.querySelectorAll('.sm-color-dot').forEach(function(dot) {
      dot.classList.toggle('active', dot.dataset.color === (s.primaryColor || '#C0392B'));
    });
    document.getElementById('settingsOverlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  },

  close: function() {
    document.getElementById('settingsOverlay').style.display = 'none';
    document.body.style.overflow = '';
  },

  save: function() {
    appSettings = Object.assign({}, appSettings, {
      newPerDay:        parseInt(document.getElementById('setNewPerDay').value)        || 20,
      maxReviews:       parseInt(document.getElementById('setMaxReviews').value)       || 200,
      graduateInterval: parseInt(document.getElementById('setGraduateInterval').value) || 1,
      easyInterval:     parseInt(document.getElementById('setEasyInterval').value)     || 4,
      newOrder:         document.getElementById('setNewOrder').value,
      autoTTS:          document.getElementById('setAutoTTS').checked,
      showPinyin:       document.getElementById('setShowPinyin').checked,
      showEnglish:      document.getElementById('setShowEnglish').checked,
      defaultMode:      document.getElementById('setDefaultMode').value,
      hintDelay:        parseInt(document.getElementById('setHintDelay').value) || 0,
      soundFx:          document.getElementById('setSoundFx').checked,
      srsMode:          document.getElementById('setSrsMode').value,
      hintLevel:        document.getElementById('setHintLevel').value,
    });
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(appSettings));
    Settings.apply();
    Settings.close();
    showToast('✅ Đã lưu cài đặt!');
  },

  reset: function() {
    if (!confirm('Đặt lại tất cả cài đặt về mặc định?')) return;
    appSettings = Object.assign({}, SETTINGS_DEFAULT);
    localStorage.removeItem(SETTINGS_KEY);
    document.documentElement.style.removeProperty('--primary');
    document.documentElement.style.removeProperty('--primary-light');
    Settings.open();
    showToast('↺ Đã đặt lại mặc định');
  },

  // ── Quick actions (called inline from modal) ───────
  setLang: function(lang) {
    if (typeof Theme !== 'undefined') {
      AppState.lang = lang;
      localStorage.setItem('hsk_lang', lang);
      Theme.applyLang(lang);
    }
    document.getElementById('smLangVI')?.classList.toggle('active', lang === 'vi');
    document.getElementById('smLangEN')?.classList.toggle('active', lang === 'en');
  },

  toggleDarkMode: function(isDark) {
    if (typeof Theme !== 'undefined') Theme.applyTheme(isDark ? 'dark' : 'light');
    AppState.theme = isDark ? 'dark' : 'light';
    localStorage.setItem('hsk_theme', AppState.theme);
  },

  setPrimaryColor: function(color, light) {
    appSettings.primaryColor = color;
    appSettings.primaryLight = light || color;
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(appSettings));
    document.documentElement.style.setProperty('--primary', color);
    document.documentElement.style.setProperty('--primary-light', light || color);
    document.querySelectorAll('.sm-color-dot').forEach(function(d) {
      d.classList.toggle('active', d.dataset.color === color);
    });
  },

  toggleAdvanced: function() {
    const adv  = document.getElementById('smAdvanced');
    const icon = document.getElementById('smCollapseIcon');
    const open = adv.style.display === 'none';
    adv.style.display  = open ? 'flex' : 'none';
    adv.style.flexDirection = 'column';
    icon.classList.toggle('open', open);
  },
};

// ── Backward-compat global functions ──────────────────
function loadSettings()  { Settings.load(); }
function applySettings() { Settings.apply(); }
function openSettings()  { Settings.open(); }
function closeSettings() { Settings.close(); }
function saveSettings()  { Settings.save(); }
function resetSettings() { Settings.reset(); }

// Close on Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('settingsOverlay');
    if (overlay && overlay.style.display !== 'none') Settings.close();
  }
});
