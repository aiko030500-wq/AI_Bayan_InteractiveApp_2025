// ==============================
// 🤖 AI Bayan 2025 — Core Wiring (FIXED)
// Login + Screen Routing + Helpers
// ==============================

// 🎯 Access PINs
const STUDENT_PIN = "2361";
const TEACHER_PIN = "9996";

// ------------------------------
// 📱 Screen Switching
// ------------------------------
function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
}

// ------------------------------
// 🔐 Login System
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const nameInput = document.getElementById("nameInput");
  const pinInput = document.getElementById("pinInput");

  if (!loginBtn || !nameInput || !pinInput) {
    console.error("❌ Login elements not found in HTML");
    return;
  }

  loginBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const pin = pinInput.value.trim();

    if (!name || !pin) {
      alert("Please enter your name and PIN code.");
      return;
    }

    if (pin === STUDENT_PIN) {
      localStorage.setItem("studentName", name);
      show("menu");
      console.log("✅ Student login successful:", name);
    } else if (pin === TEACHER_PIN) {
      alert("Welcome, Teacher 👩🏻‍🏫");
      show("menu");
      console.log("✅ Teacher login successful");
    } else {
      alert("❌ Incorrect PIN. Try again.");
      console.warn("Entered wrong PIN:", pin);
    }
  });
});

// ------------------------------
// 🌟 Star Animation (global helper)
// ------------------------------
window.popStar = function (x = null, y = null) {
  const star = document.createElement("div");
  star.textContent = "⭐";
  Object.assign(star.style, {
    position: "fixed",
    left: x ? `${x}px` : `${Math.random() * 90 + 5}%`,
    top: y ? `${y}px` : `${Math.random() * 80 + 10}%`,
    fontSize: `${25 + Math.random() * 20}px`,
    animation: "flyStar 1s ease-out forwards",
    zIndex: 9999
  });
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1000);
};

// ------------------------------
// 🧭 Menu Navigation
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#menu button[data-target]").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      show(target);
    });
  });
});
