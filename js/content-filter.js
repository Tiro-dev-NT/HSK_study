// ═══════════════════════════════════════════════════════
// CONTENT-FILTER.JS — Political content scanner
// HARD RULE A12: app KHÔNG được liên quan đến nội dung
// chính trị, lãnh thổ, hoặc nhạy cảm (xem CONTENT_GUIDELINES.md).
//
// Usage:
//   ContentFilter.check(text)        → { ok, matches }
//   ContentFilter.scanAllData()      → console report (dev only)
//   ContentFilter.assertClean(text)  → throws if flagged
// ═══════════════════════════════════════════════════════

var ContentFilter = (function () {

  // ── Forbidden pattern list (Rule A12) ─────────────────
  // Any match = flag for human review. NOT auto-blocked
  // (learning vocabulary like 台 or 藏 is legitimate).
  // Context-based: only flag full phrases, not single chars.
  var FORBIDDEN_PHRASES = [
    // Territorial claims
    '南海', '九段线', '十段线', '西沙', '南沙', '东沙',
    '钓鱼岛', '尖阁',
    // Political institutions (in sensitive context)
    '台独', '藏独', '疆独', '港独',
    '天安门事件', '六四',
    // Leaders / sensitive figures
    '习近平', '毛泽东', '邓小平',          // flag for review — not auto-block
    // Separatism / independence movements
    '台湾独立', '西藏独立', '新疆独立',
    // Maps
    '九段线地图', '十段线地图',
    // Vietnamese equivalents
    'đường lưỡi bò', 'đường 9 đoạn', 'biển Nam Trung Hoa',
    'Tưởng Giới Thạch', 'Đài Loan độc lập', 'Tây Tạng độc lập',
  ];

  // Regex built once from phrases (case-insensitive for Latin, exact for CJK)
  var _patterns = FORBIDDEN_PHRASES.map(function (p) {
    return new RegExp(p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  });

  // ── Core check ─────────────────────────────────────────
  function check(text) {
    if (!text) return { ok: true, matches: [] };
    var s = String(text);
    var matches = [];
    _patterns.forEach(function (re, idx) {
      if (re.test(s)) matches.push(FORBIDDEN_PHRASES[idx]);
    });
    return { ok: matches.length === 0, matches: matches };
  }

  // ── Throws if flagged (use in AI response pipeline) ───
  function assertClean(text) {
    var result = check(text);
    if (!result.ok) {
      throw new Error('[ContentFilter] Flagged phrases: ' + result.matches.join(', '));
    }
  }

  // ── Dev scanner: check all loaded HSK vocab data ──────
  // Run in browser console: ContentFilter.scanAllData()
  function scanAllData() {
    if (typeof HSK3_DATA === 'undefined' && typeof HSK_DATA_V3 === 'undefined') {
      console.warn('[ContentFilter] No HSK3_DATA found. Load vocab data first.');
      return;
    }

    var flagged = [];

    function scanEntry(word, source) {
      var fields = [
        word.h, word.p, word.v, word.e,
        word.t, word.ex,
        word.note, word.topic
      ];
      fields.forEach(function (f) {
        if (!f) return;
        var texts = Array.isArray(f) ? f : [String(f)];
        texts.forEach(function (txt) {
          var r = check(txt);
          if (!r.ok) {
            flagged.push({
              source: source,
              hanzi: word.h || '?',
              field: txt,
              matches: r.matches
            });
          }
        });
      });
    }

    // HSK 3.0
    var v3 = (typeof HSK3_DATA !== 'undefined') ? HSK3_DATA
           : (typeof HSK_DATA_V3 !== 'undefined') ? HSK_DATA_V3 : null;
    if (v3) {
      Object.keys(v3).forEach(function (level) {
        (v3[level] || []).forEach(function (w) {
          scanEntry(w, 'HSK3.0 L' + level);
        });
      });
    }

    if (flagged.length === 0) {
      console.log('[ContentFilter] ✅ Scan complete — 0 flags found.');
    } else {
      console.warn('[ContentFilter] ⚠️ ' + flagged.length + ' flag(s) found:');
      flagged.forEach(function (f) {
        console.warn('  [' + f.source + '] ' + f.hanzi + ' → "' + f.field + '" matches: ' + f.matches.join(', '));
      });
      console.warn('[ContentFilter] Review each entry. Single-character matches may be false positives — check full context per CONTENT_GUIDELINES.md.');
    }
    return flagged;
  }

  // ── Public API ─────────────────────────────────────────
  return {
    check:       check,
    assertClean: assertClean,
    scanAllData: scanAllData,
    FORBIDDEN_PHRASES: FORBIDDEN_PHRASES
  };
})();
