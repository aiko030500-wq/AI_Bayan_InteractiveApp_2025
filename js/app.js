// ------------------------------
// 🟡 AI Bayan Login System 2025
// ------------------------------

const STUDENT_PIN = "2361";  // ученический
const TEACHER_PIN = "9996";  // учительский

// показать экран
function show(screenId) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  const target = document.getElementById(screenId);
  if (target) target.classList.add("active");
}

// обработка логина
document.getElementById("loginBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();
  const pin = document.getElementById("pinInput").value.trim();

  if (!name || !pin) {
    alert("Please enter your name and PIN code.");
    return;
  }

  if (pin === STUDENT_PIN) {
    localStorage.setItem("studentName", name);
    show("menu");
  } else if (pin === TEACHER_PIN) {
    show("teacher");
  } else {
    alert("❌ Wrong PIN. Try again.");
  }
});

// ------------------------------
// 📘 AI Bayan Grammar Trainer (A2 Level)
// ------------------------------

const grammarData = [
  {
    topic: "Present Simple",
    questions: [
      { q: "She ____ to school every day.", a: "b", options: ["go", "goes", "going"] },
      { q: "They ____ football after school.", a: "a", options: ["play", "plays", "playing"] },
      { q: "He ____ TV every evening.", a: "b", options: ["watch", "watches", "watching"] },
      { q: "I ____ in Astana.", a: "a", options: ["live", "lives", "living"] },
      { q: "My brother ____ a bike.", a: "a", options: ["has", "have", "having"] }
    ]
  },
  {
    topic: "Past Simple",
    questions: [
      { q: "I ____ to school yesterday.", a: "b", options: ["go", "went", "gone"] },
      { q: "We ____ our homework last night.", a: "a", options: ["did", "do", "done"] },
      { q: "They ____ football last weekend.", a: "b", options: ["play", "played", "plays"] },
      { q: "She ____ a new dress yesterday.", a: "b", options: ["buys", "bought", "buy"] },
      { q: "He ____ TV after dinner.", a: "b", options: ["watched", "watches", "watch"] }
    ]
  },
  {
    topic: "Future Simple (will)",
    questions: [
      { q: "I ____ go to London next year.", a: "a", options: ["will", "am", "was"] },
      { q: "They ____ visit their grandparents tomorrow.", a: "a", options: ["will", "do", "did"] },
      { q: "He ____ help you later.", a: "a", options: ["will", "is", "are"] },
      { q: "We ____ have a test on Friday.", a: "a", options: ["will", "do", "are"] },
      { q: "She ____ be a teacher one day.", a: "a", options: ["will", "is", "was"] }
    ]
  },
];

// ------------------------------
// ⚙️ Grammar Logic
// ------------------------------

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

// ------------------------------
// 🏅 Navigation for Olympiads
// ------------------------------
document.querySelectorAll("#menu button[data-target]").forEach(btn => {
  const target = btn.getAttribute("data-target");
  btn.addEventListener("click", () => {
    if (target === "olimp") {
      currentOlimp = 0;
      olimpScore = 0;
      show("olimp");
      showOlimpQuestion();
    } else if (target === "listening") {
      currentListening = 0;
      listeningScore = 0;
      show("listening");
      showListening();
    } else {
      show(target);
    }
  });
});

// запуск первого вопроса
showQuestion();
