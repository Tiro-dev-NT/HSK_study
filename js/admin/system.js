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

    // Cutoff 15/6 đã BỎ (2026-05-20) → sync vĩnh viễn, không deadline.
    var canSync = window.SyncWindow ? SyncWindow.canSync() : true;
    var statusIcon = canSync ? '🟢' : '🔴';
    var statusText = canSync ? 'Sync vĩnh viễn (cutoff đã bỏ)' : 'Sync đang khoá';

    el.innerHTML =
      '<div class="adm-sys-row"><span class="sys-key">Trạng thái sync</span><span class="sys-val">' + statusIcon + ' ' + statusText + '</span></div>' +
      '<div class="adm-sys-row"><span class="sys-key">Cutoff theo ngày</span><span class="sys-val">Đã bỏ (2026-05-20)</span></div>' +
      '<div class="adm-sys-row"><span class="sys-key">Anti-abuse</span><span class="sys-val">Caps server-side</span></div>' +
      '<div style="font-size:11px;color:var(--adm-text3);padding:10px 0 4px">Sync local→cloud vĩnh viễn, không deadline. Anti-abuse bằng caps ở trigger (<code>supabase_sync_guard_v2.sql</code>) + <code>sanitizeMigrationData()</code> lần migrate đầu. Xem <code>js/sync-window.js</code>.</div>';
  }

  return { init: init };
}());
