// ═══════════════════════════════════════════════════════
// SYNC-WINDOW.JS — Cửa sổ đồng bộ localStorage → Supabase
// ──────────────────────────────────────────────────────
// Policy (chốt 2026-05-14):
//   • Cho phép sync local→cloud đến hết ngày 15/6/2026 (GMT+7)
//   • Sau cutoff: khoá vĩnh viễn — không bao giờ push local→cloud nữa
//   • Supabase → localStorage (download/pull) vẫn hoạt động bình thường
//   • User học local-only phải chấp nhận: mất data khi xóa cache,
//     không leaderboard, không premium
// ═══════════════════════════════════════════════════════

var SyncWindow = {

  // ── Config ─────────────────────────────────────────
  CUTOFF: new Date('2026-06-15T23:59:59+07:00'),
  KEY_MIGRATED:     'migrated_v1',         // đã migrate thành công
  KEY_CLOSED_SHOWN: 'sync_closed_notified', // đã hiện modal "đã đóng" rồi

  // ── Core: có thể sync local → cloud không? ────────
  // Trả về false nếu:
  //   1. Đã migrate rồi (chỉ cần migrate 1 lần duy nhất)
  //   2. Qua ngày cutoff 15/6/2026
  canSync: function() {
    if (localStorage.getItem(SyncWindow.KEY_MIGRATED)) return false;
    return Date.now() < SyncWindow.CUTOFF.getTime();
  },

  // ── Số ngày còn lại đến cutoff ────────────────────
  getDaysRemaining: function() {
    var diff = SyncWindow.CUTOFF.getTime() - Date.now();
    if (diff <= 0) return 0;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
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

  // ── Đánh dấu đã migrate thành công ────────────────
  // Sau đây canSync() luôn trả false → không push nữa
  markMigrated: function() {
    localStorage.setItem(SyncWindow.KEY_MIGRATED, new Date().toISOString());
    // Ẩn banner sau khi đã migrate
    var banner = document.getElementById('syncWindowBanner');
    if (banner) banner.style.display = 'none';
    console.log('[SyncWindow] Marked as migrated — local→cloud sync locked.');
  },

  // ── Hiện banner cảnh báo ≤10 ngày / ≤3 ngày ──────
  showBanner: function() {
    var banner = document.getElementById('syncWindowBanner');
    if (!banner) return;

    // Đã migrate → không cần
    if (localStorage.getItem(SyncWindow.KEY_MIGRATED)) {
      banner.style.display = 'none';
      return;
    }
    // Đã đăng nhập → không cần (đã có cloud data)
    if (typeof Auth !== 'undefined' && Auth.user) {
      banner.style.display = 'none';
      return;
    }

    var days = SyncWindow.getDaysRemaining();

    if (days <= 0) {
      // Qua cutoff — banner ẩn, modal "đã đóng" sẽ hiện
      banner.style.display = 'none';

    } else if (days <= 3) {
      // 🔴 Khẩn cấp đỏ — còn 1-3 ngày
      banner.className = 'sync-banner sync-banner-urgent';
      banner.innerHTML =
        '<span>🚨 <strong>Chỉ còn ' + days + ' ngày!</strong> ' +
        'Cửa sổ đồng bộ đóng lúc 23:59 ngày 15/6. ' +
        '<a class="sw-banner-link" onclick="Auth.openLoginModal()">Đăng nhập ngay để không mất dữ liệu!</a>' +
        '</span>' +
        '<button class="sw-banner-close" onclick="SyncWindow._closeBanner()" aria-label="Đóng">✕</button>';
      banner.style.display = 'flex';

    } else if (days <= 10) {
      // 🟡 Cảnh báo vàng — còn 4-10 ngày
      banner.className = 'sync-banner sync-banner-warn';
      banner.innerHTML =
        '<span>⚠️ <strong>Còn ' + days + ' ngày</strong> để lưu tiến độ học lên cloud (hết hạn 15/6). ' +
        '<a class="sw-banner-link" onclick="Auth.openLoginModal()">Đăng nhập để đồng bộ.</a>' +
        '</span>' +
        '<button class="sw-banner-close" onclick="SyncWindow._closeBanner()" aria-label="Đóng">✕</button>';
      banner.style.display = 'flex';

    } else {
      banner.style.display = 'none';
    }
  },

  _closeBanner: function() {
    var banner = document.getElementById('syncWindowBanner');
    if (banner) banner.style.display = 'none';
  },

  // ── Hiện modal "Cửa sổ đã đóng" (chỉ 1 lần) ─────
  showClosedModal: function() {
    // Điều kiện: qua cutoff + chưa migrate + chưa login + chưa hiện modal này
    if (SyncWindow.getDaysRemaining() > 0) return;
    if (localStorage.getItem(SyncWindow.KEY_MIGRATED)) return;
    if (typeof Auth !== 'undefined' && Auth.user) return;
    if (localStorage.getItem(SyncWindow.KEY_CLOSED_SHOWN)) return;

    localStorage.setItem(SyncWindow.KEY_CLOSED_SHOWN, '1');
    var m = document.getElementById('syncWindowClosedModal');
    if (m) m.style.display = 'flex';
  },

  closeClosedModal: function() {
    var m = document.getElementById('syncWindowClosedModal');
    if (m) m.style.display = 'none';
  },

  // ── Init: gọi sau khi Auth đã khởi tạo ───────────
  init: function() {
    setTimeout(function() {
      SyncWindow.showBanner();
      SyncWindow.showClosedModal();
    }, 900);
  }
};
