var questions = [
  {
      questionText: "What type of API components are used to interact with user's web browser?",
      answerText: ['methods', 'properties', 'events', 'URLs', 'All of the above'],
      correctText: 'All of the above' 
  },

  {
      questionText: "What does the DOM create objects of that we can model from the real world?",
      answerText: ['server', 'car', 'frame', 'tree'],
      correctText: 'tree'
  },

  {
      questionText: "Select one of the key principles in computational thinking?",
      answerText: ['strings', 'booleans', 'algorithms', 'numbers' ],
      correctText: 'algorithms'

  },

  {
      questionText: "Google Chrome DevTools allows you inspect, DOM elements, log messages to console, and  "
      answerText: ['run the command line', 'view and edit local storage', 'reboot your desktop', 'update social media status'],
      correctText: 'view and edit local storage'

  },
  
    localStorage.setItem("questions", JSON.stringify(questions));
];


// variables to keep track of quiz state
let correctText;
let questionText;
let pointsTotal = 99;
let quizQuestions;
let currentQuestion = 0;
let answerText;

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// 


    // looping through an array of currentQuestion
    // time
    // timerId
// variables to keep track of quiz state
    // currentQuestion
    // time
    // timerId



// variables to reference DOM elements
var questionsEl = document.getElementById('questions');
var startButton = document.getElementById('startButton');
var feedBackElement = document.getElementById('feedback');

// var startQuiz = document.getElementById('answerButton');
// var startScreen = document.getElementById("startScreen");
// var answerText = document.querySelector("answerText");
// var correctCount = document.querySelector("correctCount");
 var questionScreen = document.getElementById('questionContainer');


/// FUNCTION TO START THE QUIZ
function startQuiz() {
  var startScreen = document.getElementById('start screen');
  // hide start screen
  // startScreen.setAttribute('class', 'hide');
  document.getElementById('startButton').style.display = 'none';

  // un-hide questions section
  startScreen.removeAttribute('class', 'hide');
  var questionContainer = document.getElementById('questions');
  questionContainer.style.display = 'block';
  // start timer

  // show starting time

  getQuestion(currentQuestion);
  clockTick();
}
startButton.addEventListener('click', startQuiz);

/// FUNCTION TO GET/SHOW EACH QUESTION ///
function getQuestion(currentQuestion) {
  // get current question object from array
  localStorage.setItem("questions", JSON.stringify(questions));
  const timer = setInterval(myGreeting, 1000);
  // update title with current question
  document.getElementById('questionText').textContent = questions[currentQuestion].title;
  // clear out any old question choices

  // loop over choices
  var currentQuestion;
  for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
    console.log(questions[currentQuestion].answerText[i]);

  }
    // FOR {
      // create new button for each choice
      var button = document.createElement("button");
      // display on the page
      button.textContent = "alerts ";
      
    // } 
}

startButton.addEventListener("click", startQuiz);

/// FUNCTION FOR CLICKING A QUESTION ///
function questionClick(event) {
   currentQuestion.addEventListener("click", function(event) {
    
    console.log("question click");
    console.log(this.value);
  
  // if the clicked element is not a choice button, do nothing.
  if (this.value  !== question[currentQuestion].answerText) {
    feedBackElement.textContent = "Incorrect..";
  } else {
    feedBackElement.textContent = "Correct...";
  }

  if (something) {
  // check if user guessed wrong
    // penalize time

    // display new time on page

    // give them feedback, letting them know it's wrong
    displayMessage("incorrect!");
  } else {
    // give them feedback, letting them know it's right
  } displayMessage("correct!");

  // flash right/wrong feedback on page for a short period of time

  // move to next question
   
  // check if we've run out of questions
    // if so, end the quiz
    // else, get the next question
  });
}

/// FUNCTION TO END THE QUIZ ///
function quizEnd() {
  // stop timer

  // show end screen

  // show final score

  // hide questions section
}

/// FUNCTION FOR UPDATING THE TIME ///
function clockTick() {
  // update time
  // make a spot in the timer in my HTML 
  var count = 60;
  function countDown() {
    var timer = document.getElementById("Time");
      count--;  
      timer.textContent = count;
  }
  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box - for initials

  // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to localstorage

    // redirect to next page
}

/// CLICK EVENTS ///
  // user clicks button to submit initials

  // user clicks button to start quiz

  // user clicks on element containing choices
// Variables to reference DOM elements
var questionEl = document.getElementById('questions');
startButton.addEventListener('click', startQuiz);