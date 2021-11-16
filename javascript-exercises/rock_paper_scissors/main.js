console.log('Welcome to Rock-Paper-Scissors!')


const OPTIONS = ['Paper', 'Rock', 'Scissors'];


// Get user selection
let playerSelection = toTitleCase(prompt("Please enter your choice."));
console.log(`playerSelection: %s`, playerSelection);

let playerSelectionID = OPTIONS.indexOf(playerSelection);
console.log(`playerSelectionID: %s`, playerSelectionID);


// Get computer selection
let computerSelection = computerPlay();
console.log(`computerSelection: %s`, computerSelection);

let computerSelectionID = OPTIONS.indexOf(computerSelection);
console.log(`computerSelectionID: %s`, computerSelectionID);


console.log(playRound(playerSelectionID, computerSelectionID));


function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}


function computerPlay() {
    // Randomly return one of three OPTIONS:
    let choice = OPTIONS[Math.floor(Math.random()*3)];
    return choice;
}


// Provide the OPTIONS id to the round, not the string value
function playRound(playerSelectionID, computerSelectionID) {
    // If values match, it's a tie
    if (playerSelectionID == computerSelectionID) {
        return `Both players choose ${OPTIONS[playerSelectionID]}; it's a tie.`;
    }
    // Else If Player < Computer OR Player is Scissors and Computer is Paper, player wins
    else if ( ( playerSelectionID < computerSelectionID ) || ( (playerSelectionID == 2) && ( computerSelectionID == 0) ) ) {
        return `Player wins! ${OPTIONS[playerSelectionID]} beats ${OPTIONS[computerSelectionID]}`;
    }
    else {
        return `Computer wins! ${OPTIONS[computerSelectionID]} beats ${OPTIONS[playerSelectionID]}`;
    }
}
