// ═══════════════════════════════════════════════════════════════════════
// WRITING.JS — Writing Tutor (Phase S)
// Viết đoạn văn tiếng Trung → AI chấm (DeepSeek V4, Lane 2 qua ai-proxy).
// Task key `essay_grade` (8 credit). KHÔNG chứa API key — gọi qua AIClient.
//
// Pipeline: AIClient.call('essay_grade', { system, prompt })
//   → ai-proxy consume_ai_credit(8) → DeepSeek → annotate_ai_ledger
//
// Prompt yêu cầu AI trả JSON có cấu trúc → render đẹp; fallback raw text.
// ⚠️ System prompt CỐ Ý nhấn "kiểm tra lượng từ (量词)" để bù điểm yếu
//    个/部 của DeepSeek (xem ACTION_ITEMS Priority 1 — S).
// ═══════════════════════════════════════════════════════════════════════

var Writing = (function () {
  'use strict';

  var HIST_KEY = 'writing_history_v1';
  var _level = 1;
  var _busy = false;

  // Đề gợi ý theo cấp (đơn giản dần lên phức tạp)
  var TOPICS = {
    1: ['Hãy giới thiệu về bản thân bạn.', 'Viết về gia đình của bạn.', 'Hôm nay bạn làm gì?', 'Bạn thích ăn gì?'],
    2: ['Kể về một ngày của bạn.', 'Viết về sở thích của bạn.', 'Thời tiết hôm nay thế nào?', 'Bạn của bạn là người như thế nào?'],
    3: ['Kể về một chuyến đi đáng nhớ.', 'Vì sao bạn học tiếng Trung?', 'Mô tả nơi bạn đang sống.', 'Kế hoạch cuối tuần của bạn là gì?'],
    4: ['Trình bày quan điểm về việc học ngoại ngữ.', 'Mô tả công việc mơ ước của bạn.', 'Một thói quen tốt bạn muốn xây dựng.', 'So sánh cuộc sống ở thành phố và nông thôn.'],
    5: ['Bàn về ảnh hưởng của mạng xã hội tới giới trẻ.', 'Theo bạn, thành công là gì?', 'Vai trò của môi trường trong cuộc sống.', 'Một vấn đề xã hội bạn quan tâm.'],
    6: ['Phân tích tác động của trí tuệ nhân tạo tới việc làm.', 'Bàn luận: tiền bạc có mua được hạnh phúc không?', 'Toàn cầu hóa — cơ hội hay thách thức?', 'Quan điểm của bạn về cân bằng giữa truyền thống và hiện đại.']
  };
  var _topicIdx = 0;

  function _esc(s) {
    return (typeof escapeHtml === 'function') ? escapeHtml(s)
      : String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
          return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
        });
  }

  function _countHanzi(s) {
    var m = String(s || '').match(/[一-鿿]/g);
    return m ? m.length : 0;
  }

  function init() {
    _bind();
    _renderTopic();
    _renderHistory();
  }

  function _bind() {
    var pills = document.getElementById('wtLevelPills');
    if (pills) {
      pills.querySelectorAll('.wt-pill').forEach(function (b) {
        b.addEventListener('click', function () {
          pills.querySelectorAll('.wt-pill').forEach(function (x) { x.classList.remove('wt-pill--on'); });
          b.classList.add('wt-pill--on');
          _level = parseInt(b.getAttribute('data-level'), 10) || 1;
          _topicIdx = 0;
          _renderTopic();
        });
      });
    }

    var shuffle = document.getElementById('wtTopicShuffle');
    if (shuffle) shuffle.addEventListener('click', function () {
      var list = TOPICS[_level] || TOPICS[1];
      _topicIdx = (_topicIdx + 1) % list.length;
      _renderTopic();
    });

    var input = document.getElementById('wtInput');
    if (input) input.addEventListener('input', function () {
      var el = document.getElementById('wtCharCount');
      if (el) el.textContent = _countHanzi(input.value);
    });

    var btn = document.getElementById('wtGradeBtn');
    if (btn) btn.addEventListener('click', _grade);

    var copy = document.getElementById('wtCopyImproved');
    if (copy) copy.addEventListener('click', function () {
      var el = document.getElementById('wtImproved');
      if (el && navigator.clipboard) {
        navigator.clipboard.writeText(el.textContent || '').then(function () {
          if (typeof showToast === 'function') showToast('Đã sao chép bản viết lại ✓');
        });
      }
    });
  }

  function _renderTopic() {
    var list = TOPICS[_level] || TOPICS[1];
    var el = document.getElementById('wtTopicText');
    if (el) el.textContent = list[_topicIdx % list.length];
  }

  async function _grade() {
    if (_busy) return;
    var input = document.getElementById('wtInput');
    var essay = (input && input.value || '').trim();
    var hz = _countHanzi(essay);

    if (hz < 10) {
      if (typeof showToast === 'function') showToast('Hãy viết ít nhất 10 chữ Hán trước khi chấm nhé.');
      return;
    }
    if (hz > 600) {
      if (typeof showToast === 'function') showToast('Bài hơi dài (>600 chữ) — rút gọn lại để AI chấm kỹ hơn.');
      return;
    }

    var topic = (document.getElementById('wtTopicText') || {}).textContent || '';
    _setBusy(true);

    var system = [
      'Bạn là giáo viên tiếng Trung giàu kinh nghiệm, chấm bài viết cho người Việt học HSK.',
      'Người học đang ở trình độ HSK ' + _level + '. Hãy chấm bài viết tiếng Trung của họ một cách công tâm, khích lệ nhưng chính xác.',
      'ĐẶC BIỆT QUAN TRỌNG: kiểm tra kỹ LƯỢNG TỪ (量词) — ví dụ 个/部/本/张/位/条 — vì đây là lỗi người Việt hay mắc và dễ bị bỏ sót. Nếu lượng từ sai hoặc thiếu, BẮT BUỘC nêu trong phần lỗi.',
      'Cũng kiểm tra: trật tự từ, dùng từ sai ngữ cảnh, ngữ pháp (了/过/的/得/地, bổ ngữ), chính tả chữ Hán.',
      'Mọi giải thích viết bằng TIẾNG VIỆT. Phần "improved" (bản viết lại) viết bằng tiếng Trung, giữ đúng trình độ HSK ' + _level + ' (không dùng từ vượt cấp quá nhiều).',
      'QUAN TRỌNG: bản "improved" PHẢI giữ nguyên Ý và nội dung gốc của học viên — số lượng, sự việc, người/vật được nhắc tới phải y như bài gốc. CHỈ sửa lỗi (ngữ pháp/lượng từ/từ vựng/trật tự/chính tả); TUYỆT ĐỐI không đổi nghĩa, không thay con số, không thêm/bớt chi tiết. Ví dụ: nếu học viên viết "买了三个手机" (ba cái) thì bản sửa vẫn phải là ba cái (买了三部手机), KHÔNG được đổi thành một cái.',
      'CHỈ trả về JSON hợp lệ theo đúng schema sau, KHÔNG kèm markdown, KHÔNG kèm văn bản ngoài JSON:',
      '{',
      '  "score": <số nguyên 0-100>,',
      '  "level_estimate": "<ước lượng trình độ, vd: HSK 2>",',
      '  "summary": "<nhận xét tổng quan bằng tiếng Việt, 1-2 câu>",',
      '  "strengths": ["<điểm tốt 1>", "<điểm tốt 2>"],',
      '  "errors": [ { "original": "<câu/cụm sai>", "correction": "<sửa lại>", "type": "<lượng từ|ngữ pháp|từ vựng|cấu trúc|chính tả>", "explain": "<giải thích tiếng Việt>" } ],',
      '  "improved": "<đoạn văn viết lại hoàn chỉnh bằng tiếng Trung>",',
      '  "tips": ["<gợi ý học tiếp 1>", "<gợi ý học tiếp 2>"]',
      '}'
    ].join('\n');

    var prompt = 'Đề bài: ' + topic + '\n\nBài viết của học viên:\n"""\n' + essay + '\n"""';

    var r = await AIClient.call('essay_grade', { system: system, prompt: prompt, timeoutMs: 60000 });
    _setBusy(false);

    if (!r || !r.ok) {
      if (window.AIClient && AIClient.handleBlock) AIClient.handleBlock(r);
      return;
    }

    var parsed = _parse(r.text);
    _renderResult(parsed, r.text);
    _saveHistory({
      ts: Date.now(),
      level: _level,
      topic: topic,
      score: parsed ? parsed.score : null,
      excerpt: essay.slice(0, 40)
    });
    _renderHistory();
  }

  // Bóc JSON từ text (AI đôi khi bọc trong ```json ... ```)
  function _parse(text) {
    if (!text) return null;
    var s = String(text).trim();
    var fence = s.match(/```(?:json)?\s*([\s\S]*?)```/i);
    if (fence) s = fence[1].trim();
    var first = s.indexOf('{'), last = s.lastIndexOf('}');
    if (first >= 0 && last > first) s = s.slice(first, last + 1);
    try {
      var o = JSON.parse(s);
      if (typeof o === 'object' && o) return o;
    } catch (e) {}
    return null;
  }

  function _renderResult(o, raw) {
    var res = document.getElementById('wtResult');
    if (res) res.style.display = 'block';

    var rawBlock = document.getElementById('wtRawBlock');

    if (!o) {
      // Fallback: hiển thị raw, ẩn các block cấu trúc
      ['wtStrengthsBlock', 'wtErrorsBlock', 'wtImprovedBlock', 'wtTipsBlock'].forEach(function (id) {
        var el = document.getElementById(id); if (el) el.style.display = 'none';
      });
      document.querySelector('.wt-score-row') && (document.querySelector('.wt-score-row').style.display = 'none');
      if (rawBlock) {
        rawBlock.style.display = 'block';
        var rt = document.getElementById('wtRawText');
        if (rt) rt.textContent = raw || '';
      }
      _scrollTo(res);
      return;
    }

    if (rawBlock) rawBlock.style.display = 'none';
    var scoreRow = document.querySelector('.wt-score-row');
    if (scoreRow) scoreRow.style.display = 'flex';

    // Score
    var score = Math.max(0, Math.min(100, parseInt(o.score, 10) || 0));
    var numEl = document.getElementById('wtScoreNum');
    if (numEl) numEl.textContent = score;
    var circle = document.querySelector('.wt-score-circle');
    if (circle) {
      var col = score >= 80 ? 'var(--success,#10B981)' : score >= 55 ? 'var(--warning,#F59E0B)' : 'var(--danger,#DC2626)';
      circle.style.setProperty('--wt-ring', col);
      circle.style.setProperty('--wt-pct', (score / 100).toFixed(3));
    }
    var lvlEl = document.getElementById('wtScoreLevel');
    if (lvlEl) lvlEl.textContent = o.level_estimate || ('HSK ' + _level);
    var sumEl = document.getElementById('wtScoreSummary');
    if (sumEl) sumEl.textContent = o.summary || '';

    // Strengths
    _renderList('wtStrengths', 'wtStrengthsBlock', o.strengths);

    // Errors
    var errBlock = document.getElementById('wtErrorsBlock');
    var errWrap = document.getElementById('wtErrors');
    var errs = Array.isArray(o.errors) ? o.errors : [];
    if (errWrap) {
      if (!errs.length) {
        errWrap.innerHTML = '<p class="wt-noerr">Không phát hiện lỗi đáng kể — làm tốt lắm! 🎉</p>';
      } else {
        errWrap.innerHTML = errs.map(function (e) {
          var type = _esc(e.type || 'lỗi');
          var cls = /lượng từ|量词/i.test(type) ? ' wt-etype--liang' : '';
          return '<div class="wt-err-item">' +
            '<span class="wt-etype' + cls + '">' + type + '</span>' +
            '<div class="wt-err-fix"><span class="wt-err-orig">' + _esc(e.original || '') + '</span>' +
            '<span class="wt-err-arrow">→</span>' +
            '<span class="wt-err-corr">' + _esc(e.correction || '') + '</span></div>' +
            (e.explain ? '<p class="wt-err-explain">' + _esc(e.explain) + '</p>' : '') +
            '</div>';
        }).join('');
      }
    }
    if (errBlock) errBlock.style.display = 'block';

    // Improved
    var impBlock = document.getElementById('wtImprovedBlock');
    var imp = document.getElementById('wtImproved');
    if (imp && o.improved) { imp.textContent = o.improved; impBlock.style.display = 'block'; }
    else if (impBlock) impBlock.style.display = 'none';

    // Tips
    _renderList('wtTips', 'wtTipsBlock', o.tips);

    _scrollTo(res);
  }

  function _renderList(listId, blockId, arr) {
    var block = document.getElementById(blockId);
    var ul = document.getElementById(listId);
    var items = Array.isArray(arr) ? arr.filter(Boolean) : [];
    if (!items.length) { if (block) block.style.display = 'none'; return; }
    if (block) block.style.display = 'block';
    if (ul) ul.innerHTML = items.map(function (t) { return '<li>' + _esc(t) + '</li>'; }).join('');
  }

  function _scrollTo(el) {
    if (el && el.scrollIntoView) try { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {}
  }

  function _setBusy(b) {
    _busy = b;
    var btn = document.getElementById('wtGradeBtn');
    var load = document.getElementById('wtLoading');
    if (btn) { btn.disabled = b; btn.textContent = b ? 'Đang chấm…' : 'Chấm bài'; }
    if (load) load.style.display = b ? 'flex' : 'none';
    if (b) { var r = document.getElementById('wtResult'); if (r) r.style.display = 'none'; }
  }

  // ── Lịch sử (localStorage, chỉ metadata — không lưu nội dung đầy đủ) ──
  function _saveHistory(entry) {
    var arr = _loadHistory();
    arr.unshift(entry);
    arr = arr.slice(0, 10);
    try { localStorage.setItem(HIST_KEY, JSON.stringify(arr)); } catch (e) {}
  }
  function _loadHistory() {
    try { return JSON.parse(localStorage.getItem(HIST_KEY) || '[]'); } catch (e) { return []; }
  }
  function _renderHistory() {
    var wrap = document.getElementById('wtHistoryWrap');
    var list = document.getElementById('wtHistoryList');
    var arr = _loadHistory();
    if (!wrap || !list) return;
    if (!arr.length) { wrap.style.display = 'none'; return; }
    wrap.style.display = 'block';
    list.innerHTML = arr.map(function (h) {
      var d = new Date(h.ts);
      var dd = d.getDate() + '/' + (d.getMonth() + 1);
      var sc = (h.score == null) ? '—' : h.score;
      var scCls = (h.score == null) ? '' : (h.score >= 80 ? ' wt-h-good' : h.score >= 55 ? ' wt-h-mid' : ' wt-h-low');
      return '<div class="wt-h-item">' +
        '<span class="wt-h-score' + scCls + '">' + sc + '</span>' +
        '<div class="wt-h-body"><span class="wt-h-topic">' + _esc(h.topic || '—') + '</span>' +
        '<span class="wt-h-meta">HSK ' + (h.level || '?') + ' · ' + dd + '</span></div>' +
        '</div>';
    }).join('');
  }

  return { init: init };
}());

if (typeof window !== 'undefined') window.Writing = Writing;
