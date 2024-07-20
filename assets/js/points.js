document.addEventListener('DOMContentLoaded', (event) => {
  // Function to save highscore
  function saveHighscore(initials, score) {
      // Get existing scores from localStorage or initialize an empty array
      const highscores = JSON.parse(localStorage.getItem('highscores')) || [];

      // Create new score object
      const newScore = {
          initials: initials,
          score: parseInt(score)
      };

      // Add new score to the list
      highscores.push(newScore);

      // Sort scores in descending order and keep only the top 10
      highscores.sort((a, b) => b.score - a.score);
      highscores.splice(10);

      // Save updated scores back to localStorage
      localStorage.setItem('highscores', JSON.stringify(highscores));

      // Redirect to highscores page to refresh the list
      window.location.href = './highscores.html';
  }

  // Display highscores
  function displayHighscores() {
      const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
      const highscoreList = document.getElementById('highscoreList');

      highscores.forEach(function(score) {
          var li = document.createElement('li');
          li.textContent = `${score.initials} - ${score.score}`;
          highscoreList.appendChild(li);
      });
  }

  // Add event listener to the submit button
  document.getElementById('submitButton').addEventListener('click', function(event) {
      event.preventDefault();
      const initials = document.getElementById('initials').value;
      const score = localStorage.getItem('currentScore') || 0;

      if (initials && score) {
          saveHighscore(initials, score);
      }
  });

  // Add event listener to the clear button
  document.getElementById('clearButton').addEventListener('click', function() {
      localStorage.removeItem('highscores');
      document.getElementById('highscoreList').innerHTML = '';
  });

  // Display highscores on page load
  displayHighscores();
});
