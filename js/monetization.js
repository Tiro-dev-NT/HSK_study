// ═══════════════════════════════════════════════════════
// MONETIZATION.JS — Subscription gating (Phase K v1)
// • isPro()      — async, Supabase-backed, session-cached
// • showGate()   — full-screen overlay for locked features
// • resetCache() — call on sign-out
// ═══════════════════════════════════════════════════════

var Monetization = (function() {

  var _cache = null; // null = unknown, true/false = resolved

  // ── isPro: returns true if user has basic/pro/max active subscription ──
  async function isPro() {
    if (_cache !== null) return _cache;
    if (!window.Auth || !Auth.user || !window.SB) { _cache = false; return false; }

    var res = await SB.from('user_subscriptions')
      .select('plan,status')
      .eq('user_id', Auth.user.id)
      .maybeSingle();

    var data = res.data;
    _cache = !!(data && data.status === 'active' && data.plan !== 'free');
    return _cache;
  }

  function resetCache() { _cache = null; }

  // ── showGate: show locked-feature overlay (element is static in HTML) ─
  function showGate(featureName) {
    var g = document.getElementById('proGate');
    if (!g) return;
    var titleEl = document.getElementById('proGateTitle');
    if (titleEl) titleEl.textContent = featureName || 'Tính năng này';
    g.style.display = 'flex';

    document.getElementById('proGateCta').onclick = function() {
      g.style.display = 'none';
      if (typeof Router !== 'undefined') Router.navigateTo('pricing');
    };
    document.getElementById('proGateClose').onclick = function() {
      g.style.display = 'none';
    };
  }

  return { isPro: isPro, resetCache: resetCache, showGate: showGate };
}());
