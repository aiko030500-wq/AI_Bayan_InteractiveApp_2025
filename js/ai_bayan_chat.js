document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("aiBayanBtn");
  const box = document.getElementById("chatBox");
  const closeBtn = document.getElementById("closeChat");
  const messages = document.getElementById("chatMessages");
  const input = document.getElementById("chatInput");
  const send = document.getElementById("sendBtn");

  const say = (who, text) => {
    const row = document.createElement("div");
    row.style.margin = "6px 0";
    row.innerHTML = `<b>${who}:</b> ${text}`;
    messages.appendChild(row);
    messages.scrollTop = messages.scrollHeight;
  };

  btn.addEventListener("click", () => {
    box.classList.remove("hidden");
    if (!messages.dataset.greeted) {
      say("AI Bayan", "Hello! I’m your friendly English teacher. Ask me about grammar, phonics, vocabulary — I’ll explain simply 😊");
      messages.dataset.greeted = "1";
    }
  });

  closeBtn.addEventListener("click", () => box.classList.add("hidden"));
  send.addEventListener("click", sendMsg);
  input.addEventListener("keydown", e => (e.key === "Enter") && sendMsg());

  function sendMsg() {
    const text = (input.value || "").trim();
    if (!text) return;
    say("You", text);
    input.value = "";

    // Very small rule-based help
    const t = text.toLowerCase();
    if (t.includes("present simple")) {
      say("AI Bayan", "Present Simple = subject + V1 (add -s/-es for he/she/it). E.g., “She plays.” Use for habits and facts.");
    } else if (t.includes("past simple")) {
      say("AI Bayan", "Past Simple = subject + V2 (regular: -ed, irregular: 2nd form). E.g., “They went.” Use for finished actions in the past.");
    } else if (t.includes("phonics") || t.includes("vowel") || t.includes("sound")) {
      say("AI Bayan", "Phonics tip: vowel team ‘ea’ can be /iː/ in “tea” or /e/ in “bread”. Try reading minimal pairs aloud.");
    } else if (t.includes("irregular")) {
      say("AI Bayan", "Irregular verbs: learn by small groups with similar patterns (e.g., come–came–come; run–ran–run).");
    } else {
      say("AI Bayan", "Great question! Let me give a simple rule or example:\n— Try to build a short sentence and I’ll correct it for you.");
    }
  }
});
