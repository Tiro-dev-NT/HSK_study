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
    _loadChartJS(function() {
      loadRevChart();
      _loadUserChart();
    });
  }

  async function _loadStats() {
    if (!window.SB) return;
    var res = await SB.rpc('admin_dashboard_stats');
    var s = (res.data && res.data[0]) || {};

    _set('kpiDAU',      Admin.fmt(s.dau));
    _setDelta('kpiDAUDelta', s.dau_delta, '%');
    _set('kpiRevMonth', Admin.fmtVND(s.revenue_month));
    _setDelta('kpiRevDelta', s.revenue_mom, '%');
    _set('kpiRetention', (s.retention_d7 || '—') + '%');
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
      var badge = _statusBadge(r.status);
      return '<tr>' +
        '<td>' + Admin.relTime(r.created_at) + '</td>' +
        '<td title="' + (r.user_email || '') + '">' + _truncEmail(r.user_email) + '</td>' +
        '<td>' + (r.duration || r.plan || '—') + '</td>' +
        '<td style="font-weight:700">' + Admin.fmtVND(r.amount) + '</td>' +
        '<td>' + badge + '</td>' +
      '</tr>';
    }).join('');
    el.innerHTML = '<table class="adm-table"><thead><tr><th>Time</th><th>User</th><th>Gói</th><th>Số tiền</th><th>Trạng thái</th></tr></thead><tbody>' + rows + '</tbody></table>';
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
      var pBadge = r.priority === 'high'
        ? '<span class="adm-badge badge-critical">High</span>'
        : '<span class="adm-badge badge-normal">Normal</span>';
      return '<tr>' +
        '<td>' + Admin.relTime(r.created_at) + '</td>' +
        '<td>' + (r.display_name || r.user_email || 'Ẩn danh') + '</td>' +
        '<td>' + (r.subject || r.category || '—') + '</td>' +
        '<td>' + pBadge + '</td>' +
      '</tr>';
    }).join('');
    el.innerHTML = '<table class="adm-table"><thead><tr><th>Time</th><th>User</th><th>Chủ đề</th><th>Priority</th></tr></thead><tbody>' + rows + '</tbody></table>';

    var badge = document.getElementById('navFeedbackBadge');
    if (badge) {
      badge.textContent = res.data.length;
      badge.style.display = res.data.length > 0 ? '' : 'none';
    }
  }

  async function _checkHealth() {
    var ts = document.getElementById('healthTs');
    if (ts) ts.textContent = 'Kiểm tra ' + new Date().toLocaleTimeString('vi-VN');

    // Supabase ping
    var sbEl = document.getElementById('healthSupa');
    if (window.SB && sbEl) {
      try {
        var r = await SB.rpc('admin_system_health');
        if (!r.error) {
          sbEl.textContent = '🟢 Supabase OK';
        } else {
          sbEl.textContent = '🔴 Supabase ' + r.error.code;
        }
      } catch(e) {
        sbEl.textContent = '🔴 Supabase unreachable';
      }
    }

    // PayOS webhook — check via Edge function ping
    var poEl = document.getElementById('healthPayOS');
    if (poEl) {
      try {
        var res = await SB.rpc('admin_recent_transactions', { p_limit: 1 });
        poEl.textContent = res.error ? '🔴 PayOS webhook error' : '🟢 PayOS webhook OK';
      } catch(e) {
        poEl.textContent = '🟡 PayOS webhook — không kiểm tra được';
      }
    }

    var edgeEl = document.getElementById('healthEdge');
    if (edgeEl) edgeEl.textContent = '🟡 Edge Functions — xem Supabase Dashboard';
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
    var map = { paid: 'badge-paid', pending: 'badge-pending', failed: 'badge-failed', expired: 'badge-expired' };
    var label = { paid: '✓ Đã TT', pending: '… Chờ', failed: '✗ Lỗi', expired: '— Hết hạn' };
    var cls = map[s] || 'badge-expired';
    return '<span class="adm-badge ' + cls + '">' + (label[s] || s) + '</span>';
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
