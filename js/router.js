// ═══════════════════════════════════════════════════════
// ROUTER.JS — Client-side page navigation
// • Owns: navigateTo(), setupRouting()
// • No state, no data dependency
// • Input: page name (string)
// • Output: DOM class changes only
// ═══════════════════════════════════════════════════════

var Router = {
  currentPage: null,

  setup: function() {
    document.querySelectorAll('[data-page]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        Router.navigateTo(link.dataset.page);
      });
    });
  },

  navigateTo: function(page) {
    document.querySelectorAll('.page').forEach(function(p) {
      p.classList.remove('active');
    });
    document.querySelectorAll('[data-page]').forEach(function(l) {
      l.classList.remove('active');
    });
    const target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');
    document.querySelectorAll('[data-page="' + page + '"]').forEach(function(l) {
      l.classList.add('active');
    });
    Router.currentPage = page;
  },
};

// ── Backward-compat global functions ──────────────────
function setupRouting() { Router.setup(); }
function navigateTo(page) { Router.navigateTo(page); }
