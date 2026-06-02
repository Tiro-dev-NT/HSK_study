// ═══════════════════════════════════════════════════════════════════════
// HSKK.JS — HSKK Speaking Exam (Phase Y) · tier SƠ CẤP
//
// Flow thi thật: nghe đề (1 lần) → chuẩn bị → ghi âm (MediaRecorder) → câu tiếp
//   (không tua lại). Hết bài → chấm từng câu qua Edge `speech-proxy`
//   (SpeechSuper Chinese HSKK API; mock khi chưa có key) → màn kết quả.
//
// ⚠️ KHÔNG chứa API key — gọi speech-proxy qua caller mỏng (đính JWT).
//    Mỗi câu = 1 AI Credit (consume ATOMIC server-side trong speech-proxy).
// Pro-gate: HSKK là tính năng Pro (Monetization.gate).
// KHÔNG thưởng credit / KHÔNG quest lặp cho feature AI (guardrail).
// ═══════════════════════════════════════════════════════════════════════

var HSKK = (function () {
  'use strict';

  // Tính URL lúc GỌI (không phải lúc load) — hskk.js có thể load trước supabase.js
  // (nơi khai báo SB_URL). Tính ở module-load sẽ ra URL tương đối → POST nhầm về
  // hanzigenz.com → 405. Lazy resolve đảm bảo SB_URL đã sẵn sàng khi user thi.
  function _speechFn() {
    return (typeof SB_URL !== 'undefined' && SB_URL ? SB_URL : '') + '/functions/v1/speech-proxy';
  }
  var HIST_KEY  = 'hskk_history_v1';

  // Cấu hình từng loại câu: thời gian chuẩn bị / trả lời (giây), coreType chấm.
  // coreType: SpeechSuper "Chinese spontaneous speech" = speak.eval.pro.cn
  // (chấm nói tự do kiểu HSKK: phát âm/trôi chảy, KHÔNG cần refText). Dùng chung
  // cho cả 3 phần. (Trước đây dùng cn.sent.score/cn.pred.score → endpoint 404.)
  var QTYPE = {
    repeat:  { prep: 3,  ans: 10, coreType: 'speak.eval.pro.cn', useRef: false, part: '第一部分', partVi: 'Nghe & lặp lại', desc: 'Nghe câu rồi lặp lại y nguyên.' },
    respond: { prep: 4,  ans: 15, coreType: 'speak.eval.pro.cn', useRef: false, part: '第二部分', partVi: 'Nghe & trả lời', desc: 'Nghe câu hỏi rồi trả lời ngắn gọn.' },
    open:    { prep: 12, ans: 60, coreType: 'speak.eval.pro.cn', useRef: false, part: '第三部分', partVi: 'Trả lời câu hỏi', desc: 'Đọc đề, chuẩn bị rồi nói một đoạn ngắn.' }
  };

  var _exam = null;       // [{ q, type, cfg }]
  var _idx = 0;
  var _answers = [];      // [{ blob, url, type, q, score }]
  var _stream = null;     // MediaStream mic
  var _rec = null;        // MediaRecorder
  var _chunks = [];
  var _mime = '';
  var _audioCtx = null, _analyser = null, _waveRAF = 0;
  var _totalTimer = null, _phaseTimer = null;
  var _totalLeft = 0;
  var _running = false;

  // ── Helpers ────────────────────────────────────────────────────────────
  function $(id) { return document.getElementById(id); }
  function _esc(s) { return (typeof escapeHtml === 'function') ? escapeHtml(s) : String(s == null ? '' : s); }
  function _toast(m) { if (typeof showToast === 'function') showToast(m); }
  function _show(el, on) { if (el) el.style.display = on ? '' : 'none'; }
  function _fmt(sec) {
    sec = Math.max(0, Math.round(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ':' + String(s).padStart(2, '0');
  }

  // Phát đề bằng TTS (exam BẮT BUỘC phát, không phụ thuộc setting autoTTS)
  function _speak(text) {
    try {
      var synth = window.speechSynthesis;
      if (!synth) return;
      synth.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN'; u.rate = 0.85;
      var v = (window.Dictionary && Dictionary._pickZhVoice && Dictionary._pickZhVoice());
      if (v) u.voice = v;
      setTimeout(function () { try { synth.speak(u); } catch (e) {} }, 60);
    } catch (e) {}
  }

  async function _token() {
    if (!window.SB) return null;
    try {
      var res = await SB.auth.getSession();
      var s = res && res.data && res.data.session;
      return (s && s.access_token) || null;
    } catch (e) { return null; }
  }

  // ═══════════ INIT ═══════════
  function init() {
    _renderHistory();
    var startBtn = $('hskkStartBtn');
    if (startBtn) startBtn.onclick = _onStart;
    var mic = $('hskkMicCheck');
    if (mic) mic.onclick = _micCheck;
    var retry = $('hskkRetryBtn');
    if (retry) retry.onclick = function () { _resetToIntro(); };
    var quit = $('hskkQuitBtn');
    if (quit) quit.onclick = function () {
      if (confirm('Thoát bài thi? Tiến độ câu hiện tại sẽ không được lưu.')) _abort();
    };
    // Warm Pro cache để biết hiện nút đúng (không chặn render)
    if (window.Monetization && Monetization.isPro) Monetization.isPro();
  }

  // ── Kiểm tra micro ───────────────────────────────────────────────────
  async function _micCheck() {
    var st = $('hskkMicStatus');
    if (st) { st.textContent = 'Đang xin quyền…'; st.className = 'hskk-mic-status'; }
    try {
      var s = await navigator.mediaDevices.getUserMedia({ audio: true });
      s.getTracks().forEach(function (t) { t.stop(); });
      if (st) { st.textContent = '✓ Micro hoạt động tốt'; st.className = 'hskk-mic-status hskk-mic-ok'; }
    } catch (e) {
      if (st) { st.textContent = '✕ Không truy cập được micro — kiểm tra quyền trình duyệt.'; st.className = 'hskk-mic-status hskk-mic-err'; }
    }
  }

  // ═══════════ BẮT ĐẦU THI ═══════════
  async function _onStart() {
    // 1. Đăng nhập
    var token = await _token();
    if (!token) { _toast('Đăng nhập để dùng HSKK Thi thử nói nhé.'); return; }

    // 2. Pro-gate
    if (window.Monetization && Monetization.isPro) {
      var pro = await Monetization.isPro();
      if (!pro) { Monetization.showGate('HSKK Thi thử nói'); return; }
    }

    // 3. Mic
    try {
      _stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (e) {
      _toast('Cần quyền micro để thi. Hãy bật micro rồi thử lại.');
      return;
    }
    _pickMime();
    _setupAnalyser();

    // 4. Dựng đề (rút ngẫu nhiên theo plan)
    _exam = _buildExam();
    _idx = 0;
    _answers = [];
    _running = true;

    _show($('hskkIntro'), false);
    _show($('hskkResult'), false);
    _show($('hskkExam'), true);

    // 5. Đồng hồ tổng
    _totalLeft = (HSKK_SOCAP.meta.durationSec || 17 * 60);
    _updateTotal();
    _totalTimer = setInterval(function () {
      _totalLeft--;
      _updateTotal();
      if (_totalLeft <= 0) { clearInterval(_totalTimer); _finish(); }
    }, 1000);

    _enterQuestion(0);
  }

  function _buildExam() {
    var plan = HSKK_SOCAP.meta.plan || { repeat: 15, respond: 10, open: 2 };
    var list = [];
    list = list.concat(_pick(HSKK_SOCAP.part1, plan.repeat).map(function (q) { return { q: q, type: 'repeat' }; }));
    list = list.concat(_pick(HSKK_SOCAP.part2, plan.respond).map(function (q) { return { q: q, type: 'respond' }; }));
    list = list.concat(_pick(HSKK_SOCAP.part3, plan.open).map(function (q) { return { q: q, type: 'open' }; }));
    return list;
  }
  function _pick(arr, n) {
    var a = (arr || []).slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a.slice(0, Math.min(n, a.length));
  }

  function _pickMime() {
    var cands = ['audio/webm;codecs=opus', 'audio/webm', 'audio/ogg;codecs=opus', 'audio/mp4'];
    _mime = '';
    if (window.MediaRecorder && MediaRecorder.isTypeSupported) {
      for (var i = 0; i < cands.length; i++) { if (MediaRecorder.isTypeSupported(cands[i])) { _mime = cands[i]; break; } }
    }
  }
  function _audioType() {
    if (_mime.indexOf('ogg') >= 0) return 'ogg';
    if (_mime.indexOf('mp4') >= 0) return 'mp4';
    return 'webm';
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

  // ═══════════ MỘT CÂU ═══════════
  function _enterQuestion(i) {
    if (i >= _exam.length) { _finish(); return; }
    _idx = i;
    var item = _exam[i];
    var cfg = QTYPE[item.type];
    var q = item.q;

    // Header
    $('hskkPartLabel').textContent = cfg.part;
    $('hskkQNum').textContent = 'Câu ' + (i + 1) + '/' + _exam.length;
    $('hskkPartDesc').textContent = cfg.partVi + ' · ' + cfg.desc;
    var pct = (i / _exam.length) * 100;
    $('hskkProgressFill').style.width = pct + '%';

    // Reset vùng câu hỏi
    var showText = (item.type === 'open'); // phần 3 in đề; phần 1/2 chỉ nghe
    $('hskkQText').textContent = showText ? q.zh : '';
    $('hskkQText').style.display = showText ? '' : 'none';
    $('hskkQPy').textContent = showText ? (q.py || '') : '';
    $('hskkQPy').style.display = showText ? '' : 'none';
    $('hskkQVi').textContent = '';
    $('hskkQVi').style.display = 'none';
    $('hskkQHint').textContent = (showText && q.hint) ? ('💡 ' + q.hint) : '';
    $('hskkQHint').style.display = (showText && q.hint) ? '' : 'none';

    // Controls reset
    _show($('hskkRecBtn'), false);
    _show($('hskkStopBtn'), false);
    _show($('hskkReplayBtn'), false);
    _show($('hskkNextBtn'), false);
    _show($('hskkWave'), false);

    // Nút nghe đề (phát lại đề lần nữa CHỈ trong lúc chuẩn bị — sau khi ghi âm thì khóa)
    var playBtn = $('hskkPlayBtn');
    playBtn.disabled = false;
    playBtn.onclick = function () { _speak(q.zh); };

    // Tự phát đề 1 lần, rồi vào pha chuẩn bị
    _speak(q.zh);
    _phase('Chuẩn bị…', cfg.prep, function () { _startRecording(item, cfg); });
  }

  // Đếm ngược 1 pha (chuẩn bị / trả lời). onEnd gọi khi hết giờ.
  function _phase(label, sec, onEnd) {
    clearInterval(_phaseTimer);
    var left = sec;
    var lblEl = $('hskkPhaseLabel'), tEl = $('hskkPhaseTimer');
    _show($('hskkPhase'), true);
    if (lblEl) lblEl.textContent = label;
    if (tEl) tEl.textContent = left + 's';
    _phaseTimer = setInterval(function () {
      left--;
      if (tEl) tEl.textContent = Math.max(0, left) + 's';
      if (left <= 0) { clearInterval(_phaseTimer); if (onEnd) onEnd(); }
    }, 1000);
  }

  function _startRecording(item, cfg) {
    if (!_running) return;
    $('hskkPlayBtn').disabled = true; // hết chuẩn bị → khóa nghe đề
    _chunks = [];
    try {
      _rec = _mime ? new MediaRecorder(_stream, { mimeType: _mime }) : new MediaRecorder(_stream);
    } catch (e) {
      _rec = new MediaRecorder(_stream);
    }
    _rec.ondataavailable = function (ev) { if (ev.data && ev.data.size) _chunks.push(ev.data); };
    _rec.onstop = function () { _onRecStop(item); };
    _rec.start();

    _show($('hskkWave'), true);
    _startWave();
    _show($('hskkStopBtn'), true);
    $('hskkStopBtn').onclick = function () { _stopRecording(); };

    // Pha trả lời — auto dừng khi hết giờ
    _phase('🔴 Đang ghi âm…', cfg.ans, function () { _stopRecording(); });
  }

  function _stopRecording() {
    clearInterval(_phaseTimer);
    _stopWave();
    _show($('hskkStopBtn'), false);
    _show($('hskkWave'), false);
    try { if (_rec && _rec.state !== 'inactive') _rec.stop(); } catch (e) {}
  }

  function _onRecStop(item) {
    var blob = new Blob(_chunks, { type: _mime || 'audio/webm' });
    var url = '';
    try { url = URL.createObjectURL(blob); } catch (e) {}
    _answers[_idx] = { blob: blob, url: url, type: item.type, q: item.q, score: null };

    // Lộ đáp án/đề để học viên tự đối chiếu
    var q = item.q;
    $('hskkQText').textContent = q.zh; $('hskkQText').style.display = '';
    $('hskkQPy').textContent = q.py || ''; $('hskkQPy').style.display = '';
    $('hskkQVi').textContent = q.vi || ''; $('hskkQVi').style.display = q.vi ? '' : 'none';

    _show($('hskkPhase'), false);

    // Nghe lại + câu tiếp
    var replay = $('hskkReplayBtn');
    _show(replay, !!url);
    replay.onclick = function () { try { new Audio(url).play(); } catch (e) {} };

    var next = $('hskkNextBtn');
    var last = (_idx >= _exam.length - 1);
    next.textContent = last ? 'Nộp bài →' : 'Câu tiếp →';
    _show(next, true);
    next.onclick = function () {
      if (last) _finish();
      else _enterQuestion(_idx + 1);
    };
  }

  // ── Waveform (analyser → cao thấp 10 thanh) ─────────────────────────────
  function _startWave() {
    var bars = $('hskkWave').querySelectorAll('span');
    if (!_analyser) { // fallback: nhấp nháy đều
      var t = 0;
      _waveRAF = setInterval(function () {
        t++;
        bars.forEach(function (b, k) { b.style.height = (8 + Math.abs(Math.sin((t + k) / 3)) * 22) + 'px'; });
      }, 80);
      return;
    }
    var data = new Uint8Array(_analyser.frequencyBinCount);
    function loop() {
      _analyser.getByteFrequencyData(data);
      var step = Math.floor(data.length / bars.length) || 1;
      bars.forEach(function (b, k) {
        var v = data[k * step] || 0;
        b.style.height = (6 + (v / 255) * 30) + 'px';
      });
      _waveRAF = requestAnimationFrame(loop);
    }
    loop();
  }
  function _stopWave() {
    if (typeof _waveRAF === 'number') { cancelAnimationFrame(_waveRAF); clearInterval(_waveRAF); }
    _waveRAF = 0;
  }

  // ═══════════ NỘP & CHẤM ═══════════
  function _updateTotal() {
    var el = $('hskkTotalTimer');
    if (el) {
      el.textContent = _fmt(_totalLeft);
      el.classList.toggle('hskk-timer--low', _totalLeft <= 60);
    }
  }

  async function _finish() {
    if (!_running) return;
    _running = false;
    clearInterval(_totalTimer);
    clearInterval(_phaseTimer);
    _stopRecording();
    _stopWave();

    _show($('hskkExam'), false);
    _show($('hskkGrading'), true);

    var scored = 0, n = 0;
    for (var i = 0; i < _exam.length; i++) {
      var ans = _answers[i];
      n++;
      $('hskkGradingText').textContent = 'Đang chấm câu ' + n + '/' + _exam.length + '…';
      if (!ans || !ans.blob || ans.blob.size < 200) continue; // bỏ câu không nói
      var cfg = QTYPE[ans.type];
      var b64 = await _blobToB64(ans.blob);
      if (!b64) continue;
      var r = await _scoreAudio({
        task: 'hskk_score',
        qtype: ans.type,
        coreType: cfg.coreType,
        refText: cfg.useRef ? ans.q.zh : '',
        audio: b64,
        audioType: _audioType()
      });
      if (r && r.ok && r.score) { ans.score = r.score; scored++; }
      else if (r && !r.ok) {
        // Hết credit / chặn mềm → dừng chấm tiếp, vẫn hiện phần đã chấm
        if (r.reason === 'insufficient_credit' || r.reason === 'daily_cap_exceeded' || r.reason === 'not_logged_in') {
          if (window.AIClient && AIClient.handleBlock) AIClient.handleBlock(r);
          break;
        }
        // score_unavailable (đã hoàn credit) → bỏ qua câu này, chấm tiếp
      }
    }

    _stopStream();
    _show($('hskkGrading'), false);
    _renderResult(scored);
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
          var c = s.indexOf(','); resolve(c >= 0 ? s.slice(c + 1) : '');
        };
        fr.onerror = function () { resolve(''); };
        fr.readAsDataURL(blob);
      } catch (e) { resolve(''); }
    });
  }

  // Caller mỏng tới speech-proxy (đính JWT, KHÔNG key)
  async function _scoreAudio(payload) {
    var token = await _token();
    if (!token) return { ok: false, reason: 'not_logged_in' };
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
      // Đồng bộ badge credit
      if (typeof data.balance === 'number' && window.AICredit) {
        AICredit._lastBalance = data.balance;
        try { localStorage.setItem(AICredit._CACHE_KEY, String(data.balance)); } catch (e) {}
        if (AICredit.updateUI) AICredit.updateUI(data.balance);
      }
      return data;
    } catch (err) {
      clearTimeout(timer);
      return { ok: false, reason: err.name === 'AbortError' ? 'timeout' : 'network_error' };
    }
  }

  // ═══════════ KẾT QUẢ ═══════════
  function _avg(nums) {
    var v = nums.filter(function (x) { return typeof x === 'number'; });
    if (!v.length) return null;
    return Math.round(v.reduce(function (a, b) { return a + b; }, 0) / v.length);
  }

  function _renderResult(scored) {
    _show($('hskkResult'), true);

    var overalls = _answers.map(function (a) { return a && a.score ? a.score.overall : null; });
    var pron = _answers.map(function (a) { return a && a.score ? a.score.pronunciation : null; });
    var flu  = _answers.map(function (a) { return a && a.score ? a.score.fluency : null; });
    var overall = _avg(overalls);

    // Vòng điểm
    var num = $('hskkScoreNum');
    if (num) num.textContent = (overall == null ? '—' : overall);
    var circle = $('hskkScoreCircle');
    if (circle) {
      var col = overall == null ? 'var(--text2)' : overall >= 80 ? 'var(--success)' : overall >= 60 ? 'var(--warning)' : 'var(--danger)';
      circle.style.setProperty('--hskk-ring', col);
      circle.style.setProperty('--hskk-pct', overall == null ? 0 : (overall / 100).toFixed(3));
    }
    var verdict = $('hskkScoreVerdict'), sub = $('hskkScoreSub');
    if (overall == null) {
      if (verdict) verdict.textContent = 'Chưa chấm được câu nào';
      if (sub) sub.textContent = scored === 0 ? 'Có thể bạn chưa nói, hoặc hết AI Credit. Thử lại nhé.' : '';
    } else {
      if (verdict) verdict.textContent = overall >= 80 ? 'Rất tốt! 🎉' : overall >= 60 ? 'Đạt — tiếp tục luyện 👍' : 'Cần luyện thêm 💪';
      if (sub) sub.textContent = 'Đã chấm ' + scored + '/' + _exam.length + ' câu · điểm đạt HSKK thường ~60/100.';
    }

    // Breakdown phát âm / trôi chảy
    var bd = $('hskkBreakdown');
    if (bd) {
      var rows = [
        { k: 'Phát âm', v: _avg(pron) },
        { k: 'Trôi chảy', v: _avg(flu) }
      ];
      bd.innerHTML = rows.map(function (r) {
        var v = r.v == null ? '—' : r.v;
        var w = r.v == null ? 0 : r.v;
        return '<div class="hskk-bd-row"><span class="hskk-bd-k">' + _esc(r.k) + '</span>' +
          '<span class="hskk-bd-bar"><span class="hskk-bd-fill" style="width:' + w + '%"></span></span>' +
          '<span class="hskk-bd-v">' + v + '</span></div>';
      }).join('');
    }

    // Điểm theo phần
    var parts = [
      { label: '第一部分 · Nghe & lặp lại', type: 'repeat' },
      { label: '第二部分 · Nghe & trả lời', type: 'respond' },
      { label: '第三部分 · Trả lời câu hỏi', type: 'open' }
    ];
    var ps = $('hskkPartScores');
    if (ps) {
      ps.innerHTML = parts.map(function (p) {
        var sc = _avg(_answers.filter(function (a) { return a && a.type === p.type; })
          .map(function (a) { return a.score ? a.score.overall : null; }));
        return '<div class="hskk-part-row"><span>' + _esc(p.label) + '</span><b>' + (sc == null ? '—' : sc) + '</b></div>';
      }).join('');
    }

    // Chi tiết từng câu
    var dl = $('hskkDetailList');
    if (dl) {
      dl.innerHTML = _answers.map(function (a, i) {
        if (!a) return '';
        var cfg = QTYPE[a.type];
        var sc = a.score;
        var ov = sc ? sc.overall : null;
        var cls = ov == null ? '' : ov >= 80 ? ' hskk-d-good' : ov >= 60 ? ' hskk-d-mid' : ' hskk-d-low';
        var tip = _tip(a);
        var audio = a.url ? '<button class="hskk-d-replay" data-url="' + _esc(a.url) + '">▶ Nghe lại</button>' : '';
        return '<div class="hskk-d-item">' +
          '<div class="hskk-d-head"><span class="hskk-d-num">' + (i + 1) + '</span>' +
          '<span class="hskk-d-type">' + _esc(cfg.partVi) + '</span>' +
          '<span class="hskk-d-score' + cls + '">' + (ov == null ? '—' : ov) + '</span></div>' +
          '<div class="hskk-d-zh">' + _esc(a.q.zh) + '</div>' +
          '<div class="hskk-d-py">' + _esc(a.q.py || '') + '</div>' +
          (tip ? '<div class="hskk-d-tip">' + _esc(tip) + '</div>' : '') +
          audio +
          '</div>';
      }).join('');
      dl.querySelectorAll('.hskk-d-replay').forEach(function (b) {
        b.onclick = function () { try { new Audio(b.getAttribute('data-url')).play(); } catch (e) {} };
      });
    }

    // Lưu lịch sử (chỉ metadata)
    if (overall != null) {
      _saveHistory({
        ts: Date.now(), level: 'so-cap', overall: overall,
        pron: _avg(pron), flu: _avg(flu), scored: scored, total: _exam.length
      });
    }

    var res = $('hskkResult');
    if (res && res.scrollIntoView) try { res.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {}
  }

  function _tip(a) {
    var sc = a.score;
    if (!sc) return 'Chưa chấm được câu này.';
    if (sc._mock) return 'Điểm thử nghiệm (chưa kết nối SpeechSuper).';
    if (typeof sc.fluency === 'number' && sc.fluency < 60) return 'Hãy nói liền mạch hơn, hạn chế ngắt quãng giữa câu.';
    if (typeof sc.pronunciation === 'number' && sc.pronunciation < 60) return 'Chú ý thanh điệu và phát âm rõ từng âm tiết.';
    if (typeof sc.overall === 'number' && sc.overall >= 85) return 'Phát âm tốt — giữ phong độ nhé!';
    return 'Luyện đọc to câu mẫu vài lần để mượt hơn.';
  }

  // ═══════════ THOÁT / RESET ═══════════
  function _abort() {
    _running = false;
    clearInterval(_totalTimer);
    clearInterval(_phaseTimer);
    _stopRecording();
    _stopWave();
    _stopStream();
    _resetToIntro();
  }

  function _resetToIntro() {
    _revokeUrls();
    _show($('hskkExam'), false);
    _show($('hskkGrading'), false);
    _show($('hskkResult'), false);
    _show($('hskkIntro'), true);
    _renderHistory();
    try { window.scrollTo(0, 0); } catch (e) {}
  }

  function _revokeUrls() {
    (_answers || []).forEach(function (a) { if (a && a.url) try { URL.revokeObjectURL(a.url); } catch (e) {} });
  }

  // ── Lịch sử ─────────────────────────────────────────────────────────
  function _saveHistory(e) {
    var arr = _loadHistory(); arr.unshift(e); arr = arr.slice(0, 8);
    try { localStorage.setItem(HIST_KEY, JSON.stringify(arr)); } catch (x) {}
  }
  function _loadHistory() {
    try { return JSON.parse(localStorage.getItem(HIST_KEY) || '[]'); } catch (e) { return []; }
  }
  function _renderHistory() {
    var wrap = $('hskkHistoryWrap'), list = $('hskkHistoryList');
    if (!wrap || !list) return;
    var arr = _loadHistory();
    if (!arr.length) { wrap.style.display = 'none'; return; }
    wrap.style.display = '';
    list.innerHTML = arr.map(function (h) {
      var d = new Date(h.ts); var dd = d.getDate() + '/' + (d.getMonth() + 1);
      var cls = h.overall >= 80 ? ' hskk-h-good' : h.overall >= 60 ? ' hskk-h-mid' : ' hskk-h-low';
      return '<div class="hskk-h-item"><span class="hskk-h-score' + cls + '">' + h.overall + '</span>' +
        '<div class="hskk-h-body"><span class="hskk-h-lv">HSKK Sơ cấp</span>' +
        '<span class="hskk-h-meta">Phát âm ' + (h.pron == null ? '—' : h.pron) + ' · Trôi chảy ' + (h.flu == null ? '—' : h.flu) + ' · ' + dd + '</span></div></div>';
    }).join('');
  }

  return { init: init };
}());

if (typeof window !== 'undefined') window.HSKK = HSKK;
