// ═══════════════════════════════════════════════════════
// COOKIE-CONSENT.JS — Lightweight cookie consent banner
// Per NĐ 13/2023/NĐ-CP (PDPL) + GDPR-compliant
//
// 2 categories:
//   - Necessary (auth, settings, sync) — always ON, no consent needed
//   - Analytics (usage tracking, A/B test) — opt-in
//
// No third-party tracking (no GA, no Meta Pixel) currently.
// This banner is for FUTURE-PROOFING + legal compliance.
//
// Wire-up: add <script src="js/cookie-consent.js?v=1.0"></script> in index.html
// Auto-show on first visit. User choice stored in localStorage.
//
// Created: 2026-05-23
// See: docs/COMPLIANCE_CHECKLIST.md #3, pages/privacy.html section 4
// ═══════════════════════════════════════════════════════

(function () {
  'use strict';

  var CONSENT_KEY = 'hsk_cookie_consent';
  var CONSENT_VERSION = '1.0';

  // ── Public API ─────────────────────────────────────────
  window.CookieConsent = {

    /** Has user given any consent decision yet? */
    hasDecided: function () {
      var raw = localStorage.getItem(CONSENT_KEY);
      if (!raw) return false;
      try {
        var c = JSON.parse(raw);
        return c.version === CONSENT_VERSION;
      } catch (e) { return false; }
    },

    /** Get current consent state, or null if not decided */
    get: function () {
      try {
        var c = JSON.parse(localStorage.getItem(CONSENT_KEY) || 'null');
        if (c && c.version === CONSENT_VERSION) return c;
      } catch (e) {}
      return null;
    },

    /** Has user opted-in to analytics? (necessary always ON) */
    allowAnalytics: function () {
      var c = CookieConsent.get();
      return !!(c && c.analytics === true);
    },

    /** Set consent. categories: { analytics: bool } */
    set: function (categories) {
      var consent = {
        version:    CONSENT_VERSION,
        necessary:  true,   // always
        analytics:  !!categories.analytics,
        decidedAt:  new Date().toISOString()
      };
      localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
      CookieConsent._hideBanner();
      // Future: emit event for analytics scripts to (re)load
      window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: consent }));
    },

    /** Reset consent (user can re-decide from Settings) */
    reset: function () {
      localStorage.removeItem(CONSENT_KEY);
      CookieConsent._showBanner();
    },

    // ── Internal ──────────────────────────────────────────

    _showBanner: function () {
      if (document.getElementById('cookieConsentBanner')) return;
      var html = ''
        + '<div id="cookieConsentBanner" class="cc-banner" role="dialog" aria-label="Cookie consent">'
        + '  <div class="cc-inner">'
        + '    <div class="cc-text">'
        + '      <strong>🍪 Cookie & Quyền riêng tư</strong>'
        + '      <p>Cookie cần thiết (đăng nhập, lưu tiến độ) luôn bật. Analytics ẩn danh tuỳ bạn — không có third-party tracking. <a href="/privacy">Chi tiết</a></p>'
        + '    </div>'
        + '    <div class="cc-actions">'
        + '      <button type="button" id="ccAcceptAll" class="cc-btn cc-btn-primary">Chấp nhận tất cả</button>'
        + '      <button type="button" id="ccAcceptNecessary" class="cc-btn cc-btn-secondary">Chỉ cần thiết</button>'
        + '      <button type="button" id="ccCustomize" class="cc-btn cc-btn-link">Tuỳ chỉnh</button>'
        + '    </div>'
        + '  </div>'
        + '</div>';
      var wrap = document.createElement('div');
      wrap.innerHTML = html;
      document.body.appendChild(wrap.firstChild);

      // Wire handlers
      document.getElementById('ccAcceptAll').addEventListener('click', function () {
        CookieConsent.set({ analytics: true });
      });
      document.getElementById('ccAcceptNecessary').addEventListener('click', function () {
        CookieConsent.set({ analytics: false });
      });
      document.getElementById('ccCustomize').addEventListener('click', function () {
        CookieConsent._showCustomize();
      });
    },

    _hideBanner: function () {
      var el = document.getElementById('cookieConsentBanner');
      if (el && el.parentNode) el.parentNode.removeChild(el);
      var mod = document.getElementById('cookieConsentCustomize');
      if (mod && mod.parentNode) mod.parentNode.removeChild(mod);
    },

    _showCustomize: function () {
      if (document.getElementById('cookieConsentCustomize')) return;
      var html = ''
        + '<div id="cookieConsentCustomize" class="cc-modal-backdrop" role="dialog">'
        + '  <div class="cc-modal">'
        + '    <h2>🍪 Tuỳ chỉnh Cookie</h2>'
        + '    <div class="cc-cat">'
        + '      <label><input type="checkbox" checked disabled> <strong>Cần thiết</strong></label>'
        + '      <p>Auth session, settings, sync queue. Không thể tắt — app không hoạt động nếu thiếu.</p>'
        + '    </div>'
        + '    <div class="cc-cat">'
        + '      <label><input type="checkbox" id="ccAnalyticsOpt"> <strong>Analytics ẩn danh</strong></label>'
        + '      <p>Đo flow học, A/B test feature. KHÔNG share với bên 3, KHÔNG có Google Analytics/Meta Pixel.</p>'
        + '    </div>'
        + '    <div class="cc-modal-actions">'
        + '      <button type="button" id="ccSaveCustom" class="cc-btn cc-btn-primary">Lưu lựa chọn</button>'
        + '      <button type="button" id="ccCancelCustom" class="cc-btn cc-btn-link">Huỷ</button>'
        + '    </div>'
        + '    <p class="cc-link"><a href="/privacy">Chi tiết Privacy Policy</a></p>'
        + '  </div>'
        + '</div>';
      var wrap = document.createElement('div');
      wrap.innerHTML = html;
      document.body.appendChild(wrap.firstChild);

      document.getElementById('ccSaveCustom').addEventListener('click', function () {
        var optIn = document.getElementById('ccAnalyticsOpt').checked;
        CookieConsent.set({ analytics: optIn });
      });
      document.getElementById('ccCancelCustom').addEventListener('click', function () {
        var mod = document.getElementById('cookieConsentCustomize');
        if (mod && mod.parentNode) mod.parentNode.removeChild(mod);
      });
    }
  };

  // ── Auto-show banner on first visit ───────────────────────
  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBanner);
  } else {
    initBanner();
  }

  function initBanner() {
    if (!CookieConsent.hasDecided()) {
      // Delay 1s to avoid layout shift on first paint
      // Also defer further if a modal is already open (e.g. user deep-linked to a modal route)
      setTimeout(function () {
        if (document.querySelector('.modal-open, [id$="Modal"][style*="flex"], [id$="Modal"][style*="block"]')) {
          // Modal is visible — wait another 3s to avoid banner overlapping modal
          setTimeout(function () { CookieConsent._showBanner(); }, 3000);
        } else {
          CookieConsent._showBanner();
        }
      }, 1000);
    }
  }
})();
