// ═══════════════════════════════════════════════════════════
// learn-method.js — Phase Q: Learning Method Hub
// Page /learn-method — 3 sections:
//   1. SRS principles + interval visual
//   2. Daily tip (rotates by day-of-year)
//   3. Weakness analysis from hsk_srs localStorage
// ═══════════════════════════════════════════════════════════

var LearnMethod = (function() {

  var TIPS = [
    'Học ngay sau khi thức dậy — não bộ dễ ghi nhớ nhất khi vừa nghỉ ngơi xong.',
    'Nói to từ mới khi học — kết hợp thính giác + thị giác tăng tỷ lệ ghi nhớ đáng kể.',
    'Viết từ mới ra giấy ít nhất 3 lần — hành động cơ thể giúp củng cố bộ nhớ cơ.',
    'Không học quá 20 từ mới một buổi — não người chỉ xử lý tốt khoảng 15-20 item mới.',
    'Ôn SRS trước bữa sáng — biến việc ôn tập thành thói quen gắn với hành động sẵn có.',
    'Khi không nhớ được, đừng lật đáp án ngay — cố nhớ thêm 5 giây. Sự "vật lộn" đó chính là học.',
    'Tạo câu ví dụ với từ mới — bối cảnh giúp não gắn từ vào bộ nhớ dài hạn hiệu quả hơn 40%.',
    'Luyện nghe nhạc tiếng Trung khi làm việc khác — passive input tích lũy nhận diện âm điệu.',
    'Khi học từ mới, hãy liên kết nó với thứ gì đó quen thuộc với bạn — câu chuyện hài hước càng tốt.',
    'Đừng học nhiều từ cùng ý nghĩa trong cùng một buổi — não dễ lẫn lộn (interference effect).',
    'Xem phim Trung Quốc có phụ đề Việt — ban đầu xem để giải trí, lâu dần quen với ngữ điệu tự nhiên.',
    'Streak quan trọng hơn khối lượng — 5 phút mỗi ngày tốt hơn 2 tiếng một lần mỗi tuần.',
    'Học từ theo chủ đề (đồ ăn, màu sắc, gia đình) giúp tạo nhóm ký ức liên kết với nhau.',
    'Đọc to pinyin khi học từ mới — thanh điệu là một phần của từ, không phải phụ kiện.',
    'Sau khi học xong một buổi, nghỉ 10 phút không dùng điện thoại — cho não consolidate ký ức.',
    'Dùng từ mới trong tin nhắn hàng ngày (dù chỉ với chính mình) — production > recognition.',
    'Học các bộ thủ phổ biến (亻氵木火土...) giúp đoán nghĩa của hàng trăm từ chưa học.',
    'Khi ôn flashcard, hãy ưu tiên các từ đánh dấu "khó" trước — đừng bỏ qua chúng.',
    'Viết nhật ký bằng tiếng Trung 3-5 câu mỗi tối — luyện output ngay từ trình độ thấp.',
    'Nghỉ học 1 ngày/tuần không phải lười — recovery giúp não consolidate kiến thức đã học.',
    'Đặt target số từ học xong trước khi ngủ, không phải số giờ ngồi học — đo output.',
    'Khi gặp từ khó nhớ, vẽ hoặc tưởng tượng một hình ảnh liên quan — visual mnemonic rất mạnh.',
    'Luyện đọc thành tiếng từ các câu ví dụ trong từ điển — quen với câu trúc câu tự nhiên.',
    'Học từ phản nghĩa cùng lúc (大-小, 好-坏) — não ghi nhớ theo cặp contrast tốt hơn.',
    'Thiết lập giờ học cố định mỗi ngày — habit loop (cue → routine → reward) hiệu quả hơn "học khi có thời gian".',
    'Sau 100 từ đầu tiên, hãy thử đọc một bài HSK 1 bất kỳ — trải nghiệm thành công nhỏ tăng động lực lớn.',
    'Xem lại các từ đã học thành thạo định kỳ — ngay cả từ "biết rồi" cũng cần refresh sau 3-6 tháng.',
    'Đặt câu hỏi cho bản thân khi học: "Tôi có thể dùng từ này trong tình huống nào?" — áp dụng ngay.',
    'Không cần phát âm hoàn hảo từ đầu — hiểu được thanh điệu chính xác là ưu tiên trước nhất.',
    'Ghi lại 3 từ mà bạn đã dùng trong ngày hôm nay — hành động nhỏ này xây dựng habit reflection mạnh.'
  ];

  // Interval steps for visual: 1d, 3d, 7d, 21d, 60d
  var IV_STEPS = [
    { label: '1n', width: 8 },
    { label: '3n', width: 14 },
    { label: '7n', width: 22 },
    { label: '21n', width: 38 },
    { label: '60n', width: 60 }
  ];

  function _dayOfYear() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    return Math.floor(diff / 86400000);
  }

  function _buildIntervalVisual() {
    var el = document.getElementById('lmIntervalVis');
    if (!el) return;
    var html = '';
    IV_STEPS.forEach(function(step, i) {
      if (i > 0) {
        html += '<div class="lm-iv-line" style="width:' + (step.width * 1.2) + 'px"></div>';
      }
      html += '<div class="lm-iv-dot"></div>';
      html += '<span class="lm-iv-label">' + step.label + '</span>';
    });
    el.innerHTML = html;
  }

  function _renderTip() {
    var idx = _dayOfYear() % TIPS.length;
    var tipNum = idx + 1;
    var dayEl = document.getElementById('lmTipDay');
    var textEl = document.getElementById('lmTipText');
    if (dayEl) dayEl.textContent = 'Mẹo #' + tipNum;
    if (textEl) textEl.textContent = TIPS[idx];
  }

  function _analyzeWeakness() {
    var listEl = document.getElementById('lmWeakList');
    var actionsEl = document.getElementById('lmWeakActions');
    if (!listEl) return;

    var srsRaw = localStorage.getItem('hsk_srs_v3');
    if (!srsRaw) return;

    var srs;
    try { srs = JSON.parse(srsRaw); } catch(e) { return; }

    var now = Date.now();
    var entries = [];

    // srs shape: { "hanzi": { due_date, interval, ease_factor, repetitions } }
    Object.keys(srs).forEach(function(hanzi) {
      var card = srs[hanzi];
      if (!card || !card.due_date) return;
      var due = new Date(card.due_date).getTime();
      var overdueDays = Math.floor((now - due) / 86400000);
      if (overdueDays < 0) return; // not yet due
      entries.push({
        hanzi: hanzi,
        overdueDays: overdueDays,
        interval: card.interval || 1,
        repetitions: card.repetitions || 0
      });
    });

    if (entries.length === 0) return;

    // Sort: most overdue first, then lowest interval (weakest retention)
    entries.sort(function(a, b) {
      if (b.overdueDays !== a.overdueDays) return b.overdueDays - a.overdueDays;
      return a.interval - b.interval;
    });

    var top10 = entries.slice(0, 10);

    // Resolve hanzi to word data
    var html = '';
    top10.forEach(function(entry, idx) {
      var word = _findWord(entry.hanzi);
      var pinyin = word ? (word.p || '') : '';
      var meaning = word ? (word.v || word.e || '') : '';
      var overdueLabel = entry.overdueDays === 0
        ? 'Đến hạn hôm nay'
        : 'Quá hạn ' + entry.overdueDays + ' ngày';
      var intervalLabel = 'Interval: ' + entry.interval + 'n';

      html += '<div class="lm-weak-row">';
      html += '<span class="lm-weak-rank">' + (idx + 1) + '</span>';
      html += '<span class="lm-weak-hanzi">' + entry.hanzi + '</span>';
      html += '<div class="lm-weak-info">';
      if (pinyin) html += '<div class="lm-weak-pinyin">' + pinyin + '</div>';
      if (meaning) html += '<div class="lm-weak-meaning">' + meaning + '</div>';
      html += '</div>';
      html += '<div class="lm-weak-meta">';
      html += '<div class="lm-weak-overdue">' + overdueLabel + '</div>';
      html += '<div class="lm-weak-interval">' + intervalLabel + '</div>';
      html += '</div>';
      html += '</div>';
    });

    listEl.innerHTML = html;
    if (actionsEl) actionsEl.style.display = '';
    LearnMethod._weakWords = top10.map(function(e) {
      var w = _findWord(e.hanzi);
      return { h: e.hanzi, p: w ? (w.p || '') : '', v: w ? (w.v || '') : '', e: w ? (w.e || '') : '', level: w ? (w.level || 0) : 0 };
    });
  }

  function _findWord(hanzi) {
    // Search through all available HSK 3.0 data arrays
    var sources = [];
    if (window.HSK3_DATA) {
      for (var l = 1; l <= 9; l++) {
        if (HSK3_DATA[l]) sources.push(HSK3_DATA[l]);
      }
    }
    for (var i = 0; i < sources.length; i++) {
      var arr = sources[i];
      for (var j = 0; j < arr.length; j++) {
        if (arr[j].h === hanzi) return arr[j];
      }
    }
    return null;
  }

  return {
    _weakWords: [],

    setup: function() {
      _buildIntervalVisual();
      _renderTip();
      _analyzeWeakness();
    },

    startWeakSession: function() {
      if (!LearnMethod._weakWords.length) return;
      // Navigate to quiz with weak-word context via URL hash or session storage
      sessionStorage.setItem('hsk_quiz_override_words', JSON.stringify(LearnMethod._weakWords));
      if (typeof Router !== 'undefined') Router.navigateTo('quiz');
    }
  };

})();
