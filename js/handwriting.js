// ═══════════════════════════════════════════════════════
// HANDWRITING.JS — Handwriting Module (Phase F.6)
// • Tab Online: HanziWriter quiz mode (port from F3)
// • Tab Print: Generate printable A4 layouts (Row/Grid/Sentence)
// ═══════════════════════════════════════════════════════

var Handwriting = {
  selectedChars: [],
  _writer: null,
  _onlinePool: [],
  _onlineIdx: 0,
  _onlineResults: [],

  setup: function() {
    Handwriting._bindOnline();
    Handwriting._bindPrint();
    Handwriting._updatePreview();
  },

  // ── Tab switching ─────────────────────────────────────
  switchTab: function(tab) {
    document.querySelectorAll('.hw-tab').forEach(function(t) { t.classList.remove('active'); });
    var activeTab = document.querySelector('.hw-tab[data-tab="' + tab + '"]');
    if (activeTab) activeTab.classList.add('active');
    document.getElementById('hw-panel-online').style.display = tab === 'online' ? '' : 'none';
    document.getElementById('hw-panel-print').style.display = tab === 'print' ? '' : 'none';
  },

  // ══════════════════════════════════════════════════════
  // ONLINE MODE
  // ══════════════════════════════════════════════════════

  _bindOnline: function() {
    var startBtn = document.getElementById('hwOnlineStart');
    if (startBtn) startBtn.onclick = Handwriting._startOnline;
  },

  _startOnline: function() {
    var customEl = document.getElementById('hwOnlineCustom');
    var customText = customEl ? customEl.value.trim() : '';
    var pool;

    if (customText) {
      // Use custom-typed characters
      var chars = customText.match(/[一-鿿]/g) || [];
      var unique = [];
      var seen = {};
      chars.forEach(function(ch) { if (!seen[ch]) { seen[ch] = true; unique.push(ch); } });
      var wordMap = {};
      getAllWords().forEach(function(w) { if (w.h.length === 1) wordMap[w.h] = w; });
      pool = unique.map(function(ch) { return wordMap[ch] || { h: ch, p: '', v: ch, e: ch }; });
    } else {
      // Use HSK level — filter to single characters only (HanziWriter needs single chars)
      var level = parseInt(document.getElementById('hwOnlineLevel').value);
      var count = parseInt(document.getElementById('hwOnlineCount').value);
      pool = shuffle(getAllWords().filter(function(w) {
        return w.level === level && w.h.length === 1;
      })).slice(0, count);
    }

    if (!pool.length) {
      alert('Không đủ từ vựng! Thử level khác hoặc nhập chữ thủ công.');
      return;
    }

    Handwriting._onlinePool = pool;
    Handwriting._onlineIdx = 0;
    Handwriting._onlineResults = [];

    var area = document.getElementById('hwOnlineArea');
    area.style.display = '';
    area.innerHTML =
      '<div class="hw-online-header">' +
        '<button class="btn-exit" id="hwOnlineExit">✕</button>' +
        '<span class="hw-online-progress" id="hwOnlineProgress">1/' + count + '</span>' +
      '</div>' +
      '<div class="hw-online-prompt" id="hwOnlinePrompt"></div>' +
      '<div class="hw-online-writer" id="hwOnlineWriter"></div>' +
      '<div class="hw-online-feedback" id="hwOnlineFeedback"></div>';

    document.getElementById('hwOnlineExit').onclick = Handwriting._exitOnline;
    Handwriting._showOnlineChar();
  },

  _showOnlineChar: function() {
    var word = Handwriting._onlinePool[Handwriting._onlineIdx];
    if (!word) { Handwriting._finishOnline(); return; }

    var total = Handwriting._onlinePool.length;
    document.getElementById('hwOnlineProgress').textContent = (Handwriting._onlineIdx + 1) + '/' + total;
    document.getElementById('hwOnlinePrompt').innerHTML =
      '<div class="hw-prompt-pinyin">' + word.p + '</div>' +
      '<div class="hw-prompt-meaning">' + (AppState.lang === 'en' ? word.e : word.v) + '</div>';
    document.getElementById('hwOnlineFeedback').innerHTML = '';

    var writerEl = document.getElementById('hwOnlineWriter');
    writerEl.innerHTML = '';

    if (Handwriting._writer) {
      Handwriting._writer = null;
    }

    if (typeof HanziWriter === 'undefined') {
      writerEl.innerHTML = '<p style="color:var(--text2)">HanziWriter chưa load. Vui lòng thử lại.</p>';
      return;
    }

    Handwriting._writer = HanziWriter.create('hwOnlineWriter', word.h, {
      width: 200, height: 200,
      padding: 10,
      showCharacter: false,
      showOutline: true,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 100,
      showHintAfterMisses: 3,
      highlightOnComplete: true,
      drawingWidth: 20,
      quiz: undefined
    });

    Handwriting._writer.quiz({
      onComplete: function(data) {
        var mistakes = data.totalMistakes || 0;
        var quality = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : mistakes <= 4 ? 1 : 0;
        Handwriting._onlineResults.push({ word: word, mistakes: mistakes, quality: quality });

        if (typeof updateSRSCard === 'function') updateSRSCard(word.h, quality);

        var fb = document.getElementById('hwOnlineFeedback');
        fb.innerHTML = '<div class="hw-fb-' + (mistakes === 0 ? 'perfect' : 'ok') + '">' +
          (mistakes === 0 ? '✅ Hoàn hảo!' : '✍️ ' + mistakes + ' lỗi') +
          '</div>';

        setTimeout(function() {
          Handwriting._onlineIdx++;
          Handwriting._showOnlineChar();
        }, 1200);
      }
    });
  },

  _finishOnline: function() {
    var results = Handwriting._onlineResults;
    var perfect = results.filter(function(r) { return r.mistakes === 0; }).length;
    var total = results.length;
    var xp = Math.max(5, total * 3 + perfect * 2);

    if (typeof Gamification !== 'undefined') Gamification.addXP(xp);
    if (typeof Quests !== 'undefined') {
      Quests.incrementMetric('cards_studied', total);
      Quests.incrementMetric('sessions_done', 1);
    }

    var area = document.getElementById('hwOnlineArea');
    area.innerHTML =
      '<div class="hw-online-result">' +
        '<h3>✍️ Kết quả luyện viết</h3>' +
        '<div class="hw-result-stats">' +
          '<div>Tổng: <strong>' + total + '</strong> chữ</div>' +
          '<div>Hoàn hảo: <strong>' + perfect + '</strong></div>' +
          '<div>XP: <strong>+' + xp + '</strong></div>' +
        '</div>' +
        '<div class="hw-result-btns">' +
          '<button class="btn-primary" id="hwOnlineRetry">🔄 Luyện lại</button>' +
          '<button class="btn-secondary" id="hwOnlineBack">← Quay lại</button>' +
        '</div>' +
      '</div>';

    document.getElementById('hwOnlineRetry').onclick = Handwriting._startOnline;
    document.getElementById('hwOnlineBack').onclick = Handwriting._exitOnline;
  },

  _exitOnline: function() {
    var area = document.getElementById('hwOnlineArea');
    if (area) { area.style.display = 'none'; area.innerHTML = ''; }
    Handwriting._writer = null;
  },

  // ══════════════════════════════════════════════════════
  // PRINT MODE
  // ══════════════════════════════════════════════════════

  _bindPrint: function() {
    document.querySelectorAll('.hw-hsk-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.hw-hsk-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        Handwriting._loadHSKChars(parseInt(btn.dataset.level));
      });
    });

    document.querySelectorAll('.hw-layout-option').forEach(function(label) {
      label.addEventListener('click', function() {
        document.querySelectorAll('.hw-layout-option').forEach(function(l) { l.classList.remove('active'); });
        label.classList.add('active');
      });
    });

    var deckSelect = document.getElementById('hwDeckSelect');
    if (deckSelect) {
      Handwriting._populateDecks();
      deckSelect.addEventListener('change', function() {
        Handwriting._loadDeckChars(deckSelect.value);
      });
    }

    var customInput = document.getElementById('hwCustomInput');
    if (customInput) {
      customInput.addEventListener('input', function() {
        Handwriting._parseCustom(customInput.value);
      });
    }

    var genBtn = document.getElementById('hwGenerateBtn');
    if (genBtn) genBtn.onclick = Handwriting._generatePrint;

    Handwriting._loadHSKChars(3);
  },

  switchSource: function(src) {
    document.querySelectorAll('.hw-src-tab').forEach(function(t) { t.classList.remove('active'); });
    var tab = document.querySelector('.hw-src-tab[data-src="' + src + '"]');
    if (tab) tab.classList.add('active');
    document.getElementById('hw-src-hsk').style.display = src === 'hsk' ? '' : 'none';
    document.getElementById('hw-src-deck').style.display = src === 'deck' ? '' : 'none';
    document.getElementById('hw-src-custom').style.display = src === 'custom' ? '' : 'none';

    if (src === 'hsk') {
      var activeBtn = document.querySelector('.hw-hsk-btn.active');
      if (activeBtn) Handwriting._loadHSKChars(parseInt(activeBtn.dataset.level));
    }
  },

  _loadHSKChars: function(level) {
    var words = getAllWords().filter(function(w) { return w.level === level; });
    Handwriting.selectedChars = words.map(function(w) {
      return { h: w.h, p: w.p, v: w.v, e: w.e, ex: w.ex };
    });
    Handwriting._updatePreview();
  },

  _loadDeckChars: function(deckId) {
    if (!deckId) { Handwriting.selectedChars = []; Handwriting._updatePreview(); return; }
    var decks = JSON.parse(localStorage.getItem('hsk_decks') || '[]');
    if (!Array.isArray(decks)) decks = [];
    var deck = decks.find(function(d) { return d.id === deckId; });
    if (!deck || !deck.wordIds) { Handwriting.selectedChars = []; Handwriting._updatePreview(); return; }

    var all = getAllWords();
    var map = {};
    all.forEach(function(w) { map[w.h] = w; });
    Handwriting.selectedChars = deck.wordIds.map(function(id) { return map[id]; }).filter(Boolean);
    Handwriting._updatePreview();
  },

  _parseCustom: function(text) {
    var matches = text.match(/[一-鿿]/g) || [];
    var unique = [];
    var seen = {};
    matches.forEach(function(ch) {
      if (!seen[ch] && unique.length < 100) { seen[ch] = true; unique.push(ch); }
    });

    var all = getAllWords();
    var map = {};
    all.forEach(function(w) { map[w.h] = w; });

    Handwriting.selectedChars = unique.map(function(ch) {
      return map[ch] || { h: ch, p: '', v: '', e: '' };
    });
    Handwriting._updatePreview();
  },

  _populateDecks: function() {
    var select = document.getElementById('hwDeckSelect');
    if (!select) return;
    var decks = JSON.parse(localStorage.getItem('hsk_decks') || '[]');
    if (!Array.isArray(decks)) decks = [];
    decks.forEach(function(d) {
      var opt = document.createElement('option');
      opt.value = d.id;
      opt.textContent = d.name + ' (' + (d.wordIds ? d.wordIds.length : 0) + ' từ)';
      select.appendChild(opt);
    });
  },

  _updatePreview: function() {
    var countEl = document.getElementById('hwPreviewCount');
    var charsEl = document.getElementById('hwPreviewChars');
    if (!countEl || !charsEl) return;
    var chars = Handwriting.selectedChars;
    countEl.textContent = chars.length + ' chữ';
    var preview = chars.slice(0, 30).map(function(c) { return c.h; }).join(' ');
    if (chars.length > 30) preview += ' ...';
    charsEl.textContent = preview;
  },

  // ── Generate printable page ───────────────────────────
  _generatePrint: function() {
    var chars = Handwriting.selectedChars;
    if (!chars.length) { alert('Chưa chọn chữ nào!'); return; }

    var layout = document.querySelector('input[name="hwLayout"]:checked').value;
    var showPinyin = document.getElementById('hwShowPinyin').checked;
    var showMeaning = document.getElementById('hwShowMeaning').checked;

    // Row/Grid layouts need individual characters — expand multi-char words and deduplicate
    if (layout === 'row' || layout === 'grid') {
      var seen = {};
      var expanded = [];
      chars.forEach(function(c) {
        c.h.split('').forEach(function(ch) {
          if (/[一-鿿]/.test(ch) && !seen[ch]) {
            seen[ch] = true;
            expanded.push({ h: ch, p: c.p, v: c.v, e: c.e, ex: c.ex });
          }
        });
      });
      chars = expanded;
      if (!chars.length) { alert('Chưa chọn chữ nào!'); return; }
    }

    var html = Handwriting._buildPrintHTML(chars, layout, showPinyin, showMeaning);
    var win = window.open('', '_blank');
    if (!win) {
      alert('Trình duyệt đã chặn popup. Vui lòng cho phép popup từ trang này rồi thử lại.');
      return;
    }
    win.document.write(html);
    win.document.close();
    setTimeout(function() { win.print(); }, 800);
  },

  _buildPrintHTML: function(chars, layout, showPinyin, showMeaning) {
    var css = Handwriting._getPrintCSS();
    var body = '';

    if (layout === 'row') {
      body = Handwriting._buildRowLayout(chars, showPinyin, showMeaning);
    } else if (layout === 'grid') {
      body = Handwriting._buildGridLayout(chars, showPinyin, showMeaning);
    } else {
      body = Handwriting._buildSentenceLayout(chars, showPinyin, showMeaning);
    }

    return '<!DOCTYPE html><html><head><meta charset="UTF-8"/>' +
      '<title>Hanzi Genz — Luyện viết</title>' +
      '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;700&display=swap" rel="stylesheet"/>' +
      '<style>' + css + '</style></head><body>' + body + '</body></html>';
  },

  // ── Layout A: Row (8 chars/page × 11 practice cells) ──
  _buildRowLayout: function(chars, showPinyin, showMeaning) {
    var pages = [];
    var perPage = 8;
    for (var p = 0; p < chars.length; p += perPage) {
      var pageChars = chars.slice(p, p + perPage);
      var rows = '';
      pageChars.forEach(function(c) {
        var header = '<div class="row-header">';
        if (showPinyin) header += '<div class="row-pinyin">' + (c.p || '') + '</div>';
        header += '<div class="row-model">' + c.h + '</div>';
        if (showMeaning) header += '<div class="row-meaning">' + (c.v || c.e || '') + '</div>';
        header += '</div>';

        var cells = '';
        for (var i = 0; i < 3; i++) cells += '<div class="tiange tiange-faint"><span class="tiange-char">' + c.h + '</span></div>';
        for (var j = 0; j < 8; j++) cells += '<div class="tiange"></div>';

        rows += '<div class="row-line">' + header + '<div class="row-cells">' + cells + '</div></div>';
      });
      pages.push('<div class="print-page">' + rows + '</div>');
    }
    return pages.join('');
  },

  // ── Layout B: Grid (1 char/page × 9×9 = 81 cells) ────
  _buildGridLayout: function(chars, showPinyin, showMeaning) {
    var pages = [];
    chars.forEach(function(c) {
      var header = '<div class="grid-header">';
      header += '<span class="grid-char-big">' + c.h + '</span>';
      if (showPinyin) header += '<span class="grid-pinyin">' + (c.p || '') + '</span>';
      if (showMeaning) header += '<span class="grid-meaning">' + (c.v || c.e || '') + '</span>';
      header += '</div>';

      var grid = '<div class="grid-9x9">';
      for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
          var isFaint = col < 3 && row === 0;
          grid += '<div class="tiange' + (isFaint ? ' tiange-faint' : '') + '">' +
            (isFaint ? '<span class="tiange-char">' + c.h + '</span>' : '') + '</div>';
        }
      }
      grid += '</div>';
      pages.push('<div class="print-page">' + header + grid + '</div>');
    });
    return pages.join('');
  },

  // ── Layout C: Sentence (example sentence × 4-6 lines) ─
  _buildSentenceLayout: function(chars, showPinyin, showMeaning) {
    var pages = [];
    var sentenceChars = chars.filter(function(c) { return c.ex && c.ex.zh; });
    if (!sentenceChars.length) {
      return '<div class="print-page"><p style="padding:40px;text-align:center">Không có câu mẫu cho các chữ đã chọn. Hãy thử HSK 4+ hoặc chọn layout khác.</p></div>';
    }

    sentenceChars.slice(0, 20).forEach(function(c) {
      var header = '<div class="sent-header">';
      header += '<div class="sent-zh">' + c.ex.zh + '</div>';
      if (showPinyin && c.ex.py) header += '<div class="sent-py">' + c.ex.py + '</div>';
      if (showMeaning && c.ex.vi) header += '<div class="sent-vi">' + c.ex.vi + '</div>';
      header += '</div>';

      var lines = '';
      var sentChars = c.ex.zh.split('');
      for (var rep = 0; rep < 5; rep++) {
        var row = '<div class="sent-row">';
        sentChars.forEach(function(ch) {
          var isCJK = /[一-鿿]/.test(ch);
          if (isCJK) {
            row += '<div class="tiange-sm' + (rep === 0 ? ' tiange-faint' : '') + '">' +
              (rep === 0 ? '<span class="tiange-char">' + ch + '</span>' : '') + '</div>';
          } else {
            row += '<div class="sent-punct">' + ch + '</div>';
          }
        });
        row += '</div>';
        lines += row;
      }
      pages.push('<div class="print-page">' + header + lines + '</div>');
    });
    return pages.join('');
  },

  _getPrintCSS: function() {
    return [
      '@page { size: A4; margin: 15mm; }',
      '* { box-sizing: border-box; margin: 0; padding: 0; }',
      'body { font-family: "Noto Sans SC", sans-serif; color: #333; }',
      '.print-page { page-break-after: always; padding: 0; }',
      '.print-page:last-child { page-break-after: auto; }',
      '.tiange { width: 18mm; height: 18mm; border: 1px solid #999; display: inline-flex; align-items: center; justify-content: center; position: relative; background: linear-gradient(to right, transparent 49.5%, #ddd 49.5%, #ddd 50.5%, transparent 50.5%), linear-gradient(to bottom, transparent 49.5%, #ddd 49.5%, #ddd 50.5%, transparent 50.5%), linear-gradient(45deg, transparent 49%, #ddd 49.5%, #ddd 50.5%, transparent 51%), linear-gradient(-45deg, transparent 49%, #ddd 49.5%, #ddd 50.5%, transparent 51%); }',
      '.tiange-sm { width: 14mm; height: 14mm; border: 1px solid #999; display: inline-flex; align-items: center; justify-content: center; position: relative; background: linear-gradient(to right, transparent 49.5%, #ddd 49.5%, #ddd 50.5%, transparent 50.5%), linear-gradient(to bottom, transparent 49.5%, #ddd 49.5%, #ddd 50.5%, transparent 50.5%), linear-gradient(45deg, transparent 49%, #ddd 49.5%, #ddd 50.5%, transparent 51%), linear-gradient(-45deg, transparent 49%, #ddd 49.5%, #ddd 50.5%, transparent 51%); }',
      '.tiange-char { font-size: 14mm; line-height: 18mm; text-align: center; color: #000; }',
      '.tiange-sm .tiange-char { font-size: 10mm; line-height: 14mm; }',
      '.tiange-faint .tiange-char { color: rgba(0,0,0,0.18); }',
      '.row-line { display: flex; align-items: center; margin-bottom: 4mm; }',
      '.row-header { width: 28mm; text-align: center; }',
      '.row-pinyin { font-size: 9pt; color: #666; }',
      '.row-model { font-size: 16pt; font-weight: 700; }',
      '.row-meaning { font-size: 7pt; color: #888; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 28mm; }',
      '.row-cells { display: flex; gap: 0; }',
      '.grid-header { text-align: center; margin-bottom: 5mm; }',
      '.grid-char-big { font-size: 28pt; font-weight: 700; margin-right: 8mm; }',
      '.grid-pinyin { font-size: 14pt; color: #555; margin-right: 8mm; }',
      '.grid-meaning { font-size: 11pt; color: #777; }',
      '.grid-9x9 { display: grid; grid-template-columns: repeat(9, 18mm); gap: 0; justify-content: center; }',
      '.sent-header { margin-bottom: 5mm; }',
      '.sent-zh { font-size: 14pt; font-weight: 500; }',
      '.sent-py { font-size: 10pt; color: #555; }',
      '.sent-vi { font-size: 9pt; color: #777; }',
      '.sent-row { display: flex; margin-bottom: 2mm; align-items: center; }',
      '.sent-punct { width: 8mm; text-align: center; font-size: 12pt; }'
    ].join('\n');
  }
};
