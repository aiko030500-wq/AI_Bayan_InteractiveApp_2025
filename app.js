// ==============================
// AI Bayan 2025 — Core wiring
// Login + screen routing + basic helpers
// ==============================

const STUDENT_PIN = "2361";
const TEACHER_PIN = "9996";

// simple show/hide
function show(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  const el = document.getElementById(id);
  if(el) el.classList.add("active");
}

// star helper (used by trainers)
window.popStar = function(x=null,y=null){
  const s = document.createElement("div");
  s.className = "star";
  s.textContent = "⭐";
  if(x!==null && y!==null){
    s.style.left = x+"px"; s.style.top = y+"px";
    s.style.transform = "translate(-50%,-50%)";
  }
  document.body.appendChild(s);
  setTimeout(()=>s.remove(), 950);
};

document.addEventListener("DOMContentLoaded", ()=>{
  // Login
  const loginBtn = document.getElementById("loginBtn");
  const nameInput = document.getElementById("nameInput");
  const pinInput  = document.getElementById("pinInput");
  if(loginBtn){
    loginBtn.addEventListener("click", ()=>{
      const name = (nameInput?.value||"").trim();
      const pin  = (pinInput?.value||"").trim();
      if(!name || !pin){ alert("Please enter your name and PIN."); return; }
      if(pin===STUDENT_PIN || pin===TEACHER_PIN){
        localStorage.setItem("studentName", name);
        show("menu");
      } else {
        alert("❌ Wrong PIN. Try again.");
      }
    });
  }

  // Menu routing
  document.querySelectorAll('#menu button[data-target]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const target = btn.getAttribute('data-target');
      show(target);
      // mount trainers if functions exist
      if(target==="irregulars" && typeof window.mountIrregulars==="function"){ window.mountIrregulars(); }
      if(target==="phonetics"  && typeof window.mountPhonetics ==="function"){ window.mountPhonetics(); }
    });
  });

  // General subtabs
  document.querySelectorAll('#general .subtab').forEach(tab=>{
    tab.addEventListener('click', ()=>{
      const target = tab.getAttribute('data-sub');
      document.querySelectorAll('#general .subtab').forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('#general .subscreen').forEach(s=>s.style.display='none');
      const pane = document.getElementById(target);
      if(pane) pane.style.display='';
    });
  });

  // Back to menu buttons
  document.querySelectorAll('.menu-return button, .back-menu').forEach(b=>{
    b.addEventListener('click', ()=> show('menu'));
  });
});
