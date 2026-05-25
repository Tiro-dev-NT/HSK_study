// ═══════════════════════════════════════════════════════
// CMD-PALETTE.JS — ⌘K / Ctrl+K Command Palette
// Desktop Polish Wave 1 · Phase Q.alt
//
// Usage:
//   CmdPalette.open()  — show palette
//   CmdPalette.close() — hide palette
//   CmdPalette.setup() — wire keyboard shortcut + inject DOM
// ═══════════════════════════════════════════════════════

var CmdPalette = (function() {

  // ── Command registry ──────────────────────────────────
  // { section, icon, label, desc, page?, action?, kbd? }
  var COMMANDS = [
    // ─ Navigation ─
    { section: 'Điều hướng', icon: '🏠', label: 'Tổng quan',       desc: 'Về trang chủ',                  page: 'home' },
    { section: 'Điều hướng', icon: '📚', label: 'Học',             desc: 'Lộ trình & bộ thẻ từ vựng',     page: 'learn' },
    { section: 'Điều hướng', icon: '⚡', label: 'Luyện tập',        desc: 'Quiz, mock test, thi thử',       page: 'practice' },
    { section: 'Điều hướng', icon: '🔧', label: 'Công cụ',          desc: 'Từ điển, Pinyin Lab, luyện viết',page: 'tools' },
    { section: 'Điều hướng', icon: '👤', label: 'Hồ sơ',           desc: 'Tiến độ, thành tích, cài đặt',   page: 'profile' },
    { section: 'Điều hướng', icon: '🌐', label: 'Cộng đồng',        desc: 'Bảng phong vân, sảnh trà',       page: 'community' },
    // ─ Học ─
    { section: 'Học',        icon: '📖', label: 'Từ điển',          desc: 'Tra từ, TTS, Pinyin lookup',      page: 'dictionary' },
    { section: 'Học',        icon: '📝', label: 'Ngữ pháp',         desc: 'Các mẫu ngữ pháp HSK',           page: 'grammar' },
    { section: 'Học',        icon: '📰', label: 'Đọc hiểu',         desc: 'Bài đọc + luyện nghe',           page: 'reading' },
    { section: 'Học',        icon: '🗺️', label: 'Bản đồ HSK',       desc: 'Lộ trình học tập HSK 1-9',       page: 'ban-do-hsk' },
    { section: 'Học',        icon: '🔤', label: 'Pinyin Lab',        desc: 'Luyện phát âm & thanh điệu',     page: 'pinyin-lab' },
    { section: 'Học',        icon: '✍️', label: 'Luyện viết',        desc: 'Viết nét + PDF xuất bài',        page: 'handwriting' },
    { section: 'Học',        icon: '🎓', label: 'Thi cuối HSK 0',   desc: 'Kiểm tra kết thúc HSK 0',        page: 'hsk0-final' },
    { section: 'Học',        icon: '⚡', label: 'Kiểm tra đầu vào', desc: 'Bỏ qua HSK 0 nếu đã biết',       page: 'hsk0-placement' },
    { section: 'Học',        icon: '💡', label: 'Phương pháp học',   desc: 'SRS, kỹ thuật ghi nhớ hiệu quả', page: 'learn-method' },
    // ─ Luyện tập ─
    { section: 'Luyện tập',  icon: '❓', label: 'Ôn tập từ vựng',   desc: 'Quiz flashcard & trắc nghiệm',   page: 'quiz' },
    { section: 'Luyện tập',  icon: '🎮', label: 'Trò chơi',          desc: 'Boss Battle, Racing Quiz…',      page: 'games' },
    // ─ Cá nhân ─
    { section: 'Cá nhân',    icon: '🃏', label: 'Bộ thẻ của tôi',   desc: 'Quản lý bộ thẻ flashcard',       page: 'vault' },
    { section: 'Cá nhân',    icon: '🗂️', label: 'Từ vựng cá nhân',  desc: 'Từ đã lưu + bộ lọc tag',         page: 'my-vocab' },
    { section: 'Cá nhân',    icon: '📥', label: 'Nhập từ vựng',      desc: 'Import CSV / Anki',              page: 'vocab-import' },
    { section: 'Cá nhân',    icon: '⚔️', label: 'Nhiệm vụ',          desc: 'Quest hằng ngày & token',        page: 'quests' },
    { section: 'Cá nhân',    icon: '🏛️', label: 'Sảnh vinh danh',   desc: 'Top học viên danh dự',           page: 'honor-hall' },
    { section: 'Cá nhân',    icon: '💳', label: 'Nâng cấp Pro',      desc: 'So sánh Free vs Pro',            page: 'pricing' },
    // ─ Hành động ─
    { section: 'Hành động',  icon: '🌙', label: 'Chuyển theme',      desc: 'Sáng / Tối',
      action: function() { if (typeof toggleTheme === 'function') toggleTheme(); },
      kbd: 'T' },
    { section: 'Hành động',  icon: '⚙️', label: 'Cài đặt',          desc: 'Giao diện, ngôn ngữ, âm thanh',
      action: function() { if (typeof openSettings === 'function') openSettings(); } },
    { section: 'Hành động',  icon: '💬', label: 'Góp ý',            desc: 'Gửi phản hồi cho đội ngũ',       page: 'feedback' },
  ];

  // ── State ─────────────────────────────────────────────
  var _overlay  = null;
  var _input    = null;
  var _list     = null;
  var _active   = -1;   // index in _filtered
  var _filtered = [];

  // ── Build DOM (once) ──────────────────────────────────
  function _buildDOM() {
    _overlay = document.createElement('div');
    _overlay.className = 'cmdp-overlay';
    _overlay.setAttribute('aria-modal', 'true');
    _overlay.setAttribute('role', 'dialog');
    _overlay.setAttribute('aria-label', 'Tìm kiếm nhanh');
    _overlay.innerHTML =
      '<div class="cmdp-dialog">' +
        '<div class="cmdp-search-row">' +
          '<span class="cmdp-search-icon">🔍</span>' +
          '<input class="cmdp-input" id="cmdpInput" type="text"' +
            ' placeholder="Tìm trang, lệnh…" autocomplete="off" spellcheck="false"/>' +
          '<span class="cmdp-esc-badge">Esc</span>' +
        '</div>' +
        '<div class="cmdp-results" id="cmdpResults"></div>' +
        '<div class="cmdp-footer">' +
          '<span><kbd>↑↓</kbd> Di chuyển</span>' +
          '<span><kbd>↵</kbd> Chọn</span>' +
          '<span><kbd>Esc</kbd> Đóng</span>' +
        '</div>' +
      '</div>';

    document.body.appendChild(_overlay);
    _input = _overlay.querySelector('#cmdpInput');
    _list  = _overlay.querySelector('#cmdpResults');

    // Close on backdrop click
    _overlay.addEventListener('click', function(e) {
      if (e.target === _overlay) close();
    });

    // Input: filter on each keystroke
    _input.addEventListener('input', function() {
      _active = 0;
      _render(_input.value.trim());
    });

    // Keyboard navigation inside palette
    _overlay.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        _active = Math.min(_active + 1, _filtered.length - 1);
        _highlight();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        _active = Math.max(_active - 1, 0);
        _highlight();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (_filtered[_active]) _run(_filtered[_active]);
      }
    });
  }

  // ── Render filtered list ──────────────────────────────
  function _render(query) {
    var q = query.toLowerCase();

    // Filter
    _filtered = q
      ? COMMANDS.filter(function(cmd) {
          return cmd.label.toLowerCase().includes(q) ||
                 cmd.desc.toLowerCase().includes(q) ||
                 cmd.section.toLowerCase().includes(q);
        })
      : COMMANDS.slice();

    if (_filtered.length === 0) {
      _list.innerHTML = '<div class="cmdp-empty">Không tìm thấy "' + _escHtml(query) + '"</div>';
      return;
    }

    // Group by section
    var sections = {};
    _filtered.forEach(function(cmd) {
      (sections[cmd.section] = sections[cmd.section] || []).push(cmd);
    });

    var html = '';
    var idx = 0;
    Object.keys(sections).forEach(function(sec) {
      if (!q) {
        html += '<div class="cmdp-section-label">' + _escHtml(sec) + '</div>';
      }
      sections[sec].forEach(function(cmd) {
        var kbdHtml = cmd.kbd
          ? '<span class="cmdp-item-kbdwrap"><span class="cmdp-kbd">' + _escHtml(cmd.kbd) + '</span></span>'
          : '';
        html +=
          '<button class="cmdp-item' + (idx === _active ? ' cmdp-active' : '') + '"' +
            ' data-idx="' + idx + '">' +
            '<span class="cmdp-item-icon">' + cmd.icon + '</span>' +
            '<span class="cmdp-item-text">' +
              '<div class="cmdp-item-label">' + _escHtml(cmd.label) + '</div>' +
              '<div class="cmdp-item-desc">' + _escHtml(cmd.desc) + '</div>' +
            '</span>' +
            kbdHtml +
          '</button>';
        idx++;
      });
    });

    _list.innerHTML = html;

    // Wire click
    _list.querySelectorAll('.cmdp-item').forEach(function(btn) {
      btn.addEventListener('mouseenter', function() {
        _active = parseInt(btn.dataset.idx, 10);
        _highlight();
      });
      btn.addEventListener('click', function() {
        var i = parseInt(btn.dataset.idx, 10);
        if (_filtered[i]) _run(_filtered[i]);
      });
    });
  }

  // ── Highlight active row ──────────────────────────────
  function _highlight() {
    var items = _list.querySelectorAll('.cmdp-item');
    items.forEach(function(el, i) {
      el.classList.toggle('cmdp-active', i === _active);
    });
    var active = items[_active];
    if (active) active.scrollIntoView({ block: 'nearest' });
  }

  // ── Execute selected command ──────────────────────────
  function _run(cmd) {
    close();
    if (cmd.action) {
      try { cmd.action(); } catch(e) { console.error('[CmdPalette] action error:', e); }
    } else if (cmd.page) {
      if (typeof Router !== 'undefined') {
        Router.navigateTo(cmd.page);
      }
    }
  }

  // ── Escape HTML helper ────────────────────────────────
  function _escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ── Public API ────────────────────────────────────────
  function open() {
    if (!_overlay) _buildDOM();
    _active = 0;
    _input.value = '';
    _render('');
    _overlay.classList.add('cmdp-visible');
    // RAF to ensure transition plays after display
    requestAnimationFrame(function() { _input.focus(); });
  }

  function close() {
    if (!_overlay) return;
    _overlay.classList.remove('cmdp-visible');
    _input.blur();
  }

  function setup() {
    // ⌘K (Mac) / Ctrl+K (Win/Linux)
    document.addEventListener('keydown', function(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (_overlay && _overlay.classList.contains('cmdp-visible')) {
          close();
        } else {
          open();
        }
      }
    });
  }

  return { open: open, close: close, setup: setup };

}());
