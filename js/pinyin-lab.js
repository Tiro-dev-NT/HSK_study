// ═══════════════════════════════════════════════════════
// PINYIN LAB — HSK 0-1 pronunciation on-ramp
// ═══════════════════════════════════════════════════════

var PinyinLab = {
  selectedTone: 1,
  drill: { questions: [], index: 0, score: 0, locked: false },

  initials: ['b','p','m','f','d','t','n','l','g','k','h','j','q','x','zh','ch','sh','r','z','c','s'],
  finals: ['a','o','e','i','u','ü','ai','ei','ao','ou','an','en','ang','eng','er','ia','ie','iao','iu','ian','in','iang','ing','iong','ua','uo','uai','ui','uan','un','uang','ueng','üe','üan','ün','ong','iou','uei','uen'],
  zeroInitialFinals: ['a','o','e','ai','ei','ao','ou','an','en','ang','eng','er'],

  tips: {
    initials: {
      b: 'gần “p” không bật hơi', p: '“p” bật hơi mạnh', m: '“m”', f: '“ph/f”',
      d: 'gần “t” không bật hơi', t: '“th” bật hơi', n: '“n”', l: '“l”',
      g: 'gần “c/k” không bật hơi', k: '“kh” bật hơi', h: '“h/kh” nhẹ',
      j: 'gần “ch” mềm, mặt lưỡi cao', q: 'gần “ch” bật hơi, mặt lưỡi cao', x: 'gần “x/s” mềm, mặt lưỡi cao',
      zh: 'gần “tr” uốn lưỡi', ch: 'gần “tr” bật hơi, uốn lưỡi', sh: 'gần “s” uốn lưỡi', r: 'gần “r/gi” uốn lưỡi',
      z: 'gần “ch/dz” không bật hơi', c: 'gần “x/ts” bật hơi', s: '“x/s”'
    },
    finals: {
      a: '“a”', o: '“ô/o” tròn môi', e: 'gần “ơ”', i: '“i”', u: '“u”', 'ü': '“uy/u” tròn môi, giữ âm “i”',
      ai: '“ai”', ei: '“ây/ei”', ao: '“ao”', ou: '“âu/ôu”', an: '“an”', en: '“ân/ơn”', ang: '“ang”', eng: '“âng/ơng”', er: '“ơr”, cuộn lưỡi',
      ia: '“ia/ya”', ie: '“iê”', iao: '“iao/eo”', iu: '“iu”', ian: '“ien/iên”', in: '“in”', iang: '“iang”', ing: '“ing”', iong: '“iung/iong”',
      ua: '“oa/ua”', uo: '“uô/o”', uai: '“oai/uai”', ui: '“uây/ui”', uan: '“oan/uan”', un: '“uân/un”', uang: '“oang/uang”', ueng: '“uâng/ueng”',
      'üe': '“uyê/uê”, tròn môi', 'üan': '“uyên”, tròn môi', 'ün': '“uyn”, tròn môi', ong: '“ung/ông”', iou: '“iou” đầy đủ, thường viết iu', uei: '“uei” đầy đủ, thường viết ui', uen: '“uen” đầy đủ, thường viết un'
    }
  },

  toneMarks: {
    a: ['ā','á','ǎ','à'], e: ['ē','é','ě','è'], i: ['ī','í','ǐ','ì'], o: ['ō','ó','ǒ','ò'], u: ['ū','ú','ǔ','ù'], 'ü': ['ǖ','ǘ','ǚ','ǜ']
  },

  pairGroups: [
    { title: 'zh / z', desc: 'zh uốn lưỡi giống “tr”; z phẳng hơn và không bật hơi.', items: ['zhi','zi','zhao','zao'], quiz: { prompt: 'Âm nào là zh?', answer: 'zhi' } },
    { title: 'ch / c', desc: 'ch uốn lưỡi và bật hơi; c bật hơi nhưng đầu lưỡi phẳng hơn.', items: ['chi','ci','cha','ca'], quiz: { prompt: 'Âm nào là ch?', answer: 'chi' } },
    { title: 'sh / s', desc: 'sh uốn lưỡi; s phẳng hơn, gần “x/s”.', items: ['shi','si','shan','san'], quiz: { prompt: 'Âm nào là sh?', answer: 'shi' } },
    { title: 'j / q / x', desc: 'Cả ba là âm mặt lưỡi trước i/ü; q bật hơi, x mềm hơn.', items: ['ji','qi','xi','ju','qu','xu'], quiz: { prompt: 'Âm nào bật hơi rõ nhất?', answer: 'qi' } },
    { title: 'ü / u', desc: 'ü tròn môi nhưng giữ vị trí lưỡi như “i”; u là “u” tròn môi thường.', items: ['lü','lu','nü','nu','ju','zhu'], quiz: { prompt: 'Âm nào dùng ü?', answer: 'lü' } }
  ],

  exampleSyllables: {
    b: ['ba','bo','bi','bu','bai','bei','bao','ban','ben','bang','bing'],
    p: ['pa','po','pi','pu','pai','pei','pao','pan','peng','ping'],
    m: ['ma','mo','me','mi','mu','mai','mei','mao','man','men','ming'],
    f: ['fa','fo','fu','fei','fan','fen','fang','feng'],
    d: ['da','de','di','du','dai','dei','dao','dou','dan','den','dang','ding','dong'],
    t: ['ta','te','ti','tu','tai','tao','tou','tan','tang','ting','tong'],
    n: ['na','ne','ni','nu','nü','nai','nei','nao','nan','nen','nang','ning'],
    l: ['la','le','li','lu','lü','lai','lei','lao','lou','lan','lin','lang','ling','long'],
    g: ['ga','ge','gu','gai','gei','gao','gou','gan','gen','gang','geng','gong'],
    k: ['ka','ke','ku','kai','kei','kao','kou','kan','ken','kang','keng','kong'],
    h: ['ha','he','hu','hai','hei','hao','hou','han','hen','hang','heng','hong'],
    j: ['ji','jia','jie','jiao','jiu','jian','jin','jiang','jing','jiong','ju','jue','juan','jun'],
    q: ['qi','qia','qie','qiao','qiu','qian','qin','qiang','qing','qiong','qu','que','quan','qun'],
    x: ['xi','xia','xie','xiao','xiu','xian','xin','xiang','xing','xiong','xu','xue','xuan','xun'],
    zh: ['zhi','zha','zhe','zhu','zhai','zhao','zhou','zhan','zhen','zhang','zheng','zhong'],
    ch: ['chi','cha','che','chu','chai','chao','chou','chan','chen','chang','cheng','chong'],
    sh: ['shi','sha','she','shu','shai','shao','shou','shan','shen','shang','sheng'],
    r: ['ri','re','ru','rao','rou','ran','ren','rang','rong'],
    z: ['zi','za','ze','zu','zai','zei','zao','zou','zan','zen','zang','zeng','zong'],
    c: ['ci','ca','ce','cu','cai','cao','cou','can','cen','cang','ceng','cong'],
    s: ['si','sa','se','su','sai','sao','sou','san','sen','sang','seng','song']
  },

  setup: function() {
    PinyinLab._initTabs();
    PinyinLab._renderTonePicker();
    PinyinLab._renderTable();
    PinyinLab._renderPairs();
    PinyinLab._renderSoundPicker();
    PinyinLab._bindDrill();
  },

  _initTabs: function() {
    document.querySelectorAll('.pinyin-tab').forEach(function(btn) {
      btn.onclick = function() {
        var tab = btn.dataset.pinyinTab;
        document.querySelectorAll('.pinyin-tab').forEach(function(b) {
          b.classList.toggle('active', b === btn);
          b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
        });
        document.querySelectorAll('.pinyin-panel').forEach(function(panel) { panel.classList.remove('active'); });
        var target = document.getElementById('pinyinPanel' + tab.charAt(0).toUpperCase() + tab.slice(1));
        if (target) target.classList.add('active');
      };
    });
  },

  _renderTonePicker: function() {
    var el = document.getElementById('pinyinTonePicker');
    if (!el) return;
    var labels = ['ˉ 1', 'ˊ 2', 'ˇ 3', 'ˋ 4'];
    el.innerHTML = labels.map(function(label, idx) {
      return '<button class="pinyin-tone-btn' + (idx === 0 ? ' active' : '') + '" data-tone="' + (idx + 1) + '" type="button">' + label + '</button>';
    }).join('');
    el.querySelectorAll('.pinyin-tone-btn').forEach(function(btn) {
      btn.onclick = function() {
        PinyinLab.selectedTone = parseInt(btn.dataset.tone);
        el.querySelectorAll('.pinyin-tone-btn').forEach(function(b) { b.classList.toggle('active', b === btn); });
        PinyinLab._renderTable();
      };
    });
  },

  _renderTable: function() {
    var wrap = document.getElementById('pinyinTableWrap');
    if (!wrap) return;
    var html = '<table class="pinyin-table"><thead><tr><th>Âm đầu</th>';
    PinyinLab.finals.forEach(function(final) { html += '<th>' + final + '</th>'; });
    html += '</tr></thead><tbody>';

    PinyinLab.initials.forEach(function(initial) {
      html += '<tr><th>' + initial + '</th>';
      PinyinLab.finals.forEach(function(final) {
        var syllable = PinyinLab._combine(initial, final);
        if (!syllable) {
          html += '<td class="pinyin-empty"></td>';
          return;
        }
        var marked = PinyinLab._withToneMark(syllable, PinyinLab.selectedTone);
        var tip = PinyinLab._tooltip(initial, final);
        html += '<td><button class="pinyin-cell" data-syllable="' + syllable + '" data-spoken="' + marked + '" type="button">' + marked + '<span class="pinyin-tooltip">' + tip + '</span></button></td>';
      });
      html += '</tr>';
    });

    html += '<tr><th>∅</th>';
    PinyinLab.finals.forEach(function(final) {
      if (PinyinLab.zeroInitialFinals.indexOf(final) === -1) {
        html += '<td class="pinyin-empty"></td>';
        return;
      }
      var marked = PinyinLab._withToneMark(final, PinyinLab.selectedTone);
      html += '<td><button class="pinyin-cell" data-syllable="' + final + '" data-spoken="' + marked + '" type="button">' + marked + '<span class="pinyin-tooltip">' + PinyinLab.tips.finals[final] + '</span></button></td>';
    });
    html += '</tr></tbody></table>';
    wrap.innerHTML = html;

    wrap.querySelectorAll('.pinyin-cell').forEach(function(btn) {
      btn.onclick = function() { PinyinLab._speak(btn.dataset.spoken || btn.dataset.syllable); };
    });
  },

  _combine: function(initial, final) {
    var list = PinyinLab.exampleSyllables[initial] || [];
    var direct = initial + final;
    if (list.indexOf(direct) !== -1) return direct;
    var spell = direct.replace('ü', 'u');
    if ((initial === 'j' || initial === 'q' || initial === 'x') && list.indexOf(spell) !== -1) return spell;
    return '';
  },

  _tooltip: function(initial, final) {
    return (PinyinLab.tips.initials[initial] || initial) + ' + ' + (PinyinLab.tips.finals[final] || final);
  },

  _withToneMark: function(syllable, tone) {
    if (!tone || tone > 4) return syllable;
    var s = syllable.replace(/u:/g, 'ü').replace(/v/g, 'ü');
    var target = '';
    if (s.indexOf('a') !== -1) target = 'a';
    else if (s.indexOf('e') !== -1) target = 'e';
    else if (s.indexOf('ou') !== -1) target = 'o';
    else {
      for (var i = s.length - 1; i >= 0; i--) {
        if ('ioüu'.indexOf(s.charAt(i)) !== -1) { target = s.charAt(i); break; }
      }
    }
    if (!target || !PinyinLab.toneMarks[target]) return syllable + tone;
    return s.replace(target, PinyinLab.toneMarks[target][tone - 1]);
  },

  _speak: function(text) {
    var spoken = text;
    if (typeof Dictionary !== 'undefined' && Dictionary.playTTS) {
      Dictionary.playTTS(spoken);
      return;
    }
    if ('speechSynthesis' in window) {
      var u = new SpeechSynthesisUtterance(spoken);
      u.lang = 'zh-CN';
      speechSynthesis.speak(u);
    }
  },

  _bindDrill: function() {
    var btn = document.getElementById('pinyinStartDrill');
    if (btn) btn.onclick = PinyinLab._startDrill;
    var box = document.getElementById('pinyinDrillBox');
    if (box) box.innerHTML = '<div class="pinyin-empty-state">Bấm “Bắt đầu” để luyện 10 câu nghe thanh điệu.</div>';
  },

  _startDrill: function() {
    var pool = ['ma','ba','shi','san','ji','xue','zhong','hao','ren','wo','ni','ta','lao','shi','xiao','ming','guo','han','yu','ai'];
    PinyinLab.drill = { questions: [], index: 0, score: 0, locked: false };
    for (var i = 0; i < 10; i++) {
      PinyinLab.drill.questions.push({ syllable: pool[Math.floor(Math.random() * pool.length)], tone: Math.floor(Math.random() * 4) + 1 });
    }
    PinyinLab._renderDrillQuestion();
  },

  _renderDrillQuestion: function() {
    var box = document.getElementById('pinyinDrillBox');
    if (!box) return;
    var state = PinyinLab.drill;
    if (state.index >= state.questions.length) {
      var xp = state.score * 5;
      if (typeof Gamification !== 'undefined') {
        Gamification.addXP(xp);
        Gamification.checkAndUpdateStreak();
        Gamification.updateStats();
      }
      box.innerHTML = '<div class="pinyin-result"><h3>Kết quả: ' + state.score + '/10 đúng</h3><p>+' + xp + ' XP</p><button class="btn-primary" id="pinyinRetryDrill" type="button">Làm lại</button></div>';
      document.getElementById('pinyinRetryDrill').onclick = PinyinLab._startDrill;
      return;
    }

    var q = state.questions[state.index];
    var marked = PinyinLab._withToneMark(q.syllable, q.tone);
    box.innerHTML = '<div class="pinyin-drill-progress">Câu ' + (state.index + 1) + '/10 — nghe và chọn thanh</div>' +
      '<div class="pinyin-drill-syllable">' + q.syllable + '</div>' +
      '<button class="wotd-btn" id="pinyinPlayQuestion" type="button">🔊 Nghe lại</button>' +
      '<div class="pinyin-answer-grid">' +
        [1,2,3,4].map(function(t) { return '<button class="pinyin-answer" data-tone="' + t + '" type="button">Thanh ' + t + '</button>'; }).join('') +
      '</div><div class="pinyin-feedback" id="pinyinDrillFeedback"></div>';

    document.getElementById('pinyinPlayQuestion').onclick = function() { PinyinLab._speak(marked); };
    document.getElementById('pinyinPlayQuestion').click();
    box.querySelectorAll('.pinyin-answer').forEach(function(btn) {
      btn.onclick = function() { PinyinLab._answerDrill(parseInt(btn.dataset.tone)); };
    });
  },

  _answerDrill: function(tone) {
    if (PinyinLab.drill.locked) return;
    PinyinLab.drill.locked = true;
    var q = PinyinLab.drill.questions[PinyinLab.drill.index];
    var fb = document.getElementById('pinyinDrillFeedback');
    if (tone === q.tone) {
      PinyinLab.drill.score++;
      if (fb) fb.textContent = 'Đúng!';
      if (fb) fb.className = 'pinyin-feedback ok';
    } else {
      if (fb) fb.textContent = 'Sai — đáp án là thanh ' + q.tone + '.';
      if (fb) fb.className = 'pinyin-feedback no';
    }
    setTimeout(function() {
      PinyinLab.drill.index++;
      PinyinLab.drill.locked = false;
      PinyinLab._renderDrillQuestion();
    }, 900);
  },

  _renderPairs: function() {
    var grid = document.getElementById('pinyinPairsGrid');
    if (!grid) return;
    grid.innerHTML = PinyinLab.pairGroups.map(function(group) {
      return '<div class="pinyin-pair-card"><h3>' + group.title + '</h3><p>' + group.desc + '</p>' +
        '<div class="pinyin-pair-quiz"><span class="pinyin-pair-prompt">' + group.quiz.prompt + '</span>' +
        '<button class="pinyin-pair-check" data-answer="' + group.quiz.answer + '" type="button">Kiểm tra</button></div>' +
        '<div class="pinyin-pair-items">' +
        group.items.map(function(item) { return '<button class="pinyin-chip" data-sound="' + item + '" type="button">🔊 ' + item + '</button>'; }).join('') +
        '</div><div class="pinyin-pair-feedback" aria-live="polite"></div></div>';
    }).join('');
    grid.querySelectorAll('.pinyin-chip').forEach(function(btn) {
      btn.onclick = function() {
        var card = btn.closest('.pinyin-pair-card');
        if (card) {
          card.querySelectorAll('.pinyin-chip').forEach(function(b) { b.classList.toggle('selected', b === btn); });
          card.dataset.selected = btn.dataset.sound;
        }
        PinyinLab._speak(btn.dataset.sound);
      };
    });
    grid.querySelectorAll('.pinyin-pair-check').forEach(function(btn) {
      btn.onclick = function() {
        var card = btn.closest('.pinyin-pair-card');
        var feedback = card && card.querySelector('.pinyin-pair-feedback');
        var answer = btn.dataset.answer;
        var chosen = card ? card.dataset.selected : '';
        if (feedback) {
          var ok = chosen === answer;
          feedback.className = 'pinyin-pair-feedback ' + (ok ? 'ok' : 'no');
          feedback.textContent = ok ? 'Đúng — ' + answer : 'Sai — đáp án là ' + answer;
        }
      };
    });
  },

  _renderSoundPicker: function() {
    var picker = document.getElementById('pinyinSoundPicker');
    if (!picker) return;
    picker.innerHTML = PinyinLab.initials.map(function(initial) {
      return '<button class="pinyin-initial-btn" data-initial="' + initial + '" type="button">' + initial + '</button>';
    }).join('');
    picker.querySelectorAll('.pinyin-initial-btn').forEach(function(btn) {
      btn.onclick = function() {
        picker.querySelectorAll('.pinyin-initial-btn').forEach(function(b) { b.classList.toggle('active', b === btn); });
        PinyinLab._renderSoundResults(btn.dataset.initial);
      };
    });
  },

  _renderSoundResults: function(initial) {
    var el = document.getElementById('pinyinSoundResults');
    if (!el) return;
    var syllables = PinyinLab.exampleSyllables[initial] || [];
    var examples = PinyinLab._hsk1Examples(initial);
    var html = '<h3>Âm bắt đầu bằng “' + initial + '”</h3><div class="pinyin-syllable-list">' +
      syllables.map(function(s) { return '<button class="pinyin-chip" data-sound="' + s + '" type="button">🔊 ' + s + '</button>'; }).join('') +
      '</div><h4>Ví dụ HSK1</h4><div class="pinyin-example-list">';
    if (!examples.length) html += '<div class="pinyin-empty-state">Chưa thấy ví dụ HSK1 phù hợp trong dữ liệu hiện tại.</div>';
    examples.forEach(function(w, idx) {
      html += '<button class="pinyin-word-example" data-word-idx="' + idx + '" type="button"><strong>' + w.h + '</strong><span>' + w.p + '</span><em>' + (w.v || w.e || '') + '</em></button>';
    });
    html += '</div>';
    el.innerHTML = html;

    el.querySelectorAll('.pinyin-chip').forEach(function(btn) {
      btn.onclick = function() { PinyinLab._speak(btn.dataset.sound); };
    });
    el.querySelectorAll('.pinyin-word-example').forEach(function(btn) {
      btn.onclick = function() {
        var word = examples[parseInt(btn.dataset.wordIdx)];
        if (typeof Dictionary !== 'undefined' && Dictionary.openModal) Dictionary.openModal(word);
        else PinyinLab._speak(word.h);
      };
    });
  },

  _hsk1Examples: function(initial) {
    if (typeof getAllWords !== 'function') return [];
    var words = getAllWords().filter(function(w) {
      return String(w.level) === '1' && w.p && PinyinLab._startsWithInitial(w.p, initial);
    });
    return words.slice(0, 8);
  },

  _startsWithInitial: function(pinyin, initial) {
    var first = pinyin.trim().toLowerCase().split(/\s+/)[0].replace(/[āáǎà]/g, 'a').replace(/[ēéěè]/g, 'e').replace(/[īíǐì]/g, 'i').replace(/[ōóǒò]/g, 'o').replace(/[ūúǔù]/g, 'u').replace(/[ǖǘǚǜ]/g, 'ü');
    if (initial.length === 1 && ['z','c','s'].indexOf(initial) !== -1 && first.indexOf(initial + 'h') === 0) return false;
    return first.indexOf(initial) === 0;
  }
};
