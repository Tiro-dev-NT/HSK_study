// ═══════════════════════════════════════════════════════
// PRESENCE.JS — Đếm online realtime (Supabase Realtime Presence)
// • Mọi khách (kể cả CHƯA đăng nhập) join 1 channel presence.
// • Admin dùng Presence.watch(cb) để nhận số online tức thì.
// • KHÔNG ghi DB, KHÔNG lưu IP/PII — chỉ id ngẫu nhiên + cờ auth,
//   sống tạm trên Realtime server (ephemeral). Privacy-safe.
// • Free-tier phòng thủ: lazy-connect, 1 channel chung, cờ tắt nhanh.
// ═══════════════════════════════════════════════════════

var Presence = (function() {

  var ENABLED      = true;            // kill-switch: false → tắt hẳn, không kết nối
  var CHANNEL_NAME = 'online-users';
  var CONNECT_DELAY = 4000;           // bỏ qua bounce + giảm churn kết nối trên free tier

  var _channel  = null;
  var _watchers = [];
  var _started  = false;

  // Id ngẫu nhiên/thiết bị (localStorage) — KHÔNG phải danh tính người dùng.
  // Nhiều tab cùng trình duyệt → cùng key → đếm gộp 1 (gần "thiết bị" hơn).
  function _clientId() {
    var k = 'hsk_client_id', id = null;
    try {
      id = localStorage.getItem(k);
      if (!id) {
        id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
        localStorage.setItem(k, id);
      }
    } catch (e) {
      id = 'tmp-' + Math.random().toString(36).slice(2, 8);
    }
    return id;
  }

  function _authed() {
    return !!(window.Auth && Auth.user) || !!(window.AppState && AppState.user);
  }

  // Mọi trang gọi (qua app.js). Lazy để không đếm khách bounce ngay.
  function init() {
    if (!ENABLED || _started || !window.SB || !SB.channel) return;
    _started = true;
    setTimeout(_connect, CONNECT_DELAY);
  }

  function _connect() {
    if (_channel) return;
    try {
      _channel = SB.channel(CHANNEL_NAME, { config: { presence: { key: _clientId() } } });
      _channel.on('presence', { event: 'sync' },  _emit);
      _channel.on('presence', { event: 'join' },  _emit);
      _channel.on('presence', { event: 'leave' }, _emit);
      _channel.subscribe(function(status) {
        if (status === 'SUBSCRIBED') {
          _channel.track({ id: _clientId(), auth: _authed(), at: Date.now() });
          _emit();
        }
      });
    } catch (e) {
      console.warn('[PRESENCE] connect failed', e);
    }
  }

  // Đếm theo KEY (mỗi thiết bị 1 key) — total / đã đăng nhập / khách.
  function counts() {
    if (!_channel || !_channel.presenceState) return { total: 0, authed: 0, anon: 0 };
    var state = _channel.presenceState();
    var total = 0, authed = 0;
    Object.keys(state).forEach(function(key) {
      total++;
      var m = (state[key] && state[key][0]) || {};
      if (m.auth) authed++;
    });
    return { total: total, authed: authed, anon: total - authed };
  }

  function _emit() {
    var c = counts();
    _watchers.forEach(function(cb) { try { cb(c); } catch (e) {} });
  }

  // Admin: nhận count realtime. Tự init nếu chưa (admin cũng là 1 member).
  function watch(cb) {
    if (typeof cb === 'function') _watchers.push(cb);
    if (!_started) init();
    if (_channel) _emit();
    return function() {
      _watchers = _watchers.filter(function(f) { return f !== cb; });
    };
  }

  return { init: init, watch: watch, counts: counts };

}());
