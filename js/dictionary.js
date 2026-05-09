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

  setup: function() {
    const input = document.getElementById('dictSearch');
    if (!input) return;
    if (Dictionary._setupDone) {
      // Already wired — just refresh results
      Dictionary.searchDict(input.value.trim());
      return;
    }
    Dictionary._setupDone = true;

    // Search input
    input.addEventListener('input', function() {
      Dictionary.searchDict(input.value.trim());
    });

    // Search mode tabs
    document.querySelectorAll('.stab').forEach(function(btn) {
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

    // Default search on startup
    Dictionary.searchDict('');
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
    if (!query) {
      const label = document.createElement('p');
      label.className = 'rad-results-label';
      label.textContent = AppState.lang === 'vi' ? 'Gợi ý từ vựng hôm nay' : 'Word of the day suggestions';
      res.innerHTML = '';
      res.appendChild(label);
      const wrapper = document.createElement('div');
      Dictionary._renderWordList(shuffle(getAllWords()).slice(0, 20), wrapper);
      res.appendChild(wrapper);
      return;
    }
    const q        = query.toLowerCase();
    const qStripped = Dictionary.stripTones(q);
    const mode     = AppState.searchMode;
    const words    = getAllWords().filter(function(w) {
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
      container.innerHTML = '<p class="hint">' + (lang === 'vi' ? 'Không tìm thấy kết quả' : 'No results found') + '</p>';
      return;
    }
    container.innerHTML = words.map(function(w) {
      return '<div class="dict-card" data-hanzi="' + w.h + '">' +
        '<div class="dict-hanzi">' + w.h + '</div>' +
        '<div class="dict-info">' +
          '<div class="dict-pinyin">' + w.p + '</div>' +
          '<div class="dict-meaning">' + (lang === 'vi' ? w.v : w.e) + '</div>' +
        '</div>' +
        '<div class="dict-hsk">HSK ' + w.level + '</div>' +
        '<button class="quick-add" data-hidx="' + w.h + '" title="' + (lang === 'vi' ? 'Thêm vào bộ thẻ' : 'Add to deck') + '">+</button>' +
      '</div>';
    }).join('');
    container.querySelectorAll('.dict-card').forEach(function(card, i) {
      card.addEventListener('click', function(e) {
        if (!e.target.classList.contains('quick-add')) Dictionary.openModal(words[i]);
      });
    });
    container.querySelectorAll('.quick-add').forEach(function(btn, i) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (typeof openAddToDeckPopup === 'function') openAddToDeckPopup(words[i]);
      });
    });
  },

  // ── Modal ──────────────────────────────────────────
  openModal: function(word) {
    Dictionary._bindModalEvents();
    AppState.currentWord = word;
    currentWord = word; // compat alias
    document.getElementById('modalHanzi').textContent = word.h;
    document.getElementById('modalPinyin').textContent = word.p;
    document.getElementById('modalLevel').innerHTML =
      '<span>HSK ' + word.level + ' <span class="ver-chip">HSK ' + AppState.version + '.0</span></span>';
    document.getElementById('modalVi').textContent = word.v;
    document.getElementById('modalEn').textContent = word.e;

    const exBox = document.getElementById('modalExample');
    if (word.ex) {
      exBox.style.display = 'block';
      document.getElementById('exZh').textContent = word.ex.zh;
      document.getElementById('exPy').textContent = word.ex.py;
      document.getElementById('exVi').textContent = word.ex.vi;
      document.getElementById('exEn').textContent = word.ex.en;
    } else {
      exBox.style.display = 'none';
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

  // ── HSK Version Switch ─────────────────────────────
  setupHSKVersion: function() {
    const v20 = document.getElementById('ver20');
    const v30 = document.getElementById('ver30');
    if (!v20 || !v30) return;
    v20.classList.toggle('active', AppState.version === 2);
    v30.classList.toggle('active', AppState.version === 3);
    v20.addEventListener('click', function() { Dictionary._switchVersion(2); });
    v30.addEventListener('click', function() { Dictionary._switchVersion(3); });
  },

  _switchVersion: function(ver) {
    AppState.version = ver;
    hskVersion = ver; // compat alias
    localStorage.setItem('hsk_version', ver);
    document.getElementById('ver20').classList.toggle('active', ver === 2);
    document.getElementById('ver30').classList.toggle('active', ver === 3);
    const res = document.getElementById('dictResults');
    if (ver === 3) {
      res.innerHTML = '<div class="coming-soon-banner">' +
        '<div class="cs-icon">🚧</div>' +
        '<h3>HSK 3.0 (2021) — Đang phát triển</h3>' +
        '<p>Bộ từ vựng HSK 3.0 mới nhất đang được cập nhật.<br/>Hiện tại vui lòng dùng HSK 2.0.</p>' +
      '</div>';
      document.getElementById('dictSearch').disabled = true;
    } else {
      document.getElementById('dictSearch').disabled = false;
      res.innerHTML = '<p class="hint">' + (AppState.lang === 'vi' ? 'Nhập từ để tìm kiếm...' : 'Type to search...') + '</p>';
    }
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

  _pickZhVoice: function() {
    if (Dictionary._zhVoice) return Dictionary._zhVoice;
    var voices = window.speechSynthesis.getVoices();
    Dictionary._zhVoice =
      voices.find(function(v) { return v.lang === 'zh-CN'; }) ||
      voices.find(function(v) { return v.lang === 'zh-TW'; }) ||
      voices.find(function(v) { return v.lang.startsWith('zh'); }) ||
      null;
    if (!Dictionary._zhVoice && voices.length > 0) {
      console.warn('[TTS] Không tìm thấy giọng tiếng Trung. Voices:', voices.map(function(v) { return v.lang; }).join(', '));
    }
    return Dictionary._zhVoice;
  },

  playTTS: function(text) {
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
function setupHSKVersion()           { Dictionary.setupHSKVersion(); }
function stripTones(str)             { return Dictionary.stripTones(str); }
function playTTS(text)               { Dictionary.playTTS(text); }
function renderWordList(words, el)   { Dictionary._renderWordList(words, el); }
