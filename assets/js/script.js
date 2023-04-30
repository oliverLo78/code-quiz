var questions = [
  {
    questionText: "What type of API components are used to interact with user's web browser?",
    choices: [
      {text: 'methods', correct: false}, 
      {text: 'properties', correct: false},
      {text: 'events', correct: false},
      {text: 'URLs', correct: false},
      {text: 'All of the above', correct: true}
    ]
  },
  {
    questionText: "What does the DOM create objects of that we can model from the real world?",
    choices: [
      {text: 'server', correct: false},
      {text: 'car', correct: false},
      {text: 'frame', correct: false},
      {text: 'tree', correct: true}
    ]
  },
  {
    questionText: "Select one of the key principles in computational thinking?",
    choices: [
      {text: 'strings', correct: false},
      {text: 'booleans', correct: false},
      {text: 'algorithms', correct: true},
      {text: 'numbers', correct: false}
    ]
  },
  {
    questionText: "Google Chrome DevTools allows you inspect, DOM elements, log messages to console, and  ",
    choices: [
      {text: 'run the command line', correct: false},
      {text: 'view and edit local storage', correct: true},
      {text: 'reboot your desktop', correct: false},
      {text: 'update social media status', correct: false}
    ]
  }
];

localStorage.setItem("questions", JSON.stringify(questions))

// variables to keep track of quiz state
let randomQuestions, currentQuestion;

    // looping through an array of currentQuestion
    // time
    // timerId

    // currentQuestion
    // time
    // timerId



// variables to reference DOM elements
var questionsEl = document.getElementById('questions');
var startScreenEl = document.getElementById('startScreen');
var lastScreenEl = document.getElementById('last-screen');
var questionTextEl = document.getElementById('questionText');
var answerChoiceEl = document.getElementById('choices');
var startButtonEl = document.getElementById('startButton');
var feedBackElement = document.getElementById('feedback');
var timerEl = document.getElementById('timer');


var questionScreen = document.getElementById('questionContainer');


function startQuiz() {
  // hide start screen and unhides questions screen
  startScreenEl.classList.add('hide');
  questionTextEl.classList.remove('hide');

  // random quiz questions 
  randomQuestions = questions.sort(() => Math.random() -.5)
  currentQuestion = 0
  // start timer
  clockTick()
  getQuestion();
}

// define resetState function 
function resetState() {
  startScreenEl.classList.add('hide');
  while (answerChoiceEl.firstChild) {
    answerChoiceEl.removeChild(answerChoiceEl.firstChild);
  }
}

/// FUNCTION TO GET/SHOW EACH QUESTION ///
function getQuestion() {
  resetState()
  displayQuestion(randomQuestions[currentQuestion])
}

function displayQuestion(questions) {
  // get current question object from array
  if (currentQuestion > 3) {
    lastScreenEl.classList.add('stopTime')
    questionsEl.classList.add('hide');
    lastScreenEl.classList.remove('hide');
    document.getElementById('finalScore').innerHTML = counter.innerHTML
}
   // update title with current question
    questionTextEl.innerText = questions.questionText;
    questions.choices.forEach(choices => {
      const button = document.createElement('button')
      button.innerText = choices.text
      button.classList.add('buttonLook', 'buttonAnswer')
      if (choices.correct === true) {
        button.classList.add('correct')
      }
      var selectAnswer = document.createElement("P");
      document.body.appendChild(selectAnswer);
      button.addEventListener('click', selectAnswer)
      // create new button for each choice
      answerChoiceEl.appendChild(button)
      })
    }
 
function refreshQuiz() {
  while (answerChoiceEl.firstChild) {
    answerChoiceEl.removeChild(answerChoiceEl.firstChild)
  }
}

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
  document.getElementById('submitButton').addEventListener('click', saveHighscore)
  // user clicks button to start quiz
  document.getElementById('startButton').addEventListener('click', startQuiz)
  
