// ═══════════════════════════════════════════════════════
// PRICING.JS — Payment modal logic (PayOS integration)
// Handles Pro subscriptions plus Monetization v2 support/AI pack modals.
// Catalog lives in js/data/plans.js (window.PLAN_CATALOG).
// ═══════════════════════════════════════════════════════

var Pricing = {
  _orderType: null,
  _sku:       null,
  _pendingOrder: null,      // remembered when login required mid-flow

  // ── Open subscription modal ───────────────────────────
  openPayment: function(sku) {
    if (!window.PLAN_CATALOG) return;
    var item = PLAN_CATALOG.getSubscription(sku);
    if (!item) return;

    if (!Pricing._requireAuth({ type: 'subscription', sku: sku })) return;

    Pricing._orderType = 'subscription';
    Pricing._sku       = sku;
    Pricing._renderConfirm({
      icon:      '💳',
      title:     'Nâng cấp Pro — ' + item.name,
      priceText: item.priceLabel + ' / ' + item.sub,
      activation:'Pro của bạn sẽ được kích hoạt'
    });
  },

  // DEPRECATED — use openHonorPurchase / openAICreditPurchase
  openTokenPurchase: function(sku) {
    console.warn('[Pricing] openTokenPurchase() is deprecated:', sku);
    if (typeof showToast === 'function') showToast('Kho Token đã được thay bằng Hộp Ân Cần và Túi Linh Đan AI');
  },

  openHonorPurchase: function() {
    if (!window.PLAN_CATALOG) return;
    var pack = PLAN_CATALOG.getHonorPack();
    if (!pack) return;

    if (!Pricing._requireAuth({ type: 'honor', sku: pack.sku })) return;

    Pricing._orderType = 'honor';
    Pricing._sku       = pack.sku;
    Pricing._renderConfirm({
      icon:      '📦',
      title:     pack.name + ' — Ủng hộ Hanzi Genz',
      priceText: pack.priceLabel,
      activation:'Bạn nhận 1.000 token, outfit Người Ủng Hộ tháng này, badge Mạnh Thường Quân và tuỳ chọn hiện tên ở Sảnh Vinh Danh'
    });
  },

  openAICreditPurchase: function(sku) {
    if (!window.PLAN_CATALOG) return;
    var pack = PLAN_CATALOG.getAICreditPack(sku);
    if (!pack) return;

    if (!Pricing._requireAuth({ type: 'aiCredit', sku: sku })) return;

    Pricing._orderType = 'aiCredit';
    Pricing._sku       = sku;
    Pricing._renderConfirm({
      icon:      pack.icon || '🔮',
      title:     'Túi Linh Đan AI — ' + pack.tierLabel,
      priceText: pack.priceLabel,
      activation: pack.credits.toLocaleString('vi-VN') + ' AI Credit sẽ được cộng vào tài khoản'
    });
  },

  // ── Auth gate (shared) ────────────────────────────────
  _requireAuth: function(order) {
    if (!Auth || !Auth.user) {
      Pricing._pendingOrder = order;
      if (typeof showToast === 'function') showToast('Vui lòng đăng nhập để thanh toán');
      if (typeof Auth !== 'undefined' && Auth.openLoginModal) Auth.openLoginModal();
      return false;
    }
    Pricing._pendingOrder = null;
    return true;
  },

  _renderConfirm: function(opts) {
    var iconEl  = document.getElementById('pmIcon');
    var titleEl = document.getElementById('pmTitle');
    var priceEl = document.getElementById('pmPrice');
    var noteEl  = document.getElementById('pmActivationNote');
    var extraEl = document.getElementById('pmExtraNote');
    var btnEl   = document.getElementById('pmConfirmBtn');
    if (iconEl)  iconEl.textContent  = opts.icon;
    if (titleEl) titleEl.textContent = opts.title;
    if (priceEl) priceEl.textContent = opts.priceText;
    if (noteEl)  noteEl.textContent  = opts.activation;
    if (extraEl) {
      extraEl.textContent = opts.extraNote || '';
      extraEl.style.display = opts.extraNote ? 'block' : 'none';
    }
    if (btnEl) {
      btnEl.disabled = !!opts.disabledPayment;
      btnEl.textContent = opts.disabledPayment ? 'Thanh toán sắp mở' : 'Tiến hành thanh toán →';
      btnEl.style.opacity = opts.disabledPayment ? '.55' : '1';
      btnEl.style.cursor = opts.disabledPayment ? 'not-allowed' : 'pointer';
    }
    Pricing._setState('confirm');
    document.getElementById('paymentModal').style.display = 'flex';
  },

  closeModal: function() {
    var m = document.getElementById('paymentModal');
    if (m) m.style.display = 'none';
    Pricing._orderType = null;
    Pricing._sku = null;
  },

  // ── Perform payment ───────────────────────────────────
  _doPayment: async function() {
    var orderType = Pricing._orderType;
    var sku       = Pricing._sku;
    if (!orderType || !sku) return;

    var user = Auth && Auth.user;
    if (!user) {
      Pricing.closeModal();
      Pricing._pendingOrder = { type: orderType, sku: sku };
      if (typeof showToast === 'function') showToast('Vui lòng đăng nhập để thanh toán');
      if (typeof Auth !== 'undefined' && Auth.openLoginModal) Auth.openLoginModal();
      return;
    }

    Pricing._setState('loading');

    // Best-effort access token (Edge Function tolerates missing JWT)
    var accessToken = null;
    try {
      var sessionRes = await Promise.race([
        SB.auth.getSession(),
        new Promise(function(_, rej) {
          setTimeout(function() { rej(new Error('timeout')); }, 8000);
        })
      ]);
      var s = sessionRes && sessionRes.data && sessionRes.data.session;
      if (s && s.access_token) accessToken = s.access_token;
    } catch(e) {
      console.warn('[Pricing] getSession failed, proceeding without token:', e.message);
    }

    // Client-side SKU guard — Edge Function validates again server-side
    var _validSkus = {
      subscription: ['monthly', 'quarterly', 'semiannual', 'yearly', 'lifetime'],
      token:        ['pack100', 'pack500', 'pack1200', 'pack3000'],
      aiCredit:     ['aipack_so', 'aipack_trung', 'aipack_cao'],
      honor:        ['honor_pack']
    };
    if (!_validSkus[orderType] || _validSkus[orderType].indexOf(sku) < 0) {
      Pricing._setState('error');
      document.getElementById('pmErrorMsg').textContent = 'Gói không hợp lệ. Vui lòng thử lại.';
      return;
    }

    var fnUrl = SB_URL + '/functions/v1/create-payment';
    var body = {
      type:      orderType,        // 'subscription' | 'token'
      sku:       sku,              // e.g. 'yearly' | 'pack500'
      userId:    user.id,
      userEmail: user.email,
      userName:  (user.user_metadata && user.user_metadata.name) || ''
    };
    var headers = { 'Content-Type': 'application/json' };
    if (accessToken) headers['Authorization'] = 'Bearer ' + accessToken;

    try {
      var controller = new AbortController();
      var _timer = setTimeout(function() { controller.abort(); }, 15000);

      var res = await fetch(fnUrl, {
        method:  'POST',
        headers: headers,
        body:    JSON.stringify(body),
        signal:  controller.signal
      });
      clearTimeout(_timer);

      var data = await res.json();
      if (!res.ok || !data.checkoutUrl) {
        var msg = (data && data.error) ? data.error : ('Lỗi máy chủ (' + res.status + ')');
        throw new Error(msg);
      }
      window.location.href = data.checkoutUrl;

    } catch(err) {
      console.error('[Pricing] create-payment error:', err);
      Pricing._setState('error');
      var errMsg = err.name === 'AbortError'
        ? 'Máy chủ không phản hồi (timeout 15s). Thử lại sau hoặc liên hệ hỗ trợ.'
        : (err.message || 'Không thể kết nối đến cổng thanh toán.');
      document.getElementById('pmErrorMsg').textContent =
        errMsg + '\n\nLiên hệ support@hanzigenz.com để được hỗ trợ thủ công.';
    }
  },

  _setState: function(state) {
    ['confirm', 'loading', 'error'].forEach(function(s) {
      var el = document.getElementById('pmState' + s.charAt(0).toUpperCase() + s.slice(1));
      if (el) el.style.display = (s === state) ? 'block' : 'none';
    });
  },

  // ── Handle PayOS redirect-back (?payment=success&type=...&sku=...) ─
  _checkReturnUrl: function() {
    var params = new URLSearchParams(window.location.search);
    var payment = params.get('payment');
    var type    = params.get('type') || 'subscription';
    var sku     = params.get('sku')  || params.get('plan');  // 'plan' kept for legacy URLs
    if (!payment) return;

    window.history.replaceState({}, '', window.location.pathname);

    if (payment === 'success') {
      var msg;
      if (type === 'token' && window.PLAN_CATALOG) {
        var pack = PLAN_CATALOG.getTokenPack(sku);
        var total = pack ? (pack.tokens + (pack.bonus || 0)) : 0;
        msg = '🎉 Thanh toán thành công! ' + total.toLocaleString('vi-VN') + ' token đã được cộng.';
      } else if (type === 'aiCredit' && window.PLAN_CATALOG) {
        var aiPack = PLAN_CATALOG.getAICreditPack(sku);
        var credits = aiPack ? aiPack.credits : 0;
        msg = '🎉 Thanh toán thành công! ' + credits.toLocaleString('vi-VN') + ' AI Credit đã được cộng vào tài khoản.';
      } else if (type === 'honor') {
        msg = '🎉 Cảm ơn bạn đã ủng hộ! 1.000 token và outfit Người Ủng Hộ tháng này đã được ghi nhận.';
      } else if (window.PLAN_CATALOG) {
        var item = PLAN_CATALOG.getSubscription(sku);
        var planName = item ? ('Pro ' + item.sub) : 'Pro';
        msg = '🎉 Thanh toán thành công! Gói ' + planName + ' đã được kích hoạt.';
      } else {
        msg = '🎉 Thanh toán thành công!';
      }
      if (typeof showToast === 'function') showToast(msg);
      if (typeof Monetization !== 'undefined' && Monetization.resetCache)
        Monetization.resetCache();
      // Pull new token bonus from server so the UI reflects it immediately.
      // Webhook has already credited user_token_balance + ledger by now.
      if (typeof Quests !== 'undefined' && Quests.syncFromServer) {
        setTimeout(function() { Quests.syncFromServer(); }, 800);
      }
    } else if (payment === 'cancel') {
      if (typeof showToast === 'function') showToast('Đã huỷ thanh toán.');
    }
  }
};

var PricingUI = {
  _shortSku: 'quarterly',
  selectShort: function(input) {
    document.querySelectorAll('.pc-compact-opt').forEach(function(el) {
      el.classList.toggle('pc-compact-opt--checked', el.querySelector('input') === input);
    });
    PricingUI._shortSku = input.value;
  },
  checkoutShort: function() {
    Pricing.openPayment(PricingUI._shortSku);
  }
};
