// ------------------------------
// AI Bayan Reading Trainer 2025 — Level A2 (Olympiad Edition)
// ------------------------------

let currentReading = 0;
let currentScore = 0;

// ==============================
// 12 texts × 5 multiple-choice questions
// ==============================
const readingData = [
  {
    title: "1. A Day in London",
    text: "Anna is spending her holiday in London. Every morning, she takes the underground to visit famous places like the Tower of London and the British Museum. She loves walking in Hyde Park and eating fish and chips. In the evening, she watches the lights of the city from the London Eye. It’s her first time abroad, and she finds the city both busy and beautiful.",
    questions: [
      { q: "Where is Anna spending her holiday?", options: ["Paris", "London", "Rome"], a: 1 },
      { q: "How does she travel around the city?", options: ["By bus", "By underground", "By taxi"], a: 1 },
      { q: "What food does she like?", options: ["Sushi", "Fish and chips", "Pizza"], a: 1 },
      { q: "Where does she go in the evening?", options: ["Big Ben", "London Eye", "Hyde Park"], a: 1 },
      { q: "Is it her first trip abroad?", options: ["Yes", "No", "Not mentioned"], a: 0 }
    ]
  },
  {
    title: "2. My Best Friend",
    text: "My best friend is Tom. He is 14 years old and studies in the same class as me. He always helps others and is very good at football. Every weekend we play in the park, and sometimes we watch movies together. He is honest, friendly, and I can always trust him.",
    questions: [
      { q: "How old is Tom?", options: ["12", "13", "14"], a: 2 },
      { q: "What sport does Tom play well?", options: ["Basketball", "Football", "Tennis"], a: 1 },
      { q: "Where do they play every weekend?", options: ["At school", "In the park", "In the yard"], a: 1 },
      { q: "What do they sometimes do together?", options: ["Cook", "Watch movies", "Study"], a: 1 },
      { q: "What kind of person is Tom?", options: ["Lazy", "Selfish", "Honest"], a: 2 }
    ]
  },
  {
    title: "3. My School Day",
    text: "I usually wake up at seven o’clock and go to school at eight. My favorite subject is English because I love learning new words. At lunchtime, I eat with my friends in the school canteen. After school, I do my homework and play computer games. In the evening, I read books or watch TV.",
    questions: [
      { q: "What time does the writer wake up?", options: ["6", "7", "8"], a: 1 },
      { q: "What is the writer’s favorite subject?", options: ["Math", "English", "Art"], a: 1 },
      { q: "Where does the writer eat lunch?", options: ["At home", "In the canteen", "At a café"], a: 1 },
      { q: "What does the writer do after school?", options: ["Plays football", "Does homework", "Watches movies"], a: 1 },
      { q: "What does the writer do in the evening?", options: ["Reads or watches TV", "Plays games", "Visits friends"], a: 0 }
    ]
  },
  {
    title: "4. A Trip to the Mountains",
    text: "Last weekend, my family went to the mountains. The air was fresh, and the view was beautiful. We climbed a small hill, took many photos, and had a picnic. My little sister found colorful flowers and butterflies. It was a perfect day full of nature and joy.",
    questions: [
      { q: "Where did the family go?", options: ["To the sea", "To the mountains", "To the park"], a: 1 },
      { q: "What did they do there?", options: ["Swam", "Climbed", "Slept"], a: 1 },
      { q: "Who found flowers?", options: ["Mother", "Brother", "Sister"], a: 2 },
      { q: "What did they have for lunch?", options: ["A picnic", "Fast food", "Dinner"], a: 0 },
      { q: "How was the weather?", options: ["Rainy", "Cold", "Fresh"], a: 2 }
    ]
  },
  {
    title: "5. My Favorite Hobby",
    text: "My favorite hobby is drawing. I started drawing when I was five. I love using colors to make animals and nature. Every evening, I spend one hour drawing in my sketchbook. My parents always support me and say that I’m talented.",
    questions: [
      { q: "What is the writer’s hobby?", options: ["Drawing", "Dancing", "Singing"], a: 0 },
      { q: "When did the writer start drawing?", options: ["At 5", "At 7", "At 10"], a: 0 },
      { q: "What does the writer like to draw?", options: ["People", "Animals and nature", "Cars"], a: 1 },
      { q: "How often does the writer draw?", options: ["Every day", "Every evening", "Every weekend"], a: 1 },
      { q: "What do the writer’s parents say?", options: ["You are lazy", "You are talented", "You need to study"], a: 1 }
    ]
  },
  {
    title: "6. At the Zoo",
    text: "Yesterday I visited the city zoo with my classmates. We saw lions, elephants, monkeys, and colorful birds. My favorite animal was the panda because it was so cute and calm. We took pictures and learned about how the zoo protects wild animals.",
    questions: [
      { q: "Where did the students go?", options: ["To the museum", "To the zoo", "To the park"], a: 1 },
      { q: "What animal did the writer like most?", options: ["Lion", "Monkey", "Panda"], a: 2 },
      { q: "Why does the writer like pandas?", options: ["They are strong", "They are cute", "They are funny"], a: 1 },
      { q: "Who went with the writer?", options: ["Parents", "Friends", "Classmates"], a: 2 },
      { q: "What did they learn about?", options: ["Feeding", "Animal protection", "Nature"], a: 1 }
    ]
  },
  {
    title: "7. My City",
    text: "I live in a small but beautiful city near the sea. There are many parks, cafes, and schools here. People like walking along the beach and watching the sunset. Tourists visit our city every summer to swim and enjoy fresh seafood.",
    questions: [
      { q: "Where is the city located?", options: ["In the mountains", "Near the sea", "In the forest"], a: 1 },
      { q: "What can people do there?", options: ["Ski", "Walk on the beach", "Go camping"], a: 1 },
      { q: "When do tourists visit the city?", options: ["In summer", "In winter", "In spring"], a: 0 },
      { q: "What do tourists like to eat?", options: ["Meat", "Seafood", "Pizza"], a: 1 },
      { q: "What is the city like?", options: ["Small and beautiful", "Big and noisy", "Cold and old"], a: 0 }
    ]
  },
  {
    title: "8. Shopping with Mom",
    text: "Every Saturday I go shopping with my mom. We buy fruits, vegetables, and some sweets. My mom always checks prices and chooses the best quality. After shopping, we go to a small café for tea and cakes. It’s our favorite weekend routine.",
    questions: [
      { q: "When do they go shopping?", options: ["Every day", "Every Saturday", "Every Sunday"], a: 1 },
      { q: "What do they buy?", options: ["Clothes", "Fruits and vegetables", "Books"], a: 1 },
      { q: "Where do they go after shopping?", options: ["To a park", "To a café", "Home"], a: 1 },
      { q: "What does the mom check?", options: ["Prices and quality", "Recipes", "TV programs"], a: 0 },
      { q: "What do they drink in the café?", options: ["Coffee", "Tea", "Juice"], a: 1 }
    ]
  },
  {
    title: "9. My Pet Cat",
    text: "I have a cat named Bella. She is white with blue eyes and loves sleeping on my bed. Every morning she wakes me up by meowing. I feed her milk and play with her after school. She makes me happy every day.",
    questions: [
      { q: "What is the cat’s name?", options: ["Luna", "Bella", "Kitty"], a: 1 },
      { q: "What color is she?", options: ["Black", "White", "Gray"], a: 1 },
      { q: "Where does she sleep?", options: ["On the sofa", "On the bed", "Outside"], a: 1 },
      { q: "When does she wake the writer?", options: ["At night", "In the morning", "After school"], a: 1 },
      { q: "What does the writer feel about her?", options: ["Scared", "Angry", "Happy"], a: 2 }
    ]
  },
  {
    title: "10. The School Festival",
    text: "Last month, our school had a big festival. We decorated the classrooms, sang songs, and danced. Parents came to watch the performances. I took part in the English drama and my friends played music. Everyone was proud and happy.",
    questions: [
      { q: "What event took place?", options: ["A picnic", "A festival", "A concert"], a: 1 },
      { q: "Who came to watch?", options: ["Teachers", "Parents", "Tourists"], a: 1 },
      { q: "What did the writer do?", options: ["Played football", "Joined a drama", "Painted posters"], a: 1 },
      { q: "How did everyone feel?", options: ["Bored", "Tired", "Happy"], a: 2 },
      { q: "When did it happen?", options: ["Last month", "Last week", "Yesterday"], a: 0 }
    ]
  },
  {
    title: "11. A Rainy Day",
    text: "Today it is raining heavily. I stayed at home, read books, and listened to music. My brother played computer games, and my mom baked cookies. Even though the weather was bad, it was a cozy and fun day for everyone.",
    questions: [
      { q: "What was the weather like?", options: ["Sunny", "Rainy", "Windy"], a: 1 },
      { q: "What did the writer do?", options: ["Played football", "Read books", "Went outside"], a: 1 },
      { q: "What did mom do?", options: ["Cooked dinner", "Baked cookies", "Slept"], a: 1 },
      { q: "Who played computer games?", options: ["Dad", "Brother", "Friend"], a: 1 },
      { q: "How did they feel?", options: ["Sad", "Bored", "Happy"], a: 2 }
    ]
  },
  {
    title: "12. My Dream Job",
    text: "When I grow up, I want to be a teacher. I like helping people learn new things. Teachers work hard but make a big difference. I want my students to love English and enjoy learning. I will be a kind and patient teacher.",
    questions: [
      { q: "What is the writer’s dream job?", options: ["Doctor", "Teacher", "Pilot"], a: 1 },
      { q: "What does the writer want to do?", options: ["Help people", "Travel", "Play games"], a: 0 },
      { q: "What do teachers do?", options: ["Cook food", "Teach students", "Sell books"], a: 1 },
      { q: "What subject does the writer like?", options: ["Math", "English", "History"], a: 1 },
      { q: "What kind of teacher will the writer be?", options: ["Strict", "Kind", "Funny"], a: 1 }
    ]
  }
];

// ------------------------------
// Display Reading Texts
// ------------------------------
function showReadingText() {
  const data = readingData[currentReading];
  const readingContent = document.getElementById("readingContent");
  let html = `<h3>${data.title}</h3><p>${data.text}</p><ol>`;
  data.questions.forEach((item, i) => {
    html += `<li>${item.q}<br>${item.options.map((opt, j) =>
      `<button class='rOpt' data-i='${i}' data-a='${j}'>${opt}</button>`
    ).join(" ")}</li>`;
  });
  html += "</ol><p><b>Score:</b> " + currentScore + "</p>";
  readingContent.innerHTML = html;

  document.querySelectorAll(".rOpt").forEach(btn => {
    btn.onclick = () => checkReadingAnswer(btn.dataset.i, btn.dataset.a);
  });
}

// ------------------------------
// Check Answers
// ------------------------------
function checkReadingAnswer(i, a) {
  if (parseInt(a) === readingData[currentReading].questions[i].a) {
    currentScore++;
    new Audio("sound/ding.wav").play();
  } else {
    new Audio("sound/error.wav").play();
  }
  showReadingText();
}

// ------------------------------
// Navigation Buttons
// ------------------------------
document.getElementById("rPrev").addEventListener("click", () => {
  currentReading--;
  if (currentReading < 0) currentReading = readingData.length - 1;
  showReadingText();
});

document.getElementById("rNext").addEventListener("click", () => {
  currentReading++;
  if (currentReading >= readingData.length) currentReading = 0;
  showReadingText();
});

document.getElementById("rMenu").addEventListener("click", () => {
  show("menu");
});

// ------------------------------
showReadingText();
