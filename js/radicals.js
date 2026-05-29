// ─── RADICALS DATA ────────────────────────────────────
// Common Chinese radicals with associated HSK characters
// r = radical char, vi = Vietnamese name, en = English name, chars = associated hanzi

var RADICALS = [
  { r:'人', vi:'Người', en:'Person', chars:['人','你','他','们','什','会','做','作','住','位','体','件','但','低','休','信','像','儿','先','入','全'] },
  { r:'口', vi:'Miệng', en:'Mouth', chars:['口','吃','叫','可','听','吗','呢','和','告','哪','号','名','呀','吧','味','唱','嘴','喝','喜','问'] },
  { r:'女', vi:'Nữ', en:'Woman', chars:['女','好','妈','她','姐','妹','姓','始','如','婚','嫁','娘','媳','奶','妻'] },
  { r:'子', vi:'Con', en:'Child', chars:['子','学','孩','字','孙','季','存','孤'] },
  { r:'手', vi:'Tay', en:'Hand', chars:['手','打','找','把','拿','拉','抱','换','接','搬','提','撞','扫','挂','推','拍','抓','扎','扔','报'] },
  { r:'心', vi:'Tim', en:'Heart', chars:['心','想','忙','快','怎','怕','情','意','感','念','思','态','愿','忘','性','慢','懂','恋','悲'] },
  { r:'水', vi:'Nước', en:'Water', chars:['水','没','河','海','洗','流','泪','湖','油','游','汤','洋','汁','波','滩','渴','漂','澡','淋','演'] },
  { r:'火', vi:'Lửa', en:'Fire', chars:['火','热','然','照','烧','灯','煮','烤','烟','灰','炒','炸','烂','灭'] },
  { r:'日', vi:'Ngày', en:'Sun', chars:['日','早','明','时','星','春','晚','晴','暗','昨','旧','旁','暖','景','晶','暑','映'] },
  { r:'月', vi:'Trăng', en:'Moon', chars:['月','有','朋','服','期','脸','脚','胖','肉','肚','胖','脑','朗','能'] },
  { r:'木', vi:'Cây', en:'Wood', chars:['木','本','机','树','桌','椅','板','林','果','根','校','桥','梦','森','植','楼','杯','村','松','梅'] },
  { r:'土', vi:'Đất', en:'Earth', chars:['土','地','在','场','块','城','坐','坏','堂','墙','塔','境','壁','均','域'] },
  { r:'金', vi:'Kim loại', en:'Metal', chars:['金','银','铁','钱','针','链','锁','镜','铃','钟','锻','错','铅','钢'] },
  { r:'言', vi:'Lời', en:'Speech', chars:['言','说','话','语','请','谢','让','认','读','课','谁','诉','试','该','词','详','许','论','译'] },
  { r:'走', vi:'Đi', en:'Walk', chars:['走','起','赶','越','趣','超','趟','赵'] },
  { r:'门', vi:'Cửa', en:'Door', chars:['门','问','间','闲','闭','开','关','闪','闻'] },
  { r:'食', vi:'Ăn', en:'Eat', chars:['食','饭','饿','饮','馆','饱','饺','饼','馒','饵'] },
  { r:'目', vi:'Mắt', en:'Eye', chars:['目','看','眼','睛','睡','眉','盲','相','着','真','直','瞧','瞎','瞒'] },
  { r:'衣', vi:'Áo', en:'Clothing', chars:['衣','裤','裙','被','衬','袜','装','补','袋','表','初'] },
  { r:'车', vi:'Xe', en:'Vehicle', chars:['车','轮','转','输','辆','较','轨','辛','软','轻','载'] },
  { r:'力', vi:'Sức', en:'Strength', chars:['力','办','加','动','助','功','努','勇','劳','励'] },
  { r:'刀', vi:'Dao', en:'Knife', chars:['刀','分','切','到','前','别','利','划','刚','剩','则','刮','削'] },
  { r:'大', vi:'Lớn', en:'Big', chars:['大','太','天','头','夫','央','夺','奇','奖','套'] },
  { r:'小', vi:'Nhỏ', en:'Small', chars:['小','少','尖','尘','尚'] },
  { r:'山', vi:'Núi', en:'Mountain', chars:['山','岁','岛','岸','崩','峰','岩','岭','嵩'] },
  { r:'竹', vi:'Tre', en:'Bamboo', chars:['竹','笔','筷','答','简','等','笑','篮','箱','管','算','筒','篇','签','笨'] },
  { r:'雨', vi:'Mưa', en:'Rain', chars:['雨','雪','雷','零','需','霜','雾','霸','露','电','云'] },
  { r:'马', vi:'Ngựa', en:'Horse', chars:['马','吗','妈','骑','骗','驾','验','骄','驻'] },
  { r:'鸟', vi:'Chim', en:'Bird', chars:['鸟','鸡','鸭','鹅','鹰','鸣'] },
  { r:'犬', vi:'Chó', en:'Dog', chars:['犬','狗','猫','狼','猪','狮','猴','独','猜','状','犯'] },
];

console.log('[HSK] Loaded', RADICALS.length, 'radicals');

// ═══════════════════════════════════════════════════════
// RADICALS214 UI MODULE — Phase O1 Cây Hán Tự
// ═══════════════════════════════════════════════════════

var Radicals214 = (function() {
  var _currentFilter = 'all';
  var _searchQuery = '';
  var _writer = null;

  // ── Merge legacy RADICALS examples into RADICALS_214 ──
  function _enrichWithExamples() {
    if (typeof RADICALS === 'undefined') return;

    RADICALS.forEach(function(legacy) {
      var match = RADICALS_214.find(function(r) { return r.char === legacy.r; });
      if (match && legacy.chars && legacy.chars.length > 0) {
        match.examples = legacy.chars.slice(0, 12); // Max 12 examples
      }
    });
  }

  // ── Filter radicals by stroke count ──
  function _filterByStrokes(radicals, filter) {
    if (filter === 'all') return radicals;
    if (filter === '10+') return radicals.filter(function(r) { return r.strokes >= 10; });
    if (filter === '6-9') return radicals.filter(function(r) { return r.strokes >= 6 && r.strokes <= 9; });
    var num = parseInt(filter);
    return radicals.filter(function(r) { return r.strokes === num; });
  }

  // ── Search radicals ──
  function _searchRadicals(radicals, query) {
    if (!query) return radicals;
    var q = query.toLowerCase();
    return radicals.filter(function(r) {
      return r.char.includes(q) ||
             r.pinyin.toLowerCase().includes(q) ||
             r.meaning_vi.toLowerCase().includes(q) ||
             r.meaning_en.toLowerCase().includes(q);
    });
  }

  // ── Render grid ──
  function _renderGrid() {
    var filtered = _filterByStrokes(RADICALS_214, _currentFilter);
    filtered = _searchRadicals(filtered, _searchQuery);

    var grid = document.getElementById('radGrid');
    var stats = document.getElementById('radStats');

    if (filtered.length === 0) {
      grid.innerHTML = '<div style="padding:40px;text-align:center;color:var(--text2)">Không tìm thấy bộ thủ nào</div>';
      stats.textContent = 'Không tìm thấy bộ thủ nào';
      return;
    }

    stats.textContent = 'Hiển thị ' + filtered.length + ' bộ thủ';

    var html = filtered.map(function(r) {
      return '<div class="rad-card" data-id="' + r.id + '">' +
        '<div class="rad-card-char">' + r.char + '</div>' +
        '<div class="rad-card-name">' + r.meaning_vi + '</div>' +
        '<div class="rad-card-meta">' + r.pinyin + '</div>' +
        '<div class="rad-card-strokes">' + r.strokes + ' nét</div>' +
        '</div>';
    }).join('');

    grid.innerHTML = html;

    // Attach click handlers
    grid.querySelectorAll('.rad-card').forEach(function(card) {
      card.addEventListener('click', function() {
        var id = parseInt(this.dataset.id);
        _showDetail(id);
      });
    });
  }

  // ── Show detail panel ──
  function _showDetail(id) {
    var radical = RADICALS_214.find(function(r) { return r.id === id; });
    if (!radical) return;

    document.getElementById('radDetailChar').textContent = radical.char;
    document.getElementById('radDetailName').textContent = radical.meaning_vi;
    document.getElementById('radDetailPinyin').textContent = radical.pinyin;
    document.getElementById('radDetailStrokes').textContent = radical.strokes + ' nét';
    document.getElementById('radDetailMeaningVi').textContent = radical.meaning_vi;
    document.getElementById('radDetailMeaningEn').textContent = radical.meaning_en;

    // Render examples
    var examplesEl = document.getElementById('radExamples');
    if (radical.examples && radical.examples.length > 0) {
      examplesEl.innerHTML = radical.examples.map(function(char) {
        return '<div class="rad-example-char" title="' + char + '">' + char + '</div>';
      }).join('');
    } else {
      examplesEl.innerHTML = '<div style="color:var(--text3);font-size:14px">Không có ví dụ</div>';
    }

    // Initialize HanziWriter
    _initWriter(radical.char);

    // Show overlay
    document.getElementById('radDetailOverlay').style.display = 'flex';
  }

  // ── Initialize HanziWriter ──
  function _initWriter(char) {
    var writerEl = document.getElementById('radWriter');
    writerEl.innerHTML = ''; // Clear previous

    if (typeof HanziWriter === 'undefined') {
      writerEl.innerHTML = '<div style="padding:40px;text-align:center;color:var(--text2);font-size:14px">HanziWriter chưa tải</div>';
      return;
    }

    try {
      _writer = HanziWriter.create(writerEl, char, {
        width: 200,
        height: 200,
        padding: 10,
        strokeColor: '#DC2626',
        radicalColor: '#F59E0B',
        showOutline: true,
        showCharacter: false
      });

      // Auto-animate once
      setTimeout(function() {
        if (_writer) _writer.animateCharacter();
      }, 300);
    } catch(e) {
      console.error('[Radicals] HanziWriter error:', e);
      writerEl.innerHTML = '<div style="padding:40px;text-align:center;color:var(--text2);font-size:14px">Không thể tải nét chữ</div>';
    }
  }

  // ── Close detail panel ──
  function _closeDetail() {
    document.getElementById('radDetailOverlay').style.display = 'none';
    if (_writer) {
      _writer = null;
    }
  }

  // ── Setup event listeners ──
  function _setupListeners() {
    // Stroke filter buttons
    document.querySelectorAll('.rad-stroke-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.rad-stroke-btn').forEach(function(b) {
          b.classList.remove('active');
        });
        this.classList.add('active');
        _currentFilter = this.dataset.strokes;
        _renderGrid();
      });
    });

    // Search input
    var searchInput = document.getElementById('radSearch');
    var clearBtn = document.getElementById('radClearSearch');

    searchInput.addEventListener('input', function() {
      _searchQuery = this.value.trim();
      clearBtn.style.display = _searchQuery ? 'block' : 'none';
      _renderGrid();
    });

    clearBtn.addEventListener('click', function() {
      searchInput.value = '';
      _searchQuery = '';
      this.style.display = 'none';
      _renderGrid();
    });

    // Detail panel close
    document.getElementById('radDetailClose').addEventListener('click', _closeDetail);

    // Close on overlay click
    document.getElementById('radDetailOverlay').addEventListener('click', function(e) {
      if (e.target === this) _closeDetail();
    });

    // Animate button
    document.getElementById('radAnimateBtn').addEventListener('click', function() {
      if (_writer) _writer.animateCharacter();
    });

    // ESC key to close
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        var overlay = document.getElementById('radDetailOverlay');
        if (overlay && overlay.style.display === 'flex') {
          _closeDetail();
        }
      }
    });
  }

  // ── Public init ──
  function init() {
    if (typeof RADICALS_214 === 'undefined') {
      console.error('[Radicals] RADICALS_214 not loaded');
      return;
    }

    _enrichWithExamples();
    _renderGrid();
    _setupListeners();

    console.log('[Radicals] Initialized with', RADICALS_214.length, 'radicals');
  }

  return { init: init };
})();
