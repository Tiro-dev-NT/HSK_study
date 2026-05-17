// Final script to import 2,402 missing HSK 2.0 words into app database
const fs = require('fs');
const path = require('path');

console.log('='.repeat(80));
console.log('IMPORTING MISSING HSK 2.0 WORDS');
console.log('='.repeat(80) + '\n');

// Import strategy for each level
const importPlan = {
  1: { targetFile: 'js/data/hsk1.js', method: 'append' },
  2: { targetFile: 'js/data/hsk2.js', method: 'append' },
  3: { targetFile: 'js/data/hsk3.js', method: 'append' },
  4: { targetFile: 'js/data/hsk4f.js', method: 'new_batch' }, // Create new batch file
  5: { targetFile: 'js/data/hsk5o.js', method: 'new_batch' }, // Create new batch file
  6: { targetFile: 'js/data/hsk6z.js', method: 'new_batch' }  // Create new batch file
};

// Helper to format word for JS
function formatWord(word) {
  const ex = word.ex || {
    zh: `${word.h}。`,
    py: `${word.p}.`,
    vi: `${word.v}.`,
    en: `${word.e}.`
  };

  return `  {h:"${word.h}",p:"${word.p}",v:"${word.v}",e:"${word.e}",t:"${word.t}",ex:{zh:"${ex.zh}",py:"${ex.py}",vi:"${ex.vi}",en:"${ex.en}"}}`;
}

// Process each level
for (let lv = 1; lv <= 6; lv++) {
  const importFile = `temp_hsk_data/to_import_level_${lv}.json`;

  if (!fs.existsSync(importFile)) {
    console.log(`HSK ${lv}: No words to import`);
    continue;
  }

  const wordsToImport = require(`./${importFile}`);
  console.log(`\nHSK ${lv}: Importing ${wordsToImport.length} words...`);

  const plan = importPlan[lv];
  const targetPath = path.join(__dirname, plan.targetFile);

  if (plan.method === 'append') {
    // For HSK 1-3: append to existing file
    let content = fs.readFileSync(targetPath, 'utf8');

    // Find the closing bracket and console.log
    const closingPattern = /\];[\s\S]*console\.log/;
    const match = content.match(closingPattern);

    if (match) {
      const insertPos = content.indexOf(match[0]);
      const wordsCode = wordsToImport.map(w => formatWord(w)).join(',\n');

      // Insert before closing bracket
      content = content.slice(0, insertPos) + ',\n' + wordsCode + '\n' + content.slice(insertPos);

      fs.writeFileSync(targetPath, content, 'utf8');
      console.log(`  ✓ Appended to ${plan.targetFile}`);
    }
  } else if (plan.method === 'new_batch') {
    // For HSK 4-6: create new batch file
    const batchLetter = lv === 4 ? 'g' : lv === 5 ? 'p' : 'aa';
    const newFile = `js/data/hsk${lv}${batchLetter}.js`;
    const newPath = path.join(__dirname, newFile);

    const wordsCode = wordsToImport.map(w => formatWord(w)).join(',\n');

    const batchContent = `// HSK ${lv} Vocabulary — Batch ${batchLetter} (HSK 2.0 補充)
(function() {
  var batch = [
${wordsCode}
  ];

  var ex = new Set(HSK_DATA[${lv}].map(function(w){return w.h;}));
  batch.forEach(function(w){if(!ex.has(w.h)){HSK_DATA[${lv}].push(w);ex.add(w.h);}});
  console.log('[HSK${lv}] batch${batchLetter} total:',HSK_DATA[${lv}].length);
})();
`;

    fs.writeFileSync(newPath, batchContent, 'utf8');
    console.log(`  ✓ Created new file ${newFile}`);
  }
}

console.log('\n' + '='.repeat(80));
console.log('IMPORT COMPLETE');
console.log('='.repeat(80));
console.log('\n⚠️  IMPORTANT NOTES:');
console.log('1. Vietnamese translations (v field) are English placeholders');
console.log('2. Example sentences (ex field) are basic placeholders');
console.log('3. New batch files created: hsk4g.js, hsk5p.js, hsk6aa.js');
console.log('\nNEXT STEPS:');
console.log('1. Add new files to index.html: <script src="js/data/hsk4g.js"></script>');
console.log('2. Add new files to index.html: <script src="js/data/hsk5p.js"></script>');
console.log('3. Add new files to index.html: <script src="js/data/hsk6aa.js"></script>');
console.log('4. Run node analyze_hsk_data.js to verify');
console.log('5. Test app in browser');
console.log('6. Translate Vietnamese and add proper example sentences later');
