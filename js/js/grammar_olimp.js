// ------------------------------
// 🏅 AI Bayan Grammar Olympiad — A2 Level (2025)
// ------------------------------

const olimpData = [
  { q: "She ___ to school every day.", a: "b", options: ["go", "goes", "going"] },
  { q: "They ___ football after school.", a: "a", options: ["play", "plays", "playing"] },
  { q: "He ___ TV every evening.", a: "b", options: ["watch", "watches", "watching"] },
  { q: "I ___ in Astana.", a: "a", options: ["live", "lives", "living"] },
  { q: "My brother ___ a bike.", a: "a", options: ["has", "have", "having"] },
  { q: "We ___ our homework together.", a: "b", options: ["do", "does", "doing"] },
  { q: "I ___ to music now.", a: "c", options: ["listen", "listening", "am listening"] },
  { q: "They ___ football at the moment.", a: "c", options: ["play", "playing", "are playing"] },
  { q: "He ___ TV right now.", a: "b", options: ["watches", "is watching", "watch"] },
  { q: "She ___ breakfast now.", a: "b", options: ["have", "is having", "having"] },
  { q: "I ___ to school yesterday.", a: "b", options: ["go", "went", "going"] },
  { q: "He ___ his homework last night.", a: "b", options: ["do", "did", "does"] },
  { q: "They ___ football yesterday.", a: "a", options: ["played", "plays", "play"] },
  { q: "We ___ TV in the evening.", a: "a", options: ["watched", "watching", "watches"] },
  { q: "I ___ breakfast at 8 a.m.", a: "a", options: ["had", "have", "having"] },
  { q: "They ___ to the park last Sunday.", a: "b", options: ["go", "went", "gone"] },
  { q: "Have you ever ___ to London?", a: "c", options: ["go", "went", "been"] },
  { q: "I have ___ my homework already.", a: "b", options: ["do", "did", "done"] },
  { q: "She has ___ her bag.", a: "a", options: ["forgotten", "forget", "forgetting"] },
  { q: "There are ___ apples on the table.", a: "b", options: ["much", "many", "a little"] },
  { q: "There is ___ milk in the fridge.", a: "c", options: ["many", "a few", "a little"] },
  { q: "I have ___ friends.", a: "a", options: ["a lot of", "few", "little"] },
  { q: "He has ___ time for games.", a: "c", options: ["many", "a lot", "little"] },
  { q: "We don’t have ___ water.", a: "c", options: ["many", "a lot of", "much"] },
  { q: "You ___ study hard for the test.", a: "b", options: ["can", "must", "may"] },
  { q: "I ___ swim when I was 5.", a: "a", options: ["could", "can", "must"] },
  { q: "She ___ help her mother yesterday.", a: "a", options: ["did", "does", "do"] },
  { q: "We ___ go to the park tomorrow.", a: "a", options: ["will", "are", "did"] },
  { q: "It ___ be sunny tomorrow.", a: "a", options: ["will", "is", "was"] },
  { q: "This is the ___ day ever!", a: "c", options: ["good", "better", "best"] },
];

let currentOlimp = 0;
let olimpScore = 0;

const olimpContent = document.getElementById("olimpContent");

function showOlimpQuestion() {
  const q = olimpData[currentOlimp];
  olimpContent.innerHTML = `
    <h3>Question ${currentOlimp + 1} of ${olimpData.length}</h3>
    <p>${q.q}</p>
    ${q.options
      .map(
        (opt, i) =>
          `<button class='optBtn' data-opt='${String.fromCharCode(97 + i)}'>${opt}</button>`
      )
      .join("<br>")}
  `;
  document.querySelectorAll(".optBtn").forEach((btn) => {
    btn.onclick = () => checkOlimpAnswer(btn.dataset.opt);
  });
}

function checkOlimpAnswer(choice) {
  const correct = olimpData[currentOlimp].a;
  if (choice === correct) {
    olimpScore++;
    playStarAnimation();
    new Audio("sound/ding.wav").play();
  }
  currentOlimp++;
  if (currentOlimp < olimpData.length) {
    showOlimpQuestion();
  } else {
    olimpContent.innerHTML = `
      <h3>🎉 Great Job!</h3>
      <p>You finished all ${olimpData.length} questions.<br>
      Final Score: <b>${olimpScore} / ${olimpData.length}</b></p>
      <button id='oMenu2'>🏠 Back to Menu</button>
    `;
    document.getElementById("oMenu2").onclick = () => show("menu");
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

document.getElementById("oNext").addEventListener("click", () => {
  currentOlimp++;
  if (currentOlimp >= olimpData.length) currentOlimp = olimpData.length - 1;
  showOlimpQuestion();
});

document.getElementById("oBack").addEventListener("click", () => {
  currentOlimp--;
  if (currentOlimp < 0) currentOlimp = 0;
  showOlimpQuestion();
});

document.getElementById("oMenu").addEventListener("click", () => {
  show("menu");
});

showOlimpQuestion();
