console.log('Welcome to Rock-Paper-Scissors!')


const OPTIONS = ['Paper', 'Rock', 'Scissors'];


game();


// run the game for 5 rounds
function game() {
    let player_wins = 0;
    let computer_wins = 0;
    for (let ctr=0; ctr < 5; ctr++) {

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


        result = playRound(playerSelectionID, computerSelectionID);
        if (result == 1) {
            player_wins++;
        }
        else if (result == -1) {
            computer_wins++;
        }
    }
    console.log('GAME OVER! After 5 rounds...');
    let ties = 5 - player_wins - computer_wins;
    console.log(`Player won ${player_wins}, Computer won ${computer_wins}, and ${ties} tie rounds.`);
}



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
// For each round, return 1 for player win, -1 for computer, and 0 if a tie
function playRound(playerSelectionID, computerSelectionID) {
    // If values match, it's a tie
    if (playerSelectionID == computerSelectionID) {
        console.log(`Both players choose ${OPTIONS[playerSelectionID]}; it's a tie.`);
        return 0;
    }
    // Else If Player < Computer OR Player is Scissors and Computer is Paper, player wins
    else if ( ( playerSelectionID < computerSelectionID ) || ( (playerSelectionID == 2) && ( computerSelectionID == 0) ) ) {
        console.log(`Player wins! ${OPTIONS[playerSelectionID]} beats ${OPTIONS[computerSelectionID]}`);
        return 1;
    }
    else {
        console.log(`Computer wins! ${OPTIONS[computerSelectionID]} beats ${OPTIONS[playerSelectionID]}`);
        return -1;
    }
}
