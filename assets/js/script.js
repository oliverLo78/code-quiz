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

localStorage.setItem("questions", JSON.stringify(questions));

// Variables to keep track of quiz state
let randomQuestions, currentQuestion = 0;
let score = 0;
let time = 60;
let timerId;

// Variables to reference DOM elements
var questionsEl = document.getElementById('questions');
var startScreenEl = document.getElementById('startScreen');
var lastScreenEl = document.getElementById('last-screen');
var questionTextEl = document.querySelector('#questionText');
var answerChoiceEl = document.querySelector('#choices');
var startButtonEl = document.querySelector('#startButton');
var feedBackElement = document.getElementById('feedback');
var timerEl = document.querySelector('.timer');

// Retrieve questions from localStorage
const storedQuestions = localStorage.getItem('questions');
if (storedQuestions) {
  randomQuestions = JSON.parse(storedQuestions);
} else {
  randomQuestions = [];
}

function startQuiz() {
  // Hide start screen and unhide questions screen
  startScreenEl.classList.add('hide');
  questionsEl.classList.remove('hide');

  // Shuffle quiz questions
  randomQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestion = 0;
  score = 0;
  time = 60;

  // Start timer
  startTimer();
  getQuestion();
}

function resetState() {
  while (answerChoiceEl.firstChild) {
    answerChoiceEl.removeChild(answerChoiceEl.firstChild);
  }
}

function getQuestion() {
  resetState();
  displayQuestion(randomQuestions[currentQuestion]);
}

function displayQuestion(question) {
  // Update title with current question
  questionTextEl.innerText = question.questionText;

  // Create new buttons for each choice
  question.choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerText = choice.text;
    button.classList.add('clearButton', 'buttonAnswer');
    button.addEventListener('click', selectAnswer);
    button.dataset.correct = choice.correct;
    answerChoiceEl.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === 'true';

  if (correct) {
    score++;
    feedBackElement.textContent = "Correct!";
  } else {
    time -= 10;
    feedBackElement.textContent = "Wrong!";
  }

  currentQuestion++;
  if (currentQuestion < randomQuestions.length) {
    getQuestion();
  } else {
    quizEnd();
  }
}

function startTimer() {
  timerId = setInterval(() => {
    if (time > 0) {
      time--;
      timerEl.textContent = time + 's';
    } else {
      clearInterval(timerId);
      quizEnd();
    }
  }, 1000);
}

function quizEnd() {
  clearInterval(timerId);
  questionsEl.classList.add('hide');
  lastScreenEl.classList.remove('hide');
  document.getElementById('finalScore').textContent = score;
}

function saveHighscore() {
  var initials = document.getElementById('initials').value;
  if (initials === "") return;

  const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
  const newScore = { score: score, initials: initials };

  highscores.push(newScore);
  highscores.sort((a, b) => b.score - a.score);
  highscores.splice(10);

  localStorage.setItem('highscores', JSON.stringify(highscores));
  window.location.href = 'highscores.html';
}

// Event listeners
document.getElementById('startButton').addEventListener('click', startQuiz);
document.getElementById('submitButton').addEventListener('click', saveHighscore);

