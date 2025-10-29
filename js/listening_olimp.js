// ------------------------------
// 🎧 AI Bayan Listening Olympiad — A2 (final fixed)
// ------------------------------
document.addEventListener("DOMContentLoaded", function() {

  const listeningData = [
    { title:"1. At the Library", audio:"sound/library.mp3",
      q:"Where is the speaker?", options:["At a restaurant","At the library","At the park","At school"], a:"b" },
    { title:"2. The Weather", audio:"sound/weather.mp3",
      q:"What is the weather like?", options:["Sunny","Rainy","Windy","Snowy"], a:"b" },
    { title:"3. At the Airport", audio:"sound/airport.mp3",
      q:"Where are the people?", options:["In a shop","At the airport","At home","In a cinema"], a:"b" },
    { title:"4. Morning Routine", audio:"sound/morning.mp3",
      q:"What does the boy do in the morning?", options:["Plays football","Eats breakfast","Goes shopping","Sleeps"], a:"b" },
    { title:"5. A Trip to the Zoo", audio:"sound/zoo.mp3",
      q:"Where are the children?", options:["At the park","At the zoo","At home","At school"], a:"b" },
    { title:"6. In the Classroom", audio:"sound/classroom.mp3",
      q:"What are the students doing?", options:["Sleeping","Reading","Cooking","Running"], a:"b" },
    { title:"7. Visiting Grandma", audio:"sound/grandma.mp3",
      q:"Who are they visiting?", options:["Their teacher","Their grandma","Their friend","Their neighbor"], a:"b" },
    { title:"8. At the Restaurant", audio:"sound/restaurant.mp3",
      q:"Where are the people?", options:["At home","At a restaurant","At the airport","At the library"], a:"b" },
    { title:"9. The Birthday Party", audio:"sound/party.mp3",
      q:"What is the event?", options:["A concert","A lesson","A birthday party","A trip"], a:"c" },
    { title:"10. Shopping Day", audio:"sound/shopping.mp3",
      q:"Where is the woman?", options:["In a park","At home","At the shopping mall","In the kitchen"], a:"c" }
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
    if (choice === correct){
      listeningScore++;
      try { new Audio("sound/ding.wav").play(); } catch(e){}
    }
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

  // Navigation
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
});
