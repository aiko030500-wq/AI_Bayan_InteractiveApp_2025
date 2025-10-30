// =====================================================
// 📘 AI Bayan General English Trainer — A2
// Phonetics (improved) | Irregular Verbs (50) | Time & Seasons | WH-Questions
// Mixed mode | Stars + Sound | Section results
// =====================================================
document.addEventListener("DOMContentLoaded", function () {

  // ---------- STATE ----------
  let current = 0;                 // индекс вопроса в текущем наборе
  let score = 0;                   // общий счёт
  let activeCat = "Mixed";         // текущая категория ("Mixed", "Phonetics", ...)
  let workingSet = [];             // индексы вопросов в текущей сессии
  const answers = [];              // [{choice, correct, cat, idxInBank}]
  const sectionScores = {};        // {cat: correctCount}
  const sectionTotals = {};        // {cat: totalCount}

  // ---------- BANK ----------
  // Формат записи: {cat, q, options[4], a}
  const bank = [
 

   // ==========================================
// 📘 AI Bayan — Irregular Verbs Trainer (Translate to Russian)
// 🌟 Без звука, только анимация звёздочек
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("irregularContent");

  const verbs = [
 // ==========================================
// 🔤 AI Bayan — Phonetics Trainer
// Дифтонги, silent letters, soft/hard C-G, vowel types
// Без звука, со звёздами и прогрессом
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("phoneticsContent");

  const phonetics = [
    // Diphthongs
    { q: "Which word has the sound [aɪ]?", options: ["see", "fly", "book"], a: 1 },
    { q: "Which word has the sound [eɪ]?", options: ["name", "sit", "sun"], a: 0 },
    { q: "Which word has the sound [ɔɪ]?", options: ["boy", "car", "run"], a: 0 },
    { q: "Which word has the sound [aʊ]?", options: ["home", "mouse", "pen"], a: 1 },
    { q: "Which word has the sound [əʊ]?", options: ["go", "dog", "cat"], a: 0 },

    // Silent letters
    { q: "Which letter is silent in the word 'knight'?", options: ["k", "n", "g"], a: 0 },
    { q: "Which letter is silent in the word 'write'?", options: ["r", "w", "t"], a: 1 },
    { q: "Which letter is silent in the word 'climb'?", options: ["c", "b", "m"], a: 1 },
    { q: "Which letter is silent in the word 'island'?", options: ["s", "l", "a"], a: 0 },
    { q: "Which letter is silent in the word 'honest'?", options: ["h", "n", "t"], a: 0 },

    // Soft/Hard C-G
    { q: "Which word has a soft 'C' sound?", options: ["cat", "city", "cold"], a: 1 },
    { q: "Which word has a hard 'C' sound?", options: ["cent", "circle", "cup"], a: 2 },
    { q: "Which word has a soft 'G' sound?", options: ["game", "giant", "goat"], a: 1 },
    { q: "Which word has a hard 'G' sound?", options: ["gem", "giraffe", "garden"], a: 2 },

    // Vowel types
    { q: "Which word has a short vowel sound?", options: ["ship", "sheep", "leave"], a: 0 },
    { q: "Which word has a long vowel sound?", options: ["sit", "seat", "men"], a: 1 },
    { q: "Which word has vowel type 3 (open syllable)?", options: ["me", "men", "mat"], a: 0 },
    { q: "Which word has vowel type 4 (magic e)?", options: ["hop", "hope", "hot"], a: 1 },
    { q: "Which word has vowel type 2 (closed syllable)?", options: ["dog", "go", "me"], a: 0 }
  ];

  let i = 0;
  let score = 0;

  showQuestion();

  function showQuestion() {
    const p = phonetics[i];
    content.innerHTML = `
      <h3>${i + 1}. ${p.q}</h3>
      ${p.options.map((opt, idx) =>
        `<button class='optBtn' data-opt='${idx}'>${opt}</button>`
      ).join("<br>")}
      <div class="progress">Question ${i + 1} / ${phonetics.length}</div>
    `;

    document.querySelectorAll(".optBtn").forEach(btn => {
      btn.onclick = () => checkAnswer(parseInt(btn.dataset.opt));
    });
  }

  function checkAnswer(choice) {
    const correct = phonetics[i].a;
    if (choice === correct) {
      score++;
      playStar();
      nextQuestion();
    } else {
      alert(`❌ Wrong! Correct: ${phonetics[i].options[correct]}`);
      nextQuestion();
    }
  }

  function nextQuestion() {
    i++;
    if (i < phonetics.length) showQuestion();
    else {
      content.innerHTML = `
        <h3>🎉 Great job!</h3>
        <p>Your score: ${score} / ${phonetics.length}</p>
      `;
      showFinalStars();
    }
  }

  // 🌟 Звёзды при правильном ответе
  function playStar() {
    const star = document.createElement("div");
    star.textContent = "⭐";
    Object.assign(star.style, {
      position: "fixed",
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 60 + 20}%`,
      fontSize: `${25 + Math.random() * 25}px`,
      opacity: 0.9,
      animation: "flyStar 1s ease-out forwards",
      zIndex: 1000
    });
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1000);
  }

  // 🌟 Финальные звёзды
  function showFinalStars() {
    for (let s = 0; s < 20; s++) {
      const star = document.createElement("div");
      star.textContent = "⭐";
      Object.assign(star.style, {
        position: "fixed",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${20 + Math.random() * 30}px`,
        opacity: 0.8,
        animation: "flyStar 2s ease-out forwards",
        zIndex: 999
      });
      document.body.appendChild(star);
      setTimeout(() => star.remove(), 2000);
    }
  }
});
   ["be", "was / were", "been", "быть"],
    ["begin", "began", "begun", "начинать"],
    ["break", "broke", "broken", "ломать"],
    ["bring", "brought", "brought", "приносить"],
    ["build", "built", "built", "строить"],
    ["buy", "bought", "bought", "покупать"],
    ["come", "came", "come", "приходить"],
    ["do", "did", "done", "делать"],
    ["drink", "drank", "drunk", "пить"],
    ["eat", "ate", "eaten", "есть"],
    ["find", "found", "found", "находить"],
    ["fly", "flew", "flown", "летать"],
    ["get", "got", "got / gotten", "получать"],
    ["give", "gave", "given", "давать"],
    ["go", "went", "gone", "идти"],
    ["have", "had", "had", "иметь"],
    ["know", "knew", "known", "знать"],
    ["leave", "left", "left", "уходить"],
    ["make", "made", "made", "делать, создавать"],
    ["read", "read", "read", "читать"],
    ["run", "ran", "run", "бежать"],
    ["say", "said", "said", "сказать"],
    ["see", "saw", "seen", "видеть"],
    ["sleep", "slept", "slept", "спать"],
    ["speak", "spoke", "spoken", "говорить"],
    ["take", "took", "taken", "брать"],
    ["teach", "taught", "taught", "учить (кого-то)"],
    ["think", "thought", "thought", "думать"],
    ["write", "wrote", "written", "писать"]
  ];

  let i = 0;
  let score = 0;

  showVerb();

  function showVerb() {
    const [v1, v2, v3] = verbs[i];
    content.innerHTML = `
      <h3>${i + 1}. ${v1} — ${v2} — ${v3}</h3>
      <p>Write the Russian meaning:</p>
      <input type="text" id="answerInput" placeholder="Введите перевод..." />
      <button id="checkBtn">Check</button>
      <div class="progress">Word ${i + 1} / ${verbs.length}</div>
    `;

    document.getElementById("checkBtn").onclick = checkAnswer;
  }

  function checkAnswer() {
    const input = document.getElementById("answerInput").value.trim().toLowerCase();
    const correct = verbs[i][3].toLowerCase();

    if (input === correct) {
      score++;
      playStar();
      nextVerb();
    } else {
      alert(`❌ Wrong! Correct: ${verbs[i][3]}`);
      nextVerb();
    }
  }

  function nextVerb() {
    i++;
    if (i < verbs.length) showVerb();
    else {
      content.innerHTML = `
        <h3>🎉 Great job!</h3>
        <p>Your score: ${score} / ${verbs.length}</p>
      `;
      showFinalStars();
    }
  }

  // 🌟 Анимация звёзд при правильном ответе
  function playStar() {
    const star = document.createElement("div");
    star.textContent = "⭐";
    Object.assign(star.style, {
      position: "fixed",
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 60 + 20}%`,
      fontSize: `${25 + Math.random() * 25}px`,
      opacity: 0.9,
      animation: "flyStar 1s ease-out forwards",
      zIndex: 1000
    });
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1000);
  }

  // 🌟 Финальные звёзды в конце
  function showFinalStars() {
    for (let s = 0; s < 20; s++) {
      const star = document.createElement("div");
      star.textContent = "⭐";
      Object.assign(star.style, {
        position: "fixed",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${20 + Math.random() * 30}px`,
        opacity: 0.8,
        animation: "flyStar 2s ease-out forwards",
        zIndex: 999
      });
      document.body.appendChild(star);
      setTimeout(() => star.remove(), 2000);
    }
  }
});

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
    const tabs = categories.map(cat =>
      `<button class="tabBtn ${cat===activeCat?'active':''}" data-cat="${cat}">${cat}</button>`
    ).join("");
    return `<div class="tabs" style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:10px;">${tabs}</div>`;
  }

  function prepareSet() {
    current = 0; score = 0;
    answers.length = 0;
    Object.keys(sectionScores).forEach(k => delete sectionScores[k]);
    Object.keys(sectionTotals).forEach(k => delete sectionTotals[k]);

    let indices = [];
    if (activeCat === "Mixed") {
      indices = [...Array(bank.length).keys()];
    } else {
      bank.forEach((item, i) => { if (item.cat === activeCat) indices.push(i); });
    }
    workingSet = shuffle(indices);

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
          if (saved && saved.choice === i) extra = saved.correct ? " ✅" : " ❌";
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

    document.querySelectorAll(".tabBtn").forEach(b=>{
      b.onclick = ()=>{
        activeCat = b.dataset.cat;
        prepareSet();
        render();
      };
    });

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
        render();
      };
    });

    document.getElementById("gPrev").onclick = ()=>{
      if (current > 0) { current--; render(); }
    };
    document.getElementById("gNext").onclick = ()=>{
      if (current < workingSet.length - 1) { current++; render(); }
      else { finish(); }
    };

    root.style.animation = "none";
    setTimeout(() => { root.style.animation = ""; }, 30);
  }

  function finish() {
    try { new Audio("sound/applause.wav").play(); } catch(e){}

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
  prepareSet();
  render();
});
