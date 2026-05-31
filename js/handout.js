// ═══════════════════════════════════════════════════════
// HANDOUT.JS — Trang giáo trình bài học (Lesson Handout, Phase P12)
// "Đọc trên app → tự chép vào vở". Auto-derive từ COURSE_DATA.
// Entry: Handout.init() (router initMap 'handout'). Mở: Handout.open(id).
// Field tùy chọn lesson.handout = { story_brief, vocab_highlight[], mascot_tips[], copy_guide[] }
// — nếu có thì override phần auto-derive; không có vẫn chạy cho mọi bài.
// ═══════════════════════════════════════════════════════
var Handout = {
  _pendingId: null,
  lessonId:   null,

  init: function() {
    var urlId = null;
    try { urlId = new URLSearchParams(location.search).get('id'); } catch (e) {}
    var id = Handout._pendingId || (urlId ? parseInt(urlId, 10) : null);
    Handout._pendingId = null;
    if (!id) id = Handout._nextLessonId();
    Handout.render(id);
  },

  open: function(id) {
    Handout._pendingId = id;
    if (typeof Router !== 'undefined' && Router.navigateTo) Router.navigateTo('handout');
  },

  _getEl: function() {
    return document.getElementById('handoutPage') || document.getElementById('content');
  },

  _nextLessonId: function() {
    if (typeof COURSE_DATA === 'undefined') return 1;
    var prog = {};
    try { prog = JSON.parse(localStorage.getItem('hsk_course_progress') || '{}'); } catch (e) {}
    var ids = Object.keys(COURSE_DATA).map(Number).sort(function(a, b) { return a - b; });
    for (var i = 0; i < ids.length; i++) { var p = prog[ids[i]]; if (!p || !p.completed) return ids[i]; }
    return ids[0] || 1;
  },

  _level: function(l, id) { return l.level || (id <= 30 ? 1 : 2); },

  _speaker: function(sp) {
    var m = { mai: 'Mai', laoli: '李老师 (Thầy Lý)', xiaomei: '小美 (Tiểu Mỹ)', narrator: 'Người dẫn', 'class': 'Cả lớp' };
    return m[sp] || sp;
  },

  render: function(id) {
    var el = Handout._getEl();
    if (!el) return;
    var l = (typeof COURSE_DATA !== 'undefined') ? COURSE_DATA[id] : null;
    var esc = (typeof escapeHtml === 'function') ? escapeHtml : function(s) { return String(s == null ? '' : s); };

    if (!l) {
      el.innerHTML = '<div class="ho-doc"><p style="padding:32px;text-align:center;color:#6B7280">' +
        'Chưa có trang chép bài cho bài ' + esc(id) + '.</p>' +
        '<p style="text-align:center"><button class="ho-back" onclick="Router.navigateTo(\'course\')">← Về lộ trình</button></p></div>';
      return;
    }
    Handout.lessonId = id;

    var lvl    = Handout._level(l, id);
    var vocab  = l.vocab || [];
    var dlg    = (l.steps || []).filter(function(s) { return s.type === 'dialogue' && s.speaker !== 'narrator' && s.text; });
    var ids    = Object.keys(COURSE_DATA).map(Number).sort(function(a, b) { return a - b; });
    var pos    = ids.indexOf(id);
    var nextId = (pos >= 0 && pos < ids.length - 1) ? ids[pos + 1] : null;
    var hd     = l.handout || {};
    var hlSet  = {}; (hd.vocab_highlight || []).forEach(function(h) { hlSet[h] = 1; });
    var doneMap = {};
    try { doneMap = JSON.parse(localStorage.getItem('hsk_handout_completed') || '{}'); } catch (e) {}
    var isDone = !!doneMap[id];

    // ── Vocab rows ──
    var vrows = vocab.map(function(w, i) {
      var hl = hlSet[w.h] ? ' class="hl"' : '';
      return '<tr' + hl + '><td>' + (i + 1) + '</td>' +
        '<td class="hz">' + esc(w.h) + '</td>' +
        '<td class="py">' + esc(w.p || '') + '</td>' +
        '<td>' + esc(w.v || '') + '</td></tr>';
    }).join('');

    // ── Dialogue ──
    var dhtml = dlg.map(function(s) {
      var cls = (s.speaker === 'mai') ? ' mai' : '';
      return '<div class="ho-dl' + cls + '">' +
        '<div class="ho-spk">' + esc(Handout._speaker(s.speaker)) + '</div>' +
        '<div>' +
          '<div class="ho-zh">' + esc(s.text) + '</div>' +
          (s.pinyin ? '<div class="ho-py">' + esc(s.pinyin) + '</div>' : '') +
          (s.meaning ? '<div class="ho-vi">' + esc(s.meaning) + '</div>' : '') +
        '</div></div>';
    }).join('');

    // ── Objectives (auto) ──
    var objs = [
      'Hiểu trọn hội thoại Bài ' + id,
      'Nhớ & dùng được ' + vocab.length + ' từ mới',
      'Đọc to toàn bài không vấp',
      'Tự đặt câu với từ trong bài'
    ];
    var objHtml = objs.map(function(o) { return '<li>' + esc(o) + '</li>'; }).join('');

    // ── Copy guide (handout.copy_guide override, else generic) ──
    var guide = (hd.copy_guide && hd.copy_guide.length) ? hd.copy_guide : [
      '<strong>1. Bảng từ vựng</strong> — chép cả ' + vocab.length + ' từ theo cột <em>Hán tự · Pinyin · Nghĩa</em>. Mỗi từ chép lặp lại <strong>3–5 lần</strong> để nhớ mặt chữ.',
      '<strong>2. Câu mẫu trong bài</strong> — chọn 3 câu hay nhất từ hội thoại, chép lại rồi <strong>TỰ đặt thêm 2–3 câu</strong> bằng cách thay từ khác.',
      '<strong>3. Hội thoại</strong> — chép cả đoạn bằng Hán tự (không pinyin), sau đó che bản gốc và đọc lại.',
      '<strong>4. Mini-task sáng tạo</strong> — viết đoạn 3–4 câu về tình huống tương tự, dùng ít nhất <strong>5 từ</strong> trong bài.'
    ];
    var guideHtml = guide.map(function(g) {
      // guide từ field handout = nội dung biên tập sẵn (an toàn); cho phép HTML định dạng
      return '<li><span class="ho-check"></span><div>' + g + '</div></li>';
    }).join('');

    // ── Mascot tips (chỉ render nếu handout cấp) ──
    var tipsHtml = (hd.mascot_tips || []).map(function(t) {
      return '<div class="ho-tip"><div class="ho-tip-ic">🐲</div>' +
        '<div class="ho-tip-tx"><strong>Bé Rồng mách nhỏ:</strong> ' + esc(t.content || t) + '</div></div>';
    }).join('');

    var storyBrief = hd.story_brief || l.context || '';
    var doneBtn = isDone
      ? '<button class="done" onclick="Handout.markDone()">✓ Đã chép xong</button>'
      : '<button class="primary" onclick="Handout.markDone()">📔 Đã chép xong</button>';

    el.innerHTML =
      '<div class="ho-toolbar">' +
        '<button onclick="Handout.copyVocab()">📋 Copy bảng từ</button>' +
        '<button onclick="window.print()">🖨️ In / PDF</button>' +
        doneBtn +
      '</div>' +
      '<div class="ho-doc">' +
        '<div class="ho-breadcrumb">' +
          '<button class="ho-back" onclick="Router.navigateTo(\'course\')">🐲 Hành trình Mai</button>' +
          ' › HSK ' + lvl + ' › Bài ' + id +
        '</div>' +
        '<div class="ho-header">' +
          '<div class="ho-header-icon">📖</div>' +
          '<div>' +
            '<h1><span class="ho-no">Bài ' + id + ' ·</span> ' + esc(l.title || '') + '</h1>' +
            (l.context ? '<div class="ho-subtitle">' + esc(l.context) + '</div>' : '') +
            '<div class="ho-meta">' +
              '<span>📊 HSK ' + lvl + '</span>' +
              '<span>📝 ' + vocab.length + ' từ</span>' +
              '<span>💬 ' + dlg.length + ' câu hội thoại</span>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div class="ho-objectives">' +
          '<div class="ho-objectives-title">🎯 Sau bài này bạn sẽ làm được</div>' +
          '<ul>' + objHtml + '</ul>' +
        '</div>' +

        (storyBrief ? (
        '<div class="ho-section">' +
          '<h2 class="ho-section-h"><span class="ho-num">1</span> Tình huống</h2>' +
          '<div class="ho-story">' + esc(storyBrief) + '</div>' +
        '</div>') : '') +

        (vocab.length ? (
        '<div class="ho-section">' +
          '<h2 class="ho-section-h"><span class="ho-num">2</span> Từ vựng' +
            (Object.keys(hlSet).length ? '<small style="font-size:12px;color:#888;font-weight:400;margin-left:auto">🔥 = trọng tâm</small>' : '') +
          '</h2>' +
          '<div class="ho-vocab-wrap"><table class="ho-vocab" id="hoVocabTable">' +
            '<thead><tr><th>#</th><th>Hán tự</th><th>Pinyin</th><th>Nghĩa Việt</th></tr></thead>' +
            '<tbody>' + vrows + '</tbody>' +
          '</table></div>' +
        '</div>') : '') +

        tipsHtml +

        (dlg.length ? (
        '<div class="ho-section">' +
          '<h2 class="ho-section-h"><span class="ho-num">3</span> Hội thoại mẫu</h2>' +
          '<div class="ho-dialog">' + dhtml + '</div>' +
        '</div>') : '') +

        '<div class="ho-section">' +
          '<h2 class="ho-section-h"><span class="ho-num">4</span> Mở vở ra, hôm nay chép gì?</h2>' +
          '<div class="ho-guide">' +
            '<div class="ho-guide-title">📔 Bé Rồng gợi ý ' + guide.length + ' việc cần chép vào vở:</div>' +
            '<ul>' + guideHtml + '</ul>' +
          '</div>' +
        '</div>' +

        '<div class="ho-footer">' +
          '<span>🐲 Hanzi Genz · Hành trình Mai · Bài ' + id + '/' + ids.length + '</span>' +
          (nextId ? '<button class="ho-next" onclick="Handout.open(' + nextId + ')">Bài tiếp theo →</button>' : '<span>Hết chương 🎉</span>') +
        '</div>' +
      '</div>' +
      '<div class="ho-toast" id="hoToast"></div>';

    try { history.replaceState({ page: 'handout', id: id }, '', '/handout?id=' + id); } catch (e) {}
  },

  // ── Copy bảng từ → clipboard TSV ──
  copyVocab: function() {
    var tbl = document.getElementById('hoVocabTable');
    if (!tbl) return;
    var rows = tbl.querySelectorAll('tbody tr');
    var text = 'STT\tHán tự\tPinyin\tNghĩa Việt\n';
    rows.forEach(function(r) {
      var cells = r.querySelectorAll('td');
      text += Array.prototype.map.call(cells, function(c) { return c.textContent.trim().replace(/\s*🔥$/, ''); }).join('\t') + '\n';
    });
    var ok = function() { Handout._toast('✅ Đã copy bảng từ vào clipboard'); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(ok).catch(function() { Handout._toast('Không copy được — thử chọn thủ công'); });
    } else { Handout._toast('Trình duyệt không hỗ trợ copy'); }
  },

  // ── Đánh dấu đã chép xong (+XP) ──
  markDone: function() {
    var id = Handout.lessonId;
    var map = {};
    try { map = JSON.parse(localStorage.getItem('hsk_handout_completed') || '{}'); } catch (e) {}
    var already = !!map[id];
    map[id] = true;
    try { localStorage.setItem('hsk_handout_completed', JSON.stringify(map)); } catch (e) {}
    if (!already && typeof Gamification !== 'undefined' && Gamification.addXP) {
      try { Gamification.addXP(15, 'Chép bài ' + id); } catch (e) {}
    }
    Handout._toast(already ? '✓ Đã đánh dấu chép bài này' : '🎉 +15 XP · Giỏi lắm, chăm chép bài!');
    // đổi nút sang trạng thái done
    var btn = document.querySelector('.ho-toolbar button.primary');
    if (btn) { btn.className = 'done'; btn.textContent = '✓ Đã chép xong'; }
  },

  _toast: function(msg) {
    var t = document.getElementById('hoToast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(Handout._toastT);
    Handout._toastT = setTimeout(function() { t.classList.remove('show'); }, 1900);
  }
};

window.Handout = Handout;
