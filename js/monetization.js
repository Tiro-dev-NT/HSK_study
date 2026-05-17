// ═══════════════════════════════════════════════════════
// MONETIZATION.JS — Subscription gating (Phase K v2)
// • isPro()       — async, Supabase-backed, session-cached
// • getDuration() — returns 'monthly'|'quarterly'|...|null
// • resetCache()  — call on sign-out / after upgrade
// • showGate()    — full-screen overlay for locked features
//
// Schema (v7): user_subscriptions(plan TEXT IN ('free','pro'),
//                                 duration TEXT, expires_at TIMESTAMPTZ)
//   - plan='pro' AND (duration='lifetime' OR expires_at > NOW())
//     → user has Pro
// ═══════════════════════════════════════════════════════

var Monetization = (function() {

  // _cache: null = unknown; { pro: bool, duration: string|null } when resolved
  var _cache = null;

  async function _resolve() {
    if (_cache !== null) return _cache;
    if (!window.Auth || !Auth.user || !window.SB) {
      _cache = { pro: false, duration: null };
      return _cache;
    }

    var res = await SB.from('user_subscriptions')
      .select('plan, status, duration, expires_at')
      .eq('user_id', Auth.user.id)
      .maybeSingle();

    var d = res.data;
    var pro = false;
    var duration = null;

    if (d && d.status === 'active' && d.plan === 'pro') {
      duration = d.duration || null;
      if (duration === 'lifetime') {
        pro = true;
      } else if (d.expires_at) {
        pro = new Date(d.expires_at).getTime() > Date.now();
      } else {
        // Defensive: missing expires_at for a non-lifetime row → treat as expired.
        pro = false;
      }
    }

    _cache = { pro: pro, duration: pro ? duration : null };
    return _cache;
  }

  async function isPro() {
    var r = await _resolve();
    return r.pro;
  }

  async function getDuration() {
    var r = await _resolve();
    return r.duration;
  }

  // Synchronous cached read — returns false if cache not warmed yet.
  // Use from hot paths (e.g. quest rendering). Call isPro() once on app
  // init to warm cache.
  function isProSync()       { return _cache ? _cache.pro : false; }
  function getDurationSync() { return _cache ? _cache.duration : null; }

  function resetCache() { _cache = null; }

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

  return {
    isPro:           isPro,
    getDuration:     getDuration,
    isProSync:       isProSync,
    getDurationSync: getDurationSync,
    resetCache:      resetCache,
    showGate:        showGate
  };
}());
