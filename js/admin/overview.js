// ═══════════════════════════════════════════════════════
// ADMIN/OVERVIEW.JS — Section 1: Tổng quan
// ═══════════════════════════════════════════════════════

var AdminOverview = (function() {
  var _charts = {};

  function init() {
    _loadStats();
    _loadRecentTx();
    _loadPendingFeedback();
    _checkHealth();
    _watchOnline();
    _loadChartJS(function() {
      loadRevChart();
      _loadUserChart();
    });
  }

  // ── Online realtime (Supabase Presence) — gồm cả khách chưa đăng nhập ──
  function _watchOnline() {
    if (typeof Presence === 'undefined' || !Presence.watch) return;
    Presence.watch(function(c) {
      _set('kpiOnline', Admin.fmt(c.total));
      var d = document.getElementById('kpiOnlineDetail');
      if (d) d.textContent = c.authed + ' đăng nhập · ' + c.anon + ' khách';
    });
  }

  async function _loadStats() {
    if (!window.SB) return;
    var res;
    try {
      res = await SB.rpc('admin_dashboard_stats');
    } catch (e) {
      console.error('[AdminOverview] admin_dashboard_stats threw:', e);
      res = { error: e };
    }
    // Trước đây lỗi RPC bị nuốt im lặng → mọi KPI hiện "—" không rõ lý do.
    // Giờ log + hiện "⚠️" để chẩn đoán được (xem Console để biết cột/RPC nào lỗi).
    if (res.error) {
      console.error('[AdminOverview] admin_dashboard_stats error:', res.error);
      ['kpiDAU','kpiRevMonth','kpiRetention','kpiProRatio'].forEach(function(id){ _set(id, '⚠️'); });
      return;
    }
    var s = (res.data && res.data[0]) || {};

    _set('kpiDAU',      Admin.fmt(s.dau));
    _setDelta('kpiDAUDelta', s.dau_delta, '%');
    _set('kpiRevMonth', Admin.fmtVND(s.revenue_month));
    _setDelta('kpiRevDelta', s.revenue_mom, '%');
    _set('kpiRetention', s.retention_d7 == null ? '—' : s.retention_d7 + '%');
    _setDelta('kpiRetDelta', s.retention_delta, '%');

    var pro   = s.pro_active || 0;
    var total = s.total_users || 1;
    _set('kpiProRatio', Admin.fmt(pro) + ' / ' + Admin.fmt(s.total_users));
    var bar = document.getElementById('kpiProBar');
    if (bar) bar.style.width = Math.round((pro / total) * 100) + '%';
  }

  async function _loadRecentTx() {
    if (!window.SB) return;
    var res = await SB.rpc('admin_recent_transactions', { p_limit: 5 });
    var el = document.getElementById('ovRecentTx');
    if (!el) return;
    if (res.error || !res.data || !res.data.length) {
      el.innerHTML = '<p class="adm-empty">Chưa có giao dịch nào.</p>';
      return;
    }
    var rows = res.data.map(function(r) {
      var badgeHtml = _statusBadge(r.status);
      var rowCls = r.status === 'failed' ? 'tbl-row-danger' : '';
      return '<tr class="' + rowCls + '">' +
        '<td class="adm-muted adm-nowrap">' + Admin.relTime(r.created_at) + '</td>' +
        '<td class="adm-truncate" style="max-width:180px" title="' + (r.user_email || '') + '">' + _truncEmail(r.user_email) + '</td>' +
        '<td class="adm-nowrap">' + (r.duration || r.plan || '—') + '</td>' +
        '<td class="adm-tabular adm-nowrap" style="text-align:right;font-weight:600">' + Admin.fmtVND(r.amount) + '</td>' +
        '<td>' + badgeHtml + '</td>' +
      '</tr>';
    }).join('');
    el.innerHTML = '<table class="adm-tbl"><thead><tr><th>Thời gian</th><th>User</th><th>Gói</th><th style="text-align:right">Số tiền</th><th>Trạng thái</th></tr></thead><tbody>' + rows + '</tbody></table>';
  }

  async function _loadPendingFeedback() {
    if (!window.SB) return;
    var res = await SB.rpc('admin_pending_feedback', { p_limit: 5 });
    var el = document.getElementById('ovPendingFeedback');
    if (!el) return;
    if (res.error || !res.data || !res.data.length) {
      el.innerHTML = '<p class="adm-empty">Không có góp ý nào chờ trả lời.</p>';
      return;
    }
    var rows = res.data.map(function(r) {
      var pBadge = window.AdminUI
        ? (r.priority === 'high' || r.priority === 'urgent'
            ? AdminUI.badge('danger', 'Khẩn')
            : r.priority === 'normal'
              ? AdminUI.badge('warning', 'Bình thường')
              : AdminUI.badge('neutral', 'Thấp'))
        : r.priority;
      return '<tr>' +
        '<td class="adm-muted adm-nowrap">' + Admin.relTime(r.created_at) + '</td>' +
        '<td class="adm-nowrap">' + (r.display_name || r.user_email || 'Ẩn danh') + '</td>' +
        '<td class="adm-truncate" style="max-width:220px">' + (r.subject || r.category || '—') + '</td>' +
        '<td>' + pBadge + '</td>' +
      '</tr>';
    }).join('');
    el.innerHTML = '<table class="adm-tbl"><thead><tr><th style="width:100px">Thời gian</th><th style="width:110px">User</th><th>Subject</th><th style="width:90px">Ưu tiên</th></tr></thead><tbody>' + rows + '</tbody></table>';

    var badge = document.getElementById('navFeedbackBadge');
    if (badge) {
      badge.textContent = res.data.length;
      badge.style.display = res.data.length > 0 ? '' : 'none';
    }
  }

  async function _checkHealth() {
    var healthItems = [];
    var ts = new Date().toLocaleTimeString('vi-VN');

    // Supabase ping
    var supaState = 'warn';
    var supaLabel = 'Supabase…';
    if (window.SB) {
      try {
        var r = await SB.rpc('admin_system_health');
        supaState = r.error ? 'bad' : 'ok';
        supaLabel = r.error ? 'Supabase ' + r.error.code : 'Supabase OK';
      } catch(e) {
        supaState = 'bad'; supaLabel = 'Supabase unreachable';
      }
    }
    healthItems.push({ state: supaState, label: supaLabel });

    // PayOS
    var poState = 'warn', poLabel = 'PayOS webhook —';
    if (window.SB) {
      try {
        var res = await SB.rpc('admin_recent_transactions', { p_limit: 1 });
        poState = res.error ? 'bad' : 'ok';
        poLabel = res.error ? 'PayOS webhook error' : 'PayOS webhook OK';
      } catch(e) { poState = 'warn'; poLabel = 'PayOS webhook không kiểm tra được'; }
    }
    healthItems.push({ state: poState, label: poLabel });
    healthItems.push({ state: 'warn', label: 'Edge Functions — xem Dashboard' });
    healthItems.push({ state: 'ok',   label: 'CF Pages OK' });

    var strip = document.getElementById('ovHealth');
    if (!strip) return;
    var partsHtml = healthItems.map(function(h) {
      return '<span class="hv2-item h-' + h.state + '"><span class="hv2-pulse"></span>' + h.label + '</span>';
    }).join('<span class="hv2-sep"></span>');
    strip.innerHTML = partsHtml + '<span class="hv2-ts">Sync lần cuối · ' + ts + '</span>';
  }

  async function loadRevChart() {
    var canvas = document.getElementById('chartRevenue');
    if (!canvas || !window.Chart) return;
    if (_charts.revenue) { _charts.revenue.destroy(); }

    var labels = [], data = [];
    if (window.SB) {
      var res = await SB.rpc('admin_revenue_30d');
      if (!res.error && res.data) {
        res.data.forEach(function(r) {
          labels.push(_fmtDay(r.day));
          data.push(r.revenue || 0);
        });
      }
    }
    if (!labels.length) {
      labels = _last30Labels();
      data   = labels.map(function() { return 0; });
    }

    _charts.revenue = new Chart(canvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Doanh thu (VND)',
          data: data,
          borderColor: '#DC2626',
          backgroundColor: 'rgba(220,38,38,.12)',
          fill: true,
          tension: 0.4,
          pointRadius: 3,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { ticks: { callback: function(v) { return (v/1000) + 'k'; } } },
          x: { ticks: { maxTicksLimit: 7 } }
        }
      }
    });
  }

  async function _loadUserChart() {
    var canvas = document.getElementById('chartUsers');
    if (!canvas || !window.Chart) return;
    if (_charts.users) { _charts.users.destroy(); }

    var labels = [], newFree = [], newPro = [];
    if (window.SB) {
      var res = await SB.rpc('admin_user_growth_30d');
      if (!res.error && res.data) {
        res.data.forEach(function(r) {
          labels.push(_fmtDay(r.day));
          newFree.push(r.new_free || 0);
          newPro.push(r.new_pro || 0);
        });
      }
    }
    if (!labels.length) {
      labels = _last30Labels();
      newFree = labels.map(function() { return 0; });
      newPro  = labels.map(function() { return 0; });
    }

    _charts.users = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          { label: 'Free mới', data: newFree, backgroundColor: '#6B7280', borderRadius: 4 },
          { label: 'Nâng Pro', data: newPro,  backgroundColor: '#DC2626', borderRadius: 4 }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'top', labels: { font: { size: 11 } } } },
        scales: {
          x: { stacked: true, ticks: { maxTicksLimit: 7 } },
          y: { stacked: true }
        }
      }
    });
  }

  // ── Helpers ──

  function _loadChartJS(cb) {
    if (window.Chart) { cb(); return; }
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
    s.onload = cb;
    s.onerror = function() { console.warn('[AdminOverview] Chart.js failed to load'); };
    document.head.appendChild(s);
  }

  function _set(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val !== undefined ? val : '—';
  }

  function _setDelta(id, delta, suffix) {
    var el = document.getElementById(id);
    if (!el) return;
    if (delta === null || delta === undefined) { el.textContent = ''; return; }
    var v = parseFloat(delta);
    el.textContent = (v >= 0 ? '+' : '') + v.toFixed(1) + (suffix || '');
    el.className = 'kpi-delta ' + (v >= 0 ? 'up' : 'down');
  }

  function _truncEmail(e) {
    if (!e) return '—';
    var parts = e.split('@');
    if (parts.length !== 2) return e;
    var user = parts[0];
    if (user.length > 8) user = user.slice(0, 6) + '..';
    return user + '@' + parts[1];
  }

  function _statusBadge(s) {
    if (window.AdminUI) {
      var map = { paid: ['success','Đã thanh toán'], pending: ['warning','Đang chờ'], failed: ['danger','Thất bại'], expired: ['neutral','Hết hạn'] };
      var args = map[s] || ['neutral', s || '—'];
      return AdminUI.badge(args[0], args[1]);
    }
    var map = { paid: 'badge-paid', pending: 'badge-pending', failed: 'badge-failed', expired: 'badge-expired' };
    var label = { paid: 'Đã TT', pending: 'Chờ', failed: 'Lỗi', expired: 'Hết hạn' };
    return '<span class="adm-badge ' + (map[s] || 'badge-expired') + '">' + (label[s] || s) + '</span>';
  }

  function _fmtDay(d) {
    if (!d) return '';
    var dt = new Date(d);
    return (dt.getMonth() + 1) + '/' + dt.getDate();
  }

  function _last30Labels() {
    var labels = [];
    for (var i = 29; i >= 0; i--) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      labels.push((d.getMonth() + 1) + '/' + d.getDate());
    }
    return labels;
  }

  return {
    init:         init,
    loadRevChart: loadRevChart
  };
}());
