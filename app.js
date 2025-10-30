// ==============================
// 🏅 AI Bayan Grammar Olympiad — A2 Level
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  const olimpContent = document.getElementById("olimpContent");
  const olimpScore = document.getElementById("olimpScore");
  const btnPrev = document.getElementById("oPrev");
  const btnNext = document.getElementById("oNext");

  if (!olimpContent) return; // safety check

  let current = 0;
  let score = 0;

  const olimpData = [
    {
      topic: "Present Simple",
      q: "She ___ to school every day.",
      options: ["go", "goes", "is going", "going"],
      a: 1
    },
    {
      topic: "Past Simple",
      q: "They ___ a movie yesterday.",
      options: ["watch", "watched", "watching", "watches"],
      a: 1
    },
    {
      topic: "Future Simple",
      q: "I think it ___ rain tomorrow.",
      options: ["is", "was", "will", "are"],
      a: 2
    },
    {
      topic: "Used to",
      q: "I ___ play football when I was a child.",
      options: ["use", "used to", "am used to", "was used to"],
      a: 1
    },
    {
      topic: "Comparatives",
      q: "Mount Everest is ___ mountain in the world.",
      options: ["the higher", "higher", "the highest", "high"],
      a: 2
    },
    {
      topic: "Prepositions",
      q: "The cat is ___ the table.",
      options: ["in", "on", "at", "to"],
      a: 1
    },
    {
      topic: "Gerunds",
      q: "She enjoys ___ books.",
      options: ["read", "to read", "reading", "reads"],
      a: 2
    },
    {
      topic: "Modal Verbs",
      q: "You ___ study harder for the exam.",
      options: ["can", "must", "may", "will"],
      a: 1
    },
    {
      topic: "Conditionals",
      q: "If it rains, we ___ stay at home.",
      options: ["will", "would", "are", "have"],
      a: 0
    },
    {
      topic: "Passive Voice",
      q: "The letter ___ yesterday.",
      options: ["is sent", "was sent", "sends", "will send"],
      a: 1
    },
    {
      topic: "Indirect Speech",
      q: "He said he ___ tired.",
      options: ["is", "was", "were", "will be"],
      a: 1
    },
    {
      topic: "Too / Enough",
      q: "It’s not warm ___ to swim.",
      options: ["too", "enough", "so", "very"],
      a: 1
    },
    {
      topic: "Articles",
      q: "I bought ___ apple and ___ banana.",
      options: ["a / a", "an / a", "the / the", "a / the"],
      a: 1
    },
    {
      topic: "Pronouns",
      q: "This is my book. That one is ___.",
      options: ["me", "mine", "my", "I"],
      a: 1
    },
    {
      topic: "Countable/Uncountable",
      q: "There isn’t ___ milk in the fridge.",
      options: ["some", "many", "any", "a few"],
      a: 2
    },
    {
      topic: "Word Order",
      q: "___ you like coffee?",
      options: ["Like do", "Do like", "Do you", "You do"],
      a: 2
    },
    {
      topic: "Phrasal Verbs",
      q: "Please ___ your shoes before entering.",
      options: ["take off", "take on", "put off", "get up"],
      a: 0
    },
    {
      topic: "Active Voice",
      q: "She ___ the cake herself.",
      options: ["was baked", "bake", "bakes", "is bake"],
      a: 2
    }
  ];

  function showOlimpQuestion() {
    const q = olimpData[current];
    olimpContent.innerHTML = `
      <h3>${current + 1}. ${q.topic}</h3>
      <p class="question">${q.q}</p>
      <div class="options">
        ${q.options
          .map(
            (opt, i) => `
            <button class="option" data-i="${i}">${opt}</button>`
          )
          .join("")}
      </div>
      <div class="progress">Question ${current + 1} of ${olimpData.length}</div>
    `;
    olimpScore.textContent = score;

    document.querySelectorAll(".option").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = parseInt(e.target.dataset.i);
        if (index === q.a) {
          score++;
          olimpScore.textContent = score;
          popStar();
        }
        setTimeout(() => {
          if (current < olimpData.length - 1) {
            current++;
            showOlimpQuestion();
          } else {
            showFinish();
          }
        }, 400);
      });
    });
  }

  function showFinish() {
    olimpContent.innerHTML = `
      <h2>🎉 Well done!</h2>
      <p>You finished the Grammar Olympiad.</p>
      <p>⭐ Your total score: <b>${score}</b> / ${olimpData.length}</p>
      <button onclick="show('menu')">🏠 Back to Menu</button>
    `;
  }

  btnNext.addEventListener("click", () => {
    if (current < olimpData.length - 1) {
      current++;
      showOlimpQuestion();
    }
  });

  btnPrev.addEventListener("click", () => {
    if (current > 0) {
      current--;
      showOlimpQuestion();
    }
  });

  // show first
  showOlimpQuestion();
});
