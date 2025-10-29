// ------------------------------
// AI Bayan Reading Trainer 2025 — Level A2 (Olympiad Edition)
// ------------------------------

let currentReading = 0;
let currentScore = 0;

// ==============================
// 12 texts × 5 multiple-choice questions
// ==============================
const readingData = [
  {
    title: "1. A Day in London",
    text: "Anna is spending her holiday in London. Every morning, she takes the underground to visit famous places like the Tower of London and the British Museum. She loves walking in Hyde Park and eating fish and chips. In the evening, she watches the lights of the city from the London Eye. It’s her first time abroad, and she finds the city both busy and beautiful.",
    questions: [
      { q: "Where is Anna spending her holiday?", options: ["Paris", "London", "Rome"], a: 1 },
      { q: "How does she travel around the city?", options: ["By bus", "By underground", "By taxi"], a: 1 },
      { q: "What food does she like?", options: ["Sushi", "Fish and chips", "Pizza"], a: 1 },
      { q: "Where does she go in the evening?", options: ["Big Ben", "London Eye", "Hyde Park"], a: 1 },
      { q: "Is it her first trip abroad?", options: ["Yes", "No", "Not mentioned"], a: 0 }
    ]
  },
  {
    title: "2. My Best Friend",
    text: "My best friend is Tom. He is 14 years old and studies in the same class as me. He always helps others and is very good at football. Every weekend we play in the park, and sometimes we watch movies together. He is honest, friendly, and I can always trust him.",
    questions: [
      { q: "How old is Tom?", options: ["12", "13", "14"], a: 2 },
      { q: "What sport does Tom play well?", options: ["Basketball", "Football", "Tennis"], a: 1 },
      { q: "Where do they play every weekend?", options: ["At school", "In the park", "In the yard"], a: 1 },
      { q: "What do they sometimes do together?", options: ["Cook", "Watch movies", "Study"], a: 1 },
      { q: "What kind of person is Tom?", options: ["Lazy", "Selfish", "Honest"], a: 2 }
    ]
  },
  {
    title: "3. My School Day",
    text: "I usually wake up at seven o’clock and go to school at eight. My favorite subject is English because I love learning new words. At lunchtime, I eat with my friends in the school canteen. After school, I do my homework and play computer games. In the evening, I read books or watch TV.",
    questions: [
      { q: "What time does the writer wake up?", options: ["6", "7", "8"], a: 1 },
      { q: "What is the writer’s favorite subject?", options: ["Math", "English", "Art"], a: 1 },
      { q: "Where does the writer eat lunch?", options: ["At home", "In the canteen", "At a café"], a: 1 },
      { q: "What does the writer do after school?", options: ["Plays football", "Does homework", "Watches movies"], a: 1 },
      { q: "What does the writer do in the evening?", options: ["Reads or watches TV", "Plays games", "Visits friends"], a: 0 }
    ]
  },
  {
    title: "4. A Trip to the Mountains",
    text: "Last weekend, my family went to the mountains. The air was fresh, and the view was beautiful. We climbed a small hill, took many photos, and had a picnic. My little sister found colorful flowers and butterflies. It was a perfect day full of nature and joy.",
    questions: [
      { q: "Where did the family go?", options: ["To the sea", "To the mountains", "To the park"], a: 1 },
      { q: "What did they do there?", options: ["Swam", "Climbed", "Slept"], a: 1 },
      { q: "Who found flowers?", options: ["Mother", "Brother", "Sister"], a: 2 },
      { q: "What did they have for lunch?", options: ["A picnic", "Fast food", "Dinner"], a: 0 },
      { q: "How was the weather?", options: ["Rainy", "Cold", "Fresh"], a: 2 }
    ]
  },
  {
    title: "5. My Favorite Hobby",
    text: "My favorite hobby is drawing. I started drawing when I was five. I love using colors to make animals and nature. Every evening, I spend one hour drawing in my sketchbook. My parents always support me and say that I’m talented.",
    questions: [
      { q: "What is the writer’s hobby?", options: ["Drawing", "Dancing", "Singing"], a: 0 },
      { q: "When did the writer start drawing?", options: ["At 5", "At 7", "At 10"], a: 0 },
      { q: "What does the writer like to draw?", options: ["People", "Animals and nature", "Cars"], a: 1 },
      { q: "How often does the writer draw?", options: ["Every day", "Every evening", "Every weekend"], a: 1 },
      { q: "What do the writer’s parents say?", options: ["You are lazy", "You are talented", "You need to study"], a: 1 }
    ]
  }
];

// ------------------------------
// Display function
// ------------------------------
function showReadingText() {
  const data = readingData[currentReading];
  const readingContent = document.getElementById("readingContent");
  let html = `<h3>${data.title}</h3><p>${data.text}</p><ol>`;
  data.questions.forEach((item, i) => {
    html += `<li>${item.q}<br>${item.options.map((opt, j) => 
      `<button class='rOpt' data-i='${i}' data-a='${j}'>${opt}</button>`
    ).join(" ")}</li>`;
  });
  html += "</ol><p><b>Score:</b> " + currentScore + "</p>";
  readingContent.innerHTML = html;

  document.querySelectorAll(".rOpt").forEach(btn => {
    btn.onclick = () => checkReadingAnswer(btn.dataset.i, btn.dataset.a);
  });
}

// ------------------------------
// Check answers
// ------------------------------
function checkReadingAnswer(i, a) {
  if (parseInt(a) === readingData[currentReading].questions[i].a) {
    currentScore++;
    new Audio("sound/ding.wav").play();
  } else {
    new Audio("sound/error.wav").play();
  }
  showReadingText();
}

// ------------------------------
// Navigation buttons
// ------------------------------
document.getElementById("rPrev").addEventListener("click", () => {
  currentReading--;
  if (currentReading < 0) currentReading = readingData.length - 1;
  showReadingText();
});

document.getElementById("rNext").addEventListener("click", () => {
  currentReading++;
  if (currentReading >= readingData.length) currentReading = 0;
  showReadingText();
});

document.getElementById("rMenu").addEventListener("click", () => {
  show("menu");
});

showReadingText();
