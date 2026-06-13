var LookupPanel = {
  el: null,
  hoverTimer: null,
  currentWord: null,
  currentQuery: '',
  pinned: false,
  activeToken: null,
  recentKey: 'hsk_lookup_recent',

  init: function() {
    this.el = document.getElementById('lookupPanel');
    if (!this.el || this.el._lpBound) return;
    this.el._lpBound = true;
    this.el.innerHTML = this._idleHTML();

    document.addEventListener('mousemove', this._onMove.bind(this));
    document.addEventListener('mouseover', this._onOver.bind(this));
    document.addEventListener('mouseout', this._onOut.bind(this));
    document.addEventListener('click', this._onClick.bind(this), true);
    document.addEventListener('keydown', this._onKey.bind(this));
    window.addEventListener('resize', this._onResize.bind(this));
  },

  // open(query, x, y, opts) — opts.word: pre-resolved word object (e.g. reader curated
  // gloss) to render instead of dictionary lookup; opts.token: element to mark active.
  open: function(character, x, y, opts) {
    opts = opts || {};
    var query = (character || '').trim();
    if (!query && !opts.word) return;
    var word = opts.word ? this._enrichWord(opts.word, query) : this._findWord(query);
    this.currentWord = word;
    this.currentQuery = query || (word && word.h) || '';
    this.el.innerHTML = word ? this._wordHTML(word) : this._missingHTML(this.currentQuery);
    this.el.classList.remove('hidden');
    this.el.classList.toggle('pinned', this.pinned);
    this.el.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lp-panel-open');
    if (opts.token) this._setActiveToken(opts.token, this.pinned);
    this._position(x, y);
    this._bindPanelActions();
    if (word) this._saveRecent(word);
  },

  // Merge a caller-supplied word (curated p/v) with dictionary extras (e/level/ex)
  // without overriding the curated fields. Lets reader keep its in-context gloss.
  _enrichWord: function(w, query) {
    var dict = this._findWord(w.h || query);
    if (!dict) return w;
    return {
      h: w.h || dict.h, p: w.p || dict.p, v: w.v || dict.v,
      e: w.e || dict.e, level: w.level || dict.level, ex: w.ex || dict.ex,
      ver: dict.ver
    };
  },

  close: function() {
    clearTimeout(this.hoverTimer);
    this.pinned = false;
    this.currentWord = null;
    this.currentQuery = '';
    if (this.activeToken) this.activeToken.classList.remove('lp-token-active', 'lp-token-pinned');
    this.activeToken = null;
    if (this.el) {
      this.el.classList.add('hidden');
      this.el.classList.remove('pinned');
      this.el.setAttribute('aria-hidden', 'true');
    }
    document.body.classList.remove('lp-panel-open');
  },

  pin: function() {
    this.pinned = true;
    if (this.el) this.el.classList.add('pinned');
    if (this.activeToken) this.activeToken.classList.add('lp-token-pinned');
    this._refreshPinState();
  },

  unpin: function() {
    this.pinned = false;
    if (this.el) this.el.classList.remove('pinned');
    if (this.activeToken) this.activeToken.classList.remove('lp-token-pinned');
    this._refreshPinState();
  },

  _onMove: function(e) {
    if (!this._isDesktop() || this.pinned || this._ignoreTarget(e.target)) return;
    var hit = this._lookupFromEvent(e);
    if (!hit || !hit.query || hit.query === this.currentQuery) return;
    this._schedule(hit.query, e.clientX, e.clientY, hit.token);
  },

  _onOver: function(e) {
    if (!this._isDesktop() || this.pinned || this._ignoreTarget(e.target)) return;
    var hit = this._lookupFromEvent(e);
    if (!hit || !hit.query) return;
    this._schedule(hit.query, e.clientX, e.clientY, hit.token);
  },

  _onOut: function(e) {
    if (this.pinned) return;
    if (!e.relatedTarget || !this.el || (!this.el.contains(e.relatedTarget) && !this._isInsideLookup(e.relatedTarget))) {
      clearTimeout(this.hoverTimer);
      if (this.activeToken) this.activeToken.classList.remove('lp-token-active');
    }
  },

  _onClick: function(e) {
    if (this.el && this.el.contains(e.target)) return;
    if (this._ignoreTarget(e.target)) {
      // Tap outside any lookup token while panel is open (mobile/pinned) → close.
      if (this.el && !this.el.classList.contains('hidden')) this.close();
      return;
    }
    var hit = this._lookupFromEvent(e);
    if (!hit || !hit.query) {
      if (this.el && !this.el.classList.contains('hidden')) this.close();
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    this._setActiveToken(hit.token, true);
    this.pinned = true;
    this.open(hit.query, e.clientX, e.clientY);
  },

  _onKey: function(e) {
    if (e.key === 'Escape' && this.el && !this.el.classList.contains('hidden')) this.close();
  },

  _onResize: function() {
    // Breakpoint may flip floating ↔ bottom-sheet; close to avoid stale positioning.
    if (this.el && !this.el.classList.contains('hidden')) this.close();
  },

  _schedule: function(query, x, y, token) {
    clearTimeout(this.hoverTimer);
    this._setActiveToken(token, false);
    this.hoverTimer = setTimeout(function() {
      if (!LookupPanel.pinned) LookupPanel.open(query, x, y);
    }, 200);
  },

  _lookupFromEvent: function(e) {
    var target = e.target;
    var direct = target.closest && target.closest('.clickable-hanzi, [data-char], [data-hanzi]');
    if (direct) {
      return { query: direct.dataset.char || direct.dataset.hanzi || direct.textContent.trim(), token: direct };
    }
    var ruby = target.closest && target.closest('ruby');
    if (ruby) {
      var ch = ruby.childNodes && ruby.childNodes[0] ? ruby.childNodes[0].textContent : ruby.textContent;
      return { query: this._firstHanzi(ch), token: ruby };
    }
    var root = target.closest && target.closest('[data-lookup="true"], .hanzi-text');
    if (!root) return null;
    // Free-flowing text → segment at the caret with longest dictionary match
    // (e.g. 高兴 over 高), falling back to the single tapped character.
    var query = this._segmentAtPoint(e.clientX, e.clientY) || this._firstHanzi(target.textContent || root.textContent);
    return { query: query, token: target.closest('span, ruby, p, div') || root };
  },

  _isInsideLookup: function(target) {
    return !!(target && target.closest && target.closest('[data-lookup="true"], .hanzi-text, .clickable-hanzi, [data-char], [data-hanzi], ruby'));
  },

  _ignoreTarget: function(target) {
    // #page-dictionary có panel chi tiết RỘNG riêng (Dictionary.showDetail) → để Từ điển
    // tự xử lý click/hover, không bật floating hover panel (vốn chỉ dành cho đọc nội dung).
    return !!(target && target.closest && target.closest('button, a, input, textarea, select, [contenteditable="true"], .lp-panel, #page-dictionary'));
  },

  _isHan: function(ch) {
    return /[一-鿿㐀-䶿]/.test(ch || '');
  },

  // Resolve the text node + offset under a viewport point (cross-browser caret API).
  _textAndOffsetAtPoint: function(x, y) {
    var node = null, offset = 0;
    if (document.caretPositionFromPoint) {
      var pos = document.caretPositionFromPoint(x, y);
      if (pos && pos.offsetNode) { node = pos.offsetNode; offset = pos.offset; }
    } else if (document.caretRangeFromPoint) {
      var range = document.caretRangeFromPoint(x, y);
      if (range) { node = range.startContainer; offset = range.startOffset; }
    }
    if (!node) return null;
    return { text: node.textContent || '', offset: offset };
  },

  // Snap to nearest Han char at the caret, then longest-match forward against the
  // dictionary (up to 4 chars) so taps on compounds resolve the whole word.
  _segmentAtPoint: function(x, y) {
    var info = this._textAndOffsetAtPoint(x, y);
    if (!info) return '';
    var text = info.text;
    var offset = Math.max(0, Math.min(info.offset, text.length - 1));
    var start = -1;
    for (var i = offset; i >= 0 && i >= offset - 2; i--) {
      if (this._isHan(text.charAt(i))) { start = i; break; }
    }
    if (start < 0) {
      for (var j = offset + 1; j < text.length && j <= offset + 2; j++) {
        if (this._isHan(text.charAt(j))) { start = j; break; }
      }
    }
    if (start < 0) return '';
    var win = '';
    for (var k = start; k < text.length && win.length < 4; k++) {
      if (this._isHan(text.charAt(k))) win += text.charAt(k); else break;
    }
    var set = this._wordSet();
    for (var len = win.length; len >= 2; len--) {
      if (set[win.substr(0, len)]) return win.substr(0, len);
    }
    return win.charAt(0);
  },

  // Lazy-built headword index { hanzi: true } for longest-match. Rebuilt if the
  // vocab dataset grows (lazy route loading adds words after first build).
  _wordSet: function() {
    if (typeof getAllWordsBothVersions !== 'function') return {};
    var words = getAllWordsBothVersions();
    if (!this._wsCache || this._wsCount !== words.length) {
      var set = {};
      for (var i = 0; i < words.length; i++) { if (words[i].h) set[words[i].h] = true; }
      this._wsCache = set;
      this._wsCount = words.length;
    }
    return this._wsCache;
  },

  _firstHanzi: function(text) {
    var match = (text || '').match(/[一-鿿]+/);
    return match ? match[0].charAt(0) : '';
  },

  _findWord: function(query) {
    if (typeof getAllWordsBothVersions !== 'function') return null;
    var words = getAllWordsBothVersions();
    var exact = words.filter(function(w) { return w.h === query; });
    if (exact.length) return exact[0];
    if (query.length === 1) {
      var contains = words.filter(function(w) { return w.h && w.h.indexOf(query) !== -1; });
      contains.sort(function(a, b) { return a.h.length - b.h.length; });
      return contains[0] || null;
    }
    return null;
  },

  _position: function(x, y) {
    // Mobile/tablet → bottom-sheet (CSS-positioned). Clear inline coords so the
    // stylesheet's left/right/bottom take over.
    if (!this._isDesktop()) {
      this.el.classList.add('lp-panel--sheet');
      this.el.style.left = '';
      this.el.style.top = '';
      return;
    }
    this.el.classList.remove('lp-panel--sheet');
    var width = 280;
    var gap = 14;
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var sidebar = document.getElementById('sidebar');
    var minLeft = 12;
    if (sidebar && getComputedStyle(sidebar).display !== 'none') {
      minLeft = Math.ceil(sidebar.getBoundingClientRect().right + 12);
    }
    var left = x + gap;
    if (left + width + 12 > vw) left = x - width - gap;
    left = Math.max(minLeft, Math.min(left, vw - width - 12));
    var top = Math.max(12, Math.min((y || 72) - 24, vh - Math.min(400, this.el.offsetHeight || 400) - 12));
    this.el.style.left = left + 'px';
    this.el.style.top = top + 'px';
  },

  _setActiveToken: function(token, pinned) {
    if (this.activeToken && this.activeToken !== token) this.activeToken.classList.remove('lp-token-active', 'lp-token-pinned');
    this.activeToken = token || null;
    if (this.activeToken) {
      this.activeToken.classList.add('lp-token-active');
      this.activeToken.classList.toggle('lp-token-pinned', !!pinned);
    }
  },

  _bindPanelActions: function() {
    var closeBtn = this.el.querySelector('[data-lp-close]');
    var pinBtn = this.el.querySelector('[data-lp-pin]');
    var ttsBtns = this.el.querySelectorAll('[data-lp-tts]');
    var srsBtn = this.el.querySelector('[data-lp-srs]');
    var deckBtn = this.el.querySelector('[data-lp-deck]');
    var dictBtn = this.el.querySelector('[data-lp-dict]');
    var recentBtns = this.el.querySelectorAll('[data-lp-recent]');
    if (closeBtn) closeBtn.addEventListener('click', this.close.bind(this));
    if (pinBtn) pinBtn.addEventListener('click', function() { LookupPanel.pinned ? LookupPanel.unpin() : LookupPanel.pin(); });
    ttsBtns.forEach(function(btn) {
      btn.addEventListener('click', function() { LookupPanel._speak(btn.dataset.lpTts || (LookupPanel.currentWord && LookupPanel.currentWord.h)); });
    });
    if (srsBtn) srsBtn.addEventListener('click', function() { LookupPanel._addToSRS(); });
    if (deckBtn) deckBtn.addEventListener('click', function() { LookupPanel._addToDeck(); });
    if (dictBtn) dictBtn.addEventListener('click', function() {
      if (typeof Router !== 'undefined' && Router.navigateTo) Router.navigateTo('dictionary');
      LookupPanel.close();
    });
    recentBtns.forEach(function(btn) {
      btn.addEventListener('click', function() { LookupPanel.open(btn.dataset.lpRecent, window.innerWidth - 320, 96); });
    });
    this._refreshPinState();
  },

  _refreshPinState: function() {
    if (!this.el) return;
    var badge = this.el.querySelector('.lp-badge');
    var pinBtn = this.el.querySelector('[data-lp-pin]');
    if (badge && this.currentWord) {
      var lv = this.currentWord.level ? ('HSK ' + (this.currentWord.ver === 3 ? '3.0 ' : '') + this.currentWord.level) : 'TỪ VỰNG';
      badge.textContent = this.pinned ? 'PINNED' : lv;
    }
    if (pinBtn) {
      pinBtn.classList.toggle('active', this.pinned);
      pinBtn.setAttribute('aria-pressed', this.pinned ? 'true' : 'false');
      pinBtn.title = this.pinned ? 'Bỏ ghim' : 'Giữ từ này hiển thị, không đổi khi hover chữ khác';
    }
  },

  _speak: function(text) {
    if (!text) return;
    if (typeof Dictionary !== 'undefined' && Dictionary.playTTS) Dictionary.playTTS(text);
    else if (window.speechSynthesis) {
      var msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'zh-CN';
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(msg);
    }
  },

  _addToSRS: function() {
    var word = this.currentWord;
    if (!word) return;
    if (typeof SRS !== 'undefined' && SRS.addWord) {
      SRS.addWord(word);
    } else if (typeof srsData !== 'undefined') {
      var today = new Date().toISOString().split('T')[0];
      if (!srsData[word.h]) srsData[word.h] = { interval: 0, ease: 2.5, dueDate: today, reps: 0, lapses: 0, lastReview: null };
      if (typeof saveSRS === 'function') saveSRS();
      if (typeof AppState !== 'undefined' && AppState.markLearned) AppState.markLearned(word);
    }
    if (typeof showToast === 'function') showToast('Đã lưu ' + word.h + ' vào Kho từ');
  },

  // TID-2 — pick a deck (hsk_decks_v3) via the shared add-to-deck picker.
  _addToDeck: function() {
    var word = this.currentWord;
    if (!word) return;
    var payload = { h: word.h, p: word.p || '', v: word.v || '', e: word.e || '', level: word.level || 0 };
    this.close();
    if (typeof openAddToDeckForWord === 'function') openAddToDeckForWord(payload);
    else if (typeof showToast === 'function') showToast('Chưa sẵn sàng — thử lại sau');
  },

  _saveRecent: function(word) {
    var list = this._getRecent().filter(function(w) { return w.h !== word.h; });
    list.unshift({ h: word.h, p: word.p, v: word.v, e: word.e, level: word.level, ver: word.ver || 2 });
    try { localStorage.setItem(this.recentKey, JSON.stringify(list.slice(0, 5))); } catch(e) {}
  },

  _getRecent: function() {
    try { return JSON.parse(localStorage.getItem(this.recentKey) || '[]'); }
    catch(e) { return []; }
  },

  _idleHTML: function() {
    var recent = this._getRecent();
    var recentHtml = recent.length ? recent.map(function(w) {
      return '<button class="lp-recent-item" data-lp-recent="' + LookupPanel._escapeAttr(w.h) + '">' +
        '<span class="lp-recent-h">' + LookupPanel._escapeHTML(w.h) + '</span>' +
        '<span class="lp-recent-meta">' + LookupPanel._escapeHTML(w.p || '') + ' · ' + LookupPanel._escapeHTML(w.v || '') + '</span>' +
      '</button>';
    }).join('') : '<p class="lp-empty-note">Chưa có từ nào.</p>';
    return '<div class="lp-header"><span class="lp-badge">Lookup</span><button class="lp-icon-btn" data-lp-close aria-label="Đóng">✕</button></div>' +
      '<div class="lp-idle"><img src="assets/icon-soft.webp" alt="" width="72" height="72"><p>Bạn ơi, hover vào chữ Hán bên trái để tra nhé!</p></div>' +
      '<div class="lp-section-title">Gần đây tra</div><div class="lp-recent-list">' + recentHtml + '</div>' +
      '<button class="lp-link-btn" data-lp-dict>🔗 Mở Từ điển đầy đủ</button>';
  },

  _wordHTML: function(word) {
    var ex = word.ex || {};
    var level = word.level ? ('HSK ' + (word.ver === 3 ? '3.0 L' : '') + word.level) : 'TỪ VỰNG';
    var learned = typeof getSRSCard === 'function' && getSRSCard(word.h);
    var srsText = learned ? 'Đã học' : 'Từ mới';
    return '<div class="lp-header">' +
      '<span class="lp-badge">' + level + '</span>' +
      '<div class="lp-actions"><button class="lp-icon-btn" data-lp-pin aria-label="Ghim">📌</button><button class="lp-icon-btn" data-lp-close aria-label="Đóng">✕</button></div>' +
    '</div>' +
    '<div class="lp-hero"><div class="lp-hanzi">' + this._escapeHTML(word.h) + '</div><div class="lp-pinyin">' + this._escapeHTML(word.p || '') + '</div><button class="lp-tts" data-lp-tts="' + this._escapeAttr(word.h) + '">🔊 Phát âm</button></div>' +
    '<div class="lp-meaning-card"><div><span class="lp-flag">VI</span><strong>' + this._escapeHTML(word.v || '—') + '</strong></div><div><span class="lp-flag lp-flag-en">EN</span><span>' + this._escapeHTML(word.e || '—') + '</span></div></div>' +
    '<div class="lp-meta-strip"><span>📊 ★★★★☆</span><span>📚 ' + level + '</span><span class="lp-srs-badge">' + srsText + '</span></div>' +
    '<div class="lp-section-title">Ví dụ</div>' +
    '<div class="lp-example"><button class="lp-mini-tts" data-lp-tts="' + this._escapeAttr(ex.zh || word.h) + '">🔊</button><p class="lp-ex-zh">' + this._escapeHTML(ex.zh || 'Chưa có ví dụ.') + '</p>' +
    (ex.py ? '<p class="lp-ex-py">' + this._escapeHTML(ex.py) + '</p>' : '') +
    (ex.vi ? '<p class="lp-ex-vi">' + this._escapeHTML(ex.vi) + '</p>' : '') + '</div>' +
    '<div class="lp-footer"><button class="lp-primary" data-lp-srs>💾 Lưu nhanh</button><button class="lp-secondary" data-lp-deck>📁 Bộ thẻ</button></div>' +
    '<button class="lp-link-btn" data-lp-dict>🔗 Mở Từ điển đầy đủ</button>';
  },

  _missingHTML: function(query) {
    return '<div class="lp-header"><span class="lp-badge">Lookup</span><button class="lp-icon-btn" data-lp-close aria-label="Đóng">✕</button></div>' +
      '<div class="lp-missing"><div class="lp-missing-char">' + this._escapeHTML(query) + '</div><h3>Không tìm thấy</h3><p>Chưa có từ này trong từ điển.</p><button class="lp-link-btn" data-lp-dict>🔗 Mở Từ điển đầy đủ</button></div>';
  },

  _isDesktop: function() {
    return window.matchMedia('(min-width: 1024px)').matches;
  },

  _escapeHTML: function(str) {
    return String(str || '').replace(/[&<>"]/g, function(c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; });
  },

  _escapeAttr: function(str) {
    return this._escapeHTML(str).replace(/'/g, '&#39;');
  }
};
