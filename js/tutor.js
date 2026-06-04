// ═══════════════════════════════════════════════════════════════════════
// TUTOR.JS — Gia sư AI chat (Phase R.2)
//
// Pipeline: AIClient.call('tutor_chat', { messages })
//   → ai-proxy inject TUTOR_SYS server-side → LANE2_FLASH (DeepSeek V4 Flash)
//   → consume_ai_credit(1) ATOMIC → multi-turn response
//
// Bảo mật: user input escape qua escapeHtml trước khi innerHTML.
// Pro-gate: gửi tin nhắn đầu → Monetization.gate('Gia sư AI').
// Lịch sử: tutor_chat_history_v1 (chỉ text, KHÔNG audio/binary).
// Giới hạn: gửi server chỉ 8 lượt gần nhất (16 messages).
// ═══════════════════════════════════════════════════════════════════════

var Tutor = (function () {
  'use strict';

  var HIST_KEY   = 'tutor_chat_history_v1';
  var MAX_SERVER = 16; // 8 lượt × 2 (user+assistant) gửi lên server
  var _history   = [];
  var _busy      = false;

  function init() {
    _loadHistory();
    _renderMessages();
    _updateSuggestions();
    _bind();
    // Pre-warm isPro cache
    if (window.Monetization && Monetization.isPro) Monetization.isPro();
  }

  // ── History ────────────────────────────────────────────────────────
  function _loadHistory() {
    try {
      var raw = localStorage.getItem(HIST_KEY);
      _history = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(_history)) _history = [];
    } catch (e) { _history = []; }
  }

  function _saveHistory() {
    try { localStorage.setItem(HIST_KEY, JSON.stringify(_history)); } catch (e) {}
  }

  // ── Escape ─────────────────────────────────────────────────────────
  function _esc(s) {
    return (typeof escapeHtml === 'function') ? escapeHtml(s)
      : String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
          return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
        });
  }

  // Render markdown đơn giản cho response AI (chỉ dùng cho assistant bubble)
  function _mdToHtml(escaped) {
    return escaped
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') // **bold**
      .replace(/\n/g, '<br>');
  }

  // ── Render ─────────────────────────────────────────────────────────
  function _renderMessages() {
    var el = document.getElementById('tutorMessages');
    if (!el) return;

    if (_history.length === 0) {
      el.innerHTML =
        '<div class="tutor-msg tutor-msg--ai" id="tutorWelcome">' +
        '<div class="tutor-msg-bubble">' +
        'Xin chào! Mình là gia sư tiếng Trung của bạn 🐉<br>' +
        'Hãy hỏi mình về ngữ pháp, từ vựng, cách dùng từ, hay bất cứ điều gì về tiếng Trung nhé!' +
        '</div></div>';
      return;
    }

    var html = '';
    _history.forEach(function (msg) {
      var cls  = msg.role === 'user' ? 'tutor-msg--user' : 'tutor-msg--ai';
      var safe = msg.role === 'assistant'
        ? _mdToHtml(_esc(msg.content))
        : _esc(msg.content).replace(/\n/g, '<br>');
      html += '<div class="tutor-msg ' + cls + '">' +
              '<div class="tutor-msg-bubble">' + safe + '</div></div>';
    });
    el.innerHTML = html;
    _scrollBottom();
  }

  function _appendMsg(role, content) {
    var el = document.getElementById('tutorMessages');
    if (!el) return;
    // Xoá welcome nếu còn
    var w = document.getElementById('tutorWelcome');
    if (w) w.remove();

    var cls   = role === 'user' ? 'tutor-msg--user' : 'tutor-msg--ai';
    var safe  = role === 'assistant' ? _mdToHtml(_esc(content)) : _esc(content).replace(/\n/g, '<br>');
    var div   = document.createElement('div');
    div.className = 'tutor-msg ' + cls;
    div.innerHTML = '<div class="tutor-msg-bubble">' + safe + '</div>';
    el.appendChild(div);
    _scrollBottom();
  }

  function _scrollBottom() {
    var el = document.getElementById('tutorMessages');
    if (el) requestAnimationFrame(function () { el.scrollTop = el.scrollHeight; });
  }

  function _updateSuggestions() {
    var el = document.getElementById('tutorSuggestions');
    if (el) el.style.display = _history.length === 0 ? 'flex' : 'none';
  }

  function _setTyping(on) {
    var el = document.getElementById('tutorTyping');
    if (el) el.style.display = on ? 'flex' : 'none';
    if (on) _scrollBottom();
  }

  function _setBusy(on) {
    _busy = on;
    var btn = document.getElementById('tutorSendBtn');
    var inp = document.getElementById('tutorInput');
    if (btn) btn.disabled = on;
    if (inp) inp.disabled = on;
    _setTyping(on);
  }

  // ── Send ───────────────────────────────────────────────────────────
  async function _send(text) {
    if (_busy) return;
    text = (text || '').trim();
    if (!text) return;

    // Pro-gate: mỗi lần gửi
    if (window.Monetization && Monetization.isPro) {
      var pro = await Monetization.isPro();
      if (!pro) { Monetization.showGate('Gia sư AI'); return; }
    }

    // Xoá input
    var inp = document.getElementById('tutorInput');
    if (inp) { inp.value = ''; inp.style.height = ''; }

    // Thêm user msg vào history + UI
    _history.push({ role: 'user', content: text });
    _saveHistory();
    _appendMsg('user', text);
    _updateSuggestions();

    _setBusy(true);

    // Chỉ gửi 8 lượt gần nhất lên server
    var msgs = _history.slice(-MAX_SERVER);

    var r = await AIClient.call('tutor_chat', { messages: msgs, timeoutMs: 60000 });
    _setBusy(false);

    if (!r || !r.ok) {
      if (window.AIClient && AIClient.handleBlock) AIClient.handleBlock(r);
      return;
    }

    var reply = (r.text || '').trim() || '(Không có phản hồi)';
    _history.push({ role: 'assistant', content: reply });
    _saveHistory();
    _appendMsg('assistant', reply);
  }

  // ── Clear ──────────────────────────────────────────────────────────
  function _clear() {
    _history = [];
    _saveHistory();
    _renderMessages();
    _updateSuggestions();
  }

  // ── Bind events ────────────────────────────────────────────────────
  function _bind() {
    // Send button
    var sendBtn = document.getElementById('tutorSendBtn');
    if (sendBtn) sendBtn.addEventListener('click', function () {
      var inp = document.getElementById('tutorInput');
      _send(inp && inp.value);
    });

    // Ctrl+Enter to send
    var inp = document.getElementById('tutorInput');
    if (inp) {
      inp.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          _send(inp.value);
        }
      });
      // Auto-resize textarea
      inp.addEventListener('input', function () {
        inp.style.height = 'auto';
        inp.style.height = Math.min(inp.scrollHeight, 120) + 'px';
      });
    }

    // Clear button
    var clearBtn = document.getElementById('tutorClearBtn');
    if (clearBtn) clearBtn.addEventListener('click', function () {
      if (_history.length === 0) return;
      if (typeof confirm === 'function' && !confirm('Xoá toàn bộ hội thoại này?')) return;
      _clear();
    });

    // Suggestion chips
    document.querySelectorAll('.tutor-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        _send(chip.getAttribute('data-msg') || chip.textContent.trim());
      });
    });
  }

  return { init: init };
}());

if (typeof window !== 'undefined') window.Tutor = Tutor;
