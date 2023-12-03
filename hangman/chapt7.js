// Interacting with a Player

// Creating a Prompt

// var name = prompt("What's your name?");
// console.log("Hello " + name);

// Using confirm to Ask a Yes or No Question
// var like_cats = confirm("Do you like cats?");
// if (like_cats){
//     console.log("You are a cool cat!");
// } else {
//     console.log("Yeah, that's fine. You are still cool!");
// }

//Using Alerts to Give a Player Information
// alert("js is awesome!");

/* 
Designing Your Game
1. Pick a random word.
2. Take the player’s guess.
3. Quit the game if the player wants to.
4. Check that the player’s guess is a valid letter.
5. Keep track of letters the player has guessed.
6. Show the player their progress.
7. Finish when the player has guessed the word.
*/

/*
Using Pseudocode to Design the Game

Pick a random word
While the word has not been guessed {
 Show the player their current progress
 Get a guess from the player
 If the player wants to quit the game {
 Quit the game
 }
 Else If the guess is not a single letter {
 Tell the player to pick a single letter
 }
 Else {
 If the guess is in the word {
 Update the player's progress with the guess
 }
 }
}
Congratulate the player on guessing the word
*/

//choosing a random word

var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancakes",
    "book",
    "brother",
    "campaign",
    "camera",
    "expect",
    "window",

];

var word = words[Math.floor(Math.random() *  words.length)];

// Creating the Answer Array
var answer_board = [];
for (var i = 0; i < word.length; i++){
    answer_board[i] = "_";
}

var remaining_letters = word.length
var remainig_guesses = word.length + 3

while (remaining_letters > 0 && remainig_guesses > 0){
    alert(answer_board.join(" "));

    var guess = (prompt("Please enter your guess letter or cancel to end the game")).toLowerCase();
    if (guess === null){
        break;
    } else if (guess.length !== 1){
        alert("Please anter a single letter");
    } else {
        var found = false;
        for (var j = 0; j < word.length; j++){
            if (word[j] === guess) {
                answer_board[j] = guess;
                remaining_letters--
                found = true;
            } 
        }
    } if (!found){
        remainig_guesses--
    }
}
alert(answer_board.join(" "));
alert(" Great job! the word was " + word)