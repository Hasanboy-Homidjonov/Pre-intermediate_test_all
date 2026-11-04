// build_final_index.js - Compiles index.html with all 20 units (1,000 questions)

const fs = require('fs');

const p1 = require('./unit_data_part1.js');
const p2 = require('./unit_data_part2.js');
const p3 = require('./unit_data_part3.js');
const p4 = require('./unit_data_part4.js');

const allUnits = [...p1, ...p2, ...p3, ...p4];

console.log(`Loaded ${allUnits.length} units with a total of ${allUnits.reduce((acc, u) => acc + u.questions.length, 0)} questions.`);

// Read the template / base from index.html
const indexContent = fs.readFileSync('index.html', 'utf8');

// Replace UNITS_DATA in index.html
const startMarker = 'const UNITS_DATA = [';
const endMarker = 'const I18N = {';

const startIndex = indexContent.indexOf(startMarker);
const endIndex = indexContent.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find markers in index.html');
  process.exit(1);
}

const prefix = indexContent.substring(0, startIndex);
const suffix = indexContent.substring(endIndex);

const unitsJson = 'const UNITS_DATA = ' + JSON.stringify(allUnits, null, 2) + ';\n\n    ';

let newContent = prefix + unitsJson + suffix;

// Ensure selectTopic updates count dropdown label
const oldSelectTopic = `function selectTopic(unitId) {
      state.selectedUnitId = unitId;
      const u = UNITS_DATA.find(x => x.id === unitId) || UNITS_DATA[0];
      document.getElementById('selectedUnitIcon').textContent = u.icon;
      document.getElementById('selectedUnitTitle').textContent = u.title;
      document.getElementById('selectedUnitSubtitle').textContent = u.subtitle;
    }`;

const newSelectTopic = `function selectTopic(unitId) {
      state.selectedUnitId = unitId;
      const u = UNITS_DATA.find(x => x.id === unitId) || UNITS_DATA[0];
      document.getElementById('selectedUnitIcon').textContent = u.icon;
      document.getElementById('selectedUnitTitle').textContent = u.title;
      document.getElementById('selectedUnitSubtitle').textContent = u.subtitle;
      updateCountOptionText(u);
    }

    function updateCountOptionText(unit) {
      const u = unit || UNITS_DATA.find(x => x.id === state.selectedUnitId) || UNITS_DATA[0];
      const opt = document.querySelector('#countSelect option[value=\"all\"]');
      if (opt) {
        const count = u.questions ? u.questions.length : 50;
        if (state.lang === 'ru') {
          opt.textContent = 'Все вопросы (' + count + ')';
        } else if (state.lang === 'en') {
          opt.textContent = 'All questions (' + count + ')';
        } else {
          opt.textContent = 'Barcha savollar (' + count + ' ta)';
        }
      }
    }`;

if (newContent.includes(oldSelectTopic)) {
  newContent = newContent.replace(oldSelectTopic, newSelectTopic);
}

// In applyLanguageUI, call updateCountOptionText()
const oldApplyLang = `function applyLanguageUI() {
      const t = I18N[state.lang] || I18N.uz;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
          el.textContent = t[key];
        }
      });
      const searchInp = document.getElementById('topicSearch');
      if (searchInp && t.topicSearchPlaceholder) {
        searchInp.placeholder = t.topicSearchPlaceholder;
      }
    }`;

const newApplyLang = `function applyLanguageUI() {
      const t = I18N[state.lang] || I18N.uz;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
          el.textContent = t[key];
        }
      });
      const searchInp = document.getElementById('topicSearch');
      if (searchInp && t.topicSearchPlaceholder) {
        searchInp.placeholder = t.topicSearchPlaceholder;
      }
      updateCountOptionText();
    }`;

if (newContent.includes(oldApplyLang)) {
  newContent = newContent.replace(oldApplyLang, newApplyLang);
}

// Update card rendering in modal to show badge with number of questions
const oldCardHtml = `card.innerHTML = 
          '<div class="flex items-center gap-3 truncate">' +
            '<span class="text-2xl p-2 rounded-xl bg-slate-200 dark:bg-slate-800 shrink-0">' + u.icon + '</span>' +
            '<div class="truncate">' +
              '<h4 class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white truncate">' + u.title + '</h4>' +
              '<p class="text-xs text-slate-500 dark:text-slate-400 truncate">' + u.subtitle + '</p>' +
            '</div>' +
          '</div>' +
          (isSelected ? '<span class="text-sky-500 font-black text-lg">✓</span>' : '');`;

const newCardHtml = `const qCountText = state.lang === 'ru' ? (u.questions.length + ' вопр.') : (state.lang === 'en' ? (u.questions.length + ' Qs') : (u.questions.length + ' ta test'));
        card.innerHTML = 
          '<div class="flex items-center gap-3 truncate">' +
            '<span class="text-2xl p-2 rounded-xl bg-slate-200 dark:bg-slate-800 shrink-0">' + u.icon + '</span>' +
            '<div class="truncate">' +
              '<h4 class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white truncate">' + u.title + '</h4>' +
              '<p class="text-xs text-slate-500 dark:text-slate-400 truncate">' + u.subtitle + '</p>' +
            '</div>' +
          '</div>' +
          '<div class=\"flex items-center gap-2 shrink-0\">' +
            '<span class=\"text-[11px] font-bold px-2 py-0.5 rounded-lg bg-sky-500/10 text-sky-500 dark:text-sky-400\">' + qCountText + '</span>' +
            (isSelected ? '<span class=\"text-sky-500 font-black text-lg\">✓</span>' : '') +
          '</div>';`;

if (newContent.includes(oldCardHtml)) {
  newContent = newContent.replace(oldCardHtml, newCardHtml);
}

fs.writeFileSync('index.html', newContent, 'utf8');
console.log('Successfully written index.html! File size:', fs.statSync('index.html').size, 'bytes');
