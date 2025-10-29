// ------------------------------
// 🎧 AI Bayan Listening Olympiad — A2 (fixed)
// ------------------------------
const listeningData = [
  { title:"1. At the Library",
    audio:"https://cdn.pixabay.com/download/audio/2022/10/31/audio_b7c0e9a03f.mp3?filename=calm-reading-room-12410.mp3",
    q:"Where is the speaker?", options:["At a restaurant","At the library","At the park","At school"], a:"b" },
  { title:"2. The Weather",
    audio:"https://cdn.pixabay.com/download/audio/2021/09/20/audio_3b88c9b9b2.mp3?filename=rain-and-thunder-ambient-8633.mp3",
    q:"What is the weather like?", options:["Sunny","Rainy","Windy","Snowy"], a:"b" },
  { title:"3. At the Airport",
    audio:"https://cdn.pixabay.com/download/audio/2022/03/15/audio_2e48f6c203.mp3?filename=airport-announcement-ambient-14526.mp3",
    q:"Where are the people?", options:["In a shop","At the airport","At home","In a cinema"], a:"b" },
  { title:"4. Morning Routine",
    audio:"https://cdn.pixabay.com/download/audio/2022/03/09/audio_5f3b602d8c.mp3?filename=morning-birds-and-cooking-14340.mp3",
    q:"What does the boy do in the morning?", options:["Plays football","Eats breakfast","Goes shopping","Sleeps"], a:"b" },
  { title:"5. A Trip to the Zoo",
    audio:"https://cdn.pixabay.com/download/audio/2021/08/04/audio_81b4efb9e7.mp3?filename=zoo-animals-soundscape-7548.mp3",
    q:"Where are the children?", options:["At the park","At the zoo","At home","At school"], a:"b" },
  { title:"6. In the Classroom",
    audio:"https://cdn.pixabay.com/download/audio/2021/09/20/audio_9e3f6f2734.mp3?filename=students-in-classroom-8638.mp3",
    q:"What are the students doing?", options:["Sleeping","Reading","Cooking","Running"], a:"b" },
  { title:"7. Visiting Grandma",
    audio:"https://cdn.pixabay.com/download/audio/2022/01/17/audio_267cb1e5a4.mp3?filename=family-talking-ambient-10479.mp3",
    q:"Who are they visiting?", options:["Their teacher","Their grandma","Their friend","Their neighbor"], a:"b" },
  { title:"8. At the Restaurant",
    audio:"https://cdn.pixabay.com/download/audio/2021/09/20/audio_25e2d4ac74.mp3?filename=restaurant-ambience-8631.mp3",
    q:"Where are the people?", options:["At home","At a restaurant","At the airport","At the library"], a:"b" },
  { title:"9. The Birthday Party",
    audio:"https://cdn.pixabay.com/download/audio/2021/09/20/audio_cce1986c23.mp3?filename=kids-party-8630.mp3",
    q:"What is the event?", options:["A concert","A lesson","A birthday party","A trip"], a:"c" },
  { title:"10. Shopping Day",
    audio:"https://cdn.pixabay.com/download/audio/2021/09/20/audio_23e0b9a0c6.mp3?filename=shopping-mall-ambience-8636.mp3",
    q:"Where is the woman?", options:["In a park","At home","At the shopping mall","In the kitchen"], a:"c" },
];

let currentListening = 0;
let listeningScore = 0;

const listeningContent = document.getElementById("listeningContent");

function showListening(){
  const t = listeningData[currentListening];
  listeningContent.innerHTML = `
    <h3>${t.title}</h3>
    <audio controls><source src="${t.audio}" type="audio/mpeg"></audio>
    <p>${t.q}</p>
    ${t.options.map((opt,i)=>(
      `<button class='optBtn' data-opt='${String.fromCharCode(97+i)}'>${opt}</button>`
    )).join("<br>")}
  `;
  document.querySelectorAll(".optBtn").forEach(btn=>{
    btn.onclick = ()=> checkListening(btn.dataset.opt);
  });
}

function checkListening(choice){
  const correct = listeningData[currentListening].a;
  if (choice === correct){ listeningScore++; try{ new Audio("sound/ding.wav").play(); }catch(e){} }
  currentListening++;
  if (currentListening < listeningData.length){ showListening(); }
  else {
    listeningContent.innerHTML = `
      <h3>🎧 Finished!</h3>
      <p>Your score: <b>${listeningScore} / ${listeningData.length}</b></p>
      <button id='lMenu2'>🏠 Back to Menu</button>
    `;
    document.getElementById("lMenu2").onclick = ()=> show("menu");
  }
}

// Навигация
document.getElementById("lMenu").addEventListener("click", ()=> show("menu"));
document.getElementById("lNext").addEventListener("click", ()=>{
  currentListening = Math.min(currentListening+1, listeningData.length-1);
  showListening();
});
document.getElementById("lPrev").addEventListener("click", ()=>{
  currentListening = Math.max(currentListening-1, 0);
  showListening();
});

showListening();



