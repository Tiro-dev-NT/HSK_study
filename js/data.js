// ─── HSK Data Core ────────────────────────────────────
// Each level is loaded from js/data/hskN.js
// Using var (not const) to allow inline fallback in HTML if cached.

var HSK_DATA = { 1:[], 2:[], 3:[], 4:[], 5:[], 6:[] };

// ─── Level / Meta Info ────────────────────────────────
// Used by both app.js (home grid) and decks.js (deck cards)
var LEVEL_INFO = {
  1: { label:'HSK 1', count:140,  color:'#E74C3C', icon:'📕' },
  2: { label:'HSK 2', count:130,  color:'#E67E22', icon:'📙' },
  3: { label:'HSK 3', count:260,  color:'#F1C40F', icon:'📒' },
  4: { label:'HSK 4', count:591,  color:'#27AE60', icon:'📗' },
  5: { label:'HSK 5', count:1349, color:'#2980B9', icon:'📘' },
  6: { label:'HSK 6', count:1419, color:'#8E44AD', icon:'📓' },
};

// Alias for backward compat (decks.js uses HSK_META)
var HSK_META = LEVEL_INFO;

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
  var all = [];
  Object.entries(HSK_DATA).forEach(function(entry) {
    var lv = entry[0], words = entry[1];
    words.forEach(function(w) { all.push(Object.assign({}, w, {level: parseInt(lv)})); });
  });
  return all;
}

function getWordsByLevel(lv) {
  return (HSK_DATA[lv] || []).map(function(w) { return Object.assign({}, w, {level: lv}); });
}

// Trả về từ MỚI của level (loại bỏ từ đã có ở level thấp hơn)
function getNewWordsForLevel(level) {
  var lowerWords = new Set();
  for (var i = 1; i < level; i++) {
    (HSK_DATA[i] || []).forEach(function(w) { lowerWords.add(w.h); });
  }
  return (HSK_DATA[level] || []).filter(function(w) { return !lowerWords.has(w.h); });
}

// Trả về TẤT CẢ từ tích lũy đến level X (dedup)
function getCumulativeWords(level) {
  var all = [];
  for (var i = 1; i <= level; i++) {
    (HSK_DATA[i] || []).forEach(function(w) { all.push(Object.assign({}, w, {level: i})); });
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
