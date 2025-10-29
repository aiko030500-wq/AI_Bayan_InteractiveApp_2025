// ------------------------------
// 📖 AI Bayan Reading Olympiad — Level A2 (Darын Style + Score per Text)
// ------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const readingData = [
    {
      title: "1. A Day in London",
      text: "Anna is spending her holiday in London. Every morning she takes the underground to visit famous places like the Tower of London and the British Museum. She loves walking in Hyde Park and eating fish and chips for lunch.",
      questions: [
        { q: "Where is Anna spending her holiday?", options: ["In Rome", "In London", "In Paris"], a: "b" },
        { q: "What transport does she use?", options: ["By car", "By underground", "By bus"], a: "b" },
        { q: "Where does Anna like to walk?", options: ["In Hyde Park", "At the museum", "At the tower"], a: "a" },
        { q: "What does she eat for lunch?", options: ["Pizza", "Fish and chips", "Burger"], a: "b" },
        { q: "What is Anna doing in London?", options: ["Working", "Studying", "Travelling"], a: "c" },
      ],
    },
    {
      title: "2. My Friend Tom",
      text: "Tom is 13 years old and lives in Astana. He goes to school by bike every day. He likes playing football with his friends after school. On weekends, he helps his parents in the garden.",
      questions: [
        { q: "How old is Tom?", options: ["12", "13", "14"], a: "b" },
        { q: "Where does Tom live?", options: ["In London", "In Astana", "In Almaty"], a: "b" },
        { q: "How does he go to school?", options: ["By bus", "By bike", "On foot"], a: "b" },
        { q: "What does Tom do after school?", options: ["Plays football", "Studies", "Reads"], a: "a" },
        { q: "What does he do on weekends?", options: ["Helps parents", "Goes swimming", "Travels"], a: "a" },
      ],
    },
    {
      title: "3. The School Trip",
      text: "Last Friday, our class visited the zoo. We saw lions, tigers, and elephants. It was very exciting! After the visit, we had lunch and played games in the park.",
      questions: [
        { q: "Where did the class go?", options: ["To the park", "To the zoo", "To the cinema"], a: "b" },
        { q: "What animals did they see?", options: ["Dogs", "Lions and tigers", "Horses"], a: "b" },
        { q: "How did they feel?", options: ["Bored", "Tired", "Excited"], a: "c" },
        { q: "What did they do after the visit?", options: ["Went home", "Had lunch", "Watched a film"], a: "b" },
        { q: "Where did they play games?", options: ["In the park", "In the zoo", "In the school"], a: "a" },
      ],
    },
    // … (остальные 7 текстов — можешь оставить как раньше)
  ];

  let currentReading = 0;
  let totalScore = 0;
  const readingContent = document.getElementById("readingContent");

  function showReading() {
    const t = readingData[currentReading];
    readingContent.innerHTML = `
      <h3>${t.title}</h3>
      <p>${t.text}</p>
      ${t.questions
        .map(
          (q, i) => `
        <p><b>${q.q}</b></p>
        ${q.options
          .map(
            (opt, j) =>
              `<button class='optBtn' data-q='${i}' data-opt='${String.fromCharCode(97 + j)}'>${opt}</button>`
          )
          .join("<br>")}
        <hr>
      `
        )
        .join("")}
    `;

    document.querySelectorAll(".optBtn").forEach((btn) => {
      btn.onclick = () => checkReading(btn.dataset.q, btn.dataset.opt);
    });
  }

  let answers = [];

  function checkReading(qIndex, choice) {
    answers[qIndex] = choice;

    // Проверим, ответил ли пользователь на все 5 вопросов
    if (answers.filter(Boolean).length === readingData[currentReading].questions.length) {
      let correctCount = 0;
      readingData[currentReading].questions.forEach((q, i) => {
        if (answers[i] === q.a) correctCount++;
      });

      totalScore += correctCount;

      // Показать мини-результат
      readingContent.innerHTML = `
        <h3>${readingData[currentReading].title}</h3>
        <p>✅ You got <b>${correctCount}/5</b> correct for this text.</p>
        <button id='nextText'>➡️ Next Text</button>
      `;
      document.getElementById("nextText").onclick = () => {
        currentReading++;
        answers = [];
        if (currentReading < readingData.length) showReading();
        else showFinalScore();
      };
    }
  }

  function showFinalScore() {
    readingContent.innerHTML = `
      <h3>🎉 Olympiad Finished!</h3>
      <p>Your total score: <b>${totalScore} / ${readingData.length * 5}</b></p>
      <button id='rMenu2'>🏠 Back to Menu</button>
    `;
    document.getElementById("rMenu2").onclick = () => show("menu");
  }

  document.getElementById("rMenu").addEventListener("click", () => show("menu"));
  document.getElementById("rNext").addEventListener("click", () => {
    currentReading = Math.min(currentReading + 1, readingData.length - 1);
    answers = [];
    showReading();
  });
  document.getElementById("rPrev").addEventListener("click", () => {
    currentReading = Math.max(currentReading - 1, 0);
    answers = [];
    showReading();
  });

  showReading();
});
