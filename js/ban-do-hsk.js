// ═══════════════════════════════════════════════════════
// BAN-DO-HSK.JS — HSK Adventure Map page (Screen 38)
// • Renders 3 zone bands with level nodes + progress rings
// • Accordion collapse on mobile, always-open on desktop
// • Clicking a level node → Router.navigateTo('learn') + hsk:openDeck event
// ═══════════════════════════════════════════════════════

var BanDoHsk = (function() {

  // ── Band definitions ────────────────────────────────
  var _BANDS_V2 = [
    { id: 1, name: 'Sơ cấp',    icon: '🏮', levels: [1, 2],    sub: 'HSK 1 – 2' },
    { id: 2, name: 'Trung cấp', icon: '🏯', levels: [3, 4],    sub: 'HSK 3 – 4' },
    { id: 3, name: 'Cao cấp',   icon: '🏔️', levels: [5, 6],    sub: 'HSK 5 – 6' },
  ];
  var _BANDS_V3 = [
    { id: 1, name: 'Sơ cấp',    icon: '🏮', levels: [1, 2, 3], sub: 'HSK 1 – 3' },
    { id: 2, name: 'Trung cấp', icon: '🏯', levels: [4, 5, 6], sub: 'HSK 4 – 6' },
    { id: 3, name: 'Cao cấp',   icon: '🏔️', levels: [7, 8, 9], sub: 'HSK 7 – 9' },
  ];

  // ── Helpers ─────────────────────────────────────────
  function _isV3() {
    return typeof AppState !== 'undefined' && AppState.version === 3;
  }

  function _getLevelPct(lv) {
    if (typeof getLevelStats !== 'function') return 0;
    var st = getLevelStats(lv);
    return st.total ? Math.round((st.total - st.new) / st.total * 100) : 0;
  }

  // Compute states for ALL levels globally.
  // Rule: walk levels in order. done (≥80%). First non-done = active. All after = locked.
  function _computeAllStates(bands) {
    var allLevels = bands.reduce(function(arr, b) { return arr.concat(b.levels); }, []);
    var foundActive = false;
    var stateMap = {};
    allLevels.forEach(function(lv) {
      var pct = _getLevelPct(lv);
      if (pct >= 80) {
        stateMap[lv] = { lv: lv, pct: pct, state: 'done' };
      } else if (!foundActive) {
        foundActive = true;
        stateMap[lv] = { lv: lv, pct: pct, state: 'active' };
      } else {
        stateMap[lv] = { lv: lv, pct: pct, state: 'locked' };
      }
    });
    return stateMap;
  }

  // Band state derived from pre-computed level states
  function _bandStateFrom(levelStates) {
    var allDone   = levelStates.every(function(s) { return s.state === 'done'; });
    var hasActive = levelStates.some(function(s) { return s.state === 'active' || s.pct > 0; });
    if (allDone)   return 'done';
    if (hasActive) return 'active';
    return 'locked';
  }

  // SVG progress ring: r=23 → circumference = 2π×23 ≈ 144.5
  var _CIRCUM = 2 * Math.PI * 23;
  function _ringOffset(pct) {
    return _CIRCUM - (_CIRCUM * Math.min(100, pct) / 100);
  }

  // ── Render single level node ─────────────────────────
  function _renderNode(s, isFirst) {
    var stateClass = 'bdh-level-node--' + s.state;
    var prevConn   = s.state === 'done'   ? 'bdh-connector--done'
                   : s.state === 'active' ? 'bdh-connector--active'
                   : 'bdh-connector--locked';

    // Progress ring SVG
    var offset  = _ringOffset(s.pct);
    var ringClr = s.state === 'done'   ? '#10b981'
                : s.state === 'active' ? 'var(--primary)'
                : 'var(--text3)';
    var ring =
      '<svg viewBox="0 0 52 52" aria-hidden="true">' +
        '<circle class="bdh-level-circle-bg" cx="26" cy="26" r="23"/>' +
        '<circle class="bdh-level-circle-fill" cx="26" cy="26" r="23"' +
          ' stroke="' + ringClr + '"' +
          ' stroke-dasharray="' + _CIRCUM.toFixed(1) + '"' +
          ' stroke-dashoffset="' + offset.toFixed(1) + '"/>' +
      '</svg>';

    // Centre icon/number
    var inner = s.state === 'done'
      ? '<span class="bdh-level-num">✓</span>'
      : s.state === 'locked'
        ? '<span class="bdh-level-num" style="color:var(--text3);font-size:18px">🔒</span>'
        : '<span class="bdh-level-num">' + s.lv + '</span>';

    // "Đang học" micro-badge for fresh active levels
    var badge = (s.state === 'active' && s.pct < 5)
      ? '<div class="bdh-level-current-badge">ĐANG HỌC</div>' : '';

    // Stats line
    var statTxt = '';
    if (typeof getLevelStats === 'function') {
      var st = getLevelStats(s.lv);
      statTxt = (st.total - st.new) + ' / ' + st.total + ' từ';
    }

    // Right-side pct label (only when not locked)
    var pctLabel = s.state !== 'locked'
      ? '<span class="bdh-level-pct">' + s.pct + '%</span>' : '';

    var nodeHtml =
      '<button class="bdh-level-node ' + stateClass + '"' +
        (s.state !== 'locked' ? ' onclick="BanDoHsk.goToLevel(' + s.lv + ')"' : '') +
        ' aria-label="HSK ' + s.lv + (s.state === 'locked' ? ' (chưa mở khóa)' : '') + '">' +
        '<div class="bdh-level-circle">' + ring +
          '<div class="bdh-level-inner">' + inner + badge + '</div>' +
        '</div>' +
        '<div class="bdh-level-info">' +
          '<div class="bdh-level-name">HSK ' + s.lv + '</div>' +
          (statTxt ? '<div class="bdh-level-stat">' + statTxt + '</div>' : '') +
        '</div>' +
        pctLabel +
      '</button>';

    var connHtml = isFirst ? '' :
      '<div class="bdh-connector ' + prevConn + '"></div>';

    return connHtml + nodeHtml;
  }

  // ── Render one band card ─────────────────────────────
  function _renderBand(band, stateMap, openBandId) {
    var levelStates = band.levels.map(function(lv) { return stateMap[lv]; });
    var state       = _bandStateFrom(levelStates);
    var isOpen      = (band.id === openBandId);
    var bandClass   = 'bdh-band bdh-band--' + state + (isOpen ? ' bdh-band--open' : '');

    var badgeLabel = state === 'done'   ? '✓ Hoàn thành'
                   : state === 'active' ? '▶ Đang học'
                   : '🔒 Chưa mở khóa';
    var badgeClass = 'bdh-band-badge bdh-band-badge--' + state;

    // Band progress numbers
    var totalWords = 0, learnedWords = 0;
    levelStates.forEach(function(s) {
      if (typeof getLevelStats === 'function') {
        var st = getLevelStats(s.lv);
        totalWords   += st.total;
        learnedWords += (st.total - st.new);
      }
    });
    var bandPct = totalWords ? Math.round(learnedWords / totalWords * 100) : 0;

    // Level path nodes HTML
    var nodesHtml = levelStates.map(function(s, i) {
      return _renderNode(s, i === 0);
    }).join('');

    return (
      '<div class="' + bandClass + '" id="bdhBand' + band.id + '" data-band="' + band.id + '">' +
        '<button class="bdh-band-header" onclick="BanDoHsk.toggleBand(' + band.id + ')"' +
          ' aria-expanded="' + isOpen + '">' +
          '<div class="bdh-band-icon">' + band.icon + '</div>' +
          '<div class="bdh-band-info">' +
            '<div class="bdh-band-name">' + band.name + '</div>' +
            '<div class="bdh-band-sub">' + band.sub + '</div>' +
          '</div>' +
          '<div class="bdh-band-right">' +
            '<span class="' + badgeClass + '">' + badgeLabel + '</span>' +
            '<svg class="bdh-band-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
              ' stroke-width="2.5" width="16" height="16" aria-hidden="true">' +
              '<polyline points="9,18 15,12 9,6"/>' +
            '</svg>' +
          '</div>' +
        '</button>' +
        '<div class="bdh-band-body">' +
          '<div class="bdh-band-progress-wrap">' +
            '<div class="bdh-band-prog-row">' +
              '<span>' + learnedWords + ' / ' + totalWords + ' từ</span>' +
              '<span>' + bandPct + '%</span>' +
            '</div>' +
            '<div class="bdh-band-prog-track">' +
              '<div class="bdh-band-prog-fill" style="width:' + bandPct + '%"></div>' +
            '</div>' +
          '</div>' +
          '<div class="bdh-level-path">' + nodesHtml + '</div>' +
        '</div>' +
      '</div>'
    );
  }

  // ── Public API ───────────────────────────────────────
  return {

    render: function() {
      var bands      = _isV3() ? _BANDS_V3 : _BANDS_V2;
      var stateMap   = _computeAllStates(bands);
      var allLevels  = bands.reduce(function(a, b) { return a.concat(b.levels); }, []);
      var totalLevels = allLevels.length;

      // Find global active level
      var activeState = null;
      allLevels.forEach(function(lv) {
        if (!activeState && stateMap[lv].state === 'active') activeState = stateMap[lv];
      });
      if (!activeState) activeState = stateMap[allLevels[allLevels.length - 1]];

      // ── Overall progress dots ──
      var dotsEl = document.getElementById('bdhOverallDots');
      var lblEl  = document.getElementById('bdhOverallLabel');
      if (dotsEl) {
        dotsEl.innerHTML = allLevels.map(function(lv) {
          var s   = stateMap[lv];
          var cls = s.state === 'done'   ? 'bdh-overall-dot bdh-overall-dot--done'
                  : s.state === 'active' ? 'bdh-overall-dot bdh-overall-dot--active'
                  : 'bdh-overall-dot';
          return '<div class="' + cls + '" title="HSK ' + lv + ': ' + s.pct + '%"></div>';
        }).join('');
      }
      if (lblEl) {
        var doneLvls = allLevels.filter(function(lv) { return stateMap[lv].state === 'done'; }).length;
        lblEl.textContent = doneLvls + ' / ' + totalLevels + ' cấp hoàn thành';
      }

      // ── Mascot message ──
      var mascotTip = document.getElementById('bdhMascotTip');
      var bubbleEl  = document.getElementById('bdhMascotBubble');
      if (mascotTip && bubbleEl) {
        mascotTip.style.display = 'flex';
        if (activeState.state === 'done') {
          bubbleEl.textContent = 'Bạn đã hoàn thành tất cả! Thật xuất sắc! 🎉';
        } else if (activeState.pct === 0) {
          bubbleEl.textContent = 'Bắt đầu học HSK ' + activeState.lv + ' ngay nào! 🐉';
        } else {
          bubbleEl.textContent = 'Tiếp tục! HSK ' + activeState.lv + ' của bạn đạt ' + activeState.pct + '% rồi 💪';
        }
      }

      // ── Find open band (active band auto-opens) ──
      var openBandId = null;
      bands.forEach(function(b) {
        var lvStates = b.levels.map(function(lv) { return stateMap[lv]; });
        if (_bandStateFrom(lvStates) === 'active') openBandId = b.id;
      });
      // If all done, open last band
      if (!openBandId) openBandId = bands[bands.length - 1].id;

      // ── Render bands ──
      var bandsEl = document.getElementById('bdhBands');
      if (!bandsEl) return;
      bandsEl.innerHTML = bands.map(function(b) {
        return _renderBand(b, stateMap, openBandId);
      }).join('');

      // ── CTA bar (mobile) ──
      var ctaLvl  = document.getElementById('bdhCtaLevel');
      var ctaStat = document.getElementById('bdhCtaStat');
      var ctaBtn  = document.getElementById('bdhCtaBtn');
      if (ctaLvl)  ctaLvl.textContent = 'HSK ' + activeState.lv;
      if (ctaStat && typeof getLevelStats === 'function') {
        var st = getLevelStats(activeState.lv);
        ctaStat.textContent = (st.total - st.new) + ' / ' + st.total + ' từ';
      }
      if (ctaBtn) {
        ctaBtn.onclick = function() { BanDoHsk.goToLevel(activeState.lv); };
      }
    },

    toggleBand: function(bandId) {
      var el = document.getElementById('bdhBand' + bandId);
      if (!el) return;
      var isOpen = el.classList.contains('bdh-band--open');
      // Accordion: close all, then toggle
      document.querySelectorAll('.bdh-band').forEach(function(b) {
        b.classList.remove('bdh-band--open');
      });
      if (!isOpen) el.classList.add('bdh-band--open');
    },

    goToLevel: function(lv) {
      Router.navigateTo('learn');
      setTimeout(function() {
        document.dispatchEvent(new CustomEvent('hsk:openDeck', {
          detail: { deckId: 'sys_hsk' + lv }
        }));
      }, 120);
    },

    setup: function() {
      BanDoHsk.render();
    }
  };

}());
