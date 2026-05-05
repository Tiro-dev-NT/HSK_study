// ═══════════════════════════════════════════════════════
// STATE.JS — Centralized application state
// • Owns all global vars + localStorage read/write helpers
// • No DOM access, no UI logic
// • All other modules read/write state via AppState
// ═══════════════════════════════════════════════════════

var AppState = {
  // ── Persistent state (synced with localStorage) ──
  lang:     localStorage.getItem('hsk_lang')   || 'vi',
  theme:    localStorage.getItem('hsk_theme')  || 'dark',
  version:  parseInt(localStorage.getItem('hsk_version') || '2'),
  progress: (function() {
    try { return JSON.parse(localStorage.getItem('hsk_progress') || '{}'); }
    catch(e) { return {}; }
  })(),
  srsData: (function() {
    try { return JSON.parse(localStorage.getItem('hsk_srs') || '{}'); }
    catch(e) { return {}; }
  })(),
  xpData: (function() {
    try {
      return JSON.parse(localStorage.getItem('hsk_xp') || '{"total":0,"weeklyXP":0,"weekStart":"","lastActive":""}');
    } catch(e) { return {total:0, weeklyXP:0, weekStart:'', lastActive:''}; }
  })(),

  // ── Session / transient state ──
  currentWord:    null,   // word currently shown in modal
  activeRadical:  null,   // radical index selected in browser
  hanziWriter:    null,   // HanziWriter instance (modal)
  searchMode:     'all',  // 'all'|'hanzi'|'pinyin'|'meaning'|'radical'

  // Flashcard/session state
  fcDeck:    [],
  fcIndex:   0,
  fcSession: { correct: 0, wrong: 0 },

  // Quiz state
  qDeck:      [],
  qIndex:     0,
  qScore:     0,
  qAnswered:  false,

  // ── localStorage helpers ──────────────────────────
  save: function(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch(e) { console.error('[STATE] save failed:', key, e); }
  },

  saveProgress: function() {
    this.save('hsk_progress', this.progress);
  },

  saveSRSData: function() {
    this.save('hsk_srs', this.srsData);
  },

  saveXP: function() {
    this.save('hsk_xp', this.xpData);
  },

  // Record a word as learned for a given level
  markLearned: function(word) {
    const lv = word.level;
    if (!this.progress[lv]) this.progress[lv] = [];
    if (!this.progress[lv].includes(word.h)) {
      this.progress[lv].push(word.h);
      this.saveProgress();
    }
  },

  // Count all learned words across all levels
  totalLearned: function() {
    return Object.values(this.progress).reduce(function(sum, arr) {
      return sum + arr.length;
    }, 0);
  },
};

// ── Backward-compat aliases (so app.js / decks.js still work during migration) ──
// These let old code using bare variable names still function
// They will be removed once all modules are fully migrated
var appLang    = AppState.lang;
var appTheme   = AppState.theme;
var hskVersion = AppState.version;
var progress   = AppState.progress;   // shared reference
var srsData    = AppState.srsData;    // shared reference
var xpData     = AppState.xpData;    // shared reference
var currentWord   = AppState.currentWord;
var activeRadical = AppState.activeRadical;
var hanziWriter   = AppState.hanziWriter;
var searchMode    = AppState.searchMode;
var fcDeck        = AppState.fcDeck;
var fcIndex       = AppState.fcIndex;
var fcSession     = AppState.fcSession;
var qDeck         = AppState.qDeck;
var qIndex        = AppState.qIndex;
var qScore        = AppState.qScore;
var qAnswered     = AppState.qAnswered;

console.log('[STATE] Initialized. Progress levels:', Object.keys(AppState.progress).filter(k => AppState.progress[k].length > 0));
