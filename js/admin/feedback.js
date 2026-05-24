// ═══════════════════════════════════════════════════════
// ADMIN/FEEDBACK.JS — Section 6: Góp ý
// Gmail-style two-column: list + detail + reply
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
    document.querySelectorAll('#fbFilterTabs .adm-tab[data-fstatus]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('#fbFilterTabs .adm-tab').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        _statusFilter = btn.dataset.fstatus || '';
        _renderList();
      });
    });
  }

  function _bindSearch() {
    var s = document.getElementById('fbSearch');
    if (s) s.addEventListener('input', _renderList);
  }

  async function _loadFeedback() {
    var listEl = document.getElementById('fbList');
    if (listEl) listEl.innerHTML = '<p class="adm-empty">Đang tải...</p>';

    // Try Supabase first, fallback to localStorage feedback
    if (window.SB) {
      var res = await SB.rpc('admin_list_feedback', { p_limit: 100 });
      if (!res.error && res.data) {
        _items = res.data;
        _renderList();
        _updateUnreadBadge();
        return;
      }
    }

    // Fallback: load from localStorage (old feedback format)
    var local = JSON.parse(localStorage.getItem('hsk_feedback') || '[]');
    _items = local.map(function(f, i) {
      return {
        id:          f.id || i,
        user_email:  'user@local',
        display_name: 'Local user',
        subject:     f.category || 'Góp ý',
        message:     f.message || '',
        priority:    f.rating >= 4 ? 'high' : 'normal',
        status:      'unread',
        created_at:  new Date(f.id || Date.now()).toISOString(),
        category:    f.category || 'feature'
      };
    });
    _renderList();
    _updateUnreadBadge();
  }

  function _renderList() {
    var listEl = document.getElementById('fbList');
    if (!listEl) return;

    var q = ((document.getElementById('fbSearch') || {}).value || '').toLowerCase().trim();
    var filtered = _items.filter(function(f) {
      if (_statusFilter && f.status !== _statusFilter) return false;
      if (q && (f.subject || '').toLowerCase().indexOf(q) === -1 && (f.message || '').toLowerCase().indexOf(q) === -1) return false;
      return true;
    });

    if (!filtered.length) {
      listEl.innerHTML = '<p class="adm-empty">Không có góp ý nào.</p>';
      return;
    }

    listEl.innerHTML = filtered.map(function(f) {
      var isUnread  = f.status === 'unread';
      var isActive  = _selected && _selected.id === f.id;
      var priDot = f.priority === 'high' ? ' style="border-left:3px solid var(--adm-chau)"' : '';
      var cls = 'adm-fb-item' +
        (isUnread ? ' unread' : '') +
        (isActive ? ' active' : '');
      return '<div class="' + cls + '" data-fbid="' + f.id + '"' + priDot + '>' +
        '<div class="adm-fb-sender">' + (f.display_name || f.user_email || 'Ẩn danh') + '</div>' +
        '<div class="adm-fb-subject">' + (f.subject || f.category || '—') + '</div>' +
        '<div class="adm-fb-snippet">' + (f.message || '').slice(0, 80) + '</div>' +
        '<div class="adm-fb-meta">' +
          '<span class="adm-fb-ts">' + Admin.relTime(f.created_at) + '</span>' +
          _priBadge(f.priority) +
        '</div>' +
      '</div>';
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

    var detailCol = document.getElementById('fbDetail');
    if (!detailCol) return;

    // Mark as read
    if (f.status === 'unread') {
      f.status = 'read';
      _markRead(f.id);
    }

    var proBadge = f.is_pro ? '<span class="adm-badge badge-pro">💎 PRO</span>' : '<span class="adm-badge badge-free">Free</span>';
    var tags = _categoryTags(f.category);

    detailCol.innerHTML =
      '<div class="adm-fb-detail-hd">' +
        '<div class="adm-fb-detail-from">' +
          '<div style="width:40px;height:40px;background:var(--adm-surf2);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">👤</div>' +
          '<div>' +
            '<div class="adm-fb-detail-name">' + (f.display_name || 'Ẩn danh') + ' ' + proBadge + '</div>' +
            '<div class="adm-fb-detail-email">' + (f.user_email || '') + ' · ' + Admin.absDate(f.created_at) + '</div>' +
          '</div>' +
        '</div>' +
        '<h2 class="adm-fb-detail-subject">' + (f.subject || f.category || 'Góp ý') + '</h2>' +
        '<div style="display:flex;gap:6px;flex-wrap:wrap">' + tags + '</div>' +
      '</div>' +

      '<div class="adm-fb-detail-body">' + (f.message || '') + '</div>' +

      (f.reply_text ? '<div class="adm-card" style="margin:0 0 16px;background:#F0FDF4;border-color:#BBF7D0"><strong style="font-size:12px;color:#047857">✉ Reply đã gửi:</strong><p style="margin:8px 0 0;font-size:13px">' + f.reply_text + '</p></div>' : '') +

      '<div class="adm-fb-reply" id="fbReplyArea">' +
        '<textarea id="fbReplyText" placeholder="Trả lời góp ý này..."></textarea>' +
        '<div class="adm-fb-reply-actions">' +
          '<button class="adm-btn-primary" id="fbReplySend">✉ Gửi reply</button>' +
          '<button class="adm-btn-secondary" id="fbMarkResolved">✓ Đã giải quyết</button>' +
          '<button class="adm-btn-ghost">⭐ Promote (Sảnh Trà)</button>' +
        '</div>' +
        '<div id="fbReplyResult" class="adm-result"></div>' +
      '</div>';

    document.getElementById('fbReplySend') &&
      document.getElementById('fbReplySend').addEventListener('click', function() { _sendReply(f.id); });
    document.getElementById('fbMarkResolved') &&
      document.getElementById('fbMarkResolved').addEventListener('click', function() { _markResolved(f.id); });
  }

  async function _sendReply(fbId) {
    var text  = (document.getElementById('fbReplyText').value || '').trim();
    var resEl = document.getElementById('fbReplyResult');
    if (!text) { _setResult(resEl, '⚠ Nhập nội dung reply', false); return; }
    _setResult(resEl, 'Đang gửi...', null);

    if (window.SB) {
      var res = await SB.rpc('admin_reply_feedback', { p_id: fbId, p_reply: text });
      if (res.error) { _setResult(resEl, '❌ ' + res.error.message, false); return; }
    }

    // Update local
    var f = _items.find(function(x) { return x.id === fbId; });
    if (f) { f.status = 'replied'; f.reply_text = text; }

    _setResult(resEl, '✅ Đã gửi reply', true);
    _renderList();
  }

  async function _markResolved(fbId) {
    if (window.SB) {
      await SB.rpc('admin_resolve_feedback', { p_id: fbId });
    }
    var f = _items.find(function(x) { return x.id === fbId; });
    if (f) f.status = 'resolved';
    _renderList();
    if (document.getElementById('fbReplyResult')) {
      _setResult(document.getElementById('fbReplyResult'), '✅ Đã đánh dấu đã giải quyết', true);
    }
  }

  async function _markRead(fbId) {
    if (window.SB) {
      await SB.rpc('admin_mark_feedback_read', { p_id: fbId });
    }
    _updateUnreadBadge();
  }

  function _updateUnreadBadge() {
    var unread = _items.filter(function(f) { return f.status === 'unread'; }).length;
    var badge = document.getElementById('fbUnreadBadge');
    if (badge) badge.textContent = unread;
    var navBadge = document.getElementById('navFeedbackBadge');
    if (navBadge) {
      navBadge.textContent = unread;
      navBadge.style.display = unread > 0 ? '' : 'none';
    }
  }

  function _priBadge(pri) {
    if (pri === 'high')   return '<span class="adm-badge badge-critical" style="font-size:10px">High</span>';
    if (pri === 'normal') return '<span class="adm-badge badge-normal" style="font-size:10px">Normal</span>';
    return '<span class="adm-badge badge-low" style="font-size:10px">Low</span>';
  }

  function _categoryTags(cat) {
    var cats = Array.isArray(cat) ? cat : [cat || 'feature'];
    var colors = { bug: 'badge-failed', feature: 'badge-pending', praise: 'badge-paid', question: 'badge-free' };
    return cats.map(function(c) {
      return '<span class="adm-badge ' + (colors[c] || 'badge-free') + '">' + c + '</span>';
    }).join('');
  }

  function _setResult(el, msg, ok) {
    if (!el) return;
    el.textContent = msg;
    el.className = 'adm-result' + (ok === true ? ' adm-result-ok' : ok === false ? ' adm-result-err' : '');
  }

  return {
    init:        init,
    refreshList: refreshList
  };
}());
