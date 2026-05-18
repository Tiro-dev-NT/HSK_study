// ─── HSK Data Core ────────────────────────────────────
// Each level is loaded from js/data/hskN.js
// Using var (not const) to allow inline fallback in HTML if cached.

var HSK_DATA = { 1:[], 2:[], 3:[], 4:[], 5:[], 6:[] };

// ─── HSK 3.0 (New HSK 2021) — populated lazily when user switches version ──
var HSK3_DATA = { 1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[] };

// ─── Level / Meta Info ────────────────────────────────
// Used by both app.js (home grid) and decks.js (deck cards)
var LEVEL_INFO = {
  1: { label:'HSK 1', count:171,  color:'#E74C3C', icon:'📕' },
  2: { label:'HSK 2', count:212,  color:'#E67E22', icon:'📙' },
  3: { label:'HSK 3', count:398,  color:'#F1C40F', icon:'📒' },
  4: { label:'HSK 4', count:848,  color:'#27AE60', icon:'📗' },
  5: { label:'HSK 5', count:1939, color:'#2980B9', icon:'📘' },
  6: { label:'HSK 6', count:3617, color:'#8E44AD', icon:'📓' },
};

var LEVEL_INFO_V3 = {
  1: { label:'HSK 3.0 L1', count:506,  color:'#E74C3C', icon:'📕' },
  2: { label:'HSK 3.0 L2', count:750,  color:'#E67E22', icon:'📙' },
  3: { label:'HSK 3.0 L3', count:953,  color:'#F1C40F', icon:'📒' },
  4: { label:'HSK 3.0 L4', count:246,  color:'#27AE60', icon:'📗' },
  5: { label:'HSK 3.0 L5', count:904,  color:'#2980B9', icon:'📘' },
  6: { label:'HSK 3.0 L6', count:2430, color:'#8E44AD', icon:'📓' },
  7: { label:'HSK 3.0 L7', count:1000, color:'#16A085', icon:'📚' },
  8: { label:'HSK 3.0 L8', count:1000, color:'#1ABC9C', icon:'📚' },
  9: { label:'HSK 3.0 L9', count:2051, color:'#E91E63', icon:'📚' },
};

// Alias for backward compat (decks.js uses HSK_META)
var HSK_META = LEVEL_INFO;

// ─── Version-aware data accessors ─────────────────────
function activeHSKData() {
  return (typeof AppState !== 'undefined' && AppState.version === 3) ? HSK3_DATA : HSK_DATA;
}
function activeLevelInfo() {
  return (typeof AppState !== 'undefined' && AppState.version === 3) ? LEVEL_INFO_V3 : LEVEL_INFO;
}
function activeLevelCount() {
  return (typeof AppState !== 'undefined' && AppState.version === 3) ? Object.keys(LEVEL_INFO_V3).length : 6;
}

// ─── Topic metadata ───────────────────────────────────
var TOPIC_META = {
  greetings:     { vi:"Chào hỏi",    icon:"👋" },
  pronouns:      { vi:"Đại từ",      icon:"👤" },
  family:        { vi:"Gia đình",    icon:"👨‍👩‍👧" },
  numbers:       { vi:"Số đếm",      icon:"🔢" },
  time:          { vi:"Thời gian",   icon:"⏰" },
  actions:       { vi:"Hành động",   icon:"🏃" },
  food:          { vi:"Thức ăn",     icon:"🍚" },
  adjectives:    { vi:"Tính từ",     icon:"📐" },
  emotions:      { vi:"Cảm xúc",     icon:"😊" },
  places:        { vi:"Địa điểm",    icon:"📍" },
  objects:       { vi:"Đồ vật",      icon:"📱" },
  animals:       { vi:"Động vật",    icon:"🐱" },
  school:        { vi:"Trường học",  icon:"🏫" },
  work:          { vi:"Công việc",   icon:"💼" },
  social:        { vi:"Xã hội",      icon:"🤝" },
  language:      { vi:"Ngôn ngữ",    icon:"🗣️" },
  health:        { vi:"Sức khỏe",    icon:"🏥" },
  body:          { vi:"Cơ thể",      icon:"🦵" },
  colors:        { vi:"Màu sắc",     icon:"🎨" },
  weather:       { vi:"Thời tiết",   icon:"⛅" },
  sports:        { vi:"Thể thao",    icon:"⚽" },
  mental:        { vi:"Tư duy",      icon:"🧠" },
  transport:     { vi:"Giao thông",  icon:"🚌" },
  activities:    { vi:"Hoạt động",   icon:"🎯" },
  arts:          { vi:"Nghệ thuật",  icon:"🎵" },
  entertainment: { vi:"Giải trí",    icon:"🎬" },
  society:       { vi:"Xã hội (XH)", icon:"🏛️" },
  academics:     { vi:"Học thuật",   icon:"📚" },
  nature:        { vi:"Thiên nhiên", icon:"🌿" },
  politics:      { vi:"Chính trị",   icon:"⚖️" },
  life:          { vi:"Cuộc sống",   icon:"🌟" },
  general:       { vi:"Chung",       icon:"📋" },
};

// ─── Helpers ──────────────────────────────────────────
function getAllWords() {
  var data = activeHSKData();
  var all = [];
  Object.entries(data).forEach(function(entry) {
    var lv = entry[0], words = entry[1];
    words.forEach(function(w) { all.push(Object.assign({}, w, {level: parseInt(lv)})); });
  });
  return all;
}

// Merge cả HSK 2.0 + 3.0 — dùng cho từ điển tích hợp
// Dedup theo hanzi; active version thắng khi trùng
function getAllWordsBothVersions() {
  var seen = {};
  var result = [];
  function addDataset(data, ver) {
    Object.keys(data).forEach(function(lv) {
      (data[lv] || []).forEach(function(w) {
        if (!w.h) return;
        if (seen[w.h]) {
          seen[w.h]._alsoIn = { ver: ver, level: parseInt(lv) };
        } else {
          var word = Object.assign({}, w, { level: parseInt(lv), ver: ver });
          seen[w.h] = word;
          result.push(word);
        }
      });
    });
  }
  var isV3 = typeof AppState !== 'undefined' && AppState.version === 3;
  if (isV3) { addDataset(HSK3_DATA, 3); addDataset(HSK_DATA, 2); }
  else       { addDataset(HSK_DATA, 2); addDataset(HSK3_DATA, 3); }
  return result;
}

function getWordsByLevel(lv) {
  return (activeHSKData()[lv] || []).map(function(w) { return Object.assign({}, w, {level: lv}); });
}

// Trả về từ MỚI của level (loại bỏ từ đã có ở level thấp hơn)
function getNewWordsForLevel(level) {
  var data = activeHSKData();
  var lowerWords = new Set();
  for (var i = 1; i < level; i++) {
    (data[i] || []).forEach(function(w) { lowerWords.add(w.h); });
  }
  return (data[level] || []).filter(function(w) { return !lowerWords.has(w.h); });
}

// Trả về TẤT CẢ từ tích lũy đến level X (dedup)
function getCumulativeWords(level) {
  var data = activeHSKData();
  var all = [];
  for (var i = 1; i <= level; i++) {
    (data[i] || []).forEach(function(w) { all.push(Object.assign({}, w, {level: i})); });
  }
  var seen = new Set();
  return all.filter(function(w) {
    if (seen.has(w.h)) return false;
    seen.add(w.h); return true;
  });
}

// Phân loại từ theo trạng thái SRS (kiểu Anki)
function getLevelStats(level) {
  var words = getNewWordsForLevel(level);
  var total = words.length;
  var newCount = 0, learning = 0, mastered = 0, due = 0;
  var today = new Date().toISOString().split('T')[0];
  var progress = AppState.progress[level] || [];

  words.forEach(function(w) {
    var srs = AppState.srsData[w.h];
    if (!srs && progress.indexOf(w.h) === -1) {
      newCount++;
    } else if (srs && srs.interval >= 21) {
      mastered++;
    } else if (srs && srs.dueDate && srs.dueDate <= today) {
      due++;
    } else {
      learning++;
    }
  });
  return { total: total, new: newCount, learning: learning, mastered: mastered, due: due };
}
