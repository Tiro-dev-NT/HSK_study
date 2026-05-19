# -*- coding: utf-8 -*-
import re, sys, os
sys.stdout.reconfigure(encoding='utf-8')
os.chdir(r'D:\Web_study_HSK\js\data\v3')

VI_RE = re.compile(r'[ăâêôơưđảáàãạắặằẵấầẩẫậéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵ]', re.IGNORECASE)

total_words = 0
total_vi = 0
for lv in range(1, 10):
    fn = f'hsk3_lvl{lv}.js'
    if not os.path.exists(fn): continue
    with open(fn, encoding='utf-8') as f:
        lines = f.readlines()
    n_total = 0
    n_vi = 0
    for line in lines:
        hm = re.search(r"h:'([^']+)'", line)
        vm = re.search(r"v:'((?:[^'\\]|\\.)*)'", line)
        if hm and vm:
            n_total += 1
            if VI_RE.search(vm.group(1)):
                n_vi += 1
    pct = n_vi / n_total * 100 if n_total else 0
    flag = 'OK' if pct == 100 else ('!!' if pct > 80 else 'XX')
    print(f'L{lv}: {n_vi}/{n_total} ({pct:.0f}%) [{flag}]')
    total_words += n_total
    total_vi += n_vi

print(f'TOTAL: {total_vi}/{total_words} ({total_vi/total_words*100:.1f}%)')
