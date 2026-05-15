// ═══════════════════════════════════════════════════════
// PRICING.JS — Payment modal logic (PayOS integration)
// Loaded globally so Pricing.* is available when the
// pricing page fragment is injected via innerHTML router.
// ═══════════════════════════════════════════════════════

var Pricing = {
  _plan: null,
  _pendingPlan: null,   // remembered when login is required mid-flow
  _plans: {
    basic: { name: 'Basic', price: '49.000đ', sub: '/tháng' },
    pro:   { name: 'Pro',   price: '299.000đ', sub: '/tháng' },
    max:   { name: 'Max',   price: '799.000đ', sub: '/năm'  }
  },

  // ── Open modal ────────────────────────────────────────
  openPayment: function(plan) {
    if (!Auth || !Auth.user) {
      Pricing._pendingPlan = plan;   // resume after login
      if (typeof showToast === 'function') showToast('Vui lòng đăng nhập để nâng cấp gói');
      if (typeof Auth !== 'undefined' && Auth.openLoginModal) Auth.openLoginModal();
      return;
    }
    Pricing._pendingPlan = null;

    var p = Pricing._plans[plan];
    if (!p) return;

    Pricing._plan = plan;
    document.getElementById('pmTitle').textContent = 'Nâng cấp lên ' + p.name;
    document.getElementById('pmPrice').textContent = p.price + p.sub;

    Pricing._setState('confirm');
    document.getElementById('paymentModal').style.display = 'flex';
  },

  closeModal: function() {
    var m = document.getElementById('paymentModal');
    if (m) m.style.display = 'none';
    Pricing._plan = null;
  },

  // ── Perform payment ───────────────────────────────────
  _doPayment: async function() {
    var plan = Pricing._plan;
    if (!plan) return;

    var user = Auth && Auth.user;
    if (!user) {
      Pricing.closeModal();
      if (typeof Auth !== 'undefined' && Auth.openLoginModal) Auth.openLoginModal();
      return;
    }

    Pricing._setState('loading');

    // Get fresh access token (5s timeout phòng getSession() hang)
    var session = null;
    try {
      var sessionRes = await Promise.race([
        SB.auth.getSession(),
        new Promise(function(_, rej) {
          setTimeout(function() { rej(new Error('getSession timeout')); }, 5000);
        })
      ]);
      session = sessionRes && sessionRes.data && sessionRes.data.session;
    } catch(e) {
      console.error('[Pricing] getSession error:', e);
    }

    if (!session || !session.access_token) {
      Pricing._setState('error');
      document.getElementById('pmErrorMsg').textContent =
        'Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại rồi thử lại.';
      return;
    }

    // Call Edge Function
    var fnUrl = SB_URL + '/functions/v1/create-payment';
    var body = {
      plan:      plan,
      userId:    user.id,
      userEmail: user.email,
      userName:  (user.user_metadata && user.user_metadata.name) || ''
    };

    try {
      var controller = new AbortController();
      var _timer = setTimeout(function() { controller.abort(); }, 15000);

      var res = await fetch(fnUrl, {
        method: 'POST',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + session.access_token
        },
        body: JSON.stringify(body),
        signal: controller.signal
      });
      clearTimeout(_timer);

      var data = await res.json();

      if (!res.ok || !data.checkoutUrl) {
        var msg = (data && data.error) ? data.error : ('Lỗi máy chủ (' + res.status + ')');
        throw new Error(msg);
      }

      // Redirect to PayOS checkout
      window.location.href = data.checkoutUrl;

    } catch(err) {
      console.error('[Pricing] create-payment error:', err);
      Pricing._setState('error');
      var errMsg = err.name === 'AbortError'
        ? 'Máy chủ không phản hồi (timeout 15s). Thử lại sau hoặc liên hệ hỗ trợ.'
        : (err.message || 'Không thể kết nối đến cổng thanh toán.');
      document.getElementById('pmErrorMsg').textContent =
        errMsg + '\n\nLiên hệ genzstudy06@gmail.com để được hỗ trợ thủ công.';
    }
  },

  // ── Switch modal state ────────────────────────────────
  _setState: function(state) {
    ['confirm', 'loading', 'error'].forEach(function(s) {
      var el = document.getElementById('pmState' + s.charAt(0).toUpperCase() + s.slice(1));
      if (el) el.style.display = (s === state) ? 'block' : 'none';
    });
  },

  // ── Handle PayOS redirect-back (?payment=success) ─────
  _checkReturnUrl: function() {
    var params  = new URLSearchParams(window.location.search);
    var payment = params.get('payment');
    var plan    = params.get('plan');
    if (!payment) return;

    window.history.replaceState({}, '', window.location.pathname);

    if (payment === 'success') {
      var planName = plan ? ((Pricing._plans[plan] || {}).name || plan) : '';
      if (typeof showToast === 'function')
        showToast('🎉 Thanh toán thành công! Gói ' + planName + ' đã được kích hoạt.');
      if (typeof Monetization !== 'undefined' && Monetization.resetCache)
        Monetization.resetCache();
    } else if (payment === 'cancel') {
      if (typeof showToast === 'function') showToast('Đã huỷ thanh toán.');
    }
  }
};
