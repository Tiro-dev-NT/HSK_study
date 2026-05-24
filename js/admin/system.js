// ═══════════════════════════════════════════════════════
// ADMIN/SYSTEM.JS — Section 7: Hệ thống
// Supabase health + sync window + edge function logs
// ═══════════════════════════════════════════════════════

var AdminSystem = (function() {

  function init() {
    _loadHealth();
    _loadSyncWindow();
    _bindRefresh();
  }

  function _bindRefresh() {
    var btn = document.getElementById('sysRefreshHealth');
    if (btn) btn.addEventListener('click', _loadHealth);
  }

  async function _loadHealth() {
    var el = document.getElementById('sysHealthDetail');
    if (el) el.innerHTML = '<p class="adm-empty">Đang kiểm tra...</p>';
    if (!window.SB) return;

    var res = await SB.rpc('admin_system_health');
    if (res.error) {
      if (el) el.innerHTML = '<p class="adm-empty">Lỗi: ' + res.error.message + '</p>';
      return;
    }
    var s = (res.data && res.data[0]) || {};

    var rows = [
      ['Kết nối Supabase', s.connected ? '🟢 OK' : '🔴 Offline', s.connected],
      ['Connections active', Admin.fmt(s.active_connections) || '—', true],
      ['Số bảng RLS bật', Admin.fmt(s.rls_table_count) || '—', true],
      ['Số bảng KHÔNG RLS', Admin.fmt(s.non_rls_tables) || '0', (s.non_rls_tables || 0) === 0],
      ['Edge Function (create-payment)', s.edge_create_payment || '—', true],
      ['Edge Function (payos-webhook)', s.edge_payos_webhook || '—', true],
      ['Database size', s.db_size || '—', true],
      ['Total users', Admin.fmt(s.total_users) || '—', true],
    ];

    if (el) el.innerHTML = rows.map(function(r) {
      return '<div class="adm-sys-row">' +
        '<span class="sys-key">' + r[0] + '</span>' +
        '<span class="sys-val" style="color:' + (r[2] === true ? 'var(--adm-thuy)' : r[2] === false ? 'var(--adm-chau)' : 'inherit') + '">' + r[1] + '</span>' +
      '</div>';
    }).join('');
  }

  function _loadSyncWindow() {
    var el = document.getElementById('sysSyncWindow');
    if (!el) return;

    // Read from SyncWindow module if available
    var CUTOFF = new Date('2026-06-15T00:00:00+07:00');
    var now    = new Date();
    var daysLeft = Math.ceil((CUTOFF - now) / 86400000);

    var canSync = window.SyncWindow ? SyncWindow.canSync() : now < CUTOFF;
    var statusIcon = canSync ? '🟢' : '🔴';
    var statusText = canSync ? 'Sync đang hoạt động' : 'Sync đã đóng (cutoff đã qua)';

    el.innerHTML =
      '<div class="adm-sys-row"><span class="sys-key">Trạng thái sync</span><span class="sys-val">' + statusIcon + ' ' + statusText + '</span></div>' +
      '<div class="adm-sys-row"><span class="sys-key">Ngày cutoff</span><span class="sys-val">15/06/2026 00:00 GMT+7</span></div>' +
      '<div class="adm-sys-row"><span class="sys-key">Còn lại</span><span class="sys-val" style="color:' + (daysLeft < 30 ? 'var(--adm-chau)' : 'var(--adm-thuy)') + '">' + (daysLeft > 0 ? daysLeft + ' ngày' : 'Đã qua cutoff') + '</span></div>' +
      '<div style="font-size:11px;color:var(--adm-text3);padding:10px 0 4px">Sau ngày cutoff, localStorage không còn sync lên Supabase. Server-side trigger đã enforce (<code>supabase_sync_guard.sql</code>). Xem <code>js/sync-window.js</code>.</div>';
  }

  return { init: init };
}());
