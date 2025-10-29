// =====================================================
// 📖 AI Bayan Reading Olympiad — Level A2 (Darын-style)
// 5 texts × 4 questions | Animated | Scoring | Stars
// =====================================================
document.addEventListener("DOMContentLoaded", function () {

  let currentReading = 0;
  let totalScore = 0;

  const readingData = [
    // === 1. Spam Email Warning ===
    {
      title: "1. Spam Email Warning",
      text: "An American court has sent a strong warning to people who send spam emails. A man from Virginia sent millions of junk messages to Internet users. The judge said he must pay a $7,000 fine and go to prison for nine years. The court said that spam steals people’s time and uses their computers without permission.",
      questions: [
        { q: "Who sent millions of spam emails?", options: ["A man from Virginia", "A woman from California", "A group of students"], a: 0 },
        { q: "What must the man do?", options: ["Pay a fine and go to prison", "Work for the government", "Write a letter to the court"], a: 0 },
        { q: "How long will he stay in prison?", options: ["Five years", "Seven years", "Nine years"], a: 2 },
        { q: "What did the court say about spam?", options: ["It helps people", "It steals time and computer use", "It is safe for everyone"], a: 1 }
      ]
    },

    // === 2. Living in Trees (Korowai Tribe) ===
    {
      title: "2. Living in Trees (The Korowai Tribe)",
      text: "The Korowai tribe lives in the rainforests of Papua, Indonesia. They build wooden houses high in the trees to stay safe from wild animals and floods. Their homes can be twenty meters above the ground. The Korowai hunt, fish, and grow food near their villages. They live a simple life and rarely meet people from outside their tribe.",
      questions: [
        { q: "Where do the Korowai people live?", options: ["In large cities", "In the rainforests of Papua", "In the mountains of Japan"], a: 1 },
        { q: "Why do they build their houses in trees?", options: ["To watch the sunset", "To stay safe from animals and floods", "To see the village"], a: 1 },
        { q: "What do the Korowai people eat?", options: ["Only fruits", "Fast food", "Food they hunt, fish and grow"], a: 2 },
        { q: "Do they often meet people from outside their tribe?", options: ["Yes, very often", "No, rarely", "Every week"], a: 1 }
      ]
    },

    // === 3. Do What You Love ===
    {
      title: "3. Do What You Love",
      text: "Many people say that to be happy, you should do what you love. Anna is a young woman who loves painting. She works as an art teacher and spends her free time creating pictures. Her friends earn more money, but Anna says she feels rich because she enjoys her work and follows her dream.",
      questions: [
        { q: "What does Anna love doing?", options: ["Cooking", "Painting", "Singing"], a: 1 },
        { q: "What is Anna’s job?", options: ["A designer", "An art teacher", "A student"], a: 1 },
        { q: "Why does Anna feel rich?", options: ["Because she enjoys her work", "Because she travels a lot", "Because she buys expensive things"], a: 0 },
        { q: "What is the main idea of the text?", options: ["Work is difficult", "Money is everything", "Do what makes you happy"], a: 2 }
      ]
    },

    // === 4. Hi Ellie, I’m So... ===
    {
      title: "4. Hi Ellie, I’m So...",
      text: "Hi Ellie! I’m so excited to tell you about my new school. It’s bigger than my old one and has a lot of clubs. I joined the music club and the swimming team. My new friends are friendly and help me with homework. Next week we will have a sports day. I can’t wait to send you photos!",
      questions: [
        { q: "Who is writing the message?", options: ["Ellie", "The writer’s friend", "The writer"], a: 2 },
        { q: "What club did the writer join?", options: ["Art club", "Music club", "Reading club"], a: 1 },
        { q: "What will happen next week?", options: ["A school concert", "A sports day", "A swimming lesson"], a: 1 },
        { q: "How does the writer feel about the new school?", options: ["Excited and happy", "Bored", "Nervous"], a: 0 }
      ]
    },

    // === 5. Dear Sir/Madam, I Would Like... ===
    {
      title: "5. Dear Sir/Madam, I Would Like...",
      text: "Dear Sir/Madam, I would like to apply for a part-time job at your café. I am sixteen years old and study at Green High School. I am responsible, polite, and enjoy working with people. I can work after school and on weekends. Please find my CV attached. Thank you for your time. Yours faithfully, Emily Brown.",
      questions: [
        { q: "What is the purpose of this letter?", options: ["To order food", "To apply for a job", "To invite a friend"], a: 1 },
        { q: "Where does Emily want to work?", options: ["In a restaurant", "In a café", "In a school"], a: 1 },
        { q: "When can she work?", options: ["Only on weekdays", "Only at night", "After school and on weekends"], a: 2 },
        { q: "What personal quality does she mention?", options: ["She is lazy", "She is responsible", "She is shy"], a: 1 }
      ]
    }
  ];

  const readingContent = document.getElementById("readingContent");

  // 🌟 Анимация звёзд при правильных ответах
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

  // 🎯 Проверка ответа
  function checkAnswer(button, correctIndex, chosenIndex) {
    if (chosenIndex === correctIndex) {
      button.style.backgroundColor = "#aaf0a0";
      button.innerHTML += " ✅";
      totalScore++;
      showStar();
    } else {
      button.style.backgroundColor = "#f2a1a1";
      button.innerHTML += " ❌";
    }
  }

  // 📖 Показ текста и вопросов
  function showReading() {
    const r = readingData[currentReading];
    let html = `<h3>${r.title}</h3><p>${r.text}</p><div class='progress'>Score: ${totalScore}</div>`;

    r.questions.forEach((q, i) => {
      html += `<div class='question-block'><p><b>${i + 1}. ${q.q}</b></p>`;
      q.options.forEach((opt, j) => {
        html += `<button class='optBtn' data-q='${i}' data-opt='${j}'>${opt}</button>`;
      });
      html += "</div><hr>";
    });

    readingContent.innerHTML = html;

    document.querySelectorAll(".optBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        const qi = parseInt(btn.dataset.q);
        const oi = parseInt(btn.dataset.opt);
        const correct = readingData[currentReading].questions[qi].a;
        checkAnswer(btn, correct, oi);
      });
    });

    readingContent.style.animation = "none";
    setTimeout(() => { readingContent.style.animation = ""; }, 50);
  }

  // 🧭 Навигация
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
      readingContent.innerHTML = `<h3>🎉 Great job!</h3><p>You finished the Reading Olympiad!</p><p>Your total score: ${totalScore} / ${readingData.length * 4}</p>`;
    }
  });

  // 🚀 Запуск
  showReading();
});
