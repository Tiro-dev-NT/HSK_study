// ═══════════════════════════════════════════════════════
// SYNC-WINDOW.JS — Migration helper
// ──────────────────────────────────────────────────────
// 2026-05-20 — "Sync Cutoff 15/6" ĐÃ BỎ HẲN.
//   Lý do: tính năng đó sai kiến trúc — server trigger
//   khoá ghi cloud cho MỌI user (kể cả đã đăng nhập) sau
//   15/6 → cloud DB tiến độ học thành read-only vĩnh viễn.
//   Anti-abuse vẫn được đảm bảo bằng: anti-cheat caps ở SQL
//   (validate_xp/validate_progress) + sanitize ở client.
//
// File này giờ chỉ còn 2 nhiệm vụ:
//   1. sanitizeMigrationData() — cap XP/streak/token lần
//      migrate đầu (chống upload data ẩn danh đã chế).
//   2. markMigrated()/hasMigrated() — đánh dấu đã migrate
//      để KHÔNG hỏi lại modal migration mỗi lần đăng nhập.
//
// Các hàm banner/modal deadline giữ lại dạng STUB để HTML
// và app.js cũ không vỡ.
// ═══════════════════════════════════════════════════════

var SyncWindow = {

  // ── Config ─────────────────────────────────────────
  KEY_MIGRATED: 'migrated_v1',   // đã migrate localStorage→cloud lần đầu

  // ── Cutoff đã bỏ → luôn cho phép sync local → cloud ──
  // Giữ hàm để các call site cũ (sync.js, auth.js) không vỡ.
  canSync: function() { return true; },

  // ── Đã migrate localStorage→cloud lần đầu chưa? ─────
  // Dùng để KHÔNG bật lại modal migration cho user cũ.
  hasMigrated: function() {
    return !!localStorage.getItem(SyncWindow.KEY_MIGRATED);
  },

  // ── Sanitize data trước khi upload lần đầu ────────
  // Chống hack: cap XP/ngày ≤ 300, streak ≤ 7, token ≤ 100
  // Chỉ áp dụng cho lần migrate đầu (chưa có KEY_MIGRATED)
  sanitizeMigrationData: function() {
    if (localStorage.getItem(SyncWindow.KEY_MIGRATED)) return; // đã migrate rồi

    // 1. Cap daily XP ≤ 300/ngày
    var xpData = (typeof AppState !== 'undefined' && AppState.xpData) ? AppState.xpData : {};
    var dailyXP = xpData.dailyXP || {};
    var sanitizedDaily = {};
    var totalFromDaily = 0;
    Object.keys(dailyXP).forEach(function(day) {
      var capped = Math.min(dailyXP[day] || 0, 300);
      sanitizedDaily[day] = capped;
      totalFromDaily += capped;
    });
    xpData.dailyXP = sanitizedDaily;

    // Cap total_xp = max(totalFromDaily + 500 buffer, existing total cap 15000)
    var maxTotal = Math.min(totalFromDaily + 500, 15000);
    if ((xpData.total || 0) > maxTotal) {
      xpData.total = maxTotal;
    }

    if (typeof AppState !== 'undefined') {
      AppState.xpData = xpData;
      if (typeof AppState.saveXP === 'function') AppState.saveXP();
    }

    // 2. Cap streak ≤ 7 ngày (chống streak giả)
    var streak = parseInt(localStorage.getItem('hsk_streak') || '0');
    if (streak > 7) {
      localStorage.setItem('hsk_streak', '7');
    }

    // 3. Cap tokens ≤ 100
    var tokens = parseInt(localStorage.getItem('hsk_tokens') || '0');
    if (tokens > 100) {
      localStorage.setItem('hsk_tokens', '100');
      if (typeof AppState !== 'undefined' && typeof AppState.tokens !== 'undefined') {
        AppState.tokens = 100;
      }
    }

    console.log('[SyncWindow] sanitizeMigrationData: XP capped, streak=' +
      Math.min(streak, 7) + ', tokens=' + Math.min(tokens, 100));
  },

  // ── Đánh dấu đã migrate ───────────────────────────
  // Sau đây hasMigrated()=true → không hỏi lại modal migration.
  // KHÔNG còn khoá sync (cutoff đã bỏ).
  markMigrated: function() {
    localStorage.setItem(SyncWindow.KEY_MIGRATED, new Date().toISOString());
    console.log('[SyncWindow] Marked as migrated.');
  },

  // ── STUB — banner/modal deadline đã bỏ ────────────
  // Giữ tên hàm để HTML (onclick) + app.js không vỡ.
  showBanner: function() {
    var b = document.getElementById('syncWindowBanner');
    if (b) b.style.display = 'none';
  },
  _closeBanner: function() {
    var b = document.getElementById('syncWindowBanner');
    if (b) b.style.display = 'none';
  },
  showClosedModal: function() { /* cutoff đã bỏ — không hiện gì */ },
  closeClosedModal: function() {
    var m = document.getElementById('syncWindowClosedModal');
    if (m) m.style.display = 'none';
  },

  // ── Init: ẩn banner deadline cũ nếu còn trong DOM ──
  init: function() {
    SyncWindow.showBanner();
  }
};
