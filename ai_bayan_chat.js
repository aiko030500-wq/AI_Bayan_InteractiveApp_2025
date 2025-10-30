document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('aiBayanBtn');
  const box = document.getElementById('chatBox');
  const close = document.getElementById('closeChat');
  const input = document.getElementById('chatInput');
  const send = document.getElementById('sendBtn');
  const msgs = document.getElementById('chatMessages');

  const say = (text, who='AI Bayan')=>{
    const p = document.createElement('div');
    p.innerHTML = `<b>${who}:</b> ${text}`;
    msgs.appendChild(p);
    msgs.scrollTop = msgs.scrollHeight;
  };

  btn.addEventListener('click', ()=>{
    box.classList.toggle('hidden');
    if(!box.classList.contains('hidden') && !msgs.dataset.greeted){
      say("Hello! I'm AI Bayan. Ask me about grammar, vocabulary, listening or reading tips ✨");
      msgs.dataset.greeted = '1';
    }
  });
  close.addEventListener('click', ()=> box.classList.add('hidden'));

  send.addEventListener('click', ()=>{
    const t = input.value.trim();
    if(!t) return;
    say(t, 'You');
    input.value='';
    // Простые подсказки:
    if(/grammar/i.test(t))       say("Tip: Use Present Simple for habits. E.g., 'She plays tennis on Sundays.'");
    else if(/vocab|word/i.test(t)) say("Try 'Add One Out' or 'Synonyms' in Vocabulary Olympiad!");
    else if(/listen/i.test(t))   say("For Listening A2: focus on keywords (place, time, action).");
    else if(/read/i.test(t))     say("Skim the text first, then read the questions.");
    else if(/irregular/i.test(t))say("Learn small groups: come–came–come, go–went–gone, see–saw–seen.");
    else if(/phonetic|sound/i.test(t)) say("Diphthong /eɪ/ as in 'train'; silent letters: 'k' in 'know'.");
    else                          say("Great! Keep practicing — you can do it 💛");
  });
});

