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
    var ver = parseInt(localStorage.getItem('hsk_version') || '2');
    var key = ver === 3 ? 'hsk_progress_v3' : 'hsk_progress';
    try { return JSON.parse(localStorage.getItem(key) || '{}'); }
    catch(e) { return {}; }
  })(),
  srsData: (function() {
    var ver = parseInt(localStorage.getItem('hsk_version') || '2');
    var key = ver === 3 ? 'hsk_srs_v3' : 'hsk_srs';
    try { return JSON.parse(localStorage.getItem(key) || '{}'); }
    catch(e) { return {}; }
  })(),
  xpData: (function() {
    try {
      return JSON.parse(localStorage.getItem('hsk_xp') || '{"total":0,"weeklyXP":0,"weekStart":"","lastActive":""}');
    } catch(e) { return {total:0, weeklyXP:0, weekStart:'', lastActive:''}; }
  })(),
  dailyChallenge: (function() {
    try { return JSON.parse(localStorage.getItem('hsk_daily_challenge') || '{}'); }
    catch(e) { return {}; }
  })(),
  dailyChallengeStreak: (function() {
    try {
      return JSON.parse(localStorage.getItem('hsk_daily_challenge_streak') || '{"current":0,"best":0,"lastDate":""}');
    } catch(e) { return {current:0, best:0, lastDate:''}; }
  })(),
  survivalHighScore: (function() {
    try {
      return JSON.parse(localStorage.getItem('hsk_survival_high_score') || '{"score":0,"date":""}');
    } catch(e) { return {score:0, date:''}; }
  })(),
  tokenData: (function() {
    try {
      return JSON.parse(localStorage.getItem('hsk_tokens') || '{"balance":0,"lifetime_earned":0,"history":[]}');
    } catch(e) { return {balance:0, lifetime_earned:0, history:[]}; }
  })(),
  questData: (function() {
    try {
      return JSON.parse(localStorage.getItem('hsk_quests') || '{"daily":{},"weekly":{},"chains":{},"metrics":{}}');
    } catch(e) { return {daily:{}, weekly:{}, chains:{}, metrics:{}}; }
  })(),

  // ── Session / transient state ──
  currentWord:    null,   // word currently shown in modal
  activeRadical:  null,   // radical index selected in browser
  hanziWriter:    null,   // HanziWriter instance (modal)
  searchMode:     'all',  // 'all'|'hanzi'|'pinyin'|'meaning'|'radical'

  // Flashcard/session state
  fcDeck:    [],
  fcIndex:   0,
  fcSession: { correct: 0, wrong: 0, startTime: Date.now() },

  // Quiz state
  qDeck:         [],
  qIndex:        0,
  qScore:        0,
  qAnswered:     false,
  qSessionType:  'standard',
  qMeta:         {},

  // ── localStorage helpers ──────────────────────────
  save: function(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch(e) { console.error('[STATE] save failed:', key, e); }
  },

  saveProgress: function() {
    this.save(this.version === 3 ? 'hsk_progress_v3' : 'hsk_progress', this.progress);
  },

  saveSRSData: function() {
    this.save(this.version === 3 ? 'hsk_srs_v3' : 'hsk_srs', this.srsData);
  },

  saveXP: function() {
    this.save('hsk_xp', this.xpData);
  },

  saveDailyChallenge: function() {
    this.save('hsk_daily_challenge', this.dailyChallenge);
  },

  saveDailyChallengeStreak: function() {
    this.save('hsk_daily_challenge_streak', this.dailyChallengeStreak);
  },

  saveSurvivalHighScore: function() {
    this.save('hsk_survival_high_score', this.survivalHighScore);
  },

  saveTokens: function() {
    this.save('hsk_tokens', this.tokenData);
  },

  saveQuests: function() {
    this.save('hsk_quests', this.questData);
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

  // ── Tag helpers (Phase 2.1) ────────────────────────
  addTagToWord: function(hanzi, tag) {
    if (!this.srsData[hanzi]) return;
    if (!this.srsData[hanzi].tags) this.srsData[hanzi].tags = [];
    if (this.srsData[hanzi].tags.indexOf(tag) < 0) {
      this.srsData[hanzi].tags.push(tag);
      this.saveSRSData();
    }
  },

  removeTagFromWord: function(hanzi, tag) {
    if (!this.srsData[hanzi] || !this.srsData[hanzi].tags) return;
    var idx = this.srsData[hanzi].tags.indexOf(tag);
    if (idx >= 0) {
      this.srsData[hanzi].tags.splice(idx, 1);
      this.saveSRSData();
    }
  },

  getAllTags: function() {
    var tagSet = {};
    var srs = this.srsData || {};
    Object.keys(srs).forEach(function(h) {
      var tags = srs[h].tags || [];
      tags.forEach(function(t) { tagSet[t] = true; });
    });
    return Object.keys(tagSet).sort();
  },
};

// ── Backward-compat aliases (so app.js / decks.js still work during migration) ──
// These let old code using bare variable names still function
// They will be removed once all modules are fully migrated
var appLang             = AppState.lang;
var appTheme            = AppState.theme;
var hskVersion          = AppState.version;
var progress            = AppState.progress;   // shared reference
var srsData             = AppState.srsData;    // shared reference
var xpData              = AppState.xpData;     // shared reference
var dailyChallenge      = AppState.dailyChallenge;
var dailyChallengeStreak = AppState.dailyChallengeStreak;
var survivalHighScore   = AppState.survivalHighScore;
var currentWord         = AppState.currentWord;
var activeRadical       = AppState.activeRadical;
var hanziWriter         = AppState.hanziWriter;
var searchMode          = AppState.searchMode;
var fcDeck              = AppState.fcDeck;
var fcIndex             = AppState.fcIndex;
var fcSession           = AppState.fcSession;
var qDeck               = AppState.qDeck;
var qIndex              = AppState.qIndex;
var qScore              = AppState.qScore;
var qAnswered           = AppState.qAnswered;
var qSessionType        = AppState.qSessionType;
var qMeta               = AppState.qMeta;

console.log('[STATE] Initialized. Progress levels:', Object.keys(AppState.progress).filter(k => AppState.progress[k].length > 0));
