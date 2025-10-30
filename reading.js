// ------------------------------
// AI Bayan Reading Trainer 2025 — Level A2 (Olympiad Edition)
// ------------------------------

let currentReading = 0;
let currentScore = 0;

// ==============================
// 3 sample texts (you can expand to 12)
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
      { q: "Is it her first trip abroad?", options: ["
