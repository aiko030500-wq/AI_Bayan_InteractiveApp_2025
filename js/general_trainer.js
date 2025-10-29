// =====================================================
// 📘 AI Bayan General English Trainer — A2
// Phonetics (diphthongs, silent letters, soft/hard C-G, vowel types 1–4)
// Irregular Verbs | Time & Seasons | WH-Questions
// Stars + Sound + Mixed mode + Section results
// =====================================================
document.addEventListener("DOMContentLoaded", function () {

  // ---------- STATE ----------
  let current = 0;                 // индекс текущего вопроса в текущем списке
  let score = 0;                   // общий счёт по текущей сессии
  let activeCat = "Mixed";         // текущая категория ("Mixed" или конкретная)
  let workingSet = [];             // массив индексов вопросов для текущего режима
  const answers = [];              // [{choice, correct, cat, idxInBank}]
  const sectionScores = {};        // {cat: correctCount}
  const sectionTotals = {};        // {cat: totalCount (в текущей сессии)}

  // ---------- BANK ----------
  // Каждая запись: {cat, q, options[4], a}
  // УРОВЕНЬ A2, короткие, чёткие формулировки.
  const bank = [
    // ===== PHONETICS =====
    // Diphthongs
    {cat:"Phonetics", q:"Choose the word with the /aɪ/ sound.", options:["train","find","boat","boy"], a:1},
    {cat:"Phonetics", q:"Choose the word with the /eɪ/ sound.", options:["said","make","ship","put"], a:1},
    {cat:"Phonetics", q:"Choose the word with the /əʊ/ sound.", options:["house","home","hand","hat"], a:1},
    {cat:"Phonetics", q:"Choose the word with the /ɔɪ/ sound.", options:["toy","tea","ten","tall"], a:0},
    {cat:"Phonetics", q:"Choose the word with the /aʊ/ sound.", options:["snow","town","ten","tin"], a:1},
    // Silent letters
    {cat:"Phonetics", q:"Which word has a silent letter?", options:["knee","need","near","neat"], a:0},
    {cat:"Phonetics", q:"Which word has a silent letter?", options:["write","right","ride","rain"], a:0},
    {cat:"Phonetics", q:"Which word has a silent letter?", options:["thumb","think","thick","thank"], a:0},
    {cat:"Phonetics", q:"Which word has a silent letter?", options:["island","ice","idea","iron"], a:0},
    // Soft/Hard C-G
    {cat:"Phonetics", q:"Choose the word with soft C /s/.", options:["cat","cold","city","can"], a:2},
    {cat:"Phonetics", q:"Choose the word with soft G /dʒ/.", options:["girl","game","giant","green"], a:2},
    // Vowel types 1–4 (примерно: a_e/ i_e и т.п., короткие/длинные)
    {cat:"Phonetics", q:"Choose a long vowel pattern (a_e).", options:["cap","cake","cat","can"], a:1},
    {cat:"Phonetics", q:"Choose a long vowel pattern (i_e).", options:["pin","pit","pine","pink"], a:2},

    // ===== IRREGULAR VERBS =====
    {cat:"Irregular Verbs", q:"Choose the correct 2nd form of 'go'.", options:["goed","went","gone","goes"], a:1},
    {cat:"Irregular Verbs", q:"Choose the correct 3rd form of 'see'.", options:["saw","seed","seen","see"], a:2},
    {cat:"Irregular Verbs", q:"Choose the correct 2nd form of 'buy'.", options:["buyed","bought","boughten","buy"], a:1},
    {cat:"Irregular Verbs", q:"Choose the correct 3rd form of 'make'.", options:["maked","made","maken","makes"], a:1},
    {cat:"Irregular Verbs", q:"Choose the correct 2nd form of 'have'.", options:["has","had","haved","have"], a:1},
    {cat:"Irregular Verbs", q:"Choose the correct 3rd form of 'write'.", options:["wrote","written","writed","writes"], a:1},
    {cat:"Irregular Verbs", q:"Choose the correct 2nd form of 'take'.", options:["taked","took","taken","takes"], a:1},
    {cat:"Irregular Verbs", q:"Choose the correct 3rd form of 'break'.", options:["broke","broken","breaked","breaks"], a:1},
    {cat:"Irregular Verbs", q:"Choose the correct 2nd form of 'come'.", options:["came","comed","come","comes"], a:0},
    {cat:"Irregular Verbs", q:"Choose the correct 3rd form of 'eat'.", options:["ate","eaten","eated","eats"], a:1},

    // ===== TIME & SEASONS =====
    // Time
    {cat:"Time & Seasons", q:"It is 7:30 a.m. Say the time:", options:["half past seven","quarter to seven","seven thirty p.m.","quarter past seven"], a:0},
    {cat:"Time & Seasons", q:"It is 8:45. Say the time:", options:["quarter past eight","quarter to nine","half past eight","eight forty-five a.m."], a:1},
    {cat:"Time & Seasons", q:"Choose the correct: 12:00 p.m. is…", options:["noon","midnight","morning","evening"], a:0},
    // Days / Months / Seasons
    {cat:"Time & Seasons", q:"We have English on ___.", options:["Monday","in Monday","the Monday","at Monday"], a:0},
    {cat:"Time & Seasons", q:"Her birthday is on ___.", options:["January 10th","10 Januaryth","the January","Monday 10th January"], a:0},
    {cat:"Time & Seasons", q:"Which is a season?", options:["autumn","April","Monday","twelve"], a:0},
    {cat:"Time & Seasons", q:"Which is a month?", options:["June","Tuesday","winter","o’clock"], a:0},
    {cat:"Time & Seasons", q:"Which is a day of the week?", options:["Friday","May","summer","hour"], a:0},

    // ===== WH-QUESTIONS =====
    {cat:"WH-Questions", q:"___ is your name?", options:["What","Where","When","Who"], a:0},
    {cat:"WH-Questions", q:"___ do you live?", options:["What","Where","When","How"], a:1},
    {cat:"WH-Questions", q:"___ is your birthday?", options:["Where","When","Why","Which"], a:1},
    {cat:"WH-Questions", q:"___ is your best friend?", options:["Who","How","Which","When"], a:0},
    {cat:"WH-Questions", q:"___ old are you?", options:["What","Who","How","Why"], a:2},
    {cat:"WH-Questions", q:"___ do you study English? — Because I need it.", options:["Where","When","Why","Who"], a:2},
    {cat:"WH-Questions", q:"___ book do you like, this or that?", options:["What","Which","Who","Whose"], a:1},
    {cat:"WH-Questions", q:"___ is the price of this bag?", options:["How many","How much","How long","How often"], a:1}
  ];

  // Категории для переключателя:
  const categories = ["Mixed", "Phonetics", "Irregular Verbs", "Time & Seasons", "WH-Questions"];

  // ---------- HELPERS ----------
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function showStar() {
    const star = document.createElement("div");
    star.textContent = "⭐";
    Object.assign(star.style, {
      position: "fixed",
      left: `${10 + Math.random() * 80}%`,
      top: `${20 + Math.random() * 60}%`,
      fontSize: `${22 + Math.random() * 26}px`,
      opacity: 0.95,
      zIndex: 1000,
      animation: "flyStar 1s ease-out forwards"
    });
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1000);
  }

  // ---------- BUILD UI ----------
  const root = document.getElementById("generalContent");

  function buildHeader() {
    // Верхняя панель выбора категории
    const tabs = categories.map(cat =>
      `<button class="tabBtn ${cat===activeCat?'active':''}" data-cat="${cat}">${cat}</button>`
    ).join("");

    return `
      <div class="tabs" style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:10px;">
        ${tabs}
      </div>
    `;
  }

  function prepareSet() {
    // сбрасываем состояние
    current = 0; score = 0;
    answers.length = 0;
    Object.keys(sectionScores).forEach(k => delete sectionScores[k]);
    Object.keys(sectionTotals).forEach(k => delete sectionTotals[k]);

    // соберём индексы вопросов
    let indices = [];
    if (activeCat === "Mixed") {
      indices = [...Array(bank.length).keys()];
    } else {
      bank.forEach((item, i) => { if (item.cat === activeCat) indices.push(i); });
    }
    workingSet = shuffle(indices);

    // подготовим счётчики разделов для текущей сессии
    const catsInPlay = new Set(workingSet.map(i => bank[i].cat));
    catsInPlay.forEach(c => { sectionScores[c] = 0; sectionTotals[c] = 0; });
    workingSet.forEach(i => { sectionTotals[bank[i].cat] = (sectionTotals[bank[i].cat] || 0) + 1; });
  }

  function render() {
    const header = buildHeader();

    if (current >= workingSet.length) { return finish(); }

    const idx = workingSet[current];
    const item = bank[idx];
    const saved = answers[current] ?? null;

    const body = `
      <h3>📘 General English Trainer — A2</h3>
      <p><b>Section:</b> ${item.cat}</p>
      <p><b>Question ${current + 1} / ${workingSet.length}</b></p>
      <p>${item.q}</p>
      <div class="options">
        ${item.options.map((opt, i) => {
          let extra = "";
          if (saved && saved.choice === i) {
            extra = saved.correct ? " ✅" : " ❌";
          }
          return `<button class="optBtn" data-idx="${i}">${opt}${extra}</button>`;
        }).join("<br>")}
      </div>
      <div class="progress">Score: ${score} / ${workingSet.length}</div>
    `;

    const nav = `
      <div class="nav-buttons">
        <button id="gPrev">⬅️ Previous</button>
        <button id="gNext">➡️ Next</button>
      </div>
      <div class="menu-return">
        <button id="gMenu" onclick="show('menu')">🏠 Back to Menu</button>
      </div>
    `;

    root.innerHTML = header + body + nav;

    // табы
    document.querySelectorAll(".tabBtn").forEach(b=>{
      b.onclick = ()=>{
        activeCat = b.dataset.cat;
        prepareSet();
        render();
      };
    });

    // ответы
    document.querySelectorAll(".optBtn").forEach(btn=>{
      btn.onclick = ()=>{
        if (answers[current]) return;
        const choice = parseInt(btn.dataset.idx,10);
        const correct = choice === bank[ workingSet[current] ].a;
        const cat = bank[ workingSet[current] ].cat;

        answers[current] = {choice, correct, cat, idxInBank: workingSet[current]};
        if (correct) {
          score++;
          sectionScores[cat] = (sectionScores[cat]||0) + 1;
          try { new Audio("sound/ding.wav").play(); } catch(e){}
          showStar();
        }
        render(); // перерисуем, чтобы показать галочку/крестик
      };
    });

    // навигация
    document.getElementById("gPrev").onclick = ()=>{
      if (current > 0) { current--; render(); }
    };
    document.getElementById("gNext").onclick = ()=>{
      if (current < workingSet.length - 1) {
        current++; render();
      } else {
        finish();
      }
    };

    // плавное появление контейнера (если в CSS есть анимации)
    root.style.animation = "none";
    setTimeout(() => { root.style.animation = ""; }, 30);
  }

  function finish() {
    try { new Audio("sound/applause.wav").play(); } catch(e){}

    // таблица по разделам
    const cats = Object.keys(sectionTotals);
    let rows = cats.map(cat => `
      <tr>
        <td>${cat}</td>
        <td>${sectionScores[cat]||0} / ${sectionTotals[cat]}</td>
      </tr>
    `).join("");

    root.innerHTML = `
      ${buildHeader()}
      <div class="final-screen">
        <h3>🎉 General Trainer Finished!</h3>
        <p class="fade-in">Total score: <b>${score} / ${workingSet.length}</b></p>
        <table class="fade-in" style="margin:16px auto; border-collapse:collapse;">
          <thead>
            <tr>
              <th style="border-bottom:2px solid #ccc; padding:6px 10px; text-align:left;">Section</th>
              <th style="border-bottom:2px solid #ccc; padding:6px 10px; text-align:left;">Result</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
        <div class="nav-buttons">
          <button id="gRestart">🔁 Restart</button>
        </div>
        <div class="menu-return">
          <button onclick="show('menu')">🏠 Back to Menu</button>
        </div>
      </div>
    `;

    document.getElementById("gRestart").onclick = ()=>{
      prepareSet();
      render();
    };
  }

  // INIT
  prepareSet();   // Mixed по умолчанию
  render();
});
