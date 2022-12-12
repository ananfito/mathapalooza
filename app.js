// Mathapalooza 2000

// GLOBAL VARIABLES
const questions = {
  question: ["248 + (-1027) = ?", "818 - (-1021) = ?", "-321 - 857 = ?", "What is 624 divided by 6?", "What is 56 divided by -8?", "What is -42 divided by -7?", "What is 4/5 as a decimal?", "What is the cube root of 512?", "What is 9 squared?", "What is 1 5/8 as a decimal?"],
  hint: ["HINT: Adding a negative number is the same as subtracting a positive number.", "HINT: Subtractiing a negative number is the same as adding a positive number.", "HINT: Subtracting a positive number from a negative number is the same as adding two negative numbers.", "HINT: Use the Long Division algorithm to compute the quotient.", "HINT: A positive number multiplied by or divided by a negative number will result in a negative number.", "HINT: A negative number multiplied by or divided by a negative number will result in a negative number.", "HINT: Use the Long Division algorithm to compute the quotient. Remember to divided the denominator into the numerator.", "HINT: What number times itself three times is 512?", "HINT: To square a number you must multiply it by itself.", "HINT: Use the Long Division algorithm to compute the quotient. Remember to divided the denominator into the numerator."],
  answer: [-779, 1839, -908, 104, -7, 6, 0.8, 8, 81, 1.625]
}
var points = 0;
let randomNum = Math.floor( Math.random() * questions["question"].length);
let answerCorrect = false;
let hintGiven = false;
let gameOver = false;
let count = 0;

// buttons 
const startBtn = document.getElementById("start-game");
const checkBtn = document.getElementById("check-btn");
const hintBtn = document.getElementById("hint-btn");
const nextBtn = document.getElementById("next-btn");

// page elements
const gamezoneTitle = document.getElementById("gamezone__title");
const gamezoneQuestion = document.getElementById("gamezone__question")
const questionTxt = document.getElementById("gamezone__question-text");
const pointsTxt = document.getElementById("gamezone__points");
const feedbackTxt = document.getElementById("gamezone__question--feedback");
const inputAnswer = document.getElementById("gamezone__question--input");

// EVENT LISTENERS
startBtn.addEventListener("click", startGame);
checkBtn.addEventListener("click", checkAnswer);
hintBtn.addEventListener("click", hint);
nextBtn.addEventListener("click", nextQuestion);

// FUNCTIONS 
function startGame() {
  randomNum = Math.floor( Math.random() * questions["question"].length);
  gamezoneTitle.innerText = "";
  gamezoneQuestion.setAttribute("style", "");
  pointsTxt.innerText = `Points: ${points}`;
  questionTxt.innerText = questions["question"][randomNum];
  inputAnswer.value = "";
};

function checkAnswer() {
  if (gameOver == false && answerCorrect == false && count < 2) {
    if (inputAnswer.value == questions["answer"][randomNum]) {
      answerCorrect = true;
      feedbackTxt.innerText = "Correct!";
      nextBtn.setAttribute("style", "");
      points += 10;
      pointsTxt.innerHTML = `Points: ${points}`;
    } else {
      points -= 5;
      pointsTxt.innerHTML = `Points: ${points}`;
      feedbackTxt.innerText = "Try again!";
    };
  } else {
    feedbackTxt.innerText = `Congrat! You won ${points} points!`;
  };
};

function hint() {
  if (answerCorrect === false && hintGiven === false && gameOver === false) {
    hintGiven = true;
    points -= 2;
    pointsTxt.innerHTML = `Points: ${points}`;
    feedbackTxt.innerText = questions["hint"][randomNum];
  };
};

function nextQuestion() {
  count += 1;
  answerCorrect = false;
  hintGiven = false;
  inputAnswer.value = "";
  randomNum = Math.floor( Math.random() * questions["question"].length);
  nextBtn.setAttribute("style", "visibility: hidden;");
  feedbackTxt.innerText = "";
  questionTxt.innerText = questions["question"][randomNum];
  
};