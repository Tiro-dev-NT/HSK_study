#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re, sys

VI_RE = re.compile(
    r'[ăâêôơưđảáàãạắặằẵấầẩẫậéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵ]',
    re.IGNORECASE
)

for lv in (1, 2, 3, 4, 5, 6, 7, 8, 9):
    fn = f'hsk3_lvl{lv}.js'
    with open(fn, encoding='utf-8') as f:
        lines = f.readlines()
    missing = []
    for line in lines:
        hm = re.search(r"h:'([^']+)'", line)
        vm = re.search(r"v:'((?:[^'\\]|\\.)*)'", line)
        if hm and vm:
            if not VI_RE.search(vm.group(1)):
                missing.append((hm.group(1), vm.group(1)))
    out_file = f'missing_vi_l{lv}.txt'
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(f'L{lv} missing ({len(missing)}):\n')
        for h, v in missing:
            f.write(f'  {h}: {v}\n')
    print(f'L{lv}: {len(missing)} missing -> {out_file}')
