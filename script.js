'use strict';
/*
console.log(document.querySelector('.between').textContent);

document.querySelector('.score').textContent = 30;
document.querySelector('.between').textContent = 'Between (1 and 30)';
console.log(document.querySelector('.between').textContent);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// event and event listeners
// document.querySelector('.score').textContent = 30;
// document.querySelector('.again').textContent = 'Try Again';
/*
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (guess) {
    document.querySelector('.score').textContent = guess;
    document.querySelector('.message').textContent = 'Guess Again...';
  } else {
    document.querySelector('.message').textContent = 'Please Input a Number ⛔';
  }
});


//implementing the guess game
let number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;

let score = 20;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent =
      'Please input a valid number';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 CORRECT!!';
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Not that Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥺 You lost the game';
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 woah, too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥺 You lost the game';
    }
  }
});


// again
let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber, typeof randomNumber);

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
//) let randomNumber = function (number) {
//   Math.trunc(Math.random() * 20 + 1);
// };

let currentScore = 20;
displayScore(currentScore);

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);
  //   when there is no input
  if (!guess) {
    displayMessage('Please Input a Number ⛔');
    //   when input is correct
  } else if (guess === randomNumber) {
    displayMessage('🎉 CORRECT!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;
    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector('.highscore').textContent = highScore;
    }
    //   we refactor our code to get rid of repititive code
  } else if (guess !== randomNumber) {
    if (currentScore > 1) {
      displayMessage(
        guess > randomNumber ? '📈 woah, too High' : '📉Not that Low'
      );
      currentScore--;
      displayScore(currentScore);
    } else {
      displayMessage('🥺 You lost the game!');
    }
  }
});

// activating the again button
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  currentScore = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(randomNumber, typeof randomNumber);
  displayScore(currentScore);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
*/
