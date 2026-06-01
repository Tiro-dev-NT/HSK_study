// ═══════════════════════════════════════════════════════
// READING.JS — Reading + Listening Module (Phase F.7 v2)
// ═══════════════════════════════════════════════════════

var Reading = (function() {

  var _level = 1;
  var _currentPassage = null;
  var _showPinyin = false;
  var _answers = {};
  var _ttsRate = 1;
  var _lastTTSText = '';
  var _activeRow = null;
  var _mode = 'read'; // 'read' | 'listen'

  // Split Chinese text into sentences on 。！？… boundaries
  function _splitSentences(text, pinyin) {
    var zhParts = text.split(/(?<=[。！？…]+)/u);
    zhParts = zhParts.filter(function(s) { return s.trim().length > 0; });

    var pyParts = [];
    if (pinyin) {
      pyParts = pinyin.split(/(?<=[.!?…]+\s)/u).filter(function(s) { return s.trim().length > 0; });
    }
    return zhParts.map(function(zh, i) {
      return { zh: zh.trim(), py: (pyParts[i] || '').trim() };
    });
  }

  var READ_PROGRESS_KEY = 'reading_progress_v1';
  function _loadReadProgress() {
    try { return JSON.parse(localStorage.getItem(READ_PROGRESS_KEY) || '{}'); } catch (e) { return {}; }
  }
  function _markRead(id) {
    if (!id) return;
    var p = _loadReadProgress();
    if (p[id]) return;
    p[id] = true;
    localStorage.setItem(READ_PROGRESS_KEY, JSON.stringify(p));
  }

  function setup() {
    _level = 1;
    _currentPassage = null;
    _showPinyin = false;
    _answers = {};
    _ttsRate = 1;
    _lastTTSText = '';
    _activeRow = null;
    _mode = 'read';
    if (typeof Monetization !== 'undefined' && Monetization.isProSync && Monetization.isProSync()) {
      document.body.classList.add('is-pro');
    }
    _bindEvents();
    _renderList();
  }

  function _bindEvents() {
    document.querySelectorAll('.read-level-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var lvl = parseInt(btn.dataset.level);
        // Reading HSK 3-6 = Pro (matrix 2026-05-21). HSK 1-2 free.
        if (lvl >= 3 && typeof Monetization !== 'undefined' && !Monetization.isProSync()) {
          Monetization.showGate('Đọc hiểu HSK ' + lvl);
          return;
        }
        document.querySelectorAll('.read-level-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        _level = lvl;
        _currentPassage = null;
        document.getElementById('readingView').style.display = 'none';
        document.getElementById('readingList').style.display = '';
        _renderList();
      });
    });

    var view = document.getElementById('readingView');
    if (view) {
      view.addEventListener('click', function(e) {
        if (e.target.classList.contains('clickable-hanzi')) {
          _openCharModal(e.target.dataset.char);
        }
      });
    }
  }

  // ── Ruby pinyin ───────────────────────────────────────

  function _makeRuby(zhText, pyText) {
    var syl = (pyText || '').split(/\s+/).filter(Boolean);
    var si = 0;
    return zhText.split('').map(function(ch) {
      if (/[一-鿿]/.test(ch)) {
        return '<ruby>' + ch + '<rt>' + (syl[si++] || '') + '</rt></ruby>';
      }
      return ch;
    }).join('');
  }

  // ── TTS sentence highlight ────────────────────────────

  function _ttsHighlight(rowEl, utterance) {
    if (_activeRow) _activeRow.classList.remove('read-active');
    _activeRow = rowEl;
    rowEl.classList.add('read-active');
    utterance.onend = function() {
      rowEl.classList.remove('read-active');
      _activeRow = null;
    };
  }

  // ── List render ───────────────────────────────────────

  function _renderList() {
    var container = document.getElementById('readingList');
    if (!container) return;

    var passages = _getPassages();
    var lang = (typeof AppState !== 'undefined' && AppState.lang) || 'vi';

    container.innerHTML = passages.map(function(p, i) {
      var title = lang === 'vi' ? p.title_vi : p.title_en;
      var preview = (p.text || '').substring(0, 30) + '...';
      var charCount = (p.text || '').replace(/[^一-鿿]/g, '').length;
      var readTime = Math.max(1, Math.ceil(charCount / 200));
      var levelLabel = 'HSK ' + _level;

      return '<div class="reading-card" data-idx="' + i + '">' +
        '<div class="read-card-num">' + (i + 1) + '</div>' +
        '<div class="read-card-body">' +
          '<h3 class="read-card-title">' + title + '</h3>' +
          '<div class="read-card-meta">' +
            '<span class="read-level-badge">' + levelLabel + '</span>' +
            '<span class="read-time">~' + readTime + ' phút đọc</span>' +
          '</div>' +
          '<p class="read-card-preview">' + preview + '</p>' +
        '</div>' +
        '<span class="read-card-arrow">→</span>' +
      '</div>';
    }).join('');

    container.querySelectorAll('.reading-card').forEach(function(card) {
      card.addEventListener('click', function() {
        _openPassage(parseInt(this.dataset.idx));
      });
    });
  }

  // ── Open passage ──────────────────────────────────────

  function _openPassage(idx) {
    var passages = _getPassages();
    _currentPassage = passages[idx];
    if (!_currentPassage) return;

    _showPinyin = false;
    _answers = {};
    _lastTTSText = '';
    _activeRow = null;
    _mode = 'read';

    document.getElementById('readingList').style.display = 'none';
    var view = document.getElementById('readingView');
    view.style.display = '';
    if (typeof Quests !== 'undefined') Quests.incrementMetric('reading_done');
    _renderPassage();
  }

  // ── Passage render ────────────────────────────────────

  function _renderPassage() {
    var view = document.getElementById('readingView');
    if (!view || !_currentPassage) return;

    var p = _currentPassage;
    var lang = (typeof AppState !== 'undefined' && AppState.lang) || 'vi';
    var title = lang === 'vi' ? p.title_vi : p.title_en;

    var sentences = _splitSentences(p.text || '', p.pinyin || '');

    // Text body — always use ruby (CSS controls rt visibility via .show-pinyin)
    var textHtml = sentences.map(function(s, si) {
      return '<div class="read-sentence-row" data-si="' + si + '">' +
        '<button class="read-sent-play" data-si="' + si + '" title="Phát câu này">▶</button>' +
        '<p class="read-line">' + _makeRuby(s.zh, s.py) + '</p>' +
      '</div>';
    }).join('');

    // Mode tabs (F8)
    var tabsHtml =
      '<div class="read-mode-tabs">' +
        '<button class="read-mode-tab' + (_mode === 'read' ? ' active' : '') + '" data-mode="read">📖 Đọc</button>' +
        '<button class="read-mode-tab' + (_mode === 'listen' ? ' active' : '') + '" data-mode="listen">🔊 Nghe</button>' +
      '</div>';

    // Listening controls
    var listeningHtml =
      '<div class="read-listen-bar">' +
        '<button class="read-listen-btn" id="readPlayAll">▶ Phát toàn bài</button>' +
        '<button class="read-listen-btn" id="readReplay">↺ Replay</button>' +
        '<div class="read-speed-group">' +
          '<span class="read-speed-label">Tốc độ:</span>' +
          ['0.75', '1', '1.25'].map(function(r) {
            return '<button class="read-speed-btn' + (parseFloat(r) === _ttsRate ? ' active' : '') + '" data-rate="' + r + '">' + r + 'x</button>';
          }).join('') +
        '</div>' +
      '</div>';

    // Comprehension questions
    var questionsHtml = (p.questions || []).map(function(q, qi) {
      var qText = lang === 'vi' ? q.q_vi : q.q_en;
      var answered = _answers.hasOwnProperty(qi);
      var correct = answered && _answers[qi] === q.answer;

      return '<div class="read-question">' +
        '<p class="read-q-text">' + (qi + 1) + '. ' + qText + '</p>' +
        '<div class="read-options">' +
          q.options.map(function(opt, oi) {
            var cls = 'read-option';
            if (answered) {
              if (oi === q.answer) cls += ' correct';
              else if (oi === _answers[qi] && !correct) cls += ' wrong';
            }
            return '<button class="' + cls + '" data-qi="' + qi + '" data-oi="' + oi + '"' +
              (answered ? ' disabled' : '') + '>' + opt + '</button>';
          }).join('') +
        '</div>' +
      '</div>';
    }).join('');

    var passageClass = 'read-passage' +
      (_showPinyin ? ' show-pinyin' : '') +
      (_mode === 'listen' ? ' read-hidden' : '');

    var revealVisible = (_mode === 'listen' && Object.keys(_answers).length > 0) ? '' : 'display:none';

    view.innerHTML =
      '<div class="read-header">' +
        '<button class="btn-back" id="readBack">← Quay lại</button>' +
        '<h2>' + title + '</h2>' +
      '</div>' +
      tabsHtml +
      listeningHtml +
      '<div class="' + passageClass + '">' +
        '<div class="read-text">' + textHtml + '</div>' +
        '<button class="btn-sm read-pinyin-toggle" id="togglePinyin">' +
          (_showPinyin ? 'Ẩn pinyin' : 'Hiện pinyin') +
        '</button>' +
      '</div>' +
      '<div class="read-questions">' +
        '<h3>Câu hỏi</h3>' +
        questionsHtml +
      '</div>' +
      '<button id="readRevealPassage" class="read-reveal-btn" style="' + revealVisible + '">👁 Hiện bài đọc</button>';

    // Back
    document.getElementById('readBack').addEventListener('click', function() {
      _stopTTS();
      view.style.display = 'none';
      document.getElementById('readingList').style.display = '';
      _currentPassage = null;
    });

    // Pinyin toggle — DOM-only, no re-render
    document.getElementById('togglePinyin').addEventListener('click', function() {
      _showPinyin = !_showPinyin;
      view.querySelector('.read-passage').classList.toggle('show-pinyin', _showPinyin);
      this.textContent = _showPinyin ? 'Ẩn pinyin' : 'Hiện pinyin';
    });

    // Answer options
    view.querySelectorAll('.read-option:not([disabled])').forEach(function(btn) {
      btn.addEventListener('click', function() {
        _answers[parseInt(this.dataset.qi)] = parseInt(this.dataset.oi);
        var totalQ = (_currentPassage.questions || []).length;
        if (totalQ > 0 && Object.keys(_answers).length >= totalQ) {
          _markRead(_currentPassage.id);
        }
        _renderPassage();
      });
    });

    // Mode tabs — DOM-only, no re-render
    view.querySelectorAll('.read-mode-tab').forEach(function(tab) {
      tab.addEventListener('click', function() {
        var newMode = this.dataset.mode;
        if (newMode === _mode) return;
        if (newMode === 'listen') {
          // Listening HSK 2-6 = Pro; HSK 1 free (matrix 2026-05-21)
          if (_level >= 2 && typeof Monetization !== 'undefined' && !Monetization.isProSync()) {
            Monetization.showGate('Nghe hiểu HSK ' + _level);
            return;
          }
        }
        _mode = newMode;
        view.querySelectorAll('.read-mode-tab').forEach(function(t) {
          t.classList.toggle('active', t.dataset.mode === newMode);
        });
        var passage = view.querySelector('.read-passage');
        if (newMode === 'listen') {
          passage.classList.add('read-hidden');
          var fullText = sentences.map(function(s) { return s.zh; }).join('');
          _playTTS(fullText);
        } else {
          passage.classList.remove('read-hidden');
          _stopTTS();
        }
      });
    });

    // Reveal passage button
    var revealBtn = document.getElementById('readRevealPassage');
    if (revealBtn) {
      revealBtn.addEventListener('click', function() {
        view.querySelector('.read-passage').classList.remove('read-hidden');
        this.style.display = 'none';
      });
    }

    // Play all
    document.getElementById('readPlayAll').addEventListener('click', function() {
      var fullText = sentences.map(function(s) { return s.zh; }).join('');
      _playTTS(fullText);
    });

    // Replay
    document.getElementById('readReplay').addEventListener('click', function() {
      if (_lastTTSText) _playTTS(_lastTTSText);
    });

    // Speed buttons
    view.querySelectorAll('.read-speed-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        _ttsRate = parseFloat(this.dataset.rate);
        view.querySelectorAll('.read-speed-btn').forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');
      });
    });

    // Per-sentence play with highlight
    view.querySelectorAll('.read-sent-play').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var si = parseInt(this.dataset.si);
        if (!sentences[si]) return;
        var rowEl = this.closest('.read-sentence-row');
        _playTTSWithHighlight(sentences[si].zh, rowEl);
      });
    });
  }

  // ── TTS ───────────────────────────────────────────────

  function _playTTS(text) {
    if (!text) return;
    _lastTTSText = text;
    var synth = window.speechSynthesis;
    if (!synth) return;

    function doSpeak() {
      if (synth.paused) synth.resume();
      var msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'zh-CN';
      msg.rate = _ttsRate;
      if (typeof Dictionary !== 'undefined' && Dictionary._pickZhVoice) {
        var voice = Dictionary._pickZhVoice();
        if (voice) msg.voice = voice;
      }
      synth.cancel();
      setTimeout(function() { synth.speak(msg); }, 50);
    }

    var voices = synth.getVoices();
    if (voices.length > 0) { doSpeak(); }
    else { synth.addEventListener('voiceschanged', doSpeak, { once: true }); }
  }

  function _playTTSWithHighlight(text, rowEl) {
    if (!text) return;
    _lastTTSText = text;
    var synth = window.speechSynthesis;
    if (!synth) return;

    function doSpeak() {
      if (synth.paused) synth.resume();
      var msg = new SpeechSynthesisUtterance(text);
      msg.lang = 'zh-CN';
      msg.rate = _ttsRate;
      if (typeof Dictionary !== 'undefined' && Dictionary._pickZhVoice) {
        var voice = Dictionary._pickZhVoice();
        if (voice) msg.voice = voice;
      }
      _ttsHighlight(rowEl, msg);
      synth.cancel();
      setTimeout(function() { synth.speak(msg); }, 50);
    }

    var voices = synth.getVoices();
    if (voices.length > 0) { doSpeak(); }
    else { synth.addEventListener('voiceschanged', doSpeak, { once: true }); }
  }

  function _stopTTS() {
    if (_activeRow) { _activeRow.classList.remove('read-active'); _activeRow = null; }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }

  // ── Utilities ─────────────────────────────────────────

  function _makeClickable(text) {
    return text.split('').map(function(ch) {
      if (/[一-鿿]/.test(ch)) {
        return '<span class="clickable-hanzi" data-char="' + ch + '">' + ch + '</span>';
      }
      return ch;
    }).join('');
  }

  function _getPassages() {
    return (typeof READINGS_DATA !== 'undefined' && READINGS_DATA[_level]) ||
           (typeof READING_DATA  !== 'undefined' && READING_DATA[_level])  || [];
  }

  function _openCharModal(ch) {
    if (typeof Dictionary === 'undefined' || !Dictionary.openModal || typeof getAllWords !== 'function') return;
    var words = getAllWords();
    var word = words.find(function(w) { return w.h === ch; }) ||
               words.find(function(w) { return w.h && w.h.indexOf(ch) !== -1; });
    if (word) Dictionary.openModal(word);
  }

  return { setup: setup };
}());
