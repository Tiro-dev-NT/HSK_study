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
    course: [
      'js/data/course/course-data.js?v=1.0',
      'js/data/course/course-hsk1.js?v=1.2',
      'js/data/course/course-hsk2.js?v=1.4',
      'js/data/course/course-hsk3.js?v=1.3',
      'js/data/course/course-hsk4.js?v=1.3'
    ],
    hskk: [
      'js/data/hskk/so-cap.js?v=1.2',
      'js/data/hskk/zhong-ji.js?v=1.3'
    ],
    shadowing: ['js/data/speaking/shadowing.js?v=2.0'],
    reader: [
      'js/data/reader/reader-hsk1.js?v=1.1',
      'js/data/reader/reader-hsk2.js?v=1.0',
      'js/data/reader/reader-hsk3.js?v=1.0'
    ],
    grammar:  ['js/data/grammar.js?v=1.1'],
    readings: ['js/data/readings.js?v=1.2'],
    radicals: ['js/data/radicals214.js?v=1.0']
  };

  // ── Page (router page name) → bundle cần load trước init ──
  // Coupling: COURSE_DATA dùng ở learn-hub/ban-do-hsk/speaking;
  // GRAMMAR_DATA/READINGS_DATA dùng ở learn-hub + admin/content.
  var _pageBundles = {
    course:       ['course'],
    handout:      ['course'],
    learn:        ['course', 'grammar', 'readings'],
    'ban-do-hsk': ['course'],
    speaking:     ['shadowing', 'course'],
    hskk:         ['hskk'],
    reader:       ['reader'],
    grammar:      ['grammar'],
    reading:      ['readings'],
    radicals:     ['radicals'],
    admin:        ['grammar', 'readings']
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
