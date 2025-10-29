// =====================================================
// 🧠 AI Bayan Vocabulary Olympiad — A2 (Full 70 Q, Darын Style)
// =====================================================
document.addEventListener("DOMContentLoaded", function () {

  let current = 0;
  let score = 0;
  const sectionScores = {};
  const answers = [];

  // ----------------------------
  // QUESTIONS DATABASE (7 × 10)
  // ----------------------------
  const vocabData = [
    // === SYNONYMS ===
    {cat:"Synonyms", q:"Choose a synonym for 'big'.", options:["large","small","tiny","thin"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'happy'.", options:["glad","sad","angry","bored"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'fast'.", options:["quick","slow","late","lazy"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'begin'.", options:["start","finish","stop","close"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'near'.", options:["close","far","away","distant"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'intelligent'.", options:["smart","lazy","weak","rude"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'angry'.", options:["mad","happy","sleepy","quiet"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'child'.", options:["kid","adult","teacher","baby"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'easy'.", options:["simple","difficult","heavy","hard"], a:0},
    {cat:"Synonyms", q:"Choose a synonym for 'end'.", options:["finish","begin","open","start"], a:0},

    // === ANTONYMS ===
    {cat:"Antonyms", q:"Choose an antonym for 'cold'.", options:["hot","warm","cool","wet"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'easy'.", options:["difficult","soft","simple","light"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'young'.", options:["old","child","baby","new"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'empty'.", options:["full","open","clear","small"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'early'.", options:["late","soon","morning","first"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'beautiful'.", options:["ugly","nice","pretty","lovely"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'rich'.", options:["poor","sad","weak","ill"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'happy'.", options:["sad","glad","good","calm"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'strong'.", options:["weak","heavy","tall","fat"], a:0},
    {cat:"Antonyms", q:"Choose an antonym for 'short'.", options:["tall","small","tiny","thin"], a:0},

    // === PHRASAL VERBS ===
    {cat:"Phrasal Verbs", q:"'Turn on' means...", options:["switch off","start using","throw away","put on clothes"], a:1},
    {cat:"Phrasal Verbs", q:"'Look after' means...", options:["take care of","look for","look at","look up"], a:0},
    {cat:"Phrasal Verbs", q:"'Find out' means...", options:["discover/get information","give up","get up","add up"], a:0},
    {cat:"Phrasal Verbs", q:"'Give up' means...", options:["stop trying","continue","wake up","go on"], a:0},
    {cat:"Phrasal Verbs", q:"'Put on' means...", options:["wear clothes","remove clothes","arrive","fix"], a:0},
    {cat:"Phrasal Verbs", q:"'Take off' means...", options:["remove clothes","start working","go to bed","look at"], a:0},
    {cat:"Phrasal Verbs", q:"'Wake up' means...", options:["stop sleeping","go to sleep","get dressed","sit down"], a:0},
    {cat:"Phrasal Verbs", q:"'Turn off' means...", options:["stop a machine","start a car","clean up","open"], a:0},
    {cat:"Phrasal Verbs", q:"'Pick up' means...", options:["lift or collect","drop down","push away","turn around"], a:0},
    {cat:"Phrasal Verbs", q:"'Go on' means...", options:["continue","stop","go out","break down"], a:0},

    // === ADD ONE OUT ===
    {cat:"Add One Out", q:"Choose the word that is different.", options:["apple","pear","orange","car"], a:3},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["bus","train","car","teacher"], a:3},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["cat","dog","banana","tiger"], a:2},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["Monday","Friday","April","Tuesday"], a:2},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["pen","pencil","eraser","chair"], a:3},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["rain","snow","coffee","sun"], a:2},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["winter","summer","hot","spring"], a:2},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["red","blue","table","green"], a:2},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["bread","milk","rice","computer"], a:3},
    {cat:"Add One Out", q:"Choose the word that is different.", options:["dog","cat","mouse","bus"], a:3},

    // === WORD FORMS ===
    {cat:"Word Forms", q:"There are many ___ in the garden.", options:["child","children","childs","childrens"], a:1},
    {cat:"Word Forms", q:"She is the ___ in her class.", options:["tallest","taller","more tall","tall"], a:0},
    {cat:"Word Forms", q:"He runs ___ than me.", options:["faster","fastly","more fast","most fast"], a:0},
    {cat:"Word Forms", q:"This is the ___ book I have read.", options:["most interesting","more interesting","interestingest","interesting"], a:0},
    {cat:"Word Forms", q:"My dad is a ___ at the hospital.", options:["doctor","doctors","doctoring","a doctors"], a:0},
    {cat:"Word Forms", q:"I have two ___ and one sister.", options:["brother","brothers","brotheres","brothes"], a:1},
    {cat:"Word Forms", q:"The room is ___ than yesterday.", options:["cleaner","more clean","cleany","clearest"], a:0},
    {cat:"Word Forms", q:"She sings ___ than her friend.", options:["better","gooder","best","more good"], a:0},
    {cat:"Word Forms", q:"This test is ___ than the last one.", options:["easier","easyer","more easy","most easy"], a:0},
    {cat:"Word Forms", q:"He is ___ person I know.", options:["the kindest","kinder","most kind","more kind"], a:0},
