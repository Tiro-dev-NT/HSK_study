// ═══════════════════════════════════════════════════════
// BAN-DO-HSK.JS — HSK Adventure Map (Lộ trình học)
// Redesign 2026-06-01: biểu diễn ĐÚNG hành trình học, không phải kho từ.
//   • Bắt đầu từ HSK 0 (Nền tảng: pinyin · nét · số đếm)
//   • Cấp có Truyện Mai (HSK 1-2) → node "📖 Truyện", % theo SỐ BÀI hoàn thành,
//     click → mở Truyện Mai đúng cấp (Course list, tab cấp đó)
//   • Cấp chưa có truyện (HSK 3-9) → node "Từ vựng", % theo vocab (như cũ),
//     click → deck sys_hsk{lv}
//   • Khóa mềm: cấp đã có tiến độ KHÔNG bị khóa (không nhốt user đang học dở)
// ═══════════════════════════════════════════════════════

var BanDoHsk = (function() {

  // ── HSK band definitions (sau node Nền tảng) ─────────
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

  function _hsk0Passed() {
    try {
      return localStorage.getItem('hsk0_passed') === '1' ||
             localStorage.getItem('hsk_placement_level') === 'hsk1';
    } catch (e) { return false; }
  }

  function _courseProgress() {
    try { return JSON.parse(localStorage.getItem('hsk_course_progress') || '{}'); }
    catch (e) { return {}; }
  }

  // Cấp nào có Truyện Mai (đọc từ COURSE_DATA — bài HSK 1 cũ không có level → 1)
  function _storyLevels() {
    var set = {};
    if (typeof COURSE_DATA !== 'undefined') {
      Object.keys(COURSE_DATA).forEach(function(id) {
        var lv = COURSE_DATA[id].level || 1;
        set[lv] = true;
      });
    }
    return set;
  }

  function _courseIdsOfLevel(lv) {
    if (typeof COURSE_DATA === 'undefined') return [];
    return Object.keys(COURSE_DATA).map(Number).filter(function(id) {
      return (COURSE_DATA[id].level || 1) === lv;
    });
  }

  function _getLevelPct(lv) {
    if (typeof getLevelStats !== 'function') return 0;
    var st = getLevelStats(lv);
    return st.total ? Math.round((st.total - st.new) / st.total * 100) : 0;
  }

  // Tiến độ 1 node theo CÁCH HỌC CHÍNH của cấp đó
  // Trả { pct, stat, mode, modeTag }
  function _nodeProgress(node) {
    if (node.type === 'hsk0') {
      var passed = _hsk0Passed();
      return { pct: passed ? 100 : 0, stat: 'Phát âm · nét chữ · số đếm',
               mode: 'foundation', modeTag: '🔰 Nền tảng' };
    }
    if (node.type === 'story') {
      var prog = _courseProgress();
      var ids  = _courseIdsOfLevel(node.lv);
      var done = ids.filter(function(id) { return prog[id] && prog[id].completed; }).length;
      var pct  = ids.length ? Math.round(done / ids.length * 100) : 0;
      return { pct: pct, stat: done + ' / ' + ids.length + ' bài',
               mode: 'story', modeTag: '📖 Truyện' };
    }
    // vocab
    var vpct = _getLevelPct(node.lv);
    var vstat = '';
    if (typeof getLevelStats === 'function') {
      var st = getLevelStats(node.lv);
      vstat = (st.total - st.new) + ' / ' + st.total + ' từ';
    }
    return { pct: vpct, stat: vstat, mode: 'vocab', modeTag: 'Từ vựng' };
  }

  // ── Build journey: foundation node + HSK level nodes ──
  function _buildJourney(bands) {
    var nodes = [{ type: 'hsk0', key: 'hsk0', lv: 0, name: 'HSK 0' }];
    var story = _storyLevels();
    bands.forEach(function(b) {
      b.levels.forEach(function(lv) {
        nodes.push({
          type: story[lv] ? 'story' : 'vocab',
          key:  lv, lv: lv, name: 'HSK ' + lv
        });
      });
    });
    return nodes;
  }

  // Tính state mọi node. Quy tắc khóa MỀM:
  //   done = pct≥80 (hsk0: đã pass). Node chưa done đầu tiên = active.
  //   Các node sau: 'active' nếu đã có tiến độ (pct>0), ngược lại 'locked'.
  function _computeStates(journey) {
    var foundActive = false;
    var map = {};
    journey.forEach(function(n) {
      var p = _nodeProgress(n);
      var s;
      if (n.type === 'hsk0') {
        // Nền tảng: khuyến nghị nhưng KHÔNG khóa cấp sau (placement cho phép skip)
        s = (p.pct >= 100) ? 'done' : 'active';
      } else if (p.pct >= 80) {
        s = 'done';
      } else if (!foundActive) {
        // Cấp HSK chưa done đầu tiên = active (HSK 1 luôn vào được)
        foundActive = true; s = 'active';
      } else {
        // Khóa mềm: cấp đã có tiến độ vẫn vào được
        s = (p.pct > 0) ? 'active' : 'locked';
      }
      map[n.key] = { node: n, pct: p.pct, stat: p.stat, modeTag: p.modeTag, mode: p.mode, state: s };
    });
    return map;
  }

  function _bandStateFrom(states) {
    var allDone = states.every(function(s) { return s.state === 'done'; });
    var hasAct  = states.some(function(s) { return s.state === 'active' || s.pct > 0; });
    if (allDone) return 'done';
    if (hasAct)  return 'active';
    return 'locked';
  }

  // SVG ring: r=23
  var _CIRCUM = 2 * Math.PI * 23;
  function _ringOffset(pct) { return _CIRCUM - (_CIRCUM * Math.min(100, pct) / 100); }

  // ── Render single node ───────────────────────────────
  function _renderNode(s, isFirst) {
    var n = s.node;
    var stateClass = 'bdh-level-node--' + s.state;
    var prevConn   = s.state === 'done'   ? 'bdh-connector--done'
                   : s.state === 'active' ? 'bdh-connector--active'
                   : 'bdh-connector--locked';

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

    var centre = (n.type === 'hsk0') ? '🔰' : n.lv;
    var inner = s.state === 'done'
      ? '<span class="bdh-level-num">✓</span>'
      : s.state === 'locked'
        ? '<span class="bdh-level-num" style="color:var(--text3);font-size:18px">🔒</span>'
        : '<span class="bdh-level-num">' + centre + '</span>';

    var badge = (s.state === 'active' && s.pct < 5)
      ? '<div class="bdh-level-current-badge">ĐANG HỌC</div>' : '';

    var pctLabel = s.state !== 'locked'
      ? '<span class="bdh-level-pct">' + s.pct + '%</span>' : '';

    var nameTxt = (n.type === 'hsk0') ? 'HSK 0 — Nền tảng' : ('HSK ' + n.lv);
    var clickAttr = (s.state !== 'locked')
      ? ' onclick="BanDoHsk.goToNode(\'' + n.type + '\',' + n.lv + ')"' : '';

    var nodeHtml =
      '<button class="bdh-level-node ' + stateClass + '"' + clickAttr +
        ' aria-label="' + nameTxt + (s.state === 'locked' ? ' (chưa mở khóa)' : '') + '">' +
        '<div class="bdh-level-circle">' + ring +
          '<div class="bdh-level-inner">' + inner + badge + '</div>' +
        '</div>' +
        '<div class="bdh-level-info">' +
          '<div class="bdh-level-name">' + nameTxt + '</div>' +
          '<div class="bdh-level-stat">' +
            '<span class="bdh-level-mode bdh-level-mode--' + s.mode + '">' + s.modeTag + '</span> ' +
            (s.stat || '') +
          '</div>' +
        '</div>' +
        pctLabel +
      '</button>';

    return (isFirst ? '' : '<div class="bdh-connector ' + prevConn + '"></div>') + nodeHtml;
  }

  // ── Render one band card ─────────────────────────────
  function _renderBand(band, stateMap, openBandId) {
    // band.nodeKeys = danh sách key node thuộc band (đã build sẵn)
    var states  = band.nodeKeys.map(function(k) { return stateMap[k]; });
    var state   = _bandStateFrom(states);
    var isOpen  = (band.id === openBandId);
    var bandClass = 'bdh-band bdh-band--' + state + (isOpen ? ' bdh-band--open' : '') +
                    (band.foundation ? ' bdh-band--foundation' : '');

    var badgeLabel = state === 'done'   ? '✓ Hoàn thành'
                   : state === 'active' ? '▶ Đang học'
                   : '🔒 Chưa mở khóa';
    var badgeClass = 'bdh-band-badge bdh-band-badge--' + state;

    // Progress band: trung bình % các node (foundation: 0/1)
    var sumPct = states.reduce(function(a, s) { return a + s.pct; }, 0);
    var bandPct = states.length ? Math.round(sumPct / states.length) : 0;
    var doneCount = states.filter(function(s) { return s.state === 'done'; }).length;

    var nodesHtml = states.map(function(s, i) { return _renderNode(s, i === 0); }).join('');

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
              '<span>' + doneCount + ' / ' + states.length + ' chặng</span>' +
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
      var hskBands = _isV3() ? _BANDS_V3 : _BANDS_V2;

      // Band 0 = Nền tảng (HSK 0), rồi tới các band HSK
      var bands = [{ id: 0, name: 'Nền tảng', icon: '🔰', sub: 'HSK 0 · Nhập môn',
                     foundation: true, levels: [] }].concat(hskBands);

      var journey  = _buildJourney(hskBands);   // hsk0 + các cấp
      var stateMap = _computeStates(journey);

      // Gán nodeKeys cho từng band
      bands.forEach(function(b) {
        b.nodeKeys = b.foundation ? ['hsk0'] : b.levels.slice();
      });

      var orderedKeys = journey.map(function(n) { return n.key; });

      // Node active toàn cục (chặng tiếp theo)
      var activeKey = null;
      orderedKeys.forEach(function(k) {
        if (!activeKey && stateMap[k].state === 'active') activeKey = k;
      });
      if (!activeKey) activeKey = orderedKeys[orderedKeys.length - 1];
      var activeS = stateMap[activeKey];

      // ── Overall dots (toàn bộ chặng kể cả HSK 0) ──
      var dotsEl = document.getElementById('bdhOverallDots');
      var lblEl  = document.getElementById('bdhOverallLabel');
      if (dotsEl) {
        dotsEl.innerHTML = orderedKeys.map(function(k) {
          var s = stateMap[k];
          var cls = s.state === 'done'   ? 'bdh-overall-dot bdh-overall-dot--done'
                  : s.state === 'active' ? 'bdh-overall-dot bdh-overall-dot--active'
                  : 'bdh-overall-dot';
          return '<div class="' + cls + '" title="' + s.node.name + ': ' + s.pct + '%"></div>';
        }).join('');
      }
      if (lblEl) {
        var doneN = orderedKeys.filter(function(k) { return stateMap[k].state === 'done'; }).length;
        lblEl.textContent = doneN + ' / ' + orderedKeys.length + ' chặng hoàn thành';
      }

      // ── Mascot message ──
      var mascotTip = document.getElementById('bdhMascotTip');
      var bubbleEl  = document.getElementById('bdhMascotBubble');
      if (mascotTip && bubbleEl) {
        mascotTip.style.display = 'flex';
        if (activeS.state === 'done') {
          bubbleEl.textContent = 'Bạn đã đi hết hành trình! Thật xuất sắc! 🎉';
        } else if (activeS.node.type === 'hsk0') {
          bubbleEl.textContent = 'Bắt đầu từ nền tảng: thanh điệu & pinyin nhé! 🐉';
        } else if (activeS.mode === 'story') {
          bubbleEl.textContent = 'Học qua câu chuyện — Truyện Mai ' + activeS.node.name +
                                 ' đã xong ' + activeS.stat + ' 📖';
        } else if (activeS.pct === 0) {
          bubbleEl.textContent = 'Bắt đầu ' + activeS.node.name + ' ngay nào! 🐉';
        } else {
          bubbleEl.textContent = 'Tiếp tục! ' + activeS.node.name + ' đạt ' + activeS.pct + '% rồi 💪';
        }
      }

      // ── Band tự mở: band chứa node active ──
      var openBandId = null;
      bands.forEach(function(b) {
        var st = b.nodeKeys.map(function(k) { return stateMap[k]; });
        if (_bandStateFrom(st) === 'active' && openBandId === null) openBandId = b.id;
      });
      if (openBandId === null) openBandId = bands[bands.length - 1].id;

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
      if (ctaLvl)  ctaLvl.textContent  = activeS.node.name;
      if (ctaStat) ctaStat.textContent = activeS.stat || '';
      if (ctaBtn)  ctaBtn.onclick = function() {
        BanDoHsk.goToNode(activeS.node.type, activeS.node.lv);
      };
    },

    toggleBand: function(bandId) {
      var el = document.getElementById('bdhBand' + bandId);
      if (!el) return;
      var isOpen = el.classList.contains('bdh-band--open');
      document.querySelectorAll('.bdh-band').forEach(function(b) {
        b.classList.remove('bdh-band--open');
      });
      if (!isOpen) el.classList.add('bdh-band--open');
    },

    // Điều hướng theo loại node
    goToNode: function(type, lv) {
      if (type === 'hsk0') {
        Router.navigateTo('hsk0-pinyin-initials');
        return;
      }
      if (type === 'story') {
        // Mở Truyện Mai đúng cấp (Course list, tab cấp đó)
        if (typeof Course !== 'undefined') Course._selectedLevel = lv;
        Router.navigateTo('course');
        return;
      }
      BanDoHsk.goToLevel(lv);
    },

    // Cấp từ vựng → mở deck sys_hsk{lv} trong tab Học
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
