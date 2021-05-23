let name = prompt("What is your name?");
if (name === null || name === "") {
  alert("Hello stranger :) !!!");
} else {
  alert("Hello " + name);
}
const words = ["javascript", "kebab", "html", "tomato", "potato", "onion"];
let word = words[Math.floor(Math.random() * words.length)];
console.log(word);
let answerWord = [];
for (let i = 0; i < word.length; i++) {
  answerWord.push("_");
}
let starting = confirm("Starting the game?");
if (starting === true) {
  alert("Yes!!! Starting the game !!!");
  let remainingLetters = word.length;
  let tries = prompt("How many tries do you have?");
  if (tries === null || tries === "") {
    tries = 10;
  }
  while (remainingLetters > 0 && tries > 0) {
    alert("Животи: " + tries + "\nYour word is: " + answerWord.join(" "));
    let letter = prompt("Write a letter: ");
    let correct = false;
    if (letter === null) {
      alert(":( SAD!!! YOUR WORD IS: " + word.toUpperCase());
      break;
    } else if (letter === "" || letter.length > 1) {
      tries--;
      alert("Please write a single letter!!!");
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
        alert("Your letter is missing! Try again!!!");
      }
    }
  }

  if (remainingLetters === 0 && tries > 0) {
    alert(
      name +
        "!!! You won the game!!! The word was " +
        word +
        "\nFor new game click f5!!!"
    );
  } else if (tries <= 0) {
    alert(":( You LOST!!! \nFor new game click f5!!!");
  }
} else {
  alert(":( SAD!!! YOUR WORD IS: " + word.toUpperCase());
}