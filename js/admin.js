// ═══════════════════════════════════════════════════════
// ADMIN.JS — Admin Dashboard Shell + Nav Router (v2.0)
// Internal tool: requires ADMIN_EMAIL JWT.
// Sub-modules: js/admin/{overview,users,payments,content,quest,feedback,system}.js
// ═══════════════════════════════════════════════════════

var Admin = (function() {

  var ADMIN_EMAIL = 'dev.tiro.06@gmail.com';
  var _currentSection = 'overview';
  var _sectionLabels = {
    overview: 'Tổng quan',
    users:    'Người dùng',
    payments: 'Thanh toán',
    content:  'Nội dung',
    quest:    'Quest & Token',
    feedback: 'Góp ý',
    system:   'Hệ thống'
  };

  // Map section id → init function (loaded from sub-modules)
  var _initMap = {
    overview: function() { if (window.AdminOverview) AdminOverview.init(); },
    users:    function() { if (window.AdminUsers)    AdminUsers.init(); },
    payments: function() { if (window.AdminPayments) AdminPayments.init(); },
    content:  function() { if (window.AdminContent)  AdminContent.init(); },
    quest:    function() { if (window.AdminQuest)    AdminQuest.init(); },
    feedback: function() { if (window.AdminFeedback) AdminFeedback.init(); },
    system:   function() { if (window.AdminSystem)   AdminSystem.init(); }
  };
  var _initialized = {};

  function isAdmin() {
    return !!(window.Auth && Auth.user && Auth.user.email === ADMIN_EMAIL);
  }

  async function setup() {
    var shell = document.getElementById('adminShell');
    if (!shell) return;

    if (!isAdmin()) {
      var denied = document.getElementById('adminDenied');
      if (denied) denied.style.display = '';
      var nav  = document.getElementById('adminNav');
      var main = document.getElementById('adminMain');
      if (nav)  nav.style.display  = 'none';
      if (main) main.style.display = 'none';
      return;
    }

    var emailEl = document.getElementById('adminNavEmail');
    if (emailEl) emailEl.textContent = Auth.user.email;

    _bindNav();
    _bindSearch();
    navTo('overview');
  }

  function _bindNav() {
    document.querySelectorAll('.an-item[data-s]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        navTo(btn.dataset.s);
      });
    });
  }

  function _bindSearch() {
    var s = document.getElementById('adminSearch');
    if (!s) return;
    s.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        var q = s.value.trim();
        if (!q) return;
        // Route to users search if looks like email, else stay
        if (q.indexOf('@') !== -1) {
          navTo('users');
          setTimeout(function() {
            var us = document.getElementById('usersSearch');
            if (us) { us.value = q; us.dispatchEvent(new Event('input')); }
          }, 300);
        }
      }
    });
  }

  function navTo(section) {
    if (!_sectionLabels[section]) return;
    _currentSection = section;

    // Update nav buttons
    document.querySelectorAll('.an-item[data-s]').forEach(function(b) {
      b.classList.toggle('active', b.dataset.s === section);
    });

    // Update breadcrumb
    var label = document.getElementById('adminSectionLabel');
    if (label) label.textContent = _sectionLabels[section];

    // Show/hide sections
    document.querySelectorAll('.adm-section').forEach(function(sec) {
      sec.style.display = 'none';
    });
    var target = document.getElementById('adminSection' + _capitalize(section));
    if (target) target.style.display = '';

    // Init section once (lazy)
    if (!_initialized[section]) {
      _initialized[section] = true;
      if (_initMap[section]) _initMap[section]();
    }

    // Always re-init feedback to refresh unread badge
    if (section === 'feedback' && window.AdminFeedback) {
      AdminFeedback.refreshList();
    }
  }

  function _capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  // ── Grant subscription (legacy wrappers, kept for compatibility) ──
  async function _grantSubscription() {
    var email    = (document.getElementById('grantEmail').value || '').trim();
    var duration = document.getElementById('grantDuration').value;
    var days     = parseInt(document.getElementById('grantDays').value, 10) || 30;
    var result   = document.getElementById('grantResult');
    if (!email) { _setResult(result, '⚠ Nhập email', false); return; }
    _setResult(result, 'Đang xử lý...', null);
    var res = await SB.rpc('admin_grant_subscription', { target_email: email, target_duration: duration, days: days });
    if (res.error) _setResult(result, '❌ ' + res.error.message, false);
    else           _setResult(result, '✅ ' + res.data, true);
  }

  async function _revokeSubscription() {
    var email = (document.getElementById('grantEmail').value || '').trim();
    var result = document.getElementById('grantResult');
    if (!email) { _setResult(result, '⚠ Nhập email', false); return; }
    if (!confirm('Hủy gói của ' + email + '?')) return;
    var res = await SB.rpc('admin_revoke_subscription', { target_email: email });
    if (res.error) _setResult(result, '❌ ' + res.error.message, false);
    else           _setResult(result, '✅ ' + res.data, true);
  }

  function _setResult(el, msg, ok) {
    if (!el) return;
    el.textContent = msg;
    el.className = 'adm-result' + (ok === true ? ' adm-result-ok' : ok === false ? ' adm-result-err' : '');
  }

  // Public helpers
  function fmt(n) {
    return Number(n || 0).toLocaleString('vi-VN');
  }
  function fmtVND(n) {
    return Number(n || 0).toLocaleString('vi-VN') + '₫';
  }
  function relTime(ts) {
    if (!ts) return '—';
    var diff = Date.now() - new Date(ts).getTime();
    var m = Math.floor(diff / 60000);
    if (m < 1)   return 'vừa xong';
    if (m < 60)  return m + 'ph';
    var h = Math.floor(m / 60);
    if (h < 24)  return h + 'h';
    var d = Math.floor(h / 24);
    if (d < 7)   return d + 'n';
    return new Date(ts).toLocaleDateString('vi-VN');
  }
  function absDate(ts) {
    if (!ts) return '—';
    return new Date(ts).toLocaleString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  // Bind grant/revoke buttons when section shown
  document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'usersGrantBtn') {
      var card = document.getElementById('usersGrantCard');
      if (card) card.style.display = card.style.display === 'none' ? '' : 'none';
    }
    if (e.target && e.target.id === 'usersGrantClose') {
      var card = document.getElementById('usersGrantCard');
      if (card) card.style.display = 'none';
    }
    if (e.target && e.target.id === 'grantSubmit')  _grantSubscription();
    if (e.target && e.target.id === 'revokeSubmit') _revokeSubscription();
  });

  return {
    setup:    setup,
    isAdmin:  isAdmin,
    navTo:    navTo,
    fmt:      fmt,
    fmtVND:   fmtVND,
    relTime:  relTime,
    absDate:  absDate
  };
}());
