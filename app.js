// ==============================
// 🤖 AI Bayan 2025 — Core Wiring
// Login + Screen Routing + Helpers
// ==============================

// 🎯 Access PINs
const STUDENT_PIN = "2361";
const TEACHER_PIN = "9996";

// ------------------------------
// 📱 Screen Switching
// ------------------------------
function show(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
}

// ------------------------------
// 🔐 Login System
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  if (!loginBtn) return;

  loginBtn.addEventListener("click", () => {
    const name = document.getElementById("nameInput").value.trim();
    const pin = document.getElementById("pinInput").value.trim();

    if (!name || !pin) {
      alert("Please enter your name and PIN code.");
      return;
    }

    if (pin === STUDENT_PIN) {
      localStorage.setItem("studentName", name);
      show("menu");
      setTimeout(() => {
        alert(`Welcome, ${name}! 🌟 Let's learn English together!`);
      }, 300);
    } 
    else if (pin === TEACHER_PIN) {
      alert("Welcome, Teacher 👩🏻‍🏫");
      show("menu");
    } 
    else {
      alert("❌ Wrong PIN. Try again.");
    }
  });
});

// ------------------------------
// 🌟 Star Animation
// ------------------------------
window.popStar = function (x = null, y = null) {
  const star = document.createElement("div");
  star.textContent = "⭐";
  Object.assign(star.style, {
    position: "fixed",
    left: x ? `${x}px` : `${Math.random() * 90 + 5}%`,
    top: y ? `${y}px` : `${Math.random() * 80 + 10}%`,
    fontSize: `${30 + Math.random() * 20}px`,
    animation: "flyStar 1s ease-out forwards",
    zIndex: 9999,
  });
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1000);
};

// ------------------------------
// 🧭 Menu Navigation
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#menu button[data-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      show(target);

      // Auto-start modules
      if (target === "olimp" && typeof showOlimpQuestion === "function") showOlimpQuestion();
      if (target === "vocab" && typeof showVocab === "function") showVocab();
      if (target === "listening" && typeof showListening === "function") showListening();
      if (target === "reading" && typeof showReading === "function") showReading();
      if (target === "general" && typeof showGeneral === "function") showGeneral();
    });
  });
});

  

