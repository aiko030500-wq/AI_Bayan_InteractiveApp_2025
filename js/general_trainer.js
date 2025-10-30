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
    // ===== PHONETICS (Improved Informative) =====
    // Diphthongs
    {cat:"Phonetics", q:"Which word contains the diphthong /aɪ/? 💡 Tip: The sound /aɪ/ is like in 'time' or 'five'.", options:["sit","ship","time","pen"], a:2},
    {cat:"Phonetics", q:"Which word contains the diphthong /eɪ/? 💡 Tip: /eɪ/ sounds like in 'name' or 'train'.", options:["bed","hat","train","bus"], a:2},
    {cat:"Phonetics", q:"Which word contains the diphthong /əʊ/? 💡 Tip: /əʊ/ is in 'go', 'home', 'nose'.", options:["pen","hot","home","bat"], a:2},
    {cat:"Phonetics", q:"Which word has the sound /ɔɪ/? 💡 Tip: It’s the sound in 'boy' or 'toy'.", options:["top","boy","bag","ten"], a:1},
    {cat:"Phonetics", q:"Which word has the sound /aʊ/? 💡 Tip: /aʊ/ sounds like in 'house' or 'mouse'.", options:["cup","house","pen","tree"], a:1},
    // Silent letters
    {cat:"Phonetics", q:"Which word has a silent 'k'? 💡 Tip: 'k' is silent before 'n'.", options:["know","king","kite","kick"], a:0},
    {cat:"Phonetics", q:"Which word has a silent 'w'? 💡 Tip: 'w' is silent before 'r'.", options:["write","white","water","word"], a:0},
    {cat:"Phonetics", q:"Which word has a silent 'b'? 💡 Tip: 'b' is silent after 'm'.", options:["bomb","baby","rabbit","bamboo"], a:0},
    {cat:"Phonetics", q:"Which word has a silent 'g'? 💡 Tip: 'g' is silent before 'n'.", options:["sign","go","green","gift"], a:0},
    {cat:"Phonetics", q:"Which word has a silent 'h'? 💡 Tip: 'h' is silent after 'w'.", options:["white","where","how","house"], a:1},
    // Soft/Hard C–G
    {cat:"Phonetics", q:"Choose the word with soft C /s/. 💡 Tip: 'C' before 'e, i, y' sounds /s/.", options:["cat","city","cold","cup"], a:1},
    {cat:"Phonetics", q:"Choose the word with hard C /k/. 💡 Tip: 'C' before 'a, o, u' sounds /k/.", options:["cent","city","cat","ceiling"], a:2},
    {cat:"Phonetics", q:"Choose the word with soft G /dʒ/. 💡 Tip: 'G' before 'e, i, y' is soft.", options:["go","game","giant","green"], a:2},
    {cat:"Phonetics", q:"Choose the word with hard G /g/. 💡 Tip: 'G' before 'a, o, u' is hard.", options:["giraffe","giant","gem","goat"], a:3},
    // Vowel patterns (types 1–4)
    {cat:"Phonetics", q:"Choose the word with long vowel pattern (a_e). 💡 Tip: 'a' + consonant + 'e' makes long /eɪ/.", options:["cap","cat","cake","can"], a:2},
    {cat:"Phonetics", q:"Choose the word with long vowel pattern (i_e). 💡 Tip: 'i' + consonant + 'e' makes long /aɪ/.", options:["pin","pig","pink","pine"], a:3},
    {cat:"Phonetics", q:"Choose the word with long vowel pattern (o_e). 💡 Tip: 'o' + consonant + 'e' makes long /əʊ/.", options:["hop","hot","hope","hole"], a:2},
    {cat:"Phonetics", q:"Choose the word with long vowel pattern (u_e). 💡 Tip: 'u' + consonant + 'e' makes /juː/ as in 'cube'.", options:["cup","cut","cube","cute"], a:2},
    // Mixed add.
    {cat:"Phonetics", q:"Which word has the same vowel sound as 'train'?", options:["men","pen","plane","pan"], a:2},
    {cat:"Phonetics", q:"Which word has a long vowel sound?", options:["ship","sheep","sit","sick"], a:1},
    {cat:"Phonetics", q:"Which word has the same sound as 'go'?", options:["got","gone","show","good"], a:2},
    {cat:"Phonetics", q:"Which word has the same sound as 'time'?", options:["team","tame","fine","tin"], a:2},
    {cat:"Phonetics", q:"Which word has the same sound as 'toy'?", options:["tie","boy","bee","bay"], a:1},

   // ==========================================
// 📘 AI Bayan — Irregular Verbs Trainer (Translate to Russian)
// 🌟 Без звука, только анимация звёздочек
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("irregularContent");

  const verbs = [
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
