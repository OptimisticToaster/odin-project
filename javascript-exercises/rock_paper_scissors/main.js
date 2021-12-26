/**
 * Run a game of Rock-Paper-Scissors
 */
class RockPaperScissors {

    constructor() {
        this.rounds = 0;
        this.playerScore = 0;
        this.playerSelectionID = null;
        this.computerScore = 0;
        this.computerSelectionID = null;
        // use lowercase options ids, but user-interface converts to title case
        this.OPTIONS = ['paper', 'rock', 'scissors'];
        this.setupChoiceListeners();
    }

    /**
     * Setup 'click' event listener on each choice button
     */
     setupChoiceListeners() {
        const buttons = document.querySelectorAll('.choice_button');
        // buttons.forEach(button => button.addEventListener('click', this.playRound));
        buttons.forEach(button => {
            button.addEventListener('click', event => {
                this.playerSelectionID = this.OPTIONS.indexOf(button.id);
                this.playRound();
            });

        });
    }

    /**
     * Convert string to title case.
     * 
     * @param {String} string to convert
     * @return {String} string after conversion
     */
    toTitleCase(str) {
        return str.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }

    /**
     * Have computer make selection.
     * Since the system uses IDs internall, just choose random number 0-2.
     */
    computerPlay() {
        this.computerSelectionID = Math.floor(Math.random()*3);
    }

    /**
     * Determine winner for a round
     * Increment the appropriate score.
     */
    determineRoundWinner() {
        // If values match, it's a tie
        if (this.playerSelectionID == this.computerSelectionID) {
            console.log(`Both players choose ${this.OPTIONS[this.playerSelectionID]}; it's a tie.`);
            return 'tie';
        }
        // Else If Player < Computer OR Player is Scissors and Computer is Paper, player wins
        else if ( ( this.playerSelectionID < this.computerSelectionID ) || ( (this.playerSelectionID == 2) && ( this.computerSelectionID == 0) ) ) {
            console.log(`Player wins! ${this.OPTIONS[this.playerSelectionID]} beats ${this.OPTIONS[this.computerSelectionID]}`);
            this.playerScore++;
            return 'player';
        }
        else {
            console.log(`Computer wins! ${this.OPTIONS[this.computerSelectionID]} beats ${this.OPTIONS[this.playerSelectionID]}`);
            this.computerScore++;
            return 'computer';
        }
    }
    

    /**
     * Play a round of the game.
     */
    playRound() {
        this.rounds++;
        console.log(`Starting round #${this.rounds}`);
        console.log(`Player selected: ${this.OPTIONS[this.playerSelectionID]}`);
        this.computerPlay();
        console.log(`Computer selected: ${this.OPTIONS[this.computerSelectionID]}`);

        // determine winner
        let winner = this.determineRoundWinner();

        // show score
        // console.log(`Score is: ${this.computerScore} Computer to ${this.playerScore} Player`);
        document.getElementById('winner').innerText = this.toTitleCase(winner);
        document.getElementById('score').innerHTML = `After ${this.rounds} rounds, the score is:<br>${this.computerScore} Computer to ${this.playerScore} Player`;

    }

}

let g = new RockPaperScissors();
