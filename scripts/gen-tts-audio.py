#!/usr/bin/env python3
"""
gen-tts-audio.py — Pre-gen Edge TTS audio cho TỪ ĐIỂN (HSK 1-3) + PINYIN HSK 0.
Phát kèm fallback Web Speech ở client (js/tts-audio.js).

Usage:
    python3 scripts/gen-tts-audio.py            # gen tất cả file còn thiếu
    python3 scripts/gen-tts-audio.py --dry-run  # chỉ liệt kê, không gen
    python3 scripts/gen-tts-audio.py --limit=50 # gen tối đa 50 file (thử nhanh)

Output: assets/tts/audio/<text>.mp3   ← tên file = CHÍNH chữ Hán (raw UTF-8)
    R2 key cũng raw (你好.mp3). Client request encodeURIComponent(text) →
    Cloudflare DECODE path → khớp key raw. (KHÔNG đặt tên file dạng %XX:
    Cloudflare decode URL nên key %XX sẽ không khớp → 404.)
    Bijective với text → 0 collision. KHÔNG hash (djb2 collide).
Skip-if-exists: chạy lại an toàn (incremental).

Namespace chung: từ điển (word.h) và pinyin (chữ ví dụ) chia sẻ audio cùng chữ.

⚠️ DEPLOY: production phục vụ audio từ Cloudflare R2 (cdn.hanzigenz.com), KHÔNG
từ git. Sau khi gen, đẩy lên R2 (R2 key = tts/word/<slug>.mp3 ↔ TTSAudio.PATH):
    rclone copy assets/tts/audio r2:hanzigenz-assets/tts/word \
      --header-upload "Cache-Control: public, max-age=31536000, immutable" --progress
Rồi BẬT trong js/tts-audio.js: ENABLED = true (+ bump ?v) → client dùng audio thật.
"""

import asyncio
import json
import os
import re
import subprocess
import sys
from urllib.parse import quote

# 1 giọng trung tính, rõ — read-aloud từ điển/pinyin (khác cast Mai có nhân vật).
VOICE = 'zh-CN-XiaoxiaoNeural'
RATE  = '+0%'
CONCURRENCY = 6

# Node: nạp HSK3_DATA L1-3 (từ điển) → trả mảng chữ Hán `h`.
NODE_EXTRACT = r"""
const fs = require('fs'), path = require('path');
const dir = process.argv[1];
global.HSK3_DATA = {};
['hsk3_data.js','hsk3_lvl1.js','hsk3_lvl2.js','hsk3_lvl3.js'].forEach(f => {
  eval(fs.readFileSync(path.join(dir, f), 'utf8'));
});
const out = [];
for (const lvl of [1,2,3]) for (const w of (HSK3_DATA[lvl] || [])) if (w && w.h) out.push(w.h);
process.stdout.write(JSON.stringify(out));
"""

def key_for(text):
    """Tên file = chữ Hán RAW. R2 key raw; client encodeURIComponent → CF decode → khớp.
    KHÔNG dùng %XX (CF decode URL → key %XX không khớp). Bijective, 0 collision."""
    return text

def collect_texts(base_dir):
    texts = []
    seen = set()
    def add(t):
        t = (t or '').strip()
        if t and t not in seen:
            seen.add(t); texts.append(t)

    # (a) Từ điển HSK 1-3 — h từ HSK3_DATA[1..3]
    v3 = os.path.join(base_dir, 'js', 'data', 'v3')
    res = subprocess.run(['node', '-e', NODE_EXTRACT, v3],
                         capture_output=True, text=True, encoding='utf-8')
    if res.returncode != 0:
        print('Node extract error:', res.stderr[:600]); sys.exit(1)
    for h in json.loads(res.stdout):
        add(h)
    n_dict = len(texts)

    # (b) Pinyin HSK 0 — gom mọi cụm chữ Hán trong data hsk0 (chữ ví dụ initials/finals/strokes)
    hsk0 = os.path.join(base_dir, 'js', 'data', 'hsk0')
    cjk = re.compile(r'[一-鿿]+')
    if os.path.isdir(hsk0):
        for fn in os.listdir(hsk0):
            if not fn.endswith('.js'):
                continue
            txt = open(os.path.join(hsk0, fn), 'r', encoding='utf-8').read()
            for m in cjk.findall(txt):
                add(m)
    n_pinyin = len(texts) - n_dict
    print(f'Thu thập: {n_dict} từ điển HSK1-3 + {n_pinyin} cụm pinyin HSK0 mới = {len(texts)} text duy nhất')
    return texts

async def gen_one(sem, text, out_dir, dry):
    fp = os.path.join(out_dir, key_for(text) + '.mp3')
    if os.path.exists(fp) and os.path.getsize(fp) > 0:
        return 'skip'
    if dry:
        return 'would-gen'
    import edge_tts
    async with sem:
        comm = edge_tts.Communicate(text, VOICE, rate=RATE)
        await comm.save(fp)
    if os.path.getsize(fp) == 0:
        os.remove(fp); raise RuntimeError('Empty TTS file: ' + text)
    return 'gen'

async def main():
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    dry = '--dry-run' in sys.argv
    limit = None
    for a in sys.argv:
        if a.startswith('--limit='):
            limit = int(a.split('=', 1)[1])

    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out_dir  = os.path.join(base_dir, 'assets', 'tts', 'audio')
    os.makedirs(out_dir, exist_ok=True)

    # Dọn file 0-byte từ lần fail trước
    for fn in os.listdir(out_dir):
        if fn.endswith('.mp3') and os.path.getsize(os.path.join(out_dir, fn)) == 0:
            os.remove(os.path.join(out_dir, fn))

    texts = collect_texts(base_dir)
    if limit:
        texts = texts[:limit]

    sem = asyncio.Semaphore(CONCURRENCY)
    counts = {'gen': 0, 'skip': 0, 'would-gen': 0, 'fail': 0}
    tasks = [gen_one(sem, t, out_dir, dry) for t in texts]
    for i, fut in enumerate(asyncio.as_completed(tasks), 1):
        try:
            counts[await fut] += 1
        except Exception as e:
            counts['fail'] += 1
            print('  fail:', str(e)[:120])
        if i % 200 == 0:
            print(f'  ...{i}/{len(texts)}')

    print('\nXong:', counts)
    if not dry and counts['gen']:
        print('\n→ Đẩy lên R2:')
        print('  rclone copy assets/tts/audio r2:hanzigenz-assets/tts/word \\')
        print('    --header-upload "Cache-Control: public, max-age=31536000, immutable" --progress')
        print('→ Rồi BẬT ENABLED=true trong js/tts-audio.js (+ bump ?v).')

if __name__ == '__main__':
    asyncio.run(main())
