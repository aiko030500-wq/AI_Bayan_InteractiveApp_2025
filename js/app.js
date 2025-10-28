// ------------------------------
// AI Bayan Login System
// ------------------------------
const STUDENT_PIN = "2361";
const TEACHER_PIN = "9996";

 function show(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
  }
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const nameInput = document.getElementById("nameInput");
  const pinInput = document.getElementById("pinInput");

  loginBtn.onclick = () => {
    const name = nameInput.value.trim();
    const pin = pinInput.value.trim();

    if (pin === STUDENT_PIN) {
      window.studentName = name || "Student";
      show("menu");
    } else if (pin === TEACHER_PIN) {
      show("teacher");
    } else {
      alert("❌ Wrong code, try again!");
    }
  };
});

const grammarData = [
  {
    topic: "Present Simple",
    questions: [
      { q: "She ____ to school every day.", a: "b", options: ["go", "goes", "going"] },
      { q: "They ____ football after school.", a: "a", options: ["play", "plays", "playing"] },
      { q: "He ____ TV every evening.", a: "b", options: ["watch", "watches", "watching"] },
      { q: "I ____ in Astana.", a: "a", options: ["live", "lives", "living"] },
      { q: "My brother ____ a bike.", a: "a", options: ["has", "have", "having"] },
      { q: "We ____ our homework together.", a: "b", options: ["does", "do", "doing"] }
    ]
  },
  {
    topic: "Present Continuous",
    questions: [
      { q: "I ____ to music now.", a: "c", options: ["listen", "listening", "am listening"] },
      { q: "They ____ football at the moment.", a: "c", options: ["play", "playing", "are playing"] },
      { q: "He ____ TV right now.", a: "b", options: ["watches", "is watching", "watch"] },
      { q: "She ____ breakfast now.", a: "b", options: ["have", "is having", "having"] },
      { q: "The children ____ in the park.", a: "a", options: ["are playing", "play", "plays"] },
      { q: "We ____ English today.", a: "c", options: ["study", "studying", "are studying"] }
    ]
  },
  {
    topic: "Past Simple",
    questions: [
      { q: "I ____ to school yesterday.", a: "b", options: ["go", "went", "going"] },
      { q: "She ____ a book last night.", a: "a", options: ["read", "reads", "reading"] },
      { q: "They ____ football last weekend.", a: "b", options: ["play", "played", "playing"] },
      { q: "We ____ in Almaty in 2020.", a: "b", options: ["live", "lived", "living"] },
      { q: "He ____ a bike last week.", a: "b", options: ["buy", "bought", "buying"] },
      { q: "My parents ____ home early.", a: "b", options: ["come", "came", "coming"] }
    ]
  },
  {
    topic: "Future Simple",
    questions: [
      { q: "I ____ help you tomorrow.", a: "a", options: ["will", "am", "do"] },
      { q: "She ____ visit her grandma next week.", a: "a", options: ["will", "is", "was"] },
      { q: "They ____ go to the zoo.", a: "a", options: ["will", "were", "are"] },
      { q: "We ____ study hard for the test.", a: "a", options: ["will", "were", "is"] },
      { q: "He ____ watch that movie.", a: "a", options: ["will", "did", "does"] },
      { q: "My sister ____ cook dinner tonight.", a: "a", options: ["will", "can", "is"] }
    ]
  },
  {
    topic: "There is / There are",
    questions: [
      { q: "____ a cat on the table.", a: "a", options: ["There is", "There are", "Is there"] },
      { q: "____ five books on the shelf.", a: "a", options: ["There are", "There is", "Are there"] },
      { q: "____ an apple in the fridge.", a: "a", options: ["There is", "There are", "It is"] },
      { q: "____ many students in the class.", a: "a", options: ["There are", "There is", "They are"] },
      { q: "____ a car outside.", a: "a", options: ["There is", "There are", "Is there"] },
      { q: "____ any water in the glass?", a: "a", options: ["Is there", "Are there", "There is"] }
    ]
  },
  {
    topic: "Can / Can’t",
    questions: [
      { q: "I ____ swim very well.", a: "a", options: ["can", "can’t", "could"] },
      { q: "She ____ play the piano.", a: "a", options: ["can", "can’t", "could"] },
      { q: "They ____ run fast.", a: "a", options: ["can", "could", "can’t"] },
      { q: "He ____ speak English.", a: "a", options: ["can", "can’t", "does"] },
      { q: "My cat ____ climb trees.", a: "a", options: ["can", "can’t", "is"] },
      { q: "We ____ dance well.", a: "a", options: ["can", "can’t", "does"] }
    ]
  },
  {
    topic: "Have got / Has got",
    questions: [
      { q: "I ____ a brother.", a: "a", options: ["have got", "has got", "am got"] },
      { q: "She ____ two dolls.", a: "b", options: ["have got", "has got", "is got"] },
      { q: "They ____ a new car.", a: "a", options: ["have got", "has got", "had got"] },
      { q: "He ____ a big house.", a: "a", options: ["has got", "have got", "had got"] },
      { q: "We ____ nice friends.", a: "a", options: ["have got", "has got", "got"] },
      { q: "My dog ____ a ball.", a: "a", options: ["has got", "have got", "having"] }
    ]
  },
  {
    topic: "Some / Any",
    questions: [
      { q: "There are ____ apples on the table.", a: "a", options: ["some", "any", "no"] },
      { q: "I don’t have ____ pencils.", a: "b", options: ["some", "any", "few"] },
      { q: "She has ____ milk.", a: "a", options: ["some", "any", "many"] },
      { q: "Do you have ____ friends?", a: "b", options: ["some", "any", "few"] },
      { q: "We need ____ water.", a: "a", options: ["some", "any", "a"] },
      { q: "He doesn’t have ____ money.", a: "b", options: ["some", "any", "many"] }
    ]
  },
  {
    topic: "Prepositions of Place",
    questions: [
      { q: "The cat is ____ the table.", a: "a", options: ["on", "in", "under"] },
      { q: "The ball is ____ the box.", a: "a", options: ["in", "on", "near"] },
      { q: "The dog is ____ the chair.", a: "a", options: ["under", "in", "behind"] },
      { q: "The picture is ____ the wall.", a: "b", options: ["at", "on", "behind"] },
      { q: "The shop is ____ the bank.", a: "a", options: ["next to", "on", "at"] },
      { q: "The clock is ____ the door.", a: "a", options: ["above", "between", "under"] }
    ]
  },
  {
    topic: "Question Words",
    questions: [
      { q: "____ is your name?", a: "a", options: ["What", "Who", "Where"] },
      { q: "____ are you from?", a: "a", options: ["Where", "Who", "When"] },
      { q: "____ old are you?", a: "b", options: ["What", "How", "Why"] },
      { q: "____ is your best friend?", a: "a", options: ["Who", "Where", "When"] },
      { q: "____ is your birthday?", a: "a", options: ["When", "How", "What"] },
      { q: "____ are you happy?", a: "a", options: ["Why", "Who", "What"] }
    ]
  },
  {
    topic: "Possessive Adjectives",
    questions: [
      { q: "This is ____ book.", a: "a", options: ["my", "me", "I"] },
      { q: "That is ____ car.", a: "a", options: ["your", "you", "yours"] },
      { q: "She loves ____ cat.", a: "a", options: ["her", "she", "hers"] },
      { q: "He likes ____ dog.", a: "a", options: ["his", "he", "him"] },
      { q: "We have ____ homework.", a: "a", options: ["our", "us", "we"] },
      { q: "They play with ____ friends.", a: "a", options: ["their", "them", "they"] }
    ]
  },
  {
    topic: "Comparative and Superlative",
    questions: [
      { q: "My house is ____ than yours.", a: "b", options: ["big", "bigger", "biggest"] },
      { q: "Today is the ____ day of the week.", a: "c", options: ["hot", "hotter", "hottest"] },
      { q: "This book is ____ than that one.", a: "b", options: ["interesting", "more interesting", "most interesting"] },
      { q: "Mount Everest is the ____ mountain.", a: "c", options: ["high", "higher", "highest"] },
      { q: "English is ____ than Math.", a: "b", options: ["easy", "easier", "easiest"] },
      { q: "She is the ____ student in the class.", a: "c", options: ["good", "better", "best"] }
    ]
  }
];

// Basic Quiz Logic
let currentTopic = 0;
let currentQuestion = 0;
let score = 0;

const grammarContent = document.getElementById("grammarContent");
const gTopicNo = document.getElementById("gTopicNo");

function showQuestion() {
  const topic = grammarData[currentTopic];
  const q = topic.questions[currentQuestion];
  gTopicNo.textContent = currentTopic + 1;
  grammarContent.innerHTML = `
    <h3>${topic.topic}</h3>
    <p>${q.q}</p>
    ${q.options
      .map(
        (opt, i) =>
          `<button class='optBtn' data-opt='${String.fromCharCode(97 + i)}'>${opt}</button>`
      )
      .join("<br>")}
  `;
  document.querySelectorAll(".optBtn").forEach((btn) => {
    btn.onclick = () => checkAnswer(btn.dataset.opt);
  });
}

function checkAnswer(choice) {
  const correct = grammarData[currentTopic].questions[currentQuestion].a;
  if (choice === correct) {
    score++;
    playStarAnimation();
    new Audio("sound/ding.wav").play();
  }
  currentQuestion++;
  if (currentQuestion < grammarData[currentTopic].questions.length) {
    showQuestion();
  } else {
    currentTopic++;
    currentQuestion = 0;
    if (currentTopic < grammarData.length) {
      showQuestion();
    } else {
      grammarContent.innerHTML = `<h3>🎉 Well done!</h3><p>You finished all topics.<br>Your score: ${score}</p>`;
    }
  }
}

function playStarAnimation() {
  const star = document.createElement("div");
  star.textContent = "⭐";
  star.style.position = "absolute";
  star.style.left = "50%";
  star.style.top = "50%";
  star.style.fontSize = "40px";
  star.style.animation = "fly 1s ease-out";
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1000);
}

showQuestion();

// ------------------------------
// Menu navigation for all sections
// ------------------------------
document.querySelectorAll("#menu button[data-target]").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    show(target);
  });
});
