// Mathapalooza 2000

// global variables
const questions = {}; 
const startBtn = document.getElementById("start-game");
const checkBtn = document.getElementById("check-btn");
const hintBtn = document.getElementById("hint-btn");
const nextBtn = document.getElementById("next-btn")

// event listeners
startBtn.addEventListener("click", startGame);
checkBtn.addEventListener("click", checkAnswer);
hintBtn.addEventListener("click", hint);
nextBtn.addEventListener("click", nextQuestion);

// functions 
function startGame() {
  console.log("the start button was clicked");

  // delete text in the div id="gamezone__title"

  // set the text in the div id="gamezone__question"
  // diplay question text based on randomly generator number 
};

function checkAnswer() {
  console.log("the check button was clicked");

  // compare input text with answer in obj questions (use same randomNum as index to check)
  // use if statement to display feedback text
  // if correct, display "correct", add points, and display nextBtn
  // if incorrect, display "try again!" and deduct points


};

function hint() {
  console.log("the hint button was clicked");

  // if clicked, display corresponding hint based on randomNum in the feedback text, and deduct point

};

function nextQuestion() {
  console.log("the next button was clicked");

  // set the text in the div id="gamezone__question"
  // diplay question text based on randomly generator number 
  
};