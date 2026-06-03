// ═══════════════════════════════════════════════════════
// APP-GUIDE.JS — "Cách dùng app" guide + first-run onboarding
// • Single component used in 2 ways:
//   1. Auto first-run onboarding (AppGuide.maybeShowFirstRun)
//   2. Manual reopen from Tôi › Cài đặt (AppGuide.open)
// • NOT a learning-method page — that lives at /learn-method.
//   This explains HOW TO USE THE APP (roadmap, tabs, Pro).
// ═══════════════════════════════════════════════════════

var AppGuide = (function() {

  var SEEN_KEY = 'hsk_guide_seen';
  var _step = 0;
  var _el = null;

  // ── Steps content ────────────────────────────────────
  var STEPS = [
    {
      icon: '🐲',
      accent: '#DC2626',
      title: 'Chào mừng đến Hanzi Genz!',
      body: 'Đây là bạn đồng hành học từ vựng tiếng Trung theo chuẩn HSK 3.0 (9 cấp). ' +
            'Hướng dẫn nhanh 5 bước này giúp bạn biết <strong>bắt đầu từ đâu</strong> và <strong>đi tiếp ra sao</strong>.'
    },
    {
      icon: '🗺️',
      accent: '#F59E0B',
      title: 'Lộ trình — học theo thứ tự',
      body: 'Vào tab <strong>Học</strong>, bạn đi tuyến <strong>HSK 0 → 1 → … → 9</strong>. ' +
            'Mỗi cấp là một chuỗi bài <strong>Truyện Mai</strong> (giáo trình chính) — học hết bài này mở bài kế. ' +
            'Thẻ <strong>“Học tiếp”</strong> luôn trỏ đúng bài bạn đang dang dở, không cần tự tìm.'
    },
    {
      icon: '🔁',
      accent: '#10B981',
      title: 'Ôn tập tự động (SRS)',
      body: 'Từ mới học xong sẽ <strong>tự vào kho ôn</strong>. Mỗi ngày, khối <strong>“Hôm nay”</strong> ở tab Học ' +
            'nhắc bạn ôn đúng số từ đến hạn — học ít mà nhớ lâu nhờ lặp lại ngắt quãng.'
    },
    {
      icon: '🧰',
      accent: '#6366F1',
      title: 'Luyện tập & Công cụ',
      body: 'Tab <strong>Luyện tập</strong>: Quiz, Thi thử HSK, luyện Nói (Shadowing/HSKK), chấm Viết. ' +
            'Tab <strong>Công cụ</strong>: Từ điển, Pinyin, luyện viết chữ. ' +
            'Tab <strong>Cộng đồng</strong>: bảng xếp hạng & CLB chuỗi ngày.'
    },
    {
      icon: '💡',
      accent: '#DC2626',
      title: 'Free, Pro & mẹo học',
      body: 'HSK 1–3 học miễn phí; HSK 4+ và một số tính năng nâng cao thuộc <strong>Pro</strong>. ' +
            'Mọi tiến độ được lưu lại theo tài khoản. ' +
            'Muốn biết <strong>cách học cho nhớ lâu</strong>, mở mục <strong>“Cách học hiệu quả”</strong> trong tab Học.',
      cta: { label: '📚 Xem cách học hiệu quả', route: 'learn-method' }
    }
  ];

  // ── Build / render ────────────────────────────────────
  function _render() {
    var s = STEPS[_step];
    var isLast = _step === STEPS.length - 1;
    var dots = STEPS.map(function(_, i) {
      return '<span class="ag-dot' + (i === _step ? ' active' : '') + '"></span>';
    }).join('');

    var ctaHtml = '';
    if (s.cta) {
      ctaHtml = '<button class="ag-cta-link" onclick="AppGuide.goRoute(\'' + s.cta.route + '\')">' +
                s.cta.label + '</button>';
    }

    return '' +
      '<div class="ag-backdrop" onclick="AppGuide.close()"></div>' +
      '<div class="ag-modal" role="dialog" aria-modal="true" aria-label="Hướng dẫn dùng app">' +
        '<button class="ag-close" onclick="AppGuide.close()" aria-label="Đóng">✕</button>' +
        '<div class="ag-icon" style="background:' + s.accent + '1A;color:' + s.accent + '">' + s.icon + '</div>' +
        '<h2 class="ag-title">' + s.title + '</h2>' +
        '<p class="ag-body">' + s.body + '</p>' +
        ctaHtml +
        '<div class="ag-dots">' + dots + '</div>' +
        '<div class="ag-actions">' +
          (_step > 0
            ? '<button class="ag-btn ag-btn--ghost" onclick="AppGuide.prev()">← Quay lại</button>'
            : '<button class="ag-btn ag-btn--ghost" onclick="AppGuide.close()">Bỏ qua</button>') +
          (isLast
            ? '<button class="ag-btn ag-btn--primary" onclick="AppGuide.close()">Bắt đầu học 🚀</button>'
            : '<button class="ag-btn ag-btn--primary" onclick="AppGuide.next()">Tiếp →</button>') +
        '</div>' +
        '<div class="ag-progress-text">' + (_step + 1) + ' / ' + STEPS.length + '</div>' +
      '</div>';
  }

  function _mount() {
    if (_el) return;
    _el = document.createElement('div');
    _el.className = 'ag-overlay';
    _el.id = 'appGuideOverlay';
    document.body.appendChild(_el);
    document.addEventListener('keydown', _onKey);
  }

  function _onKey(e) {
    if (!_el) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') next();
    else if (e.key === 'ArrowLeft' && _step > 0) prev();
  }

  function _update() {
    if (!_el) return;
    _el.innerHTML = _render();
  }

  // ── Public actions ────────────────────────────────────
  function open(startStep) {
    _step = startStep || 0;
    _mount();
    _update();
    // Force reflow then reveal — rAF can be throttled in background tabs,
    // leaving the modal stuck at opacity 0.
    void _el.offsetWidth;
    setTimeout(function() { if (_el) _el.classList.add('visible'); }, 16);
  }

  function close() {
    localStorage.setItem(SEEN_KEY, '1');
    if (!_el) return;
    _el.classList.remove('visible');
    document.removeEventListener('keydown', _onKey);
    var node = _el;
    _el = null;
    setTimeout(function() { if (node && node.parentNode) node.remove(); }, 280);
  }

  function next() {
    if (_step < STEPS.length - 1) { _step++; _update(); }
    else close();
  }

  function prev() {
    if (_step > 0) { _step--; _update(); }
  }

  function goRoute(route) {
    close();
    if (typeof Router !== 'undefined' && Router.navigateTo) {
      setTimeout(function() { Router.navigateTo(route); }, 200);
    }
  }

  // ── First-run auto onboarding ─────────────────────────
  function maybeShowFirstRun() {
    if (localStorage.getItem(SEEN_KEY) === '1') return;
    // Delay so the app shell renders first; skip if another modal is open.
    setTimeout(function() {
      if (localStorage.getItem(SEEN_KEY) === '1') return;
      // Defer if a blocking modal (login / word-detail / settings) is open.
      var blockers = document.querySelectorAll('#loginModal, #modalOverlay.open, #settingsOverlay');
      for (var i = 0; i < blockers.length; i++) {
        var b = blockers[i];
        if (b.offsetParent !== null && getComputedStyle(b).display !== 'none') return;
      }
      open(0);
    }, 900);
  }

  return {
    open: open,
    close: close,
    next: next,
    prev: prev,
    goRoute: goRoute,
    maybeShowFirstRun: maybeShowFirstRun
  };

}());
