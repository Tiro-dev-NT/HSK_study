// ═══════════════════════════════════════════════════════
// DATA-LOADER.JS — Lazy-load data bundles theo route (perf)
// • Trước đây mọi data JS (~5.2MB) load đồng bộ ngay first paint.
//   Bundle siloed-theo-route giờ chỉ inject khi user vào page cần nó.
// • Router gọi DataLoader.ensureForPage(page) TRƯỚC khi chạy init →
//   data luôn sẵn khi module render (consumer vẫn guard typeof phòng lỗi mạng).
// • Idempotent: mỗi bundle chỉ load 1 lần (cache Promise).
// ═══════════════════════════════════════════════════════

var DataLoader = (function() {

  var _promises = {}; // bundleName -> Promise (load 1 lần)

  // ── Bundle → danh sách script URL (?v= GIỮ khớp index.html để cache đúng) ──
  // Thứ tự trong 1 bundle quan trọng: course-data.js khai báo COURSE_DATA
  // trước, course-hskN.js push vào → phải load tuần tự.
  var _bundles = {
    // HSK 3.0 vocab L5-9 (~2.3MB) — tách khỏi first-paint. Prefetch nền ngay
    // sau boot (js/app.js) + gate route vocab bên dưới. ?v= GIỮ khớp version
    // file đã từng nằm index.html để cache đúng.
    hsk3_rest: [
      'js/data/v3/hsk3_lvl5.js?v=1.2',
      'js/data/v3/hsk3_lvl6.js?v=1.2',
      'js/data/v3/hsk3_lvl7.js?v=1.1',
      'js/data/v3/hsk3_lvl8.js?v=1.1',
      'js/data/v3/hsk3_lvl9.js?v=1.1'
    ],
    course: [
      'js/data/course/course-data.js?v=1.0',
      'js/data/course/course-hsk1.js?v=1.2',
      'js/data/course/course-hsk2.js?v=1.4',
      'js/data/course/course-hsk3.js?v=1.3',
      'js/data/course/course-hsk4.js?v=1.3',
      'js/data/course/course-hsk5.js?v=1.0'
    ],
    hskk: [
      'js/data/hskk/so-cap.js?v=1.2',
      'js/data/hskk/zhong-ji.js?v=1.3'
    ],
    shadowing: ['js/data/speaking/shadowing.js?v=2.0'],
    reader: [
      'js/data/reader/reader-hsk1.js?v=1.2',
      'js/data/reader/reader-hsk2.js?v=1.1',
      'js/data/reader/reader-hsk3.js?v=1.1',
      'js/data/reader/reader-hsk4.js?v=1.0',
      'js/data/reader/reader-hsk5.js?v=1.0'
    ],
    grammar:  ['js/data/grammar.js?v=1.1'],
    readings: ['js/data/readings.js?v=1.2'],
    radicals: ['js/data/radicals214.js?v=1.0']
  };

  // ── Page (router page name) → bundle cần load trước init ──
  // Coupling: COURSE_DATA dùng ở learn-hub/ban-do-hsk/speaking;
  // GRAMMAR_DATA/READINGS_DATA dùng ở learn-hub + admin/content.
  // 'hsk3_rest' = guarantee đủ vocab L5-9 cho page đọc/ghi "all levels"
  // (tra từ, học, quiz, deck, kho từ, mock-exam, text-analyzer, topics, bản đồ…).
  // Prefetch nền (app.js) thường đã xong trước khi user click → ensureForPage
  // dùng lại Promise cache, không tải lại. Đây là LƯỚI AN TOÀN khi mạng chậm.
  var _pageBundles = {
    course:       ['course'],
    'lesson-practice': ['course'],   // C1 — sinh bài tập runtime từ COURSE_DATA
    handout:      ['course'],
    learn:        ['hsk3_rest', 'course', 'grammar', 'readings'],
    'ban-do-hsk': ['hsk3_rest', 'course'],
    speaking:     ['shadowing', 'course'],
    hskk:         ['hskk'],
    reader:       ['reader'],
    grammar:      ['grammar'],
    reading:      ['readings'],
    radicals:     ['radicals'],
    admin:        ['hsk3_rest', 'grammar', 'readings'],
    dictionary:   ['hsk3_rest'],
    quiz:         ['hsk3_rest'],
    'mock-exam':  ['hsk3_rest'],
    vault:        ['hsk3_rest'],
    games:        ['hsk3_rest'],
    'my-vocab':   ['hsk3_rest'],
    'vocab-import': ['hsk3_rest'],
    'text-analyzer': ['hsk3_rest'],
    topics:       ['hsk3_rest'],
    'learn-method': ['hsk3_rest'],
    handwriting:  ['hsk3_rest'],
    profile:      ['hsk3_rest']
  };

  function _loadScript(url) {
    return new Promise(function(resolve, reject) {
      var s = document.createElement('script');
      s.src = url;
      s.async = false; // giữ thứ tự thực thi
      s.onload = function() { resolve(); };
      s.onerror = function() { reject(new Error('[DataLoader] load fail: ' + url)); };
      document.head.appendChild(s);
    });
  }

  // Load 1 bundle (tuần tự để giữ thứ tự khai báo). Idempotent.
  function ensure(bundle) {
    if (_promises[bundle]) return _promises[bundle];
    var urls = _bundles[bundle];
    if (!urls || !urls.length) return Promise.resolve();
    var p = urls.reduce(function(chain, url) {
      return chain.then(function() { return _loadScript(url); });
    }, Promise.resolve());
    _promises[bundle] = p;
    // Nếu lỗi → xoá cache để lần sau thử lại (không kẹt vĩnh viễn)
    p.catch(function() { delete _promises[bundle]; });
    return p;
  }

  // Load tất cả bundle 1 page cần. Không bao giờ reject (degrade gracefully).
  function ensureForPage(page) {
    var bundles = _pageBundles[page];
    if (!bundles || !bundles.length) return Promise.resolve();
    return Promise.all(bundles.map(function(b) {
      return ensure(b).catch(function(e) {
        console.warn('[DataLoader] bundle "' + b + '" lỗi — page "' + page + '" chạy với data thiếu:', e && e.message);
      });
    }));
  }

  return {
    ensure: ensure,
    ensureForPage: ensureForPage,
    _bundles: _bundles,
    _pageBundles: _pageBundles
  };

}());
