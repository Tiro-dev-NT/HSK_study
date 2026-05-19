# -*- coding: utf-8 -*-
import re, sys, os
sys.stdout.reconfigure(encoding='utf-8')
os.chdir(r'D:\Web_study_HSK\js\data\v3')

# Official HSK 3.0 word counts (new words per level)
official = {1:500, 2:500, 3:300, 4:600, 5:1300, 6:2500, 7:1000, 8:1000, 9:3636}

total_js = 0
total_off = 0

print(f"{'Level':<6} {'JS':>6} {'Official':>10} {'Diff':>7}")
print('-' * 32)
for lv in range(1, 10):
    fn = f'hsk3_lvl{lv}.js'
    if os.path.exists(fn):
        with open(fn, encoding='utf-8') as f:
            n = len(re.findall(r"h:'[^']+'", f.read()))
    else:
        n = 0
    off = official.get(lv, 0)
    diff = n - off
    total_js += n
    total_off += off
    sign = '+' if diff > 0 else ''
    print(f"L{lv:<5} {n:>6} {off:>10} {sign}{diff:>6}")

print('-' * 32)
diff_total = total_js - total_off
sign = '+' if diff_total > 0 else ''
print(f"{'TOTAL':<6} {total_js:>6} {total_off:>10} {sign}{diff_total:>6}")
