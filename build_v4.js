// build_v4.js - Adding Auto-advance on correct, Manual next on incorrect, Dark/Light mode, and UZ/EN/RU Multilingual support
const fs = require('fs');
const path = require('path');

console.log("Compiling v4 index.html with auto-advance, theme toggle, and multilingual engine...");

// Read existing units dataset from build_v3.js
const v3Code = fs.readFileSync(path.join(__dirname, 'build_v3.js'), 'utf-8');
const unitsMatch = v3Code.match(/const units = (\[[\s\S]*?\]);\n\n\/\/ Build master HTML/);
if (!unitsMatch) {
  console.error("Could not extract units from build_v3.js");
  process.exit(1);
}
const vm = require('vm');
const units = vm.runInNewContext(unitsMatch[1]);
console.log(`Extracted ${units.length} units.`);

// HTML Template with dark/light themes and UZ/EN/RU translation dictionaries
const htmlContent = `<!DOCTYPE html>
<html lang="uz" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>English B1 Quiz — Interaktiv Test Dasturi</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            app: {
              bg: '#080d1a',
              card: '#0f172a',
              border: '#1e293b'
            }
          }
        }
      }
    }
  </script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; transition: background-color 0.25s ease, color 0.25s ease; }
    
    #confettiCanvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
    }

    .btn-opt {
      transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .btn-opt:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 14px -2px rgba(14, 165, 233, 0.3);
    }
    .btn-opt:active:not(:disabled) {
      transform: translateY(0);
    }

    @keyframes floatUp {
      0% { opacity: 0; transform: translateY(12px) scale(0.9); }
      20% { opacity: 1; transform: translateY(0) scale(1.05); }
      80% { opacity: 1; transform: translateY(-4px) scale(1); }
      100% { opacity: 0; transform: translateY(-16px) scale(0.95); }
    }
    .praise-anim {
      animation: floatUp 1.2s ease-out forwards;
    }

    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-thumb { background: #475569; border-radius: 9999px; }
  </style>
</head>
<body class="bg-[#080d1a] dark:bg-[#080d1a] text-slate-100 dark:text-slate-100 min-h-screen flex flex-col selection:bg-sky-500 selection:text-white transition-colors duration-200">

  <!-- Confetti Canvas -->
  <canvas id="confettiCanvas"></canvas>

  <!-- ================= TOP HEADER ================= -->
  <header class="border-b border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-[#0c1324]/90 backdrop-blur px-4 py-3 sticky top-0 z-30 transition-colors">
    <div class="max-w-4xl mx-auto flex items-center justify-between gap-3">
      
      <!-- Brand -->
      <div class="flex items-center gap-2.5 cursor-pointer shrink-0" onclick="showHomeScreen()">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-sky-500/25">
          ⚡
        </div>
        <div>
          <h1 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-none">English B1 Quiz</h1>
          <span class="text-[10px] text-slate-500 dark:text-slate-400 font-semibold" data-i18n="subtitle">Pre-Intermediate Level</span>
        </div>
      </div>

      <!-- Controls: Streak, Sound, Theme, Language, Profile -->
      <div class="flex items-center gap-2 sm:gap-2.5">
        
        <!-- Streak -->
        <div id="streakBadge" class="hidden flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 dark:text-amber-400 font-bold text-xs">
          <span>🔥</span>
          <span id="streakCount">0</span>
        </div>

        <!-- Language Switcher Dropdown -->
        <div class="relative">
          <select 
            id="langSelector" 
            onchange="setLanguage(this.value)"
            class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold px-2 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 focus:outline-none cursor-pointer"
          >
            <option value="uz">🇺🇿 UZB</option>
            <option value="en">🇬🇧 ENG</option>
            <option value="ru">🇷🇺 RUS</option>
          </select>
        </div>

        <!-- Dark / Light Theme Toggle Button -->
        <button 
          onclick="toggleTheme()" 
          id="themeBtn" 
          class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-amber-400 border border-slate-300 dark:border-slate-700 transition" 
          title="Mavzuni o'zgartirish (Oq / Qora fon)"
        >
          🌙
        </button>

        <!-- Sound Toggle -->
        <button 
          onclick="toggleSound()" 
          id="soundBtn" 
          class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-amber-500 dark:text-amber-400 border border-slate-300 dark:border-slate-700 transition" 
          title="Ovoz"
        >
          🔊
        </button>

        <!-- User Profile Pill -->
        <button 
          onclick="openProfileModal()" 
          id="profileBtn" 
          class="flex items-center gap-1.5 pl-1 pr-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition shrink-0"
        >
          <img id="userAvatar" src="https://lh3.googleusercontent.com/a/default-user=s96-c" alt="Avatar" class="w-6 h-6 rounded-full object-cover">
          <span id="userName" class="text-xs font-bold text-slate-800 dark:text-slate-200 max-w-[80px] sm:max-w-[110px] truncate" data-i18n="login">Kirish</span>
        </button>

      </div>
    </div>
  </header>

  <!-- ================= MAIN CONTAINER ================= -->
  <main class="flex-1 max-w-4xl mx-auto w-full p-4 flex flex-col justify-center">

    <!-- ================= SCREEN 0: MANDATORY AUTH GATE ================= -->
    <div id="authGateScreen" class="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-center max-w-lg mx-auto w-full transition-colors">
      <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-3xl shadow-lg shadow-sky-600/30">
        🔐
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2" data-i18n="authTitle">Dasturga Xush Kelibsiz!</h2>
      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed" data-i18n="authDesc">
        Testlarni yechish, natijalarni saqlash va ballarni hisoblash uchun Google profilingiz orqali tizimga kiring.
      </p>

      <!-- Google Sign In Button -->
      <button 
        onclick="doGoogleSignIn()" 
        class="w-full py-3.5 px-4 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-2xl text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg transition active:scale-[0.98] mb-3"
      >
        <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
        <span data-i18n="googleBtn">Google orqali kirish (hasanboy.azizjonovich)</span>
      </button>

      <p class="text-[11px] text-slate-500" data-i18n="authHint">1-bosqichda profilingiz saqlanadi va bepul ochiladi.</p>
    </div>

    <!-- ================= SCREEN 1: CLEAN SETUP ================= -->
    <div id="setupScreen" class="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl hidden transition-colors">
      
      <div class="mb-6 text-center">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2" data-i18n="setupTitle">Mavzuni tanlang va Boshlang! 🎯</h2>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400" data-i18n="setupSubtitle">To'g'ri topsangiz avtomatik o'tadi, xatoda esa tushuntirish beriladi.</p>
      </div>

      <!-- 1. MAVZU TANLASH (Custom Beautiful Card) -->
      <div class="mb-6">
        <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2" data-i18n="topicLabel">
          📚 Dars / Mavzuni tanlang:
        </label>
        
        <button 
          type="button" 
          onclick="openTopicModal()" 
          id="topicSelectBtn"
          class="w-full bg-slate-50 dark:bg-[#131d33] hover:bg-slate-100 dark:hover:bg-[#1a2642] border-2 border-slate-200 dark:border-slate-700 hover:border-sky-500 rounded-2xl p-4 text-left flex items-center justify-between gap-3 transition"
        >
          <div class="flex items-center gap-3 overflow-hidden">
            <span id="selectedUnitIcon" class="text-2xl p-2 rounded-xl bg-slate-200 dark:bg-slate-800 shrink-0">👤</span>
            <div class="truncate">
              <h4 id="selectedUnitTitle" class="text-base font-extrabold text-slate-900 dark:text-white truncate">Unit 1: All About Me</h4>
              <p id="selectedUnitSubtitle" class="text-xs text-slate-500 dark:text-slate-400 truncate">Present Simple vs Continuous • Appearance & Personality</p>
            </div>
          </div>
          <span class="text-sky-500 dark:text-sky-400 font-bold text-xs bg-sky-500/10 px-3 py-1.5 rounded-xl shrink-0" data-i18n="changeBtn">O'zgartirish ▾</span>
        </button>
      </div>

      <!-- 2. SAVOLLAR SONI (1 ta Select Dropdown) -->
      <div class="mb-8">
        <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2" data-i18n="countLabel">
          🔢 Savollar soni:
        </label>
        
        <div class="relative">
          <select 
            id="countSelect" 
            class="w-full bg-slate-50 dark:bg-[#131d33] border-2 border-slate-200 dark:border-slate-700 hover:border-sky-500 rounded-2xl px-4 py-3.5 text-base font-bold text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 transition appearance-none cursor-pointer"
            onchange="state.selectedCount = this.value"
          >
            <option value="10" selected data-i18n="cnt10">10 ta savol</option>
            <option value="15" data-i18n="cnt15">15 ta savol</option>
            <option value="20" data-i18n="cnt20">20 ta savol</option>
            <option value="25" data-i18n="cnt25">25 ta savol</option>
            <option value="30" data-i18n="cnt30">30 ta savol</option>
            <option value="all" data-i18n="cntAll">Barcha savollar</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-sky-500 dark:text-sky-400 font-bold">
            ▼
          </div>
        </div>
      </div>

      <!-- Start Button -->
      <button 
        onclick="startQuizSession()" 
        class="w-full py-4 rounded-2xl font-extrabold text-base sm:text-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-xl shadow-sky-600/30 active:scale-[0.98] transition flex items-center justify-center gap-2"
      >
        <span data-i18n="startBtn">Testni Boshlash</span>
        <span>🚀</span>
      </button>

    </div>

    <!-- ================= SCREEN 2: ACTIVE QUIZ ================= -->
    <div id="quizScreen" class="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-8 shadow-2xl relative min-h-[440px] flex flex-col justify-between hidden transition-colors">
      
      <!-- Top Bar: Progress & Counter -->
      <div>
        <div class="flex items-center justify-between text-xs sm:text-sm font-extrabold text-slate-700 dark:text-slate-300 mb-2">
          <span id="quizCounterText" class="text-sky-500 dark:text-sky-400 font-bold">1 / 10</span>
          <div class="text-emerald-500 dark:text-emerald-400 font-bold" id="quizScoreText">Ball: 0</div>
        </div>

        <!-- Progress Bar -->
        <div class="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-5">
          <div id="progressBar" class="h-full bg-gradient-to-r from-sky-500 to-emerald-400 rounded-full transition-all duration-300" style="width: 10%;"></div>
        </div>

        <!-- Question Sentence -->
        <div class="flex items-start justify-between gap-3 mb-6">
          <h3 id="questionSentence" class="text-lg sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-relaxed">
            Question text goes here...
          </h3>
          <button onclick="speakCurrentSentence()" class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 shrink-0 transition" title="Listen">
            🔊
          </button>
        </div>
      </div>

      <!-- Floating Praise Badge -->
      <div id="praiseContainer" class="h-6 flex items-center justify-center mb-2"></div>

      <!-- Response Options (NO A, B, C, D LETTERS — Pure Clean Buttons) -->
      <div id="responseArea" class="my-auto py-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <!-- Rendered via JS -->
      </div>

      <!-- Rule Tip Box (Shows on incorrect answer) -->
      <div id="ruleTipBox" class="mt-4 p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/40 text-xs sm:text-sm text-slate-800 dark:text-slate-300 hidden">
        <div class="flex items-start gap-2.5">
          <span class="text-base shrink-0">💡</span>
          <div>
            <h5 class="font-bold text-sky-600 dark:text-sky-400 mb-0.5" data-i18n="tipHeader">Qoida & Tushuntirish:</h5>
            <p id="ruleTipText" class="leading-relaxed"></p>
          </div>
        </div>
      </div>

      <!-- Bottom Next Bar (Visible only when answer is INCORRECT so user advances manually) -->
      <div class="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
        <button onclick="showHomeScreen()" class="text-xs text-slate-400 hover:text-rose-500 font-bold transition" data-i18n="exitBtn">
          ✕ Chiqish (Stop)
        </button>

        <button 
          id="nextBtn" 
          onclick="nextQuestion()" 
          class="hidden px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-600/30 transition cursor-pointer"
        >
          <span data-i18n="nextBtn">Keyingisiga ➔</span>
        </button>
      </div>

    </div>

    <!-- ================= SCREEN 3: RESULT SCREEN ================= -->
    <div id="resultScreen" class="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-center hidden transition-colors">
      <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-4xl">
        🎉
      </div>

      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1" data-i18n="resTitle">Test Yakunlandi!</h2>
      <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6" data-i18n="resSubtitle">Natijangiz bilan tanishing:</p>

      <!-- Stats Box -->
      <div class="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-[#090e1c] border border-slate-200 dark:border-slate-800">
        <div>
          <div class="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400" data-i18n="resCorrect">To'g'ri Javob</div>
          <div class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1" id="resScore">0 / 0</div>
        </div>
        <div>
          <div class="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400" data-i18n="resAccuracy">Aniqlik</div>
          <div class="text-xl sm:text-2xl font-black text-emerald-500 dark:text-emerald-400 mt-1" id="resAccuracy">0%</div>
        </div>
        <div>
          <div class="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400" data-i18n="resXP">Ball (XP)</div>
          <div class="text-xl sm:text-2xl font-black text-sky-500 dark:text-sky-400 mt-1" id="resXP">+0 XP</div>
        </div>
      </div>

      <!-- Mistakes Box -->
      <div id="mistakesBox" class="text-left mb-6 max-h-56 overflow-y-auto pr-1 hidden">
        <h4 class="text-xs font-bold text-rose-500 dark:text-rose-400 uppercase tracking-wider mb-2">
          <span data-i18n="mistakesLabel">⚠️ Xatolar</span> (<span id="mistakesCount">0</span>):
        </h4>
        <div id="mistakesList" class="space-y-2 text-xs"></div>
      </div>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row items-center gap-3">
        <button 
          id="retestMistakesBtn" 
          onclick="retestMistakes()" 
          class="w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm bg-rose-500/10 dark:bg-rose-600/20 text-rose-600 dark:text-rose-300 border border-rose-300 dark:border-rose-500/40 hover:bg-rose-500/20 transition hidden"
          data-i18n="retestBtn"
        >
          🔁 Faqat Xatolarni Qayta Ishlash
        </button>
        <button 
          onclick="startQuizSession()" 
          class="w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-600/30 transition"
          data-i18n="restartBtn"
        >
          🔄 Qayta Boshlash
        </button>
        <button 
          onclick="showHomeScreen()" 
          class="w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition"
          data-i18n="anotherTopicBtn"
        >
          📚 Boshqa Mavzu
        </button>
      </div>
    </div>

  </main>

  <!-- ================= MODAL: CHIROYLI MAVZU TANLASH ================= -->
  <div id="topicModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm hidden">
    <div class="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[85vh] flex flex-col transition-colors">
      
      <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span>📚</span> <span data-i18n="modalTopicTitle">Mavzuni tanlang (Units 1–20)</span>
        </h3>
        <button onclick="closeTopicModal()" class="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1">✕</button>
      </div>

      <!-- Search input for units -->
      <div class="mb-4">
        <input 
          type="text" 
          id="topicSearch" 
          placeholder="Mavzu nomini qidiring (masalan: crime, passive, 5)..." 
          class="w-full px-4 py-2.5 bg-slate-100 dark:bg-[#131d33] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-sky-500"
          oninput="filterTopicList(this.value)"
        >
      </div>

      <!-- Unit Cards List -->
      <div class="flex-1 overflow-y-auto space-y-2 pr-1" id="topicListContainer">
        <!-- Rendered via JS -->
      </div>

    </div>
  </div>

  <!-- ================= USER PROFILE MODAL ================= -->
  <div id="profileModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm hidden">
    <div class="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl relative transition-colors">
      
      <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span>👤</span> <span data-i18n="profileTitle">Sizning Profilingiz</span>
        </h3>
        <button onclick="closeProfileModal()" class="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1">✕</button>
      </div>

      <div class="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-[#090e1c] border border-slate-200 dark:border-slate-800 mb-5">
        <img id="modalAvatar" src="https://lh3.googleusercontent.com/a/default-user=s96-c" alt="Avatar" class="w-14 h-14 rounded-full object-cover border border-sky-400">
        <div class="truncate">
          <h4 id="modalName" class="text-base font-bold text-slate-900 dark:text-white truncate">Hasanboy Azizjonovich</h4>
          <p id="modalEmail" class="text-xs text-slate-500 dark:text-slate-400 truncate">hasanboy.azizjonovich@gmail.com</p>
          <div class="mt-1 text-xs text-amber-500 dark:text-amber-400 font-bold">XP: <span id="modalXP">0</span></div>
        </div>
      </div>

      <!-- Sign Out Button -->
      <button 
        onclick="signOutUser()" 
        class="w-full py-3 rounded-2xl bg-rose-500/10 dark:bg-rose-950/40 hover:bg-rose-500/20 text-rose-600 dark:text-rose-300 font-bold text-xs border border-rose-300 dark:border-rose-800/40 transition mb-4"
        data-i18n="signOutBtn"
      >
        Profildan Chiqish (Sign Out)
      </button>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-2 text-center text-xs">
        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-[#090e1c] border border-slate-200 dark:border-slate-800">
          <div class="text-slate-500 dark:text-slate-400" data-i18n="statTests">Testlar</div>
          <div class="text-base font-extrabold text-slate-900 dark:text-white mt-0.5" id="modalTestsCount">0</div>
        </div>
        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-[#090e1c] border border-slate-200 dark:border-slate-800">
          <div class="text-slate-500 dark:text-slate-400" data-i18n="statAcc">Aniqlik</div>
          <div class="text-base font-extrabold text-emerald-500 dark:text-emerald-400 mt-0.5" id="modalAvgAcc">0%</div>
        </div>
        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-[#090e1c] border border-slate-200 dark:border-slate-800">
          <div class="text-slate-500 dark:text-slate-400">Streak</div>
          <div class="text-base font-extrabold text-amber-500 dark:text-amber-400 mt-0.5" id="modalBestStreak">0</div>
        </div>
      </div>

    </div>
  </div>

  <!-- ================= JAVASCRIPT LOGIC ================= -->
  <script>
    const UNITS_DATA = ${JSON.stringify(units, null, 2)};

    // Multilingual Translation Dictionary (UZ / EN / RU)
    const I18N = {
      uz: {
        subtitle: "Pre-Intermediate Darajasi",
        login: "Kirish",
        authTitle: "Dasturga Xush Kelibsiz!",
        authDesc: "Testlarni yechish, natijalarni saqlash va ballarni hisoblash uchun Google profilingiz orqali tizimga kiring.",
        googleBtn: "Google orqali kirish (hasanboy.azizjonovich)",
        authHint: "1-bosqichda profilingiz saqlanadi va bepul ochiladi.",
        setupTitle: "Mavzuni tanlang va Boshlang! 🎯",
        setupSubtitle: "To'g'ri topsangiz avtomatik o'tadi, xatoda esa tushuntirish beriladi.",
        topicLabel: "📚 Dars / Mavzuni tanlang:",
        changeBtn: "O'zgartirish ▾",
        countLabel: "🔢 Savollar soni:",
        cnt10: "10 ta savol",
        cnt15: "15 ta savol",
        cnt20: "20 ta savol",
        cnt25: "25 ta savol",
        cnt30: "30 ta savol",
        cntAll: "Barcha savollar",
        startBtn: "Testni Boshlash",
        scoreLabel: "Ball:",
        exitBtn: "✕ Chiqish (Stop)",
        nextBtn: "Keyingisiga ➔",
        tipHeader: "Qoida & Tushuntirish:",
        resTitle: "Test Yakunlandi!",
        resSubtitle: "Natijangiz bilan tanishing:",
        resCorrect: "To'g'ri Javob",
        resAccuracy: "Aniqlik",
        resXP: "Ball (XP)",
        mistakesLabel: "⚠️ Xatolar",
        retestBtn: "🔁 Faqat Xatolarni Qayta Ishlash",
        restartBtn: "🔄 Qayta Boshlash",
        anotherTopicBtn: "📚 Boshqa Mavzu",
        modalTopicTitle: "Mavzuni tanlang (Units 1–20)",
        topicSearchPlaceholder: "Mavzu nomini qidiring (masalan: crime, passive, 5)...",
        profileTitle: "Sizning Profilingiz",
        signOutBtn: "Profildan Chiqish (Sign Out)",
        statTests: "Testlar",
        statAcc: "Aniqlik",
        youChose: "Siz tanladingiz:",
        correctWord: "To'g'ri:"
      },
      en: {
        subtitle: "Pre-Intermediate Level",
        login: "Sign In",
        authTitle: "Welcome to the App!",
        authDesc: "Sign in with your Google account to solve tests, track progress, and collect points.",
        googleBtn: "Continue with Google (hasanboy.azizjonovich)",
        authHint: "Your profile is saved automatically and fully free.",
        setupTitle: "Choose a Topic & Start! 🎯",
        setupSubtitle: "Correct answers advance automatically; mistakes show explanation tips.",
        topicLabel: "📚 Choose a Unit / Topic:",
        changeBtn: "Change ▾",
        countLabel: "🔢 Question Count:",
        cnt10: "10 questions",
        cnt15: "15 questions",
        cnt20: "20 questions",
        cnt25: "25 questions",
        cnt30: "30 questions",
        cntAll: "All questions",
        startBtn: "Start Quiz",
        scoreLabel: "Score:",
        exitBtn: "✕ Exit (Stop)",
        nextBtn: "Next ➔",
        tipHeader: "Rule & Explanation:",
        resTitle: "Quiz Completed!",
        resSubtitle: "Here are your final results:",
        resCorrect: "Correct",
        resAccuracy: "Accuracy",
        resXP: "Score (XP)",
        mistakesLabel: "⚠️ Mistakes to Review",
        retestBtn: "🔁 Retest Missed Questions",
        restartBtn: "🔄 Restart Quiz",
        anotherTopicBtn: "📚 Choose Another Topic",
        modalTopicTitle: "Select a Topic (Units 1–20)",
        topicSearchPlaceholder: "Search unit or topic (e.g. crime, passive, 5)...",
        profileTitle: "Your Profile",
        signOutBtn: "Sign Out",
        statTests: "Tests",
        statAcc: "Accuracy",
        youChose: "You selected:",
        correctWord: "Correct:"
      },
      ru: {
        subtitle: "Уровень Pre-Intermediate",
        login: "Войти",
        authTitle: "Добро пожаловать в приложение!",
        authDesc: "Войдите через Google аккаунт, чтобы решать тесты, сохранять результаты и накапливать баллы.",
        googleBtn: "Войти через Google (hasanboy.azizjonovich)",
        authHint: "Профиль сохраняется автоматически и полностью доступен.",
        setupTitle: "Выберите тему и начните! 🎯",
        setupSubtitle: "Правильный ответ переходит автоматически, при ошибке показывается подсказка.",
        topicLabel: "📚 Выберите урок / тему:",
        changeBtn: "Изменить ▾",
        countLabel: "🔢 Количество вопросов:",
        cnt10: "10 вопросов",
        cnt15: "15 вопросов",
        cnt20: "20 вопросов",
        cnt25: "25 вопросов",
        cnt30: "30 вопросов",
        cntAll: "Все вопросы",
        startBtn: "Начать тест",
        scoreLabel: "Счет:",
        exitBtn: "✕ Выход (Стоп)",
        nextBtn: "Далее ➔",
        tipHeader: "Правило и пояснение:",
        resTitle: "Тест завершен!",
        resSubtitle: "Познакомьтесь с результатами:",
        resCorrect: "Правильно",
        resAccuracy: "Точность",
        resXP: "Баллы (XP)",
        mistakesLabel: "⚠️ Ошибки для повторения",
        retestBtn: "🔁 Пересдать только ошибки",
        restartBtn: "🔄 Начать заново",
        anotherTopicBtn: "📚 Другая тема",
        modalTopicTitle: "Выберите тему (Юниты 1–20)",
        topicSearchPlaceholder: "Поиск темы или юнита (например: crime, passive, 5)...",
        profileTitle: "Ваш профиль",
        signOutBtn: "Выйти из профиля (Sign Out)",
        statTests: "Тесты",
        statAcc: "Точность",
        youChose: "Вы выбрали:",
        correctWord: "Правильно:"
      }
    };

    function shuffleArray(arr) {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    let state = {
      lang: 'uz',
      theme: 'dark',
      isLoggedIn: false,
      selectedUnitId: 1,
      selectedCount: "10",
      activeQuestions: [],
      currentIndex: 0,
      currentScore: 0,
      streak: 0,
      soundEnabled: true,
      missed: [],
      user: {
        name: "Hasanboy Azizjonovich",
        email: "hasanboy.azizjonovich@gmail.com",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s96-c",
        xp: 0,
        testsCount: 0,
        totalAnswered: 0,
        bestStreak: 0
      }
    };

    // -------------------------------------------------------------
    // LANGUAGE ENGINE
    // -------------------------------------------------------------
    function setLanguage(lang) {
      if (!I18N[lang]) lang = 'uz';
      state.lang = lang;
      localStorage.setItem('english_b1_lang', lang);
      document.getElementById('langSelector').value = lang;
      applyLanguageUI();
    }

    function applyLanguageUI() {
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
    }

    // -------------------------------------------------------------
    // THEME ENGINE (DARK / LIGHT TOGGLE)
    // -------------------------------------------------------------
    function setTheme(theme) {
      state.theme = theme;
      localStorage.setItem('english_b1_theme', theme);
      const root = document.documentElement;
      const themeBtn = document.getElementById('themeBtn');

      if (theme === 'light') {
        root.classList.remove('dark');
        themeBtn.textContent = '☀️';
        themeBtn.title = "Qora fonga o'tish";
      } else {
        root.classList.add('dark');
        themeBtn.textContent = '🌙';
        themeBtn.title = "Oq fonga o'tish";
      }
    }

    function toggleTheme() {
      setTheme(state.theme === 'dark' ? 'light' : 'dark');
    }

    // -------------------------------------------------------------
    // AUDIO SYNTHESIZER (WEB AUDIO API)
    // -------------------------------------------------------------
    let audioCtx = null;
    function getAudioCtx() {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      return audioCtx;
    }

    function playTone(type) {
      if (!state.soundEnabled) return;
      try {
        const ctx = getAudioCtx();
        const now = ctx.currentTime;

        if (type === 'correct') {
          // Cheerful chime: C5 -> E5 -> G5
          [523.25, 659.25, 783.99].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.08);
            gain.gain.setValueAtTime(0.2, now + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.25);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + idx * 0.08);
            osc.stop(now + idx * 0.08 + 0.25);
          });
        } else if (type === 'incorrect') {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(170, now);
          osc.frequency.linearRampToValueAtTime(120, now + 0.2);
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.25);
        } else if (type === 'fanfare') {
          [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + i * 0.1);
            gain.gain.setValueAtTime(0.2, now + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.35);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + i * 0.1);
            osc.stop(now + i * 0.1 + 0.35);
          });
        }
      } catch (e) {
        console.warn(e);
      }
    }

    function toggleSound() {
      state.soundEnabled = !state.soundEnabled;
      document.getElementById('soundBtn').textContent = state.soundEnabled ? '🔊' : '🔇';
    }

    function speakCurrentSentence() {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const q = state.activeQuestions[state.currentIndex];
      if (!q) return;
      const clean = q.q.replace(/_+/g, "blank");
      const u = new SpeechSynthesisUtterance(clean);
      u.rate = 0.9;
      u.lang = 'en-GB';
      window.speechSynthesis.speak(u);
    }

    // -------------------------------------------------------------
    // CONFETTI
    // -------------------------------------------------------------
    const canvas = document.getElementById('confettiCanvas');
    const cctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function fireConfetti() {
      const colors = ['#38bdf8', '#818cf8', '#34d399', '#f472b6', '#fbbf24'];
      for (let i = 0; i < 40; i++) {
        particles.push({
          x: canvas.width / 2 + (Math.random() - 0.5) * 200,
          y: canvas.height * 0.4 + (Math.random() - 0.5) * 50,
          vx: (Math.random() - 0.5) * 8,
          vy: -Math.random() * 8 - 4,
          size: Math.random() * 7 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rv: (Math.random() - 0.5) * 10,
          alpha: 1
        });
      }
    }

    function updateParticles() {
      cctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25;
        p.rotation += p.rv;
        p.alpha -= 0.02;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        cctx.save();
        cctx.globalAlpha = p.alpha;
        cctx.translate(p.x, p.y);
        cctx.rotate((p.rotation * Math.PI) / 180);
        cctx.fillStyle = p.color;
        cctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        cctx.restore();
      }
      requestAnimationFrame(updateParticles);
    }
    requestAnimationFrame(updateParticles);

    // -------------------------------------------------------------
    // AUTHENTICATION & PROFILE SYSTEM
    // -------------------------------------------------------------
    function checkAuthStatus() {
      const savedAuth = localStorage.getItem('english_b1_auth');
      if (savedAuth === 'true') {
        state.isLoggedIn = true;
        loadUserData();
        document.getElementById('authGateScreen').classList.add('hidden');
        document.getElementById('setupScreen').classList.remove('hidden');
        document.getElementById('streakBadge').classList.remove('hidden');
      } else {
        state.isLoggedIn = false;
        document.getElementById('authGateScreen').classList.remove('hidden');
        document.getElementById('setupScreen').classList.add('hidden');
        document.getElementById('quizScreen').classList.add('hidden');
        document.getElementById('resultScreen').classList.add('hidden');
        document.getElementById('streakBadge').classList.add('hidden');
      }
    }

    function doGoogleSignIn() {
      state.isLoggedIn = true;
      state.user.name = "Hasanboy Azizjonovich";
      state.user.email = "hasanboy.azizjonovich@gmail.com";
      state.user.avatar = "https://lh3.googleusercontent.com/a/default-user=s96-c";
      localStorage.setItem('english_b1_auth', 'true');
      saveUserData();
      checkAuthStatus();
    }

    function signOutUser() {
      const t = I18N[state.lang] || I18N.uz;
      if (confirm(state.lang === 'ru' ? "Выйти из профиля?" : (state.lang === 'en' ? "Sign out of your profile?" : "Profildan chiqmoqchimisiz?"))) {
        localStorage.removeItem('english_b1_auth');
        closeProfileModal();
        checkAuthStatus();
      }
    }

    function loadUserData() {
      try {
        const s = localStorage.getItem('english_b1_user');
        if (s) state.user = { ...state.user, ...JSON.parse(s) };
      } catch (e) {
        console.warn(e);
      }
      updateProfileUI();
    }

    function saveUserData() {
      try {
        localStorage.setItem('english_b1_user', JSON.stringify(state.user));
      } catch (e) {
        console.warn(e);
      }
      updateProfileUI();
    }

    function updateProfileUI() {
      document.getElementById('userAvatar').src = state.user.avatar;
      document.getElementById('userName').textContent = state.user.name.split(' ')[0];
      document.getElementById('modalAvatar').src = state.user.avatar;
      document.getElementById('modalName').textContent = state.user.name;
      document.getElementById('modalEmail').textContent = state.user.email;
      document.getElementById('modalXP').textContent = state.user.xp;
      document.getElementById('modalTestsCount').textContent = state.user.testsCount;
      document.getElementById('modalBestStreak').textContent = state.user.bestStreak;

      const acc = state.user.totalAnswered > 0 
        ? Math.round(((state.user.xp / 10) / state.user.totalAnswered) * 100) 
        : 0;
      document.getElementById('modalAvgAcc').textContent = Math.min(100, Math.max(0, acc)) + '%';
    }

    function openProfileModal() {
      if (!state.isLoggedIn) {
        doGoogleSignIn();
        return;
      }
      document.getElementById('profileModal').classList.remove('hidden');
    }

    function closeProfileModal() {
      document.getElementById('profileModal').classList.add('hidden');
    }

    // -------------------------------------------------------------
    // TOPIC (MAVZU) SELECTOR MODAL
    // -------------------------------------------------------------
    function renderTopicList(filter = '') {
      const container = document.getElementById('topicListContainer');
      container.innerHTML = '';
      
      const q = filter.trim().toLowerCase();
      const filtered = UNITS_DATA.filter(u => {
        return u.title.toLowerCase().includes(q) || 
               u.subtitle.toLowerCase().includes(q) || 
               ("unit " + u.id).includes(q) ||
               (u.id + "").includes(q);
      });

      filtered.forEach(u => {
        const isSelected = u.id === state.selectedUnitId;
        const card = document.createElement('div');
        card.className = 'p-3.5 rounded-2xl border transition cursor-pointer flex items-center justify-between gap-3 ' + 
          (isSelected 
            ? 'bg-sky-500/15 dark:bg-sky-600/20 border-sky-500 text-sky-600 dark:text-white' 
            : 'bg-slate-50 dark:bg-[#131d33] hover:bg-slate-100 dark:hover:bg-[#1a2642] border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-300');
        
        card.innerHTML = 
          '<div class="flex items-center gap-3 truncate">' +
            '<span class="text-2xl p-2 rounded-xl bg-slate-200 dark:bg-slate-800 shrink-0">' + u.icon + '</span>' +
            '<div class="truncate">' +
              '<h4 class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white truncate">' + u.title + '</h4>' +
              '<p class="text-xs text-slate-500 dark:text-slate-400 truncate">' + u.subtitle + '</p>' +
            '</div>' +
          '</div>' +
          (isSelected ? '<span class="text-sky-500 font-black text-lg">✓</span>' : '');

        card.onclick = () => {
          selectTopic(u.id);
          closeTopicModal();
        };

        container.appendChild(card);
      });
    }

    function filterTopicList(val) {
      renderTopicList(val);
    }

    function openTopicModal() {
      renderTopicList();
      document.getElementById('topicSearch').value = '';
      document.getElementById('topicModal').classList.remove('hidden');
    }

    function closeTopicModal() {
      document.getElementById('topicModal').classList.add('hidden');
    }

    function selectTopic(unitId) {
      state.selectedUnitId = unitId;
      const u = UNITS_DATA.find(x => x.id === unitId) || UNITS_DATA[0];
      document.getElementById('selectedUnitIcon').textContent = u.icon;
      document.getElementById('selectedUnitTitle').textContent = u.title;
      document.getElementById('selectedUnitSubtitle').textContent = u.subtitle;
    }

    // -------------------------------------------------------------
    // QUIZ ENGINE
    // -------------------------------------------------------------
    function prepareQuestions(unitId, count) {
      const u = UNITS_DATA.find(item => item.id === unitId) || UNITS_DATA[0];
      let pool = shuffleArray([...u.questions]);

      let totalNeeded = count === 'all' ? pool.length : parseInt(count, 10);
      if (isNaN(totalNeeded) || totalNeeded < 1) totalNeeded = 10;

      const res = [];
      for (let i = 0; i < totalNeeded; i++) {
        const raw = pool[i % pool.length];
        res.push({
          q: raw.q,
          a: raw.a,
          tip: raw.tip,
          options: shuffleArray(raw.options)
        });
      }
      return res;
    }

    function startQuizSession() {
      if (!state.isLoggedIn) {
        checkAuthStatus();
        return;
      }

      state.activeQuestions = prepareQuestions(state.selectedUnitId, state.selectedCount);
      state.currentIndex = 0;
      state.currentScore = 0;
      state.missed = [];

      document.getElementById('setupScreen').classList.add('hidden');
      document.getElementById('resultScreen').classList.add('hidden');
      document.getElementById('quizScreen').classList.remove('hidden');

      renderQuizQuestion();
    }

    function showHomeScreen() {
      document.getElementById('quizScreen').classList.add('hidden');
      document.getElementById('resultScreen').classList.add('hidden');
      document.getElementById('setupScreen').classList.remove('hidden');
    }

    function renderQuizQuestion() {
      const q = state.activeQuestions[state.currentIndex];
      if (!q) {
        showResults();
        return;
      }

      const total = state.activeQuestions.length;
      const current = state.currentIndex + 1;
      const t = I18N[state.lang] || I18N.uz;

      document.getElementById('quizCounterText').textContent = current + ' / ' + total;
      document.getElementById('quizScoreText').textContent = (t.scoreLabel || 'Ball:') + ' ' + state.currentScore;
      document.getElementById('progressBar').style.width = Math.round((current / total) * 100) + '%';
      document.getElementById('questionSentence').textContent = q.q;

      document.getElementById('praiseContainer').innerHTML = '';
      document.getElementById('ruleTipBox').classList.add('hidden');

      // Hide Next button until incorrect answer triggers manual advance
      const nextBtn = document.getElementById('nextBtn');
      nextBtn.classList.add('hidden');

      // Render Options (Clean buttons)
      const respArea = document.getElementById('responseArea');
      respArea.innerHTML = '';

      q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.id = 'opt_' + idx;
        btn.className = 'btn-opt p-4 rounded-2xl bg-slate-50 dark:bg-[#131d33] hover:bg-slate-100 dark:hover:bg-[#1b2844] border border-slate-200 dark:border-slate-700/80 text-center font-bold text-base text-slate-800 dark:text-slate-100 transition shadow-sm';
        btn.textContent = opt;

        btn.onclick = () => handleAnswer(opt, idx, q);
        respArea.appendChild(btn);
      });
    }

    // -------------------------------------------------------------
    // AUTOMATIC ADVANCE ON CORRECT / MANUAL ADVANCE ON INCORRECT
    // -------------------------------------------------------------
    function handleAnswer(selectedOpt, selectedIdx, q) {
      const allBtns = document.querySelectorAll('.btn-opt');
      allBtns.forEach(b => b.disabled = true);

      const isCorrect = (selectedOpt.trim().toLowerCase() === q.a.trim().toLowerCase());
      state.user.totalAnswered++;

      const t = I18N[state.lang] || I18N.uz;

      if (isCorrect) {
        // ========== TO'G'RI TOPSANGIZ: AVTOMATIK O'TADI ==========
        state.currentScore++;
        state.streak++;
        state.user.xp += 10;
        if (state.streak > state.user.bestStreak) state.user.bestStreak = state.streak;
        
        playTone('correct');
        fireConfetti();
        showPraiseEmotion();

        // Highlight selected in green
        allBtns[selectedIdx].className = 'btn-opt p-4 rounded-2xl bg-emerald-500/20 dark:bg-emerald-950/70 border-2 border-emerald-500 text-emerald-700 dark:text-emerald-200 font-extrabold text-base';

        // Auto-advance after 850ms smooth celebration delay!
        setTimeout(() => {
          nextQuestion();
        }, 850);

      } else {
        // ========== XATO BO'LSA: TUSHUNTIRISH VA 'KEYINGISIGA' TUGMASI ==========
        state.streak = 0;
        playTone('incorrect');
        state.missed.push({
          q: q.q,
          user: selectedOpt,
          correct: q.a,
          tip: q.tip
        });

        // Colorize: chosen = Red, actual correct = Green
        allBtns.forEach((b, idx) => {
          const text = q.options[idx];
          if (text.trim().toLowerCase() === q.a.trim().toLowerCase()) {
            b.className = 'btn-opt p-4 rounded-2xl bg-emerald-500/20 dark:bg-emerald-950/70 border-2 border-emerald-500 text-emerald-700 dark:text-emerald-200 font-extrabold text-base';
          } else if (idx === selectedIdx) {
            b.className = 'btn-opt p-4 rounded-2xl bg-rose-500/20 dark:bg-rose-950/70 border-2 border-rose-500 text-rose-700 dark:text-rose-200 font-extrabold text-base';
          } else {
            b.className = 'btn-opt p-4 rounded-2xl bg-slate-50 dark:bg-[#131d33]/50 border border-slate-200 dark:border-slate-800 text-slate-400 opacity-40';
          }
        });

        // Show Explanation / Tip box
        if (q.tip) {
          document.getElementById('ruleTipText').textContent = q.tip;
          document.getElementById('ruleTipBox').classList.remove('hidden');
        }

        // Show Next button so user reads tip and clicks when ready!
        const nextBtn = document.getElementById('nextBtn');
        nextBtn.classList.remove('hidden');
      }

      document.getElementById('streakCount').textContent = state.streak;
      document.getElementById('quizScoreText').textContent = (t.scoreLabel || 'Ball:') + ' ' + state.currentScore;

      saveUserData();
    }

    function showPraiseEmotion() {
      const praises = {
        uz: ["🔥 Ajoyib!", "⚡ Barakalla!", "✨ Super!", "🎯 To'g'ri!", "🌟 Zo'r natija!"],
        en: ["🔥 Brilliant!", "⚡ Spot on!", "✨ Awesome!", "🎯 Perfect!", "🌟 Great job!"],
        ru: ["🔥 Отлично!", "⚡ В точку!", "✨ Супер!", "🎯 Правильно!", "🌟 Молодец!"]
      };
      const list = praises[state.lang] || praises.uz;
      const text = list[Math.floor(Math.random() * list.length)];
      const cont = document.getElementById('praiseContainer');
      cont.innerHTML = '<span class="praise-anim inline-block text-xs sm:text-sm font-extrabold text-amber-500 dark:text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">' + text + '</span>';
    }

    function nextQuestion() {
      state.currentIndex++;
      if (state.currentIndex >= state.activeQuestions.length) {
        showResults();
      } else {
        renderQuizQuestion();
      }
    }

    function showResults() {
      state.user.testsCount++;
      saveUserData();
      playTone('fanfare');

      document.getElementById('quizScreen').classList.add('hidden');
      document.getElementById('resultScreen').classList.remove('hidden');

      const total = state.activeQuestions.length;
      const score = state.currentScore;
      const pct = Math.round((score / total) * 100);
      const t = I18N[state.lang] || I18N.uz;

      document.getElementById('resScore').textContent = score + ' / ' + total;
      document.getElementById('resAccuracy').textContent = pct + '%';
      document.getElementById('resXP').textContent = '+' + (score * 10) + ' XP';

      const mistakesBox = document.getElementById('mistakesBox');
      const mistakesList = document.getElementById('mistakesList');
      const retestBtn = document.getElementById('retestMistakesBtn');

      if (state.missed.length > 0) {
        mistakesBox.classList.remove('hidden');
        retestBtn.classList.remove('hidden');
        document.getElementById('mistakesCount').textContent = state.missed.length;

        mistakesList.innerHTML = '';
        state.missed.forEach(m => {
          const d = document.createElement('div');
          d.className = 'p-3 rounded-xl bg-slate-50 dark:bg-[#131d33] border border-slate-200 dark:border-slate-800';
          d.innerHTML = 
            '<p class="font-bold text-slate-800 dark:text-slate-200 mb-1">' + m.q + '</p>' +
            '<div class="flex items-center gap-3 text-[11px] mb-1">' +
              '<span class="text-rose-500 font-semibold">' + (t.youChose || 'Siz tanladingiz:') + ' ' + m.user + '</span>' +
              '<span class="text-emerald-600 dark:text-emerald-400 font-bold">' + (t.correctWord || "To'g'ri:") + ' ' + m.correct + '</span>' +
            '</div>' +
            '<p class="text-[11px] text-slate-500 dark:text-slate-400 italic">' + m.tip + '</p>';
          mistakesList.appendChild(d);
        });
      } else {
        mistakesBox.classList.add('hidden');
        retestBtn.classList.add('hidden');
      }
    }

    function retestMistakes() {
      if (state.missed.length === 0) return;
      state.activeQuestions = state.missed.map(m => {
        const u = UNITS_DATA.find(x => x.id === state.selectedUnitId);
        const original = u.questions.find(orig => orig.q === m.q);
        const opts = original ? original.options : [m.correct, "wrong 1", "wrong 2", "wrong 3"];
        return {
          q: m.q,
          a: m.correct,
          tip: m.tip,
          options: shuffleArray(opts)
        };
      });
      state.currentIndex = 0;
      state.currentScore = 0;
      state.missed = [];

      document.getElementById('resultScreen').classList.add('hidden');
      document.getElementById('quizScreen').classList.remove('hidden');
      renderQuizQuestion();
    }

    // Keyboard navigation (Enter advances)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeTopicModal();
        closeProfileModal();
      }
      if (e.key === 'Enter') {
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn && !nextBtn.classList.contains('hidden') && !nextBtn.disabled) nextBtn.click();
      }
    });

    window.addEventListener('DOMContentLoaded', () => {
      // Load saved preferences
      const savedLang = localStorage.getItem('english_b1_lang') || 'uz';
      setLanguage(savedLang);

      const savedTheme = localStorage.getItem('english_b1_theme') || 'dark';
      setTheme(savedTheme);

      selectTopic(1);
      checkAuthStatus();
    });

  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf-8');
console.log("Master index.html generated successfully! Size: " + htmlContent.length + " bytes.");
