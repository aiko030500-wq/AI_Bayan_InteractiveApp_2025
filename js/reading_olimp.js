// ------------------------------
// 📖 AI Bayan Reading Olympiad — A2 (Darын style)
// ------------------------------
document.addEventListener("DOMContentLoaded", function () {

  let currentReading = 0;
  let answers = [];

  const readingData = [
    {
      title: "1. A Day in London",
      text: "Anna is spending her holiday in London, one of the most exciting cities in the world. Every morning she takes the underground to visit famous places such as the Tower of London, the British Museum, and Buckingham Palace. She enjoys walking through Hyde Park, taking photos of squirrels, and watching people feeding birds near the lake. For lunch, she usually eats fish and chips at a small café. In the evening, she likes to go shopping or watch a musical at the theatre.",
      questions: [
        { q: "Where is Anna spending her holiday?", options: ["Paris", "London", "Rome"], a: 1 },
        { q: "What transport does she use in the morning?", options: ["By bus", "By underground", "By taxi"], a: 1 },
        { q: "What does Anna like to do in Hyde Park?", options: ["Feed birds", "Ride a bike", "Play football"], a: 0 },
        { q: "What does she eat for lunch?", options: ["Pizza", "Fish and chips", "Soup"], a: 1 },
        { q: "What does Anna do in the evening?", options: ["Go shopping", "Stay at home", "Visit a museum"], a: 0 }
      ]
    },
    {
      title: "2. A Visit to the Countryside",
      text: "Last weekend, Tom went to visit his grandparents in the countryside. Their house is near a big forest and a small river. In the morning, Tom helped his grandfather feed the chickens and collect eggs. Later, they went fishing and caught two small fish. In the afternoon, Tom and his grandmother made an apple pie and drank tea together. In the evening, he watched the stars in the clear sky. He loves the countryside because it’s quiet and beautiful.",
      questions: [
        { q: "Where did Tom go last weekend?", options: ["To the city", "To the countryside", "To the beach"], a: 1 },
        { q: "What did he help his grandfather do?", options: ["Feed chickens", "Milk cows", "Water plants"], a: 0 },
        { q: "What did they catch in the river?", options: ["Two big fish", "Two small fish", "No fish"], a: 1 },
        { q: "What did Tom make with his grandmother?", options: ["Cake", "Pie", "Soup"], a: 1 },
        { q: "Why does Tom love the countryside?", options: ["It’s quiet and beautiful", "It’s busy", "It’s modern"], a: 0 }
      ]
    },
    {
      title: "3. A Day at School",
      text: "Emily is a student at Greenfield School. She usually wakes up at seven o’clock and takes the bus to school. Her favorite subject is English because she loves reading stories and learning new words. At lunchtime, she eats with her friends in the school cafeteria. In the afternoon, she has art and music lessons. She enjoys drawing pictures and playing the guitar. After school, Emily does her homework and sometimes plays basketball with her brother in the yard.",
      questions: [
        { q: "What time does Emily wake up?", options: ["At six", "At seven", "At eight"], a: 1 },
        { q: "How does she get to school?", options: ["By car", "By bus", "On foot"], a: 1 },
        { q: "What is her favorite subject?", options: ["Math", "English", "Science"], a: 1 },
        { q: "What does she do after school?", options: ["Plays football", "Does homework", "Goes shopping"], a: 1 },
        { q: "What instrument does she play?", options: ["Piano", "Guitar", "Violin"], a: 1 }
      ]
    },
    {
      title: "4. The Birthday Party",
      text: "Yesterday, Sarah had her birthday party at home. She decorated the room with balloons and colorful lights. Her friends brought gifts and sang ‘Happy Birthday’. They played games, danced to music, and laughed a lot. Sarah’s mom made a big chocolate cake with candles. Everyone enjoyed the cake and took photos together. After the party, Sarah opened her presents and found a new book and a teddy bear. She said it was the best birthday ever!",
      questions: [
        { q: "Whose birthday was it?", options: ["Tom’s", "Sarah’s", "Emma’s"], a: 1 },
        { q: "Where did the party take place?", options: ["At school", "At home", "At a café"], a: 1 },
        { q: "What color were the decorations?", options: ["Blue", "Colorful", "White"], a: 1 },
        { q: "What did Sarah get as presents?", options: ["A teddy bear and a book", "A bike and a phone", "A dress and shoes"], a: 0 },
        { q: "How did Sarah feel about her party?", options: ["Sad", "Tired", "Happy"], a: 2 }
      ]
    },
    {
      title: "5. A Rainy Day",
      text: "It was raining heavily in the morning, so Jack couldn’t go outside to play football. Instead, he decided to stay home and read a detective book. His sister was drawing pictures in her room, and their mom was cooking soup in the kitchen. After lunch, the rain stopped, and the sky became clear. Jack and his sister went out to jump in puddles and look for rainbows. They had a great time together and took funny photos.",
      questions: [
        { q: "Why couldn’t Jack play football?", options: ["He was sick", "It was raining", "It was cold"], a: 1 },
        { q: "What did he do instead?", options: ["Watched TV", "Read a book", "Played games"], a: 1 },
        { q: "What was his sister doing?", options: ["Drawing", "Sleeping", "Reading"], a: 0 },
        { q: "What did the family eat for lunch?", options: ["Soup", "Sandwiches", "Pasta"], a: 0 },
        { q: "What did Jack do after the rain stopped?", options: ["Played football", "Went shopping", "Jumped in puddles"], a: 2 }
      ]
    },
    {
      title: "6. My Best Friend",
      text: "My best friend’s name is David. He is twelve years old and studies in the same class as me. He is very funny and always helps others. David loves football and plays for the school team. He also likes reading adventure stories. Every weekend, we go to the park to play football and eat ice cream. Sometimes we do our homework together and share our favorite songs. I’m very happy to have such a kind and loyal friend.",
      questions: [
        { q: "How old is David?", options: ["Ten", "Twelve", "Fourteen"], a: 1 },
        { q: "What sport does David play?", options: ["Basketball", "Football", "Tennis"], a: 1 },
        { q: "What kind of books does he like?", options: ["Adventure", "History", "Poetry"], a: 0 },
        { q: "What do the friends eat in the park?", options: ["Pizza", "Ice cream", "Sandwiches"], a: 1 },
        { q: "How does the writer describe David?", options: ["Kind and loyal", "Shy and quiet", "Angry and rude"], a: 0 }
      ]
    },
    {
      title: "7. The Zoo Trip",
      text: "Last Sunday, our class went to the city zoo. We saw lions, elephants, monkeys, and colorful birds. The zookeeper told us many interesting facts about the animals. We learned what they eat and how they live. At lunchtime, we had sandwiches and juice in the picnic area. My favorite animal was the giraffe because it was tall and friendly. Before going home, we visited the zoo shop and bought postcards. It was an amazing and educational trip.",
      questions: [
        { q: "Where did the class go?", options: ["To a park", "To a zoo", "To a museum"], a: 1 },
        { q: "Who told them facts about animals?", options: ["Teacher", "Zookeeper", "Guide"], a: 1 },
        { q: "What did they eat for lunch?", options: ["Sandwiches and juice", "Pizza", "Burgers"], a: 0 },
        { q: "Which animal was the writer’s favorite?", options: ["Elephant", "Giraffe", "Monkey"], a: 1 },
        { q: "What did they buy at the zoo shop?", options: ["Toys", "Postcards", "Books"], a: 1 }
      ]
    },
    {
      title: "8. A Trip to the Mountains",
      text: "During the winter holidays, my family went to the mountains. The air was cold and fresh, and everything was covered with snow. We stayed in a small wooden house. In the morning, we went skiing and built a snowman. In the afternoon, we drank hot chocolate and played board games by the fireplace. At night, we looked at the stars in the clear sky. It was peaceful and quiet. I will always remember that trip as one of the best days ever.",
      questions: [
        { q: "Where did the family go?", options: ["To the sea", "To the mountains", "To the city"], a: 1 },
        { q: "What was the weather like?", options: ["Hot", "Cold and snowy", "Rainy"], a: 1 },
        { q: "What did they do in the morning?", options: ["Went skiing", "Went swimming", "Went shopping"], a: 0 },
        { q: "What did they drink in the afternoon?", options: ["Tea", "Coffee", "Hot chocolate"], a: 2 },
        { q: "What did they do at night?", options: ["Watched TV", "Looked at stars", "Went to a concert"], a: 1 }
      ]
    },
    {
      title: "9. The School Festival",
      text: "Every spring, our school organizes a big festival. Each class prepares a performance — some sing, others dance or act in plays. Parents and teachers come to watch. There are also food stalls with homemade cakes and snacks. Students decorate the gym with balloons and posters. Everyone is happy and excited. At the end, the principal gives awards to the best performances. It’s a wonderful day full of fun and teamwork, and everyone feels proud of their school.",
      questions: [
        { q: "When does the festival take place?", options: ["In spring", "In summer", "In winter"], a: 0 },
        { q: "Who watches the performances?", options: ["Only students", "Parents and teachers", "Tourists"], a: 1 },
        { q: "What kind of food is sold?", options: ["Homemade cakes and snacks", "Pizza", "Burgers"], a: 0 },
        { q: "Where is the festival held?", options: ["In the gym", "In the park", "In the classroom"], a: 0 },
        { q: "Who gives the awards?", options: ["Principal", "Teacher", "Parents"], a: 0 }
      ]
    },
    {
      title: "10. Saving the Planet",
      text: "Our teacher often talks about protecting the environment. She says that even small actions can make a big difference. At home, my family recycles paper, glass, and plastic. We also turn off lights when we leave a room and never waste water. On weekends, we join city clean-up days and collect rubbish from the park. I believe that everyone should care about nature because it is our home. Together, we can make the Earth a cleaner and better place to live.",
      questions: [
        { q: "What does the teacher talk about?", options: ["The environment", "History", "Sports"], a: 0 },
        { q: "What does the family recycle?", options: ["Paper, glass, and plastic", "Food", "Metal only"], a: 0 },
        { q: "When do they collect rubbish?", options: ["Every weekend", "At night", "On holidays"], a: 0 },
        { q: "Why should people protect nature?", options: ["It’s expensive", "It’s our home", "It’s easy"], a: 1 },
        { q: "What is the main idea of the text?", options: ["Helping animals", "Saving the planet", "Cooking healthy food"], a: 1 }
      ]
    }
  ];

  // Function to show reading
  const readingContent = document.getElementById("readingContent");
  function showReading() {
    const r = readingData[currentReading];
    readingContent.innerHTML = `
      <h3>${r.title}</h3>
      <p>${r.text}</p>
      ${r.questions.map((q, i) => `
        <p><b>${q.q}</b></p>
        ${q.options.map((opt, j) => `
          <button class='optBtn' data-i='${i}' data-choice='${j}'>${opt}</button>
        `).join(" ")}
      `).join("<hr>")}
    `;
    document.querySelectorAll(".optBtn").forEach(btn => {
      btn.onclick = () => checkReadingAnswer(btn.dataset.i, btn.dataset.choice);
    });
  }

  function checkReadingAnswer(qIndex, choice) {
    const correct = readingData[currentReading].questions[qIndex].a;
    if (choice == correct) new Audio("sound/ding.wav").play();
  }

  // Navigation buttons
  document.getElementById("rNext").addEventListener("click", () => {
    if (currentReading < readingData.length - 1) currentReading++;
    showReading();
  });
  document.getElementById("rPrev").addEventListener("click", () => {
    if (currentReading > 0) currentReading--;
    showReading();
  });
  document.getElementById("rMenu").addEventListener("click", () => show("menu"));

  showReading();
});
