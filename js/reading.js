// ---------------------------------------
// AI Bayan Reading Trainer 2025 (no audio)
// 12 topics × 10 sentences + 5 True/False
// Stars + sound + Teacher Journal
// ---------------------------------------

// (1) Ensure reading screen exists (если блока нет в index.html)
(function ensureReadingScreen() {
  if (!document.getElementById("reading")) {
    const el = document.createElement("div");
    el.id = "reading";
    el.className = "screen section";
    el.innerHTML = `
      <h2>Reading — Topic <span id="rTopicNo">1</span></h2>
      <div id="readingContent"></div>
      <div class="nav-buttons">
        <button id="rBack">Back</button>
        <button id="rNext">Next</button>
        <button class="back-menu" onclick="show('menu')">🏠 Back to Menu</button>
      </div>
    `;
    document.body.appendChild(el);
  } else {
    // если блок есть, убедимся что есть кнопка Back to Menu
    const wrap = document.querySelector("#reading .nav-buttons");
    if (wrap && !wrap.querySelector(".back-menu")) {
      const bm = document.createElement("button");
      bm.className = "back-menu";
      bm.textContent = "🏠 Back to Menu";
      bm.onclick = () => show("menu");
      wrap.appendChild(bm);
    }
  }
})();

// (2) Data: 12 topics, each ~10 sentences + 5 TF questions
const readingData = [
  {
    topic: "My Family",
    text: "My name is Aida and I live in a small town near the sea. I have a big and friendly family. My father works as a doctor at the local clinic. My mother is a teacher who enjoys reading in the evening. I have a younger brother named Timur and he is very energetic. Every evening we do homework together at the kitchen table. On weekends we visit our grandparents in the countryside. Grandma cooks delicious pies and grandpa tells funny stories. Our cat Snow sleeps on the sofa near us. Family time is the most valuable part of my week.",
    q: [
      { s: "Aida lives near the sea.", a: true },
      { s: "Her mother is a teacher.", a: true },
      { s: "Timur is older than Aida.", a: false },
      { s: "They visit grandparents on weekends.", a: true },
      { s: "The cat's name is Snow.", a: true }
    ]
  },
  {
    topic: "My School",
    text: "I study at School Number Six which is close to my home. The building is modern and full of light. My favorite place is the library because it is quiet. Our English room has a projector and a whiteboard. We often work in pairs and make small projects. The teachers are strict but fair and they support us. During break I talk with friends in the corridor. After classes I sometimes join the reading club. The school garden has flowers that we water in spring. School helps me feel confident about the future.",
    q: [
      { s: "The library is noisy and crowded.", a: false },
      { s: "The English room has a projector.", a: true },
      { s: "Students never work in pairs.", a: false },
      { s: "There is a garden at school.", a: true },
      { s: "School makes the speaker confident.", a: true }
    ]
  },
  {
    topic: "My House",
    text: "Our house is small but very comfortable. The living room has a blue sofa and a neat carpet. In the evenings we watch films or talk together. The kitchen smells of fresh bread on weekends. My bedroom has a desk near the window for homework. On the wall I keep a calendar and some photos. We have a small balcony with green plants. In summer we water the flowers and watch the sunset. I like the quiet mornings in our home. It feels warm and welcoming every day.",
    q: [
      { s: "There is a blue sofa in the living room.", a: true },
      { s: "They never watch films in the evening.", a: false },
      { s: "The desk stands near the bedroom window.", a: true },
      { s: "They grow plants on the balcony.", a: true },
      { s: "The home feels cold and unfriendly.", a: false }
    ]
  },
  {
    topic: "My Day",
    text: "On school days I wake up early and make my bed. After breakfast I check the timetable. I walk to school because the air is fresh. During lessons I listen carefully and take notes. At lunch I sit with friends and share stories. After school I rest for a short time and then do homework. In the evening I help my mother set the table. If I finish early I read or draw pictures. Before sleep I plan tomorrow in a small notebook. This routine keeps me calm and organized.",
    q: [
      { s: "The speaker walks to school.", a: true },
      { s: "They never help at home.", a: false },
      { s: "Reading or drawing happens after homework.", a: true },
      { s: "They plan the next day before sleep.", a: true },
      { s: "The routine makes the speaker stressed.", a: false }
    ]
  },
  {
    topic: "Animals",
    text: "Animals make our world interesting and beautiful. In the morning we hear birds singing in the sky. My friend has a dog that runs in the park. At school we learn about wolves, foxes and eagles. Every animal has a role in nature. Bees help flowers and trees by carrying pollen. We should protect animals and keep the environment clean. In the zoo we read the signs and speak quietly. We never throw rubbish near cages. Respect for animals shows responsibility.",
    q: [
      { s: "The dog likes running in the park.", a: true },
      { s: "Bees are bad for trees and flowers.", a: false },
      { s: "Students learn about wild animals at school.", a: true },
      { s: "People should shout loudly in the zoo.", a: false },
      { s: "Respecting animals is responsible behaviour.", a: true }
    ]
  },
  {
    topic: "Food and Drinks",
    text: "My family tries to eat healthy food every day. For breakfast we have porridge, eggs or fruit with yogurt. At school I drink water and avoid too many sweets. For lunch we enjoy soup or rice with vegetables. On weekends we bake pizza with tomatoes and mushrooms. My mother says it is important to eat slowly. In the evening we drink tea and talk about our day. When shopping we read labels and choose fresh products. Good food gives us energy for study and play. It also helps us stay active and happy.",
    q: [
      { s: "They always eat pizza for breakfast.", a: false },
      { s: "The family sometimes bakes pizza.", a: true },
      { s: "The speaker drinks water at school.", a: true },
      { s: "They ignore labels in the shop.", a: false },
      { s: "Healthy food gives energy.", a: true }
    ]
  },
  {
    topic: "Clothes",
    text: "Clothes help us feel comfortable and look tidy. At school I wear a uniform with a neat shirt and dark trousers. In winter I put on a warm coat, hat and gloves. When it is sunny I choose a light jacket and a cap. For sports I wear a T-shirt and trainers. My grandmother taught me to fold clothes and keep order in the wardrobe. I like simple colours and soft fabrics. I clean my shoes on Sunday evening. Careful choice of clothes shows respect for people around us.",
    q: [
      { s: "The speaker wears a school uniform.", a: true },
      { s: "They wear hat and gloves in winter.", a: true },
      { s: "A T-shirt and trainers are for sports.", a: true },
      { s: "They prefer very bright and complicated clothes.", a: false },
      { s: "Grandmother taught to keep clothes in order.", a: true }
    ]
  },
  {
    topic: "Weather and Seasons",
    text: "The weather changes our plans and feelings. Spring brings fresh air and green leaves. Summer is sunny and warm and we go outside more. Autumn has colourful trees and cool winds. Winter is cold and snowy but quiet and beautiful. When it rains I take an umbrella and wear boots. Before leaving home I check the forecast on my phone. I choose clothes that match the season. Understanding the weather helps me organise my day. Every season has its charm.",
    q: [
      { s: "Spring is fresh and green.", a: true },
      { s: "Summer is cold in the text.", a: false },
      { s: "Autumn has colourful leaves.", a: true },
      { s: "The speaker never checks the forecast.", a: false },
      { s: "Choosing clothes for the season is useful.", a: true }
    ]
  },
  {
    topic: "Jobs",
    text: "People do different jobs to help the community. Doctors and nurses care for our health. Teachers explain new ideas and guide students. Drivers bring goods to the shops. Firefighters protect us in dangerous situations. Some people work with computers and build useful programs. Others grow vegetables and fruit on farms. At school we invite guests to talk about their work. Their stories help us understand our interests. I want a job that helps people and makes the world kinder.",
    q: [
      { s: "Firefighters work in dangerous situations.", a: true },
      { s: "Drivers bring goods to shops.", a: true },
      { s: "All jobs are useless for society.", a: false },
      { s: "Guests visit school to speak about work.", a: true },
      { s: "The speaker wants a helpful job.", a: true }
    ]
  },
  {
    topic: "Sports and Hobbies",
    text: "Hobbies make life brighter and healthier. I like reading stories and drawing simple portraits. On Saturdays I play football with classmates. Exercise is good for body and mood. My friend plays the guitar and writes short melodies. Another friend collects postcards from cities. In the evening my family does puzzles or chess. Hobbies teach patience and focus. Practising a little every day brings progress. We feel proud when we finish a project.",
    q: [
      { s: "The speaker plays football on Saturdays.", a: true },
      { s: "No one likes music in the text.", a: false },
      { s: "Hobbies can teach patience.", a: true },
      { s: "The family never plays chess.", a: false },
      { s: "Daily practice brings progress.", a: true }
    ]
  },
  {
    topic: "The City",
    text: "Cities are full of movement and ideas. Our city has parks, libraries and a sports centre. Buses and taxis help people travel quickly. The main square is busy in the evening. Street lights make the streets look warm and safe. My favourite place is the riverside under the bridge. The museum has interactive history exhibits. On weekends small markets sell handmade things. A good city is not only buildings. It is people who smile and help each other.",
    q: [
      { s: "The main square is busy in the evening.", a: true },
      { s: "The museum is about history and is interactive.", a: true },
      { s: "The favourite place is the riverside.", a: true },
      { s: "There is no sports centre in the city.", a: false },
      { s: "A city is only buildings, not people.", a: false }
    ]
  },
  {
    topic: "Body and Health",
    text: "To stay healthy we should sleep well and move our bodies. A short daily walk is already helpful. Drinking water keeps us active and focused. When we feel tired we should rest. Long hours with screens can hurt our eyes. It is smart to take breaks and look outside the window. If we get ill we must follow the doctor’s advice. Health is not about perfection. It is about small habits that we keep every day. These habits make our life balanced.",
    q: [
      { s: "A daily walk can help health.", a: true },
      { s: "Water makes people less focused.", a: false },
      { s: "Too much screen time is bad for eyes.", a: true },
      { s: "We should ignore the doctor's advice.", a: false },
      { s: "Health includes small everyday habits.", a: true }
    ]
  },
  {
    topic: "Travel and Holidays",
    text: "Travel teaches us to respect other cultures. Before a trip my family plans the route and checks the weather. We pack only what we need and leave space for souvenirs. On the road we listen to music and play word games. In new places we try local food and visit museums. We keep the area clean and follow the rules. Taking photos helps us remember happy moments. After returning we make an album with notes. Travelling makes our minds curious and our hearts wide.",
    q: [
      { s: "The family plans the route before a trip.", a: true },
      { s: "They always take too many things.", a: false },
      { s: "They try local food and visit museums.", a: true },
      { s: "They make an album after the trip.", a: true },
      { s: "Travel makes people less curious.", a: false }
    ]
  }
];

// (3) State & DOM
let rCurrent = 0;        // номер темы
let rScore = 0;          // общий счёт за весь раздел
const rTopicNo = document.getElementById("rTopicNo");
const readingContent = document.getElementById("readingContent");
const rBackBtn = document.getElementById("rBack");
const rNextBtn = document.getElementById("rNext");

// (4) Render one topic
function renderReadingTopic() {
  const t = readingData[rCurrent];
  rTopicNo.textContent = rCurrent + 1;

  // текст в абзацы
  const htmlText = t.text.split(". ").map(p => p.trim()).filter(Boolean)
    .map(p => `<p>${p.endsWith(".") ? p : p + "."}</p>`).join("");

  // 5 вопросов True/False
  const qHtml = t.q.map((q, i) => `
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
    <div id="rResult" style="margin-top:10px;"></div>
  `;

  let answered = 0;

  document.querySelectorAll(".tfBtn").forEach(btn => {
    btn.onclick = () => {
      const qi = Number(btn.dataset.i);
      const ans = btn.dataset.val === "true";
      const correct = t.q[qi].a;
      const status = document.getElementById(`tfStatus-${qi}`);
      if (status.dataset.lock) return; // не даём фармить очки
      if (ans === correct) {
        rScore++;
        status.textContent = "✅ Correct!";
        status.style.color = "green";
        try { new Audio("sound/ding.wav").play(); } catch(e){}
        playStarReading();
      } else {
        status.textContent = "❌ Try again!";
        status.style.color = "crimson";
      }
      status.dataset.lock = "1";
      answered++;
      // если все 5 отвечены — покажем итог по теме
      if (answered === t.q.length) {
        const rightHere = document.querySelectorAll("#readingContent span[data-lock='1']").length;
        document.getElementById("rResult").innerHTML =
          `🎉 <b>Well done!</b> You answered <b>${rightHere}/5</b> correctly.`;
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
        <h3>🎉 Great job!</h3>
        <p>You finished all topics.<br>Your total score: <b>${rScore}</b></p>
      `;
      saveToJournalReading(window.studentName || "Student", rScore);
      setTimeout(() => show("menu"), 1200);
    }
  };
}

// (5) Stars ✨
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

// (6) Teacher Journal save
function saveToJournalReading(name, addScore) {
  const table = document.getElementById("journalTable");
  if (!table) return;
  let row = [...table.rows].find(r => r.cells?.[0]?.textContent === name);
  if (row) {
    row.cells[1].textContent = String((parseInt(row.cells[1].textContent || "0", 10)) + addScore);
  } else {
    const newRow = table.insertRow();
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = String(addScore);
  }
}

// (7) Ensure keyframes for star
(function ensureKeyframes(){
  if (!document.getElementById("ai-reading-anim")) {
    const s = document.createElement("style");
    s.id = "ai-reading-anim";
    s.textContent = `
      @keyframes fly {
        0% { opacity:0; transform:translate(-50%,-40%) scale(0.85); }
        50% { opacity:1; }
        100% { opacity:0; transform:translate(-50%,-80%) scale(1.15); }
      }`;
    document.head.appendChild(s);
  }
})();

// (8) Activate when reading screen is shown
(function hookReadingActivation(){
  const screen = document.getElementById("reading");
  const obs = new MutationObserver(() => {
    if (screen.classList.contains("active")) {
      renderReadingTopic();
    }
  });
  obs.observe(screen, { attributes: true, attributeFilter: ["class"] });
})();
