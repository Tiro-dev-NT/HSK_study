// ═══════════════════════════════════════════════════════
// ADMIN/PAYMENTS.JS — Section 3: Thanh toán
// Transaction table + webhook log + sub-tabs
// ═══════════════════════════════════════════════════════

var AdminPayments = (function() {
  var _page = 1;
  var _pageSize = 20;
  var _statusFilter = '';

  function init() {
    _loadKPIs();
    _loadTransactions();
    _loadWebhookLog();
    _bindTabs();
    _bindFilters();
    document.getElementById('webhookRefresh') &&
      document.getElementById('webhookRefresh').addEventListener('click', _loadWebhookLog);
  }

  function _bindTabs() {
    document.querySelectorAll('#payMainTabs .adm-tab[data-ptab2]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('#payMainTabs .adm-tab').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        document.getElementById('payTabMain').style.display   = btn.dataset.ptab2 === 'main'  ? '' : 'none';
        document.getElementById('payTabHonor').style.display  = btn.dataset.ptab2 === 'honor' ? '' : 'none';
        document.getElementById('payTabAI').style.display     = btn.dataset.ptab2 === 'ai'    ? '' : 'none';
        if (btn.dataset.ptab2 === 'honor') _loadHonorPurchases();
        if (btn.dataset.ptab2 === 'ai')    _loadAICreditPurchases();
      });
    });
  }

  function _bindFilters() {
    var search = document.getElementById('paySearch');
    if (search) search.addEventListener('input', function() { _page = 1; _loadTransactions(); });
    var statusF = document.getElementById('payStatusFilter');
    if (statusF) statusF.addEventListener('change', function() {
      _statusFilter = statusF.value;
      _page = 1;
      _loadTransactions();
    });
  }

  async function _loadKPIs() {
    if (!window.SB) return;
    var res = await SB.rpc('admin_payment_kpis');
    if (res.error) return;
    var d = (res.data && res.data[0]) || {};
    _set('kpiPayToday', Admin.fmtVND(d.today_revenue));
    _set('kpiPayTodaySub', (d.today_count || 0) + ' giao dịch');
    _set('kpiPayPending', (d.pending_count || 0) + ' giao dịch');
    _set('kpiPayPendingSub', 'cần kiểm tra');
    _set('kpiPayRefund', Admin.fmtVND(d.refund_amount));
    _set('kpiPayRefundSub', (d.refund_count || 0) + ' user');
  }

  async function _loadTransactions() {
    var wrap = document.getElementById('payTableWrap');
    if (wrap) wrap.innerHTML = '<p class="adm-empty">Đang tải...</p>';
    if (!window.SB) return;

    var q = ((document.getElementById('paySearch') || {}).value || '').trim();
    var res = await SB.rpc('admin_list_payments', {
      p_limit:  _pageSize,
      p_offset: (_page - 1) * _pageSize,
      p_status: _statusFilter || null
    });
    if (res.error) {
      if (wrap) wrap.innerHTML = '<p class="adm-empty">Lỗi: ' + res.error.message + '</p>';
      return;
    }
    var data = (res.data || []).filter(function(r) {
      if (!q) return true;
      return (r.user_email || '').indexOf(q) !== -1 || (r.order_code || '').toString().indexOf(q) !== -1;
    });

    if (!data.length) {
      if (wrap) wrap.innerHTML = '<p class="adm-empty">Không có giao dịch nào.</p>';
      return;
    }

    var rows = data.map(function(r) {
      var statusBadge = _statusBadge(r.status);
      var rowCls = r.status === 'failed' ? ' class="row-danger"' : '';
      var txId = (r.order_code || r.id || '').toString();
      var txShort = txId.length > 12 ? txId.slice(0, 10) + '..' : txId;
      return '<tr' + rowCls + '>' +
        '<td>' + Admin.relTime(r.created_at) + '</td>' +
        '<td title="' + txId + '" style="cursor:pointer;font-family:monospace" onclick="navigator.clipboard.writeText(\'' + txId + '\')">' + txShort + ' 📋</td>' +
        '<td>' + (r.user_email || '—') + '</td>' +
        '<td>' + (r.duration || r.plan || r.order_type || '—') + '</td>' +
        '<td style="font-weight:700">' + Admin.fmtVND(r.amount) + '</td>' +
        '<td>' + statusBadge + '</td>' +
        '<td>' + (r.webhook_received ? '✓' : '—') + '</td>' +
        '<td><button class="adm-btn-ghost" onclick="AdminPayments.viewTx(\'' + r.id + '\')">View</button></td>' +
      '</tr>';
    }).join('');

    if (wrap) wrap.innerHTML = '<table class="adm-table">' +
      '<thead><tr><th>Time</th><th>TX ID</th><th>User</th><th>Gói</th><th>Số tiền</th><th>Trạng thái</th><th>Webhook</th><th></th></tr></thead>' +
      '<tbody>' + rows + '</tbody></table>';

    _renderPagination(res.total_count || data.length);
  }

  function _renderPagination(total) {
    var pg = document.getElementById('payPagination');
    if (!pg) return;
    var pages = Math.ceil(total / _pageSize);
    if (pages <= 1) { pg.innerHTML = ''; return; }
    var btns = '';
    for (var i = 1; i <= Math.min(pages, 10); i++) {
      btns += '<button class="adm-page-btn' + (i === _page ? ' active' : '') + '" onclick="AdminPayments.goPage(' + i + ')">' + i + '</button>';
    }
    pg.innerHTML = btns;
  }

  async function _loadWebhookLog() {
    var listEl = document.getElementById('webhookList');
    if (listEl) listEl.innerHTML = '<p class="adm-empty">Đang tải...</p>';
    if (!window.SB) return;

    var res = await SB.rpc('admin_payos_webhook_log', { p_limit: 30 });
    if (res.error || !res.data) {
      if (listEl) listEl.innerHTML = '<p class="adm-empty">Không có log nào.</p>';
      return;
    }
    if (listEl) listEl.innerHTML = res.data.map(function(w) {
      var ok = w.success !== false;
      return '<div class="adm-webhook-item' + (ok ? '' : ' wh-fail') + '">' +
        '<div class="adm-webhook-ts">' + Admin.relTime(w.received_at) + '</div>' +
        '<div class="adm-webhook-event">' + (ok ? '✓' : '✗') + ' ' + (w.event_type || 'payment.received') + '</div>' +
        '<div style="font-size:11px;color:var(--adm-text3)">' + (w.order_code ? 'Order: ' + w.order_code : '') + '</div>' +
      '</div>';
    }).join('');
  }

  async function _loadHonorPurchases() {
    var wrap = document.getElementById('honorTableWrap');
    if (wrap) wrap.innerHTML = '<p class="adm-empty">Đang tải...</p>';
    if (!window.SB) return;
    var res = await SB.from('user_honor_purchases').select('*, payment_order:payment_order_id(id,amount,status)').order('purchased_at', { ascending: false }).limit(50);
    if (res.error || !res.data || !res.data.length) {
      if (wrap) wrap.innerHTML = '<p class="adm-empty">Chưa có giao dịch Hộp Ân Cần nào.</p>';
      return;
    }
    var rows = res.data.map(function(r) {
      return '<tr>' +
        '<td>' + Admin.relTime(r.purchased_at) + '</td>' +
        '<td>' + (r.user_id || '').slice(0, 8) + '..</td>' +
        '<td>' + (r.outfit_id || '—') + '</td>' +
        '<td>' + (r.month_year || '—') + '</td>' +
        '<td>' + Admin.fmtVND(r.amount_paid) + '</td>' +
      '</tr>';
    }).join('');
    if (wrap) wrap.innerHTML = '<table class="adm-table"><thead><tr><th>Time</th><th>User</th><th>Outfit</th><th>Tháng</th><th>Số tiền</th></tr></thead><tbody>' + rows + '</tbody></table>';
  }

  async function _loadAICreditPurchases() {
    var wrap = document.getElementById('aiCreditTableWrap');
    if (wrap) wrap.innerHTML = '<p class="adm-empty">Đang tải...</p>';
    if (!window.SB) return;
    var res = await SB.from('ai_credit_ledger')
      .select('user_id, amount, task_type, reason, balance_after, created_at')
      .eq('task_type', 'purchase')
      .order('created_at', { ascending: false })
      .limit(50);
    if (res.error || !res.data || !res.data.length) {
      if (wrap) wrap.innerHTML = '<p class="adm-empty">Chưa có giao dịch AI Credit nào.</p>';
      return;
    }
    var rows = res.data.map(function(r) {
      return '<tr>' +
        '<td>' + Admin.relTime(r.created_at) + '</td>' +
        '<td>' + (r.user_id || '').slice(0, 8) + '..</td>' +
        '<td style="font-weight:700;color:var(--adm-thuy)">+' + r.amount + ' credits</td>' +
        '<td>' + (r.reason || '—') + '</td>' +
        '<td>' + r.balance_after + ' credits</td>' +
      '</tr>';
    }).join('');
    if (wrap) wrap.innerHTML = '<table class="adm-table"><thead><tr><th>Time</th><th>User</th><th>Credits</th><th>Lý do</th><th>Balance sau</th></tr></thead><tbody>' + rows + '</tbody></table>';
  }

  function viewTx(id) {
    // TODO: show transaction detail modal
    alert('TX detail: ' + id + '\n\nChức năng xem chi tiết đang phát triển.');
  }

  function goPage(p) {
    _page = p;
    _loadTransactions();
  }

  function _statusBadge(s) {
    var map = { paid: 'badge-paid Đã thanh toán', pending: 'badge-pending Đang chờ', failed: 'badge-failed Thất bại', expired: 'badge-expired Hết hạn' };
    var parts = (map[s] || 'badge-expired ' + (s || '?')).split(' ');
    var cls   = parts.shift();
    return '<span class="adm-badge ' + cls + '">' + parts.join(' ') + '</span>';
  }

  function _set(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val !== undefined ? val : '—';
  }

  return {
    init:    init,
    viewTx:  viewTx,
    goPage:  goPage
  };
}());
