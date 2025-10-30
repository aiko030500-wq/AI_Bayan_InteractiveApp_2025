// ==============================
// 🏅 AI Bayan — Grammar Olympiad A2 (Darын-стиль)
// 18 тем × 4 вопроса = 72. 4 варианта: a–d.
// Счёт очков + ⭐ через window.popStar(), кнопки Prev/Next.
// Требуются элементы в index.html:
//  - #olimpContent, #olimpScore, #oPrev, #oNext
// ==============================

(function(){
  // ---------- База: 18 тем по 4 вопроса ----------
  const gTopics = [
    // 1) Present Simple / Continuous / Perfect
    { topic: "Present (Simple / Continuous / Perfect)", qs: [
      { q: "She usually ___ to school by bus.", options:["go","goes","is going","has gone"], a:1 },
      { q: "Listen! The baby ___ now.", options:["cries","cry","is crying","has cried"], a:2 },
      { q: "I ___ already ___ my homework.", options:["have / done","am / doing","do / already","have / doing"], a:0 },
      { q: "They ___ breakfast at 8 a.m. every day.", options:["are having","have","has","had"], a:1 },
    ]},

    // 2) Past Simple / Continuous / Perfect
    { topic: "Past (Simple / Continuous / Perfect)", qs: [
      { q: "Yesterday at 7 pm I ___ TV.", options:["watched","was watching","have watched","am watching"], a:1 },
      { q: "By 9 pm she ___ her project.", options:["finished","had finished","was finishing","has finished"], a:1 },
      { q: "They ___ football last Sunday.", options:["played","were playing","had been playing","have played"], a:0 },
      { q: "When I arrived, the film ___.", options:["already started","had already started","was already starting","has already started"], a:1 },
    ]},

    // 3) Future Simple + be going to
    { topic: "Future: will / be going to", qs: [
      { q: "Look at those clouds! It ___ rain.", options:["will","is going to","was going to","would"], a:1 },
      { q: "I think our team ___ win.", options:["is going to","will","would","was going to"], a:1 },
      { q: "We ___ visit our grandparents this weekend (plan).", options:["are going to","will","were going to","would"], a:0 },
      { q: "Don’t worry, I ___ help you.", options:["am going to","will","was going to","might"], a:1 },
    ]},

    // 4) used to / be used to
    { topic: "used to / be used to", qs: [
      { q: "I ___ play the piano, but I don’t now.", options:["am used to","used to","get used to","am getting used to"], a:1 },
      { q: "She is ___ getting up early (it’s a habit).", options:["used to","use to","used","used for"], a:0 },
      { q: "He ___ live in London; now he lives in Rome.", options:["used to","is used to","gets used to","was used to"], a:0 },
      { q: "They are ___ working long hours.", options:["use to","used to","used to be","used to work"], a:1 },
    ]},

    // 5) Word order in questions
    { topic: "Word Order in Questions", qs: [
      { q: "___ you like pizza?", options:["Do","Are","Did","Have"], a:0 },
      { q: "Where ___ she live?", options:["does","is","do","has"], a:0 },
      { q: "What ___ you doing now?", options:["do","are","did","have"], a:1 },
      { q: "How long ___ you been here?", options:["have","has","are","do"], a:0 },
    ]},

    // 6) Types of questions (general/special)
    { topic: "Types of Questions", qs: [
      { q: "___ she a student? (general)", options:["Is","Does","Has","Can"], a:0 },
      { q: "___ are you from? (special)", options:["Who","Where","How","What"], a:1 },
      { q: "___ he speak French? (general)", options:["Do","Does","Is","Can"], a:1 },
      { q: "___ time is it? (special)", options:["Where","What","How","Who"], a:1 },
    ]},

    // 7) Comparative & Superlative
    { topic: "Comparative & Superlative", qs: [
      { q: "This road is ___ than that one.", options:["narrower","more narrow","the most narrow","narrow"], a:0 },
      { q: "He is the ___ student in the class.", options:["better","best","goodest","most good"], a:1 },
      { q: "My house is ___ than yours.", options:["biggest","bigger","more big","big"], a:1 },
      { q: "This task is ___ of all.", options:["more difficult","the most difficult","difficulter","most difficult"], a:1 },
    ]},

    // 8) too / enough / a little / a few
    { topic: "Too / Enough / A little / A few", qs: [
      { q: "It’s ___ cold to go swimming.", options:["enough","too","a few","a little"], a:1 },
      { q: "We have ___ time to finish.", options:["a few","too","enough","few"], a:2 },
      { q: "I have ___ friends here (немного, исчисл.).", options:["a few","a little","few","little"], a:0 },
      { q: "He drinks ___ sugar in tea (мало, неисчисл.).", options:["a few","a little","few","enough"], a:1 },
    ]},

    // 9) Gerund & Infinitive
    { topic: "Gerunds & Infinitives", qs: [
      { q: "I enjoy ___ books.", options:["to read","reading","read","to reading"], a:1 },
      { q: "She decided ___ earlier.", options:["leaving","to leave","leave","to leaving"], a:1 },
      { q: "They finished ___ the project.", options:["to do","doing","do","to doing"], a:1 },
      { q: "He wants ___ a doctor.", options:["be","to be","being","to being"], a:1 },
    ]},

    // 10) Modal verbs
    { topic: "Modal Verbs", qs: [
      { q: "You ___ wear a seatbelt. (rule)", options:["must","may","might","could"], a:0 },
      { q: "___ I open the window?", options:["Must","May","Should","Might"], a:1 },
      { q: "He ___ swim when he was five.", options:["can","could","must","may"], a:1 },
      { q: "You ___ see a doctor. (advice)", options:["should","must","may","can"], a:0 },
    ]},

    // 11) Prepositions of time & place
    { topic: "Prepositions: Time & Place", qs: [
      { q: "The lesson starts ___ 9 o’clock.", options:["in","at","on","by"], a:1 },
      { q: "We have holidays ___ July.", options:["in","on","at","by"], a:0 },
      { q: "He lives ___ London.", options:["at","on","in","by"], a:2 },
      { q: "The book is ___ the table.", options:["in","on","at","by"], a:1 },
    ]},

    // 12) Conditionals I–II
    { topic: "Conditionals I–II", qs: [
      { q: "If it rains, we ___ at home. (real)", options:["will stay","stay","would stay","stayed"], a:0 },
      { q: "If I were you, I ___ more.", options:["will study","would study","study","studied"], a:1 },
      { q: "If she ___ early, she won’t miss the bus.", options:["gets up","got up","would get up","get up"], a:0 },
      { q: "If I had more time, I ___ travel a lot.", options:["will","would","can","could"], a:1 },
    ]},

    // 13) Articles (a/an/the/—)
    { topic: "Articles (a / an / the / —)", qs: [
      { q: "This is ___ apple.", options:["a","an","the","—"], a:1 },
      { q: "___ sun is bright today.", options:["A","An","The","—"], a:2 },
      { q: "I play ___ piano.", options:["a","an","the","—"], a:3 },
      { q: "She is ___ teacher.", options:["a","an","the","—"], a:0 },
    ]},

    // 14) Pronouns (personal, possessive, demonstrative, some/any)
    { topic: "Pronouns (personal / possessive / demonstrative / some/any)", qs: [
      { q: "Give me ___ book, please. (указат.)", options:["this","he","her","mine"], a:0 },
      { q: "Is there ___ milk in the fridge?", options:["some","any","no","many"], a:1 },
      { q: "These shoes are ___. (притяж.)", options:["me","mine","my","I"], a:1 },
      { q: "___ is my brother. (личн.)", options:["He","His","Him","Her"], a:0 },
    ]},

    // 15) Countable / Uncountable
    { topic: "Countable / Uncountable", qs: [
      { q: "We need ___ water.", options:["a few","a little","few","many"], a:1 },
      { q: "There are ___ chairs in the room.", options:["a little","little","a few","much"], a:2 },
      { q: "How ___ sugar do you take?", options:["many","much","few","a few"], a:1 },
      { q: "There isn’t ___ bread left.", options:["much","many","a few","few"], a:0 },
    ]},

    // 16) Direct / Indirect speech
    { topic: "Direct / Indirect Speech", qs: [
      { q: "He said: ‘I am busy.’ → He said that he ___ busy.", options:["is","was","has been","were"], a:1 },
      { q: "She said: ‘I will help.’ → She said she ___ help.", options:["will","would","can","helps"], a:1 },
      { q: "They said: ‘We have finished.’ → They said they ___ finished.", options:["had","have","has","were"], a:0 },
      { q: "Tom said: ‘I like tea.’ → Tom said he ___ tea.", options:["likes","liked","has liked","was liking"], a:1 },
    ]},

    // 17) Active / Passive voice
    { topic: "Active / Passive Voice", qs: [
      { q: "The cake ___ by my mom yesterday.", options:["was made","is made","made","will be made"], a:0 },
      { q: "English ___ in many countries.", options:["speaks","is spoken","was spoken","is speaking"], a:1 },
      { q: "Choose Active:", options:["The book is read by Anna.","Anna reads the book.","The room is cleaned.","Dinner was cooked."], a:1 },
      { q: "Choose Passive:", options:["Mom cooks dinner.","They built this bridge.","This bridge was built in 1990.","Anna reads the story."], a:2 },
    ]},

    // 18) Do you / Are you?
    { topic: "Do you / Are you?", qs: [
      { q: "___ a student?", options:["Do you","Are you","Have you","Did you"], a:1 },
      { q: "___ like English?", options:["Are you","Do you","Did you","Have you"], a:1 },
      { q: "___ ready?", options:["Do you","Are you","Did you","Have you"], a:1 },
      { q: "___ play football after school?", options:["Are you","Do you","Did you","Have you"], a:1 },
    ]},
  ];

  // ---------- Разворачиваем в плоский список вопросов ----------
  const flat = [];
  gTopics.forEach((block, ti) => {
    block.qs.forEach((q, qi) => {
      flat.push({ topic:block.topic, q, ti, qi });
    });
  });

  let cur = 0;                // индекс текущего вопроса
  let score = 0;              // общий счёт
  const answered = new Array(flat.length).fill(false); // чтобы не фармить очки

  const elContent = () => document.getElementById('olimpContent');
  const elScore   = () => document.getElementById('olimpScore');

  function renderQuestion(){
    const host = elContent();
    if(!host) return;

    if(cur >= flat.length){
      host.innerHTML = `
        <div class="card">
          <h3>🎉 Olympiad complete!</h3>
          <p>You scored <b>${score}</b> / ${flat.length} 🌟</p>
          <button class="back" onclick="show('menu')">🏠 Back to Menu</button>
        </div>`;
      return;
    }

    const item = flat[cur];
    host.innerHTML = `
      <div class="card">
        <p><b>${item.topic}</b> — Question ${cur+1}/${flat.length}</p>
        <h3>${item.q.q}</h3>
        <div class="opts">
          ${item.q.options.map((opt,i)=>`
            <button class="opt" data-i="${i}">${opt}</button>
          `).join('')}
        </div>
      </div>
    `;

    host.querySelectorAll('.opt').forEach(btn=>{
      btn.onclick = () => {
        const i = +btn.dataset.i;
        const correct = item.q.a;
        // блокируем повторные клики
        host.querySelectorAll('.opt').forEach(b=>b.disabled = true);

        if(i === correct && !answered[cur]){
          answered[cur] = true;
          score++;
          if(elScore()) elScore().textContent = score;
          if(typeof window.popStar === 'function') window.popStar();
        }
      };
    });
  }

  function nextQ(){
    if(cur < flat.length) cur++;
    renderQuestion();
  }
  function prevQ(){
    cur = Math.max(0, cur-1);
    renderQuestion();
  }

  // Кнопки навигации
  document.getElementById('oNext') && (document.getElementById('oNext').onclick = nextQ);
  document.getElementById('oPrev') && (document.getElementById('oPrev').onclick = prevQ);

  // Точка входа из app.js
  window.showOlimpQuestion = function(firstRun=false){
    if(firstRun){
      cur = 0;
      score = 0;
      if(elScore()) elScore().textContent = 0;
      for(let i=0;i<answered.length;i++) answered[i]=false;
    }
    renderQuestion();
  };
})();
