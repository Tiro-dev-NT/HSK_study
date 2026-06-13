// ══════════════════════════════════════════════════════
// PINYIN LAB — HSK 0-1 pronunciation on-ramp
// ══════════════════════════════════════════════════════

var PinyinLab = {
  selectedTone: 0,          // 0 = toàn bộ (play all 4), 1-4 = specific tone
  _playQueue: null,         // cancel token for sequential playback
  drill: { questions: [], index: 0, score: 0, locked: false },

  // Full table layout: columns = initials (thanh mẫu), rows = finals (vận mẫu)
  tableInitials: ['b','p','m','f','d','t','n','l','g','k','h','j','q','x','zh','ch','sh','r','z','c','s','∅'],
  tableFinals: [
    'a','o','e','i','u','ü',
    'ai','ei','ao','ou',
    'an','en','ang','eng','er',
    'ia','ie','iao','iu','ian','in','iang','ing','iong',
    'ua','uo','uai','ui','uan','un','uang','ueng',
    'üe','üan','ün',
    'ong'
  ],

  // Original arrays (kept for _combine compatibility + other tabs)
  initials: ['b','p','m','f','d','t','n','l','g','k','h','j','q','x','zh','ch','sh','r','z','c','s'],
  finals: ['a','o','e','i','u','ü','ai','ei','ao','ou','an','en','ang','eng','er','ia','ie','iao','iu','ian','in','iang','ing','iong','ua','uo','uai','ui','uan','un','uang','ueng','üe','üan','ün','ong','iou','uei','uen'],
  zeroInitialFinals: ['a','o','e','ai','ei','ao','ou','an','en','ang','eng','er'],

  tips: {
    initials: {
      b: 'gần "p" không bật hơi', p: '"p" bật hơi mạnh', m: '"m"', f: '"ph/f"',
      d: 'gần "t" không bật hơi', t: '"th" bật hơi', n: '"n"', l: '"l"',
      g: 'gần "c/k" không bật hơi', k: '"kh" bật hơi', h: '"h/kh" nhẹ',
      j: 'gần "ch" mềm, mặt lưỡi cao', q: 'gần "ch" bật hơi, mặt lưỡi cao', x: 'gần "x/s" mềm, mặt lưỡi cao',
      zh: 'gần "tr" uốn lưỡi', ch: 'gần "tr" bật hơi, uốn lưỡi', sh: 'gần "s" uốn lưỡi', r: 'gần "r/gi" uốn lưỡi',
      z: 'gần "ch/dz" không bật hơi', c: 'gần "x/ts" bật hơi', s: '"x/s"'
    },
    finals: {
      a: '"a"', o: '"ô/o" tròn môi', e: 'gần "ơ"', i: '"i"', u: '"u"', 'ü': '"uy/u" tròn môi, giữ âm "i"',
      ai: '"ai"', ei: '"ây/ei"', ao: '"ao"', ou: '"âu/ôu"', an: '"an"', en: '"ân/ơn"', ang: '"ang"', eng: '"âng/ơng"', er: '"ơr", cuộn lưỡi',
      ia: '"ia/ya"', ie: '"iê"', iao: '"iao/eo"', iu: '"iu"', ian: '"ien/iên"', in: '"in"', iang: '"iang"', ing: '"ing"', iong: '"iung/iong"',
      ua: '"oa/ua"', uo: '"uô/o"', uai: '"oai/uai"', ui: '"uây/ui"', uan: '"oan/uan"', un: '"uân/un"', uang: '"oang/uang"', ueng: '"uâng/ueng"',
      'üe': '"uyê/uê", tròn môi', 'üan': '"uyên", tròn môi', 'ün': '"uyn", tròn môi', ong: '"ung/ông"', iou: '"iou" đầy đủ, thường viết iu', uei: '"uei" đầy đủ, thường viết ui', uen: '"uen" đầy đủ, thường viết un'
    }
  },

  toneMarks: {
    a: ['ā','á','ǎ','à'], e: ['ē','é','ě','è'], i: ['ī','í','ǐ','ì'], o: ['ō','ó','ǒ','ò'], u: ['ū','ú','ǔ','ù'], 'ü': ['ǖ','ǘ','ǚ','ǜ']
  },

  pairGroups: [
    { title: 'zh / z', desc: 'zh uốn lưỡi giống "tr"; z phẳng hơn và không bật hơi.', items: ['zhi','zi','zhao','zao'], quiz: { prompt: 'Âm nào là zh?', answer: 'zhi' } },
    { title: 'ch / c', desc: 'ch uốn lưỡi và bật hơi; c bật hơi nhưng đầu lưỡi phẳng hơn.', items: ['chi','ci','cha','ca'], quiz: { prompt: 'Âm nào là ch?', answer: 'chi' } },
    { title: 'sh / s', desc: 'sh uốn lưỡi; s phẳng hơn, gần "x/s".', items: ['shi','si','shan','san'], quiz: { prompt: 'Âm nào là sh?', answer: 'shi' } },
    { title: 'j / q / x', desc: 'Cả ba là âm mặt lưỡi trước i/ü; q bật hơi, x mềm hơn.', items: ['ji','qi','xi','ju','qu','xu'], quiz: { prompt: 'Âm nào bật hơi rõ nhất?', answer: 'qi' } },
    { title: 'ü / u', desc: 'ü tròn môi nhưng giữ vị trí lưỡi như "i"; u là "u" tròn môi thường.', items: ['lü','lu','nü','nu','ju','zhu'], quiz: { prompt: 'Âm nào dùng ü?', answer: 'lü' } }
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
    PinyinLab._bindToneDemo();
    PinyinLab._bindSearch();
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

  /* ──── Tone Picker (with "toàn bộ" option) ──── */
  _renderTonePicker: function() {
    var el = document.getElementById('pinyinTonePicker');
    if (!el) return;
    var labels = [
      { tone: 0, label: '全' },
      { tone: 1, label: 'ˉ 1' },
      { tone: 2, label: 'ˊ 2' },
      { tone: 3, label: 'ˇ 3' },
      { tone: 4, label: 'ˋ 4' }
    ];
    el.innerHTML = labels.map(function(item) {
      var cls = 'pinyin-tone-btn' + (item.tone === 0 ? ' active' : '');
      if (item.tone > 0) cls += ' pft-tone-' + item.tone;
      return '<button class="' + cls + '" data-tone="' + item.tone + '" type="button" title="' + (item.tone === 0 ? 'Toàn bộ — phát 4 thanh' : 'Thanh ' + item.tone) + '">' + item.label + '</button>';
    }).join('');
    el.querySelectorAll('.pinyin-tone-btn').forEach(function(btn) {
      btn.onclick = function() {
        PinyinLab.selectedTone = parseInt(btn.dataset.tone);
        el.querySelectorAll('.pinyin-tone-btn').forEach(function(b) { b.classList.toggle('active', b === btn); });
        PinyinLab._renderTable();
      };
    });
  },

  /* ──── Mini-card tone demo (mā/má/mǎ/mà) ──── */
  _bindToneDemo: function() {
    var demo = document.getElementById('pinyinToneDemo');
    if (!demo) return;
    demo.querySelectorAll('.ptd-item').forEach(function(btn) {
      btn.onclick = function() {
        PinyinLab._speak(btn.dataset.syl);
        demo.querySelectorAll('.ptd-item').forEach(function(b) { b.classList.remove('ptd-active'); });
        btn.classList.add('ptd-active');
        setTimeout(function() { btn.classList.remove('ptd-active'); }, 800);
      };
    });
  },

  /* ──── Search ──── */
  _bindSearch: function() {
    var input = document.getElementById('pinyinTableSearch');
    if (!input) return;
    var timer = null;
    input.addEventListener('input', function() {
      clearTimeout(timer);
      timer = setTimeout(function() { PinyinLab._doSearch(input.value.trim().toLowerCase()); }, 250);
    });
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') { clearTimeout(timer); PinyinLab._doSearch(input.value.trim().toLowerCase()); }
    });
  },

  _doSearch: function(q) {
    var wrap = document.getElementById('pinyinTableWrap');
    if (!wrap || !q) return;
    // Sanitize: only allow a-z and ü
    q = q.replace(/[^a-züü]/g, '');
    if (!q) return;
    // Remove old flash
    wrap.querySelectorAll('.pft-flash').forEach(function(el) { el.classList.remove('pft-flash'); });
    // Find matching cells
    var found = [];
    wrap.querySelectorAll('.pft-cell').forEach(function(cell) {
      var syl = cell.dataset.syllable || '';
      if (syl === q || syl.indexOf(q) !== -1) found.push(cell);
    });
    if (found.length) {
      var first = found[0];
      first.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      found.forEach(function(cell) {
        cell.classList.add('pft-flash');
        setTimeout(function() { cell.classList.remove('pft-flash'); }, 1600);
      });
    }
  },

  /* ──── Full Pinyin Table (finals=rows, initials=cols) ──── */
  /* ──── Valid syllable set (all standard pinyin combos) ──── */
  _validSet: null,
  _buildValidSet: function() {
    if (PinyinLab._validSet) return;
    var set = {};
    // From exampleSyllables
    var es = PinyinLab.exampleSyllables;
    for (var k in es) { if (es.hasOwnProperty(k)) es[k].forEach(function(s) { set[s] = 1; }); }
    // Zero-initial simple finals
    PinyinLab.zeroInitialFinals.forEach(function(f) { set[f] = 1; });
    // Zero-initial mapped (yi/wu/yu series)
    var yVals = ['yi','ya','ye','yao','you','yan','yin','yang','ying','yong',
                 'wu','wa','wo','wai','wei','wan','wen','wang','weng',
                 'yu','yue','yuan','yun'];
    yVals.forEach(function(s) { set[s] = 1; });
    // Common combos missing from exampleSyllables but valid in standard pinyin
    var extra = [
      'beng','deng','meng','neng','leng','pang','mang',
      'gua','guai','gui','guan','gun','guang',
      'hua','huai','hui','huan','hun','huang',
      'kua','kuai','kui','kuan','kun','kuang',
      'zhua','zhui','zhuan','zhun','zhuang',
      'chui','chuan','chun','chuang',
      'shua','shuai','shui','shuan','shun','shuang',
      'rui','ruan','run',
      'sui','suan','sun',
      'dui','duan','dun','tui','tuan','tun',
      'nuo','luo','nian','lian','niang','liang',
      'niao','liao','niu','liu',
      'nüe','lüe',
      'bie','pie','mie','nie','lie',
      'biao','piao','miao','diao','tiao',
      'diu',
      'dia','chua','nue','lue',
      'guei','guen','kuei','kuen','huei','huen',
      'zhuo','chuo','shuo','ruo','zuo','cuo','suo',
      'dang','dong','nong','long',
      'ding','ning','ling','ming','bing','ping','ting',
      'jiong',
      'ceng','zeng','seng','heng'
    ];
    extra.forEach(function(s) { set[s] = 1; });
    // Also add anything in the syllable map
    if (typeof PINYIN_SYLLABLE_MAP !== 'undefined') {
      for (var m in PINYIN_SYLLABLE_MAP) { if (PINYIN_SYLLABLE_MAP.hasOwnProperty(m)) set[m] = 1; }
    }
    PinyinLab._validSet = set;
  },

  _isValidSyllable: function(syllable) {
    PinyinLab._buildValidSet();
    return !!PinyinLab._validSet[syllable];
  },

  _syllableForCell: function(initial, final) {
    // Zero initial
    if (initial === '∅') {
      if (PinyinLab.zeroInitialFinals.indexOf(final) !== -1) return final;
      // yi/wu/yu series
      var yMap = {
        'i': 'yi', 'ia': 'ya', 'ie': 'ye', 'iao': 'yao', 'iu': 'you',
        'ian': 'yan', 'in': 'yin', 'iang': 'yang', 'ing': 'ying', 'iong': 'yong',
        'u': 'wu', 'ua': 'wa', 'uo': 'wo', 'uai': 'wai', 'ui': 'wei',
        'uan': 'wan', 'un': 'wen', 'uang': 'wang', 'ueng': 'weng',
        'ü': 'yu', 'üe': 'yue', 'üan': 'yuan', 'ün': 'yun'
      };
      var mapped = yMap[final];
      if (mapped) return mapped;   // always valid, audio may fallback
      return '';
    }
    // j/q/x + ü → u in written pinyin (jü→ju, qüe→que, etc.)
    if ((initial === 'j' || initial === 'q' || initial === 'x') && final.indexOf('ü') !== -1) {
      var syl = initial + final.replace('ü', 'u');
      if (PinyinLab._isValidSyllable(syl)) return syl;
      return '';
    }
    // j/q/x CANNOT combine with plain u-finals (u/ua/uo/uai/ui/uan/un/uang/ueng/ong)
    // They only combine with ü-finals (shown above). Block to prevent duplicates.
    if ((initial === 'j' || initial === 'q' || initial === 'x') &&
        (final === 'u' || final === 'ong' || (final.charAt(0) === 'u' && final !== 'ü'))) {
      return '';
    }
    // Other initials: ü stays as ü (nü, lü)
    // Non-ü finals: direct concatenation
    var syl2 = initial + final;
    if (PinyinLab._isValidSyllable(syl2)) return syl2;
    return '';
  },

  _renderTable: function() {
    var wrap = document.getElementById('pinyinTableWrap');
    if (!wrap) return;
    var tone = PinyinLab.selectedTone;
    var inits = PinyinLab.tableInitials;
    var fins = PinyinLab.tableFinals;
    var cellCount = 0;

    var html = '<table class="pinyin-table pft"><thead><tr><th class="pft-corner"></th>';
    inits.forEach(function(ini) {
      html += '<th class="pft-col-head">' + ini + '</th>';
    });
    html += '</tr></thead><tbody>';

    fins.forEach(function(fin) {
      html += '<tr><th class="pft-row-head">' + fin + '</th>';
      inits.forEach(function(ini) {
        var syl = PinyinLab._syllableForCell(ini, fin);
        if (!syl) {
          html += '<td class="pft-empty"></td>';
          return;
        }
        cellCount++;
        var display = tone > 0 ? PinyinLab._withToneMark(syl, tone) : syl;
        var toneClass = tone > 0 ? ' pft-t' + tone : '';
        html += '<td><button class="pinyin-cell pft-cell' + toneClass + '" data-syllable="' + syl + '" type="button">' + display + '</button></td>';
      });
      html += '</tr>';
    });

    html += '</tbody></table>';
    wrap.innerHTML = html;
    console.log('[PinyinLab] Bảng pinyin: ' + cellCount + ' cells rendered (tone=' + tone + ')');

    // Bind click
    wrap.querySelectorAll('.pft-cell').forEach(function(btn) {
      btn.onclick = function() {
        var syl = btn.dataset.syllable;
        if (tone > 0) {
          PinyinLab._speakCell(btn, syl, tone);
        } else {
          PinyinLab._playAllTones(btn, syl);
        }
      };
    });
  },

  /* Speak + highlight cell */
  _speakCell: function(btn, syllable, tone) {
    var marked = PinyinLab._withToneMark(syllable, tone);
    btn.classList.add('pft-playing');
    PinyinLab._speak(marked);
    setTimeout(function() { btn.classList.remove('pft-playing'); }, 800);
  },

  /* Play all 4 tones sequentially with 600ms delay */
  _playAllTones: function(btn, syllable) {
    // Cancel previous queue
    if (PinyinLab._playQueue) PinyinLab._playQueue.cancelled = true;
    var token = { cancelled: false };
    PinyinLab._playQueue = token;

    var tones = [1, 2, 3, 4];
    // Filter to existing tones only when map entry exists
    if (typeof PINYIN_SYLLABLE_MAP !== 'undefined') {
      var entry = PINYIN_SYLLABLE_MAP[syllable];
      if (entry) {
        var filtered = tones.filter(function(t) { return !!entry[t]; });
        if (filtered.length) tones = filtered;
      }
    }
    if (!tones.length) return;

    btn.classList.add('pft-playing');
    var i = 0;
    function playNext() {
      if (token.cancelled || i >= tones.length) {
        btn.classList.remove('pft-playing');
        return;
      }
      var t = tones[i];
      var marked = PinyinLab._withToneMark(syllable, t);
      // Update cell text to show current tone
      btn.textContent = marked;
      btn.className = btn.className.replace(/ pft-t\d/g, '') + ' pft-t' + t;
      PinyinLab._speak(marked);
      i++;
      setTimeout(playNext, 650);
    }
    playNext();
    // Restore original text after sequence
    setTimeout(function() {
      if (!token.cancelled) {
        btn.textContent = syllable;
        btn.className = btn.className.replace(/ pft-t\d/g, '');
        btn.classList.remove('pft-playing');
      }
    }, tones.length * 650 + 200);
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

  // Dấu thanh → [nguyên âm gốc, số thanh] — parse pinyin tone-marked về (âm tiết, thanh)
  _toneVowels: {
    'ā':['a',1],'á':['a',2],'ǎ':['a',3],'à':['a',4],
    'ē':['e',1],'é':['e',2],'ě':['e',3],'è':['e',4],
    'ī':['i',1],'í':['i',2],'ǐ':['i',3],'ì':['i',4],
    'ō':['o',1],'ó':['o',2],'ǒ':['o',3],'ò':['o',4],
    'ū':['u',1],'ú':['u',2],'ǔ':['u',3],'ù':['u',4],
    'ǖ':['ü',1],'ǘ':['ü',2],'ǚ':['ü',3],'ǜ':['ü',4]
  },

  // pinyin ("bā","lǚ","ju","wo") → { base:"ba", tone:1 } (tone=0 nếu không dấu)
  _parsePinyin: function(text) {
    var s = String(text || '').trim().toLowerCase().replace(/v/g, 'ü');
    var base = '', tone = 0;
    for (var i = 0; i < s.length; i++) {
      var tv = PinyinLab._toneVowels[s.charAt(i)];
      if (tv) { base += tv[0]; tone = tv[1]; } else { base += s.charAt(i); }
    }
    return { base: base, tone: tone };
  },

  // Âm tiết pinyin → chữ Hán đại diện (đọc đúng âm đó). null nếu không có.
  // VÌ SAO: TTS đọc chuỗi pinyin la-tinh ("bā") rất hay sai âm/thanh; phát audio
  // chữ Hán thật (Edge TTS neural pre-gen) thì chuẩn. Map ở js/data/hsk0/pinyin-syllable-map.js.
  _pinyinToHanzi: function(text) {
    if (typeof PINYIN_SYLLABLE_MAP === 'undefined') return null;
    var p = PinyinLab._parsePinyin(text);
    var entry = PINYIN_SYLLABLE_MAP[p.base];
    if (!entry) return null;
    // có thanh cụ thể: thiếu chữ đúng thanh → null (KHÔNG phát sai thanh), để fallback
    if (p.tone) return entry[p.tone] || null;
    // không thanh (chip/cặp) → chữ citation phổ biến (key "0"), rồi thanh thấp nhất
    if (entry['0']) return entry['0'];
    var order = ['1', '2', '3', '4', '5'];
    for (var i = 0; i < order.length; i++) if (entry[order[i]]) return entry[order[i]];
    return null;
  },

  _speak: function(text) {
    // Đã là chữ Hán → phát thẳng (audio-first). Ngược lại đổi pinyin→chữ Hán đại diện.
    var spoken = /[一-鿿]/.test(text) ? text : (PinyinLab._pinyinToHanzi(text) || null);

    if (spoken) {
      if (typeof TTSAudio !== 'undefined') { TTSAudio.speak(spoken, { rate: 0.9 }); return; }
      if (typeof Dictionary !== 'undefined' && Dictionary.playTTS) { Dictionary.playTTS(spoken); return; }
    }

    // Fallback: không map được → đọc chuỗi gốc bằng Web Speech (hành vi cũ, hiếm gặp).
    if ('speechSynthesis' in window) {
      var u = new SpeechSynthesisUtterance(text);
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
      if (typeof Quests !== 'undefined' && Quests.incrementMetric) {
        Quests.incrementMetric('pinyin_drill');
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
