let n = prompt("What is your name?");
console.log(n);
if (n === null) {
  n = "Stranger";
}
alert("Hello " + n);
const words = [
  "javascript",
  "football",
  "athlete",
  "social",
  "cucumber",
  "math",
  "teacher",
  "ItStep",
  "speed",
  "hypertext",
  "gaming",
  "staymad",
  "school",
  "computer",
  "easy",
  "despise",
  "markup",
  "shake",
];
//Math.rondom() -> Between 0 and 1 float number
let word = words[Math.floor(Math.random() * words.length)];
console.log(word);
let answerWord = [];
for (let i = 0; i < word.length; i++) {
  answerWord.push("_");
  //answerWord[i] = "_";
}
console.log(answerWord);
let starting = confirm("Starting the game?");
console.log(starting);
if (starting === false) {
  alert(":( SAD!!! YOUR WORD WAS: " + word.toUpperCase());
} else {
  alert("YES!!! WE ARE STARTING THE GAME");
  let remainingLetters = word.length;
  let tries = 10;
  while (remainingLetters > 0 && tries > 0) {
    let correct = false;
    alert("Chances: " + tries + "\nYour word is: " + answerWord.join(" "));
    let letter = prompt("Please enter a letter");
    if (letter === null) {
      alert(":( SAD!!! YOUR WORD WAS: " + word.toUpperCase());
      break;
    } else if (letter.length > 1) {
      tries--;
      alert("Please write a single letter!!!!");
    } else {
      for (let i = 0; i < word.length; i++) {
        if (letter === word[i]) {
          correct = true;
          answerWord[i] = letter;
          remainingLetters--;
        }
      }
      if (correct === false) {
        tries--;
        alert("Your letter is missing! \nTry again!!!");
      }
    }
  }
  if (remainingLetters === 0 && tries > 0) {
    alert(
      n.toUpperCase() +
        "!!! YOU WON THE GAME!!! YOUR WORD WAS: " +
        word.toUpperCase() +
        "\nFor new game press f5 button!"
    );
  } else if (tries <= 0) {
    alert(
      n.toUpperCase() +
        "!!! YOU LOST THE GAME!!!\nTRY AGAIN LATER!!! \nYOUR WORD WAS: " +
        word.toUpperCase() +
        "\nFor new game press f5 button!"
    );
  }
}
