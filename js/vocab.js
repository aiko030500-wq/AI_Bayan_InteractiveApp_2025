// ------------------------------
// AI Bayan Vocabulary Trainer 2025 (embedded)
// ------------------------------

// Создаем экран #vocab, если его нет в index.html
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
      </div>
    `;
    document.body.appendChild(el);
  }
})();

// Данные: 12 тем × 10 слов (EN + RU)
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
    {en:"study",ru:"учиться"},{en:"sleep",ru:"спать"},{en:"wash",ru:"мыть/мыться"}
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

// Состояние
let vCurrent = 0;       // текущая тема
let vScore = 0;

// DOM-узлы
const vTopicNo = document.getElementById('vTopicNo');
const vocabContent = document.getElementById('vocabContent');
const vBackBtn = document.getElementById('vBack');
const vNextBtn = document.getElementById('vNext');

// Рендер темы (список слов + мини-игра)
function renderVocabTopic() {
  const t = vocabData[vCurrent];
  vTopicNo.textContent = vCurrent + 1;

  // Список слов (карточки)
  const list = t.words.map(w => `
    <div class="card" style="margin:8px 0; padding:10px;">
      <b>${w.en}</b> — <i>${w.ru}</i>
    </div>
  `).join("");

  // Игра Guess the Word
  const pool = shuffle([...t.words]); // копия и перемешать
  const first = pool[0];

  vocabContent.innerHTML = `
    <h3>${t.topic}</h3>
    <div>${list}</div>
    <hr style="margin:16px 0;">
    <h4>🎯 Guess the Word</h4>
    <p>Write the English word for: <b>${first.ru}</b></p>
    <input type="text" id="guessInput" placeholder="type here" autocomplete="off" />
    <button id="checkGuess">Check</button>
    <div id="guessStatus" style="min-height:24px; margin-top:6px;"></div>
  `;

  const seq = pool; // последовательность слов для игры
  let gi = 0;

  function setPrompt() {
    const cur = seq[gi];
    document.querySelector('#guessStatus').textContent = "";
    vocabContent.querySelector('p').innerHTML = `Write the English word for: <b>${cur.ru}</b>`;
    document.getElementById('guessInput').value = "";
    document.getElementById('guessInput').focus();
  }

  document.getElementById('checkGuess').onclick = () => {
    const input = document.getElementById('guessInput').value.trim().toLowerCase();
    const target = seq[gi].en.toLowerCase();
    const status = document.getElementById('guessStatus');

    if (input === target) {
      vScore++;
      status.textContent = "✅ Correct!";
      playStar();
      try { new Audio("sound/ding.wav").play(); } catch(e){}
      gi++;
      if (gi < seq.length) {
        setTimeout(setPrompt, 400);
      } else {
        status.innerHTML = `🎉 Great! You finished <b>${t.topic}</b>.`;
      }
    } else {
      status.textContent = "❌ Try again!";
    }
  };

  // кнопки навигации
  vBackBtn.onclick = () => {
    if (vCurrent > 0) {
      vCurrent--;
      renderVocabTopic();
    }
  };
  vNextBtn.onclick = () => {
    if (vCurrent < vocabData.length - 1) {
      vCurrent++;
      renderVocabTopic();
    } else {
      // последнее: назад в меню (функция show() есть в app.js)
      if (typeof show === 'function') show('menu');
    }
  };
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Звёздочки ✨
function playStar() {
  const star = document.createElement("div");
  star.textContent = "⭐";
  star.style.position = "fixed";
  star.style.left = "50%";
  star.style.top = "58%";
  star.style.transform = "translate(-50%,-50%)";
  star.style.fontSize = "42px";
  star.style.animation = "fly 0.9s ease-out";
  star.style.pointerEvents = "none";
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 900);
}

// Немного CSS (если нет в style.css — добавим keyframes)
(function ensureKeyframes(){
  const style = document.createElement('style');
  style.textContent = `
  @keyframes fly { 
    0%{opacity:0; transform:translate(-50%,-40%) scale(0.8);} 
    50%{opacity:1;} 
    100%{opacity:0; transform:translate(-50%,-80%) scale(1.2);} 
  }`;
  document.head.appendChild(style);
})();

// Авто-инициализация при открытии раздела
(function hookMenu() {
  // если в app.js есть обработчик data-target, он вызовет show('vocab');
  // мы же просто рендерим раздел при первом показе
  const vocabScreen = document.getElementById('vocab');
  const observer = new MutationObserver(() => {
    if (vocabScreen.classList.contains('active')) {
      renderVocabTopic();
    }
  });
  observer.observe(vocabScreen, { attributes: true, attributeFilter: ['class'] });
})();
