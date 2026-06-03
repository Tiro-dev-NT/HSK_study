// ═══════════════════════════════════════════════════════
// MISTAKE-BOOK.JS — Sổ tay lỗi (Lát 5 lộ trình hợp nhất)
// Gom từ trả lời SAI (Quiz + workbook Truyện Mai) vào 1 store bền,
// surface ở "Hôm nay" + Học hub, "Ôn" tái dùng cơ chế override Phase Q
// (sessionStorage 'hsk_quiz_override_words'). Tự dọn khi từ đã "nhớ chắc"
// (SRS interval ≥ 21) — sổ không phình mãi.
// ═══════════════════════════════════════════════════════
var MistakeBook = (function () {
  'use strict';

  var KEY = 'hsk_mistake_book_v1';

  function _load() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; }
  }
  function _save(d) {
    try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {}
  }

  function _isMastered(h) {
    try {
      var srs = (typeof AppState !== 'undefined' && AppState.srsData) ? AppState.srsData[h] : null;
      return !!(srs && srs.interval >= 21);
    } catch (e) { return false; }
  }

  // word = {h, p, v|e, ...}; source = 'quiz' | 'mai'
  function add(word, source) {
    if (!word || !word.h) return;
    var d = _load();
    var e = d[word.h];
    if (e) {
      e.count = (e.count || 1) + 1;
      e.ts = Date.now();
      if (source) e.source = source;
    } else {
      d[word.h] = {
        h: word.h,
        p: word.p || '',
        v: word.v || word.e || '',
        source: source || '',
        count: 1,
        ts: Date.now()
      };
    }
    _save(d);
  }

  // Danh sách lỗi còn "treo" (đã lọc từ đã nhớ chắc), mới nhất trước
  function list() {
    var d = _load();
    var changed = false;
    var out = [];
    Object.keys(d).forEach(function (h) {
      if (_isMastered(h)) { delete d[h]; changed = true; return; }
      out.push(d[h]);
    });
    if (changed) _save(d);
    out.sort(function (a, b) { return (b.ts || 0) - (a.ts || 0); });
    return out;
  }

  function count() { return list().length; }

  function remove(h) {
    var d = _load();
    if (d[h]) { delete d[h]; _save(d); }
  }

  function clear() { _save({}); }

  // Mở quiz ôn lỗi — tái dùng override Phase Q
  function review() {
    var words = list();
    if (!words.length) return false;
    try { sessionStorage.setItem('hsk_quiz_override_words', JSON.stringify(words)); } catch (e) {}
    if (typeof Router !== 'undefined') Router.navigateTo('quiz');
    return true;
  }

  return { add: add, list: list, count: count, remove: remove, clear: clear, review: review };
}());

if (typeof window !== 'undefined') window.MistakeBook = MistakeBook;
