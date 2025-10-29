// ==============================
// 🤖 AI Bayan — English Teacher Chat
// Дружелюбный текстовый помощник без голоса
// =============================

document.addEventListener("DOMContentLoaded", () => {
  const aiBtn = document.getElementById("aiBayanBtn");
  aiBtn.addEventListener("click", () => {
    alert("👩🏻‍🏫 Hello! AI Bayan is here to help you!");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chatBox");
  const chatInput = document.getElementById("chatInput");
  const sendBtn = document.getElementById("sendBtn");
  const clearBtn = document.getElementById("clearChat");

  function appendMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = sender === "ai" ? "msg ai" : "msg user";
    msg.innerHTML = `<b>${sender === "ai" ? "AI Bayan 👩🏻‍🏫" : "You"}:</b> ${text}`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // 🌸 Приветственное сообщение
  appendMessage("ai", "Hello! I'm <b>AI Bayan</b> — your English teacher and study buddy! 💬 Ask me about grammar, vocabulary, reading, or your Olympiad practice!");

  // ✨ Обработка сообщений
  sendBtn.addEventListener("click", () => {
    const text = chatInput.value.trim();
    if (text === "") return;
    appendMessage("user", text);
    chatInput.value = "";
    generateResponse(text);
  });

  chatInput.addEventListener("keydown", e => {
    if (e.key === "Enter") sendBtn.click();
  });

  clearBtn.addEventListener("click", () => {
    chatBox.innerHTML = "";
    appendMessage("ai", "Chat cleared! Let's continue learning together 💛");
  });

  // ==========================
  // 🧠 Основная логика ответов
  // ==========================
  function generateResponse(input) {
    const text = input.toLowerCase();
    let reply = "";

    // 👋 Приветствия
    if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
      reply = "Hello there! How are you today? 😊";
    }

    // 📘 Грамматика
    else if (text.includes("grammar") || text.includes("tense")) {
      reply = "Grammar helps you build correct sentences. Which topic would you like to review — tenses, articles, or question forms?";
    }

    // 📚 Словарный запас
    else if (text.includes("vocabulary") || text.includes("word")) {
      reply = "A good way to improve your vocabulary is to learn 5–10 new words daily and use them in sentences. Would you like me to give you a small vocabulary quiz?";
    }

    // ✍️ Irregular verbs
    else if (text.includes("irregular") || text.includes("verb")) {
      reply = "Irregular verbs don’t follow normal rules. For example: <b>go – went – gone</b>, <b>see – saw – seen</b>, <b>eat – ate – eaten</b>.";
    }

    // 🕒 Время, даты, дни недели
    else if (text.includes("time") || text.includes("clock")) {
      reply = "To tell the time, we say things like <b>It’s half past three</b> or <b>It’s quarter to nine</b>. Would you like a mini clock exercise?";
    } else if (text.includes("day") || text.includes("week")) {
      reply = "The days of the week are: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday 🌞";
    } else if (text.includes("month") || text.includes("date")) {
      reply = "Months of the year are: January, February, March, April, May, June, July, August, September, October, November, December 📅";
    }

    // 📖 Reading / Олимпиада
    else if (text.includes("reading") || text.includes("olympiad")) {
      reply = "Reading Olympiad tests your understanding of texts. Read carefully, underline key words, and don’t rush the answers. Would you like me to show you some A2-level reading tasks?";
    }

    // 💬 Фонетика
    else if (text.includes("phonetics") || text.includes("sound")) {
      reply = "Phonetics is about pronunciation and sounds! For example, the word <b>knight</b> has a silent 'k'. Would you like a short phonetics exercise?";
    }

    // 💡 Ошибка / исправление
    else if (text.startsWith("check:") || text.startsWith("correct:")) {
      const phrase = input.replace(/check:|correct:/gi, "").trim();
      reply = `Let's check your sentence: "${phrase}". ✏️ I’ll help correct it step by step — type it again, and I’ll explain the grammar.`;
    }

    // ❤️ Поддержка и мотивация
    else if (text.includes("thank")) {
      reply = "You’re very welcome! I’m proud of your progress 🌟";
    } else if (text.includes("tired") || text.includes("difficult")) {
      reply = "Don’t worry! Every great learner feels that sometimes. Take a deep breath — learning English step by step is success itself 💛";
    }

    // 🌈 Неопознанные запросы
    else {
      reply = "That's interesting! Could you tell me a bit more or ask about grammar, vocabulary, or reading?";
    }

    setTimeout(() => appendMessage("ai", reply), 600);
  }
});
