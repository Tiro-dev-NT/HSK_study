// ═══════════════════════════════════════════════════════
// LEADERBOARD.JS — Phase V1 Bảng Phong Vân
// ═══════════════════════════════════════════════════════

var Leaderboard = (function() {
  var _period = 'week';
  var _region = 'global';
  var _profile = null;
  var _busy = false;

  function _el(id) { return document.getElementById(id); }

  function _toast(msg) {
    if (typeof showToast === 'function') showToast(msg);
  }

  function _setError(msg) {
    var el = _el('lbFormError');
    if (el) el.textContent = msg || '';
  }

  function _safeName(name) {
    return String(name || '').trim();
  }

  function _isValidDisplayName(name) {
    name = _safeName(name);
    if (name.length < 2 || name.length > 24) return false;
    if (/[<>"'&/\\\x00-\x1F\x7F]/.test(name)) return false;
    return /^[\p{L}\p{N} _.-]+$/u.test(name);
  }

  function _defaultName() {
    var user = (typeof Auth !== 'undefined') ? Auth.user : null;
    var raw = '';
    if (user && user.user_metadata && user.user_metadata.name) raw = user.user_metadata.name;
    if (!raw && user && user.email) raw = user.email.split('@')[0];
    raw = _safeName(raw).replace(/[<>"'&/\\]/g, '').slice(0, 24);
    return raw.length >= 2 ? raw : '';
  }

  function _requireLogin() {
    var list = _el('lbList');
    var me = _el('lbMeCard');
    var panel = _el('lbOptInPanel');
    if (panel) panel.style.display = 'none';
    if (me) me.innerHTML = '';
    if (list) {
      list.innerHTML = (typeof UIStates !== 'undefined') ? UIStates.empty({
        mood: 'sleep',
        title: 'Đăng nhập để xem Bảng Phong Vân',
        description: 'Leaderboard chỉ hoạt động với tài khoản đã đăng nhập để bảo vệ quyền riêng tư và chống spam.',
        primary: { label: 'Đăng nhập', onClick: 'Auth.openModal()' }
      }) : '<div class="lb-loading">Cần đăng nhập để xem leaderboard.</div>';
    }
  }

  function init() {
    _period = 'week';
    _region = 'global';

    var tabs = document.querySelectorAll('.lb-tab');
    tabs.forEach(function(btn) {
      btn.addEventListener('click', function() {
        _period = btn.dataset.period || 'week';
        tabs.forEach(function(b) { b.classList.toggle('active', b === btn); });
        _load();
      });
    });

    var refresh = _el('lbRefreshBtn');
    if (refresh) refresh.addEventListener('click', _load);

    var join = _el('lbJoinBtn');
    if (join) join.addEventListener('click', function() { _saveProfile(true); });

    var leave = _el('lbLeaveBtn');
    if (leave) leave.addEventListener('click', function() { _saveProfile(false); });

    var region = _el('lbRegion');
    if (region) {
      _region = region.value || 'global';
      region.addEventListener('change', function() {
        _region = region.value || 'global';
        _load();
      });
    }

    var input = _el('lbDisplayName');
    if (input && !input.value) input.value = _defaultName();

    _load();
  }

  async function _load() {
    var list = _el('lbList');
    if (list) list.innerHTML = '<div class="lb-loading">Đang tải Bảng Phong Vân...</div>';

    if (!window.SB || typeof Auth === 'undefined' || !Auth.user) {
      _requireLogin();
      return;
    }

    var periodLabel = _el('lbPeriodLabel');
    if (periodLabel) periodLabel.textContent = _period === 'month' ? 'Tháng này' : 'Tuần này';

    try {
      await recordActivity();
      var res = await SB.rpc('get_leaderboard', {
        p_period: _period,
        p_limit: 50,
        p_region: _region
      });
      if (res.error) throw res.error;
      if (!res.data || res.data.ok === false) throw new Error((res.data && res.data.error) || 'leaderboard_error');
      _profile = res.data.profile || { opted_in: false };
      _renderProfile(_profile);
      _renderMe(res.data.me, _profile);
      _renderList(res.data.top || [], res.data.me);
    } catch(e) {
      console.error('[Leaderboard] load failed', e);
      if (list) {
        list.innerHTML = (typeof UIStates !== 'undefined') ? UIStates.empty({
          mood: 'concerned',
          title: 'Chưa thể tải leaderboard',
          description: 'Nếu bạn vừa thêm SQL, hãy chắc chắn đã chạy sql/v14_leaderboard.sql trên Supabase.',
          primary: { label: 'Thử lại', onClick: 'Leaderboard.init()' }
        }) : '<div class="lb-loading">Không tải được leaderboard.</div>';
      }
    }
  }

  function _renderProfile(profile) {
    var panel = _el('lbOptInPanel');
    if (panel) panel.style.display = '';

    var input = _el('lbDisplayName');
    var region = _el('lbRegion');
    var join = _el('lbJoinBtn');
    var leave = _el('lbLeaveBtn');

    if (input) input.value = profile.display_name || input.value || _defaultName();
    if (region) region.value = _region || 'global';
    if (join) join.textContent = profile.opted_in ? 'Cập nhật tên hiển thị' : 'Tham gia bảng xếp hạng';
    if (leave) leave.style.display = profile.opted_in ? '' : 'none';
    localStorage.setItem('hsk_leaderboard_opted_in', profile.opted_in ? '1' : '0');
  }

  function _renderMe(me, profile) {
    var el = _el('lbMeCard');
    if (!el) return;

    if (!profile || !profile.opted_in) {
      el.innerHTML = '<div class="lb-me-inner">' +
        '<div><div class="lb-me-label">Trạng thái</div><div class="lb-me-name">Bạn chưa tham gia công khai</div></div>' +
        '<div class="lb-me-rank">Bật opt-in để xuất hiện bằng tên hiển thị.</div>' +
      '</div>';
      return;
    }

    if (!me) {
      el.innerHTML = '<div class="lb-me-inner">' +
        '<div><div class="lb-me-label">Hạng của bạn</div><div class="lb-me-name">' + escapeHtml(profile.display_name || 'Bạn') + '</div></div>' +
        '<div class="lb-me-rank"><strong>—</strong>Chưa có hoạt động trong kỳ này</div>' +
      '</div>';
      return;
    }

    el.innerHTML = '<div class="lb-me-inner">' +
      '<div><div class="lb-me-label">Hạng của bạn</div><div class="lb-me-name">' + escapeHtml(me.display_name || profile.display_name || 'Bạn') + '</div></div>' +
      '<div class="lb-me-rank"><strong>#' + escapeHtml(me.rank) + '</strong>' + escapeHtml(me.active_days) + ' ngày học · ' + escapeHtml(me.score_points) + ' điểm</div>' +
    '</div>';
  }

  function _renderList(rows, me) {
    var list = _el('lbList');
    if (!list) return;

    if (!rows.length) {
      list.innerHTML = (typeof UIStates !== 'undefined') ? UIStates.empty({
        mood: 'sleep',
        title: 'Chưa có ai trên bảng kỳ này',
        description: 'Khi học viên đã opt-in và có ngày học đầu tiên, bảng sẽ hiện tại đây.'
      }) : '<div class="lb-loading">Chưa có dữ liệu leaderboard.</div>';
      return;
    }

    var meId = me && me.user_id;
    var html = rows.map(function(row) {
      var rank = parseInt(row.rank, 10) || 0;
      var rankClass = rank <= 3 ? ' lb-rank--' + rank : '';
      var isMe = meId && row.user_id === meId;
      var medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : ('#' + rank);
      return '<div class="lb-row' + (isMe ? ' lb-row--me' : '') + '">' +
        '<div class="lb-rank' + rankClass + '">' + escapeHtml(medal) + '</div>' +
        '<div class="lb-user">' +
          '<div class="lb-user-name">' + escapeHtml(row.display_name || 'Học viên') + '</div>' +
          '<div class="lb-user-meta">' + escapeHtml(row.region === 'vn' ? 'Việt Nam' : 'Toàn cầu') + '</div>' +
        '</div>' +
        '<div class="lb-score"><strong>' + escapeHtml(row.active_days || 0) + '</strong> ngày học<br><span>' + escapeHtml(row.score_points || 0) + ' điểm</span></div>' +
      '</div>';
    }).join('');

    list.innerHTML = html + '<div class="lb-privacy-note">Điểm được ghi bằng RPC server-side, tối đa 1 ngày học/ngày. Tên hiển thị là dữ liệu công khai chỉ khi bạn opt-in.</div>';
  }

  async function _saveProfile(optedIn) {
    if (_busy) return;
    if (!window.SB || typeof Auth === 'undefined' || !Auth.user) {
      _toast('Vui lòng đăng nhập để tham gia leaderboard');
      return;
    }

    var input = _el('lbDisplayName');
    var region = _el('lbRegion');
    var name = _safeName(input ? input.value : '');
    _setError('');

    if (optedIn && !_isValidDisplayName(name)) {
      _setError('Tên hiển thị chỉ gồm chữ, số, khoảng trắng, dấu chấm, gạch ngang hoặc gạch dưới (2–24 ký tự).');
      return;
    }

    _busy = true;
    var join = _el('lbJoinBtn');
    if (join) join.disabled = true;

    try {
      var res = await SB.rpc('set_leaderboard_profile', {
        p_display_name: name,
        p_region: region ? region.value : 'global',
        p_opted_in: optedIn
      });
      if (res.error) throw res.error;
      if (!res.data || res.data.ok === false) throw new Error((res.data && res.data.error) || 'save_failed');
      localStorage.setItem('hsk_leaderboard_opted_in', optedIn ? '1' : '0');
      if (optedIn) await recordActivity(true);
      _toast(optedIn ? 'Đã tham gia Bảng Phong Vân' : 'Đã rời Bảng Phong Vân');
      await _load();
    } catch(e) {
      console.error('[Leaderboard] save failed', e);
      _setError(e.message === 'invalid_display_name' ? 'Tên hiển thị không hợp lệ.' : 'Không lưu được. Kiểm tra SQL Supabase đã chạy chưa.');
    } finally {
      _busy = false;
      if (join) join.disabled = false;
    }
  }

  async function recordActivity(force) {
    if (!window.SB || typeof Auth === 'undefined' || !Auth.user) return;
    if (!force && localStorage.getItem('hsk_leaderboard_opted_in') !== '1') return;

    var today = new Date().toISOString().slice(0, 10);
    var key = 'hsk_leaderboard_recorded_' + today;
    if (!force && localStorage.getItem(key) === '1') return;

    try {
      var res = await SB.rpc('record_leaderboard_activity', { p_activity_type: 'active_day' });
      if (!res.error && res.data && res.data.ok) localStorage.setItem(key, '1');
    } catch(e) {
      console.warn('[Leaderboard] record activity skipped', e);
    }
  }

  return {
    init: init,
    recordActivity: recordActivity
  };
})();
