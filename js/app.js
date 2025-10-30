// =====================================================
// 🤖 AI Bayan Interactive App 2025
// Login + Menu + Grammar Trainer + Olympiads wiring
// =====================================================

// ------------------------------
// 🔑 Login System
// ------------------------------
const STUDENT_PIN = "2361";
const TEACHER_PIN = "9996";

// Simple screen switcher
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

// Login → Menu
document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) loginBtn.addEventListener('click', () => show('menu'));

  // Menu routing
  document.querySelectorAll('#menu .tile[data-target]').forEach(btn => {
    btn.addEventListener('click', () => show(btn.getAttribute('data-target')));
  });
});

// Shared star (no sound)
export function popStar(x = null, y = null) {
  const star = document.createElement('div');
  star.textContent = '⭐';
  star.style.position = 'fixed';
  star.style.left = (x ?? (window.innerWidth * 0.5)) + 'px';
  star.style.top  = (y ?? (window.innerHeight * 0.5)) + 'px';
  star.style.transform = 'translate(-50%, -50%)';
  star.style.fontSize = (24 + Math.random() * 14) + 'px';
  star.style.animation = 'flyStar 900ms ease-out forwards';
  star.style.pointerEvents = 'none';
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 900);
}

// Simple score helper
export function makeScoreBar(container, id = 'score') {
  const bar = document.createElement('div');
  bar.style.textAlign = 'center';
  bar.style.margin = '10px 0 14px';
  bar.innerHTML = `Score: <b id="${id}">0</b>`;
  container.prepend(bar);
  return (delta = 0) => {
    const el = document.getElementById(id);
    const val = Math.max(0, (parseInt(el.textContent, 10) || 0) + delta);
    el.textContent = String(val);
  };
}

// ------------------------------
// 📘 Simple Grammar Trainer (kept)
// ------------------------------
// ------------------------------
// 📘 Grammar Trainer Topics — A1–A2 full set
// ------------------------------
const grammarData = [
  { topic: "Present Simple", questions:[
    { q:"She ___ to school every day.", a:"b", options:["go","goes","going"] },
    { q:"They ___ football after school.", a:"a", options:["play","plays","playing"] },
    { q:"He ___ TV every evening.", a:"b", options:["watch","watches","watching"] },
    { q:"I ___ in Astana.", a:"a", options:["live","lives","living"] },
    { q:"My brother ___ a bike.", a:"a", options:["has","have","having"] },
  ]},

  { topic: "Past Simple", questions:[
    { q:"I ___ to school yesterday.", a:"b", options:["go","went","gone"] },
    { q:"We ___ our homework last night.", a:"a", options:["did","do","done"] },
    { q:"They ___ football last weekend.", a:"b", options:["play","played","plays"] },
    { q:"She ___ a new dress yesterday.", a:"b", options:["buys","bought","buy"] },
    { q:"He ___ TV after dinner.", a:"a", options:["watched","watches","watch"] },
  ]},

  { topic: "Present Continuous", questions:[
    { q:"She ___ now.", a:"b", options:["reads","is reading","read"] },
    { q:"They ___ football at the moment.", a:"c", options:["play","playing","are playing"] },
    { q:"I ___ to music now.", a:"c", options:["listen","listening","am listening"] },
    { q:"He ___ his homework.", a:"b", options:["do","is doing","does"] },
    { q:"We ___ breakfast right now.", a:"b", options:["have","are having","has"] },
  ]},

  { topic: "Future Simple (Will)", questions:[
    { q:"I think it ___ rain tomorrow.", a:"a", options:["will","is","was"] },
    { q:"We ___ go to the cinema tonight.", a:"a", options:["will","are","was"] },
    { q:"She ___ be happy to see you.", a:"a", options:["will","is","was"] },
    { q:"They ___ study for the test.", a:"a", options:["will","are","were"] },
    { q:"He ___ call you later.", a:"a", options:["will","is","was"] },
  ]},

  { topic: "There is / There are", questions:[
    { q:"___ a cat on the table.", a:"a", options:["There is","There are","It is"] },
    { q:"___ many books on the shelf.", a:"b", options:["There is","There are","It are"] },
    { q:"___ some milk in the fridge.", a:"a", options:["There is","There are","It is"] },
    { q:"___ two apples on the table.", a:"b", options:["There is","There are","It are"] },
    { q:"___ a computer in the room.", a:"a", options:["There is","There are","It has"] },
  ]},

  { topic: "Have got / Has got", questions:[
    { q:"I ___ a dog.", a:"a", options:["have got","has got","having"] },
    { q:"She ___ a brother.", a:"b", options:["have got","has got","have"] },
    { q:"They ___ many friends.", a:"a", options:["have got","has got","has"] },
    { q:"He ___ a car.", a:"b", options:["have got","has got","have"] },
    { q:"We ___ new books.", a:"a", options:["have got","has got","has"] },
  ]},

  { topic: "Can / Can't", questions:[
    { q:"I ___ swim very well.", a:"a", options:["can","can’t","must"] },
    { q:"She ___ drive a car.", a:"b", options:["can","can’t","must"] },
    { q:"We ___ play the guitar.", a:"a", options:["can","must","has"] },
    { q:"He ___ cook delicious food.", a:"a", options:["can","mustn’t","was"] },
    { q:"They ___ speak Chinese.", a:"b", options:["can","can’t","must"] },
  ]},

  { topic: "Must / Mustn't", questions:[
    { q:"You ___ do your homework.", a:"a", options:["must","mustn’t","can"] },
    { q:"You ___ smoke here.", a:"b", options:["must","mustn’t","can"] },
    { q:"Students ___ wear uniforms.", a:"a", options:["must","mustn’t","can’t"] },
    { q:"You ___ be late for class.", a:"b", options:["must","mustn’t","don’t have to"] },
    { q:"We ___ respect our teachers.", a:"a", options:["must","mustn’t","can’t"] },
  ]},

  { topic: "Comparatives", questions:[
    { q:"A car is ___ than a bike.", a:"a", options:["faster","fast","the fastest"] },
    { q:"My house is ___ than yours.", a:"a", options:["bigger","big","the biggest"] },
    { q:"Today is ___ than yesterday.", a:"a", options:["colder","cold","the coldest"] },
    { q:"English is ___ than Math.", a:"a", options:["easier","easy","the easiest"] },
    { q:"This book is ___ than that one.", a:"a", options:["more interesting","interesting","the most interesting"] },
  ]},

  { topic: "Superlatives", questions:[
    { q:"Mount Everest is ___ mountain in the world.", a:"a", options:["the highest","higher","high"] },
    { q:"This is ___ day of my life!", a:"a", options:["the best","better","good"] },
    { q:"He is ___ student in the class.", a:"a", options:["the smartest","smarter","smart"] },
    { q:"February is ___ month of the year.", a:"a", options:["the shortest","short","shorter"] },
    { q:"That was ___ film I’ve ever seen.", a:"a", options:["the funniest","funny","funnier"] },
  ]},

  { topic: "Countable / Uncountable nouns", questions:[
    { q:"How many ___ are there?", a:"a", options:["apples","milk","bread"] },
    { q:"How much ___ do you drink?", a:"b", options:["bananas","water","oranges"] },
    { q:"There isn’t any ___ left.", a:"c", options:["apple","juice","bread"] },
    { q:"I bought some ___ at the shop.", a:"a", options:["cheese","chairs","tables"] },
    { q:"We need some ___ for breakfast.", a:"a", options:["eggs","waters","milks"] },
  ]},

  { topic: "Some / Any / Much / Many", questions:[
    { q:"There are ___ students in the room.", a:"a", options:["many","much","some"] },
    { q:"There isn’t ___ sugar in the cup.", a:"b", options:["many","much","some"] },
    { q:"Do you have ___ friends?", a:"a", options:["many","much","some"] },
    { q:"I need ___ help, please.", a:"c", options:["many","much","some"] },
    { q:"There are ___ apples on the table.", a:"a", options:["many","much","some"] },
  ]},

  { topic: "Prepositions of place", questions:[
    { q:"The cat is ___ the table.", a:"b", options:["in","on","under"] },
    { q:"The shoes are ___ the bed.", a:"c", options:["in","on","under"] },
    { q:"The picture is ___ the wall.", a:"b", options:["under","on","in"] },
    { q:"The dog is ___ the box.", a:"a", options:["in","on","under"] },
    { q:"The ball is ___ the chair.", a:"c", options:["on","in","under"] },
  ]},

  { topic: "Prepositions of time", questions:[
    { q:"My birthday is ___ May.", a:"a", options:["in","on","at"] },
    { q:"We go to school ___ the morning.", a:"a", options:["in","on","at"] },
    { q:"The lesson starts ___ 9 o’clock.", a:"c", options:["in","on","at"] },
    { q:"They visit us ___ Sunday.", a:"b", options:["in","on","at"] },
    { q:"He studies ___ night.", a:"c", options:["in","on","at"] },
  ]},

  { topic: "Adverbs of frequency", questions:[
    { q:"I ___ go to school by bus.", a:"b", options:["never","always","sometimes"] },
    { q:"She is ___ late for class.", a:"a", options:["never","always","rarely"] },
    { q:"We ___ play football on Fridays.", a:"c", options:["never","always","usually"] },
    { q:"They are ___ on time.", a:"b", options:["never","always","often"] },
    { q:"He ___ forgets his homework.", a:"c", options:["always","never","sometimes"] },
  ]},

  { topic: "Question words", questions:[
    { q:"___ are you from?", a:"a", options:["Where","Who","When"] },
    { q:"___ is your name?", a:"b", options:["What","Who","Where"] },
    { q:"___ is that boy?", a:"b", options:["Where","Who","When"] },
    { q:"___ do you go to school?", a:"a", options:["When","Where","How"] },
    { q:"___ is your favorite color?", a:"a", options:["What","Who","Where"] },
  ]},

  { topic: "Possessive adjectives", questions:[
    { q:"This is ___ book.", a:"a", options:["my","me","mine"] },
    { q:"Is this ___ pencil?", a:"b", options:["you","your","yours"] },
    { q:"He loves ___ dog.", a:"b", options:["him","his","he’s"] },
    { q:"We are in ___ classroom.", a:"b", options:["we","us","our"] },
    { q:"They have ___ own house.", a:"b", options:["them","their","theirs"] },
  ]},

  { topic: "Demonstratives", questions:[
    { q:"___ is my pen.", a:"a", options:["This","That","These"] },
    { q:"___ are my friends.", a:"c", options:["This","That","These"] },
    { q:"___ is my bag over there.", a:"b", options:["This","That","These"] },
    { q:"___ shoes are nice.", a:"c", options:["This","That","These"] },
    { q:"___ is an apple.", a:"a", options:["This","Those","These"] },
  ]},
];

let currentTopic = 0, currentQuestion = 0, score = 0;
const grammarContent = document.getElementById("grammarContent");
const gTopicNo = document.getElementById("gTopicNo");

function showQuestion() {
  const topic = grammarData[currentTopic];
  const q = topic.questions[currentQuestion];
  gTopicNo.textContent = currentTopic + 1;
  grammarContent.innerHTML = `
    <h3>${topic.topic}</h3>
    <p>${q.q}</p>
    ${q.options.map((opt,i)=>(
      `<button class='optBtn' data-opt='${String.fromCharCode(97+i)}'>${opt}</button>`
    )).join("<br>")}
  `;
  document.querySelectorAll(".optBtn").forEach(btn=>{
    btn.onclick = ()=> checkAnswer(btn.dataset.opt);
  });
}

function checkAnswer(choice) {
  const topic = grammarData[currentTopic];
  const question = topic.questions[currentQuestion];
  const correct = question.a;

  if (choice === correct) {
    score++;
    playStar();
    try { new Audio("sound/ding.wav").play(); } catch(e) {}
  }

  // переход к следующему вопросу
  currentQuestion++;

  // если вопросы в теме ещё есть
  if (currentQuestion < topic.questions.length) {
    showQuestion();
  }
  // если вопросы в теме закончились, но есть следующая тема
  else if (currentTopic + 1 < grammarData.length) {
    currentTopic++;
    currentQuestion = 0;
    showQuestion();
  }
  // если все темы пройдены
  else {
    grammarContent.innerHTML = `
      <h3>🎉 Well done!</h3>
      <p>Your total score: <b>${score}</b> out of ${grammarData.reduce((sum,t)=>sum+t.questions.length,0)}</p>
    `;
  }
}

function playStar(){
  const star = document.createElement("div");
  star.textContent = "⭐";
  Object.assign(star.style,{position:"absolute",left:"50%",top:"50%",fontSize:"40px",animation:"fly 1s ease-out"});
  document.body.appendChild(star);
  setTimeout(()=>star.remove(),1000);
}

// ------------------------------
// 🧭 Menu routing (fixed version)
// ------------------------------
document.querySelectorAll("#menu button[data-target]").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");

    // 🎯 Grammar Trainer
    if (target === "grammar") {
      show("grammar");
      if (typeof showQuestion === "function") {
        currentTopic = 0;
        currentQuestion = 0;
        score = 0;
        showQuestion();
      }
    }

    // 🏅 Grammar Olympiad
    else if (target === "olimp") {
      show("olimp");
      if (typeof showOlimpQuestion === "function") {
        currentOlimp = 0;
        olimpScore = 0;
        showOlimpQuestion();
      }
    }

    // 🎧 Listening Olympiad
    else if (target === "listening") {
      show("listening");
      if (typeof showListening === "function") {
        currentListening = 0;
        listeningScore = 0;
        showListening();
      }
    }

    // 🧠 Vocabulary etc.
    else {
      show(target);
    }
  });
});



