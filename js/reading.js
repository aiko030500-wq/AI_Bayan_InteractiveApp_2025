// ------------------------------
// AI Bayan Reading Trainer 2025 — Level A2 (Olympiad Edition)
// 12 texts × 5 multiple-choice questions
// ------------------------------

const readingData = [
  {
    title: "1. A Day in London",
    text: "London is one of the most exciting cities in the world. You can visit the London Eye, see Big Ben, and walk near the River Thames. Many tourists enjoy going to museums and eating fish and chips. The weather is sometimes rainy, but people still smile and take photos everywhere.",
    questions: [
      { q: "Where is Big Ben?", a: "b", options: ["In Paris", "In London", "In New York"] },
      { q: "What do tourists often eat?", a: "c", options: ["Pizza", "Pasta", "Fish and chips"] },
      { q: "What river goes through London?", a: "b", options: ["The Seine", "The Thames", "The Nile"] },
      { q: "How is the weather often in London?", a: "a", options: ["Rainy", "Sunny", "Hot"] },
      { q: "What do people do in London?", a: "b", options: ["Sleep all day", "Visit museums", "Go skiing"] }
    ]
  },
  {
    title: "2. My Favourite Hobby",
    text: "My name is Aigerim and I love painting. Every weekend I take my brushes, sit near the window, and draw what I see. Sometimes I paint mountains, sometimes the sea. My dream is to become an artist and open my own gallery.",
    questions: [
      { q: "What is Aigerim’s hobby?", a: "a", options: ["Painting", "Singing", "Dancing"] },
      { q: "Where does she paint?", a: "b", options: ["In a park", "Near the window", "At school"] },
      { q: "What does she sometimes draw?", a: "a", options: ["Mountains", "Cars", "Animals"] },
      { q: "What is her dream?", a: "c", options: ["Be a teacher", "Be a pilot", "Be an artist"] },
      { q: "When does she usually paint?", a: "a", options: ["On weekends", "At night", "Every morning"] }
    ]
  },
  {
    title: "3. The Smart Dolphin",
    text: "Dolphins are very intelligent animals. They can swim fast, jump high, and even help people in the sea. Scientists say dolphins can talk to each other using sounds. They live in groups called pods and eat fish.",
    questions: [
      { q: "What kind of animals are dolphins?", a: "b", options: ["Dangerous", "Intelligent", "Slow"] },
      { q: "What do dolphins eat?", a: "c", options: ["Grass", "Fruits", "Fish"] },
      { q: "How do dolphins communicate?", a: "a", options: ["By sounds", "By letters", "By pictures"] },
      { q: "Where do dolphins live?", a: "b", options: ["In forests", "In the sea", "On land"] },
      { q: "What are groups of dolphins called?", a: "c", options: ["Flocks", "Families", "Pods"] }
    ]
  },
  {
    title: "4. The School Trip",
    text: "Last Friday, our class went on a trip to the zoo. We saw lions, giraffes, monkeys, and zebras. The weather was sunny and we took many photos. Our teacher bought us ice cream. It was the best day of the week!",
    questions: [
      { q: "Where did the class go?", a: "a", options: ["To the zoo", "To the park", "To the cinema"] },
      { q: "What animals did they see?", a: "c", options: ["Dogs and cats", "Fish and birds", "Lions and giraffes"] },
      { q: "How was the weather?", a: "b", options: ["Rainy", "Sunny", "Cold"] },
      { q: "What did the teacher buy?", a: "a", options: ["Ice cream", "Books", "Juice"] },
      { q: "How did they feel?", a: "c", options: ["Sad", "Bored", "Happy"] }
    ]
  },
  {
    title: "5. A Robot Helper",
    text: "In the future, robots will help people at home. They will cook food, clean rooms, and even teach children. Some people already have small robots that can answer questions and play music. Life will be easier with robots.",
    questions: [
      { q: "What will robots do in the future?", a: "a", options: ["Help people", "Play games", "Go to school"] },
      { q: "Where will robots work?", a: "b", options: ["In shops", "At home", "In the forest"] },
      { q: "What can small robots do now?", a: "a", options: ["Answer questions", "Fly", "Sleep"] },
      { q: "How will life be with robots?", a: "c", options: ["Harder", "The same", "Easier"] },
      { q: "Who will robots teach?", a: "b", options: ["Parents", "Children", "Animals"] }
    ]
  },
  {
    title: "6. My Pet Cat",
    text: "I have a white cat. Her name is Snowy. She likes to sleep on my bed and play with a ball. Every morning I feed her milk and she follows me everywhere. Snowy is my best friend.",
    questions: [
      { q: "What colour is the cat?", a: "a", options: ["White", "Black", "Brown"] },
      { q: "What is the cat’s name?", a: "c", options: ["Kitty", "Misty", "Snowy"] },
      { q: "What does the cat like to do?", a: "b", options: ["Run in the park", "Sleep and play", "Catch birds"] },
      { q: "What does the owner give the cat?", a: "a", options: ["Milk", "Fish", "Bread"] },
      { q: "Why is Snowy special?", a: "c", options: ["She talks", "She is big", "She is her best friend"] }
    ]
  },
  {
    title: "7. The Internet Café",
    text: "There is a new Internet café in my town. You can drink coffee, eat cake, and use the Wi-Fi for free. Many students come here to do homework or play games. The owner is very friendly and helps everyone.",
    questions: [
      { q: "What is new in the town?", a: "b", options: ["A park", "An Internet café", "A supermarket"] },
      { q: "What can you do there?", a: "a", options: ["Drink coffee and use Wi-Fi", "Swim", "Dance"] },
      { q: "Who visits the café often?", a: "b", options: ["Old people", "Students", "Teachers"] },
      { q: "What is free there?", a: "a", options: ["Wi-Fi", "Food", "Drinks"] },
      { q: "What is the owner like?", a: "b", options: ["Angry", "Friendly", "Busy"] }
    ]
  },
  {
    title: "8. Summer Camp",
    text: "Every summer, children from different cities come to our camp near the lake. They sleep in wooden houses, go hiking, and play sports. In the evening, we sit near the fire, sing songs, and tell stories. Everyone has fun and makes new friends.",
    questions: [
      { q: "Where is the camp?", a: "c", options: ["In the city", "In the mountains", "Near the lake"] },
      { q: "What do children do in the camp?", a: "b", options: ["Work", "Play sports", "Study"] },
      { q: "What do they do in the evening?", a: "a", options: ["Sing songs", "Sleep", "Watch TV"] },
      { q: "What are the houses made of?", a: "b", options: ["Stone", "Wood", "Glass"] },
      { q: "Why do children like the camp?", a: "c", options: ["They eat a lot", "They travel alone", "They make new friends"] }
    ]
  },
  {
    title: "9. Traditional Food",
    text: "Every country has its own traditional food. In Kazakhstan, people like to eat beshbarmak. It is made from meat and noodles. In Japan, people eat sushi, and in Italy, they eat pasta. Food is an important part of every culture.",
    questions: [
      { q: "What do people in Kazakhstan eat?", a: "a", options: ["Beshbarmak", "Pizza", "Sushi"] },
      { q: "What is beshbarmak made from?", a: "c", options: ["Rice", "Fish", "Meat and noodles"] },
      { q: "Where do people eat sushi?", a: "b", options: ["France", "Japan", "Brazil"] },
      { q: "What do Italians like to eat?", a: "c", options: ["Soup", "Bread", "Pasta"] },
      { q: "What is important in every culture?", a: "a", options: ["Food", "Music", "Sports"] }
    ]
  },
  {
    title: "10. Visiting the Space Museum",
    text: "Our school visited the Space Museum last month. We learned about astronauts, rockets, and planets. I saw a real space suit and watched a film about Yuri Gagarin. Now I want to study science and become an astronaut.",
    questions: [
      { q: "Where did the class go?", a: "b", options: ["To a zoo", "To the Space Museum", "To the cinema"] },
      { q: "What did they learn about?", a: "a", options: ["Astronauts", "Animals", "Mountains"] },
      { q: "Who is Yuri Gagarin?", a: "b", options: ["A singer", "An astronaut", "A teacher"] },
      { q: "What did the narrator see?", a: "a", options: ["A real space suit", "A car", "A computer"] },
      { q: "What does the narrator want to be?", a: "c", options: ["Doctor", "Artist", "Astronaut"] }
    ]
  },
  {
    title: "11. A Rainy Day",
    text: "Today is rainy and cold. I can’t play outside, so I am reading my favourite book. My sister is watching a movie. Our dog is sleeping near the sofa. Even though it’s raining, we are having a good time at home.",
    questions: [
      { q: "What is the weather like today?", a: "b", options: ["Sunny", "Rainy", "Windy"] },
      { q: "What is the narrator doing?", a: "a", options: ["Reading a book", "Sleeping", "Watching TV"] },
      { q: "What is the sister doing?", a: "b", options: ["Reading", "Watching a movie", "Cooking"] },
      { q: "Where is the dog?", a: "c", options: ["In the garden", "On the bed", "Near the sofa"] },
      { q: "How do they feel?", a: "a", options: ["Happy", "Sad", "Angry"] }
    ]
  },
  {
    title: "12. My Dream Job",
    text: "I want to become a doctor. I think helping people is important. Doctors work in hospitals and help sick people get better. My parents say it’s a hard job, but I am ready to study hard to make my dream come true.",
    questions: [
      { q: "What is the narrator’s dream job?", a: "a", options: ["Doctor", "Teacher", "Artist"] },
      { q: "Where do doctors work?", a: "c", options: ["In a shop", "At school", "In hospitals"] },
      { q: "What do doctors do?", a: "b", options: ["Play football", "Help people", "Build houses"] },
      { q: "What do the parents say?", a: "a", options: ["It’s a hard job", "It’s an easy job", "It’s boring"] },
      { q: "What will the narrator do to reach the dream?", a: "c", options: ["Sleep", "Travel", "Study hard"] }
    ]
  }
];

// ------------------------------
// Core Logic for Reading Trainer
// ------------------------------

let currentText = 0;
let currentQ = 0;
let readingScore = 0;

const readingContent = document.getElementById("readingContent");
// ------------------------------
// Navigation buttons
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

function showReadingText() {
  const textObj = readingData[currentText];
  readingContent.innerHTML = `
    <h3>${textObj.title}</h3>
    <p>${textObj.text}</p>
    <div id="readingQuestions"></div>
  `;
  showReadingQuestions();
}

function showReadingQuestions() {
  const textObj = readingData[currentText];
  const q = textObj.questions[currentQ];
  document.getElementById("readingQuestions").innerHTML = `
    <p><b>Q${currentQ + 1}.</b> ${q.q}</p>
    ${q.options.map((opt, i) => 
      `<button class='optBtn' data-opt='${String.fromCharCode(97 + i)}'>${opt}</button>`).join("<br>")}
  `;
  document.querySelectorAll(".optBtn").forEach(btn => {
    btn.onclick = () => checkReadingAnswer(btn.dataset.opt);
  });
}

function checkReadingAnswer(choice) {
  const correct = readingData[currentText].questions[currentQ].a;
  if (choice === correct) {
    readingScore++;
    playStarAnimation();
    new Audio("sound/ding.wav").play();
  }
  currentQ++;
  if (currentQ < readingData[currentText].questions.length) {
    showReadingQuestions();
  } else {
    currentText++;
    currentQ = 0;
    if (currentText < readingData.length) {
      showReadingText();
    } else {
      readingContent.innerHTML = `<h3>🎉 Excellent!</h3><p>You finished all texts.<br>Your score: ${readingScore}</p>`;
    }
  }
}

function playStarAnimation() {
  const star = document.createElement("div");
  star.textContent = "⭐";
  star.style.position = "absolute";
  star.style.left = "50%";
  star.style.top = "50%";
  star.style.fontSize = "40px";
  star.style.animation = "fly 1s ease-out";
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1000);
}

showReadingText();
