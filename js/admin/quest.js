// ═══════════════════════════════════════════════════════
// ADMIN/QUEST.JS — Section 5: Quest & Token
// Token stats + top earners + manual adjust
// ═══════════════════════════════════════════════════════

var AdminQuest = (function() {
  var _chart = null;

  function init() {
    _loadStats();
    _loadTopEarners();
    _bindAdjustForm();
    _bindGrantCreditForm();
    _loadChartJS(function() { _loadTokenChart(); });
  }

  async function _loadStats() {
    if (!window.SB) return;
    var res = await SB.rpc('admin_token_stats');
    if (res.error) return;
    var s = (res.data && res.data[0]) || {};
    _set('kpiTokenOut',    Admin.fmt(s.tokens_outstanding));
    _set('kpiQuestComp',   (s.quest_completion_rate || 0).toFixed(1) + '%');
    _set('kpiTokenEarners', Admin.fmt(s.earners_today));
  }

  async function _loadTopEarners() {
    var wrap = document.getElementById('topEarnersWrap');
    if (wrap) wrap.innerHTML = '<p class="adm-empty">Đang tải...</p>';
    if (!window.SB) return;

    var res = await SB.rpc('admin_top_earners', { p_limit: 20 });
    if (res.error || !res.data || !res.data.length) {
      if (wrap) wrap.innerHTML = '<p class="adm-empty">Chưa có dữ liệu token.</p>';
      return;
    }
    var rows = res.data.map(function(u, i) {
      var medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1) + '.';
      return '<tr>' +
        '<td>' + medal + '</td>' +
        '<td style="font-size:11px">' + (u.email || u.user_id || '—') + '</td>' +
        '<td style="font-weight:800;color:var(--adm-hoang)">' + Admin.fmt(u.token_balance) + ' 🪙</td>' +
        '<td>' + Admin.fmt(u.lifetime_earned) + '</td>' +
        '<td>' + Admin.relTime(u.last_active) + '</td>' +
      '</tr>';
    }).join('');
    if (wrap) wrap.innerHTML = '<table class="adm-table"><thead><tr><th>#</th><th>User</th><th>Balance</th><th>Lifetime</th><th>Last active</th></tr></thead><tbody>' + rows + '</tbody></table>';
  }

  async function _loadTokenChart() {
    var canvas = document.getElementById('chartToken');
    if (!canvas || !window.Chart) return;
    if (_chart) { _chart.destroy(); }

    var labels = [], data = [];
    if (window.SB) {
      var res = await SB.rpc('admin_token_supply_30d');
      if (!res.error && res.data) {
        res.data.forEach(function(r) {
          labels.push(_fmtDay(r.day));
          data.push(r.tokens_earned || 0);
        });
      }
    }
    if (!labels.length) {
      labels = _last30Labels();
      data   = labels.map(function() { return 0; });
    }

    _chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Tokens earned',
          data: data,
          backgroundColor: 'rgba(245,158,11,.7)',
          borderColor: '#F59E0B',
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { maxTicksLimit: 7 } }
        }
      }
    });
  }

  function _bindAdjustForm() {
    var btn = document.getElementById('tokenAdjSubmit');
    if (btn) btn.addEventListener('click', _adjustTokens);
  }

  async function _adjustTokens() {
    var userId = (document.getElementById('tokenAdjUserId').value || '').trim();
    var delta  = parseInt(document.getElementById('tokenAdjDelta').value, 10);
    var reason = (document.getElementById('tokenAdjReason').value || '').trim();
    var resEl  = document.getElementById('tokenAdjResult');

    if (!userId) { _setResult(resEl, '⚠ Nhập User ID', false); return; }
    if (isNaN(delta) || delta === 0) { _setResult(resEl, '⚠ Nhập delta hợp lệ (!=0)', false); return; }
    if (!reason) { _setResult(resEl, '⚠ Nhập lý do', false); return; }

    _setResult(resEl, 'Đang xử lý...', null);
    var res = await SB.rpc('admin_adjust_tokens', {
      p_user_id: userId,
      p_delta:   delta,
      p_reason:  reason
    });

    if (res.error) _setResult(resEl, '❌ ' + res.error.message, false);
    else           _setResult(resEl, '✅ Đã điều chỉnh ' + (delta > 0 ? '+' : '') + delta + ' tokens', true);

    _loadStats();
    _loadTopEarners();
  }

  function _bindGrantCreditForm() {
    var btn = document.getElementById('aiCredSubmit');
    if (btn) btn.addEventListener('click', _grantCredit);
  }

  async function _grantCredit() {
    var userId = (document.getElementById('aiCredUserId').value || '').trim();
    var amount = parseInt(document.getElementById('aiCredAmount').value, 10);
    var reason = (document.getElementById('aiCredReason').value || '').trim();
    var resEl  = document.getElementById('aiCredResult');

    if (!userId) { _setResult(resEl, '⚠ Nhập User ID', false); return; }
    if (isNaN(amount) || amount <= 0) { _setResult(resEl, '⚠ Số credit phải > 0', false); return; }
    if (!reason) { _setResult(resEl, '⚠ Nhập lý do', false); return; }

    _setResult(resEl, 'Đang xử lý...', null);
    var res = await SB.rpc('admin_grant_ai_credit', {
      p_user_id: userId,
      p_amount:  amount,
      p_reason:  reason
    });

    if (res.error) { _setResult(resEl, '❌ ' + res.error.message, false); return; }
    var d = res.data || {};
    if (d.ok === false) { _setResult(resEl, '❌ ' + (d.error || 'thất bại'), false); return; }
    _setResult(resEl, '✅ Đã cấp +' + amount + ' AI Credit · số dư mới: ' + (d.balance != null ? d.balance : '?'), true);
  }

  function _set(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val !== undefined ? val : '—';
  }

  function _setResult(el, msg, ok) {
    if (!el) return;
    el.textContent = msg;
    el.className = 'adm-result' + (ok === true ? ' adm-result-ok' : ok === false ? ' adm-result-err' : '');
  }

  function _loadChartJS(cb) {
    if (window.Chart) { cb(); return; }
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
    s.onload = cb;
    document.head.appendChild(s);
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

  return { init: init };
}());
