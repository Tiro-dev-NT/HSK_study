// ═══════════════════════════════════════════════════════
// VOCAB-IMPORT.JS — Import từ vựng qua AI prompt + JSON (Phase 2.2)
// ═══════════════════════════════════════════════════════

var VocabImport = (function() {

  var _validWords = [];  // words that passed validation

  // ── Prompt template ──────────────────────────────────
  var PROMPT_TEMPLATE = 'Bạn là chuyên gia ngôn ngữ học Trung-Việt. Nhiệm vụ: chuyển\ndanh sách từ tiếng Trung dưới đây thành JSON ĐÚNG TUYỆT ĐỐI schema.\n\n═══════════════════════════════════════════════\nDANH SÁCH ĐẦU VÀO\n═══════════════════════════════════════════════\n{{USER_LIST}}\n\n═══════════════════════════════════════════════\nSCHEMA BẮT BUỘC\n═══════════════════════════════════════════════\n{\n  "h":     <Hán Giản thể>,\n  "p":     <Pinyin CÓ DẤU — nǐ hǎo, KHÔNG ni3hao3>,\n  "v":     <Nghĩa Việt ≤8 từ>,\n  "e":     <Nghĩa Anh ngắn>,\n  "t":     <greetings|family|work|food|travel|emotions|business|tech|general...>,\n  "level": <HSK 1-7, integer>,\n  "ex": {\n    "zh": <Câu Hán dùng từ này>,\n    "py": <Pinyin của câu, có dấu>,\n    "vi": <Dịch Việt>,\n    "en": <Dịch Anh>\n  }\n}\n\n═══════════════════════════════════════════════\nQUY TẮC TUYỆT ĐỐI\n═══════════════════════════════════════════════\n1. Output PHẢI là JSON array, parse được bằng JSON.parse().\n2. KHÔNG bọc trong ```json``` hay markdown nào.\n3. Ký tự đầu phải là `[`, cuối là `]`. Không thêm prose.\n4. KHÔNG trailing comma.\n5. Field name chính xác: h, p, v, e, t, level, ex.\n   KHÔNG dùng: pinyin, meaning, english, examples, topic, hsk_level.\n6. Trong ex: dùng `py` (KHÔNG phải `p`).\n7. `ex` là OBJECT đơn, KHÔNG phải array.\n8. Pinyin BẮT BUỘC dấu: nǐ hǎo ✓, ni3 hao3 ✗.\n9. Hán Giản thể, KHÔNG Phồn thể.\n10. Mỗi từ input → 1 object. KHÔNG bỏ sót.\n\n═══════════════════════════════════════════════\nVÍ DỤ ĐÚNG\n═══════════════════════════════════════════════\n[\n  {\n    "h": "你好", "p": "nǐ hǎo", "v": "Xin chào", "e": "Hello",\n    "t": "greetings", "level": 1,\n    "ex": {\n      "zh": "你好，我叫小明。",\n      "py": "Nǐ hǎo, wǒ jiào Xiǎo Míng.",\n      "vi": "Xin chào, tôi tên Tiểu Minh.",\n      "en": "Hello, my name is Xiao Ming."\n    }\n  }\n]\n\nBẮT ĐẦU OUTPUT (chỉ JSON array):';

  // ── Defensive parser ─────────────────────────────────
  function parseAIResponse(rawText) {
    var text = rawText.trim()
      .replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
    var first = text.indexOf('['), last = text.lastIndexOf(']');
    if (first >= 0 && last > first) text = text.slice(first, last + 1);
    text = text.replace(/,(\s*[}\]])/g, '$1');
    try { return { ok: true, data: JSON.parse(text) }; }
    catch (e) { return { ok: false, error: e.message }; }
  }

  // ── Field alias normalizer ───────────────────────────
  var FIELD_ALIAS = {
    hanzi:'h', chinese:'h', pinyin:'p', meaning:'v', vietnamese:'v',
    english:'e', topic:'t', category:'t', hsk_level:'level', hsk:'level',
    examples:'ex', example:'ex'
  };

  function normalizeWord(w) {
    var out = {};
    for (var k in w) out[FIELD_ALIAS[k] || k] = w[k];
    if (Array.isArray(out.ex)) out.ex = out.ex[0];
    if (out.ex && out.ex.p && !out.ex.py) { out.ex.py = out.ex.p; delete out.ex.p; }
    return out;
  }

  // ── Validator ────────────────────────────────────────
  var CJK_RE = /[\u4e00-\u9fff]/;
  var TONE_RE = /[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/;

  function validateWord(w) {
    var errors = [];
    var warnings = [];

    if (!w.h || !CJK_RE.test(w.h)) errors.push('h: thiếu hoặc không có ký tự CJK');
    if (!w.p) errors.push('p: thiếu pinyin');
    else if (!TONE_RE.test(w.p)) warnings.push('p: có thể thiếu dấu thanh');
    if (!w.v) errors.push('v: thiếu nghĩa Việt');
    else if (w.v.length > 50) warnings.push('v: dài hơn 50 ký tự');
    if (!w.level || w.level < 1 || w.level > 7) errors.push('level: phải 1-7');
    else w.level = parseInt(w.level);
    if (w.ex && Array.isArray(w.ex)) errors.push('ex: phải là object, không phải array');

    var isDup = AppState.srsData && AppState.srsData[w.h];

    return {
      word: w,
      errors: errors,
      warnings: warnings,
      isDup: !!isDup,
      ok: errors.length === 0
    };
  }

  // ── Stepper navigation ──────────────────────────────
  function _goToStep(n) {
    for (var i = 1; i <= 3; i++) {
      var panel = document.getElementById('viStep' + i);
      var step = document.querySelector('.vi-step[data-step="' + i + '"]');
      if (!panel || !step) continue;
      if (i === n) {
        panel.classList.remove('vi-hidden');
        step.classList.add('vi-step-active');
        step.classList.remove('vi-step-done');
      } else if (i < n) {
        panel.classList.add('vi-hidden');
        step.classList.remove('vi-step-active');
        step.classList.add('vi-step-done');
      } else {
        panel.classList.add('vi-hidden');
        step.classList.remove('vi-step-active');
        step.classList.remove('vi-step-done');
      }
    }
  }

  // ── Generate prompt from user input ──────────────────
  function _generatePrompt() {
    var input = document.getElementById('viInputWords');
    if (!input) return;
    var raw = input.value.trim();
    if (!raw) { _toast('Vui lòng nhập ít nhất 1 từ', 'error'); return; }

    var lines = raw.split('\n').filter(function(l) { return l.trim(); });
    if (lines.length === 0) { _toast('Vui lòng nhập ít nhất 1 từ', 'error'); return; }

    var userList = lines.map(function(l, i) { return (i + 1) + '. ' + l.trim(); }).join('\n');
    var prompt = PROMPT_TEMPLATE.replace('{{USER_LIST}}', userList);

    var output = document.getElementById('viPromptOutput');
    if (output) output.value = prompt;
    _goToStep(2);
  }

  // ── Copy prompt to clipboard ─────────────────────────
  function _copyPrompt() {
    var output = document.getElementById('viPromptOutput');
    if (!output) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(output.value).then(function() {
        _toast('Đã copy prompt!', 'success');
      }).catch(function() {
        _fallbackCopy(output);
      });
    } else {
      _fallbackCopy(output);
    }
  }

  function _fallbackCopy(textarea) {
    textarea.select();
    try {
      document.execCommand('copy');
      _toast('Đã copy prompt!', 'success');
    } catch(e) {
      _toast('Không thể copy. Hãy chọn thủ công.', 'error');
    }
  }

  // ── Validate & preview ───────────────────────────────
  function _validateAndPreview() {
    var jsonInput = document.getElementById('viJsonInput');
    if (!jsonInput || !jsonInput.value.trim()) {
      _toast('Vui lòng paste JSON từ AI', 'error'); return;
    }

    var result = parseAIResponse(jsonInput.value);
    if (!result.ok) {
      _toast('JSON không hợp lệ: ' + result.error, 'error'); return;
    }
    if (!Array.isArray(result.data) || result.data.length === 0) {
      _toast('JSON phải là array có ít nhất 1 từ', 'error'); return;
    }

    // Normalize + validate each word
    var items = result.data.map(function(raw) {
      var w = normalizeWord(raw);
      return validateWord(w);
    });

    _validWords = items.filter(function(it) { return it.ok && !it.isDup; });

    // Render preview
    var previewDiv = document.getElementById('viPreview');
    var listDiv = document.getElementById('viPreviewList');
    var summaryDiv = document.getElementById('viPreviewSummary');
    var importBtn = document.getElementById('viImportBtn');
    if (!previewDiv || !listDiv) return;

    var okCount = _validWords.length;
    var errCount = items.filter(function(it) { return !it.ok; }).length;
    var dupCount = items.filter(function(it) { return it.ok && it.isDup; }).length;

    if (summaryDiv) {
      summaryDiv.innerHTML = '✅ ' + okCount + ' OK · ❌ ' + errCount + ' lỗi · ⏭️ ' + dupCount + ' trùng';
    }

    var html = '';
    items.forEach(function(it) {
      var icon = it.ok ? (it.isDup ? '⏭️' : '✅') : '❌';
      var extra = '';
      if (it.errors.length) extra += '<div class="vi-word-error">' + escapeHtml(it.errors.join('; ')) + '</div>';
      if (it.warnings.length) extra += '<div class="vi-word-warn">⚠ ' + escapeHtml(it.warnings.join('; ')) + '</div>';
      if (it.isDup) extra += '<div class="vi-word-skip">Đã có trong kho từ — bỏ qua</div>';

      html += '<div class="vi-preview-item">' +
        '<span class="vi-status">' + icon + '</span>' +
        '<div class="vi-word-info">' +
          '<span class="vi-word-hanzi">' + escapeHtml(it.word.h || '?') + '</span>' +
          '<span class="vi-word-pinyin">' + escapeHtml(it.word.p || '') + '</span>' +
          '<div class="vi-word-meaning">' + escapeHtml(it.word.v || '') + ' / ' + escapeHtml(it.word.e || '') + '</div>' +
          extra +
        '</div>' +
      '</div>';
    });
    listDiv.innerHTML = html;

    if (importBtn) {
      importBtn.disabled = okCount === 0;
      importBtn.textContent = '📥 Import (' + okCount + ' từ)';
    }

    previewDiv.classList.remove('vi-hidden');
  }

  // ── Import words into SRS ────────────────────────────
  function _importWords() {
    if (_validWords.length === 0) return;

    var count = 0;
    var today = new Date().toISOString().slice(0, 10);

    _validWords.forEach(function(it) {
      var w = it.word;
      if (AppState.srsData[w.h]) return; // double-check

      AppState.srsData[w.h] = {
        interval: 0,
        ease: 2.5,
        dueDate: today,
        lastReview: null,
        reviewCount: 0,
        tags: ['imported'],
        level: w.level || 0,
        p: w.p || '',
        v: w.v || '',
        e: w.e || '',
        t: w.t || 'general',
        ex: w.ex || null,
        source: 'import',
        addedAt: today
      };
      count++;
    });

    if (count > 0) {
      AppState.saveSRSData();
      // Trigger sync if available
      if (typeof Sync !== 'undefined' && typeof Auth !== 'undefined' && Auth.user) {
        Sync.pushAll().catch(function(e) { console.error('[VocabImport] sync error:', e); });
      }
    }

    _toast('Đã import ' + count + ' từ!', 'success');
    _validWords = [];

    // Redirect to my-vocab after short delay
    setTimeout(function() {
      if (typeof Router !== 'undefined') Router.navigateTo('my-vocab');
    }, 1200);
  }

  // ── Toast helper ─────────────────────────────────────
  function _toast(msg, type) {
    // Try to use app's existing toast if available
    if (typeof showToast === 'function') { showToast(msg, type); return; }

    var el = document.createElement('div');
    el.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);padding:12px 24px;border-radius:8px;color:#fff;font-size:14px;z-index:9999;animation:fadeIn .3s;' +
      (type === 'error' ? 'background:#ef4444;' : 'background:#22c55e;');
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function() { el.remove(); }, 3000);
  }

  // ── Setup (called by Router) ─────────────────────────
  function setup() {
    _validWords = [];
    _goToStep(1);

    var genBtn = document.getElementById('viGenPrompt');
    var copyBtn = document.getElementById('viCopyPrompt');
    var backBtn1 = document.getElementById('viBackStep1');
    var goStep3 = document.getElementById('viGoStep3');
    var validateBtn = document.getElementById('viValidate');
    var backBtn2 = document.getElementById('viBackStep2');
    var importBtn = document.getElementById('viImportBtn');

    if (genBtn) genBtn.onclick = _generatePrompt;
    if (copyBtn) copyBtn.onclick = _copyPrompt;
    if (backBtn1) backBtn1.onclick = function() { _goToStep(1); };
    if (goStep3) goStep3.onclick = function() { _goToStep(3); };
    if (validateBtn) validateBtn.onclick = _validateAndPreview;
    if (backBtn2) backBtn2.onclick = function() { _goToStep(2); };
    if (importBtn) importBtn.onclick = _importWords;
  }

  return { setup: setup };
}());
