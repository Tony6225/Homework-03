
// Word Array
var words = ["black", "magenta", "cyan", "yellow", "green", "purple", "orange", "navy", "pink", "blue", "silver", "gold", "lime", "brown", "white", "gray", "denim", "maroon", "scarlet", "turquoise", "red", "blue"];

// Game variables
var randomWord = "";
var randomWordLength = [];
var wordLines = 0;
var correctLetters = [];
var wrongLetters = [];
var letterGuessed = "";
var winCounter = 0;
var lossCounter = 0;
var guessCounter = 9;

// Functions
function start() {
    guessCounter = 9;
    randomWord = words[Math.floor(Math.random() * words.length)];
    randomWordLength = randomWord.split("");
    wordLines = randomWordLength.length;
    correctLetters = [];
    wrongLetters = [];
    for (var i = 0; i < wordLines; i++) {
        correctLetters.push("_");
    }

    document.getElementById("guessRemaining").innerHTML = guessCounter;
    document.getElementById("wordLines").innerHTML = correctLetters.join(" ");
    document.getElementById("wrongGuess").innerHTML = wrongLetters.join(" ");
}

function verifyGuess(letter) {
    var letterInWord = false;
    for (var i = 0; i < wordLines; i++) {
        if (randomWord[i] === letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (var j = 0; j < wordLines; j++) {
            if (randomWord[j] === letter) {
                correctLetters[j] = letter;
            }
        }
    }

    else {
        wrongLetters.push(letter);
        guessCounter--;
    }
}

function complete() {
    document.getElementById("guessRemaining").innerHTML = guessCounter;
    document.getElementById("wordLines").innerHTML = correctLetters.join(" ");
    document.getElementById("wrongGuess").innerHTML = wrongLetters.join(" ");

    if (randomWordLength.toString() === correctLetters.toString()) {
        winCounter++;
        alert("You win! :)");
        document.getElementById("wins").innerHTML = winCounter;
        start();
    }

    else if (guessCounter === 0) {
        lossCounter++;
        alert("Try Again! :(");
        document.getElementById("losses").innerHTML = lossCounter;
        start();
    }

}

start();
document.onkeyup = function (event) {
    letterGuessed = String.fromCharCode(event.which).toLowerCase();
    verifyGuess(letterGuessed);
    complete();
};