// ═══════════════════════════════════════════════════════
// ADMIN.JS — Admin Dashboard (K.8)
// • Only accessible to ADMIN_EMAIL
// • Reads via SECURITY DEFINER RPCs from Supabase
// ═══════════════════════════════════════════════════════

var Admin = (function() {

  var ADMIN_EMAIL = 'dev.tiro.06@gmail.com';
  var _users = [];

  function isAdmin() {
    return !!(window.Auth && Auth.user && Auth.user.email === ADMIN_EMAIL);
  }

  async function setup() {
    if (!isAdmin()) {
      var page = document.getElementById('adminPage');
      if (page) {
        page.innerHTML =
          '<div class="admin-header"><h1>🚫 Không có quyền</h1>' +
          '<p class="admin-sub">Trang này chỉ dành cho quản trị viên.</p>' +
          '<button class="admin-btn-secondary" onclick="Router.navigateTo(\'home\')">← Về trang chủ</button></div>';
      }
      return;
    }

    var emailEl = document.getElementById('adminEmail');
    if (emailEl) emailEl.textContent = Auth.user.email;

    _bindEvents();
    await _loadStats();
    await _loadUsers();
  }

  function _bindEvents() {
    document.querySelectorAll('.admin-tab').forEach(function(t) {
      t.addEventListener('click', function() {
        var tab = this.dataset.tab;
        document.querySelectorAll('.admin-tab').forEach(function(x) {
          x.classList.toggle('active', x.dataset.tab === tab);
        });
        document.getElementById('adminTabUsers').style.display  = tab === 'users' ? '' : 'none';
        document.getElementById('adminTabGrant').style.display  = tab === 'grant' ? '' : 'none';
      });
    });

    var refresh = document.getElementById('adminRefresh');
    if (refresh) refresh.addEventListener('click', function() {
      _loadStats(); _loadUsers();
    });

    var search = document.getElementById('adminUserSearch');
    if (search) search.addEventListener('input', _renderUsers);

    var grant = document.getElementById('grantSubmit');
    if (grant) grant.addEventListener('click', _grantSubscription);

    var revoke = document.getElementById('revokeSubmit');
    if (revoke) revoke.addEventListener('click', _revokeSubscription);
  }

  async function _loadStats() {
    if (!window.SB) return;
    var res = await SB.rpc('admin_stats');
    if (res.error) { console.error('[Admin] stats:', res.error); return; }
    var s = (res.data && res.data[0]) || {};
    document.getElementById('statTotalUsers').textContent = s.total_users || 0;
    document.getElementById('statActive7d').textContent   = s.active_7d || 0;
    document.getElementById('statPro').textContent        = s.pro_count || 0;
    document.getElementById('statBasic').textContent      = s.basic_count || 0;
    document.getElementById('statXP').textContent         = (s.total_xp || 0).toLocaleString();
  }

  async function _loadUsers() {
    if (!window.SB) return;
    var list = document.getElementById('adminUsersList');
    list.innerHTML = '<p class="admin-empty">Đang tải...</p>';

    var res = await SB.rpc('admin_list_users');
    if (res.error) {
      list.innerHTML = '<p class="admin-empty">Lỗi: ' + res.error.message + '</p>';
      return;
    }
    _users = res.data || [];
    _renderUsers();
  }

  function _renderUsers() {
    var list = document.getElementById('adminUsersList');
    if (!list) return;
    var q = (document.getElementById('adminUserSearch') || {}).value || '';
    q = q.toLowerCase().trim();

    var filtered = q ? _users.filter(function(u) {
      return (u.email || '').toLowerCase().indexOf(q) !== -1;
    }) : _users;

    if (!filtered.length) {
      list.innerHTML = '<p class="admin-empty">Không có user nào.</p>';
      return;
    }

    list.innerHTML = '<div class="admin-users-table">' +
      '<div class="aut-head">' +
        '<span>Email</span><span>Gói</span><span>XP</span><span>Streak</span><span>Hết hạn</span>' +
      '</div>' +
      filtered.map(function(u) {
        var planClass = 'aut-plan-' + (u.plan || 'free');
        var expires = u.expires_at ? new Date(u.expires_at).toLocaleDateString('vi-VN') : '—';
        return '<div class="aut-row">' +
          '<span class="aut-email" title="' + u.email + '">' + u.email + '</span>' +
          '<span class="aut-plan ' + planClass + '">' + (u.plan || 'free').toUpperCase() + '</span>' +
          '<span>' + (u.total_xp || 0) + '</span>' +
          '<span>' + (u.streak_days || 0) + '🔥</span>' +
          '<span>' + expires + '</span>' +
        '</div>';
      }).join('') +
    '</div>';
  }

  async function _grantSubscription() {
    var email = (document.getElementById('grantEmail').value || '').trim();
    var plan  = document.getElementById('grantPlan').value;
    var days  = parseInt(document.getElementById('grantDays').value, 10) || 30;
    var result = document.getElementById('grantResult');

    if (!email) { result.textContent = '⚠ Nhập email'; result.className = 'admin-result admin-result-error'; return; }

    result.textContent = 'Đang xử lý...';
    result.className = 'admin-result';

    var res = await SB.rpc('admin_grant_subscription', {
      target_email: email,
      target_plan: plan,
      days: days
    });

    if (res.error) {
      result.textContent = '❌ ' + res.error.message;
      result.className = 'admin-result admin-result-error';
    } else {
      result.textContent = '✅ ' + res.data;
      result.className = 'admin-result admin-result-ok';
      _loadStats(); _loadUsers();
    }
  }

  async function _revokeSubscription() {
    var email = (document.getElementById('grantEmail').value || '').trim();
    var result = document.getElementById('grantResult');

    if (!email) { result.textContent = '⚠ Nhập email'; result.className = 'admin-result admin-result-error'; return; }
    if (!confirm('Hủy gói của ' + email + '?')) return;

    var res = await SB.rpc('admin_revoke_subscription', { target_email: email });

    if (res.error) {
      result.textContent = '❌ ' + res.error.message;
      result.className = 'admin-result admin-result-error';
    } else {
      result.textContent = '✅ ' + res.data;
      result.className = 'admin-result admin-result-ok';
      _loadStats(); _loadUsers();
    }
  }

  return { setup: setup, isAdmin: isAdmin };
}());
