// ---------------------------------------
// AI Bayan Reading Trainer 2025 (A2 level)
// 12 topics × (12–15) sentences + 5 True/False
// Stars + sound + Teacher Journal
// ---------------------------------------

// 1) Создаём экран, если его нет в index.html
(function ensureReadingScreen() {
  if (!document.getElementById('reading')) {
    const el = document.createElement('div');
    el.id = 'reading';
    el.className = 'screen section';
    el.innerHTML = `
      <h2>Reading — Topic <span id="rTopicNo">1</span></h2>
      <div id="readingContent"></div>
      <div class="nav-buttons">
        <button id="rBack">Back</button>
        <button id="rNext">Next</button>
      </div>
    `;
    document.body.appendChild(el);
  }
})();

// 2) Данные: 12 текстов (A2), по 5 True/False
// Формат: { topic, text, questions: [{s, a}] } — a: true/false
const readingData = [
  {
    topic: "My Family",
    text: "My name is Aida and I live in a small town near the sea. I have a big and friendly family. My father is a doctor who works at the local clinic. My mother is a teacher who loves reading books in the evening. I also have a younger brother named Timur; he is ten and very energetic. Every evening we do our homework together at the kitchen table. On weekends, we visit our grandparents who live in the countryside. My grandmother cooks delicious pies and my grandfather tells funny stories from his youth. We play board games and laugh a lot. Our cat, Snow, always sleeps on the sofa near us. I think family time is the most valuable time of the week.",
    questions: [
      { s: "Aida lives in a big city far from the sea.", a: false },
      { s: "Her mother enjoys reading books in the evening.", a: true },
      { s: "Timur is Aida’s older brother.", a: false },
      { s: "They often visit grandparents on weekends.", a: true },
      { s: "Their cat is called Snow.", a: true }
    ]
  },
  {
    topic: "My School",
    text: "I study at School Number Six, which is close to my home. The building is modern and full of light, with large windows and colorful posters on the walls. My favorite place is the library because it is quiet and filled with interesting books. Our English classroom has a projector and a whiteboard, so lessons are interactive. My English teacher encourages us to speak, ask questions, and share ideas. We often work in pairs and do projects about culture, music, and science. At break time I chat with my friends in the corridor. After school, I sometimes join the reading club. School makes me feel confident and motivated to learn.",
    questions: [
      { s: "The library is noisy and crowded.", a: false },
      { s: "The English classroom has a projector.", a: true },
      { s: "Students never work in pairs.", a: false },
      { s: "The speaker enjoys reading club after school.", a: true },
      { s: "There are colorful posters on the school walls.", a: true }
    ]
  },
  {
    topic: "My House",
    text: "Our house is small but comfortable. The living room is bright and has a soft blue sofa, a neat carpet, and a bookshelf. In the evenings, my family gathers there to talk, read, or watch a movie. The kitchen smells like fresh bread on weekends when my mother bakes. My bedroom is my favorite place; there is a desk near the window where I do homework and draw pictures. On the wall I keep a calendar and a few photos. We also have a balcony with plants; in summer we water flowers and watch the sunset together. Although our home is simple, it feels warm and welcoming.",
    questions: [
      { s: "The living room has a blue sofa.", a: true },
      { s: "They never watch movies together in the evening.", a: false },
      { s: "There is a desk near the window in the bedroom.", a: true },
      { s: "They keep plants on the balcony.", a: true },
      { s: "The house feels cold and unfriendly.", a: false }
    ]
  },
  {
    topic: "My Day",
    text: "On school days I wake up early and make my bed. After breakfast I check my schedule and pack my backpack. I like walking to school because the air is fresh in the morning. During lessons I try to listen carefully and take notes. At lunchtime I sit with my friends; we share stories and laugh. After school I have a short rest, then I do my homework at the desk. In the evening I help my mother with dinner and set the table. If I finish everything, I read a book or draw. Before sleep I plan the next day. This routine helps me feel organized and calm.",
    questions: [
      { s: "The speaker prefers to walk to school.", a: true },
      { s: "They never help with dinner at home.", a: false },
      { s: "Reading or drawing happens after homework is finished.", a: true },
      { s: "They plan the next day before sleep.", a: true },
      { s: "The routine makes the speaker feel stressed.", a: false }
    ]
  },
  {
    topic: "Animals",
    text: "Animals make our world more interesting and beautiful. In our area, we often see birds in the morning sky and cats walking in the yard. My friend has a friendly dog that loves running in the park. At school we learned about wild animals like wolves, foxes, and eagles. Our teacher explained that every animal has a role in nature. For example, bees help flowers and trees grow by carrying pollen. We should protect animals by keeping the environment clean and not disturbing their homes. When we visit the zoo, we read the information boards and speak quietly. Respect for animals shows that we are responsible people.",
    questions: [
      { s: "The dog in the story enjoys running in the park.", a: true },
      { s: "Bees are harmful to flowers and trees.", a: false },
      { s: "The class learned about wolves and eagles.", a: true },
      { s: "We should make a lot of noise at the zoo.", a: false },
      { s: "Respecting animals is a sign of responsibility.", a: true }
    ]
  },
  {
    topic: "Food and Drinks",
    text: "My family tries to eat healthy food every day. For breakfast we usually have porridge, eggs, or fruit with yogurt. At school I drink water and avoid too many sweets. For lunch we enjoy soup, rice, or pasta with vegetables. On weekends we sometimes bake homemade pizza with tomatoes and mushrooms. My mother says it is important to eat slowly and listen to your body. We also drink tea in the evening and talk about our day. When we go shopping, we read labels and choose fresh products. Eating well gives us energy and helps us stay active and happy.",
    questions: [
      { s: "They always eat pizza for breakfast.", a: false },
      { s: "The family sometimes bakes pizza at home.", a: true },
      { s: "They try to drink water at school.", a: true },
      { s: "They never read labels when shopping.", a: false },
      { s: "Healthy food gives them energy.", a: true }
    ]
  },
  {
    topic: "Clothes",
    text: "Clothes help us express our style and stay comfortable in different weather. At school I wear a uniform: a neat shirt, dark trousers, and clean shoes. In winter I put on a warm coat, a hat, and gloves. When it is sunny, I prefer a light jacket and a cap. For sports I wear a T-shirt, trainers, and comfortable pants. My grandmother taught me to fold clothes and keep them in order. I like simple colors and soft fabrics, because they feel good and look tidy. Choosing clothes carefully shows respect for ourselves and for the people around us.",
    questions: [
      { s: "The speaker wears a school uniform.", a: true },
      { s: "They wear a hat and gloves in winter.", a: true },
      { s: "A T-shirt and trainers are used for sports.", a: true },
      { s: "They prefer very bright and complicated clothes.", a: false },
      { s: "Keeping clothes in order was taught by the grandmother.", a: true }
    ]
  },
  {
    topic: "Weather and Seasons",
    text: "The weather changes the way we live and feel. In spring the air is fresh, trees get green, and birds return. Summer is sunny and warm, so we spend more time outside and go to the beach. Autumn brings colorful leaves and cool winds; it is a good time for reading and hot tea. Winter can be cold and snowy, but it is also beautiful and quiet. When the weather is rainy, I take an umbrella and wear boots. Before leaving home, I check the forecast to choose the right clothes. Understanding the seasons helps us plan our days wisely.",
    questions: [
      { s: "Spring is described as fresh, with trees becoming green.", a: true },
      { s: "Summer is cold and windy in the text.", a: false },
      { s: "Autumn is linked with colorful leaves.", a: true },
      { s: "The speaker never checks the forecast.", a: false },
      { s: "Planning with seasons helps organize the day.", a: true }
    ]
  },
  {
    topic: "Jobs",
    text: "People do different jobs to help the community. Doctors and nurses take care of our health. Teachers explain new ideas and guide students. Drivers bring food and goods to shops. Firefighters protect us in dangerous situations. Some people work with computers and create useful programs. Others grow vegetables and fruit on farms. Every job needs skills and responsibility. At school we sometimes invite guests to talk about their work. Listening to their stories helps us understand what we enjoy and what we are good at. In the future, I want a job that helps people and makes the world kinder.",
    questions: [
      { s: "Firefighters protect people in danger.", a: true },
      { s: "Drivers bring goods to shops.", a: true },
      { s: "All jobs are useless for the community.", a: false },
      { s: "Inviting guests to school helps students learn about jobs.", a: true },
      { s: "The speaker wants a job that helps people.", a: true }
    ]
  },
  {
    topic: "Sports and Hobbies",
    text: "Having a hobby makes life brighter. I like reading detective stories and drawing simple portraits. On Saturdays I play football with my classmates in the yard. Exercise is good for health and mood. My friend enjoys music; he plays the guitar and writes short melodies. Another friend collects postcards from different cities. In the evening my family sometimes does puzzles or chess. Hobbies teach us to focus, to be patient, and to finish what we start. When we practice a little every day, we see progress and feel proud of ourselves.",
    questions: [
      { s: "The speaker plays football on Saturdays.", a: true },
      { s: "Music is not mentioned as anyone’s hobby.", a: false },
      { s: "Hobbies can teach patience.", a: true },
      { s: "The family never plays chess.", a: false },
      { s: "Practising every day helps people see progress.", a: true }
    ]
  },
  {
    topic: "The City",
    text: "Cities are full of movement and ideas. In our city there are parks, libraries, and a modern sports center. Buses and taxis help people travel quickly. The main square is busy in the evening when families walk and talk. Street lights make everything look warm and safe. My favorite place is the riverside; the water shines under the bridge and the air feels fresh. We have a museum with interactive exhibits about history. On weekends there are small markets with handmade things. A good city is not only about buildings; it is about people who smile and help each other.",
    questions: [
      { s: "The riverside is the speaker’s favorite place.", a: true },
      { s: "The main square is empty in the evening.", a: false },
      { s: "There is a sports center in the city.", a: true },
      { s: "The museum has interactive exhibits.", a: true },
      { s: "A city is only about buildings, not people.", a: false }
    ]
  },
  {
    topic: "Body and Health",
    text: "To stay healthy, we should sleep well, eat balanced food, and move our bodies. A short walk every day is already helpful. Drinking water keeps us active and focused. When we feel tired, it is better to rest and not to push too hard. Phones and screens are useful, but long hours can hurt our eyes. It is smart to take breaks and look outside the window. If we are ill, we must follow the doctor’s advice. Health is not about being perfect; it is about small habits that we keep every day.",
    questions: [
      { s: "Walking daily can be helpful for health.", a: true },
      { s: "Drinking water makes people less focused.", a: false },
      { s: "Too much screen time can be bad for our eyes.", a: true },
      { s: "We should ignore the doctor’s advice when ill.", a: false },
      { s: "Health includes small everyday habits.", a: true }
    ]
  },
  {
    topic: "Travel and Holidays",
    text: "Travel teaches us to notice new details and respect other cultures. Before a trip, my family plans the route and checks the weather. We pack only what we need and leave space for souvenirs. On the road we listen to music and play word games. In a new place we try local food, visit a museum, and walk in the old streets. We always keep the area clean and follow the rules. Taking photos helps us remember happy moments. When we return home, we make an album and write short notes about each day. Traveling makes our hearts wider and our minds curious.",
    questions: [
      { s: "The family plans the route before traveling.", a: true },
      { s: "They always carry too many things and never leave space.", a: false },
      { s: "They try local food in new places.", a: true },
      { s: "They make an album after returning.", a: true },
      { s: "Traveling makes people less curious.", a: false }
    ]
  }
];

// 3) Состояние и DOM-ссылки
let rCurrent = 0;
let rScore = 0;

const rTopicNo = document.getElementById('rTopicNo');
const readingContent = document.getElementById('readingContent');
const rBackBtn = document.getElementById('rBack');
const rNextBtn = document.getElementById('rNext');

// 4) Рендер темы
function renderReadingTopic() {
  const t = readingData[rCurrent];
  rTopicNo.textContent = rCurrent + 1;

  // Текст → параграфы
  const paragraphs = t.text.split(". ").map(p => p.trim()).filter(Boolean);
  const htmlText = paragraphs.map(p => `<p>${p.endsWith(".") ? p : p + "."}</p>`).join("");

  // Вопросы True/False
  const qHtml = t.questions.map((q, i) => `
    <div class="card" style="margin:10px 0; padding:10px;">
      <div><b>${i + 1}.</b> ${q.s}</div>
      <div style="margin-top:6px;">
        <button class="tfBtn" data-i="${i}" data-val="true">True</button>
        <button class="tfBtn" data-i="${i}" data-val="false">False</button>
        <span id="tfStatus-${i}" style="margin-left:8px;"></span>
      </div>
    </div>
  `).join("");

  readingContent.innerHTML = `
    <h3>${t.topic}</h3>
    <div>${htmlText}</div>
    <hr style="margin:12px 0;">
    <h4>True / False</h4>
    ${qHtml}
  `;

  document.querySelectorAll(".tfBtn").forEach(btn => {
    btn.onclick = () => {
      const qi = Number(btn.dataset.i);
      const ans = btn.dataset.val === "true";
      const correct = t.questions[qi].a;
      const status = document.getElementById(`tfStatus-${qi}`);
      if (!status.dataset.lock) {
        if (ans === correct) {
          rScore++;
          status.textContent = "✅ Correct!";
          playStarReading();
          try { new Audio("sound/ding.wav").play(); } catch(e){}
        } else {
          status.textContent = "❌ Try again!";
        }
        status.dataset.lock = "1"; // чтобы повторно не фармить очки
      }
    };
  });

  rBackBtn.onclick = () => {
    if (rCurrent > 0) {
      rCurrent--;
      renderReadingTopic();
    }
  };
  rNextBtn.onclick = () => {
    if (rCurrent < readingData.length - 1) {
      rCurrent++;
      renderReadingTopic();
    } else {
      // завершение курса
      readingContent.innerHTML = `
        <h3>🎉 Well done!</h3>
        <p>You finished all topics.<br>Your score: <b>${rScore}</b></p>
      `;
      // сохранить в журнал
      saveToJournalReading(window.studentName || "Student", rScore);
      // Вернёмся в меню через 1.2 сек
      if (typeof show === "function") {
        setTimeout(() => show("menu"), 1200);
      }
    }
  };
}

// 5) Звёздочки ✨
function playStarReading() {
  const star = document.createElement("div");
  star.textContent = "⭐";
  star.style.position = "fixed";
  star.style.left = "50%";
  star.style.top = "58%";
  star.style.transform = "translate(-50%,-50%)";
  star.style.fontSize = "44px";
  star.style.pointerEvents = "none";
  star.style.animation = "fly 0.9s ease-out";
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 900);
}

// 6) Журнал учителя
function saveToJournalReading(name, addScore) {
  const table = document.getElementById("journalTable");
  if (!table) return;
  let found = null;
  for (const row of table.rows) {
    if (row.cells && row.cells[0] && row.cells[0].textContent === name) {
      found = row;
      break;
    }
  }
  if (found) {
    const old = parseInt(found.cells[1].textContent || "0", 10);
    found.cells[1].textContent = old + addScore;
  } else {
    const row = table.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = String(addScore);
  }
}

// 7) Гарантируем наличие анимации (если нет в CSS)
(function ensureKeyframes(){
  const s = document.createElement("style");
  s.textContent = `
  @keyframes fly {
    0% { opacity:0; transform:translate(-50%,-40%) scale(0.85); }
    50% { opacity:1; }
    100% { opacity:0; transform:translate(-50%,-80%) scale(1.15); }
  }`;
  document.head.appendChild(s);
})();

// 8) Авто-инициализация при показе раздела
(function hookReadingActivation(){
  const screen = document.getElementById('reading');
  const obs = new MutationObserver(() => {
    if (screen.classList.contains('active')) {
      // при первом открытии не сбрасываем набранные очки
      if (readingContent.innerHTML.trim() === "") {
        renderReadingTopic();
      }
    }
  });
  obs.observe(screen, { attributes: true, attributeFilter: ['class'] });
})();
