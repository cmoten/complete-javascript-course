'use strict';
//Initial loading of page
let secretNumber = Math.trunc(Math.random() * 20) + 1; //number to guess

let score = 20;
let highScore = 0;

const formatMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    formatMessage('⚠️ No Number!');

    //When player wins
  } else if (guess === secretNumber) {
    formatMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //Guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      formatMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      formatMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Play the game again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  formatMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
