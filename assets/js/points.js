// points.js

function saveHighscore(initials, score) {
  // Get existing scores from localStorage or initialize an empty array
  const highscores = JSON.parse(localStorage.getItem('highscores')) || [];

  // Create new score object
  const newScore = {
      initials: initials,
      score: score
  };

  // Add new score to the list
  highscores.push(newScore);

  // Sort scores in descending order and keep only the top 10
  highscores.sort((a, b) => b.score - a.score);
  highscores.splice(10);

  // Save updated scores back to localStorage
  localStorage.setItem('highscores', JSON.stringify(highscores));
}

// Add event listener to the submit button
document.getElementById('submitButton').addEventListener('click', function() {
  const initials = document.getElementById('initials').value;
  const score = document.getElementById('finalScore').textContent;

  if (initials && score) {
      saveHighscore(initials, score);
      window.location.href = './highscores.html'; // Redirect to highscores page
  }
});

// Add event listener to the clear button
document.getElementById('clearButton').addEventListener('click', function() {
  localStorage.removeItem('highscores');
  window.location.reload();
});