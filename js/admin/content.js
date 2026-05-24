// ═══════════════════════════════════════════════════════
// ADMIN/CONTENT.JS — Section 4: Nội dung
// Vocab / Grammar / Reading / Decks / Quest templates
// ═══════════════════════════════════════════════════════

var AdminContent = (function() {
  var _vocabData  = [];
  var _vocabVer   = 'hsk3'; // 'hsk3' | 'hsk2'
  var _vocabPage  = 1;
  var _vocabPageSize = 50;

  function init() {
    _bindMainTabs();
    _bindVocabControls();
    _loadVocab();
  }

  function _bindMainTabs() {
    document.querySelectorAll('#contentMainTabs .adm-tab[data-ctab]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('#contentMainTabs .adm-tab').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        document.querySelectorAll('.adm-content-panel').forEach(function(p) { p.style.display = 'none'; });
        var panelId = 'content' + _cap(btn.dataset.ctab);
        var panel = document.getElementById(panelId);
        if (panel) panel.style.display = '';
        if (btn.dataset.ctab === 'grammar')   _loadGrammar();
        if (btn.dataset.ctab === 'reading')   _loadReadings();
        if (btn.dataset.ctab === 'decks')     _loadDecks();
        if (btn.dataset.ctab === 'quest-tpl') _loadQuestTemplates();
      });
    });
  }

  function _bindVocabControls() {
    document.querySelectorAll('#vocabVersionTabs .adm-sub-tab').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('#vocabVersionTabs .adm-sub-tab').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        _vocabVer = btn.dataset.vver;
        _vocabPage = 1;
        _loadVocab();
      });
    });

    var lvlFilter = document.getElementById('vocabLevelFilter');
    if (lvlFilter) lvlFilter.addEventListener('change', function() { _vocabPage = 1; _renderVocab(); });

    var search = document.getElementById('vocabSearch');
    if (search) search.addEventListener('input', function() { _vocabPage = 1; _renderVocab(); });

    var missingVN    = document.getElementById('vocabMissingVN');
    var missingAudio = document.getElementById('vocabMissingAudio');
    if (missingVN)    missingVN.addEventListener('change', function() { _vocabPage = 1; _renderVocab(); });
    if (missingAudio) missingAudio.addEventListener('change', function() { _vocabPage = 1; _renderVocab(); });

    document.getElementById('vocabAddBtn') &&
      document.getElementById('vocabAddBtn').addEventListener('click', function() {
        alert('Chức năng thêm từ đang phát triển.\nHiện tại: sửa trực tiếp file js/data/hsk*.js');
      });
  }

  function _loadVocab() {
    var wrap = document.getElementById('vocabTableWrap');
    if (wrap) wrap.innerHTML = '<p class="adm-empty">Đang tải dữ liệu từ vựng...</p>';

    // Load from global data files (already in memory via index.html scripts)
    if (_vocabVer === 'hsk3') {
      _vocabData = _flattenHSK3Data();
    } else {
      _vocabData = _flattenHSK2Data();
    }

    _populateLevelFilter(_vocabVer);
    _renderVocab();
  }

  function _flattenHSK3Data() {
    if (!window.HSK3_DATA) return [];
    var out = [];
    [1,2,3,4,5,6,7,8,9].forEach(function(lvl) {
      var words = HSK3_DATA[lvl] || [];
      words.forEach(function(w) { out.push(Object.assign({ level: lvl }, w)); });
    });
    return out;
  }

  function _flattenHSK2Data() {
    if (!window.HSK_DATA) return [];
    var out = [];
    [1,2,3,4,5,6].forEach(function(lvl) {
      var words = HSK_DATA[lvl] || [];
      words.forEach(function(w) { out.push(Object.assign({ level: lvl }, w)); });
    });
    return out;
  }

  function _populateLevelFilter(ver) {
    var sel = document.getElementById('vocabLevelFilter');
    if (!sel) return;
    var maxLvl = ver === 'hsk3' ? 9 : 6;
    var opts = '<option value="">Tất cả cấp</option>';
    for (var i = 1; i <= maxLvl; i++) {
      opts += '<option value="' + i + '">Cấp ' + i + '</option>';
    }
    sel.innerHTML = opts;
  }

  function _renderVocab() {
    var wrap    = document.getElementById('vocabTableWrap');
    var countEl = document.getElementById('vocabCount');
    if (!wrap) return;

    var q         = ((document.getElementById('vocabSearch') || {}).value || '').toLowerCase().trim();
    var lvl       = ((document.getElementById('vocabLevelFilter') || {}).value || '');
    var missingVN = document.getElementById('vocabMissingVN') && document.getElementById('vocabMissingVN').checked;
    var missingAu = document.getElementById('vocabMissingAudio') && document.getElementById('vocabMissingAudio').checked;

    var filtered = _vocabData.filter(function(w) {
      if (lvl && String(w.level) !== lvl) return false;
      if (q && (w.h || '').indexOf(q) === -1 && (w.p || '').toLowerCase().indexOf(q) === -1 && (w.v || '').toLowerCase().indexOf(q) === -1 && (w.e || '').toLowerCase().indexOf(q) === -1) return false;
      if (missingVN && w.v && w.v.trim()) return false;
      if (missingAu) return false; // audio data not in JS files yet
      return true;
    });

    if (countEl) countEl.textContent = Admin.fmt(filtered.length) + ' từ';

    if (!filtered.length) {
      wrap.innerHTML = '<p class="adm-empty">Không tìm thấy từ vựng nào.</p>';
      return;
    }

    var start = (_vocabPage - 1) * _vocabPageSize;
    var page  = filtered.slice(start, start + _vocabPageSize);

    var rows = page.map(function(w, i) {
      var missingVNFlag = !w.v ? '<span title="Thiếu VN" style="color:var(--adm-chau)">⚠</span>' : '';
      return '<tr>' +
        '<td style="font-family:\'Noto Sans SC\',sans-serif;font-size:18px;font-weight:700">' + (w.h || '—') + '</td>' +
        '<td>' + (w.p || '—') + '</td>' +
        '<td>' + (w.v || '—') + missingVNFlag + '</td>' +
        '<td style="color:var(--adm-text3)">' + (w.e || '—') + '</td>' +
        '<td><span class="adm-badge badge-free">Cấp ' + w.level + '</span></td>' +
        '<td style="color:var(--adm-text3)">' + (w.t || '—') + '</td>' +
        '<td><span class="adm-badge ' + (w.audio ? 'badge-paid' : 'badge-failed') + '">' + (w.audio ? '▶' : '✗') + '</span></td>' +
        '<td>' + ((w.ex && w.ex.zh) ? '✓' : '—') + '</td>' +
      '</tr>';
    }).join('');

    wrap.innerHTML = '<table class="adm-table">' +
      '<thead><tr>' +
        '<th>Hanzi</th><th>Pinyin</th><th>Tiếng Việt</th><th>English</th>' +
        '<th>Cấp</th><th>Phồn thể</th><th>Audio</th><th>Ví dụ</th>' +
      '</tr></thead><tbody>' + rows + '</tbody></table>';

    _renderVocabPagination(filtered.length);
  }

  function _renderVocabPagination(total) {
    // Append pagination after vocab table
    var existing = document.getElementById('vocabPagination');
    if (!existing) {
      var pg = document.createElement('div');
      pg.id = 'vocabPagination';
      pg.className = 'adm-pagination';
      document.getElementById('contentVocab').appendChild(pg);
    }
    var pg2 = document.getElementById('vocabPagination');
    var pages = Math.ceil(total / _vocabPageSize);
    if (!pg2 || pages <= 1) { if (pg2) pg2.innerHTML = ''; return; }
    var btns = '';
    if (_vocabPage > 1) btns += '<button class="adm-page-btn" onclick="AdminContent.vocabPage(' + (_vocabPage-1) + ')">← Trước</button>';
    for (var i = Math.max(1, _vocabPage-3); i <= Math.min(pages, _vocabPage+3); i++) {
      btns += '<button class="adm-page-btn' + (i === _vocabPage ? ' active' : '') + '" onclick="AdminContent.vocabPage(' + i + ')">' + i + '</button>';
    }
    if (_vocabPage < pages) btns += '<button class="adm-page-btn" onclick="AdminContent.vocabPage(' + (_vocabPage+1) + ')">Sau →</button>';
    btns += '<span style="color:var(--adm-text3);font-size:12px;padding:0 8px">/ ' + pages + ' trang</span>';
    pg2.innerHTML = btns;
  }

  async function _loadGrammar() {
    var wrap = document.getElementById('grammarTableWrap');
    if (wrap) wrap.innerHTML = '<p class="adm-empty">Đang tải...</p>';

    // Use global GRAMMAR_DATA if available
    var data = window.GRAMMAR_DATA || (window.Grammar && Grammar._data) || [];
    if (!Array.isArray(data)) data = [];

    var countEl = document.getElementById('grammarCount');
    if (countEl) countEl.textContent = Admin.fmt(data.length) + ' patterns';

    if (!data.length) {
      if (wrap) wrap.innerHTML = '<p class="adm-empty">Không có dữ liệu ngữ pháp (GRAMMAR_DATA chưa load).</p>';
      return;
    }

    var q = ((document.getElementById('grammarSearch') || {}).value || '').toLowerCase().trim();
    var filtered = q ? data.filter(function(g) {
      return (g.pattern || '').toLowerCase().indexOf(q) !== -1 || (g.meaning || '').toLowerCase().indexOf(q) !== -1;
    }) : data;

    var rows = filtered.slice(0, 100).map(function(g) {
      return '<tr>' +
        '<td style="font-weight:700">' + (g.pattern || '—') + '</td>' +
        '<td>' + (g.meaning || '—') + '</td>' +
        '<td style="font-size:11px;color:var(--adm-text3)">' + (g.level || '—') + '</td>' +
        '<td style="font-size:11px">' + ((g.examples && g.examples.length) || 0) + '</td>' +
      '</tr>';
    }).join('');

    if (wrap) wrap.innerHTML = '<table class="adm-table"><thead><tr><th>Pattern</th><th>Nghĩa</th><th>Cấp</th><th>Ví dụ</th></tr></thead><tbody>' + rows + '</tbody></table>';

    var gs = document.getElementById('grammarSearch');
    if (gs && !gs._bound) {
      gs._bound = true;
      gs.addEventListener('input', _loadGrammar);
    }
  }

  async function _loadReadings() {
    var wrap = document.getElementById('readingTableWrap');
    if (wrap) wrap.innerHTML = '<p class="adm-empty">Đang tải...</p>';

    // Use global READINGS_DATA if available
    var data = window.READINGS_DATA || [];
    var countEl = document.getElementById('readingCount');
    if (countEl) countEl.textContent = Admin.fmt(data.length) + ' bài';

    if (!data.length) {
      if (wrap) wrap.innerHTML = '<p class="adm-empty">Không có dữ liệu bài đọc (READINGS_DATA chưa load).</p>';
      return;
    }

    var rows = data.slice(0, 50).map(function(r) {
      return '<tr>' +
        '<td style="font-weight:700">' + (r.title || '—') + '</td>' +
        '<td>' + (r.level || '—') + '</td>' +
        '<td style="font-size:11px;color:var(--adm-text3)">' + ((r.passage || '').slice(0, 60) + '...') + '</td>' +
        '<td>' + ((r.questions && r.questions.length) || 0) + ' câu</td>' +
      '</tr>';
    }).join('');

    if (wrap) wrap.innerHTML = '<table class="adm-table"><thead><tr><th>Tiêu đề</th><th>Cấp</th><th>Preview</th><th>Câu hỏi</th></tr></thead><tbody>' + rows + '</tbody></table>';
  }

  async function _loadDecks() {
    var wrap = document.getElementById('decksTableWrap');
    if (wrap) wrap.innerHTML = '<p class="adm-empty">Đang tải...</p>';
    if (!window.SB) return;

    var res = await SB.rpc('admin_list_user_decks', { p_limit: 50 });
    if (res.error || !res.data || !res.data.length) {
      if (wrap) wrap.innerHTML = '<p class="adm-empty">Chưa có bộ thẻ nào để review.</p>';
      return;
    }
    var rows = res.data.map(function(d) {
      return '<tr>' +
        '<td style="font-weight:700">' + (d.deck_name || '—') + '</td>' +
        '<td style="font-size:11px;color:var(--adm-text3)">' + (d.user_email || '—') + '</td>' +
        '<td>' + (d.card_count || 0) + ' thẻ</td>' +
        '<td>' + Admin.relTime(d.created_at) + '</td>' +
        '<td>' + (d.is_public ? '🌐 Công khai' : '🔒 Riêng tư') + '</td>' +
      '</tr>';
    }).join('');
    if (wrap) wrap.innerHTML = '<table class="adm-table"><thead><tr><th>Tên deck</th><th>User</th><th>Thẻ</th><th>Tạo lúc</th><th>Trạng thái</th></tr></thead><tbody>' + rows + '</tbody></table>';
  }

  async function _loadQuestTemplates() {
    var wrap = document.getElementById('questTplTableWrap');
    if (!wrap) return;

    // Use global quest data from quests.js
    var tiers = [
      { tier: 'Easy ⚡', data: window.DAILY_TIER_EASY || [] },
      { tier: 'Normal 📚', data: window.DAILY_TIER_NORMAL || [] },
      { tier: 'Hard 🔥', data: window.DAILY_TIER_HARD || [] },
      { tier: 'Skull 💀', data: window.DAILY_TIER_SKULL || [] }
    ];
    var rows = [];
    tiers.forEach(function(t) {
      t.data.forEach(function(q) {
        rows.push('<tr>' +
          '<td>' + (q.icon || '') + ' ' + (q.title || '—') + '</td>' +
          '<td><span class="adm-badge badge-free">' + t.tier + '</span></td>' +
          '<td style="font-size:11px;color:var(--adm-text3)">' + (q.desc || '—') + '</td>' +
          '<td>' + (q.metric || '—') + '</td>' +
          '<td style="font-weight:700;color:var(--adm-hoang)">' + ((q.rewards && q.rewards.token) || 0) + ' 🪙</td>' +
          '<td>' + ((q.rewards && q.rewards.xp) || 0) + ' XP</td>' +
        '</tr>');
      });
    });
    if (!rows.length) {
      wrap.innerHTML = '<p class="adm-empty">Quest templates không có (DAILY_TIER_* chưa load).</p>';
      return;
    }
    wrap.innerHTML = '<table class="adm-table"><thead><tr><th>Quest</th><th>Tier</th><th>Mô tả</th><th>Metric</th><th>Token</th><th>XP</th></tr></thead><tbody>' + rows.join('') + '</tbody></table>';
  }

  function vocabPage(p) {
    _vocabPage = p;
    _renderVocab();
  }

  function _cap(s) {
    return s.charAt(0).toUpperCase() + s.slice(1).replace(/-([a-z])/g, function(m, c) { return c.toUpperCase(); });
  }

  return {
    init:      init,
    vocabPage: vocabPage
  };
}());
