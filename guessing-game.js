//Readline module
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//Number of attempts
let numAttempts;
//secret number
let secretNumber;

function askLimit() {
    rl.question('Enter the number of limits you can complete the game in: ', answer => {
        numAttempts = answer;
        console.log(`Good Luck in guessing the number in ${numAttempts} attempts...`);

        askRange();
    });
}


//Getting a random number between two integer values
const randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const askRange = function() {
    rl.question('Enter a min number: ', answer => {
        let min = Number(answer);
        rl.question('Enter a max number: ', answer => {
            let max = Number(answer);
            console.log(`I'm thinking of a number between ${min} and ${max}...`);
            secretNumber = randomInRange(min, max);

            askGuess();

            // rl.close();
        })
    })
}

// const secretNumber = randomInRange(0, 100);


//Checking User Guess vs the randomNumber
const checkGuess = (guessedNumber) => {
    if (guessedNumber > secretNumber) {
        console.log('Too High...');
        return false;
    } else if (guessedNumber < secretNumber) {
        console.log('Too Low...');
        return false;
    } else {
        console.log('Correct!!!');
        return true;
    }
};


//Asking the user to input a guess and check if the guess is correct
const askGuess = function() {
    rl.question('Enter a guess: ', answer => {
        let userGuess = Number(answer);
        let guessIsCorrect = checkGuess(userGuess, secretNumber);

        if (guessIsCorrect) {
            console.log('You Win!!!');
            rl.close();
        } else {
            numAttempts--;
            if (numAttempts > 0) {
                askGuess(secretNumber);
            } else {
                console.log('You Lose T_T...');
                rl.close();
            }
        }
    });
}


//Testing checkGuess function functionality
// checkGuess(0);
// checkGuess(20);
// checkGuess(30);
// checkGuess(32);
// checkGuess(40);
// checkGuess(50);
// checkGuess(100);


//Testing AskGuess function functionality in the terminal
// askGuess();


//Testing randomInRange function functionality
// console.log(randomInRange(5, 20));


//Testing askRange function functionality
// askRange();


askLimit();
