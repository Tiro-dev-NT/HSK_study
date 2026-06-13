// ═══════════════════════════════════════════════════════
// ROUTER.JS — Client-side fragment router (Phase 2.5)
// • Lazy-fetches HTML fragments from /pages/*.html
// • Caches fetched fragments in memory
// • Uses History pushState for clean URLs
// • Calls per-page module init after injection
// ═══════════════════════════════════════════════════════

var Router = (function() {

  var _cache = {};       // { pageName: htmlString }
  var _current = null;
  var _pending = false;  // prevent concurrent navigations
  var _queued = null;    // {page,pushState} requested while a nav was in-flight (P1-2)

  // ── Route map: URL path → page name ─────────────────
  var _routes = {
    '/':               'home',
    '/home':           'home',
    '/dictionary':     'dictionary',
    '/grammar':        'grammar',
    '/reading':        'reading',
    '/reader':         'reader',
    '/learn':          'learn',
    '/vocab':          'learn',
    '/quiz':           'quiz',
    '/vault':          'vault',
    '/feedback':       'feedback',
    '/games':          'games',
    '/extension-auth': 'extension-auth',
    '/video-vocab':    'video-vocab',
    '/my-vocab':       'my-vocab',
    '/vocab-import':   'vocab-import',
    '/quests':         'quests',
    '/handwriting':    'handwriting',
    '/pinyin-lab':     'pinyin-lab',
    '/pricing':        'pricing',
    '/admin':          'admin',
    '/ban-do-hsk':    'ban-do-hsk',
    '/tools':         'tools',
    '/profile':       'profile',
    // Legal pages (added 2026-05-23, see COMPLIANCE_CHECKLIST.md)
    '/privacy':       'privacy',
    '/terms':         'terms',
    '/contact':       'contact',
    '/free-vs-pro':   'free-vs-pro',
    '/honor-hall':    'honor-hall',
    '/learn-method':  'learn-method',
    '/hsk0-pinyin-initials': 'hsk0-pinyin-initials',
    '/hsk0-pinyin-finals': 'hsk0-pinyin-finals',
    '/hsk0-strokes': 'hsk0-strokes',
    '/hsk0-numbers': 'hsk0-numbers',
    '/hsk0-typing':     'hsk0-typing',
    '/hsk0-final':      'hsk0-final',
    '/hsk0-final-exam': 'hsk0-final',
    '/placement':       'hsk0-placement',
    '/hsk0-placement':  'hsk0-placement',
    // Nav v2 — hub pages
    '/practice':        'practice',
    '/community':       'community',
    '/leaderboard':     'leaderboard',
    '/tri-an':          'tri-an',
    // Nav v2 — off-path
    '/stories':         'stories',
    '/explore':         'explore',
    // Nav v2 — stub pages (Phase R/S/Y/O/U/M)
    '/speaking':        'speaking',
    '/writing':         'writing',
    '/hskk':            'hskk',
    '/radicals':        'radicals',
    '/translate':       'translate',
    '/ocr':             'ocr',
    '/text-analyzer':   'text-analyzer',
    '/typing':          'typing',
    '/topics':          'topics',
    '/course':          'course',
    '/lesson-practice': 'lesson-practice',
    '/handout':         'handout',
    '/references':      'references',
    '/mock-exam':       'mock-exam',
    '/tutor':           'tutor',
  };

  // ── Module init map: called after fragment is injected ──
  var _initMap = {
    'home': function() {
      if (typeof Gamification !== 'undefined') {
        Gamification.buildLevelGrid();
        Gamification.updateStats();
        Gamification.renderWOTD();
        Gamification.renderAnalytics();
      }
      if (typeof Quests !== 'undefined') Quests.renderHomeWidget();
    },
    'dictionary': function() {
      if (typeof Dictionary !== 'undefined') {
        Dictionary.setup();
        Dictionary.buildRadicalBrowser();
      }
    },
    'grammar': function() {
      if (typeof Grammar !== 'undefined') Grammar.setup();
    },
    'reading': function() {
      if (typeof Reading !== 'undefined') Reading.setup();
    },
    'reader': function() {
      if (typeof Reader !== 'undefined') Reader.init();
    },
    'learn': function() {
      if (typeof setupDecks === 'function') setupDecks();
      if (typeof Session !== 'undefined') Session.setup();
      if (typeof initLearnHub === 'function') initLearnHub();
    },
    'quiz': function() {
      if (typeof Quiz !== 'undefined') Quiz.setup();
    },
    'vault': function() {
      if (typeof setupDecks === 'function') setupDecks();
    },
    'feedback': function() {
      if (typeof Feedback !== 'undefined') Feedback.setup();
    },
    'games': function() {
      if (typeof Games !== 'undefined') Games.setup();
    },
    'extension-auth': function() {
      // Auth.checkExtensionBridge() runs once at startup via app.js
    },
    'video-vocab': function() {
      // Populated dynamically by auth/sync
    },
    'my-vocab': function() {
      if (typeof MyVocab !== 'undefined') MyVocab.setup();
    },
    'vocab-import': function() {
      if (typeof VocabImport !== 'undefined') VocabImport.setup();
    },
    'quests': function() {
      if (typeof Quests !== 'undefined') Quests.setupPage();
    },
    'handwriting': function() {
      if (typeof Handwriting !== 'undefined') Handwriting.setup();
    },
    'pinyin-lab': function() {
      if (typeof PinyinLab !== 'undefined') PinyinLab.setup();
    },
    'pricing': function() {
      if (typeof Pricing !== 'undefined') Pricing.setupPage();
    },
    'admin': function() {
      if (typeof Admin !== 'undefined') Admin.setup();
    },
    'ban-do-hsk': function() {
      if (typeof BanDoHsk !== 'undefined') BanDoHsk.setup();
    },
    'tools': function() { /* static hub — no JS init needed */ },
    'profile': function() {
      if (typeof Profile !== 'undefined') Profile.setup();
    },
    'honor-hall': function() {
      if (typeof Honor !== 'undefined') Honor.init();
    },
    'learn-method': function() {
      if (typeof LearnMethod !== 'undefined') LearnMethod.setup();
    },
    'hsk0-pinyin-initials': function() {
      if (typeof initHSK0PinyinInitials === 'function') initHSK0PinyinInitials();
    },
    'hsk0-pinyin-finals': function() {
      if (typeof initHSK0PinyinFinals === 'function') initHSK0PinyinFinals();
    },
    'hsk0-strokes': function() {
      if (typeof initHSK0Strokes === 'function') initHSK0Strokes();
    },
    'hsk0-numbers': function() {
      if (typeof initHSK0Numbers === 'function') initHSK0Numbers();
    },
    'hsk0-typing': function() {
      if (typeof initHSK0Typing === 'function') initHSK0Typing();
    },
    'hsk0-final': function() {
      if (typeof initHSK0Final === 'function') initHSK0Final();
    },
    'hsk0-placement': function() {
      if (typeof initHSK0Placement === 'function') initHSK0Placement();
    },
    // Nav v2 hub + stub pages (static, no JS init needed)
    'practice':     function() {
      if (typeof lhRefreshDueBadges === 'function') lhRefreshDueBadges();
    },
    'community':    function() {
      if (typeof Community !== 'undefined') Community.init();
    },
    'tri-an':       function() {
      if (typeof TriAn !== 'undefined') TriAn.init();
    },
    'leaderboard':  function() {
      if (typeof Leaderboard !== 'undefined') Leaderboard.init();
    },
    'stories':      function() {},
    'explore':      function() {},
    'speaking':     function() {
      if (typeof Speaking !== 'undefined') Speaking.init();
    },
    'writing':      function() {
      if (typeof Writing !== 'undefined') Writing.init();
    },
    'hskk':         function() {
      if (typeof HSKK !== 'undefined') HSKK.init();
    },
    'radicals':     function() {
      if (typeof Radicals214 !== 'undefined') Radicals214.init();
    },
    'translate':    function() {},
    'ocr':          function() {},
    'text-analyzer': function() {
      if (typeof TextAnalyzer !== 'undefined') TextAnalyzer.init();
    },
    'typing':       function() {},
    'topics':       function() {
      if (typeof Topics !== 'undefined') Topics.init();
    },
    'course':       function() {
      if (typeof Course !== 'undefined') Course.init();
    },
    'lesson-practice': function() {
      if (typeof LessonPractice !== 'undefined') LessonPractice.init();
    },
    'handout':      function() {
      if (typeof Handout !== 'undefined') Handout.init();
    },
    'references':   function() {},
    'mock-exam':    function() {
      if (typeof MockExam !== 'undefined') MockExam.init();
    },
    'tutor':        function() {
      if (typeof Tutor !== 'undefined') Tutor.init();
    },
  };

  // ── Fetch fragment from server (or memory cache) ─────
  function _fetchFragment(page) {
    if (_cache[page]) return Promise.resolve(_cache[page]);
    return fetch('/pages/' + page + '.html')
      .then(function(res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(function(html) {
        _cache[page] = html;
        return html;
      });
  }

  // ── Page → parent tab (Nav v2 6-tab) ─────────────────
  // Trang con kế thừa active-state của hub cha → sidebar desktop + bottom-nav
  // mobile luôn sáng đúng tab dù URL là trang con (W3 design review 2026-06-10).
  // Trang nào KHÔNG có trong map = tự nó là tab (vd home/learn/profile…).
  var _pageTabMap = {
    // ② Học
    'course':'learn', 'lesson-practice':'learn', 'reader':'learn', 'grammar':'learn', 'reading':'learn',
    'ban-do-hsk':'learn', 'topics':'learn', 'learn-method':'learn',
    'hsk0-pinyin-initials':'learn', 'hsk0-pinyin-finals':'learn', 'hsk0-strokes':'learn',
    'hsk0-numbers':'learn', 'hsk0-typing':'learn', 'hsk0-final':'learn', 'hsk0-placement':'learn',
    // ③ Luyện tập (không có slot bottom-nav → FAB sáng)
    'quiz':'practice', 'mock-exam':'practice', 'hskk':'practice',
    'speaking':'practice', 'writing':'practice',
    // ④ Công cụ (không có slot bottom-nav → FAB sáng)
    'dictionary':'tools', 'pinyin-lab':'tools', 'handwriting':'tools',
    'text-analyzer':'tools', 'tutor':'tools', 'radicals':'tools',
    'translate':'tools', 'ocr':'tools', 'typing':'tools',
    // ⑤ Tôi
    'vault':'profile', 'my-vocab':'profile', 'quests':'profile',
    'pricing':'profile', 'vocab-import':'profile', 'video-vocab':'profile',
    // ⑥ Cộng đồng
    'leaderboard':'community', 'honor-hall':'community'
  };

  // ── Update nav highlights ────────────────────────────
  function _updateNav(page) {
    var tab = _pageTabMap[page] || page;
    document.querySelectorAll('[data-page]').forEach(function(el) {
      el.classList.toggle('active', el.dataset.page === tab);
    });
    // Mobile: Luyện tập & Công cụ không có slot trong bottom-nav 5-tab →
    // highlight FAB để user biết đang ở nhánh "Xem thêm".
    var fab = document.querySelector('.bnav-fab');
    if (fab) fab.classList.toggle('bnav-fab--active', tab === 'practice' || tab === 'tools');
  }

  // ── Resolve URL path → page name ────────────────────
  function _pageFromPath(pathname) {
    var page = _routes[pathname];
    if (!page) {
      var stripped = pathname.replace(/^\//, '') || 'home';
      page = _initMap.hasOwnProperty(stripped) ? stripped : 'home';
    }
    return page;
  }

  // ── Core navigation ──────────────────────────────────
  function _navigateTo(page, pushState) {
    // A nav is already in flight: remember the latest request and run it when
    // the current one settles, instead of silently dropping the click (P1-2).
    if (_pending) { _queued = { page: page, pushState: pushState }; return; }
    page = page || 'home';
    if (page.charAt(0) === '/') page = page.slice(1) || 'home';
    // Điều hướng đi bất kỳ → thoát trạng thái session (hiện lại right rail + bottom nav)
    document.body.classList.remove('session-active');
    _pending = true;
    var content = document.getElementById('content');

    // Persist the outgoing scroll position into the CURRENT history entry so we
    // can restore it if the user comes Back here later (P1-1). Only meaningful
    // for forward navigations (pushState) — a popstate is itself a restore.
    if (pushState !== false) {
      try {
        var _outState = history.state || {};
        _outState._scroll = window.scrollY || window.pageYOffset || 0;
        history.replaceState(_outState, '');
      } catch (e) {}
    }

    _fetchFragment(page)
      .then(function(html) {
        if (content) content.innerHTML = html;
        // Push the new history entry BEFORE running page init. Pages like
        // Course/Handout call history.replaceState (to add ?id=) inside init;
        // pushing first means that replaceState refines THIS new entry instead
        // of clobbering the previous page's entry — fixes Back going nowhere
        // (UX_AUDIT P0-1). Pages read their id from _pendingId, not the URL,
        // so the transient param-less URL is safe.
        if (pushState !== false) {
          var path = page === 'home' ? '/' : '/' + page;
          history.pushState({ page: page }, '', path);
        }
        // Lazy-load data bundles riêng của route TRƯỚC khi init (perf — cắt
        // ~2.3MB data JS khỏi first paint). ensureForPage không bao giờ reject;
        // nếu mạng lỗi, consumer vẫn guard typeof nên page degrade gracefully.
        var _dataReady = (typeof DataLoader !== 'undefined')
          ? DataLoader.ensureForPage(page)
          : Promise.resolve();
        // W5: route nặng (vd course ~1.9MB) trên mạng chậm có thể trắng vùng
        // data trong lúc await. Hiện 1 spinner mảnh — deferred 220ms để
        // navigation nhanh (bundle đã cache) KHÔNG bao giờ nháy.
        var _loadTimer = setTimeout(function() {
          var c = document.getElementById('content');
          if (c && !c.querySelector('.route-loading')) {
            var d = document.createElement('div');
            d.className = 'route-loading';
            d.setAttribute('aria-live', 'polite');
            d.innerHTML = '<span class="route-loading-spin" aria-hidden="true"></span><span>Đang tải…</span>';
            c.appendChild(d);
          }
        }, 220);
        var _clearLoad = function() {
          clearTimeout(_loadTimer);
          var rl = document.querySelector('.route-loading');
          if (rl && rl.parentNode) rl.parentNode.removeChild(rl);
        };
        return _dataReady.then(function() {
          _clearLoad();
          try {
            if (_initMap[page]) _initMap[page]();
          } catch(e) {
            console.error('[Router] initPageModule ' + page + ' failed:', e);
          }
          _updateNav(page);
          _current = page;
          if (typeof RightSidebar !== 'undefined' && RightSidebar.onNavigate) {
            try { RightSidebar.onNavigate(page); } catch(e) {}
          }
          if (typeof window.updateMascot === 'function') window.updateMascot(page);
          // Forward nav → top of page. Back/forward → restore saved scroll (P1-1).
          if (pushState !== false) {
            window.scrollTo(0, 0);
          } else {
            var _sc = (history.state && history.state._scroll) || 0;
            requestAnimationFrame(function() { window.scrollTo(0, _sc); });
          }
        });
      })
      .catch(function(err) {
        console.error('[Router] fetch failed for ' + page + ':', err);
        if (content) {
          content.innerHTML =
            '<section class="page active">' +
            '<div class="page-header"><h1>Lỗi tải trang</h1>' +
            '<p style="color:var(--text2)">Không thể tải trang <strong>' + page + '</strong>. ' +
            'Vui lòng thử lại.</p>' +
            '<button class="btn-primary" onclick="Router.navigateTo(\'home\')">← Về trang chủ</button>' +
            '</div></section>';
        }
      })
      .then(function() {
        _pending = false;
        // Run the most recent nav that arrived while we were busy (P1-2).
        if (_queued) {
          var q = _queued; _queued = null;
          _navigateTo(q.page, q.pushState);
        }
      });
  }

  // ── Public API ───────────────────────────────────────
  return {

    currentPage: null,  // backward-compat property

    setup: function() {
      // Event delegation for [data-page] links anywhere in document
      document.body.addEventListener('click', function(e) {
        var el = e.target;
        while (el && el !== document.body) {
          if (el.dataset && el.dataset.page) {
            e.preventDefault();
            Router.navigateTo(el.dataset.page);
            return;
          }
          // Internal anchor links to known routes (legal/pricing pages use
          // plain href="/terms" without data-page). Intercept so the SPA
          // router handles them client-side — avoids a full reload that 404s
          // on static servers lacking SPA fallback. Respect new-tab clicks.
          if (el.tagName === 'A' && !e.defaultPrevented && e.button === 0 &&
              !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
            var raw = el.getAttribute('href');
            if (raw && raw.charAt(0) === '/' && raw.charAt(1) !== '/' &&
                !el.target && !el.hasAttribute('download')) {
              var hashIdx = raw.indexOf('#');
              var linkPath = hashIdx === -1 ? raw : raw.slice(0, hashIdx);
              var linkHash = hashIdx === -1 ? '' : raw.slice(hashIdx + 1);
              var linkPage = _routes[linkPath];
              if (!linkPage) {
                var stripped = linkPath.replace(/^\//, '');
                if (_initMap.hasOwnProperty(stripped)) linkPage = stripped;
              }
              if (linkPage) {
                e.preventDefault();
                Router.navigateTo(linkPage);
                if (linkHash) {
                  setTimeout(function() {
                    var target = document.getElementById(linkHash);
                    if (target) target.scrollIntoView();
                  }, 400);
                }
                return;
              }
            }
          }
          el = el.parentElement;
        }
      });

      // Browser back/forward
      window.addEventListener('popstate', function(e) {
        var st = e.state;
        // Intra-lesson Back/Forward: the course page is already on screen for the
        // same lesson → restore phase/step in place, no refetch/re-init (P0-2).
        if (st && st.page === 'course' && st.phase && typeof Course !== 'undefined' &&
            _current === 'course' && Course.lessonId === st.id &&
            document.getElementById('csCoursePage')) {
          Course.restore(st);
          return;
        }
        // Re-entering a specific lesson state from another page → load the course
        // fragment, then Course.init applies _restoreTo to land on the right step.
        if (st && st.page === 'course' && st.phase) {
          Course._pendingId = st.id;
          Course._restoreTo = { phase: st.phase, step: st.step };
        }
        var page = (st && st.page)
          ? st.page
          : _pageFromPath(window.location.pathname);
        _navigateTo(page, false);
      });

      // Handle hash-based routes (fallback for #/page or #page)
      window.addEventListener('hashchange', function() {
        var hash = window.location.hash.replace(/^#\/?/, '') || 'home';
        var page = hash === 'vocab' ? 'learn' : (_initMap.hasOwnProperty(hash) ? hash : 'home');
        _navigateTo(page, false);
      });

      // Initial navigation: honour URL path or hash for direct links / refresh
      var initialHash = window.location.hash.replace(/^#\/?/, '');
      var initialPage = initialHash === 'vocab'
        ? 'learn'
        : (initialHash && _initMap.hasOwnProperty(initialHash)
          ? initialHash
          : _pageFromPath(window.location.pathname));
      Router.currentPage = initialPage;
      _navigateTo(initialPage, false);

      // Replace current history entry so popstate has state on first back.
      // Skip if OAuth callback params are present — Supabase reads ?code= and
      // #access_token= lazily (when onAuthStateChange fires), so stripping them
      // here would prevent Google OAuth from completing.
      var hasOAuthParams = window.location.search.includes('code=') ||
                           window.location.hash.includes('access_token=');
      if (!hasOAuthParams) {
        var initPath = initialPage === 'home' ? '/' : '/' + initialPage;
        if (window.location.search) initPath += window.location.search;
        history.replaceState({ page: initialPage }, '', initPath);
      }
    },

    navigateTo: function(page, pushState) {
      Router.currentPage = page;
      _navigateTo(page, pushState);
    }
  };

}());

// ── Backward-compat global functions ──────────────────
function setupRouting() { Router.setup(); }
function navigateTo(page) { Router.navigateTo(page); }
