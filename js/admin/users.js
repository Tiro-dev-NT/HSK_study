// ═══════════════════════════════════════════════════════
// ADMIN/USERS.JS — Section 2: Người dùng
// Table + side panel + grant/revoke subscription
// ═══════════════════════════════════════════════════════

var AdminUsers = (function() {
  var _users = [];
  var _selectedUserId = null;
  var _page = 1;
  var _pageSize = 50;
  var _tierFilter = '';
  var _checked = {};

  function init() {
    _bindFilters();
    _bindPanel();
    _loadUsers();
  }

  function _bindFilters() {
    var search = document.getElementById('usersSearch');
    if (search) search.addEventListener('input', function() { _page = 1; _renderTable(); });

    document.querySelectorAll('#usersTierChips .adm-chip').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('#usersTierChips .adm-chip').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        _tierFilter = btn.dataset.tier || '';
        _page = 1;
        _renderTable();
      });
    });

    var exportBtn = document.getElementById('usersExportBtn');
    if (exportBtn) exportBtn.addEventListener('click', _exportCSV);
  }

  function _bindPanel() {
    var closeBtn = document.getElementById('aspClose');
    if (closeBtn) closeBtn.addEventListener('click', _closePanel);

    document.addEventListener('click', function(e) {
      if (e.target && e.target.id === 'aspSuspend') _suspendUser();
      if (e.target && e.target.id === 'aspResetPwd') _resetPwd();
    });

    // Panel tabs
    document.addEventListener('click', function(e) {
      var tab = e.target.closest && e.target.closest('.asp-tab[data-ptab]');
      if (!tab) return;
      document.querySelectorAll('.asp-tab').forEach(function(t) { t.classList.remove('active'); });
      tab.classList.add('active');
      _loadPanelTab(tab.dataset.ptab);
    });
  }

  async function _loadUsers() {
    var wrap = document.getElementById('usersTableWrap');
    if (wrap) wrap.innerHTML = '<p class="adm-empty">Đang tải...</p>';
    if (!window.SB) return;

    var res = await SB.rpc('admin_list_users');
    if (res.error) {
      if (wrap) wrap.innerHTML = '<p class="adm-empty">Lỗi: ' + res.error.message + '</p>';
      return;
    }
    _users = res.data || [];
    _renderTable();
  }

  function _renderTable() {
    var wrap = document.getElementById('usersTableWrap');
    var countEl = document.getElementById('usersCount');
    if (!wrap) return;

    var q = ((document.getElementById('usersSearch') || {}).value || '').toLowerCase().trim();
    var filtered = _users.filter(function(u) {
      if (_tierFilter && (u.plan || 'free') !== _tierFilter) return false;
      if (q && (u.email || '').toLowerCase().indexOf(q) === -1) return false;
      return true;
    });

    if (countEl) countEl.textContent = 'Hiển thị ' + Math.min(filtered.length, _pageSize * _page) + ' / ' + filtered.length;

    if (!filtered.length) {
      wrap.innerHTML = '<p class="adm-empty">Không có user nào.</p>';
      document.getElementById('usersPagination').innerHTML = '';
      return;
    }

    var start = (_page - 1) * _pageSize;
    var page  = filtered.slice(start, start + _pageSize);

    var rows = page.map(function(u) {
      var plan  = u.plan || 'free';
      var planBadge = plan === 'pro'
        ? '<span class="adm-badge badge-pro">💎 PRO' + (u.duration ? ' · ' + u.duration : '') + '</span>'
        : '<span class="adm-badge badge-free">Free</span>';
      var expires = u.duration === 'lifetime' ? '∞'
        : u.expires_at ? new Date(u.expires_at).toLocaleDateString('vi-VN') : '—';
      var sel = _checked[u.user_id] ? ' adm-selected' : '';
      return '<tr class="adm-clickable' + sel + '" data-uid="' + u.user_id + '">' +
        '<td style="width:32px"><input type="checkbox" class="user-chk" data-uid="' + u.user_id + '"' + (sel ? ' checked' : '') + '></td>' +
        '<td><div style="font-weight:700;font-size:12px">' + (u.display_name || '') + '</div><div style="font-size:11px;color:#6B7280">' + u.email + '</div></td>' +
        '<td>' + planBadge + '</td>' +
        '<td>' + (u.streak_days || 0) + ' 🔥</td>' +
        '<td>' + Admin.relTime(u.last_active) + '</td>' +
        '<td>' + Admin.fmt(u.total_xp) + '</td>' +
        '<td>' + Admin.fmt(u.token_balance) + '</td>' +
        '<td>' + expires + '</td>' +
        '<td>' + new Date(u.joined_at || u.created_at || 0).toLocaleDateString('vi-VN') + '</td>' +
        '<td><button class="adm-btn-ghost" data-uid="' + u.user_id + '" onclick="AdminUsers.openPanel(\'' + u.user_id + '\')">⋯</button></td>' +
      '</tr>';
    }).join('');

    wrap.innerHTML = '<table class="adm-table">' +
      '<thead><tr>' +
        '<th><input type="checkbox" id="chkAll"></th>' +
        '<th>Tên · Email</th><th>Tier</th><th>Streak</th>' +
        '<th>Last active</th><th>XP</th><th>Tokens</th>' +
        '<th>Hết hạn</th><th>Joined</th><th></th>' +
      '</tr></thead><tbody>' + rows + '</tbody></table>';

    // Bind row click to open panel
    wrap.querySelectorAll('tr[data-uid]').forEach(function(tr) {
      tr.addEventListener('click', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') return;
        openPanel(tr.dataset.uid);
      });
    });

    // Bind checkboxes
    wrap.querySelectorAll('.user-chk').forEach(function(cb) {
      cb.addEventListener('change', function() {
        _checked[cb.dataset.uid] = cb.checked;
        _updateBulkBar();
      });
    });

    var chkAll = document.getElementById('chkAll');
    if (chkAll) {
      chkAll.addEventListener('change', function() {
        page.forEach(function(u) { _checked[u.user_id] = chkAll.checked; });
        _renderTable();
      });
    }

    _renderPagination(filtered.length);
  }

  function _renderPagination(total) {
    var pg = document.getElementById('usersPagination');
    if (!pg) return;
    var pages = Math.ceil(total / _pageSize);
    if (pages <= 1) { pg.innerHTML = ''; return; }
    var btns = '';
    if (_page > 1) btns += '<button class="adm-page-btn" onclick="AdminUsers.goPage(' + (_page-1) + ')">← Trước</button>';
    for (var i = 1; i <= Math.min(pages, 10); i++) {
      btns += '<button class="adm-page-btn' + (i === _page ? ' active' : '') + '" onclick="AdminUsers.goPage(' + i + ')">' + i + '</button>';
    }
    if (pages > 10) btns += '<span style="padding:0 8px">...</span>';
    if (_page < pages) btns += '<button class="adm-page-btn" onclick="AdminUsers.goPage(' + (_page+1) + ')">Sau →</button>';
    pg.innerHTML = btns;
  }

  function _updateBulkBar() {
    var count = Object.keys(_checked).filter(function(k) { return _checked[k]; }).length;
    var bar = document.getElementById('usersBulkBar');
    if (bar) bar.style.display = count > 0 ? '' : 'none';
    var cnt = document.getElementById('usersBulkCount');
    if (cnt) cnt.textContent = count + ' đã chọn ·';
  }

  function openPanel(userId) {
    _selectedUserId = userId;
    var user = _users.find(function(u) { return u.user_id === userId; });
    if (!user) return;

    document.querySelectorAll('tr[data-uid]').forEach(function(tr) {
      tr.classList.toggle('adm-selected', tr.dataset.uid === userId);
    });

    document.getElementById('aspName').textContent  = user.display_name || '—';
    document.getElementById('aspEmail').textContent = user.email || '—';
    var badge = document.getElementById('aspBadge');
    if (badge) {
      badge.textContent = user.plan === 'pro' ? '💎 PRO' : 'Free';
      badge.className = 'adm-badge ' + (user.plan === 'pro' ? 'badge-pro' : 'badge-free');
    }
    document.getElementById('usersSidePanel').style.display = '';
    document.getElementById('usersLayout').classList.add('panel-open');

    // Reset tabs to overview
    document.querySelectorAll('.asp-tab').forEach(function(t) { t.classList.toggle('active', t.dataset.ptab === 'overview'); });
    _loadPanelTab('overview', user);
  }

  async function _loadPanelTab(tab, userCache) {
    var body = document.getElementById('aspBody');
    if (!body) return;
    var user = userCache || _users.find(function(u) { return u.user_id === _selectedUserId; });

    if (tab === 'overview') {
      body.innerHTML = _renderOverviewTab(user);
    } else if (tab === 'srs' || tab === 'payments' || tab === 'activity') {
      body.innerHTML = '<p class="adm-empty">Đang tải...</p>';
      if (!window.SB) { body.innerHTML = '<p class="adm-empty">Cần Supabase</p>'; return; }
      var res = await SB.rpc('admin_user_detail', { p_user_id: _selectedUserId });
      if (res.error) { body.innerHTML = '<p class="adm-empty">Lỗi: ' + res.error.message + '</p>'; return; }
      var d = (res.data && res.data[0]) || {};
      if (tab === 'srs')       body.innerHTML = _renderSRSTab(d);
      if (tab === 'payments')  body.innerHTML = _renderPaymentsTab(d);
      if (tab === 'activity')  body.innerHTML = _renderActivityTab(d);
    }
  }

  function _renderOverviewTab(u) {
    if (!u) return '<p class="adm-empty">Không tìm thấy user.</p>';
    var rows = [
      ['User ID', u.user_id || '—'],
      ['Email', u.email || '—'],
      ['Tên hiển thị', u.display_name || '—'],
      ['Gói', u.plan || 'free'],
      ['Hết hạn', u.duration === 'lifetime' ? '∞ Vĩnh viễn' : Admin.absDate(u.expires_at)],
      ['XP tổng', Admin.fmt(u.total_xp)],
      ['Streak hiện tại', (u.streak_days || 0) + ' ngày 🔥'],
      ['Token balance', Admin.fmt(u.token_balance)],
      ['AI Credit', Admin.fmt(u.ai_credit)],
      ['Đã học (HSK 2.0)', Admin.fmt(u.words_learned_v2)],
      ['Đã học (HSK 3.0)', Admin.fmt(u.words_learned_v3)],
      ['Joined', Admin.absDate(u.joined_at || u.created_at)],
    ];
    return rows.map(function(r) {
      return '<div class="asp-kv"><span class="asp-kv-key">' + r[0] + '</span><span class="asp-kv-val">' + r[1] + '</span></div>';
    }).join('');
  }

  function _renderSRSTab(d) {
    var srs = d.srs_stats || {};
    var rows = [
      ['Thẻ due hôm nay', Admin.fmt(srs.due_today)],
      ['Thẻ tổng', Admin.fmt(srs.total_cards)],
      ['Đã graduate', Admin.fmt(srs.graduated)],
      ['Avg interval', (srs.avg_interval || 0).toFixed(1) + ' ngày'],
      ['Lần ôn cuối', Admin.relTime(srs.last_review)],
    ];
    return '<h4 style="margin:0 0 10px;font-size:13px">SRS Stats (HSK 2.0 + 3.0)</h4>' +
      rows.map(function(r) {
        return '<div class="asp-kv"><span class="asp-kv-key">' + r[0] + '</span><span class="asp-kv-val">' + r[1] + '</span></div>';
      }).join('');
  }

  function _renderPaymentsTab(d) {
    var pays = d.payments || [];
    if (!pays.length) return '<p class="adm-empty">Chưa có giao dịch nào.</p>';
    return '<table class="adm-table"><thead><tr><th>Time</th><th>Gói</th><th>Số tiền</th><th>Trạng thái</th></tr></thead><tbody>' +
      pays.map(function(p) {
        return '<tr><td>' + Admin.relTime(p.created_at) + '</td><td>' + (p.duration || p.plan) + '</td><td>' + Admin.fmtVND(p.amount) + '</td><td>' + (p.status || '—') + '</td></tr>';
      }).join('') + '</tbody></table>';
  }

  function _renderActivityTab(d) {
    var acts = d.activity || [];
    if (!acts.length) return '<p class="adm-empty">Chưa có activity nào.</p>';
    return '<div style="display:flex;flex-direction:column;gap:8px">' +
      acts.map(function(a) {
        return '<div style="font-size:12px;background:var(--adm-surf2);padding:7px 10px;border-radius:6px">' +
          '<div style="font-weight:700">' + (a.event || '—') + '</div>' +
          '<div style="color:var(--adm-text3);font-size:11px">' + Admin.relTime(a.created_at) + '</div>' +
        '</div>';
      }).join('') + '</div>';
  }

  function _closePanel() {
    _selectedUserId = null;
    document.getElementById('usersSidePanel').style.display = 'none';
    document.getElementById('usersLayout').classList.remove('panel-open');
    document.querySelectorAll('tr[data-uid]').forEach(function(tr) { tr.classList.remove('adm-selected'); });
  }

  async function _suspendUser() {
    if (!_selectedUserId) return;
    var user = _users.find(function(u) { return u.user_id === _selectedUserId; });
    if (!user) return;
    if (!confirm('Suspend user ' + user.email + '? Họ sẽ mất quyền Pro 30 ngày.')) return;
    var res = await SB.rpc('admin_suspend_user', { p_user_id: _selectedUserId });
    if (res.error) alert('Lỗi: ' + res.error.message);
    else           alert('Đã suspend ' + user.email);
    _loadUsers();
  }

  async function _resetPwd() {
    if (!_selectedUserId) return;
    var user = _users.find(function(u) { return u.user_id === _selectedUserId; });
    if (!user || !user.email) return;
    if (!confirm('Gửi email reset password cho ' + user.email + '?')) return;
    var res = await SB.auth.resetPasswordForEmail(user.email);
    if (res.error) alert('Lỗi: ' + res.error.message);
    else alert('Đã gửi email reset password.');
  }

  function _exportCSV() {
    if (!_users.length) return;
    var header = 'Email,Plan,Duration,Streak,XP,Tokens,Expires,Joined\n';
    var rows = _users.map(function(u) {
      return [
        u.email, u.plan || 'free', u.duration || '',
        u.streak_days || 0, u.total_xp || 0, u.token_balance || 0,
        u.expires_at || '', u.joined_at || u.created_at || ''
      ].join(',');
    }).join('\n');
    var blob = new Blob([header + rows], { type: 'text/csv;charset=utf-8;' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'hanzigenz_users_' + new Date().toISOString().slice(0,10) + '.csv';
    a.click();
  }

  function goPage(p) {
    _page = p;
    _renderTable();
  }

  return {
    init:      init,
    openPanel: openPanel,
    goPage:    goPage
  };
}());
