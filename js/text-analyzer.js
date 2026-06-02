// ═══════════════════════════════════════════════════════
// TEXT-ANALYZER.JS — Phase O5: Phân Tích Văn Bản
// • Builds HSK lookup map from HSK3_DATA (levels 1-9)
// • Greedy longest-match segmentation (max 4 chars)
// • Renders highlight tokens via DOM (no innerHTML on user input — XSS safe)
// • Click popup: pinyin + nghĩa + TTS (Dictionary.playTTS) + Thêm vào kho (openAddToDeckPopup)
// • Stats: từ/cấp, tổng, coverage %, độ khó ước tính
// ═══════════════════════════════════════════════════════

var TextAnalyzer = (function() {

  var _map = null;          // { hanzi: { p, v, e, level, _word } }
  var _currentWord = null;  // word object passed to openAddToDeckPopup

  // ── Build lookup map from HSK3_DATA ─────────────────────
  function _buildMap() {
    if (_map) return;
    _map = {};
    if (typeof HSK3_DATA === 'undefined') return;
    for (var lv = 1; lv <= 9; lv++) {
      var arr = HSK3_DATA[lv] || [];
      for (var i = 0; i < arr.length; i++) {
        var w = arr[i];
        if (w.h && !_map[w.h]) {
          _map[w.h] = { p: w.p, v: w.v, e: w.e, level: lv, _word: w };
        }
      }
    }
  }

  // ── Greedy longest-match segmentation ───────────────────
  // Returns [ { text, level } ] — level 0 = not in HSK.
  // Consecutive non-HSK chars are merged into one token for compact DOM.
  function _segment(text) {
    var tokens = [];
    var i = 0;
    var neutralBuf = '';

    while (i < text.length) {
      var matched = false;
      for (var len = 4; len >= 1; len--) {
        if (i + len > text.length) continue;
        var sub = text.slice(i, i + len);
        if (_map[sub]) {
          if (neutralBuf) {
            tokens.push({ text: neutralBuf, level: 0 });
            neutralBuf = '';
          }
          tokens.push({ text: sub, level: _map[sub].level });
          i += len;
          matched = true;
          break;
        }
      }
      if (!matched) {
        neutralBuf += text[i];
        i++;
      }
    }

    if (neutralBuf) tokens.push({ text: neutralBuf, level: 0 });
    return tokens;
  }

  // ── Render highlighted tokens (DOM only, no innerHTML on user text) ──
  function _renderHighlight(tokens) {
    var container = document.getElementById('taHighlight');
    if (!container) return;
    while (container.firstChild) container.removeChild(container.firstChild);

    tokens.forEach(function(tok) {
      var span = document.createElement('span');
      span.textContent = tok.text;  // XSS-safe: user input via textContent only
      if (tok.level > 0) {
        span.className = 'ta-token ta-hsk ta-hsk-' + tok.level;
        span.dataset.hanzi = tok.text;
        span.setAttribute('role', 'button');
        span.setAttribute('tabindex', '0');
        span.setAttribute('aria-label', tok.text + ' HSK ' + tok.level);
      } else {
        span.className = 'ta-token ta-neutral';
      }
      container.appendChild(span);
    });
  }

  // ── Show word popup ──────────────────────────────────────
  function _showPopup(anchorEl, hanzi) {
    var info = _map[hanzi];
    if (!info) return;
    _currentWord = info._word;

    document.getElementById('taPopupHanzi').textContent   = hanzi;
    document.getElementById('taPopupPinyin').textContent  = info.p;
    document.getElementById('taPopupMeaning').textContent = info.v;

    var lvEl = document.getElementById('taPopupLevel');
    lvEl.textContent = 'HSK ' + info.level;
    lvEl.className   = 'ta-popup-level ta-hsk-badge-' + info.level;

    var popup    = document.getElementById('taPopup');
    var backdrop = document.getElementById('taPopupBackdrop');
    popup.style.display    = 'block';
    backdrop.style.display = 'block';

    // Position near token (fixed = viewport-relative)
    var rect  = anchorEl.getBoundingClientRect();
    var vw    = window.innerWidth;
    var pw    = 270;  // approx popup width
    var left  = Math.max(12, Math.min(rect.left, vw - pw - 12));
    var top   = rect.bottom + 8;
    // Flip above token if popup would overflow viewport bottom
    if (top + 230 > window.innerHeight) top = Math.max(8, rect.top - 230);
    popup.style.left = left + 'px';
    popup.style.top  = top  + 'px';

    // Auto-play TTS
    if (typeof Dictionary !== 'undefined') Dictionary.playTTS(hanzi);
  }

  // ── Hide popup ───────────────────────────────────────────
  function _hidePopup() {
    var popup    = document.getElementById('taPopup');
    var backdrop = document.getElementById('taPopupBackdrop');
    if (popup)    popup.style.display    = 'none';
    if (backdrop) backdrop.style.display = 'none';
    _currentWord = null;
  }

  // ── Render stats ─────────────────────────────────────────
  function _renderStats(tokens) {
    var el = document.getElementById('taStats');
    if (!el) return;
    while (el.firstChild) el.removeChild(el.firstChild);

    var levelCounts = {};
    var hskWordCount = 0;
    var hskCharCount = 0;
    var totalCharCount = 0;
    var maxLevel = 0;

    tokens.forEach(function(t) {
      totalCharCount += t.text.length;
      if (t.level > 0) {
        hskWordCount++;
        hskCharCount += t.text.length;
        levelCounts[t.level] = (levelCounts[t.level] || 0) + 1;
        if (t.level > maxLevel) maxLevel = t.level;
      }
    });

    var coverage  = totalCharCount > 0 ? Math.round(hskCharCount / totalCharCount * 100) : 0;
    var diffLabel = maxLevel === 0 ? '—'
      : maxLevel <= 3 ? 'Sơ cấp (HSK ' + maxLevel + ')'
      : maxLevel <= 6 ? 'Trung cấp (HSK ' + maxLevel + ')'
      :                 'Cao cấp (HSK ' + maxLevel + ')';

    // Summary cards
    var summary = document.createElement('div');
    summary.className = 'ta-stats-summary';

    [
      ['Từ HSK nhận ra', hskWordCount],
      ['Ký tự phân tích', totalCharCount],
      ['Độ bao phủ HSK', coverage + '%'],
      ['Ước tính độ khó', diffLabel]
    ].forEach(function(pair) {
      var card = document.createElement('div');
      card.className = 'ta-stat-card';

      var val = document.createElement('div');
      val.className   = 'ta-stat-value';
      val.textContent = pair[1];

      var lbl = document.createElement('div');
      lbl.className   = 'ta-stat-label';
      lbl.textContent = pair[0];

      card.appendChild(val);
      card.appendChild(lbl);
      summary.appendChild(card);
    });

    el.appendChild(summary);

    if (hskWordCount === 0) return;

    var title = document.createElement('h3');
    title.className   = 'ta-stats-breakdown-title';
    title.textContent = 'Phân bố theo cấp HSK';
    el.appendChild(title);

    var table = document.createElement('div');
    table.className = 'ta-breakdown-table';

    for (var lv = 1; lv <= 9; lv++) {
      var cnt = levelCounts[lv];
      if (!cnt) continue;

      var row = document.createElement('div');
      row.className = 'ta-breakdown-row';

      var badge = document.createElement('span');
      badge.className   = 'ta-hsk-badge ta-hsk-badge-' + lv;
      badge.textContent = 'HSK ' + lv;

      var barWrap = document.createElement('div');
      barWrap.className = 'ta-breakdown-bar-wrap';
      var barFill = document.createElement('div');
      barFill.className   = 'ta-breakdown-bar-fill ta-hsk-bar-' + lv;
      barFill.style.width = Math.round(cnt / hskWordCount * 100) + '%';
      barWrap.appendChild(barFill);

      var num = document.createElement('span');
      num.className   = 'ta-breakdown-num';
      num.textContent = cnt + ' từ';

      row.appendChild(badge);
      row.appendChild(barWrap);
      row.appendChild(num);
      table.appendChild(row);
    }

    el.appendChild(table);
  }

  // ── Init — called by router after fragment is injected ───
  function init() {
    _buildMap();

    var btn      = document.getElementById('taAnalyzeBtn');
    var input    = document.getElementById('taInput');
    var result   = document.getElementById('taResult');
    var highlight = document.getElementById('taHighlight');
    var backdrop = document.getElementById('taPopupBackdrop');

    if (!btn || !input) return;

    // Analyze on button click
    btn.addEventListener('click', function() {
      var text = (input.value || '').trim();
      if (!text) return;

      // Track quest progress (first analysis of the day)
      if (typeof Quests !== 'undefined') Quests.incrementMetric('text_analyzed', 1);

      var tokens = _segment(text);
      result.style.display = 'block';
      _renderHighlight(tokens);
      _renderStats(tokens);
      result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    // Ctrl/Cmd+Enter shortcut
    input.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') btn.click();
    });

    // Event delegation on highlight container (bound once per init)
    highlight.addEventListener('click', function(e) {
      var t = e.target;
      if (t.classList && t.classList.contains('ta-hsk')) _showPopup(t, t.dataset.hanzi);
    });
    highlight.addEventListener('keydown', function(e) {
      var t = e.target;
      if ((e.key === 'Enter' || e.key === ' ') && t.classList && t.classList.contains('ta-hsk')) {
        e.preventDefault();
        _showPopup(t, t.dataset.hanzi);
      }
    });

    // Close popup via backdrop
    backdrop.addEventListener('click', _hidePopup);

    // TTS button
    document.getElementById('taPopupTts').addEventListener('click', function() {
      var hanzi = document.getElementById('taPopupHanzi').textContent;
      if (hanzi && typeof Dictionary !== 'undefined') Dictionary.playTTS(hanzi);
    });

    // Add to deck button
    document.getElementById('taPopupAdd').addEventListener('click', function() {
      if (_currentWord && typeof openAddToDeckPopup === 'function') {
        _hidePopup();
        openAddToDeckPopup(_currentWord);
      } else {
        _hidePopup();
      }
    });
  }

  return { init: init };

}());
