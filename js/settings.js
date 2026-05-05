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
    // Sync SRS new-per-day limit
    if (typeof SRS_NEW_PER_DAY !== 'undefined') {
      window._srsNewPerDay = appSettings.newPerDay;
    }
    // Apply default learn mode chip
    const chip = document.querySelector('.mode-chip[data-mode="' + appSettings.defaultMode + '"]');
    if (chip) {
      document.querySelectorAll('.mode-chip').forEach(function(b) { b.classList.remove('active'); });
      chip.classList.add('active');
      if (typeof currentLearnMode !== 'undefined') currentLearnMode = appSettings.defaultMode;
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
    document.getElementById('settingsOverlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  },

  close: function() {
    document.getElementById('settingsOverlay').style.display = 'none';
    document.body.style.overflow = '';
  },

  save: function() {
    appSettings = {
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
    };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(appSettings));
    Settings.apply();
    Settings.close();
    showToast('✅ Đã lưu cài đặt!');
  },

  reset: function() {
    if (!confirm('Đặt lại tất cả cài đặt về mặc định?')) return;
    appSettings = Object.assign({}, SETTINGS_DEFAULT);
    localStorage.removeItem(SETTINGS_KEY);
    Settings.open();
    showToast('↺ Đã đặt lại mặc định');
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
