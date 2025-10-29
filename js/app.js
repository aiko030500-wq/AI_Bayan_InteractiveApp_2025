// =====================================================
// 🤖 AI Bayan Interactive App 2025
// Login + Menu + Grammar Trainer + Olympiads wiring
// =====================================================

// ------------------------------
// 🔑 Login System
// ------------------------------
const STUDENT_PIN = "2361";
const TEACHER_PIN = "9996";

function show(screenId) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  const target = document.getElementById(screenId);
  if (target) target.classList.add("active");
}

document.getElementById("loginBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();
  const pin = document.getElementById("pinInput").value.trim();
  if (!name || !pin) { alert("Please enter your name and PIN code."); return; }
  if (pin === STUDENT_PIN) { localStorage.setItem("studentName", name); show("menu"); }
  else if (pin === TEACHER_PIN) { show("teacher"); }
  else { alert("❌ Wrong PIN. Try again."); }
});

// ------------------------------
// 📘 Simple Grammar Trainer (kept)
// ------------------------------
const grammarData = [
  { topic: "Present Simple", questions:[
    { q:"She ____ to school every day.", a:"b", options:["go","goes","going"] },
    { q:"They ____ football after school.", a:"a", options:["play","plays","playing"] },
    { q:"He ____ TV every evening.", a:"b", options:["watch","watches","watching"] },
    { q:"I ____ in Astana.", a:"a", options:["live","lives","living"] },
    { q:"My brother ____ a bike.", a:"a", options:["has","have","having"] },
  ]},
  { topic: "Past Simple", questions:[
    { q:"I ____ to school yesterday.", a:"b", options:["go","went","gone"] },
    { q:"We ____ our homework last night.", a:"a", options:["did","do","done"] },
    { q:"They ____ football last weekend.", a:"b", options:["play","played","plays"] },
    { q:"She ____ a new dress yesterday.", a:"b", options:["buys","bought","buy"] },
    { q:"He ____ TV after dinner.", a:"a", options:["watched","watches","watch"] },
  ]},
];

let currentTopic = 0, currentQuestion = 0, score = 0;
const grammarContent = document.getElementById("grammarContent");
const gTopicNo = document.getElementById("gTopicNo");

function showQuestion() {
  const topic = grammarData[currentTopic];
  const q = topic.questions[currentQuestion];
  gTopicNo.textContent = currentTopic + 1;
  grammarContent.innerHTML = `
    <h3>${topic.topic}</h3>
    <p>${q.q}</p>
    ${q.options.map((opt,i)=>(
      `<button class='optBtn' data-opt='${String.fromCharCode(97+i)}'>${opt}</button>`
    )).join("<br>")}
  `;
  document.querySelectorAll(".optBtn").forEach(btn=>{
    btn.onclick = ()=> checkAnswer(btn.dataset.opt);
  });
}

function checkAnswer(choice){
  const correct = grammarData[currentTopic].questions[currentQuestion].a;
  if (choice === correct) { score++; playStar(); try{ new Audio("sound/ding.wav").play(); }catch(e){} }
  currentQuestion++;
  if (currentQuestion < grammarData[currentTopic].questions.length) {
    showQuestion();
  } else {
    currentTopic++; currentQuestion = 0;
    if (currentTopic < grammarData.length) showQuestion();
    else grammarContent.innerHTML = `<h3>🎉 Well done!</h3><p>Your score: ${score}</p>`;
  }
}

function playStar(){
  const star = document.createElement("div");
  star.textContent = "⭐";
  Object.assign(star.style,{position:"absolute",left:"50%",top:"50%",fontSize:"40px",animation:"fly 1s ease-out"});
  document.body.appendChild(star);
  setTimeout(()=>star.remove(),1000);
}

// ------------------------------
// 🧭 Menu routing (includes Olympiads)
// ------------------------------
document.querySelectorAll("#menu button[data-target]").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const target = btn.getAttribute("data-target");
    if (target === "olimp") {
      window.currentOlimp = 0; window.olimpScore = 0;
      show("olimp"); if (typeof showOlimpQuestion === "function") showOlimpQuestion();
    } else if (target === "listening") {
      window.currentListening = 0; window.listeningScore = 0;
      show("listening"); if (typeof showListening === "function") showListening();
    } else {
      show(target);
    }
  });
});

// start trainer
showQuestion();
