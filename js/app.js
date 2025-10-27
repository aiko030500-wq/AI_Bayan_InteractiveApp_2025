const STUDENT_PIN='2361';const TEACHER_PIN='9996';
const topics=Array.from({length:12},(_,i)=>'Topic '+(i+1));
let current=0;
function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');}
document.getElementById('loginBtn').onclick=()=>{
 let name=document.getElementById('nameInput').value.trim();
 let pin=document.getElementById('pinInput').value.trim();
 if(pin===STUDENT_PIN){show('menu');}
 else if(pin===TEACHER_PIN){show('teacher');}
 else alert('Access denied');
};
document.querySelectorAll('[data-target]').forEach(b=>b.onclick=()=>show(b.dataset.target));
const gContent=document.getElementById('grammarContent'),gNo=document.getElementById('gTopicNo');
function loadTopic(i){current=i;gNo.textContent=i+1;gContent.textContent='Exercise for '+topics[i];}
loadTopic(0);
document.getElementById('gBack').onclick=()=>{if(current>0)loadTopic(current-1);};
document.getElementById('gNext').onclick=()=>{if(current<topics.length-1)loadTopic(current+1);else show('menu');};
