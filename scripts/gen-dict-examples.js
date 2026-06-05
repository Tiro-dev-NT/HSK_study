#!/usr/bin/env node
/*
 * gen-dict-examples.js — fill the `ex:{zh,py,vi,en}` field for HSK 3.0 vocab.
 *
 * Targets: js/data/v3/hsk3_lvl1.js … hsk3_lvl9.js (one word per line).
 * Two sources:
 *   1) FREE  — copy human-curated `ex` from the deprecated HSK 2.0 files
 *              (js/data/hsk1.js … hsk6.js) by matching the hanzi `h`.
 *   2) AI    — DeepSeek (direct) or OpenRouter for the rest. Needs an env key:
 *              DEEPSEEK_API_KEY  or  OPENROUTER_API_KEY.
 *
 * Idempotent + resumable: any line that already has `ex:{` is skipped, and the
 * source file is rewritten after every AI batch, so reruns never redo work or
 * lose paid output. BOM + CRLF are preserved; new `ex` uses single quotes like
 * the surrounding data, with proper JS-string escaping.
 *
 * Usage:
 *   node scripts/gen-dict-examples.js stats
 *   node scripts/gen-dict-examples.js free [level]
 *   node scripts/gen-dict-examples.js ai <level> [--limit=N] [--batch=20] [--provider=deepseek|openrouter] [--dry]
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const V3_DIR = path.join(ROOT, 'js', 'data', 'v3');
const HSK2_DIR = path.join(ROOT, 'js', 'data');
const CACHE_FILE = path.join(__dirname, '.dict-ex-cache.json'); // gitignored (scripts/ is)

// ───────────────────────── helpers: JS-string serialization ─────────────────
function jsStr(s) {
  return "'" + String(s == null ? '' : s)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/[\r\n]+/g, ' ')
    .trim() + "'";
}
function serEx(ex) {
  return 'ex:{zh:' + jsStr(ex.zh) + ',py:' + jsStr(ex.py) +
         ',vi:' + jsStr(ex.vi) + ',en:' + jsStr(ex.en) + '}';
}

const WORD_LINE = /^\s*\{\s*h:\s*'/;          // a data line
const HAS_EX = /\bex:\s*\{/;                    // already filled
const H_RE = /\{\s*h:\s*'([^']*)'/;            // capture hanzi

function insertEx(line, exStr) {
  const idx = line.lastIndexOf('}');           // only brace when no ex yet
  return line.slice(0, idx) + ', ' + exStr + line.slice(idx);
}

// ───────────────────────── load HSK 2.0 curated ex map ──────────────────────
function loadFreeExMap() {
  global.HSK_DATA = {};
  for (let i = 1; i <= 6; i++) global.HSK_DATA[i] = [];
  const files = fs.readdirSync(HSK2_DIR).filter(f => /^hsk[1-6][a-z]*\.js$/.test(f));
  const origLog = console.log; console.log = () => {}; // mute the data files' loaders
  for (const f of files) {
    try { eval(fs.readFileSync(path.join(HSK2_DIR, f), 'utf8')); } catch (_) {}
  }
  console.log = origLog;
  const map = {};
  for (let i = 1; i <= 6; i++)
    for (const w of (global.HSK_DATA[i] || []))
      if (w && w.h && w.ex && !map[w.h]) map[w.h] = w.ex;
  return map;
}

// ───────────────────────── load a v3 level (for AI: need p/v/e) ─────────────
function loadV3Level(level) {
  global.HSK3_DATA = {};
  for (let i = 1; i <= 9; i++) global.HSK3_DATA[i] = [];
  eval(fs.readFileSync(path.join(V3_DIR, 'hsk3_lvl' + level + '.js'), 'utf8').replace(/^﻿/, ''));
  return global.HSK3_DATA[level] || [];
}

// ───────────────────────── apply an ex map to a level file ──────────────────
// getEx(h) -> ex object | null. Returns {filled, skipped, missing}.
function applyToFile(level, getEx) {
  const file = path.join(V3_DIR, 'hsk3_lvl' + level + '.js');
  const raw = fs.readFileSync(file, 'utf8');
  const lines = raw.split('\n');
  let filled = 0, skipped = 0, missing = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!WORD_LINE.test(line)) continue;
    if (HAS_EX.test(line)) { skipped++; continue; }
    const m = line.match(H_RE);
    if (!m) continue;
    const ex = getEx(m[1]);
    if (!ex) { missing++; continue; }
    lines[i] = insertEx(line, serEx(ex));
    filled++;
  }
  if (filled > 0) fs.writeFileSync(file, lines.join('\n'));
  return { filled, skipped, missing };
}

// ───────────────────────── stats ────────────────────────────────────────────
function cmdStats() {
  const free = loadFreeExMap();
  let total = 0, withEx = 0, freeable = 0;
  for (let l = 1; l <= 9; l++) {
    const file = path.join(V3_DIR, 'hsk3_lvl' + l + '.js');
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    let t = 0, e = 0, f = 0;
    for (const line of lines) {
      if (!WORD_LINE.test(line)) continue;
      t++;
      if (HAS_EX.test(line)) { e++; continue; }
      const m = line.match(H_RE);
      if (m && free[m[1]]) f++;
    }
    total += t; withEx += e; freeable += f;
    console.log(`L${l}: ${t} words | ${e} with ex (${(100*e/t).toFixed(0)}%) | ${f} freeable | ${t-e-f} need AI`);
  }
  console.log(`TOTAL: ${total} | with ex ${withEx} (${(100*withEx/total).toFixed(1)}%) | freeable now ${freeable} | need AI ${total-withEx-freeable}`);
}

// ───────────────────────── free ─────────────────────────────────────────────
function cmdFree(level) {
  const free = loadFreeExMap();
  console.log(`HSK 2.0 curated ex available: ${Object.keys(free).length} unique hanzi`);
  const levels = level ? [Number(level)] : [1,2,3,4,5,6,7,8,9];
  let grand = 0;
  for (const l of levels) {
    const r = applyToFile(l, h => free[h] || null);
    grand += r.filled;
    console.log(`L${l}: +${r.filled} filled, ${r.skipped} already had ex, ${r.missing} no free match`);
  }
  console.log(`FREE done: +${grand} filled total.`);
}

// ───────────────────────── AI ───────────────────────────────────────────────
function loadCache() {
  try { return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')); } catch (_) { return {}; }
}
function saveCache(c) { fs.writeFileSync(CACHE_FILE, JSON.stringify(c)); }

function pickProvider(arg) {
  if (arg === 'openrouter' || (!arg && !process.env.DEEPSEEK_API_KEY && process.env.OPENROUTER_API_KEY))
    return { name: 'openrouter', url: 'https://openrouter.ai/api/v1/chat/completions',
             model: 'deepseek/deepseek-chat', key: process.env.OPENROUTER_API_KEY };
  return { name: 'deepseek', url: 'https://api.deepseek.com/chat/completions',
           model: 'deepseek-chat', key: process.env.DEEPSEEK_API_KEY };
}

const SYS_PROMPT =
`Bạn là biên soạn từ điển tiếng Trung cho người Việt mới học HSK. Với mỗi từ vựng được cho, viết MỘT câu ví dụ minh hoạ.
QUY TẮC BẮT BUỘC:
- Câu NGẮN, tự nhiên, đời thường; CHỈ dùng từ vựng HSK cấp thấp để người mới đọc hiểu.
- Câu zh PHẢI chứa CHÍNH chữ Hán của headword (đúng dạng đã cho).
- py = pinyin có dấu thanh (mā má mǎ mà), khớp đúng câu zh, viết hoa đầu câu, có dấu câu.
- vi = dịch tiếng Việt sát nghĩa; en = dịch tiếng Anh sát nghĩa.
- TRUNG TÍNH TUYỆT ĐỐI: KHÔNG chính trị, tôn giáo nhạy cảm, bạo lực, thương hiệu, nội dung người lớn.
- Dùng chữ Giản thể.
Trả về DUY NHẤT một JSON object: {"items":[{"h":"…","zh":"…","py":"…","vi":"…","en":"…"}]} theo đúng thứ tự, đủ mọi từ. Không thêm chữ nào ngoài JSON.`;

async function callAI(provider, words) {
  const userList = words.map(w => `${w.h} (${w.p}) = ${w.v}`).join('\n');
  const body = {
    model: provider.model,
    messages: [
      { role: 'system', content: SYS_PROMPT },
      { role: 'user', content: 'Viết ví dụ cho ' + words.length + ' từ sau:\n' + userList }
    ],
    temperature: 0.6,
    response_format: { type: 'json_object' }
  };
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + provider.key };
  if (provider.name === 'openrouter') { headers['HTTP-Referer'] = 'https://hanzigenz.com'; headers['X-Title'] = 'Hanzi Genz'; }
  const res = await fetch(provider.url, { method: 'POST', headers, body: JSON.stringify(body) });
  if (!res.ok) throw new Error('HTTP ' + res.status + ': ' + (await res.text()).slice(0, 300));
  const data = await res.json();
  const content = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
  if (!content) throw new Error('No content in response');
  let parsed;
  try { parsed = JSON.parse(content); }
  catch (_) { const m = content.match(/\{[\s\S]*\}/); parsed = JSON.parse(m[0]); }
  const items = Array.isArray(parsed) ? parsed : (parsed.items || parsed.data || []);
  return items;
}

function validItem(it, h) {
  return it && it.zh && it.py && it.vi && it.en &&
         typeof it.zh === 'string' && it.zh.includes(h);
}

async function cmdAI(level, opts) {
  if (!level) { console.error('Usage: ai <level>'); process.exit(1); }
  const provider = pickProvider(opts.provider);
  if (!provider.key) {
    console.error('\nMISSING API KEY. Set one of:\n  $env:DEEPSEEK_API_KEY="sk-..."   (PowerShell)\n  $env:OPENROUTER_API_KEY="sk-or-..."\nthen rerun. Nothing was changed.');
    process.exit(2);
  }
  const batchSize = opts.batch || 20;
  const cache = loadCache();

  // collect words still missing ex on this level
  const arr = loadV3Level(level);
  // re-read file to know which lines lack ex (loadV3Level loses that detail since ex may be absent anyway)
  const fileLines = fs.readFileSync(path.join(V3_DIR, 'hsk3_lvl' + level + '.js'), 'utf8').split('\n');
  const haveEx = new Set();
  for (const line of fileLines) {
    if (WORD_LINE.test(line) && HAS_EX.test(line)) { const m = line.match(H_RE); if (m) haveEx.add(m[1]); }
  }
  let pending = arr.filter(w => !haveEx.has(w.h) && !cache[w.h]);
  // de-dup by hanzi within pending (keep first)
  const seen = new Set(); pending = pending.filter(w => seen.has(w.h) ? false : (seen.add(w.h), true));
  if (opts.limit) pending = pending.slice(0, opts.limit);

  const cachedAvail = arr.filter(w => !haveEx.has(w.h) && cache[w.h]).length;
  console.log(`L${level}: ${pending.length} words to query (provider=${provider.name}, model=${provider.model}, batch=${batchSize}). ${cachedAvail} already in cache.`);
  if (opts.dry) { console.log('[--dry] no API calls, no writes.'); return; }

  for (let i = 0; i < pending.length; i += batchSize) {
    const batch = pending.slice(i, i + batchSize);
    let items = [];
    let attempt = 0;
    while (attempt < 3) {
      try { items = await callAI(provider, batch); break; }
      catch (e) {
        attempt++;
        console.warn(`  batch ${i}-${i+batch.length} attempt ${attempt} failed: ${e.message}`);
        if (attempt >= 3) { items = []; }
        else await new Promise(r => setTimeout(r, 1500 * attempt));
      }
    }
    const byH = {};
    for (const it of items) if (it && it.h) byH[it.h] = it;
    let ok = 0, bad = 0;
    for (const w of batch) {
      const it = byH[w.h];
      if (validItem(it, w.h)) { cache[w.h] = { zh: it.zh, py: it.py, vi: it.vi, en: it.en }; ok++; }
      else bad++;
    }
    saveCache(cache);
    // write what we have for this level so progress persists
    const r = applyToFile(level, h => cache[h] || null);
    process.stdout.write(`  [${Math.min(i+batchSize,pending.length)}/${pending.length}] batch ok:${ok} bad:${bad} | file +${r.filled}\n`);
  }
  const r = applyToFile(level, h => cache[h] || null);
  console.log(`L${level} AI pass done. File total filled this run section: ${r.filled} (cumulative ex now in file).`);
}

// ───────────────────────── main ─────────────────────────────────────────────
(async () => {
  const argv = process.argv.slice(2);
  const cmd = argv[0];
  const positional = argv.slice(1).filter(a => !a.startsWith('--'));
  const flags = {};
  for (const a of argv) {
    if (a.startsWith('--')) { const [k, v] = a.slice(2).split('='); flags[k] = v === undefined ? true : v; }
  }
  const opts = {
    limit: flags.limit ? Number(flags.limit) : 0,
    batch: flags.batch ? Number(flags.batch) : 20,
    provider: flags.provider,
    dry: !!flags.dry
  };

  if (cmd === 'stats') return cmdStats();
  if (cmd === 'free') return cmdFree(positional[0]);
  if (cmd === 'ai') return cmdAI(positional[0], opts);
  console.log('Commands:\n  stats\n  free [level]\n  ai <level> [--limit=N] [--batch=20] [--provider=deepseek|openrouter] [--dry]');
})().catch(e => { console.error(e); process.exit(1); });
