var Speaking = (function () {
  'use strict';

  var HIST_KEY = 'speaking_history_v1';
  var PINYIN_KEY = 'speaking_show_pinyin';
  var _showPinyin = true;
  var _set = null;
  var _idx = 0;
  var _blob = null;
  var _url = '';
  var _stream = null;
  var _rec = null;
  var _chunks = [];
  var _mime = '';
  var _audioCtx = null;
  var _analyser = null;
  var _waveRAF = 0;
  var _busy = false;

  function $(id) { return document.getElementById(id); }
  function _esc(s) { return (typeof escapeHtml === 'function') ? escapeHtml(s) : String(s == null ? '' : s); }
  function _toast(s) { if (typeof showToast === 'function') showToast(s); }
  function _show(el, on) { if (el) el.style.display = on ? '' : 'none'; }
  function _speechFn() { return (typeof SB_URL !== 'undefined' && SB_URL ? SB_URL : '') + '/functions/v1/speech-proxy'; }

  function _updatePinyinToggle() {
    var btn = $('spPinyinToggle');
    if (!btn) return;
    if (_showPinyin) btn.classList.add('sp-pinyin-toggle--active');
    else btn.classList.remove('sp-pinyin-toggle--active');
  }

  function init() {
    var saved = localStorage.getItem(PINYIN_KEY);
    _showPinyin = saved !== 'false';
    _renderSets();
    _renderHistory();
    var first = $('spFirstSetBtn');
    if (first) first.onclick = function () {
      var sets = _sets();
      if (sets.length) _openSet(sets[0].id);
    };
    var mic = $('spMicCheckBtn');
    if (mic) mic.onclick = _micCheck;
    var back = $('spBackToSets');
    if (back) back.onclick = _backToSets;
    var toggle = $('spPinyinToggle');
    if (toggle) {
      _updatePinyinToggle();
      toggle.onclick = function () {
        _showPinyin = !_showPinyin;
        try { localStorage.setItem(PINYIN_KEY, String(_showPinyin)); } catch (e) {}
        _updatePinyinToggle();
        var py = $('spLinePinyin');
        if (py) py.style.display = _showPinyin ? '' : 'none';
      };
    }
    if (window.Monetization && Monetization.isPro) Monetization.isPro();

    // Handoff từ màn complete của Truyện Mai → mở thẳng luyện nói câu của bài đó
    try {
      var launch = sessionStorage.getItem('speaking_lesson_launch');
      if (launch) {
        sessionStorage.removeItem('speaking_lesson_launch');
        openLesson(parseInt(launch, 10));
      }
    } catch (e) {}
  }

  function _sets() { return (window.SHADOW_DATA && SHADOW_DATA.sets) || []; }

  function _renderSets() {
    var grid = $('spSetGrid');
    if (!grid) return;
    var sets = _sets();
    grid.innerHTML = sets.map(function (s, i) {
      return '<button class="sp-set-card" data-set="' + _esc(s.id) + '">' +
        '<span class="sp-set-num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="sp-set-body"><span class="sp-set-kicker">' +
        '<span class="sp-focus-pill">' + _esc(s.focus) + '</span>' +
        '<span class="sp-level-pill">HSK ' + _esc(s.level) + '</span></span>' +
        '<h3 class="sp-set-title">' + _esc(s.title) + '</h3>' +
        '<p class="sp-set-desc">' + _esc(s.desc) + '</p>' +
        '<span class="sp-set-foot">' + ((s.lines || []).length) + ' câu luyện →</span></span>' +
        '</button>';
    }).join('');
    grid.querySelectorAll('[data-set]').forEach(function (b) {
      b.onclick = function () { _openSet(b.getAttribute('data-set')); };
    });
  }

  function _openSet(id) {
    var sets = _sets();
    _activateSet(sets.find(function (s) { return s.id === id; }) || sets[0] || null);
  }

  function _activateSet(set) {
    if (!set) return;
    _set = set;
    _idx = 0;
    _show($('spIntro'), false);
    _show($('spPractice'), true);
    _renderLine();
    try { window.scrollTo(0, 0); } catch (e) {}
  }

  // ── Luyện nói theo câu thoại của 1 bài Truyện Mai (handoff từ màn complete) ──
  function _lessonLines(lessonId) {
    if (typeof COURSE_DATA === 'undefined') return null;
    var l = COURSE_DATA[lessonId];
    if (!l || !l.steps) return null;
    var out = [];
    for (var i = 0; i < l.steps.length; i++) {
      var s = l.steps[i];
      if (s.type === 'dialogue' && s.speaker !== 'narrator' && s.pinyin && s.text) {
        out.push({ h: s.text, p: s.pinyin, v: s.meaning || '', tip: '', _hasVocab: !!(s.vocab && s.vocab.length) });
      }
    }
    return { lesson: l, lines: out };
  }

  function _capLines(lines, max) {
    if (lines.length <= max) return lines;
    // Ưu tiên câu có từ mới, giữ thứ tự gốc
    var keep = {};
    var picked = 0;
    for (var i = 0; i < lines.length && picked < max; i++) {
      if (lines[i]._hasVocab) { keep[i] = true; picked++; }
    }
    for (var j = 0; j < lines.length && picked < max; j++) {
      if (!keep[j]) { keep[j] = true; picked++; }
    }
    return lines.filter(function (_, idx) { return keep[idx]; });
  }

  function openLesson(lessonId) {
    var data = _lessonLines(lessonId);
    if (!data || !data.lines.length) {
      _toast('Bài này chưa có câu thoại để luyện nói.');
      return;
    }
    _activateSet({
      id: 'mai-' + lessonId,
      title: 'Hội thoại Bài ' + lessonId,
      focus: 'Hội thoại Mai',
      level: data.lesson.level || 1,
      desc: data.lesson.title || '',
      lines: _capLines(data.lines, 8)
    });
  }

  function _backToSets() {
    _cleanupRecording();
    _show($('spPractice'), false);
    _show($('spIntro'), true);
    _renderHistory();
    try { window.scrollTo(0, 0); } catch (e) {}
  }

  function _line() {
    var lines = (_set && _set.lines) || [];
    return lines[_idx] || null;
  }

  function _renderLine() {
    var line = _line();
    if (!line) return;
    _cleanupRecording();
    _show($('spResult'), false);
    _show($('spGrading'), false);

    var total = (_set.lines || []).length;
    $('spPracticeMeta').textContent = _set.title + ' · Câu ' + (_idx + 1) + '/' + total;
    $('spProgressFill').style.width = (((_idx + 1) / total) * 100) + '%';
    $('spLineLabel').textContent = _set.focus + ' · HSK ' + _set.level;
    $('spLineHanzi').textContent = line.h;
    var pyEl = $('spLinePinyin');
    pyEl.textContent = line.p;
    pyEl.style.display = _showPinyin ? '' : 'none';
    $('spLineVi').textContent = line.v;
    $('spLineTip').textContent = line.tip || '';

    $('spPlaySample').onclick = function () { _speak(line.h); };
    $('spRecordBtn').onclick = _startRecord;
    $('spStopBtn').onclick = _stopRecord;
    $('spReplayBtn').onclick = function () { if (_url) try { new Audio(_url).play(); } catch (e) {} };
    $('spScoreBtn').onclick = _scoreCurrent;
    $('spPrevBtn').disabled = _idx <= 0;
    $('spPrevBtn').onclick = function () { if (_idx > 0) { _idx--; _renderLine(); } };
    $('spNextBtn').textContent = _idx >= total - 1 ? 'Hoàn thành ✓' : 'Câu tiếp →';
    $('spNextBtn').onclick = function () {
      if (_idx >= total - 1) _backToSets();
      else { _idx++; _renderLine(); }
    };
  }

  function _speak(text) {
    try {
      var synth = window.speechSynthesis;
      if (!synth) return;
      synth.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = 0.82;
      var v = (window.Dictionary && Dictionary._pickZhVoice && Dictionary._pickZhVoice());
      if (v) u.voice = v;
      setTimeout(function () { try { synth.speak(u); } catch (e) {} }, 50);
    } catch (e) {}
  }

  async function _micCheck() {
    var st = $('spMicStatus');
    if (st) { st.textContent = 'Đang xin quyền micro…'; st.className = 'sp-mic-status'; }
    try {
      var s = await navigator.mediaDevices.getUserMedia({ audio: true });
      s.getTracks().forEach(function (t) { t.stop(); });
      if (st) { st.textContent = '✓ Micro hoạt động tốt'; st.className = 'sp-mic-status sp-mic-status--ok'; }
    } catch (e) {
      if (st) { st.textContent = '✕ Không truy cập được micro — hãy bật quyền micro trong trình duyệt.'; st.className = 'sp-mic-status sp-mic-status--err'; }
    }
  }

  function _pickMime() {
    var cands = ['audio/webm;codecs=opus', 'audio/webm', 'audio/ogg;codecs=opus', 'audio/mp4'];
    _mime = '';
    if (window.MediaRecorder && MediaRecorder.isTypeSupported) {
      for (var i = 0; i < cands.length; i++) {
        if (MediaRecorder.isTypeSupported(cands[i])) { _mime = cands[i]; break; }
      }
    }
  }

  async function _startRecord() {
    if (_busy) return;
    _cleanupRecording();
    try {
      _stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (e) {
      _toast('Cần quyền micro để ghi âm.');
      return;
    }
    _pickMime();
    _setupAnalyser();
    _chunks = [];
    try { _rec = _mime ? new MediaRecorder(_stream, { mimeType: _mime }) : new MediaRecorder(_stream); }
    catch (e) { _rec = new MediaRecorder(_stream); }
    _rec.ondataavailable = function (ev) { if (ev.data && ev.data.size) _chunks.push(ev.data); };
    _rec.onstop = _onStop;
    _rec.start();
    _show($('spWave'), true);
    _show($('spRecordBtn'), false);
    _show($('spStopBtn'), true);
    _show($('spReplayBtn'), false);
    _show($('spScoreBtn'), false);
    _show($('spResult'), false);
    _startWave();
  }

  function _stopRecord() {
    _stopWave();
    _show($('spWave'), false);
    _show($('spStopBtn'), false);
    _show($('spRecordBtn'), true);
    try { if (_rec && _rec.state !== 'inactive') _rec.stop(); } catch (e) {}
  }

  function _onStop() {
    _blob = new Blob(_chunks, { type: _mime || 'audio/webm' });
    try { _url = URL.createObjectURL(_blob); } catch (e) { _url = ''; }
    _stopStream();
    _show($('spReplayBtn'), !!_url);
    _show($('spScoreBtn'), !!_blob && _blob.size > 200);
  }

  function _setupAnalyser() {
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC || !_stream) return;
      _audioCtx = new AC();
      var src = _audioCtx.createMediaStreamSource(_stream);
      _analyser = _audioCtx.createAnalyser();
      _analyser.fftSize = 256;
      src.connect(_analyser);
    } catch (e) { _analyser = null; }
  }

  function _startWave() {
    var el = $('spWave');
    if (!el) return;
    var bars = el.querySelectorAll('span');
    if (!_analyser) {
      var t = 0;
      _waveRAF = setInterval(function () {
        t++;
        bars.forEach(function (b, k) { b.style.height = (8 + Math.abs(Math.sin((t + k) / 3)) * 28) + 'px'; });
      }, 80);
      return;
    }
    var data = new Uint8Array(_analyser.frequencyBinCount);
    function loop() {
      _analyser.getByteFrequencyData(data);
      var step = Math.floor(data.length / bars.length) || 1;
      bars.forEach(function (b, k) {
        var v = data[k * step] || 0;
        b.style.height = (8 + (v / 255) * 34) + 'px';
      });
      _waveRAF = requestAnimationFrame(loop);
    }
    loop();
  }

  function _stopWave() {
    if (typeof _waveRAF === 'number') { cancelAnimationFrame(_waveRAF); clearInterval(_waveRAF); }
    _waveRAF = 0;
  }

  async function _token() {
    if (!window.SB) return null;
    try {
      var res = await SB.auth.getSession();
      var s = res && res.data && res.data.session;
      return (s && s.access_token) || null;
    } catch (e) { return null; }
  }

  async function _scoreCurrent() {
    if (_busy || !_blob) return;
    var line = _line();
    var token = await _token();
    if (!token) { _toast('Đăng nhập để dùng chấm phát âm AI nhé.'); return; }
    if (window.Monetization && Monetization.isPro) {
      var pro = await Monetization.isPro();
      if (!pro) { Monetization.showGate('Luyện phát âm Shadowing'); return; }
    }

    _busy = true;
    _show($('spGrading'), true);
    _show($('spScoreBtn'), false);
    _show($('spResult'), false);

    try {
      var wav = await _toWav16k(_blob);
      var b64 = await _blobToB64(wav || _blob);
      if (!b64) throw new Error('no_audio');
      var res = await _scoreAudio({
        task: 'hskk_score',
        qtype: 'shadowing',
        coreType: 'sent.eval.cn',
        refText: line.h,
        audio: b64,
        audioType: wav ? 'wav' : _audioType()
      }, token);
      if (res && res.ok && res.score) _renderResult(res);
      else _handleScoreError(res || { reason: 'network_error' });
    } catch (e) {
      _handleScoreError({ reason: e.message || 'network_error' });
    } finally {
      _busy = false;
      _show($('spGrading'), false);
      _show($('spScoreBtn'), true);
    }
  }

  function _audioType() {
    if (_mime.indexOf('ogg') >= 0) return 'ogg';
    if (_mime.indexOf('mp4') >= 0) return 'mp4';
    return 'webm';
  }

  async function _scoreAudio(payload, token) {
    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, 45000);
    try {
      var res = await fetch(_speechFn(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
        body: JSON.stringify(payload),
        signal: ctrl.signal
      });
      clearTimeout(timer);
      var data = {}; try { data = await res.json(); } catch (e) {}
      if (typeof data.balance === 'number' && window.AICredit) {
        AICredit._lastBalance = data.balance;
        try { localStorage.setItem(AICredit._CACHE_KEY, String(data.balance)); } catch (e) {}
        if (AICredit.updateUI) AICredit.updateUI(data.balance);
      }
      return data;
    } catch (e) {
      clearTimeout(timer);
      return { ok: false, reason: e.name === 'AbortError' ? 'timeout' : 'network_error' };
    }
  }

  function _handleScoreError(r) {
    if (r && (r.reason === 'insufficient_credit' || r.reason === 'daily_cap_exceeded' || r.reason === 'not_logged_in')) {
      if (window.AIClient && AIClient.handleBlock) AIClient.handleBlock(r);
      return;
    }
    var msg = 'Chưa chấm được câu này. Hãy thử ghi âm lại.';
    if (r && r.reason === 'score_unavailable') msg = 'SpeechSuper chưa trả điểm cho audio này; credit đã được hoàn nếu lỗi từ server.';
    if (r && r.reason === 'timeout') msg = 'Chấm phát âm quá lâu, hãy thử lại.';
    _toast(msg);
  }

  function _renderResult(res) {
    var score = res.score || {};
    var line = _line();
    var overall = _num(score.overall);
    var pron = _num(score.pronunciation);
    var flu = _num(score.fluency);
    var integrity = _num(score.integrity);
    var ring = overall >= 80 ? 'var(--success)' : overall >= 60 ? 'var(--warning)' : 'var(--danger)';
    var syllables = _extractSyllables(score, line);
    var el = $('spResult');
    if (!el) return;
    el.style.display = '';
    el.innerHTML = '<div class="sp-score-ring" style="--sp-ring:' + ring + ';--sp-pct:' + ((overall || 0) / 100).toFixed(3) + '">' +
      '<span class="sp-score-num">' + (overall == null ? '—' : overall) + '</span><span class="sp-score-max">/100</span></div>' +
      '<div class="sp-result-body"><div class="sp-verdict">' + _esc(_verdict(overall)) + '</div>' +
      '<div class="sp-score-grid">' +
      _mini('Phát âm', pron) + _mini('Trôi chảy', flu) + _mini('Độ khớp', integrity) +
      '</div>' +
      '<div class="sp-syllables">' + syllables.map(function (s) {
        return '<span class="sp-syllable ' + _esc(s.cls) + '" title="' + _esc(s.title) + '">' + _esc(s.label) + '</span>';
      }).join('') + '</div>' +
      '<div class="sp-feedback">' + _esc(_feedback(score, overall)) + '</div>' +
      '<div class="sp-model">Chấm bởi: ' + _esc(_modelLabel(res.model)) + ' · Task hskk_score · ' + _esc(res.credit_used || 1) + ' credit</div>' +
      '</div>';
    if (overall != null) _saveHistory({ ts: Date.now(), set: _set.title, line: line.h, overall: overall, pron: pron, flu: flu });
  }

  function _mini(label, value) {
    return '<div class="sp-score-mini"><span>' + _esc(label) + '</span><b>' + (value == null ? '—' : value) + '</b></div>';
  }

  function _num(v) { return typeof v === 'number' ? Math.round(v) : null; }

  function _verdict(n) {
    if (n == null) return 'Chưa có điểm';
    if (n >= 88) return 'Rất rõ và tự nhiên';
    if (n >= 75) return 'Tốt — chỉnh vài âm nhỏ';
    if (n >= 60) return 'Đạt — luyện chậm hơn một nhịp';
    return 'Cần luyện lại câu này';
  }

  function _feedback(score, overall) {
    if (score && score._mock) return 'Điểm thử nghiệm khi chưa kết nối SpeechSuper thật.';
    if (overall == null) return 'Hãy ghi âm lại với âm lượng rõ hơn.';
    if (score.fluency != null && score.fluency < 60) return 'Hãy đọc liền mạch hơn, tránh ngắt quá lâu giữa các cụm.';
    if (score.pronunciation != null && score.pronunciation < 60) return 'Tập trung vào thanh điệu và âm đầu/cuối, đọc chậm trước khi tăng tốc.';
    if (overall >= 85) return 'Câu này đã ổn. Giữ nhịp thở đều và chuyển sang câu tiếp theo.';
    return 'Nghe lại mẫu, đọc chậm hơn và nhấn đúng trọng tâm trong phần mẹo.';
  }

  function _modelLabel(model) {
    if (!model) return 'SpeechSuper';
    if (model.indexOf('speechsuper:') === 0) return 'SpeechSuper ' + model.replace('speechsuper:', '');
    if (model === 'mock-no-key') return 'Mock SpeechSuper';
    return model;
  }

  function _extractSyllables(score, line) {
    var raw = score && score.raw;
    var arr = _findScoreArray(raw);
    if (arr && arr.length) {
      return arr.slice(0, 28).map(function (x) {
        var label = x.char || x.word || x.text || x.syllable || x.content || x.pron || x.py || '';
        var sc = _num(x.score) || _num(x.overall) || _num(x.pronunciation) || _num(x.pron) || _num(x.confidence);
        return _syllableItem(label, sc);
      }).filter(function (x) { return !!x.label; });
    }
    var tokens = String(line.p || line.h || '').split(/\s+/).filter(Boolean);
    var base = _num(score.pronunciation) || _num(score.overall) || 70;
    return tokens.slice(0, 28).map(function (t) { return _syllableItem(t, base); });
  }

  function _findScoreArray(raw) {
    if (!raw || typeof raw !== 'object') return null;
    var keys = ['words', 'word', 'syllables', 'syllable', 'details', 'detail', 'items', 'phones', 'char', 'chars'];
    for (var i = 0; i < keys.length; i++) {
      var v = raw[keys[i]];
      if (Array.isArray(v) && v.length && typeof v[0] === 'object') return v;
    }
    var vals = Object.keys(raw).map(function (k) { return raw[k]; });
    for (var j = 0; j < vals.length; j++) {
      if (Array.isArray(vals[j]) && vals[j].length && typeof vals[j][0] === 'object') return vals[j];
    }
    return null;
  }

  function _syllableItem(label, score) {
    var cls = score == null ? '' : score >= 80 ? 'sp-syllable--good' : score >= 60 ? 'sp-syllable--mid' : 'sp-syllable--low';
    var title = score == null ? 'Chưa có điểm âm tiết' : ('Điểm: ' + score);
    return { label: String(label || ''), cls: cls, title: title };
  }

  function _saveHistory(e) {
    var arr = _loadHistory();
    arr.unshift(e);
    arr = arr.slice(0, 8);
    try { localStorage.setItem(HIST_KEY, JSON.stringify(arr)); } catch (x) {}
  }

  function _loadHistory() {
    try { return JSON.parse(localStorage.getItem(HIST_KEY) || '[]'); } catch (e) { return []; }
  }

  function _renderHistory() {
    var wrap = $('spHistoryWrap'), list = $('spHistoryList');
    if (!wrap || !list) return;
    var arr = _loadHistory();
    if (!arr.length) { wrap.style.display = 'none'; return; }
    wrap.style.display = '';
    list.innerHTML = arr.map(function (h) {
      var d = new Date(h.ts);
      var dd = d.getDate() + '/' + (d.getMonth() + 1);
      return '<div class="sp-history-item"><span class="sp-history-score">' + _esc(h.overall) + '</span>' +
        '<span class="sp-history-body"><span class="sp-history-title">' + _esc(h.set) + '</span>' +
        '<span class="sp-history-meta">' + _esc(h.line) + ' · Phát âm ' + _esc(h.pron == null ? '—' : h.pron) + ' · ' + dd + '</span></span></div>';
    }).join('');
  }

  function _cleanupRecording() {
    _stopWave();
    try { if (_rec && _rec.state !== 'inactive') _rec.stop(); } catch (e) {}
    _stopStream();
    if (_url) try { URL.revokeObjectURL(_url); } catch (e) {}
    _blob = null; _url = ''; _chunks = [];
    _show($('spWave'), false);
    _show($('spStopBtn'), false);
    _show($('spRecordBtn'), true);
    _show($('spReplayBtn'), false);
    _show($('spScoreBtn'), false);
  }

  function _stopStream() {
    try { if (_stream) _stream.getTracks().forEach(function (t) { t.stop(); }); } catch (e) {}
    _stream = null;
    try { if (_audioCtx) _audioCtx.close(); } catch (e) {}
    _audioCtx = null; _analyser = null;
  }

  function _blobToB64(blob) {
    return new Promise(function (resolve) {
      try {
        var fr = new FileReader();
        fr.onload = function () {
          var s = String(fr.result || '');
          var c = s.indexOf(',');
          resolve(c >= 0 ? s.slice(c + 1) : '');
        };
        fr.onerror = function () { resolve(''); };
        fr.readAsDataURL(blob);
      } catch (e) { resolve(''); }
    });
  }

  async function _toWav16k(blob) {
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      var OAC = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      if (!AC || !OAC) return null;
      var arr = await blob.arrayBuffer();
      var tmp = new AC();
      var decoded = await tmp.decodeAudioData(arr);
      try { tmp.close(); } catch (e) {}
      var frames = Math.max(1, Math.ceil(decoded.duration * 16000));
      var off = new OAC(1, frames, 16000);
      var src = off.createBufferSource();
      src.buffer = decoded;
      src.connect(off.destination);
      src.start(0);
      var rendered = await off.startRendering();
      return _encodeWav(rendered.getChannelData(0), 16000);
    } catch (e) { return null; }
  }

  function _encodeWav(samples, rate) {
    var len = samples.length;
    var buf = new ArrayBuffer(44 + len * 2);
    var view = new DataView(buf);
    function ws(o, s) { for (var i = 0; i < s.length; i++) view.setUint8(o + i, s.charCodeAt(i)); }
    ws(0, 'RIFF'); view.setUint32(4, 36 + len * 2, true); ws(8, 'WAVE');
    ws(12, 'fmt '); view.setUint32(16, 16, true); view.setUint16(20, 1, true);
    view.setUint16(22, 1, true); view.setUint32(24, rate, true);
    view.setUint32(28, rate * 2, true); view.setUint16(32, 2, true); view.setUint16(34, 16, true);
    ws(36, 'data'); view.setUint32(40, len * 2, true);
    var o = 44;
    for (var i = 0; i < len; i++) {
      var s = Math.max(-1, Math.min(1, samples[i]));
      view.setInt16(o, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
      o += 2;
    }
    return new Blob([view], { type: 'audio/wav' });
  }

  return { init: init, openLesson: openLesson };
}());

if (typeof window !== 'undefined') window.Speaking = Speaking;
