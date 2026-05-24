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

  // ── Route map: URL path → page name ─────────────────
  var _routes = {
    '/':               'home',
    '/home':           'home',
    '/dictionary':     'dictionary',
    '/grammar':        'grammar',
    '/reading':        'reading',
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
    '/learn-method':  'learn-method'
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
    'learn': function() {
      if (typeof setupDecks === 'function') setupDecks();
      if (typeof Session !== 'undefined') Session.setup();
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
      if (typeof Pricing !== 'undefined') Pricing._checkReturnUrl();
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
    }
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

  // ── Update nav highlights ────────────────────────────
  function _updateNav(page) {
    document.querySelectorAll('[data-page]').forEach(function(el) {
      el.classList.toggle('active', el.dataset.page === page);
    });
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
    if (_pending) return;
    page = page || 'home';
    if (page.charAt(0) === '/') page = page.slice(1) || 'home';
    _pending = true;
    var content = document.getElementById('content');

    _fetchFragment(page)
      .then(function(html) {
        if (content) content.innerHTML = html;
        try {
          if (_initMap[page]) _initMap[page]();
        } catch(e) {
          console.error('[Router] initPageModule ' + page + ' failed:', e);
        }
        if (pushState !== false) {
          var path = page === 'home' ? '/' : '/' + page;
          history.pushState({ page: page }, '', path);
        }
        _updateNav(page);
        _current = page;
        if (typeof window.updateMascot === 'function') window.updateMascot(page);
        window.scrollTo(0, 0);
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
      .then(function() { _pending = false; });
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
          el = el.parentElement;
        }
      });

      // Browser back/forward
      window.addEventListener('popstate', function(e) {
        var page = (e.state && e.state.page)
          ? e.state.page
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
