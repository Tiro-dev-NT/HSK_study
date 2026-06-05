// ════════════════════════════════════════════════════════════════════════
// TTSAudio — phát âm "audio-first, TTS-fallback"
// ─────────────────────────────────────────────────────────────────────────
// Thử file mp3 pre-gen trên R2 (Edge TTS, chất lượng cao + đồng nhất mọi máy)
// → nếu thiếu/404/lỗi thì fallback Web Speech (speechSynthesis zh-CN).
//
// Key file = encodeURIComponent(text) (KHỚP urllib.parse.quote ở gen-tts-audio.py).
// KHÔNG dùng hash (djb2 32-bit collide ~22 cặp/2395 chữ → phát nhầm). Dùng chính
// chữ Hán encode → bijective, 0 collision. Namespace chung `tts/word/<enc>.mp3` →
// từ điển và pinyin HSK 0 chia sẻ audio cùng chữ (không gen trùng).
//
// BẬT: đặt ENABLED=true SAU KHI đã gen + `rclone copy` audio lên R2. Trước đó
// để false → dùng Web Speech như cũ (0 regression, không bắn 404).
// ════════════════════════════════════════════════════════════════════════
var TTSAudio = (function () {
  var ENABLED = true;                        // audio R2 đã live (2395 chữ HSK1-3 + pinyin)
  var BASE    = 'https://cdn.hanzigenz.com/'; // '' = local dev (đọc assets/)
  var PATH    = 'tts/word/';
  var _missing = {};   // key → true: đã 404 trong phiên, khỏi thử lại (tránh 404 lặp)
  var _cur     = null; // Audio đang phát (để dừng cái cũ)

  // Key = encodeURIComponent(text) — khớp urllib.parse.quote(text, safe='') ở
  // gen-tts-audio.py. Bijective với text → 0 collision.
  function key(text) {
    return encodeURIComponent(text || '');
  }

  function src(text) {
    return (BASE || '') + PATH + key(text) + '.mp3';
  }

  function webSpeech(text, rate) {
    var synth = window.speechSynthesis;
    if (!synth) return;
    try {
      if (synth.paused) synth.resume();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = rate || 0.9;
      if (typeof Dictionary !== 'undefined' && Dictionary._pickZhVoice) {
        var v = Dictionary._pickZhVoice();
        if (v) u.voice = v;
      }
      synth.cancel();
      setTimeout(function () { synth.speak(u); }, 50);
    } catch (e) { /* im lặng */ }
  }

  function speak(text, opts) {
    opts = opts || {};
    if (typeof appSettings !== 'undefined' && appSettings.autoTTS === false && !opts.force) return;
    if (!text) return;
    var rate = opts.rate || 0.9;

    if (_cur) { try { _cur.pause(); } catch (e) {} _cur = null; }

    var s = key(text);
    if (!ENABLED || _missing[s] || !window.Audio) { webSpeech(text, rate); return; }

    var fellBack = false;
    function fb() {
      if (fellBack) return;
      fellBack = true;
      _missing[s] = true;
      _cur = null;
      webSpeech(text, rate);
    }

    var a = new Audio(src(text));
    _cur = a;
    a.onerror = fb;
    var p = a.play();
    if (p && p.catch) p.catch(fb);
  }

  return {
    speak: speak,
    key: key,
    src: src,
    isEnabled: function () { return ENABLED; }
  };
})();
