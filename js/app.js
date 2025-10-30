
// ====== ROUTER ======
function show(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ⭐ simple star
function popStar(){
  const s = document.createElement('div');
  s.className='star';
  s.textContent='⭐';
  document.body.appendChild(s);
  setTimeout(()=>s.remove(), 950);
}

// ====== LOGIN ======
const STUDENT_PIN = "2361";  // ты просила оставить этот код
document.getElementById('loginBtn').addEventListener('click', ()=>{
  const name = document.getElementById('nameInput').value.trim();
  const pin  = document.getElementById('pinInput').value.trim();
  if(!name || !pin){ alert('Enter your name and PIN'); return; }
  if(pin===STUDENT_PIN){
    localStorage.setItem('studentName', name);
    show('menu');
  } else {
    alert('Wrong PIN');
  }
});

// ====== MENU BUTTONS ======
document.querySelectorAll('#menu .menu-grid .btn').forEach(b=>{
  b.addEventListener('click', ()=>{
    show(b.getAttribute('data-target'));
    // Авто-инициализация экранов при входе
    if(window.showOlimpQuestion)      showOlimpQuestion(true);
    if(window.showVocabQuestion)      showVocabQuestion(true);
    if(window.showListeningQuestion)  showListeningQuestion(true);
    if(window.showReading)            showReading(true);
    if(window.mountIrregularsTrainer) mountIrregularsTrainer(true);
    if(window.mountPhoneticsTrainer)  mountPhoneticsTrainer(true);
  });
});

// ====== SUBTABS (GENERAL) ======
document.querySelectorAll('.subtab').forEach(t=>{
  t.addEventListener('click', ()=>{
    document.querySelectorAll('.subtab').forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    const sub = t.getAttribute('data-sub');
    document.querySelectorAll('.subscreen').forEach(s=>s.classList.remove('active'));
    document.getElementById(sub).classList.add('active');

    if(sub==='irregulars' && window.mountIrregularsTrainer) mountIrregularsTrainer();
    if(sub==='phonetics'  && window.mountPhoneticsTrainer)  mountPhoneticsTrainer();
  });
});
