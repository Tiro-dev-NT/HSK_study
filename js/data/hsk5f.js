// HSK 5 — Batch F (final 2 missing words)
(function() {
  var b = [
  {h:"彼此",p:"bǐcǐ",v:"Lẫn nhau / mỗi người",e:"Each other/mutually",t:"general",
   ex:{zh:"我们彼此了解，合作很顺利。",py:"Wǒmen bǐcǐ liǎojiě, hézuò hěn shùnlì.",
       vi:"Chúng tôi hiểu nhau nên hợp tác rất suôn sẻ.",en:"We understand each other, so cooperation goes smoothly."}},
  {h:"效益",p:"xiàoyì",v:"Hiệu quả / lợi ích",e:"Benefit/efficiency",t:"work",
   ex:{zh:"提高经济效益是企业的首要目标。",py:"Tígāo jīngjì xiàoyì shì qǐyè de shǒuyào mùbiāo.",
       vi:"Nâng cao hiệu quả kinh tế là mục tiêu hàng đầu của doanh nghiệp.",en:"Improving economic efficiency is a company's top priority."}},
  ];
  var ex = new Set(HSK_DATA[5].map(function(w){return w.h;}));
  b.forEach(function(w){if(!ex.has(w.h)){HSK_DATA[5].push(w);ex.add(w.h);}});
  console.log('[HSK5] batchF total:',HSK_DATA[5].length);
})();
