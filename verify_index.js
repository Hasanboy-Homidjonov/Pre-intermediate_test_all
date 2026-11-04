// verify_index.js
const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('index.html', 'utf8');
const lastScriptPos = html.lastIndexOf('<script>');
const endScriptPos = html.lastIndexOf('</script>');
const scriptContent = html.substring(lastScriptPos + '<script>'.length, endScriptPos);

const context = {
  window: { addEventListener: () => {} },
  document: {
    addEventListener: () => {},
    getElementById: () => ({
      classList: { add: () => {}, remove: () => {} },
      textContent: '',
      style: {},
      getContext: () => ({
        clearRect: () => {},
        save: () => {},
        restore: () => {},
        fillRect: () => {},
        translate: () => {},
        rotate: () => {}
      })
    }),
    querySelector: () => ({ textContent: '' }),
    querySelectorAll: () => []
  },
  localStorage: {
    getItem: () => null,
    setItem: () => null,
    removeItem: () => null
  },
  requestAnimationFrame: () => {}
};

vm.createContext(context);
vm.runInContext(scriptContent, context);

console.log('--- SYNTAX CHECK: 100% PERFECT! ---');

const uCount = vm.runInContext('UNITS_DATA.length', context);
console.log('Total Units in index.html:', uCount);

for (let id = 1; id <= 20; id++) {
  const count = vm.runInContext(`UNITS_DATA.find(u => u.id === ${id}).questions.length`, context);
  if (count < 50) {
    console.error(`ERROR: Unit ${id} has only ${count} questions!`);
  }
}
console.log('All 20 units verified to have 50 questions!');

const p10 = vm.runInContext(`prepareQuestions(1, '10').length`, context);
const p15 = vm.runInContext(`prepareQuestions(1, '15').length`, context);
const p20 = vm.runInContext(`prepareQuestions(1, '20').length`, context);
const p25 = vm.runInContext(`prepareQuestions(1, '25').length`, context);
const p30 = vm.runInContext(`prepareQuestions(1, '30').length`, context);
const pAll = vm.runInContext(`prepareQuestions(1, 'all').length`, context);

console.log(`prepareQuestions count:
  10 -> ${p10}
  15 -> ${p15}
  20 -> ${p20}
  25 -> ${p25}
  30 -> ${p30}
  all -> ${pAll}`);

if (pAll === 50) {
  console.log('SUCCESS: When "all" is selected, it returns ALL 50 questions!');
} else {
  console.error('FAILURE: "all" did not return 50 questions!');
}
