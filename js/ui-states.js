/* ============================================================
   UIStates — reusable Empty / Error state renderers
   ------------------------------------------------------------
   Tham chiếu thiết kế: docs/design/10-empty-error-states/
   CSS:  css/components/empty-state.css + error-state.css
   Pattern: trả về string HTML hoặc HTMLElement, KHÔNG tự mount
            vào DOM (trừ openModal/closeModal cho modal flow).
   ------------------------------------------------------------
   Public API:
     UIStates.mascot(mood, size)               → HTML string
     UIStates.empty(opts)                      → HTML string
     UIStates.notFound(opts)                   → HTML string (full-page)
     UIStates.offlineBanner(opts)              → HTML string
     UIStates.sessionComplete(opts)            → HTML string
     UIStates.syncConflict(opts)               → opens modal, Promise<choice>
     UIStates.paymentFailed(opts)              → opens modal, Promise<action>
     UIStates.openModal(html, {onClose})       → mounts overlay, returns close fn
     UIStates.closeAll()                       → close any open modals
   ============================================================ */

var UIStates = (function () {
  'use strict';

  /* ---------- helpers ---------- */
  function esc(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function MASCOT_SRC() {
    // Same file used everywhere — see index.html preload.
    return 'assets/icon-soft.png';
  }

  /* ---------- SVG icon library (inline, no dep) ---------- */
  var ICONS = {
    plus:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></svg>',
    home:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12L12 3l9 9"/><path d="M5 10v10h14V10"/></svg>',
    sparkle:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"/></svg>',
    upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
    wifiOff:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" opacity=".35"/><path d="M1.42 9a16 16 0 0 1 21.16 0" opacity=".25"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12" y2="20"/><line x1="3" y1="3" x2="21" y2="21"/></svg>',
    book:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    cloud:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a5 5 0 1 1 .9-9.9A7 7 0 1 1 22 14a5 5 0 0 1-4.5 5z"/></svg>',
    phone:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>',
    check:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    x:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    warn:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L22 20 L2 20 Z"/><rect x="11" y="9" width="2" height="6" fill="#fff" rx="1"/><circle cx="12" cy="17" r="1.2" fill="#fff"/></svg>'
  };
  function icon(name) { return '<span class="ui-state__icon" aria-hidden="true">' + (ICONS[name] || '') + '</span>'; }

  /* ============================================================
     MASCOT
     mood: 'sleep' | 'sad' | 'lost' | 'concerned' | 'celebrate' | 'neutral'
     ============================================================ */
  function mascot(mood, size) {
    mood = mood || 'neutral';
    var sz = size || 200;
    var accessories = '';

    switch (mood) {
      case 'sleep':
        accessories =
          '<span class="ui-mascot__zzz" aria-hidden="true"><span>z</span><span>Z</span><span>Z</span></span>';
        break;
      case 'sad':
        accessories =
          '<span class="ui-mascot__wifi-off" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="var(--chau-hong)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M5 12.55a11 11 0 0 1 14.08 0" opacity=".35"/>' +
          '<path d="M1.42 9a16 16 0 0 1 21.16 0" opacity=".25"/>' +
          '<path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>' +
          '<line x1="3" y1="3" x2="21" y2="21" stroke-width="2.6"/>' +
          '</svg></span>';
        break;
      case 'lost':
        accessories =
          '<span class="ui-mascot__q" aria-hidden="true">?</span>';
        break;
      case 'concerned':
        accessories =
          '<span class="ui-mascot__warning" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="var(--hoang-kim)">' +
          '<path d="M12 2 L22 20 L2 20 Z"/>' +
          '<rect x="11" y="9" width="2" height="6" fill="#fff" rx="1"/>' +
          '<circle cx="12" cy="17" r="1.2" fill="#fff"/>' +
          '</svg></span>';
        break;
      case 'celebrate':
        accessories =
          '<span class="ui-mascot__streak" aria-hidden="true">Streak +1</span>';
        break;
    }

    return (
      '<div class="ui-mascot ui-mascot--' + esc(mood) + '" style="--mascot-size:' + parseInt(sz, 10) + 'px">' +
        '<img src="' + MASCOT_SRC() + '" alt="Bé Rồng">' +
        accessories +
      '</div>'
    );
  }

  /* ============================================================
     EMPTY STATE — generic
     opts = {
       mood, title, description,
       mascotSize,
       primary:   { label, icon?, onClick?, href?, id? },
       secondary: { label, onClick?, href?, id? },   // optional
       tip:       'TIP html string'                   // optional
     }
     ============================================================ */
  function empty(opts) {
    opts = opts || {};
    var primary = opts.primary;
    var secondary = opts.secondary;
    var html = '<div class="ui-state' + (opts.celebrate ? ' ui-state--celebrate' : '') + '">';
    html += '<div class="ui-state__inner">';
    html += mascot(opts.mood || 'sleep', opts.mascotSize || 200);
    if (opts.title)       html += '<h1 class="ui-state__title">' + esc(opts.title) + '</h1>';
    if (opts.description) html += '<p class="ui-state__desc">' + esc(opts.description) + '</p>';

    if (opts.statsHtml) html += opts.statsHtml;

    if (primary || secondary) {
      html += '<div class="ui-state__actions">';
      if (primary)   html += renderCta(primary);
      if (secondary) html += renderLink(secondary);
      html += '</div>';
    }

    if (opts.tipHtml) {
      html += '<div class="ui-state__tip">' +
                '<span class="ui-state__tip-label">TIP</span>' +
                '<span>' + opts.tipHtml + '</span>' +
              '</div>';
    }

    if (opts.footnote) {
      html += '<div class="ui-state__footer-note">' + opts.footnote + '</div>';
    }

    html += '</div></div>';
    return html;
  }

  function renderCta(p) {
    var tag = p.href ? 'a' : 'button';
    var attrs = '';
    if (p.id)   attrs += ' id="' + esc(p.id) + '"';
    if (p.href) attrs += ' href="' + esc(p.href) + '"';
    var cls = 'ui-state__cta' + (p.full ? ' ui-state__cta--full' : '');
    return '<' + tag + ' class="' + cls + '"' + attrs + '>' +
              (p.icon ? icon(p.icon) : '') +
              '<span>' + esc(p.label) + '</span>' +
           '</' + tag + '>';
  }

  function renderLink(s) {
    var tag = s.href ? 'a' : 'button';
    var attrs = '';
    if (s.id)   attrs += ' id="' + esc(s.id) + '"';
    if (s.href) attrs += ' href="' + esc(s.href) + '"';
    return '<' + tag + ' class="ui-state__link"' + attrs + '>' + esc(s.label) + '</' + tag + '>';
  }

  /* ============================================================
     OFFLINE BANNER — top yellow strip
     opts = { message?, retryLabel?, onRetry? (id-based), id? }
     ============================================================ */
  function offlineBanner(opts) {
    opts = opts || {};
    var msg = opts.message || 'Tiến độ sẽ tự sync khi có mạng';
    var label = opts.retryLabel || 'Thử lại';
    var btnId = opts.retryId || 'ui-offline-retry';
    var rootId = opts.id ? ' id="' + esc(opts.id) + '"' : '';
    return (
      '<div class="ui-error-banner"' + rootId + ' role="status">' +
        '<div class="ui-error-banner__icon">' + ICONS.wifiOff + '</div>' +
        '<div class="ui-error-banner__text">' +
          '<strong>Đang offline</strong>' +
          '<span class="sep">·</span>' + esc(msg) +
        '</div>' +
        '<button class="ui-error-banner__action" id="' + esc(btnId) + '">' +
          ICONS.refresh + '<span>' + esc(label) + '</span>' +
        '</button>' +
      '</div>'
    );
  }

  /* ============================================================
     404 NOT FOUND — full page
     opts = { code?, title?, description?, primary?, secondaryLinks? }
     ============================================================ */
  function notFound(opts) {
    opts = opts || {};
    var primary = opts.primary || { label: 'Về trang chủ', icon: 'home', href: '#/' };
    var links = opts.secondaryLinks || [
      { label: 'Tìm kiếm', href: '#/dictionary' },
      { label: 'Báo bug',  href: '#/feedback' }
    ];
    var linksHtml = '<span class="ui-state__link-row">';
    links.forEach(function (l, i) {
      if (i > 0) linksHtml += '<span class="ui-state__link-sep">·</span>';
      linksHtml += renderLink(l);
    });
    linksHtml += '</span>';

    return (
      '<div class="ui-error-page">' +
        '<div class="ui-error-page__layout">' +
          mascot('lost', 260) +
          '<div class="ui-error-page__copy">' +
            '<div class="ui-error-page__code">' + esc(opts.code || '404') + '</div>' +
            '<h1 class="ui-error-page__title">' + esc(opts.title || 'Hmm, trang này lạc đâu rồi') + '</h1>' +
            '<p class="ui-error-page__desc">' + esc(opts.description || 'Bé Rồng đi tìm hoài không thấy. Quay lại nhé?') + '</p>' +
            '<div class="ui-error-page__actions">' +
              renderCta(primary) +
              linksHtml +
            '</div>' +
            (opts.footnoteHtml ? '<div class="ui-error-page__footnote">' + opts.footnoteHtml + '</div>' : '') +
          '</div>' +
        '</div>' +
        '<div class="ui-error-page__watermark">找 · 不 · 到</div>' +
      '</div>'
    );
  }

  /* ============================================================
     SESSION COMPLETE — positive empty state
     opts = { title?, description?, stats: [{hanzi,value,label,color?,flame?}], primary, secondary, footnote }
     ============================================================ */
  function sessionComplete(opts) {
    opts = opts || {};
    var stats = opts.stats || [];
    var statsHtml = '<div class="ui-state__stats">';
    stats.forEach(function (s, i) {
      if (i > 0) statsHtml += '<div class="ui-state__stat-divider"></div>';
      var color = s.color || 'var(--chau-hong)';
      statsHtml += '<div class="ui-state__stat">';
      if (s.hanzi) statsHtml += '<div class="ui-state__stat-hanzi" style="color:' + esc(color) + '">' + esc(s.hanzi) + '</div>';
      statsHtml += '<div class="ui-state__stat-value">' + esc(s.value) + (s.flame ? '<span>🔥</span>' : '') + '</div>';
      statsHtml += '<div class="ui-state__stat-label">' + esc(s.label) + '</div>';
      statsHtml += '</div>';
    });
    statsHtml += '</div>';

    return empty({
      mood: 'celebrate',
      mascotSize: 240,
      title: opts.title || '🎉 Hoàn thành rồi bạn ơi!',
      description: opts.description || 'Hôm nay mình đã học xong tất cả từ cần ôn — Bé Rồng tự hào lắm!',
      statsHtml: statsHtml,
      primary: opts.primary || { label: 'Học thêm từ mới', icon: 'sparkle' },
      secondary: opts.secondary,
      footnote: opts.footnote || 'Mai gặp lại lúc nào cũng được — đừng quên streak nhé! 🔥',
      celebrate: true
    });
  }

  /* ============================================================
     MODAL primitives
     ============================================================ */
  var _openOverlays = [];

  function openModal(innerHtml, options) {
    options = options || {};
    var overlay = document.createElement('div');
    overlay.className = 'ui-modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML = innerHtml;

    function close(result) {
      if (!overlay.parentNode) return;
      overlay.parentNode.removeChild(overlay);
      var idx = _openOverlays.indexOf(overlay);
      if (idx >= 0) _openOverlays.splice(idx, 1);
      if (typeof options.onClose === 'function') options.onClose(result);
    }

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay && options.closeOnBackdrop !== false) close(null);
    });

    overlay.querySelectorAll('[data-ui-close]').forEach(function (el) {
      el.addEventListener('click', function () { close(el.getAttribute('data-ui-close') || null); });
    });

    document.body.appendChild(overlay);
    _openOverlays.push(overlay);

    // ESC to close
    function onKey(e) {
      if (e.key === 'Escape') { close(null); document.removeEventListener('keydown', onKey); }
    }
    document.addEventListener('keydown', onKey);

    return { close: close, root: overlay };
  }

  function closeAll() {
    _openOverlays.slice().forEach(function (o) { if (o.parentNode) o.parentNode.removeChild(o); });
    _openOverlays.length = 0;
  }

  /* ============================================================
     SYNC CONFLICT modal
     opts = {
       title?, subtitle?,
       local: { label?, stats: [{v,l}], updated, fresh? },
       cloud: { label?, cloudLabel?, stats, updated },
       noteHtml?,
       onChoose: function('local'|'cloud'|null)
     }
     ============================================================ */
  function syncConflict(opts) {
    opts = opts || {};
    var local = opts.local || { stats: [], updated: '' };
    var cloud = opts.cloud || { stats: [], updated: '' };

    function renderCard(side, data, selected) {
      var html =
        '<div class="ui-conflict-card' + (selected ? ' is-selected' : '') + '" data-side="' + side + '">' +
          '<div class="ui-conflict-card__check">' + ICONS.check + '</div>' +
          '<div class="ui-conflict-card__head">' +
            '<span class="ui-conflict-card__head-icon">' + (side === 'local' ? ICONS.phone : ICONS.cloud) + '</span>' +
            '<span class="ui-conflict-card__label">' + esc(data.label || (side === 'local' ? 'Trên thiết bị này' : 'Trên cloud')) + '</span>' +
            (data.cloudLabel ? '<span class="ui-conflict-card__cloud-tag">' + esc(data.cloudLabel) + '</span>' : '') +
          '</div>' +
          '<div class="ui-conflict-card__stats">';
      (data.stats || []).forEach(function (s) {
        html += '<div class="ui-conflict-card__row">' +
                  '<div class="ui-conflict-card__value">' + esc(s.v) + '</div>' +
                  '<div class="ui-conflict-card__caption">' + esc(s.l) + '</div>' +
                '</div>';
      });
      html += '</div>' +
        '<div class="ui-conflict-card__foot">' +
          '<span>Cập nhật ' + esc(data.updated || '') + '</span>' +
          (data.fresh ? '<span class="ui-conflict-card__fresh">Mới nhất</span>' : '') +
        '</div>' +
      '</div>';
      return html;
    }

    var modalHtml =
      '<div class="ui-modal ui-modal--md" role="document">' +
        '<button class="ui-modal__close" data-ui-close type="button" aria-label="Đóng">' + ICONS.x + '</button>' +
        '<div class="ui-modal__header">' +
          '<div class="ui-modal__header-icon ui-modal__header-icon--warning">' + ICONS.warn + '</div>' +
          '<div class="ui-modal__header-text">' +
            '<h2 class="ui-modal__title">' + esc(opts.title || 'Phát hiện xung đột đồng bộ') + '</h2>' +
            '<p class="ui-modal__subtitle">' + esc(opts.subtitle || 'Tiến độ trên thiết bị này và cloud khác nhau. Bạn muốn dùng cái nào?') + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="ui-conflict-grid">' +
          renderCard('local', local, true) +
          renderCard('cloud', cloud, false) +
        '</div>' +
        '<div class="ui-modal__note">' +
          (opts.noteHtml || 'Bản còn lại sẽ được backup trong <strong>30 ngày</strong> — bạn có thể khôi phục nếu cần.') +
        '</div>' +
        '<div class="ui-modal__footer">' +
          '<button class="ui-modal__btn-secondary" data-ui-close type="button">Hủy</button>' +
          '<button class="ui-state__cta" data-ui-confirm type="button"><span>Dùng bản này</span></button>' +
        '</div>' +
      '</div>';

    return new Promise(function (resolve) {
      var picked = 'local';
      var handle = openModal(modalHtml, {
        onClose: function (result) {
          if (typeof opts.onChoose === 'function') opts.onChoose(result);
          resolve(result);
        }
      });
      // wire card selection
      handle.root.querySelectorAll('.ui-conflict-card').forEach(function (card) {
        card.addEventListener('click', function () {
          handle.root.querySelectorAll('.ui-conflict-card').forEach(function (c) { c.classList.remove('is-selected'); });
          card.classList.add('is-selected');
          picked = card.getAttribute('data-side');
        });
      });
      // wire confirm
      var confirmBtn = handle.root.querySelector('[data-ui-confirm]');
      if (confirmBtn) confirmBtn.addEventListener('click', function () { handle.close(picked); });
    });
  }

  /* ============================================================
     PAYMENT FAILED modal
     opts = {
       title?, description?,
       order: { name, txid, amount, currency? },
       primary?: { label, icon },
       links?: [{label, onClick?, href?}],
       noteHtml?
     }
     Returns Promise<'retry'|'close'|...>
     ============================================================ */
  function paymentFailed(opts) {
    opts = opts || {};
    var order = opts.order || {};
    var primary = opts.primary || { label: 'Thử lại với QR mới', icon: 'refresh' };
    var links = opts.links || [
      { label: 'Đổi phương thức', id: 'ui-payment-change' },
      { label: 'Liên hệ hỗ trợ',  id: 'ui-payment-support' }
    ];

    var linksHtml = '<div class="ui-state__link-row" style="margin-top:14px;justify-content:center;display:flex;">';
    links.forEach(function (l, i) {
      if (i > 0) linksHtml += '<span class="ui-state__link-sep">·</span>';
      linksHtml += renderLink(l);
    });
    linksHtml += '</div>';

    var modalHtml =
      '<div class="ui-modal ui-modal--sm" role="document">' +
        '<button class="ui-modal__close" data-ui-close type="button" aria-label="Đóng">' + ICONS.x + '</button>' +
        '<div class="ui-payment-modal">' +
          '<div class="ui-payment-modal__mascot-wrap">' + mascot('concerned', 160) + '</div>' +
          '<h2 class="ui-payment-modal__title">' +
            '<span class="ui-payment-modal__title-x" aria-hidden="true">✕</span>' +
            esc(opts.title || 'Thanh toán chưa thành công') +
          '</h2>' +
          '<p class="ui-payment-modal__desc">' +
            esc(opts.description || 'PayOS không nhận được khoản thanh toán. Có thể do timeout hoặc app ngân hàng lỗi.') +
          '</p>' +
          '<div class="ui-payment-card">' +
            '<div class="ui-payment-card__row">' +
              '<div class="ui-payment-card__icon">💎</div>' +
              '<div class="ui-payment-card__info">' +
                '<div class="ui-payment-card__name">' + esc(order.name || 'Pro') + '</div>' +
                (order.txid ? '<div class="ui-payment-card__txid">TX: ' + esc(order.txid) + '</div>' : '') +
              '</div>' +
              (order.amount != null
                ? '<div class="ui-payment-card__amount">' + esc(order.amount) +
                  '<sup>' + esc(order.currency || '₫') + '</sup></div>'
                : '') +
            '</div>' +
            '<div class="ui-payment-card__status">Trạng thái: Thất bại</div>' +
          '</div>' +
          '<button class="ui-state__cta ui-state__cta--full" data-ui-confirm="retry" type="button">' +
            icon(primary.icon || 'refresh') + '<span>' + esc(primary.label) + '</span>' +
          '</button>' +
          linksHtml +
          (opts.noteHtml
            ? '<div class="ui-modal__note ui-modal__note--warning" style="margin:18px 0 0;">' + opts.noteHtml + '</div>'
            : '') +
        '</div>' +
      '</div>';

    return new Promise(function (resolve) {
      var handle = openModal(modalHtml, {
        onClose: function (result) { resolve(result || 'close'); }
      });
      var btn = handle.root.querySelector('[data-ui-confirm]');
      if (btn) btn.addEventListener('click', function () { handle.close(btn.getAttribute('data-ui-confirm') || 'retry'); });
    });
  }

  /* ============================================================
     Public surface
     ============================================================ */
  return {
    mascot: mascot,
    empty: empty,
    notFound: notFound,
    offlineBanner: offlineBanner,
    sessionComplete: sessionComplete,
    syncConflict: syncConflict,
    paymentFailed: paymentFailed,
    openModal: openModal,
    closeAll: closeAll,
    _icons: ICONS  // expose if pages need to compose
  };
})();

if (typeof window !== 'undefined') window.UIStates = UIStates;
