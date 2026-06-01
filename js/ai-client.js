// ═══════════════════════════════════════════════════════════════════════
// AI-CLIENT.JS — caller MỎNG cho Edge Function `ai-proxy`
//
// ⚠️ Triết lý: file này KHÔNG chứa:
//   • API key (key chỉ ở ai-proxy / Deno env)
//   • Logic trừ credit / cap / fallback model (server-side, atomic)
//   • Router model
// Nó CHỈ: đính JWT → POST ai-proxy → trả kết quả + cập nhật badge + xử lý
//          soft-block (hết credit / quá cap ngày) một cách mềm.
//
// Dùng (Phase R/S/Y khi build feature):
//   const r = await AIClient.call('tutor_chat', { prompt: '...', system: '...' });
//   if (r.ok) show(r.text); else AIClient.handleBlock(r);   // soft, không khóa app
//
// Test pipeline (không cần model key):
//   await AIClient.call('ping');   // trừ 1 credit, trả 'pong ...'
// ═══════════════════════════════════════════════════════════════════════

var AIClient = (function () {
  'use strict';

  var FN_URL = (typeof SB_URL !== 'undefined' ? SB_URL : '') + '/functions/v1/ai-proxy';

  // Lấy access token hiện tại (JWT) để ai-proxy biết auth.uid()
  async function _accessToken() {
    if (!window.SB) return null;
    try {
      var res = await SB.auth.getSession();
      var s = res && res.data && res.data.session;
      return (s && s.access_token) || null;
    } catch (e) {
      return null;
    }
  }

  // Gọi 1 task AI. opts = { prompt, system, deep, timeoutMs }
  // Trả: { ok:true, text, model, balance, credit_used, lane }
  //   hoặc { ok:false, reason, balance?, cap?, _http }
  async function call(task, opts) {
    opts = opts || {};
    var token = await _accessToken();
    if (!token) return { ok: false, reason: 'not_logged_in' };

    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, opts.timeoutMs || 45000);

    try {
      var res = await fetch(FN_URL, {
        method: 'POST',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          task:   task,
          prompt: opts.prompt || '',
          system: opts.system || undefined,
          deep:   opts.deep === true ? true : undefined
        }),
        signal: ctrl.signal
      });
      clearTimeout(timer);

      var data = {};
      try { data = await res.json(); } catch (e) {}
      data._http = res.status;

      // Đồng bộ badge từ balance server trả về (consume đã chạy atomic)
      if (typeof data.balance === 'number' && window.AICredit) {
        AICredit._lastBalance = data.balance;
        try { localStorage.setItem(AICredit._CACHE_KEY, String(data.balance)); } catch (e) {}
        AICredit.updateUI(data.balance);
      }
      return data;

    } catch (err) {
      clearTimeout(timer);
      return { ok: false, reason: err.name === 'AbortError' ? 'timeout' : 'network_error' };
    }
  }

  // Xử lý soft-block CHUNG — KHÔNG khóa app (hạng-1 vẫn free).
  // Hiển thị toast/modal phù hợp theo reason.
  function handleBlock(r) {
    if (!r || r.ok) return;
    switch (r.reason) {
      case 'not_logged_in':
        if (typeof showToast === 'function') showToast('Đăng nhập để dùng tính năng AI nhé.');
        break;
      case 'insufficient_credit':
        // Hết credit hạng-2 — mời nạp, KHÔNG chặn cứng.
        if (window.AICredit && AICredit.openModal) AICredit.openModal();
        else if (typeof showToast === 'function') showToast('🔮 Hết AI Credit — vào Bảng giá để nạp thêm.');
        break;
      case 'daily_cap_exceeded':
        if (typeof showToast === 'function') {
          showToast('Bạn đã đạt trần lượt AI hôm nay (' + (r.cap || '') + '). Quay lại ngày mai nhé!');
        }
        break;
      case 'deep_required':
        if (typeof showToast === 'function') showToast('Tính năng "Chấm sâu" cần bật chế độ chấm chuyên sâu.');
        break;
      case 'model_unavailable':
        if (typeof showToast === 'function') showToast('AI đang bận, đã hoàn lại credit. Thử lại sau giây lát.');
        break;
      case 'timeout':
        if (typeof showToast === 'function') showToast('AI phản hồi chậm — thử lại nhé.');
        break;
      default:
        if (typeof showToast === 'function') showToast('Không gọi được AI lúc này.');
    }
  }

  return {
    call:        call,
    handleBlock: handleBlock
  };
}());

if (typeof window !== 'undefined') window.AIClient = AIClient;
