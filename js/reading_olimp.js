// ------------------------------
// 📖 AI Bayan Reading Olympiad — A2
// Дарын-стиль: Полные ответы, звуки, звёздная анимация и финальный результат
// ------------------------------
document.addEventListener("DOMContentLoaded", function () {

  let currentReading = 0;
  let totalScore = 0;

  const readingData = [
    {
      title: "1. A Day in London",
      text: "Anna is spending her holiday in London, one of the most exciting cities in the world. Every morning she takes the underground to visit famous places such as the Tower of London, the British Museum, and Buckingham Palace. She enjoys walking through Hyde Park, taking photos of squirrels, and watching people feeding birds near the lake. For lunch, she usually eats fish and chips at a small café. In the evening, she likes to go shopping or watch a musical at the theatre.",
      questions: [
        { q: "Where is Anna spending her holiday?", options: [
          "She is spending her holiday in Paris.",
          "She is spending her holiday in London.",
          "She is spending her holiday in Rome."
        ], a: 1 },
        { q: "What transport does she use to visit places?", options: [
          "She travels by bus every morning.",
          "She takes the underground to visit places.",
          "She walks to every famous place."
        ], a: 1 },
        { q: "What does Anna like doing in Hyde Park?", options: [
          "She likes feeding birds and taking photos.",
          "She likes jogging every morning.",
          "She likes playing football with friends."
        ], a: 0 },
        { q: "What does Anna usually eat for lunch?", options: [
          "She eats pizza at a restaurant.",
          "She eats fish and chips at a small café.",
          "She eats soup at home."
        ], a: 1 },
        { q: "What does she enjoy doing in the evening?", options: [
          "She stays at home and reads a book.",
          "She goes shopping or watches a musical.",
          "She studies for her exams."
        ], a: 1 }
      ]
    },

    {
      title: "2. A Visit to the Countryside",
      text: "Last weekend, Tom went to visit his grandparents in the countryside. Their house is near a big forest and a small river. In the morning, Tom helped his grandfather feed the chickens and collect eggs. Later, they went fishing and caught two small fish. In the afternoon, Tom and his grandmother made an apple pie and drank tea together. In the evening, he watched the stars in the clear sky. He loves the countryside because it’s quiet and beautiful.",
      questions: [
        { q: "Where did Tom go last weekend?", options: [
          "He went to the city to visit his friends.",
          "He went to the countryside to visit his grandparents.",
          "He stayed at home and watched TV."
        ], a: 1 },
        { q: "What did Tom help his grandfather do?", options: [
          "He helped to feed the chickens and collect eggs.",
          "He helped to clean the house.",
          "He helped to plant flowers."
        ], a: 0 },
        { q: "What did they do after feeding the animals?", options: [
          "They went fishing in the river.",
          "They went shopping in the town.",
          "They took a nap in the garden."
        ], a: 0 },
        { q: "What did Tom make with his grandmother?", options: [
          "They made an apple pie and drank tea.",
          "They cooked soup for dinner.",
          "They made cookies for the neighbors."
        ], a: 0 },
        { q: "Why does Tom love the countryside?", options: [
          "Because it is quiet and beautiful.",
          "Because it is full of shops and cars.",
          "Because all his friends live there."
        ], a: 0 }
      ]
    }
  ];

  const readingContent = document.getElementById("readingContent");

  // 🌟 Анимация звезды при правильном ответе
  function showStar() {
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

  function showReading() {
    const r = readingData[currentReading];
    readingContent.innerHTML = `
      <h3>${r.title}</h3>
      <p>${r.text}</p>
      ${r.questions.map((q, i) => `
        <div class="question-block">
          <p><b>${i + 1}. ${q.q}</b></p>
          <div class="options" id="q${i}">
            ${q.options.map((opt, j) => `
              <button class="optBtn" data-i="${i}" data-choice="${j}">${opt}</button>
            `).join("<br>")}
          </div>
        </div>
      `).join("<hr>")}
      <div id="progress" class="progress">Score: ${totalScore}</div>
    `;

    document.querySelectorAll(".optBtn").forEach(btn => {
      btn.onclick = () => checkAnswer(btn);
    });
  }

  function checkAnswer(btn) {
    const i = btn.dataset.i;
    const choice = parseInt(btn.dataset.choice);
    const correct = readingData[currentReading].questions[i].a;
    const buttons = btn.parentNode.querySelectorAll(".optBtn");

    // блокируем все кнопки для этого вопроса
    buttons.forEach(b => b.disabled = true);

    if (choice === correct) {
      btn.style.backgroundColor = "#b7f5b7";
      btn.innerHTML += " ✅";
      totalScore++;
      new Audio("sound/ding.wav").play();
      showStar();
    } else {
      btn.style.backgroundColor = "#f5b7b7";
      btn.innerHTML += " ❌";
      buttons[correct].style.border = "2px solid green";
    }

    document.getElementById("progress").innerHTML = `Score: ${totalScore}`;

    const answered = [...document.querySelectorAll(".optBtn")].filter(b => b.disabled).length;
    const totalBtns = readingData[currentReading].questions.length * 3;
    if (answered === totalBtns) {
      setTimeout(() => nextText(), 1200);
    }
  }

  function nextText() {
    currentReading++;
    if (currentReading < readingData.length) {
      showReading();
    } else {
      showFinal();
    }
  }

  function showFinal() {
    new Audio("sound/applause.wav").play();

    readingContent.innerHTML = `
      <div class="final-screen">
        <h3>🎉 Reading Olympiad Finished!</h3>
        <p class="fade-in">Your total score: <b>${totalScore} / ${readingData.length * 5}</b></p>
        <p class="fade-in delay">👏 Excellent work! You’re a real Olympiad star!</p>
        <button id='rMenu2' class='fade-in delay2'>🏠 Back to Menu</button>
      </div>
    `;

    // конфетти-анимация
    for (let i = 0; i < 20; i++) {
      const star = document.createElement("div");
      star.textContent = "⭐";
      Object.assign(star.style, {
        position: "fixed",
        left: `${Math.random() * 100}%`,
        top: "-10px",
        fontSize: `${20 + Math.random() * 20}px`,
        animation: `fall ${2 + Math.random() * 3}s linear forwards`,
        opacity: 0.8
      });
      document.body.appendChild(star);
      setTimeout(() => star.remove(), 4000);
    }

    document.getElementById("rMenu2").onclick = () => show("menu");
  }

  // кнопки навигации
  document.getElementById("rNext").addEventListener("click", () => {
    if (currentReading < readingData.length - 1) currentReading++;
    showReading();
  });

  document.getElementById("rPrev").addEventListener("click", () => {
    if (currentReading > 0) currentReading--;
    showReading();
  });

  document.getElementById("rMenu").addEventListener("click", () => show("menu"));

  showReading();
});

 
