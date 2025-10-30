// =====================================================
// 🧠 AI Bayan Vocabulary Olympiad — A2 (Darын-style, 70 Q)
// 7 категорий × 10 вопросов | Random | Stars + Sound | Results table
// =====================================================
document.addEventListener("DOMContentLoaded", function () {

  // --- состояние теста ---
  let current = 0;                 // индекс текущего вопроса (в перемешанном списке)
  let score = 0;                   // общий счёт
  const answers = [];              // сохранённые ответы [{choice, correct, cat}]
  const sectionScores = {};        // очки по категориям { cat: nCorrect }
  const sectionTotals = {};        // всего вопросов по категориям { cat: nTotal }

  // --- база вопросов (70) ---
  const vocabData = [
    // === SYNONYMS (10) ===
    {cat:"Synonyms", q:"Choose a synonym for 'big'.", options:["large","small","tiny","thin"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'happy'.", options:["glad","sad","angry","bored"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'fast'.", options:["quick","slow","late","lazy"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'begin'.", options:["start","finish","stop","close"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'near'.", options:["close","far","away","distant"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'intelligent'.", options:["smart","lazy","weak","rude"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'angry'.", options:["mad","happy","sleepy","quiet"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'child'.", options:["kid","adult","teacher","baby"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'easy'.", options:["simple","difficult","heavy","hard"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'end'.", options:["finish","begin","open","start"], a:0},

    // === ANTONYMS (10) ===
    {cat:"Antonyms", q:"Choose an antonym for 'cold'.", options:["hot","warm","cool","wet"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'easy'.", options:["difficult","soft","simple","light"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'young'.", options:["old","child","baby","new"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'empty'.", options:["full","open","clear","small"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'early'.", options:["late","soon","morning","first"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'beautiful'.", options:["ugly","nice","pretty","lovely"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'rich'.", options:["poor","sad","weak","ill"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'happy'.", options:["sad","glad","good","calm"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'strong'.", options:["weak","heavy","tall","fat"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'short'.", options:["tall","small","tiny","thin"], a:0},

    // === PHRASAL VERBS (10) ===
    {cat:"Phrasal Verbs", q:"'Turn on' means...", options:["switch off","start using","throw away","put on clothes"], a:1},
    {cat:"Phrasal Verbs", q:"'Look after' means...", options:["take care of","look for","look at","look up"], a:0},
    {cat:"Phrasal Verbs", q:"'Find out' means...", options:["discover/get information","give up","get up","add up"], a:0},
    {cat:"Phrasal Verbs", q:"'Give up' means...", options:["stop trying","continue","wake up","go on"], a:0},
    {cat:"Phrasal Verbs", q:"'Put on' means...", options:["wear clothes","remove clothes","arrive","fix"], a:0},
    {cat:"Phrasal Verbs", q:"'Take off' means...", options:["remove clothes","start working","go to bed","look at"], a:0},
    {cat:"Phrasal Verbs", q:"'Wake up' means...", options:["stop sleeping","go to sleep","get dressed","sit down"], a:0},
    {cat:"Phrasal Verbs", q:"'Turn off' means...", options:["stop a machine","start a car","clean up","open"], a:0},
    {cat:"Phrasal Verbs", q:"'Pick up' means...", options:["lift or collect","drop down","push away","turn around"], a:0},
    {cat:"Phrasal Verbs", q:"'Go on' means...", options:["continue","stop","go out","break down"], a:0},

    // === ADD ONE OUT (10) ===
    {cat:"Add One Out", q:"Choose the word that is different.", options:["apple","pear","orange","car"], a:3},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["bus","train","car","teacher"], a:3},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["cat","dog","banana","tiger"], a:2},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["Monday","Friday","April","Tuesday"], a:2},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["pen","pencil","eraser","chair"], a:3},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["rain","snow","coffee","sun"], a:2},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["winter","summer","hot","spring"], a:2},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["red","blue","table","green"], a:2},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["bread","milk","rice","computer"], a:3},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["dog","cat","mouse","bus"], a:3},

    // === WORD FORMS (10) ===
    {cat:"Word Forms", q:"There are many ___ in the garden.", options:["child","children","childs","childrens"], a:1},
    {cat:"Word Forms", q:"She is the ___ in her class.", options:["tallest","taller","more tall","tall"], a:0},
    {cat:"Word Forms", q:"He runs ___ than me.", options:["faster","fastly","more fast","most fast"], a:0},
    {cat:"Word Forms", q:"This is the ___ book I have read.", options:["most interesting","more interesting","interestingest","interesting"], a:0},
    {cat:"Word Forms", q:"My dad is a ___ at the hospital.", options:["doctor","doctors","doctoring","a doctors"], a:0},
    {cat:"Word Forms", q:"I have two ___ and one sister.", options:["brother","brothers","brotheres","brothes"], a:1},
    {cat:"Word Forms", q:"The room is ___ than yesterday.", options:["cleaner","more clean","cleany","clearest"], a:0},
    {cat:"Word Forms", q:"She sings ___ than her friend.", options:["better","gooder","best","more good"], a:0},
    {cat:"Word Forms", q:"This test is ___ than the last one.", options:["easier","easyer","more easy","most easy"], a:0},
    {cat:"Word Forms", q:"He is ___ person I know.", options:["the kindest","kinder","most kind","more kind"], a:0},

    // === ARTICLES (10) ===
    {cat:"Articles", q:"I have ___ umbrella. It’s raining.", options:["a","an","the","—"], a:1},
    {cat:"Articles", q:"___ sun is very bright today.", options:["A","An","The","—"], a:2},
    {cat:"Articles", q:"She plays ___ piano every day.", options:["a","an","the","—"], a:2},
    {cat:"Articles", q:"We went to ___ school by bus.", options:["a","an","the","—"], a:3},
    {cat:"Articles", q:"Can you pass me ___ salt, please?", options:["a","an","the","—"], a:2},
    {cat:"Articles", q:"He is ___ honest man.", options:["a","an","the","—"], a:1},
    {cat:"Articles", q:"I want to buy ___ new phone.", options:["a","an","the","—"], a:0},
    {cat:"Articles", q:"___ Pacific Ocean is very large.", options:["A","An","The","—"], a:2},
    {cat:"Articles", q:"They live in ___ old house near the river.", options:["a","an","the","—"], a:1},
    {cat:"Articles", q:"We visited ___ Louvre in Paris.", options:["a","an","the","—"], a:2},

    // === TIME & DATES (10) ===
    {cat:"Time & Dates", q:"The meeting is at 7:30 ___.", options:["a.m.","p.m.","morning","night"], a:0},
    {cat:"Time & Dates", q:"Our class starts at 3:45 ___.", options:["a.m.","p.m.","in the morning","at night"], a:1},
    {cat:"Time & Dates", q:"Her birthday is on ___.", options:["January 5th","the January","5 Januaryth","Monday 5th January"], a:0},
    {cat:"Time & Dates", q:"Today is ___.", options:["the second of March","two March","March secondth","second Marchs"], a:0},
    {cat:"Time & Dates", q:"We have English on ___.", options:["Monday","in Monday","the Monday","at Monday"], a:0},
    {cat:"Time & Dates", q:"It’s 12:00 ___. We are having lunch.", options:["a.m.","p.m.","in the midnight","at morning"], a:1},
    {cat:"Time & Dates", q:"The train leaves at ___.", options:["6:05 a.m.","6:05 morning","at 6 and 5","6:05 o’clock p.m. morning"], a:0},
    {cat:"Time & Dates", q:"Our exam is on ___.", options:["June 21st","the June 21","21th of June","June the 21th"], a:0},
    {cat:"Time & Dates", q:"My music lesson is at ___.", options:["half past two","two half past","half two past","past half two"], a:0},
    {cat:"Time & Dates", q:"The shop opens at ___.", options:["quarter to nine","nine quarter to","to quarter nine","quarter nine to"], a:0}
  ];

  // --- подготовка: посчитаем всего по категориям ---
  const allCats = Array.from(new Set(vocabData.map(x => x.cat)));
  allCats.forEach(c => { sectionScores[c] = 0; sectionTotals[c] = 0; });
  vocabData.forEach(x => { sectionTotals[x.cat] += 1; });

  // --- перемешивание общего порядка вопросов ---
  const order = shuffle([...Array(vocabData.length).keys()]);

  // --- элементы DOM ---
  const root = document.getElementById("vocabContent");

  // --- утилита: анимация звезды ---
  function showStar() {
    const star = document.createElement("div");
    star.textContent = "⭐";
    Object.assign(star.style, {
      position: "fixed",
      left: `${10 + Math.random() * 80}%`,
      top: `${20 + Math.random() * 60}%`,
      fontSize: `${24 + Math.random() * 24}px`,
      opacity: 0.95,
      zIndex: 1000,
      animation: "flyStar 1s ease-out forwards"
    });
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1000);
  }

  // --- утилита: перетасовка массива (Fisher–Yates) ---
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // --- рендер одного вопроса ---
  function render() {
    const idx = order[current];
    const item = vocabData[idx];
    const total = vocabData.length;
    const saved = answers[current] ?? null;

    root.innerHTML = `
      <h3>🧠 Vocabulary Olympiad — A2</h3>
      <p><b>Section:</b> ${item.cat}</p>
      <p><b>Question ${current + 1} / ${total}</b></p>
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
      <div class="progress">Score: ${score} / ${total}</div>
    `;

    // обработка кликов по вариантам
    document.querySelectorAll(".optBtn").forEach(btn => {
      btn.onclick = () => {
        if (answers[current]) return; // уже отвечено
        const choice = parseInt(btn.dataset.idx, 10);
        const correctIdx = item.a;
        const isCorrect = (choice === correctIdx);

        answers[current] = { choice, correct: isCorrect, cat: item.cat };
        if (isCorrect) {
          score++;
          sectionScores[item.cat]++;
          try { new Audio("sound/ding.wav").play(); } catch(e) {}
          showStar();
        }
        // перерисуем, чтобы показать ✅/❌
        render();
      };
    });

    // лёгкий перезапуск анимации появления контейнера (если в CSS есть fade)
    root.style.animation = "none";
    setTimeout(() => { root.style.animation = ""; }, 30);
  }

  // --- создать панель навигации (1 раз) ---
  function ensureNav() {
    if (document.getElementById("vPrev")) return;

    const nav = document.createElement("div");
    nav.className = "nav-buttons";
    nav.innerHTML = `
      <button id="vPrev">⬅️ Previous</button>
      <button id="vNext">➡️ Next</button>
    `;
    root.after(nav);

    const menu = document.createElement("div");
    menu.className = "menu-return";
    menu.innerHTML = `<button id="vMenu" onclick="show('menu')">🏠 Back to Menu</button>`;
    nav.after(menu);

    document.getElementById("vPrev").onclick = () => {
      if (current > 0) {
        current--;
        render();
      }
    };
    document.getElementById("vNext").onclick = () => {
      if (current < vocabData.length - 1) {
        current++;
        render();
      } else {
        finish();
      }
    };
  }

  // --- финальный экран с таблицей результатов по разделам ---
  function finish() {
    try { new Audio("sound/applause.wav").play(); } catch(e) {}

    // соберём строки таблицы
    let rows = "";
    allCats.forEach(cat => {
      rows += `
        <tr>
          <td>${cat}</td>
          <td>${sectionScores[cat]} / ${sectionTotals[cat]}</td>
        </tr>
      `;
    });

    root.innerHTML = `
      <div class="final-screen">
        <h3>🎉 Vocabulary Olympiad Finished!</h3>
        <p class="fade-in">Total score: <b>${score} / ${vocabData.length}</b></p>
        <table class="fade-in" style="margin:16px auto; border-collapse:collapse;">
          <thead>
            <tr>
              <th style="border-bottom:2px solid #ccc; padding:6px 10px; text-align:left;">Section</th>
              <th style="border-bottom:2px solid #ccc; padding:6px 10px; text-align:left;">Result</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
        <button id="vMenu2" class="fade-in delay2">🏠 Back to Menu</button>
      </div>
    `;
    document.getElementById("vMenu2").onclick = () => show("menu");

    // простая «конфетти» из звёзд
    for (let i = 0; i < 18; i++) {
      const s = document.createElement("div");
      s.textContent = "⭐";
      Object.assign(s.style, {
        position: "fixed",
        left: `${Math.random() * 100}%`,
        top: "-10px",
        fontSize: `${18 + Math.random() * 18}px`,
        opacity: 0.85,
        animation: `fall ${2 + Math.random() * 3}s linear forwards`,
        zIndex: 999
      });
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 4500);
    }
  }

  // --- запуск ---
  ensureNav();
  render();
});
