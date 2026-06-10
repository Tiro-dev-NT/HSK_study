// ═══════════════════════════════════════════════════════
// ADMIN/FEEDBACK.JS — Section 6: Góp ý (v1.1 — 3-column layout)
// ═══════════════════════════════════════════════════════

var AdminFeedback = (function() {
  var _items = [];
  var _selected = null;
  var _statusFilter = '';

  function init() {
    _bindFilterTabs();
    _bindSearch();
    refreshList();
  }

  function refreshList() {
    _loadFeedback();
  }

  function _bindFilterTabs() {
    var bar = document.getElementById('fbFilterTabs');
    if (!bar) return;
    bar.addEventListener('click', function(e) {
      var btn = e.target.closest('.adm-fbtab[data-fstatus]');
      if (!btn) return;
      bar.querySelectorAll('.adm-fbtab').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      _statusFilter = btn.dataset.fstatus || '';
      _renderList();
    });
  }

  function _bindSearch() {
    var s = document.getElementById('fbSearch');
    if (s) s.addEventListener('input', _renderList);
  }

  async function _loadFeedback() {
    var listEl = document.getElementById('fbList');
    if (listEl) listEl.innerHTML = '<p class="adm-empty">Đang tải...</p>';

    if (window.SB) {
      var res = await SB.rpc('admin_list_feedback', { p_limit: 100 });
      if (!res.error && res.data) {
        _items = res.data;
        _renderList();
        _updateBadges();
        return;
      }
    }

    // Fallback: localStorage
    var local = JSON.parse(localStorage.getItem('hsk_feedback') || '[]');
    _items = local.map(function(f, i) {
      return {
        id:           f.id || i,
        user_email:   'user@local',
        display_name: 'Local user',
        subject:      f.category || 'Góp ý',
        message:      f.message || '',
        priority:     f.rating >= 4 ? 'urgent' : 'normal',
        status:       'unread',
        created_at:   new Date(f.id || Date.now()).toISOString(),
        category:     f.category || 'feature',
        tier:         'free'
      };
    });
    _renderList();
    _updateBadges();
  }

  function _renderList() {
    var listEl = document.getElementById('fbList');
    if (!listEl) return;

    var q = ((document.getElementById('fbSearch') || {}).value || '').toLowerCase().trim();
    var filtered = _items.filter(function(f) {
      if (_statusFilter === 'unread' && f.status !== 'unread') return false;
      if (_statusFilter === 'replied' && f.status !== 'replied') return false;
      if (_statusFilter === 'resolved' && f.status !== 'resolved') return false;
      if (_statusFilter && !['unread','replied','resolved'].includes(_statusFilter)) return false;
      if (q && (f.subject || '').toLowerCase().indexOf(q) === -1 &&
               (f.message || '').toLowerCase().indexOf(q) === -1 &&
               (f.display_name || '').toLowerCase().indexOf(q) === -1) return false;
      return true;
    });

    if (!filtered.length) {
      listEl.innerHTML = AdminUI
        ? AdminUI.emptyState('💬', 'Không có góp ý nào', 'Thử đổi bộ lọc hoặc từ khoá tìm kiếm')
        : '<p class="adm-empty">Không có góp ý nào.</p>';
      return;
    }

    listEl.innerHTML = filtered.map(function(f) {
      var isSelected = _selected && String(_selected.id) === String(f.id);
      if (window.AdminUI) {
        return AdminUI.fbItem({
          id:           f.id,
          name:         f.display_name || f.user_email || 'Ẩn danh',
          email:        f.user_email,
          subject:      f.subject || f.category || 'Góp ý',
          snippet:      (f.message || '').slice(0, 80),
          time_display: Admin.relTime(f.created_at),
          priority:     f.priority,
          unread:       f.status === 'unread',
          tier:         f.tier || (f.is_pro ? 'pro' : 'free')
        }, isSelected);
      }
      // minimal fallback
      var cls = 'adm-fb-item' + (f.status === 'unread' ? ' unread' : '') + (isSelected ? ' active' : '');
      return '<div class="' + cls + '" data-fbid="' + f.id + '">'
        + '<div class="adm-fb-body"><div class="adm-fb-row1">'
        + '<span class="adm-fb-sender">' + (f.display_name || f.user_email) + '</span>'
        + '<span class="adm-fb-ts">' + Admin.relTime(f.created_at) + '</span>'
        + '</div><div class="adm-fb-subject">' + (f.subject || '') + '</div></div></div>';
    }).join('');

    listEl.querySelectorAll('.adm-fb-item').forEach(function(el) {
      el.addEventListener('click', function() {
        var id = el.dataset.fbid;
        var found = _items.find(function(f) { return String(f.id) === String(id); });
        if (found) _openDetail(found);
      });
    });
  }

  function _openDetail(f) {
    _selected = f;
    _renderList();

    // Mark as read
    if (f.status === 'unread') {
      f.status = 'read';
      _markRead(f.id);
    }

    _renderDetail(f);
    _renderUserAside(f);
  }

  function _renderDetail(f) {
    var col = document.getElementById('fbDetail');
    if (!col) return;

    var tier      = f.tier || (f.is_pro ? 'pro' : 'free');
    var tierHtml  = window.AdminUI ? AdminUI.tierBadge(tier) : '';
    var priHtml   = window.AdminUI
      ? (f.priority === 'urgent' ? AdminUI.badge('danger', 'Khẩn')
        : f.priority === 'normal' ? AdminUI.badge('warning', 'Bình thường')
        : AdminUI.badge('neutral', 'Thấp'))
      : f.priority;
    var name = f.display_name || f.user_email || 'Ẩn danh';

    col.innerHTML =
      // header
      '<div class="adm-fb-detail-hd">'
      + '<div class="adm-fb-detail-from">'
      + (window.AdminUI ? AdminUI.avatar((name.split(' ').slice(-1)[0][0] || '?'), 'md', 'c1') : '<div style="width:32px;height:32px;border-radius:50%;background:#FEE2E2;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:#B91C1C">' + name[0] + '</div>')
      + '<div class="adm-col adm-gap-4" style="min-width:0">'
      + '<div class="adm-center adm-gap-6"><span class="adm-fb-detail-name">' + name + '</span>' + tierHtml + '</div>'
      + '<div class="adm-fb-detail-email">' + (f.user_email || '') + ' · ' + Admin.absDate(f.created_at) + '</div>'
      + '</div>'
      + '</div>'
      + '<div class="adm-row adm-gap-6">'
      + '<button class="adm-btn-secondary-sm" onclick="AdminFeedback._pinFeedback(\'' + f.id + '\')">📌 Pin</button>'
      + '<button class="adm-btn-ghost" style="padding:4px 6px" title="Thêm">⋮</button>'
      + '</div>'
      + '</div>'
      // subject + priority
      + '<div style="padding:14px 20px 0">'
      + '<h2 class="adm-fb-detail-subject">' + (f.subject || f.category || 'Góp ý') + '</h2>'
      + '<div class="adm-row adm-gap-6 adm-center" style="margin-bottom:14px">'
      + '<span class="adm-chip" style="background:#FEF2F2;border-color:#FECACA;color:#B91C1C;height:22px;font-size:10.5px">Bug</span>'
      + '<span style="margin-left:auto;font-size:11px;color:var(--adm-text3)">Priority: ' + priHtml + '</span>'
      + '</div>'
      + '</div>'
      // message body
      + '<div class="scroll-y" style="flex:1;padding:0 20px">'
      + '<div class="adm-fb-detail-body">' + (f.message || '') + '</div>'
      + '</div>'
      // reply area
      + '<div class="adm-fb-reply" id="fbReplyArea">'
      + '<div class="adm-fb-reply-templates">'
      + '<span>Trả lời với template:</span>'
      + '<span class="adm-chip" style="height:24px;font-size:11px;cursor:pointer" onclick="document.getElementById(\'fbReplyText\').value=\'Cảm ơn bạn đã góp ý! \'">Cảm ơn góp ý</span>'
      + '<span class="adm-chip" style="height:24px;font-size:11px;cursor:pointer" onclick="document.getElementById(\'fbReplyText\').value=\'Đang fix trong v tiếp theo. \'">Đang fix</span>'
      + '<span class="adm-chip" style="height:24px;font-size:11px;cursor:pointer" onclick="document.getElementById(\'fbReplyText\').value=\'Đã release trong bản mới nhất! \'">Đã release</span>'
      + '</div>'
      + '<textarea id="fbReplyText" placeholder="Trả lời góp ý này…">' + (f.reply_text || '') + '</textarea>'
      + '<div class="adm-fb-reply-actions">'
      + '<div class="adm-row adm-gap-6">'
      + '<button class="adm-btn-secondary-sm" id="fbMarkResolved">✓ Đã giải quyết</button>'
      + _curationBtns(f)
      + '</div>'
      + '<div class="adm-row adm-gap-6">'
      + '<button class="adm-btn-ghost" style="font-size:12px">Lưu nháp</button>'
      + '<button class="adm-btn-primary-sm" id="fbReplySend">✉ Gửi reply</button>'
      + '</div>'
      + '</div>'
      + '<div id="fbReplyResult" class="adm-result"></div>'
      + '</div>';

    var sendBtn = document.getElementById('fbReplySend');
    if (sendBtn) sendBtn.addEventListener('click', function() { _sendReply(f.id); });
    var resolveBtn = document.getElementById('fbMarkResolved');
    if (resolveBtn) resolveBtn.addEventListener('click', function() { _markResolved(f.id); });
    var approveBtn = document.getElementById('fbApproveBtn');
    if (approveBtn) approveBtn.addEventListener('click', function() { _setApproved(f.id, !f.is_approved); });
    var featureBtn = document.getElementById('fbFeatureBtn');
    if (featureBtn && !featureBtn.disabled) featureBtn.addEventListener('click', function() { _setFeatured(f.id, !f.is_featured); });
  }

  // Trang Tri Ân curation buttons (duyệt công khai + chọn MVP tháng).
  function _curationBtns(f) {
    var approve;
    if (!f.public_consent) {
      approve = '<button class="adm-btn-ghost" style="font-size:12px" disabled title="User chưa cho phép đăng công khai">🔒 Chưa cho công khai</button>';
    } else {
      approve = '<button class="adm-btn-ghost" id="fbApproveBtn" style="font-size:12px">'
        + (f.is_approved ? '✓ Đang công khai' : '🌸 Duyệt công khai') + '</button>';
    }
    var canFeature = f.public_consent && f.is_approved;
    var feature = '<button class="adm-btn-ghost" id="fbFeatureBtn" style="font-size:12px"'
      + (canFeature ? '' : ' disabled title="Cần duyệt công khai trước"') + '>'
      + (f.is_featured ? '🌟 Đang là MVP' : '🌟 Đặt làm MVP') + '</button>';
    return approve + feature;
  }

  async function _setApproved(fbId, val) {
    var resEl = document.getElementById('fbReplyResult');
    if (window.SB) {
      var res = await SB.rpc('admin_set_feedback_approved', { p_id: fbId, p_val: val });
      if (res.error || (res.data && res.data.ok === false)) {
        _setResult(resEl, '❌ ' + ((res.data && res.data.error) || (res.error && res.error.message) || 'lỗi'), false);
        return;
      }
    }
    var f = _items.find(function(x) { return String(x.id) === String(fbId); });
    if (f) { f.is_approved = val; if (!val) f.is_featured = false; }
    if (_selected && String(_selected.id) === String(fbId)) _renderDetail(f);
    _setResult(resEl, val ? '✅ Đã duyệt lên Trang Tri Ân' : '✅ Đã gỡ khỏi Trang Tri Ân', true);
  }

  async function _setFeatured(fbId, val) {
    var resEl = document.getElementById('fbReplyResult');
    if (window.SB) {
      var res = await SB.rpc('admin_set_feedback_featured', { p_id: fbId, p_val: val });
      if (res.error || (res.data && res.data.ok === false)) {
        _setResult(resEl, '❌ ' + ((res.data && res.data.error) || (res.error && res.error.message) || 'lỗi'), false);
        return;
      }
    }
    if (val) _items.forEach(function(x) { x.is_featured = false; }); // chỉ 1 MVP
    var f = _items.find(function(x) { return String(x.id) === String(fbId); });
    if (f) f.is_featured = val;
    if (_selected && String(_selected.id) === String(fbId)) _renderDetail(f);
    _setResult(resEl, val ? '🌟 Đã đặt làm MVP tháng' : '✅ Đã bỏ MVP', true);
  }

  function _renderUserAside(f) {
    var aside = document.getElementById('fbUserAside');
    if (!aside) return;
    aside.style.display = '';
    if (window.AdminUI) {
      aside.innerHTML = AdminUI.fbUserAside({
        id:             f.user_id,
        name:           f.display_name || f.user_email || 'Ẩn danh',
        email:          f.user_email,
        tier:           f.tier || (f.is_pro ? 'pro' : 'free'),
        created_at:     f.user_created_at || f.created_at,
        total_feedback: f.total_feedback || '—',
        streak_days:    f.streak_days,
        sentiment:      f.sentiment
      });
    } else {
      aside.innerHTML = '<div style="padding:16px;font-size:12px;color:var(--adm-text3)">User info not available</div>';
    }
  }

  async function _sendReply(fbId) {
    var textEl = document.getElementById('fbReplyText');
    var resEl  = document.getElementById('fbReplyResult');
    var text   = (textEl ? textEl.value : '').trim();
    if (!text) { _setResult(resEl, '⚠ Nhập nội dung reply', false); return; }
    _setResult(resEl, 'Đang gửi...', null);

    if (window.SB) {
      var res = await SB.rpc('admin_reply_feedback', { p_id: fbId, p_reply: text });
      if (res.error) { _setResult(resEl, '❌ ' + res.error.message, false); return; }
    }

    var f = _items.find(function(x) { return x.id === fbId; });
    if (f) { f.status = 'replied'; f.reply_text = text; }
    _setResult(resEl, '✅ Đã gửi reply', true);
    _renderList();
  }

  async function _markResolved(fbId) {
    if (window.SB) await SB.rpc('admin_resolve_feedback', { p_id: fbId });
    var f = _items.find(function(x) { return x.id === fbId; });
    if (f) f.status = 'resolved';
    _renderList();
    _setResult(document.getElementById('fbReplyResult'), '✅ Đã giải quyết', true);
  }

  function _pinFeedback(fbId) {
    // placeholder — Phase V
  }

  async function _markRead(fbId) {
    if (window.SB) await SB.rpc('admin_mark_feedback_read', { p_id: fbId });
    _updateBadges();
  }

  function _updateBadges() {
    var unread = _items.filter(function(f) { return f.status === 'unread'; }).length;
    var pending = _items.filter(function(f) { return f.status === 'unread' || f.status === 'read'; }).length;

    var uBadge = document.getElementById('fbUnreadBadge');
    if (uBadge) uBadge.textContent = unread;
    var uDot = document.getElementById('fbUnreadDot');
    if (uDot) uDot.style.display = unread > 0 ? '' : 'none';
    var allCount = document.getElementById('fbCountAll');
    if (allCount) allCount.textContent = _items.length;
    var pending = document.getElementById('fbPendingCount');
    if (pending) pending.textContent = unread;

    var navBadge = document.getElementById('navFeedbackBadge');
    if (navBadge) {
      navBadge.textContent = unread;
      navBadge.style.display = unread > 0 ? '' : 'none';
    }
  }

  function _setResult(el, msg, ok) {
    if (!el) return;
    el.textContent = msg;
    el.className = 'adm-result' + (ok === true ? ' adm-result-ok' : ok === false ? ' adm-result-err' : '');
  }

  return {
    init:          init,
    refreshList:   refreshList,
    _pinFeedback:  _pinFeedback
  };
}());
