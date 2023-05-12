import { Gradient } from './Gradient.js';
// Create your instance
export let gradient = new Gradient();

// Call `initGradient` with the selector to your canvas
gradient.initGradient('#gradient-canvas');

let rock = document.querySelector('.rock');

let paper = document.querySelector('.paper');

let scissors = document.querySelector('.scissors');

let winner = document.getElementById('winner');

let winnerName = document.getElementById('winnerName');

let tie = document.getElementById('tie');

let playerScore = document.querySelector('.playerScore');

let compScore = document.querySelector('.compScore');

let comp = document.querySelector('.comp');

let compDisplay = document.querySelector('.compDisplay');

let reset = document.getElementById('resetScores');

let playerChoice;

let options = {
    1: '🪨',
    2: '📰',
    3: '✂️'
};

function game(event) {
    playerChoice = +event.target.dataset.player;
    let compChoice = Math.floor((Math.random() * 3) + 1);
    comp.style.display = 'block';
    compDisplay.innerText = options[compChoice];
    if (playerChoice == compChoice) {
        winner.style.display = 'none';
        tie.style.display = 'block';
    } else if (
        (playerChoice == 1 && compChoice == 3) ||
        (playerChoice == 2 && compChoice == 1) ||
        (playerChoice == 3 && compChoice == 2)
    ) {
        winnerName.innerText = 'You ';
        winner.style.display = 'block';
        tie.style.display = 'none';
        playerScore.innerText = +playerScore.innerText + 1;
    } else {
        winnerName.innerText = 'Computer ';
        winner.style.display = 'block';
        tie.style.display = 'none';
        compScore.innerText = +compScore.innerText + 1;
    }
}

function clear() {
    winner.style.display = 'none';
    comp.style.display = 'none';
    tie.style.display = 'none';
    playerScore.innerText = 0;
    compScore.innerText = 0;
}

rock.addEventListener('click', game);

paper.addEventListener('click', game);

scissors.addEventListener('click', game);

reset.addEventListener('click', clear);