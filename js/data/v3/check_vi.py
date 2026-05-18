import re
VI_RE = re.compile(r'[ăâêôơưđảáàãạắặằẵấầẩẫậéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵ]', re.I)
for lv in (6,7,8,9):
    with open(f'hsk3_lvl{lv}.js', encoding='utf-8') as f:
        lines = f.readlines()
    total = vi = 0
    for line in lines:
        hm = re.search(r"h:'", line)
        vm = re.search(r"v:'((?:[^'\\]|\\.)*)'", line)
        if hm and vm:
            total += 1
            if VI_RE.search(vm.group(1)):
                vi += 1
    pct = vi*100//total if total else 0
    print(f'L{lv}: {vi}/{total} ({pct}%)')
