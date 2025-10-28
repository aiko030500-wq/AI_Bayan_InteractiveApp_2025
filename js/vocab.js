// ------------------------------
// AI Bayan Vocabulary Trainer 2025 — with Journal
// ------------------------------

(function ensureVocabScreen() {
  if (!document.getElementById('vocab')) {
    const el = document.createElement('div');
    el.id = 'vocab';
    el.className = 'screen section';
    el.innerHTML = `
      <h2>Vocabulary — Topic <span id="vTopicNo">1</span></h2>
      <div id="vocabContent"></div>
      <div class="nav-buttons">
        <button id="vBack">Back</button>
        <button id="vNext">Next</button>
        <button onclick="show('menu')">🏠 Back to Menu</button>
      </div>
    `;
    document.body.appendChild(el);
  }
})();

// Vocabulary data: 12 topics × 10 words
const vocabData = [
  { topic: "My Family", words: [
    {en:"father",ru:"отец"},{en:"mother",ru:"мама"},{en:"brother",ru:"брат"},{en:"sister",ru:"сестра"},
    {en:"grandmother",ru:"бабушка"},{en:"grandfather",ru:"дедушка"},{en:"parents",ru:"родители"},
    {en:"uncle",ru:"дядя"},{en:"aunt",ru:"тётя"},{en:"cousin",ru:"двоюродный брат/сестра"}
  ]},
  { topic: "My School", words: [
    {en:"teacher",ru:"учитель"},{en:"student",ru:"ученик"},{en:"classroom",ru:"класс"},
    {en:"board",ru:"доска"},{en:"desk",ru:"парта"},{en:"pen",ru:"ручка"},{en:"pencil",ru:"карандаш"},
    {en:"ruler",ru:"линейка"},{en:"book",ru:"книга"},{en:"notebook",ru:"тетрадь"}
  ]},
  { topic: "My House", words: [
    {en:"kitchen",ru:"кухня"},{en:"bedroom",ru:"спальня"},{en:"bathroom",ru:"ванная"},
    {en:"living room",ru:"гостиная"},{en:"door",ru:"дверь"},{en:"window",ru:"окно"},
    {en:"chair",ru:"стул"},{en:"table",ru:"стол"},{en:"bed",ru:"кровать"},{en:"lamp",ru:"лампа"}
  ]},
  { topic: "My Day", words: [
    {en:"morning",ru:"утро"},{en:"evening",ru:"вечер"},{en:"breakfast",ru:"завтрак"},{en:"lunch",ru:"обед"},
    {en:"dinner",ru:"ужин"},{en:"homework",ru:"домашнее задание"},{en:"play",ru:"играть"},
    {en:"study",ru:"учиться"},{en:"sleep",ru:"спать"},{en:"wash",ru:"мыться"}
  ]},
  { topic: "Animals", words: [
    {en:"cat",ru:"кот"},{en:"dog",ru:"собака"},{en:"bird",ru:"птица"},{en:"fish",ru:"рыба"},
    {en:"cow",ru:"корова"},{en:"horse",ru:"лошадь"},{en:"sheep",ru:"овца"},
    {en:"duck",ru:"утка"},{en:"chicken",ru:"курица"},{en:"lion",ru:"лев"}
  ]},
  { topic: "Food & Drinks", words: [
    {en:"apple",ru:"яблоко"},{en:"banana",ru:"банан"},{en:"bread",ru:"хлеб"},{en:"milk",ru:"молоко"},
    {en:"water",ru:"вода"},{en:"tea",ru:"чай"},{en:"juice",ru:"сок"},
    {en:"rice",ru:"рис"},{en:"meat",ru:"мясо"},{en:"soup",ru:"суп"}
  ]},
  { topic: "Clothes", words: [
    {en:"shirt",ru:"рубашка"},{en:"dress",ru:"платье"},{en:"skirt",ru:"юбка"},{en:"pants",ru:"брюки"},
    {en:"shoes",ru:"туфли"},{en:"boots",ru:"ботинки"},{en:"jacket",ru:"куртка"},
    {en:"coat",ru:"пальто"},{en:"hat",ru:"шляпа"},{en:"gloves",ru:"перчатки"}
  ]},
  { topic: "Weather & Seasons", words: [
    {en:"sunny",ru:"солнечно"},{en:"rainy",ru:"дождливо"},{en:"windy",ru:"ветрено"},
    {en:"snowy",ru:"снежно"},{en:"cloudy",ru:"облачно"},{en:"hot",ru:"жарко"},
    {en:"cold",ru:"холодно"},{en:"spring",ru:"весна"},{en:"summer",ru:"лето"},{en:"winter",ru:"зима"}
  ]},
  { topic: "Jobs", words: [
    {en:"doctor",ru:"врач"},{en:"nurse",ru:"медсестра"},{en:"teacher",ru:"учитель"},
    {en:"driver",ru:"водитель"},{en:"police officer",ru:"полицейский"},
    {en:"firefighter",ru:"пожарный"},{en:"cook",ru:"повар"},{en:"farmer",ru:"фермер"},
    {en:"builder",ru:"строитель"},{en:"pilot",ru:"пилот"}
  ]},
  { topic: "Sports & Hobbies", words: [
    {en:"football",ru:"футбол"},{en:"basketball",ru:"баскетбол"},{en:"swimming",ru:"плавание"},
    {en:"running",ru:"бег"},{en:"cycling",ru:"велоспорт"},{en:"reading",ru:"чтение"},
    {en:"drawing",ru:"рисование"},{en:"dancing",ru:"танцы"},{en:"music",ru:"музыка"},{en:"chess",ru:"шахматы"}
  ]},
  { topic: "The City", words: [
    {en:"street",ru:"улица"},{en:"park",ru:"парк"},{en:"shop",ru:"магазин"},{en:"school",ru:"школа"},
    {en:"hospital",ru:"больница"},{en:"bank",ru:"банк"},{en:"library",ru:"библиотека"},
    {en:"bus stop",ru:"остановка"},{en:"bridge",ru:"мост"},{en:"square",ru:"площадь"}
  ]},
  { topic: "Body & Health", words: [
    {en:"head",ru:"голова"},{en:"hand",ru:"рука"},{en:"leg",ru:"нога"},{en:"eye",ru:"глаз"},
    {en:"ear",ru:"ухо"},{en:"nose",ru:"нос"},{en:"mouth",ru:"рот"},
    {en:"tooth",ru:"зуб"},{en:"doctor",ru:"врач"},{en:"medicine",ru:"лекарство"}
  ]}
];

let vCurrent = 0;
let vScore = 0;
const vocabContent = document.getElementById("vocabContent");
const vTopicNo = document.getElementById("vTopicNo");

function renderVocab() {
  const t = vocabData[vCurrent];
  vTopicNo.textContent = vCurrent + 1;

  const list = t.words.map(w => `<div><b>${w.en}</b> — <i>${w.ru}</i></div>`).join("");

  vocabContent.innerHTML = `
    <h3>${t.topic}</h3>
    <div>${list}</div>
    <hr><h4>🎯 Guess the Word</h4>
    <p>Translate: <b>${t.words[0].ru}</b></p>
    <input id="guess" placeholder="Type here">
    <button id="check">Check</button>
    <p id="status"></p>
  `;

  let index = 0;
  const input = document.getElementById("guess");
  const checkBtn = document.getElementById("check");
  const status = document.getElementById("status");

  function nextWord() {
    index++;
    if (index < t.words.length) {
      status.textContent = "";
      document.querySelector("#vocabContent p").innerHTML = `Translate: <b>${t.words[index].ru}</b>`;
      input.value = "";
      input.focus();
    } else {
      status.innerHTML = `🎉 Great! You finished <b>${t.topic}</b>.`;
      saveToJournal(studentName, vScore);
    }
  }

  checkBtn.onclick = () => {
    const word = input.value.trim().toLowerCase();
    if (word === t.words[index].en.toLowerCase()) {
      vScore++;
      playStar();
      try { new Audio("sound/ding.wav").play(); } catch(e){}
      status.textContent = "✅ Correct!";
      setTimeout(nextWord, 500);
    } else {
      status.textContent = "❌ Try again!";
    }
  };

  document.getElementById("vBack").onclick = () => {
    if (vCurrent > 0) {
      vCurrent--;
      renderVocab();
    }
  };
  document.getElementById("vNext").onclick = () => {
    if (vCurrent < vocabData.length - 1) {
      vCurrent++;
      renderVocab();
    } else {
      show("menu");
      saveToJournal(studentName, vScore);
    }
  };
}

function playStar() {
  const star = document.createElement("div");
  star.textContent = "⭐";
  star.style.position = "fixed";
  star.style.left = "50%";
  star.style.top = "50%";
  star.style.fontSize = "40px";
  star.style.animation = "fly 1s ease-out";
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1000);
}

// Journal save
function saveToJournal(name, score) {
  const journal = document.getElementById("journalTable");
  if (!journal) return;
  let existing = [...journal.rows].find(r => r.cells[0]?.textContent === name);
  if (existing) {
    let old = parseInt(existing.cells[1].textContent || 0);
    existing.cells[1].textContent = old + score;
  } else {
    const row = journal.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = score;
  }
}

// Hook activation
const vocabScreen = document.getElementById("vocab");
const observer = new MutationObserver(() => {
  if (vocabScreen.classList.contains("active")) {
    renderVocab();
  }
});
observer.observe(vocabScreen, { attributes: true, attributeFilter: ["class"] });
