// ------------------------------
// 📖 AI Bayan Reading Olympiad — Level A2 (Darын-style)
// ------------------------------
document.addEventListener("DOMContentLoaded", function() {

  const readingData = [
    {
      title: "1. My Busy Morning",
      text: "Every morning I wake up at 7 o’clock. I make my bed, brush my teeth, and eat breakfast with my family. Then I take the bus to school. My lessons start at 8:30. I love English and Science. After school, I go home, do my homework, and play with my dog.",
      questions: [
        { q:"What time does the writer wake up?", options:["At 6","At 7","At 8","At 9"], a:"b" },
        { q:"How does the writer go to school?", options:["By car","By bus","On foot","By bike"], a:"b" },
        { q:"What subject does the writer love?", options:["Math","English","PE","History"], a:"b" },
        { q:"What does the writer do after school?", options:["Plays games","Watches TV","Does homework","Goes to bed"], a:"c" },
        { q:"Who does the writer eat breakfast with?", options:["Friends","Family","Teacher","Dog"], a:"b" },
      ]
    },
    {
      title: "2. A Day at the Zoo",
      text: "Last Sunday my family visited the city zoo. We saw lions, elephants, and monkeys. My little sister liked the giraffes best. We ate ice cream and took many photos. It was sunny and warm. We went home tired but happy.",
      questions: [
        { q:"Where did the family go?", options:["To the park","To the zoo","To the cinema","To the museum"], a:"b" },
        { q:"What animals did they see?", options:["Cats and dogs","Birds and fish","Lions and elephants","Tigers and bears"], a:"c" },
        { q:"Who liked the giraffes best?", options:["Mother","Father","Sister","Brother"], a:"c" },
        { q:"What was the weather like?", options:["Rainy","Cold","Windy","Sunny"], a:"d" },
        { q:"How did they feel at the end?", options:["Angry","Sad","Happy","Hungry"], a:"c" },
      ]
    },
    {
      title: "3. Tom’s Hobby",
      text: "Tom loves taking photos. He has a small camera that he uses every weekend. He goes to the park, the beach, or the forest to take pictures of nature. He also takes photos of his friends. Someday, he wants to be a photographer.",
      questions: [
        { q:"What is Tom’s hobby?", options:["Drawing","Swimming","Taking photos","Reading"], a:"c" },
        { q:"When does he take photos?", options:["Every day","On weekends","In the morning","At night"], a:"b" },
        { q:"Where does he take pictures?", options:["In the city","In nature","At home","At school"], a:"b" },
        { q:"What does Tom want to be?", options:["A teacher","A driver","A photographer","A singer"], a:"c" },
        { q:"Who does Tom take photos of?", options:["His family","His friends","His teachers","His pets"], a:"b" },
      ]
    },
    {
      title: "4. The School Trip",
      text: "Our class went on a school trip to the mountains. We took a bus early in the morning. The road was long but beautiful. We had lunch near a river and played games. In the evening, we sang songs around a campfire. It was the best day of the year!",
      questions: [
        { q:"Where did the class go?", options:["To the city","To the mountains","To the sea","To the zoo"], a:"b" },
        { q:"How did they travel?", options:["By train","By car","By bus","On foot"], a:"c" },
        { q:"Where did they have lunch?", options:["At school","At a café","Near a river","At home"], a:"c" },
        { q:"What did they do in the evening?", options:["Played football","Sang songs","Watched TV","Danced"], a:"b" },
        { q:"How does the writer feel about the trip?", options:["It was boring","It was bad","It was the best","It was short"], a:"c" },
      ]
    },
    {
      title: "5. My Favorite Food",
      text: "My favorite food is pizza. I like pizza with cheese, tomato, and mushrooms. My mom makes it every weekend. We eat it while watching movies together. I never get bored of it because it’s delicious.",
      questions: [
        { q:"What is the writer’s favorite food?", options:["Pasta","Pizza","Soup","Salad"], a:"b" },
        { q:"What toppings does the pizza have?", options:["Cheese and tomato","Fish and rice","Egg and milk","Onion and beans"], a:"a" },
        { q:"Who makes the pizza?", options:["The writer","Mother","Father","Friend"], a:"b" },
        { q:"When do they eat pizza?", options:["Every day","On weekends","On holidays","At school"], a:"b" },
        { q:"Why does the writer like pizza?", options:["It’s healthy","It’s cheap","It’s delicious","It’s easy"], a:"c" },
      ]
    },
    {
      title: "6. The Weather Report",
      text: "Today in Astana, the weather is cold and snowy. The temperature is minus ten degrees. Children are playing with snow and making snowmen. Tomorrow it will be sunny but still cold. Don’t forget to wear your warm clothes!",
      questions: [
        { q:"What is the weather like today?", options:["Hot","Windy","Cold and snowy","Sunny"], a:"c" },
        { q:"Where is the story happening?", options:["Almaty","Astana","London","Paris"], a:"b" },
        { q:"What are the children doing?", options:["Sleeping","Studying","Playing with snow","Watching TV"], a:"c" },
        { q:"What will the weather be tomorrow?", options:["Rainy","Sunny","Foggy","Windy"], a:"b" },
        { q:"What should people wear?", options:["Light clothes","Warm clothes","Shorts","Hats only"], a:"b" },
      ]
    },
    {
      title: "7. A Letter from Anna",
      text: "Dear Kate, How are you? I’m having a great time in London. Yesterday I visited the British Museum and saw many interesting things. Tomorrow we will go to the London Eye. The weather is nice, not too cold. See you soon! Love, Anna.",
      questions: [
        { q:"Where is Anna now?", options:["In Astana","In Paris","In London","In Rome"], a:"c" },
        { q:"Who is she writing to?", options:["Her teacher","Her mother","Her friend","Her brother"], a:"c" },
        { q:"What did she visit yesterday?", options:["The zoo","The British Museum","The park","The Tower Bridge"], a:"b" },
        { q:"What will she do tomorrow?", options:["Go shopping","Visit the London Eye","Meet friends","Go home"], a:"b" },
        { q:"How is the weather?", options:["Hot","Cold","Rainy","Nice"], a:"d" },
      ]
    },
    {
      title: "8. My Best Friend",
      text: "My best friend’s name is Alina. She is 13 years old and studies in my class. She is very kind and funny. We always do our homework together and play volleyball after school. I can tell her all my secrets.",
      questions: [
        { q:"What is the friend’s name?", options:["Aruzhan","Amina","Alina","Anna"], a:"c" },
        { q:"How old is she?", options:["12","13","14","15"], a:"b" },
        { q:"What is she like?", options:["Serious","Funny and kind","Angry","Lazy"], a:"b" },
        { q:"What do they do together?", options:["Cook","Do homework","Sing","Draw"], a:"b" },
        { q:"What sport do they play?", options:["Tennis","Football","Volleyball","Basketball"], a:"c" },
      ]
    },
    {
      title: "9. Saving Water",
      text: "Water is very important for life. We use it for drinking, cooking, and cleaning. But many people waste water. You should turn off the tap while brushing your teeth and take shorter showers. Save water to help our planet.",
      questions: [
        { q:"What is water used for?", options:["Only drinking","Drinking and cooking","Only cleaning","Nothing"], a:"b" },
        { q:"What do people sometimes do?", options:["Save water","Waste water","Drink more","Sleep more"], a:"b" },
        { q:"What should you do when brushing teeth?", options:["Keep the tap on","Turn off the tap","Use more water","Ignore it"], a:"b" },
        { q:"Why should we save water?", options:["It’s expensive","It’s fun","To help our planet","To play"], a:"c" },
        { q:"What is the main idea of the text?", options:["Drink more water","Water is not important","We should save water","Take long showers"], a:"c" },
      ]
    },
    {
      title: "10. At the Airport",
      text: "Maria is at the airport with her parents. They are going to fly to Turkey for the holidays. They check in their bags and wait in the departure hall. Maria looks at the planes through the big window. She feels excited and can’t wait to fly!",
      questions: [
        { q:"Where is Maria?", options:["At the station","At the airport","At home","At school"], a:"b" },
        { q:"Who is she with?", options:["Her friends","Her parents","Her teacher","Her brother"], a:"b" },
        { q:"Where are they flying?", options:["To Paris","To Turkey","To Astana","To Almaty"], a:"b" },
        { q:"What is Maria doing?", options:["Sleeping","Eating","Looking at planes","Reading a book"], a:"c" },
        { q:"How does Maria feel?", options:["Bored","Tired","Excited","Angry"], a:"c" },
      ]
    }
  ];

  let currentReading = 0;
  let readingScore = 0;
  const readingContent = document.getElementById("readingContent");

  function showReading() {
    const t = readingData[currentReading];
    readingContent.innerHTML = `
      <h3>${t.title}</h3>
      <p>${t.text}</p>
      ${t.questions.map((qObj, i) => `
        <p><b>${i+1}. ${qObj.q}</b></p>
        ${qObj.options.map((opt, j) => `
          <button class='optBtn' data-opt='${String.fromCharCode(97+j)}'>${opt}</button>
        `).join("<br>")}
      `).join("<br>")}
    `;
    document.querySelectorAll(".optBtn").forEach(btn => {
      btn.onclick = () => checkReading(btn.dataset.opt);
    });
  }

  function checkReading(choice) {
    const correct = readingData[currentReading].questions.find(q => q.a === choice);
    if (correct) readingScore++;
    currentReading++;
    if (currentReading < readingData.length) showReading();
    else {
      readingContent.innerHTML = `
        <h3>🎯 Reading Olympiad Finished!</h3>
        <p>Your score: <b>${readingScore} / ${readingData.length * 5}</b></p>
        <button id='rMenu2'>🏠 Back to Menu</button>
      `;
      document.getElementById("rMenu2").onclick = () => show("menu");
    }
  }

  // Навигация
  document.getElementById("rMenu").addEventListener("click", () => show("menu"));
  document.getElementById("rNext").addEventListener("click", () => {
    currentReading = Math.min(currentReading + 1, readingData.length - 1);
    showReading();
  });
  document.getElementById("rPrev").addEventListener("click", () => {
    currentReading = Math.max(currentReading - 1, 0);
    showReading();
  });

  showReading();
});
