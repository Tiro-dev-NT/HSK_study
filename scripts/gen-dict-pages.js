// ═══════════════════════════════════════════════════════
// gen-dict-pages.js — Pre-render static SEO pages cho từ điển Hán-Việt
// ─────────────────────────────────────────────────────────
// Mục tiêu: SPA (router fetch) → Google index kém. Script này sinh HTML
// TĨNH cho mỗi chữ đơn từ HSK3_DATA → crawler đọc nội dung thật, user
// click từ Google vẫn "Mở trong app" được (progressive enhancement).
//
// Dev-tool, KHÔNG phải bundler/runtime dep (giống các file khác trong scripts/).
// Chạy: node scripts/gen-dict-pages.js
// Output (root, CF Pages serve trực tiếp, thắng /* SPA fallback):
//   /tu-dien/<chữ>.html  ·  /tu-dien/index.html  ·  /sitemap.xml  ·  /robots.txt
//
// RÀNG BUỘC: no framework/bundler/ES module trong app — file này dùng CommonJS
// (node builtin) nên không vi phạm; không thêm npm dep.
// ═══════════════════════════════════════════════════════

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

const ROOT     = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'js', 'data', 'v3');
const OUT_DIR  = path.join(ROOT, 'tu-dien');
const SITE     = 'https://hanzigenz.com';

// ── 1. Load HSK3_DATA bằng vm (data file là plain var-assignment) ──
function loadWords() {
  const sandbox = { HSK3_DATA: { 1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[] } };
  vm.createContext(sandbox);
  for (let lvl = 1; lvl <= 9; lvl++) {
    const fp = path.join(DATA_DIR, 'hsk3_lvl' + lvl + '.js');
    if (!fs.existsSync(fp)) continue;
    let src = fs.readFileSync(fp, 'utf8').replace(/^﻿/, ''); // strip BOM
    try { vm.runInContext(src, sandbox, { filename: fp }); }
    catch (e) { console.error('  ! parse lỗi ' + fp + ':', e.message); }
  }
  // Gắn level vào từng entry, gom toàn bộ
  const all = [];
  for (let lvl = 1; lvl <= 9; lvl++) {
    (sandbox.HSK3_DATA[lvl] || []).forEach(function(w) {
      if (w && w.h) all.push(Object.assign({ level: lvl }, w));
    });
  }
  return all;
}

// ── 2. Lọc chữ ĐƠN (1 code point CJK), dedup theo h (giữ level thấp nhất) ──
function singleChars(all) {
  const map = new Map();
  all.forEach(function(w) {
    if (Array.from(w.h).length !== 1) return; // chỉ 1 hán tự
    const prev = map.get(w.h);
    if (!prev || w.level < prev.level) map.set(w.h, w);
  });
  return Array.from(map.values()).sort(function(a, b) {
    return a.level - b.level || a.h.localeCompare(b.h, 'zh');
  });
}

// ── 3. Helpers ──
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function(c) {
    return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c];
  });
}
function jsonStr(s) { return JSON.stringify(String(s == null ? '' : s)); }
function urlFor(h) { return SITE + '/tu-dien/' + encodeURIComponent(h); }

// ── 4. Template 1 trang chữ (HTML tĩnh, CSS inline → render tức thì) ──
function pageHTML(w, related) {
  const verLabel = 'HSK 3.0 cấp ' + w.level;
  const title = '「' + w.h + '」 ' + (w.p || '') + ' nghĩa là gì? Hán-Việt, phiên âm | Hanzi Genz';
  const desc  = '「' + w.h + '」 pinyin ' + (w.p || '') + ' — nghĩa: ' + (w.v || '') +
                ' (' + (w.e || '') + '). Từ vựng ' + verLabel + '. Học phát âm, ví dụ câu, nét chữ trên Hanzi Genz.';

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    'name': w.h,
    'description': (w.v || '') + (w.e ? ' / ' + w.e : ''),
    'inDefinedTermSet': { '@type': 'DefinedTermSet', 'name': 'Từ điển Hán-Việt HSK — Hanzi Genz', 'url': SITE + '/tu-dien/' },
    'url': urlFor(w.h),
    'inLanguage': 'zh',
    'termCode': w.p || undefined,
    'educationalLevel': verLabel
  };

  let exHtml = '';
  if (w.ex && (w.ex.zh || w.ex.vi)) {
    exHtml =
      '<section class="ex"><h2>Ví dụ câu</h2>' +
      (w.ex.zh ? '<p class="ex-zh" lang="zh">' + esc(w.ex.zh) + '</p>' : '') +
      (w.ex.py ? '<p class="ex-py">' + esc(w.ex.py) + '</p>' : '') +
      (w.ex.vi ? '<p class="ex-vi">' + esc(w.ex.vi) + '</p>' : '') +
      (w.ex.en ? '<p class="ex-en">' + esc(w.ex.en) + '</p>' : '') +
      '</section>';
  }

  const relHtml = related.length
    ? '<nav class="related"><h2>Từ liên quan</h2><ul>' +
      related.map(function(r) {
        return '<li><a href="/tu-dien/' + encodeURIComponent(r.h) + '">' +
          '<span lang="zh">' + esc(r.h) + '</span> <em>' + esc(r.p || '') + '</em> — ' + esc(r.v || '') + '</a></li>';
      }).join('') +
      '</ul></nav>'
    : '';

  return '<!DOCTYPE html>\n' +
'<html lang="vi">\n<head>\n' +
'<meta charset="UTF-8"/>\n' +
'<meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n' +
'<title>' + esc(title) + '</title>\n' +
'<meta name="description" content="' + esc(desc) + '"/>\n' +
'<link rel="canonical" href="' + urlFor(w.h) + '"/>\n' +
'<meta property="og:type" content="article"/>\n' +
'<meta property="og:title" content="' + esc(title) + '"/>\n' +
'<meta property="og:description" content="' + esc(desc) + '"/>\n' +
'<meta property="og:url" content="' + urlFor(w.h) + '"/>\n' +
'<meta property="og:site_name" content="Hanzi Genz"/>\n' +
'<link rel="icon" type="image/png" href="/assets/icon.png"/>\n' +
'<script type="application/ld+json">' + JSON.stringify(ld) + '</scr' + 'ipt>\n' +
'<style>\n' +
'*{box-sizing:border-box}body{margin:0;font-family:Inter,system-ui,Segoe UI,Roboto,sans-serif;background:#0F0F1A;color:#FAFAF9;line-height:1.6}\n' +
'.wrap{max-width:720px;margin:0 auto;padding:24px 20px 64px}\n' +
'a{color:#F59E0B;text-decoration:none}a:hover{text-decoration:underline}\n' +
'.crumb{font-size:.85rem;color:#9ca3af;margin-bottom:20px}\n' +
'.hero{text-align:center;padding:24px 0 8px}\n' +
'.hanzi{font-size:6rem;line-height:1;font-family:"Noto Sans SC",serif}\n' +
'.pinyin{font-size:1.6rem;color:#F59E0B;margin-top:8px}\n' +
'.badge{display:inline-block;font-size:.8rem;background:#1F2937;border:1px solid #374151;border-radius:999px;padding:3px 12px;margin-top:12px;color:#d1d5db}\n' +
'.mean{background:#171727;border:1px solid #262640;border-radius:14px;padding:18px 20px;margin:24px 0}\n' +
'.mean .vi{font-size:1.25rem;font-weight:600}\n' +
'.mean .en{color:#9ca3af;margin-top:4px}\n' +
'h2{font-size:1rem;color:#10B981;text-transform:uppercase;letter-spacing:.04em;margin:28px 0 10px}\n' +
'.ex p{margin:4px 0}.ex-zh{font-family:"Noto Sans SC",serif;font-size:1.2rem}.ex-py{color:#F59E0B}.ex-en{color:#9ca3af}\n' +
'.related ul{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:8px}\n' +
'.related li a{display:block;background:#171727;border:1px solid #262640;border-radius:10px;padding:10px 12px;color:#FAFAF9}\n' +
'.related li a:hover{border-color:#F59E0B;text-decoration:none}.related em{color:#F59E0B;font-style:normal}\n' +
'.cta{display:block;text-align:center;background:#DC2626;color:#fff;font-weight:600;border-radius:12px;padding:14px;margin:32px 0 8px}\n' +
'.cta:hover{text-decoration:none;background:#b91c1c}\n' +
'.foot{margin-top:40px;font-size:.8rem;color:#6b7280;text-align:center}\n' +
'</style>\n</head>\n<body>\n<div class="wrap">\n' +
'<div class="crumb"><a href="/">Hanzi Genz</a> › <a href="/tu-dien/">Từ điển Hán-Việt</a> › ' + esc(w.h) + '</div>\n' +
'<header class="hero">\n' +
'  <div class="hanzi" lang="zh">' + esc(w.h) + '</div>\n' +
'  <div class="pinyin">' + esc(w.p || '') + '</div>\n' +
'  <div class="badge">' + esc(verLabel) + '</div>\n' +
'</header>\n' +
'<div class="mean">\n' +
'  <div class="vi">' + esc(w.v || '—') + '</div>\n' +
'  <div class="en">' + esc(w.e || '') + '</div>\n' +
'</div>\n' +
exHtml +
'<a class="cta" href="/dictionary">🔎 Tra cứu &amp; học chữ này trong app →</a>\n' +
relHtml +
'<p class="foot">Hanzi Genz — học từ vựng tiếng Trung HSK 1–9 (HSK 3.0)</p>\n' +
'</div>\n</body>\n</html>\n';
}

// ── 5. Index trang /tu-dien/ (browse + crawl entry) ──
function indexHTML(words) {
  const byLevel = {};
  words.forEach(function(w) { (byLevel[w.level] = byLevel[w.level] || []).push(w); });
  let body = '';
  for (let lvl = 1; lvl <= 9; lvl++) {
    const list = byLevel[lvl];
    if (!list || !list.length) continue;
    body += '<h2>HSK 3.0 — Cấp ' + lvl + ' <span class="cnt">(' + list.length + ' chữ)</span></h2>\n<div class="grid">' +
      list.map(function(w) {
        return '<a href="/tu-dien/' + encodeURIComponent(w.h) + '" title="' + esc(w.v || '') + '">' +
          '<span class="h" lang="zh">' + esc(w.h) + '</span><span class="p">' + esc(w.p || '') + '</span></a>';
      }).join('') + '</div>\n';
  }
  const title = 'Từ điển Hán-Việt HSK 3.0 — tra nghĩa, pinyin ' + words.length + ' chữ Hán | Hanzi Genz';
  const desc  = 'Từ điển Hán-Việt online: tra nghĩa tiếng Việt, phiên âm pinyin, ví dụ câu cho ' + words.length +
                ' chữ Hán thường gặp theo cấp HSK 3.0. Miễn phí trên Hanzi Genz.';
  return '<!DOCTYPE html>\n<html lang="vi">\n<head>\n' +
'<meta charset="UTF-8"/>\n<meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n' +
'<title>' + esc(title) + '</title>\n' +
'<meta name="description" content="' + esc(desc) + '"/>\n' +
'<link rel="canonical" href="' + SITE + '/tu-dien/"/>\n' +
'<link rel="icon" type="image/png" href="/assets/icon.png"/>\n' +
'<style>*{box-sizing:border-box}body{margin:0;font-family:Inter,system-ui,sans-serif;background:#0F0F1A;color:#FAFAF9}' +
'.wrap{max-width:960px;margin:0 auto;padding:24px 20px 64px}a{color:#F59E0B;text-decoration:none}' +
'h1{font-size:1.6rem}h2{font-size:1.05rem;color:#10B981;margin:28px 0 10px}.cnt{color:#6b7280;font-weight:400;font-size:.85rem}' +
'.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px}' +
'.grid a{background:#171727;border:1px solid #262640;border-radius:10px;padding:10px;text-align:center;color:#FAFAF9}' +
'.grid a:hover{border-color:#F59E0B}.grid .h{display:block;font-size:1.6rem;font-family:"Noto Sans SC",serif}.grid .p{display:block;font-size:.8rem;color:#F59E0B}' +
'.cta{display:inline-block;background:#DC2626;color:#fff;border-radius:10px;padding:10px 18px;margin:8px 0 4px}</style>\n' +
'</head>\n<body>\n<div class="wrap">\n' +
'<div style="font-size:.85rem;color:#9ca3af;margin-bottom:16px"><a href="/">Hanzi Genz</a> › Từ điển Hán-Việt</div>\n' +
'<h1>Từ điển Hán-Việt HSK 3.0</h1>\n' +
'<p style="color:#9ca3af">Tra nghĩa tiếng Việt + pinyin của ' + words.length + ' chữ Hán thường gặp. <a class="cta" href="/dictionary">Mở từ điển trong app →</a></p>\n' +
body +
'<p style="margin-top:40px;font-size:.8rem;color:#6b7280">Hanzi Genz — học từ vựng tiếng Trung HSK 1–9</p>\n' +
'</div>\n</body>\n</html>\n';
}

// ── 6. sitemap.xml + robots.txt ──
function sitemapXML(words) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [SITE + '/', SITE + '/tu-dien/'].concat(words.map(function(w) { return urlFor(w.h); }));
  return '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map(function(u) {
      return '  <url><loc>' + u + '</loc><lastmod>' + today + '</lastmod><changefreq>monthly</changefreq></url>';
    }).join('\n') +
    '\n</urlset>\n';
}
function robotsTXT() {
  return 'User-agent: *\nAllow: /\n\nSitemap: ' + SITE + '/sitemap.xml\n';
}

// ── 7. Run ──
function main() {
  console.log('Loading HSK3_DATA…');
  const all = loadWords();
  console.log('  ' + all.length + ' entries (mọi cấp).');
  const words = singleChars(all);
  console.log('  ' + words.length + ' chữ đơn (dedup) → sinh trang.');

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  words.forEach(function(w, i) {
    // Related: 6 chữ kế tiếp cùng cấp (vòng lại) cho crawl depth
    const related = [];
    for (let k = 1; k <= 6 && related.length < 6; k++) {
      const r = words[(i + k) % words.length];
      if (r && r.h !== w.h) related.push(r);
    }
    fs.writeFileSync(path.join(OUT_DIR, w.h + '.html'), pageHTML(w, related), 'utf8');
  });

  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), indexHTML(words), 'utf8');
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemapXML(words), 'utf8');
  fs.writeFileSync(path.join(ROOT, 'robots.txt'), robotsTXT(), 'utf8');

  console.log('Xong: ' + words.length + ' trang chữ + index + sitemap.xml + robots.txt');
}

main();
