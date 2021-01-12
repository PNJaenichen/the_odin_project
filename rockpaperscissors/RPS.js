function computerPlay() {
    let moves = ["Rock","Paper","Scissors"];
    return moves[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return [0, "It was a tie!"];
    } 
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return [-1, 'You lost! Paper beats Rock!'];
        } else {
            return [1, 'You won! Rock beats Scissors!'];
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return [-1, 'You lost! Scissors beats Paper!'];
        } else {
            return [1, 'You won! Paper beats Rock!'];
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return [-1, 'You lost! Rock beats Scissors!'];
        } else {
            return [1, 'You won! Scissors beats Paper!'];
        }
    } else {
        return 'Are you sure you are playing Rock, Paper, Scissors?';
    }
}

function game(length) {
    let finalScore = [0,0];
    for (let i = 0; i < length; i++) {
        let playerSelection = window.prompt('Rock, Paper, or Scissors?');
        let winner = playRound(playerSelection, computerPlay());
        if (winner[0] == -1) {
            finalScore[1] += 1;
        } else if (winner[0] == 1) {
            finalScore[0] += 1;
        } 
        console.log(winner[1]);
    }
    return finalScore;
}

let endGame = game(5);
if (endGame[0] > endGame[1]) {
    console.log('The final score was ' + endGame[0] + '-' + endGame[1] +
    ', and you won!');
} else if (endGame[0] < endGame[1]) {
    console.log('The final score was ' + endGame[0] + '-' + endGame[1] +
    ', and you lost!');
} else {
    console.log('The final score was ' + endGame[0] + '-' + endGame[1] +
    ', and you tied!');
}
