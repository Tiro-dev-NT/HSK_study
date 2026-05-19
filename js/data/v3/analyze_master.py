# -*- coding: utf-8 -*-
import csv, re, sys, os
sys.stdout.reconfigure(encoding='utf-8')
os.chdir(r'D:\Web_study_HSK\js\data\v3')

# Read master CSV
master = {}  # simplified -> {level, pinyin}
level_counts = {}
with open('hsk30_master.csv', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        simp = row['Simplified'].strip()
        lv   = row['Level'].strip()
        pin  = row['Pinyin'].strip()
        # Handle multi-form entries like "爸爸|爸"
        for word in simp.split('|'):
            word = word.strip()
            if word:
                master[word] = {'level': lv, 'pinyin': pin}
        level_counts[lv] = level_counts.get(lv, 0) + 1

print(f'Master total unique rows: {len(level_counts)} levels, entries breakdown:')
for lv in sorted(level_counts.keys(), key=lambda x: str(x)):
    print(f'  Level {lv}: {level_counts[lv]}')
print(f'Master total words (incl. variants): {len(master)}')

# Read all JS files
js_words = {}  # hanzi -> level
for lv in range(1, 10):
    fn = f'hsk3_lvl{lv}.js'
    if not os.path.exists(fn): continue
    with open(fn, encoding='utf-8') as f:
        content = f.read()
    for h in re.findall(r"h:'([^']+)'", content):
        js_words[h] = lv

print(f'\nJS total words: {len(js_words)}')

# Find missing per level
print('\n=== Words in master but NOT in any JS file ===')
missing_by_level = {}
for word, info in master.items():
    if word not in js_words:
        lv = info['level']
        if lv not in missing_by_level:
            missing_by_level[lv] = []
        missing_by_level[lv].append((word, info['pinyin']))

for lv in sorted(missing_by_level.keys(), key=lambda x: str(x)):
    items = missing_by_level[lv]
    print(f'  Level {lv}: {len(items)} missing')
    for w, p in items[:5]:
        print(f'    {w} ({p})')
    if len(items) > 5:
        print(f'    ... and {len(items)-5} more')

total_missing = sum(len(v) for v in missing_by_level.values())
print(f'\nTotal missing from JS: {total_missing}')

# Also check: JS words not in master (extra/incorrect)
print('\n=== JS words NOT in master (may be wrong level or extra) ===')
not_in_master = {h: lv for h, lv in js_words.items() if h not in master}
print(f'  Total JS words not in master: {len(not_in_master)}')
# Show by JS level
from collections import Counter
c = Counter(not_in_master.values())
for lv in sorted(c.keys()):
    print(f'  JS L{lv}: {c[lv]} words not in master')
