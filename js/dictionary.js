// ═══════════════════════════════════════════════════════
// DICTIONARY.JS — Dictionary search, modal, radical browser
// • Owns: setupDictionary(), searchDict(), openModal(), closeModal(),
//         buildRadicalBrowser(), filterByRadical(), stripTones(), playTTS()
// • Reads: AppState.lang, AppState.version, RADICALS (radicals.js),
//          getAllWords() (data.js)
// • Writes: AppState.currentWord, AppState.activeRadical, AppState.hanziWriter
// ═══════════════════════════════════════════════════════

var Dictionary = {

  _setupDone: false,
  _modalEventsBound: false,
  _RECENT_KEY: 'hsk_dict_recent',

  setup: function() {
    const input = document.getElementById('dictSearch');
    if (!input) return;
    Dictionary._setupDone = true;
    Dictionary._renderRecent();
    Dictionary._populateAside();

    // Restore the previous query so leaving & returning keeps your search (P1-3).
    if (Dictionary._lastQuery && !input.value) input.value = Dictionary._lastQuery;

    // HSK 3.0 data is loaded eagerly in index.html — no lazy preload needed.

    // The router rebuilds #content on every navigation, so the input + tab nodes
    // are brand-new each visit. Bind per element (guard flag) instead of once
    // globally — otherwise the search box goes dead after leaving & returning (P1-3).
    if (!input._dictBound) {
      input._dictBound = true;
      input.addEventListener('input', function() {
        Dictionary._toggleClear(input.value);
        Dictionary.searchDict(input.value.trim());
      });
    }

    // Nút xóa (×) — hiện khi có text
    var clearBtn = document.getElementById('dictSearchClear');
    if (clearBtn && !clearBtn._dictBound) {
      clearBtn._dictBound = true;
      clearBtn.addEventListener('click', function() {
        input.value = '';
        Dictionary._toggleClear('');
        Dictionary.searchDict('');
        input.focus();
      });
    }
    Dictionary._toggleClear(input.value);

    // Autofocus khi vào trang (chỉ desktop ≥1024 để mobile không bật bàn phím)
    if (window.matchMedia('(min-width: 1024px)').matches) {
      setTimeout(function() { input.focus(); }, 60);
    }

    // Search mode tabs
    document.querySelectorAll('.stab').forEach(function(btn) {
      if (btn._dictBound) return;
      btn._dictBound = true;
      btn.addEventListener('click', function() {
        document.querySelectorAll('.stab').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        AppState.searchMode = btn.dataset.mode;
        searchMode = AppState.searchMode; // keep alias
        const radBrowser = document.getElementById('radicalBrowser');
        const searchBox  = document.querySelector('.search-box');
        if (AppState.searchMode === 'radical') {
          if (radBrowser) radBrowser.style.display = 'block';
          if (searchBox)  searchBox.style.display  = 'none';
          const dr = document.getElementById('dictResults');
          if (dr) dr.innerHTML = '<p class="hint">' +
            (AppState.lang === 'vi' ? 'Chọn bộ thủ bên trên để lọc từ...' : 'Select a radical above to filter words...') +
            '</p>';
          AppState.activeRadical = null;
          activeRadical = null;
          document.querySelectorAll('.rad-chip').forEach(function(c) { c.classList.remove('active'); });
        } else {
          if (radBrowser) radBrowser.style.display = 'none';
          if (searchBox)  searchBox.style.display  = 'block';
          Dictionary.searchDict(input.value.trim());
        }
      });
    });

    // Initial render: restored query (P1-3) or default suggestions when empty.
    Dictionary.searchDict(input.value.trim());
  },

  // Ẩn/hiện nút xóa search theo có text hay không
  _toggleClear: function(val) {
    var btn = document.getElementById('dictSearchClear');
    if (btn) btn.style.display = (val && val.length) ? 'flex' : 'none';
  },

  // ── Recent searches ────────────────────────────────
  _getRecent: function() {
    try { return JSON.parse(localStorage.getItem(Dictionary._RECENT_KEY) || '[]'); }
    catch(e) { return []; }
  },
  _saveRecent: function(list) {
    try { localStorage.setItem(Dictionary._RECENT_KEY, JSON.stringify(list)); } catch(e) {}
  },
  _addToRecent: function(query) {
    if (!query || query.length < 1) return;
    var list = Dictionary._getRecent().filter(function(q) { return q !== query; });
    list.unshift(query);
    if (list.length > 8) list = list.slice(0, 8);
    Dictionary._saveRecent(list);
    Dictionary._renderRecent();
  },
  _renderRecent: function() {
    var wrap  = document.getElementById('dictRecent');
    var chips = document.getElementById('dictRecentChips');
    var clear = document.getElementById('dictRecentClear');
    if (!wrap || !chips) return;
    var list = Dictionary._getRecent();
    if (!list.length) { wrap.style.display = 'none'; return; }
    wrap.style.display = 'flex';
    chips.innerHTML = list.map(function(q) {
      return '<button class="dict-recent-chip" data-q="' + q.replace(/"/g,'&quot;') + '">' + escapeHtml(q) + '</button>';
    }).join('');
    chips.querySelectorAll('.dict-recent-chip').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var inp = document.getElementById('dictSearch');
        if (inp) { inp.value = btn.dataset.q; Dictionary.searchDict(btn.dataset.q); }
      });
    });
    if (clear && !clear._bound) {
      clear._bound = true;
      clear.addEventListener('click', function() {
        Dictionary._saveRecent([]);
        Dictionary._renderRecent();
      });
    }
  },

  // ── Right aside ────────────────────────────────────
  _populateAside: function() {
    try {
      // Vocab count
      var countEl  = document.getElementById('dictKnownCount');
      var totalEl  = document.getElementById('dictTotalCount');
      var barEl    = document.getElementById('dictKnownBar');
      var subEl    = document.getElementById('dictKnownSub');
      if (countEl && typeof AppState !== 'undefined') {
        var known = AppState.totalLearned ? AppState.totalLearned() : 0;
        var total = typeof getAllWords === 'function' ? getAllWords().length : 0;
        var pct   = total ? Math.min(100, Math.round(known / total * 100)) : 0;
        countEl.textContent = known;
        if (totalEl) totalEl.textContent = total.toLocaleString();
        if (barEl)   barEl.style.width = pct + '%';
        if (subEl) {
          var ver = AppState.version === 3 ? 'HSK 3.0' : 'HSK 2.0';
          subEl.textContent = pct + '% tổng từ ' + ver;
        }
      }
      // Deck list
      var deckList = document.getElementById('dictDeckList');
      if (deckList && typeof AppState !== 'undefined' && AppState.userDecks) {
        var decks = AppState.userDecks || [];
        if (!decks.length) {
          deckList.innerHTML = '<div class="dac-deck-empty">Chưa có bộ thẻ nào</div>';
        } else {
          deckList.innerHTML = decks.slice(0, 5).map(function(d) {
            return '<div class="dac-deck-item">' +
              '<span class="dac-deck-name">' + (d.name || 'Bộ thẻ') + '</span>' +
              '<span class="dac-deck-count">' + (d.cards ? d.cards.length : 0) + ' từ</span>' +
            '</div>';
          }).join('');
        }
      }
    } catch(e) { /* silent */ }
  },

  _bindModalEvents: function() {
    if (Dictionary._modalEventsBound) return;
    Dictionary._modalEventsBound = true;

    document.getElementById('modalClose')?.addEventListener('click', Dictionary.closeModal);
    document.getElementById('modalOverlay')?.addEventListener('click', function(e) {
      if (e.target === e.currentTarget) Dictionary.closeModal();
    });
    document.getElementById('addToVault')?.addEventListener('click', function() {
      if (AppState.currentWord && typeof openAddToDeckPopup === 'function') {
        openAddToDeckPopup(AppState.currentWord);
      }
    });
    document.getElementById('btnAnimateStroke')?.addEventListener('click', function() {
      AppState.hanziWriter?.animateCharacter();
    });
    document.getElementById('btnPracticeStroke')?.addEventListener('click', function() {
      AppState.hanziWriter?.quiz();
    });
    document.getElementById('modalTtsBtn')?.addEventListener('click', function() {
      if (AppState.currentWord) Dictionary.playTTS(AppState.currentWord.h);
    });
  },

  // ── Search ─────────────────────────────────────────
  searchDict: function(query) {
    const res = document.getElementById('dictResults');
    if (!res) return;
    // Remember the last query so leaving & returning to the page restores it (P1-3).
    Dictionary._lastQuery = query;
    if (!query) {
      var isVi = AppState.lang === 'vi';
      var sugg = ['你好', '学习', '谢谢', '中国', '朋友', '时间'];
      var chips = sugg.map(function(s) { return '<button class="dict-sugg-chip" data-q="' + s + '">' + s + '</button>'; }).join('');
      var searchIc = (typeof Icons !== 'undefined') ? Icons.get('search', { size: 28 }) : '';
      res.innerHTML =
        '<div class="dict-empty">' +
          '<div class="dict-empty-ic">' + searchIc + '</div>' +
          '<div class="dict-empty-title">' + (isVi ? 'Tra chữ Hán, pinyin hoặc nghĩa Việt' : 'Search by hanzi, pinyin or meaning') + '</div>' +
          '<div class="dict-empty-chips">' + chips + '</div>' +
        '</div>' +
        '<p class="rad-results-label">' + (isVi ? 'Gợi ý từ vựng hôm nay' : 'Word of the day suggestions') + '</p>';
      res.querySelectorAll('.dict-sugg-chip').forEach(function(btn) {
        btn.addEventListener('click', function() {
          var inp = document.getElementById('dictSearch');
          if (inp) { inp.value = btn.dataset.q; }
          Dictionary._toggleClear(btn.dataset.q);
          Dictionary.searchDict(btn.dataset.q);
        });
      });
      var wrapper = document.createElement('div');
      Dictionary._renderWordList(shuffle(getAllWordsBothVersions()).slice(0, 20), wrapper);
      res.appendChild(wrapper);
      return;
    }
    const q        = query.toLowerCase();
    const qStripped = Dictionary.stripTones(q);
    const mode     = AppState.searchMode;
    const words    = getAllWordsBothVersions().filter(function(w) {
      if (mode === 'hanzi')   return w.h.includes(query);
      if (mode === 'pinyin')  return w.p.toLowerCase().includes(q) || Dictionary.stripTones(w.p).includes(qStripped);
      if (mode === 'meaning') return w.v.toLowerCase().includes(q) || w.e.toLowerCase().includes(q);
      return w.h.includes(query)
        || w.p.toLowerCase().includes(q)
        || Dictionary.stripTones(w.p).includes(qStripped)
        || w.v.toLowerCase().includes(q)
        || w.e.toLowerCase().includes(q);
    }).slice(0, 30);
    Dictionary._renderWordList(words, res);
  },

  // ── Render word cards ──────────────────────────────
  _renderWordList: function(words, container) {
    const lang = AppState.lang;
    if (!words.length) {
      var nrIc = (typeof Icons !== 'undefined') ? Icons.get('search', { size: 28 }) : '';
      container.innerHTML =
        '<div class="dict-empty dict-empty--noresult">' +
          '<div class="dict-empty-ic">' + nrIc + '</div>' +
          '<div class="dict-empty-title">' + (lang === 'vi' ? 'Không tìm thấy kết quả' : 'No results found') + '</div>' +
          '<div class="dict-empty-sub">' + (lang === 'vi' ? 'Thử tra theo Pinyin hoặc kiểm tra lại chính tả' : 'Try searching by Pinyin or check spelling') + '</div>' +
        '</div>';
      return;
    }
    var volIc = (typeof Icons !== 'undefined') ? Icons.get('volume', { size: 18 }) : '';
    container.innerHTML = words.map(function(w) {
      var lv = w.level || 1;
      var badge = 'HSK ' + lv;
      var meaning = (lang === 'vi' ? w.v : w.e) || '';
      var second  = (lang === 'vi' && w.e) ? ' <span class="dict-meaning-en">· ' + escapeHtml(w.e) + '</span>' : '';
      return '<div class="dict-card" data-hanzi="' + escapeHtml(w.h) + '">' +
        '<div class="dict-hanzi">' + w.h + '</div>' +
        '<div class="dict-info">' +
          '<div class="dict-info-top">' +
            '<span class="dict-pinyin">' + escapeHtml(w.p) + '</span>' +
            '<span class="dict-hsk" style="color:var(--hsk-' + lv + ');border-color:var(--hsk-' + lv + ')">' + badge + '</span>' +
          '</div>' +
          '<div class="dict-meaning">' + escapeHtml(meaning) + second + '</div>' +
        '</div>' +
        '<div class="dict-card-actions">' +
          '<button class="dict-tts" data-h="' + escapeHtml(w.h) + '" title="Phát âm" aria-label="Phát âm">' + volIc + '</button>' +
          '<button class="quick-add" data-hidx="' + escapeHtml(w.h) + '" title="' + (lang === 'vi' ? 'Thêm vào bộ thẻ' : 'Add to deck') + '" aria-label="Thêm vào bộ thẻ">+</button>' +
        '</div>' +
      '</div>';
    }).join('');
    container.querySelectorAll('.dict-card').forEach(function(card, i) {
      card.addEventListener('click', function(e) {
        if (e.target.closest('.quick-add') || e.target.closest('.dict-tts')) return;
        Dictionary.showDetail(words[i]);
      });
    });
    container.querySelectorAll('.dict-tts').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        Dictionary.playTTS(btn.dataset.h);
      });
    });
    container.querySelectorAll('.quick-add').forEach(function(btn, i) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (typeof openAddToDeckPopup === 'function') openAddToDeckPopup(words[i]);
      });
    });
  },

  _isDesktop: function() {
    return window.matchMedia('(min-width: 1024px)').matches;
  },

  // ── Detail dock (desktop) — panel chi tiết RỘNG, dock phải, không đè sidebar/search.
  //    Use-case (b): click 1 từ TRONG trang Từ điển. Hover-lookup (a) vẫn là LookupPanel nổi.
  showDetail: function(word) {
    if (!word) return;
    // Mobile (<1024px): không có cột phải → dùng lại modal toàn màn hình.
    if (!Dictionary._isDesktop()) { Dictionary.openModal(word); return; }
    var panel = document.getElementById('dictDetail');
    var aside = document.getElementById('dictAside');
    if (!panel) { Dictionary.openModal(word); return; }
    // Quota tra cứu: free 50/ngày, Pro 200/ngày. Vượt → gate Pro, không mở.
    if (typeof Monetization !== 'undefined' && Monetization.checkDailyQuota &&
        !Monetization.checkDailyQuota('dict_lookup', 50, 200, 'Tra từ điển')) {
      return;
    }
    Dictionary._addToRecent(word.h);
    AppState.currentWord = word;
    currentWord = word; // compat alias
    panel.innerHTML = Dictionary._detailHTML(word);
    panel.hidden = false;
    if (aside) aside.classList.add('has-detail');
    Dictionary._bindDetail(word);
    setTimeout(function() { Dictionary.playTTS(word.h); }, 150);
  },

  hideDetail: function() {
    var panel = document.getElementById('dictDetail');
    var aside = document.getElementById('dictAside');
    if (panel) { panel.hidden = true; panel.innerHTML = ''; }
    if (aside) aside.classList.remove('has-detail');
    AppState.currentWord = null;
    currentWord = null;
  },

  _detailHTML: function(word) {
    var esc = function(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function(c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); };
    var ver   = word.ver || AppState.version || 3;
    var badge = 'HSK ' + (ver === 3 ? '3.0 L' : '2.0 L') + word.level;
    var ex    = word.ex;
    var exHtml = '';
    var ic = function(name, size) { return (typeof Icons !== 'undefined') ? Icons.get(name, { size: size || 16 }) : ''; };
    if (ex) {
      exHtml =
        '<div class="dd-section-title">Ví dụ câu</div>' +
        '<div class="dd-example">' +
          '<button class="dd-ex-tts" data-dd-tts="' + esc(ex.zh || word.h) + '" title="Nghe câu" aria-label="Nghe câu">' + ic('volume', 16) + '</button>' +
          '<p class="dd-ex-zh">' + esc(ex.zh) + '</p>' +
          (ex.py ? '<p class="dd-ex-py">' + esc(ex.py) + '</p>' : '') +
          (ex.vi ? '<p class="dd-ex-vi">' + esc(ex.vi) + '</p>' : '') +
          (ex.en ? '<p class="dd-ex-en">' + esc(ex.en) + '</p>' : '') +
        '</div>';
    }
    return '' +
      '<div class="dd-head">' +
        '<span class="dd-badge" style="color:var(--hsk-' + (word.level || 1) + ');border-color:var(--hsk-' + (word.level || 1) + ')">' + esc(badge) + '</span>' +
        '<button class="dd-close" data-dd-close aria-label="Đóng">' + ic('x', 16) + '</button>' +
      '</div>' +
      '<div class="dd-hero">' +
        '<div class="dd-hanzi">' + esc(word.h) + '</div>' +
        '<div class="dd-pinyin">' + esc(word.p) + '</div>' +
        '<button class="dd-tts" data-dd-tts="' + esc(word.h) + '">' + ic('volume', 16) + ' Nghe phát âm</button>' +
      '</div>' +
      '<div class="dd-meanings">' +
        '<div class="dd-meaning-row"><span class="dd-lang dd-lang-vi">VI</span><strong>' + esc(word.v || '—') + '</strong></div>' +
        '<div class="dd-meaning-row"><span class="dd-lang dd-lang-en">EN</span><span>' + esc(word.e || '—') + '</span></div>' +
      '</div>' +
      exHtml +
      '<div class="dd-foot">' +
        '<button class="dd-btn dd-btn-primary" data-dd-add>' + ic('plus', 16) + ' Thêm vào bộ thẻ</button>' +
        '<button class="dd-btn dd-btn-ghost" data-dd-more>' + ic('edit-3', 16) + ' Nét chữ &amp; chi tiết</button>' +
      '</div>';
  },

  _bindDetail: function(word) {
    var panel = document.getElementById('dictDetail');
    if (!panel) return;
    var closeBtn = panel.querySelector('[data-dd-close]');
    if (closeBtn) closeBtn.addEventListener('click', Dictionary.hideDetail);
    panel.querySelectorAll('[data-dd-tts]').forEach(function(btn) {
      btn.addEventListener('click', function() { Dictionary.playTTS(btn.getAttribute('data-dd-tts') || word.h); });
    });
    var addBtn = panel.querySelector('[data-dd-add]');
    if (addBtn) addBtn.addEventListener('click', function() {
      if (typeof openAddToDeckPopup === 'function') openAddToDeckPopup(word);
    });
    var moreBtn = panel.querySelector('[data-dd-more]');
    // "Nét chữ & chi tiết" mở modal đầy đủ (HanziWriter) — không tính quota lần 2.
    if (moreBtn) moreBtn.addEventListener('click', function() { Dictionary.openModal(word, true); });
  },

  // ── Modal ──────────────────────────────────────────
  openModal: function(word, skipQuota) {
    // Quota tra cứu: free 50/ngày, Pro 200/ngày (matrix). Vượt → gate Pro.
    if (!skipQuota && typeof Monetization !== 'undefined' && Monetization.checkDailyQuota &&
        !Monetization.checkDailyQuota('dict_lookup', 50, 200, 'Tra từ điển')) {
      return;
    }
    Dictionary._bindModalEvents();
    // Track this word in recent searches
    Dictionary._addToRecent(word.h);
    AppState.currentWord = word;
    currentWord = word; // compat alias
    document.getElementById('modalHanzi').textContent = word.h;
    document.getElementById('modalPinyin').textContent = word.p;
    var wVer = word.ver || AppState.version;
    var alsoStr = word._alsoIn ? ' · HSK ' + (word._alsoIn.ver === 3 ? '3.0' : '2.0') + ' L' + word._alsoIn.level : '';
    document.getElementById('modalLevel').innerHTML =
      '<span>HSK ' + (wVer === 3 ? '3.0' : '2.0') + ' L' + word.level + alsoStr + '</span>';
    document.getElementById('modalVi').textContent = word.v;
    document.getElementById('modalEn').textContent = word.e;

    // Ô "Ví dụ" LUÔN hiển thị (giữ modal cân đối). Chưa có ex → empty-state nhẹ nhàng.
    const exBox = document.getElementById('modalExample');
    const exCard = exBox.querySelector('.wd-example-card');
    exBox.style.display = 'block';
    if (word.ex) {
      if (exCard) exCard.classList.remove('wd-example-card--empty');
      document.getElementById('exZh').textContent = word.ex.zh;
      document.getElementById('exPy').textContent = word.ex.py;
      document.getElementById('exVi').textContent = word.ex.vi;
      document.getElementById('exEn').textContent = word.ex.en;
    } else {
      if (exCard) exCard.classList.add('wd-example-card--empty');
      document.getElementById('exZh').textContent = 'Ví dụ đang được bổ sung ✍️';
      document.getElementById('exPy').textContent = '';
      document.getElementById('exVi').textContent = '';
      document.getElementById('exEn').textContent = '';
    }
    document.getElementById('addToVault').textContent = '➕ Thêm vào bộ thẻ';
    document.getElementById('modalOverlay').classList.add('open');

    setTimeout(function() { Dictionary.playTTS(word.h); }, 300);

    // HanziWriter stroke (first char only)
    const strokeContainer = document.getElementById('modalStrokeContainer');
    if (strokeContainer && typeof HanziWriter !== 'undefined') {
      strokeContainer.style.display = 'block';
      strokeContainer.innerHTML = '<div id="hanziWriterTarget" style="margin:0 auto"></div>';
      try {
        AppState.hanziWriter = HanziWriter.create('hanziWriterTarget', word.h[0], {
          width: 120, height: 120, padding: 8,
          strokeColor: '#E8352A',
          outlineColor: 'rgba(255,255,255,0.15)',
          radicalColor: '#F5A623',
          delayBetweenStrokes: 200,
          strokeAnimationSpeed: 1.2,
          charDataLoader: function(char, onComplete) {
            fetch('https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/' + encodeURIComponent(char) + '.json')
              .then(function(res) { return res.json(); })
              .then(onComplete);
          }
        });
        hanziWriter = AppState.hanziWriter; // compat alias
        AppState.hanziWriter.animateCharacter();
      } catch(e) { strokeContainer.style.display = 'none'; }
    } else if (strokeContainer) {
      strokeContainer.style.display = 'none';
    }
  },

  closeModal: function() {
    document.getElementById('modalOverlay').classList.remove('open');
    AppState.currentWord = null;
    currentWord = null; // compat alias
  },

  // ── Radical Browser ────────────────────────────────
  buildRadicalBrowser: function() {
    if (typeof RADICALS === 'undefined') return;
    const grid = document.getElementById('radGrid');
    if (!grid) return;
    const lang = AppState.lang;
    grid.innerHTML = RADICALS.map(function(rad, i) {
      return '<div class="rad-chip" data-idx="' + i + '">' +
        '<span class="rc-char">' + rad.r + '</span>' +
        '<span class="rc-info">' + (lang === 'vi' ? rad.vi : rad.en) + '</span>' +
      '</div>';
    }).join('');
    grid.querySelectorAll('.rad-chip').forEach(function(chip, i) {
      chip.addEventListener('click', function() {
        if (AppState.activeRadical === i) {
          AppState.activeRadical = null;
          activeRadical = null;
          chip.classList.remove('active');
          document.getElementById('dictResults').innerHTML =
            '<p class="hint">' + (AppState.lang === 'vi' ? 'Nhập từ để tìm kiếm...' : 'Type to search...') + '</p>';
        } else {
          document.querySelectorAll('.rad-chip').forEach(function(c) { c.classList.remove('active'); });
          chip.classList.add('active');
          AppState.activeRadical = i;
          activeRadical = i;
          Dictionary.filterByRadical(RADICALS[i]);
        }
      });
    });
  },

  filterByRadical: function(rad) {
    const res      = document.getElementById('dictResults');
    const allWords = getAllWords();
    const lang     = AppState.lang;
    const matches  = allWords.filter(function(w) {
      return rad.chars.some(function(c) { return w.h.includes(c.charAt(0)); }) || w.h.includes(rad.r);
    }).slice(0, 25);
    if (!matches.length) {
      res.innerHTML = '<p class="hint">' + (lang === 'vi' ? 'Không tìm thấy từ với bộ thủ này' : 'No words found for this radical') + '</p>';
      return;
    }
    const label = document.createElement('p');
    label.className = 'rad-results-label';
    label.textContent = (lang === 'vi' ? 'Bộ thủ ' + rad.r + ' (' + rad.vi + ') — ' : 'Radical ' + rad.r + ' (' + rad.en + ') — ') + matches.length + ' từ';
    res.innerHTML = '';
    res.appendChild(label);
    const wrapper = document.createElement('div');
    Dictionary._renderWordList(matches, wrapper);
    res.appendChild(wrapper);
  },

  // ── Utilities ──────────────────────────────────────
  stripTones: function(str) {
    return str.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[1-5]/g, '')
      .replace(/\s+/g, '')
      .toLowerCase();
  },

  _zhVoice:    null,
  _ttsTimeout: null,
  _voicesWired: false,

  // Reset cache khi trình duyệt cập nhật danh sách voice (Chrome async)
  _wireVoicesChanged: function() {
    if (Dictionary._voicesWired) return;
    Dictionary._voicesWired = true;
    if (window.speechSynthesis) {
      window.speechSynthesis.addEventListener('voiceschanged', function() {
        Dictionary._zhVoice = null; // buộc re-pick lần sau
      });
    }
  },

  _pickZhVoice: function() {
    Dictionary._wireVoicesChanged();
    if (Dictionary._zhVoice) return Dictionary._zhVoice;
    var voices = window.speechSynthesis.getVoices();
    var found =
      voices.find(function(v) { return v.lang === 'zh-CN'; }) ||
      voices.find(function(v) { return v.lang === 'zh-TW'; }) ||
      voices.find(function(v) { return v.lang.startsWith('zh'); }) ||
      null;
    if (found) {
      Dictionary._zhVoice = found; // chỉ cache khi tìm thấy
    } else if (voices.length > 0) {
      console.warn('[TTS] Không tìm thấy giọng tiếng Trung. Voices:', voices.map(function(v) { return v.lang; }).join(', '));
    }
    return found;
  },

  playTTS: function(text) {
    // Audio-first (R2 mp3 pre-gen) → fallback Web Speech, qua TTSAudio.
    if (typeof TTSAudio !== 'undefined') { TTSAudio.speak(text, { rate: 0.9 }); return; }
    // Fallback nếu tts-audio.js chưa load: Web Speech thuần (hành vi cũ).
    if (typeof appSettings !== 'undefined' && appSettings.autoTTS === false) return;
    var synth = window.speechSynthesis;
    if (!synth) return;

    function doSpeak() {
      // Chrome bug: synth silently fails after long idle — resume first
      if (synth.paused) synth.resume();
      var msg  = new SpeechSynthesisUtterance(text);
      msg.lang = 'zh-CN';
      msg.rate = 0.9;
      var voice = Dictionary._pickZhVoice();
      if (voice) msg.voice = voice;
      synth.cancel();
      // Delay after cancel prevents Chrome from silently dropping the utterance
      clearTimeout(Dictionary._ttsTimeout);
      Dictionary._ttsTimeout = setTimeout(function() { synth.speak(msg); }, 50);
    }

    var voices = synth.getVoices();
    if (voices.length > 0) {
      doSpeak();
    } else {
      // Chrome loads voices asynchronously on first page load
      synth.addEventListener('voiceschanged', doSpeak, { once: true });
    }
  },
};

// ── Backward-compat global functions ──────────────────
function setupDictionary()           { Dictionary.setup(); }
function searchDict(query)           { Dictionary.searchDict(query); }
function openModal(word)             { Dictionary.openModal(word); }
function closeModal()                { Dictionary.closeModal(); }
function buildRadicalBrowser()       { Dictionary.buildRadicalBrowser(); }
function filterByRadical(rad)        { Dictionary.filterByRadical(rad); }
function stripTones(str)             { return Dictionary.stripTones(str); }
function playTTS(text)               { Dictionary.playTTS(text); }
function renderWordList(words, el)   { Dictionary._renderWordList(words, el); }
