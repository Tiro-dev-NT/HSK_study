// ═══════════════════════════════════════════════════════
// READER.JS — Graded Reader Việt-first (Phase A1)
// Entry: Reader.init() (router initMap['reader'])
// Data: READER_DATA[level] (js/data/reader/reader-hsk*.js)
// Tính năng: list bài → đọc (tap-to-gloss + pinyin/nghĩa toggle + TTS) →
//            câu hỏi MCQ có giải thích · đánh dấu đã đọc · Pro-gate theo cấp.
// KHÔNG tốn AI credit runtime (xem docs/plans/a1-reader-investigation.md §H).
// Pattern tap-lookup port từ speaking.js (_wrapHanzi/_resolveWord/_showLookup).
// ═══════════════════════════════════════════════════════

var Reader = (function() {

  var _level = 1;
  var _passage = null;
  var _answers = {};
  var _showPinyin = true;
  var _showVi = true;
  var _ttsRate = 1;
  var _lookupPopup = null;

  var PROGRESS_KEY = 'reader_progress_v1';      // { id: true }
  var PINYIN_KEY   = 'reader_show_pinyin';
  var VI_KEY       = 'reader_show_vi';

  // ── Pro-gate (matrix A1 §F.Q3) ────────────────────────
  // HSK 1-2 free · HSK 3-4 free 3 bài đầu/cấp rồi Pro · HSK 5-9 Pro.
  var FREE_PREVIEW = 3;
  function _isLocked(level, idx) {
    if (level <= 2) return false;
    if (level >= 5) return true;
    return idx >= FREE_PREVIEW; // HSK 3-4
  }

  // ── Helpers ───────────────────────────────────────────
  function _esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function(c) {
      return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c];
    });
  }
  function _isHanzi(ch) {
    var c = ch.charCodeAt(0);
    return (c >= 0x4E00 && c <= 0x9FFF) || (c >= 0x3400 && c <= 0x4DBF);
  }
  function _toast(s) { if (typeof showToast === 'function') showToast(s); }
  function _passages() {
    return (typeof READER_DATA !== 'undefined' && READER_DATA[_level]) || [];
  }
  function _loadProgress() {
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); } catch (e) { return {}; }
  }
  function _markRead(id) {
    if (!id) return;
    var p = _loadProgress();
    if (p[id]) return;
    p[id] = true;
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
    if (typeof Quests !== 'undefined' && Quests.incrementMetric) Quests.incrementMetric('reading_done');
  }

  // ── Entry ─────────────────────────────────────────────
  function init() {
    _level = 1;
    _passage = null;
    _answers = {};
    _showPinyin = localStorage.getItem(PINYIN_KEY) !== 'false';
    _showVi = localStorage.getItem(VI_KEY) !== 'false';
    _renderLevels();
    _renderList();
  }

  // ── Level tabs ────────────────────────────────────────
  function _renderLevels() {
    var bar = document.getElementById('rdLevels');
    if (!bar) return;
    var html = '';
    for (var lv = 1; lv <= 9; lv++) {
      var has = (typeof READER_DATA !== 'undefined' && READER_DATA[lv] && READER_DATA[lv].length);
      var lock = (lv >= 3) ? ' <span class="rd-lvl-lock">🔒</span>' : '';
      html += '<button class="rd-level-btn' + (lv === _level ? ' active' : '') +
              (has ? '' : ' rd-level-empty') + '" data-level="' + lv + '">HSK ' + lv + lock + '</button>';
    }
    bar.innerHTML = html;
    bar.querySelectorAll('.rd-level-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        _level = parseInt(this.dataset.level, 10);
        _passage = null;
        _renderLevels();
        _renderList();
        var view = document.getElementById('rdView');
        if (view) view.style.display = 'none';
        var list = document.getElementById('rdList');
        if (list) list.style.display = '';
      });
    });
  }

  // ── List ──────────────────────────────────────────────
  function _renderList() {
    var list = document.getElementById('rdList');
    if (!list) return;
    var items = _passages();
    var progress = _loadProgress();

    if (!items.length) {
      list.innerHTML = '<div class="rd-empty">📚 Bài đọc HSK ' + _level +
        ' đang được biên soạn.<br>Hãy quay lại sau nhé!</div>';
      return;
    }

    list.innerHTML = items.map(function(p, i) {
      var locked = _isLocked(_level, i);
      var done = !!progress[p.id];
      var chars = (p.est_words || _countChars(p));
      var readTime = Math.max(1, Math.ceil(chars / 60));
      return '<button class="rd-card' + (locked ? ' rd-card-locked' : '') +
          (done ? ' rd-card-done' : '') + '" data-idx="' + i + '">' +
        '<div class="rd-card-num">' + (done ? '✓' : (i + 1)) + '</div>' +
        '<div class="rd-card-body">' +
          '<div class="rd-card-title">' + _esc(p.title.vi) + (locked ? ' <span class="rd-card-pro">PRO</span>' : '') + '</div>' +
          '<div class="rd-card-sub">' + _esc(p.summary_vi || '') + '</div>' +
          '<div class="rd-card-meta"><span class="rd-card-badge">HSK ' + _level + '</span>' +
            '<span>~' + readTime + ' phút</span><span>' + chars + ' chữ</span></div>' +
        '</div>' +
        '<span class="rd-card-arrow">' + (locked ? '🔒' : '→') + '</span>' +
      '</button>';
    }).join('');

    list.querySelectorAll('.rd-card').forEach(function(card) {
      card.addEventListener('click', function() {
        _open(parseInt(this.dataset.idx, 10));
      });
    });
  }

  function _countChars(p) {
    var n = 0;
    (p.paragraphs || []).forEach(function(par) {
      (par.sentences || []).forEach(function(s) {
        n += (s.zh || '').replace(/[^一-鿿]/g, '').length;
      });
    });
    return n;
  }

  // ── Open passage (with Pro-gate) ──────────────────────
  function _open(idx) {
    var items = _passages();
    var p = items[idx];
    if (!p) return;

    if (_isLocked(_level, idx) && typeof Monetization !== 'undefined') {
      if (!Monetization.isProSync()) {
        Monetization.isPro().then(function(pro) {
          if (pro) _doOpen(p);
          else Monetization.showGate('Đọc truyện HSK ' + _level);
        });
        return;
      }
    }
    _doOpen(p);
  }

  function _doOpen(p) {
    _passage = p;
    _answers = {};
    document.getElementById('rdList').style.display = 'none';
    var view = document.getElementById('rdView');
    view.style.display = '';
    _renderPassage();
    window.scrollTo(0, 0);
  }

  // ── Passage render ────────────────────────────────────
  function _renderPassage() {
    var view = document.getElementById('rdView');
    if (!view || !_passage) return;
    var p = _passage;

    var bodyHtml = (p.paragraphs || []).map(function(par) {
      return '<div class="rd-para">' + (par.sentences || []).map(function(s, si) {
        return '<div class="rd-sent" data-si="' + si + '">' +
          '<button class="rd-sent-play" title="Nghe câu">🔊</button>' +
          '<div class="rd-sent-main">' +
            '<p class="rd-hanzi">' + _wrapHanzi(s.zh) + '</p>' +
            '<p class="rd-py">' + _esc(s.py || '') + '</p>' +
            '<p class="rd-vi">' + _esc(s.vi || '') + '</p>' +
          '</div>' +
        '</div>';
      }).join('') + '</div>';
    }).join('');

    var qHtml = (p.questions || []).map(function(q, qi) {
      var answered = _answers.hasOwnProperty(qi);
      var picked = _answers[qi];
      var correct = answered && picked === q.answer;
      return '<div class="rd-q">' +
        '<p class="rd-q-text">' + (qi + 1) + '. ' + _esc(q.q.vi) + '</p>' +
        '<div class="rd-opts">' +
          q.options.map(function(opt, oi) {
            var cls = 'rd-opt';
            if (answered) {
              if (oi === q.answer) cls += ' rd-correct';
              else if (oi === picked) cls += ' rd-wrong';
            }
            return '<button class="' + cls + '" data-qi="' + qi + '" data-oi="' + oi + '"' +
              (answered ? ' disabled' : '') + '>' + _esc(opt) + '</button>';
          }).join('') +
        '</div>' +
        (answered && q.explain_vi
          ? '<div class="rd-explain' + (correct ? ' ok' : '') + '">' +
            (correct ? '✓ Đúng. ' : '✗ ') + _esc(q.explain_vi) + '</div>'
          : '') +
      '</div>';
    }).join('');

    view.className = 'reader-view' + (_showPinyin ? ' show-py' : '') + (_showVi ? ' show-vi' : '');
    view.innerHTML =
      '<div class="rd-head">' +
        '<button class="btn-back" id="rdBack">← Quay lại</button>' +
        '<h2>' + _esc(p.title.vi) + '</h2>' +
        '<p class="rd-zh-title" lang="zh">' + _esc(p.title.zh || '') + '</p>' +
      '</div>' +
      '<div class="rd-toolbar">' +
        '<button class="rd-tool" id="rdPlayAll">▶ Nghe cả bài</button>' +
        '<button class="rd-tool rd-toggle' + (_showPinyin ? ' on' : '') + '" id="rdTogPy">Pinyin</button>' +
        '<button class="rd-tool rd-toggle' + (_showVi ? ' on' : '') + '" id="rdTogVi">Nghĩa</button>' +
        '<div class="rd-speed">' +
          ['0.75', '1', '1.25'].map(function(r) {
            return '<button class="rd-spd' + (parseFloat(r) === _ttsRate ? ' on' : '') + '" data-rate="' + r + '">' + r + 'x</button>';
          }).join('') +
        '</div>' +
      '</div>' +
      '<div class="rd-body">' + bodyHtml + '</div>' +
      '<div class="rd-tip">💡 Chạm vào chữ Hán để tra nghĩa.</div>' +
      '<div class="rd-questions"><h3>Câu hỏi đọc hiểu</h3>' + qHtml + '</div>';

    _bindPassage(view);
  }

  function _bindPassage(view) {
    document.getElementById('rdBack').addEventListener('click', function() {
      _stopTTS();
      view.style.display = 'none';
      document.getElementById('rdList').style.display = '';
      _passage = null;
      _renderList();
    });

    document.getElementById('rdTogPy').addEventListener('click', function() {
      _showPinyin = !_showPinyin;
      localStorage.setItem(PINYIN_KEY, _showPinyin);
      view.classList.toggle('show-py', _showPinyin);
      this.classList.toggle('on', _showPinyin);
    });
    document.getElementById('rdTogVi').addEventListener('click', function() {
      _showVi = !_showVi;
      localStorage.setItem(VI_KEY, _showVi);
      view.classList.toggle('show-vi', _showVi);
      this.classList.toggle('on', _showVi);
    });

    document.getElementById('rdPlayAll').addEventListener('click', function() {
      var text = '';
      (_passage.paragraphs || []).forEach(function(par) {
        (par.sentences || []).forEach(function(s) { text += s.zh; });
      });
      _speak(text);
    });

    view.querySelectorAll('.rd-spd').forEach(function(btn) {
      btn.addEventListener('click', function() {
        _ttsRate = parseFloat(this.dataset.rate);
        view.querySelectorAll('.rd-spd').forEach(function(b) { b.classList.remove('on'); });
        this.classList.add('on');
      });
    });

    view.querySelectorAll('.rd-sent-play').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var row = this.closest('.rd-sent');
        var si = parseInt(row.dataset.si, 10);
        // sentence text from current passage paragraph 0 (MVP: flat sentence list)
        var s = _flatSentence(si, row);
        if (s) _speak(s.zh);
      });
    });

    // Tap-to-gloss
    view.querySelectorAll('.rd-hz').forEach(function(span) {
      span.addEventListener('click', function(e) {
        e.stopPropagation();
        _showLookup(this);
      });
    });

    // Answer options
    view.querySelectorAll('.rd-opt:not([disabled])').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var qi = parseInt(this.dataset.qi, 10);
        _answers[qi] = parseInt(this.dataset.oi, 10);
        var total = (_passage.questions || []).length;
        if (total > 0 && Object.keys(_answers).length >= total) _markRead(_passage.id);
        _renderPassage();
      });
    });
  }

  // Locate sentence object for a rendered row (paragraph-aware)
  function _flatSentence(si, rowEl) {
    var paraEl = rowEl.closest('.rd-para');
    var bodyEl = document.querySelector('.rd-body');
    if (!paraEl || !bodyEl) return null;
    var pIdx = Array.prototype.indexOf.call(bodyEl.querySelectorAll('.rd-para'), paraEl);
    var par = (_passage.paragraphs || [])[pIdx];
    return par ? (par.sentences || [])[si] : null;
  }

  // ── Tap-to-gloss (port speaking.js) ───────────────────
  function _wrapHanzi(text) {
    if (!text) return '';
    var out = '';
    for (var i = 0; i < text.length; i++) {
      var ch = text[i];
      if (_isHanzi(ch)) out += '<span class="rd-hz" data-ch="' + _esc(ch) + '">' + _esc(ch) + '</span>';
      else out += _esc(ch);
    }
    return out;
  }

  function _resolveWordDict(ch, nextCh) {
    var all = (typeof getAllWords === 'function') ? getAllWords() : [];
    if (!all.length) return null;
    if (nextCh) {
      var two = all.find(function(w) { return w.h === ch + nextCh; });
      if (two) return { h: two.h, p: two.p, v: two.v };
    }
    var one = all.find(function(w) { return w.h === ch; });
    if (one) return { h: one.h, p: one.p, v: one.v };
    for (var i = 0; i < all.length; i++) {
      if (all[i].h && all[i].h.indexOf(ch) === 0) return { h: all[i].h, p: all[i].p, v: all[i].v };
    }
    return null;
  }

  // Prefer curated gloss of the sentence; fallback to dictionary.
  function _lookupToken(sentence, ch, nextCh) {
    var gl = (sentence && sentence.gloss) || [];
    if (nextCh) {
      var two = gl.find(function(g) { return g.w === ch + nextCh; });
      if (two) return { h: two.w, p: two.py, v: two.vi };
    }
    var one = gl.find(function(g) { return g.w === ch; });
    if (one) return { h: one.w, p: one.py, v: one.vi };
    var any = gl.find(function(g) { return g.w && g.w.indexOf(ch) !== -1; });
    if (any) return { h: any.w, p: any.py, v: any.vi };
    return _resolveWordDict(ch, nextCh);
  }

  function _closeLookup() {
    if (_lookupPopup && _lookupPopup.parentNode) _lookupPopup.parentNode.removeChild(_lookupPopup);
    _lookupPopup = null;
    document.removeEventListener('click', _onDocClick);
  }
  function _onDocClick(e) {
    if (!_lookupPopup) return;
    if (!_lookupPopup.contains(e.target) && !e.target.classList.contains('rd-hz')) _closeLookup();
  }

  function _showLookup(target) {
    _closeLookup();
    var ch = target.getAttribute('data-ch');
    var row = target.closest('.rd-sent');
    var si = row ? parseInt(row.dataset.si, 10) : -1;
    var sentence = (si >= 0 && row) ? _flatSentence(si, row) : null;

    // next hanzi in same sentence (for 2-char compound)
    var nextCh = null;
    var sibs = row ? row.querySelectorAll('.rd-hz') : [];
    for (var i = 0; i < sibs.length; i++) {
      if (sibs[i] === target) { nextCh = (i < sibs.length - 1) ? sibs[i + 1].getAttribute('data-ch') : null; break; }
    }

    var w = _lookupToken(sentence, ch, nextCh);
    if (!w) { _toast('Chưa có trong từ điển'); return; }

    var popup = document.createElement('div');
    popup.className = 'rd-lookup';
    popup.innerHTML =
      '<button class="rd-lookup-close">✕</button>' +
      '<div class="rd-lookup-h" lang="zh">' + _esc(w.h || ch) + '</div>' +
      '<div class="rd-lookup-py">' + _esc(w.p || '') + '</div>' +
      '<div class="rd-lookup-vi">' + _esc(w.v || '') + '</div>' +
      '<div class="rd-lookup-act">' +
        '<button class="rd-lookup-btn rd-lookup-tts" data-text="' + _esc(w.h || ch) + '">🔊 Nghe</button>' +
        '<button class="rd-lookup-btn rd-lookup-srs" data-word="' + _esc(w.h || ch) + '">📚 Lưu ôn tập</button>' +
      '</div>';
    document.body.appendChild(popup);
    _lookupPopup = popup;

    var rect = target.getBoundingClientRect();
    var top = rect.bottom + 8;
    var left = rect.left + rect.width / 2 - popup.offsetWidth / 2;
    if (top + popup.offsetHeight > window.innerHeight - 20) top = rect.top - popup.offsetHeight - 8;
    if (left < 10) left = 10;
    if (left + popup.offsetWidth > window.innerWidth - 10) left = window.innerWidth - popup.offsetWidth - 10;
    popup.style.top = (top + window.scrollY) + 'px';
    popup.style.left = left + 'px';

    popup.querySelector('.rd-lookup-close').onclick = _closeLookup;
    popup.querySelector('.rd-lookup-tts').onclick = function() { _speak(this.getAttribute('data-text')); };
    popup.querySelector('.rd-lookup-srs').onclick = function() {
      var h = this.getAttribute('data-word');
      if (typeof updateSRSCard === 'function') { updateSRSCard(h, 0, { source: 'reader' }); _toast('Đã thêm vào ôn tập'); }
      _closeLookup();
    };
    setTimeout(function() { document.addEventListener('click', _onDocClick); }, 0);
  }

  // ── TTS (Web Speech; R2 audio file = nâng cấp sau, §G) ─
  function _speak(text) {
    if (!text) return;
    if (typeof Dictionary !== 'undefined' && Dictionary.playTTS && _ttsRate === 1) { Dictionary.playTTS(text); return; }
    var synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN'; u.rate = _ttsRate;
    if (typeof Dictionary !== 'undefined' && Dictionary._pickZhVoice) {
      var v = Dictionary._pickZhVoice();
      if (v) u.voice = v;
    }
    setTimeout(function() { synth.speak(u); }, 30);
  }
  function _stopTTS() { if (window.speechSynthesis) window.speechSynthesis.cancel(); }

  return { init: init };
}());
