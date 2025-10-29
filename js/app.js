// ------------------------------
// AI Bayan Login System 
// ------------------------------

const STUDENT_PIN = "2361";
const TEACHER_PIN = "9996";

// ------------------------------
// AI Bayan Grammar Trainer 2025 — Level A2+
// 18 topics × 5 questions
// ------------------------------

const grammarData = [
  {
    topic: "Subject + Noun",
    questions: [
      { q: "____ is playing football.", a: "a", options: ["He", "Him", "His"] },
      { q: "____ are my friends.", a: "b", options: ["This", "Those", "He"] },
      { q: "____ has a big dog.", a: "c", options: ["Them", "They", "She"] },
      { q: "____ name is Adam.", a: "a", options: ["My", "Me", "Mine"] },
      { q: "____ live in a small town.", a: "b", options: ["He", "We", "She"] }
    ]
  },
  {
    topic: "To Be (am, is, are)",
    questions: [
      { q: "I ____ a student.", a: "a", options: ["am", "is", "are"] },
      { q: "They ____ from Kazakhstan.", a: "c", options: ["is", "am", "are"] },
      { q: "He ____ not at home.", a: "a", options: ["is", "are", "am"] },
      { q: "We ____ in the park.", a: "c", options: ["am", "is", "are"] },
      { q: "She ____ a teacher.", a: "a", options: ["is", "are", "am"] }
    ]
  },
  {
    topic: "To Have / Have got",
    questions: [
      { q: "I ____ a new bike.", a: "b", options: ["has", "have", "having"] },
      { q: "She ____ got a cat.", a: "a", options: ["has", "have", "had"] },
      { q: "We ____ got English today.", a: "b", options: ["has", "have", "had"] },
      { q: "He ____ not got any brothers.", a: "a", options: ["has", "have", "had"] },
      { q: "They ____ got a big house.", a: "b", options: ["has", "have", "had"] }
    ]
  },
  {
    topic: "Present Simple",
    questions: [
      { q: "She ____ to school every day.", a: "b", options: ["go", "goes", "going"] },
      { q: "They ____ football on Sundays.", a: "a", options: ["play", "plays", "playing"] },
      { q: "He ____ breakfast at 7.", a: "b", options: ["eat", "eats", "eating"] },
      { q: "We ____ our homework in the evening.", a: "c", options: ["does", "did", "do"] },
      { q: "My dad ____ TV after dinner.", a: "a", options: ["watches", "watch", "watching"] }
    ]
  },
  {
    topic: "Present Continuous",
    questions: [
      { q: "I ____ to music now.", a: "c", options: ["listen", "listening", "am listening"] },
      { q: "They ____ football at the moment.", a: "c", options: ["play", "playing", "are playing"] },
      { q: "He ____ TV right now.", a: "b", options: ["watches", "is watching", "watch"] },
      { q: "She ____ breakfast now.", a: "b", options: ["have", "is having", "having"] },
      { q: "We ____ English today.", a: "c", options: ["study", "studying", "are studying"] }
    ]
  },
  {
    topic: "Past Simple",
    questions: [
      { q: "I ____ to school yesterday.", a: "b", options: ["go", "went", "going"] },
      { q: "They ____ football last Sunday.", a: "b", options: ["plays", "played", "playing"] },
      { q: "He ____ TV yesterday.", a: "b", options: ["watch", "watched", "watching"] },
      { q: "We ____ in the park last week.", a: "b", options: ["walk", "walked", "walking"] },
      { q: "She ____ to Almaty last month.", a: "b", options: ["go", "went", "gone"] }
    ]
  },
  {
    topic: "Future Simple (will)",
    questions: [
      { q: "I ____ visit my grandmother tomorrow.", a: "a", options: ["will", "am", "was"] },
      { q: "They ____ go to the cinema next week.", a: "a", options: ["will", "do", "did"] },
      { q: "He ____ help you with homework.", a: "a", options: ["will", "is", "was"] },
      { q: "We ____ have English on Friday.", a: "a", options: ["will", "are", "were"] },
      { q: "It ____ be sunny tomorrow.", a: "a", options: ["will", "is", "was"] }
    ]
  },
  {
    topic: "Be going to",
    questions: [
      { q: "I ____ visit my cousin next week.", a: "a", options: ["am going to", "will", "is going"] },
      { q: "She ____ buy a new phone.", a: "b", options: ["is go", "is going to", "will going"] },
      { q: "We ____ watch a movie tonight.", a: "a", options: ["are going to", "will", "is going"] },
      { q: "He ____ travel to London soon.", a: "b", options: ["are going", "is going to", "will going"] },
      { q: "They ____ play football tomorrow.", a: "a", options: ["are going to", "is going to", "will be"] }
    ]
  },
  {
    topic: "Articles (a, an, the, zero article)",
    questions: [
      { q: "This is ____ apple.", a: "b", options: ["a", "an", "the"] },
      { q: "She has ____ cat.", a: "a", options: ["a", "an", "the"] },
      { q: "I live in ____ big city.", a: "c", options: ["a", "an", "the"] },
      { q: "____ water is important for life.", a: "c", options: ["a", "an", "zero (no article)"] },
      { q: "We saw ____ elephant at the zoo.", a: "b", options: ["a", "an", "the"] }
    ]
  },
  {
    topic: "Quantifiers (many, much, few, little, a lot of)",
    questions: [
      { q: "There are ____ students in the class.", a: "a", options: ["many", "much", "few"] },
      { q: "I have ____ time today.", a: "b", options: ["many", "much", "little"] },
      { q: "We have ____ friends in Astana.", a: "c", options: ["few", "much", "a lot of"] },
      { q: "She drank ____ water.", a: "b", options: ["many", "much", "few"] },
      { q: "He has only ____ money left.", a: "d", options: ["much", "few", "a lot of", "little"] }
    ]
  },
  {
    topic: "There is / There are",
    questions: [
      { q: "____ a park near my house.", a: "a", options: ["There is", "There are", "There"] },
      { q: "____ two apples on the table.", a: "b", options: ["There is", "There are", "There was"] },
      { q: "____ no milk in the fridge.", a: "a", options: ["There is", "There are", "There have"] },
      { q: "____ many students in our school.", a: "b", options: ["There is", "There are", "There were"] },
      { q: "____ a cat under the chair.", a: "a", options: ["There is", "There are", "There be"] }
    ]
  },
  {
    topic: "Modal Verbs (can, could, must, should, have to)",
    questions: [
      { q: "You ____ study hard for the exam.", a: "c", options: ["can", "might", "must"] },
      { q: "I ____ play the piano.", a: "a", options: ["can", "must", "should"] },
      { q: "We ____ be late for school.", a: "b", options: ["should", "mustn't", "may"] },
      { q: "You ____ eat more vegetables.", a: "a", options: ["should", "have to", "could"] },
      { q: "He ____ swim when he was five.", a: "b", options: ["must", "could", "should"] }
    ]
  },
  {
    topic: "Present Perfect",
    questions: [
      { q: "I ____ already done my homework.", a: "a", options: ["have", "did", "do"] },
      { q: "She ____ never been to London.", a: "b", options: ["has", "have", "had"] },
      { q: "We ____ just finished dinner.", a: "a", options: ["have", "has", "had"] },
      { q: "He ____ lived here since 2010.", a: "b", options: ["have", "has", "had"] },
      { q: "They ____ not seen this movie yet.", a: "a", options: ["have", "has", "had"] }
    ]
  },
  {
    topic: "Gerunds (verb + ing)",
    questions: [
      { q: "I enjoy ____ books.", a: "c", options: ["read", "reads", "reading"] },
      { q: "He is good at ____.", a: "b", options: ["to swim", "swimming", "swim"] },
      { q: "She likes ____ to music.", a: "c", options: ["listen", "listens", "listening"] },
      { q: "We finished ____ dinner.", a: "b", options: ["eat", "eating", "to eat"] },
      { q: "They are interested in ____ English.", a: "c", options: ["learn", "learning", "learned"] }
    ]
  },
  {
    topic: "Pronouns & Possessives",
    questions: [
      { q: "This book is ____.", a: "a", options: ["mine", "me", "I"] },
      { q: "That is ____ car.", a: "b", options: ["they", "their", "theirs"] },
      { q: "Can you help ____?", a: "c", options: ["I", "she", "me"] },
      { q: "____ house is near the sea.", a: "a", options: ["Our", "Ours", "We"] },
      { q: "He loves ____ dog.", a: "b", options: ["he", "his", "him"] }
    ]
  },
  {
    topic: "Adverbs of Frequency",
    questions: [
      { q: "I ____ go to bed late.", a: "b", options: ["always", "never", "sometimes"] },
      { q: "She is ____ early for class.", a: "a", options: ["usually", "never", "seldom"] },
      { q: "We ____ eat breakfast at home.", a: "c", options: ["rarely", "sometimes", "always"] },
      { q: "He ____ forgets his homework.", a: "a", options: ["sometimes", "never", "always"] },
      { q: "They are ____ happy on Fridays.", a: "b", options: ["often", "always", "usually"] }
    ]
  },
  {
    topic: "Comparative & Superlative Adjectives/Adverbs",
    questions: [
      { q: "This book is ____ than that one.", a: "a", options: ["better", "good", "the best"] },
      { q: "My house is ____ than yours.", a: "b", options: ["big", "bigger", "the biggest"] },
      { q: "He runs ____ of all.", a: "c", options: ["fast", "faster", "the fastest"] },
      { q: "Summer is ____ than winter.", a: "a", options: ["hotter", "hottest", "hot"] },
      { q: "This is the ____ day of my life!", a: "c", options: ["good", "better", "best"] }
    ]
  },
  {
    topic: "Wh-Questions",
    questions: [
      { q: "____ are you from?", a: "a", options: ["Where", "What", "When"] },
      { q: "____ is your name?", a: "b", options: ["Who", "What", "Which"] },
      { q: "____ do you get up?", a: "c", options: ["Where", "Why", "When"] },
      { q: "____ are you late?", a: "b", options: ["When", "Why", "How"] },
      { q: "____ is your favourite subject?", a: "a", options: ["What", "Which", "Who"] }
    ]
  }
];

// ------------------------------
// Core Logic
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
// Menu Navigation
// ------------------------------
document.querySelectorAll("#menu button[data-target]").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    show(target);
  });
});

// ------------------------------
// Login System
// ------------------------------
document.getElementById("loginBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();
  const pin = document.getElementById("pinInput").value.trim();
  if (pin === STUDENT_PIN || pin === TEACHER_PIN) {
    show("menu");
  } else {
    alert("Invalid access code!");
  }
});

function show(section) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(section).classList.add("active");
}

showQuestion();
// ------------------------------
// AI Bayan Grammar Olympiad 2025 — Level A2
// ------------------------------

let currentOlimp = 0;
let olimpScore = 0;

const olimpData = [
  // ---------- Grammar (10) ----------
  { q: "He ____ to school every morning.", options: ["go", "goes", "going"], a: 1 },
  { q: "They ____ playing football now.", options: ["is", "are", "am"], a: 1 },
  { q: "I ____ breakfast at 8 o’clock.", options: ["have", "has", "having"], a: 0 },
  { q: "She ____ like coffee.", options: ["doesn’t", "don’t", "isn’t"], a: 0 },
  { q: "We ____ to Astana last summer.", options: ["go", "went", "going"], a: 1 },
  { q: "My brother can ____ the guitar.", options: ["play", "plays", "playing"], a: 0 },
  { q: "I ____ seen that film before.", options: ["have", "has", "am"], a: 0 },
  { q: "There ____ many people in the park.", options: ["is", "are", "be"], a: 1 },
  { q: "She is ____ than her sister.", options: ["more tall", "taller", "tallest"], a: 1 },
  { q: "We will go out if it ____ rain.", options: ["doesn’t", "don’t", "isn’t"], a: 0 },

  // ---------- Vocabulary (10) ----------
  { q: "You need a ____ to cut paper.", options: ["knife", "scissors", "spoon"], a: 1 },
  { q: "A place where you borrow books is a ____.", options: ["library", "school", "shop"], a: 0 },
  { q: "The opposite of 'cheap' is ____.", options: ["expensive", "costly", "valuable"], a: 0 },
  { q: "A person who teaches is a ____.", options: ["doctor", "teacher", "pilot"], a: 1 },
  { q: "We wear gloves on our ____.", options: ["hands", "feet", "head"], a: 0 },
  { q: "When it rains, we use an ____.", options: ["umbrella", "cap", "coat"], a: 0 },
  { q: "We watch movies in the ____.", options: ["museum", "cinema", "library"], a: 1 },
  { q: "He is very ____ — he always helps people.", options: ["kind", "lazy", "angry"], a: 0 },
  { q: "A baby cat is called a ____.", options: ["puppy", "kitten", "duckling"], a: 1 },
  { q: "We need a ____ to write a letter.", options: ["pen", "knife", "spoon"], a: 0 },

  // ---------- Mixed (10) ----------
  { q: "There ____ some apples on the table.", options: ["is", "are", "be"], a: 1 },
  { q: "She ____ to music every evening.", options: ["listens", "listen", "is listening"], a: 0 },
  { q: "I have lived here ____ five years.", options: ["since", "for", "at"], a: 1 },
  { q: "If I ____ time, I’ll visit you.", options: ["have", "has", "will have"], a: 0 },
  { q: "How ____ money do you have?", options: ["many", "much", "lot"], a: 1 },
  { q: "She ____ swim when she was five.", options: ["can", "could", "may"], a: 1 },
  { q: "I’m interested ____ learning English.", options: ["at", "in", "for"], a: 1 },
  { q: "He drives very ____. He never has accidents.", options: ["careful", "carefully", "careless"], a: 1 },
  { q: "This book is ____ than that one.", options: ["good", "better", "best"], a: 1 },
  { q: "Let’s go to the park, ____?", options: ["shall we", "don’t we", "will we"], a: 0 }
];

// ------------------------------
// Функции отображения вопросов
// ------------------------------
function showOlimpQuestion() {
  const q = olimpData[currentOlimp];
  const container = document.getElementById("olimpContent");
  container.innerHTML = `
    <h3>Question ${currentOlimp + 1} of ${olimpData.length}</h3>
    <p>${q.q}</p>
    ${q.options
      .map(
        (opt, i) =>
          `<button class='optBtn' data-opt='${i}'>${opt}</button>`
      )
      .join("<br>")}
  `;

  document.querySelectorAll(".optBtn").forEach((btn) => {
    btn.onclick = () => checkOlimpAnswer(parseInt(btn.dataset.opt));
  });
}

function checkOlimpAnswer(choice) {
  const correct = olimpData[currentOlimp].a;
  if (choice === correct) {
    olimpScore++;
    playStarAnimation();
    new Audio("sound/ding.wav").play();
  } else {
    new Audio("sound/error.wav").play();
  }
  currentOlimp++;
  if (currentOlimp < olimpData.length) {
    showOlimpQuestion();
  } else {
    document.getElementById("olimpContent").innerHTML = `
      <h3>🎉 Well done! You finished the Olympiad!</h3>
      <p>Your score: ${olimpScore} / ${olimpData.length}</p>
    `;
  }
}

// ------------------------------
// Анимация звезды ⭐
// ------------------------------
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
// Кнопки навигации
// ------------------------------
document.body.insertAdjacentHTML(
  "beforeend",
  `
  <div id='olimp' class='screen section'>
    <h2>🏅 Grammar Olympiad — A2</h2>
    <div id='olimpContent'></div>
    <div class='nav-buttons'>
      <button id='oBack'>Back</button>
      <button id='oNext'>Next</button>
    </div>
  </div>`
);

document.getElementById("oBack").addEventListener("click", () => {
  currentOlimp = Math.max(0, currentOlimp - 1);
  showOlimpQuestion();
});

document.getElementById("oNext").addEventListener("click", () => {
  currentOlimp = Math.min(olimpData.length - 1, currentOlimp + 1);
  showOlimpQuestion();
});

// ------------------------------
// Запуск раздела
// ------------------------------
document.querySelectorAll("#menu button[data-target]").forEach(btn => {
  if (btn.dataset.target === "olimp") {
    btn.addEventListener("click", () => {
      currentOlimp = 0;
      olimpScore = 0;
      show("olimp");
      showOlimpQuestion();
    });
  }
});
