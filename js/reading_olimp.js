// ------------------------------
// 📖 AI Bayan Reading Olympiad — A2
// Дарын-стиль: Полные ответы, звуки, звёздная анимация и навигация
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

  // 🎯 Проверка ответов
  function checkAnswer(button, correctIndex, chosenIndex) {
    if (chosenIndex === correctIndex) {
      button.style.backgroundColor = "#9df59d";
      button.innerHTML += " ✅";
      totalScore++;
      showStar();
    } else {
      button.style.backgroundColor = "#f5a1a1";
      button.innerHTML += " ❌";
    }
  }

  // 📖 Отображение текущего текста
  function showReading() {
    const r = readingData[currentReading];
    let html = `<h3>${r.title}</h3><p>${r.text}</p>`;
    html += `<div class='progress'>Score: ${totalScore}</div>`;

    r.questions.forEach((q, i) => {
      html += `<div class='question-block'><p><b>${i + 1}. ${q.q}</b></p>`;
      q.options.forEach((opt, j) => {
        html += `<button class='optBtn' data-q='${i}' data-opt='${j}'>${opt}</button>`;
      });
      html += "</div><hr>";
    });

    readingContent.innerHTML = html;
    const buttons = document.querySelectorAll(".optBtn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const qi = parseInt(btn.dataset.q);
        const oi = parseInt(btn.dataset.opt);
        const correct = readingData[currentReading].questions[qi].a;
        checkAnswer(btn, correct, oi);
      });
    });

    // 🔄 плавное появление
    readingContent.style.animation = "none";
    setTimeout(() => { readingContent.style.animation = ""; }, 50);
  }

  // 🧭 Кнопки навигации
  const navDiv = document.createElement("div");
  navDiv.className = "nav-buttons";
  navDiv.innerHTML = `
    <button id="rPrev">⬅️ Previous</button>
    <button id="rNext">➡️ Next</button>
  `;

  const menuDiv = document.createElement("div");
  menuDiv.className = "menu-return";
  menuDiv.innerHTML = `<button id="rMenu" onclick="show('menu')">🏠 Back to Menu</button>`;

  readingContent.after(navDiv);
  readingContent.after(menuDiv);

  // Навигация
  document.getElementById("rPrev")?.addEventListener("click", () => {
    if (currentReading > 0) {
      currentReading--;
      showReading();
    }
  });

  document.getElementById("rNext")?.addEventListener("click", () => {
    if (currentReading < readingData.length - 1) {
      currentReading++;
      showReading();
    } else {
      readingContent.innerHTML = `<h3>🎉 Great job!</h3><p>You finished the Reading Olympiad!</p><p>Your total score: ${totalScore}</p>`;
    }
  });

  // 🚀 Запуск
  showReading();
});


    

   
