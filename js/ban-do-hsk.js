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

  // "Nhớ chắc" = từ có SRS interval ≥ 21 (mastered) — đo retention thật, không chỉ độ phủ
  function _levelMastery(lv) {
    if (typeof getLevelStats !== 'function') return { mastered: 0, total: 0 };
    var st = getLevelStats(lv);
    return { mastered: st.mastered || 0, total: st.total || 0 };
  }

  // ── Lát 3: tấm gương động lực — marker Bé Rồng + huy hiệu kỹ năng ──
  var _activeKey   = null;   // node "bạn đang ở đây" (set trong render)
  var _activeLevel = null;   // cấp HSK của node active (gán Speaking về vùng này)

  function _loadJSON(key, dflt) {
    try { var v = JSON.parse(localStorage.getItem(key) || dflt); return v; }
    catch (e) { try { return JSON.parse(dflt); } catch (x) { return null; } }
  }
  function _loadArr(key) {
    var a = _loadJSON(key, '[]');
    return Array.isArray(a) ? a : [];
  }

  // HSKK lưu cấp theo band-string; map về band id (1=Sơ · 2=Trung · 3=Cao)
  var _HSKK_BAND = { 1: 'so-cap', 2: 'trung-cap', 3: 'cao-cap' };

  function _dots(n, t1, t2, t3) { return n >= t3 ? 3 : n >= t2 ? 2 : n >= t1 ? 1 : 0; }

  // 4 kỹ năng của MỘT vùng → {read,listen,speak,write} mỗi cái 0..3 chấm.
  // Mục đích: soi LỆCH kỹ năng (input đầy vs output trống), không phải đo chính xác.
  // Nguồn (đã xác minh shape): checkpoints ải/trùm · reading_progress_v1 ·
  // hskk_history_v1 (level band-string) · speaking_history_v1 (không gắn cấp) ·
  // writing_history_v1 (level '1'..'9') · hsk_course_progress (Truyện Mai = đọc chính).
  function _bandSkills(band, activeLevel) {
    var levels = band.levels || [];
    var inBand = function(lv) { return levels.indexOf(lv) >= 0; };

    // Đọc: Truyện Mai (đọc chính) là nền → tỉ lệ bài hoàn thành trong vùng
    var prog = _courseProgress(), sDone = 0, sTotal = 0;
    levels.forEach(function(lv) {
      var ids = _courseIdsOfLevel(lv);
      sTotal += ids.length;
      sDone  += ids.filter(function(id) { return prog[id] && prog[id].completed; }).length;
    });
    var storyRatio = sTotal ? sDone / sTotal : 0;

    // Ải/trùm đã qua trong vùng (mock kiểm Nghe+Đọc)
    var cp = _loadJSON('hsk_course_checkpoints', '{}') || {}, cpPassed = 0;
    Object.keys(cp).forEach(function(k) {
      var m = k.match(/^hsk(\d+)_/);
      if (m && inBand(+m[1]) && cp[k] && cp[k].passed) cpPassed++;
    });
    // Bài đọc thêm đã đọc trong vùng (id dạng r{lv}_NN)
    var rp = _loadJSON('reading_progress_v1', '{}') || {}, rRead = 0;
    Object.keys(rp).forEach(function(k) {
      var m = k.match(/^r(\d+)_/);
      if (m && inBand(+m[1]) && rp[k]) rRead++;
    });

    // Nói: HSKK đúng vùng + Speaking (không gắn cấp → quy về vùng đang học)
    var hskkN = _loadArr('hskk_history_v1').filter(function(e) {
      return e && e.level === _HSKK_BAND[band.id];
    }).length;
    var speakG = (activeLevel != null && inBand(activeLevel))
      ? _loadArr('speaking_history_v1').length : 0;
    var speakN = hskkN + speakG;
    // Viết: writing_history theo level trong vùng
    var writeN = _loadArr('writing_history_v1').filter(function(e) {
      return e && inBand(parseInt(e.level, 10));
    }).length;

    // Đọc = story-led, nâng thêm bởi ải/đọc thêm
    var read = storyRatio >= 0.8 ? 3 : storyRatio >= 0.3 ? 2 : storyRatio > 0 ? 1 : 0;
    read = Math.max(read, _dots(cpPassed + (rRead >= 1 ? 1 : 0) + (rRead >= 4 ? 1 : 0), 1, 2, 3));
    // Nghe = checkpoints (mock Nghe); sàn 1 nếu đã nghe hội thoại Truyện Mai
    var listen = _dots(cpPassed, 1, 2, 3);
    if (storyRatio > 0) listen = Math.max(listen, 1);

    return {
      read:   read,
      listen: listen,
      speak:  _dots(speakN, 1, 2, 4),
      write:  _dots(writeN, 1, 2, 4)
    };
  }

  var _SKILL_META = [
    { key: 'listen', icon: '👂',  label: 'Nghe', route: 'mock-exam' },
    { key: 'read',   icon: '📖',  label: 'Đọc',  route: 'reading'   },
    { key: 'speak',  icon: '🎙️', label: 'Nói',  route: 'speaking'  },
    { key: 'write',  icon: '✍️', label: 'Viết', route: 'writing'   }
  ];

  function _renderSkills(skills) {
    var items = _SKILL_META.map(function(m) {
      var v = skills[m.key] || 0;
      var dots = '';
      for (var i = 0; i < 3; i++) dots += '<span class="bdh-skill-dot' + (i < v ? ' bdh-skill-dot--on' : '') + '"></span>';
      var lvlCls = v >= 3 ? 'bdh-skill--strong' : v >= 1 ? 'bdh-skill--mid' : 'bdh-skill--none';
      return '<button class="bdh-skill ' + lvlCls + '" onclick="BanDoHsk.goToSkill(\'' + m.route + '\')"' +
        ' aria-label="' + m.label + ' — ' + (v === 0 ? 'chưa luyện' : v + '/3') + '">' +
        '<span class="bdh-skill-icon">' + m.icon + '</span>' +
        '<span class="bdh-skill-label">' + m.label + '</span>' +
        '<span class="bdh-skill-dots">' + dots + '</span>' +
      '</button>';
    }).join('');
    return '<div class="bdh-skills">' +
      '<div class="bdh-skills-head">⚖️ Cân bằng kỹ năng</div>' +
      '<div class="bdh-skills-row">' + items + '</div>' +
    '</div>';
  }

  // Tiến độ 1 node theo CÁCH HỌC CHÍNH của cấp đó
  // Trả { pct, stat, mode, modeTag }
  function _nodeProgress(node) {
    if (node.type === 'hsk0') {
      var passed = _hsk0Passed();
      return { pct: passed ? 100 : 0, stat: 'Phát âm · nét chữ · số đếm',
               mode: 'foundation', modeTag: '🔰 Nền tảng', mastered: 0, vocabTotal: 0 };
    }
    if (node.type === 'story') {
      var prog = _courseProgress();
      var ids  = _courseIdsOfLevel(node.lv);
      var done = ids.filter(function(id) { return prog[id] && prog[id].completed; }).length;
      var pct  = ids.length ? Math.round(done / ids.length * 100) : 0;
      var sm   = _levelMastery(node.lv);
      return { pct: pct, stat: done + ' / ' + ids.length + ' bài',
               mode: 'story', modeTag: '📖 Truyện', mastered: sm.mastered, vocabTotal: sm.total };
    }
    // vocab
    var vpct = _getLevelPct(node.lv);
    var vstat = '', vm = { mastered: 0, total: 0 };
    if (typeof getLevelStats === 'function') {
      var st = getLevelStats(node.lv);
      vstat = (st.total - st.new) + ' / ' + st.total + ' từ';
      vm = { mastered: st.mastered || 0, total: st.total || 0 };
    }
    return { pct: vpct, stat: vstat, mode: 'vocab', modeTag: 'Từ vựng',
             mastered: vm.mastered, vocabTotal: vm.total };
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
      map[n.key] = { node: n, pct: p.pct, stat: p.stat, modeTag: p.modeTag, mode: p.mode, state: s,
                     mastered: p.mastered || 0, vocabTotal: p.vocabTotal || 0 };
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

    // Marker Bé Rồng — "bạn đang ở đây" (chỉ node active toàn cục)
    var dragon = (n.key === _activeKey)
      ? '<img src="assets/icon-soft.webp" class="bdh-dragon-marker" alt="Bạn đang ở đây"' +
        ' title="Bé Rồng đang ở đây 🐉" width="30" height="30" loading="lazy"/>'
      : '';

    var nodeHtml =
      '<button class="bdh-level-node ' + stateClass + (dragon ? ' bdh-level-node--here' : '') + '"' + clickAttr +
        ' aria-label="' + nameTxt + (s.state === 'locked' ? ' (chưa mở khóa)' : '') + '">' +
        '<div class="bdh-level-circle">' + ring +
          '<div class="bdh-level-inner">' + inner + badge + '</div>' + dragon +
        '</div>' +
        '<div class="bdh-level-info">' +
          '<div class="bdh-level-name">' + nameTxt + '</div>' +
          '<div class="bdh-level-stat">' +
            '<span class="bdh-level-mode bdh-level-mode--' + s.mode + '">' + s.modeTag + '</span> ' +
            (s.stat || '') +
          '</div>' +
          (s.mastered > 0
            ? '<div class="bdh-level-mastery">💪 Nhớ chắc ' + s.mastered +
              (s.vocabTotal ? ' / ' + s.vocabTotal : '') + ' từ</div>'
            : '') +
        '</div>' +
        pctLabel +
      '</button>';

    return (isFirst ? '' : '<div class="bdh-connector ' + prevConn + '"></div>') + nodeHtml;
  }

  // ── Render one band card ─────────────────────────────
  function _renderBand(band, stateMap, openBandId, celebrateId) {
    // band.nodeKeys = danh sách key node thuộc band (đã build sẵn)
    var states  = band.nodeKeys.map(function(k) { return stateMap[k]; });
    var state   = _bandStateFrom(states);
    var isOpen  = (band.id === openBandId);
    var celebrate = (celebrateId != null && band.id === celebrateId && !band.foundation);
    var bandClass = 'bdh-band bdh-band--' + state + (isOpen ? ' bdh-band--open' : '') +
                    (band.foundation ? ' bdh-band--foundation' : '') +
                    (celebrate ? ' bdh-band--celebrate' : '');

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
          (celebrate ? '<div class="bdh-celebrate-banner">🏆 Bạn vừa chinh phục ' + band.name + '!</div>' : '') +
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
          (band.foundation ? '' : _renderSkills(_bandSkills(band, _activeLevel))) +
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
      _activeKey   = activeKey;            // marker Bé Rồng (Lát 3)
      _activeLevel = activeS.node.lv;      // quy Speaking về vùng đang học

      // Ăn mừng "đã chinh phục vùng" — handoff từ mock-exam khi pass trùm
      var celebrateId = null, celebrateLevel = null;
      try {
        var _cl = sessionStorage.getItem('bdh_celebrate_level');
        if (_cl) { celebrateLevel = parseInt(_cl, 10); sessionStorage.removeItem('bdh_celebrate_level'); }
      } catch (e) {}
      if (celebrateLevel != null) {
        hskBands.forEach(function(b) {
          if ((b.levels || []).indexOf(celebrateLevel) >= 0) celebrateId = b.id;
        });
      }

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
      // Nếu đang ăn mừng → mở đúng vùng đó (đè band tự mở)
      if (celebrateId != null) openBandId = celebrateId;
      bandsEl.innerHTML = bands.map(function(b) {
        return _renderBand(b, stateMap, openBandId, celebrateId);
      }).join('');

      // Cuộn tới vùng vừa chinh phục để thấy hiệu ứng
      if (celebrateId != null) {
        setTimeout(function() {
          var cel = document.getElementById('bdhBand' + celebrateId);
          if (cel) cel.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 90);
      }

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

    // Tap huy hiệu kỹ năng → mở module tương ứng (Nghe→mock, Đọc, Nói, Viết)
    goToSkill: function(route) {
      if (typeof Router !== 'undefined' && route) Router.navigateTo(route);
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
