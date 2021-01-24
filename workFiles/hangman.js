let name = prompt("What is your name?");
if (name === null) {
  alert("Hello stranger :) !!!");
} else {
  alert("Hello " + name);
}
const words = ["tomato", "fish", "javascript", "html", "football", 'ItStep'];
//Math.floor(Math.random()); // (0;1);
let word = words[Math.floor(Math.random() * words.length)];
console.log(word);
let answerWord = [];
for (let index = 0; index < word.length; index++) {
  answerWord.push("_");//answerWord+='_';
}

console.log(answerWord);
let starting = confirm("Starting the game?");
if (starting == true) {
  alert("Yes!!! We are starting!!!");
  let remainingLetters = word.length;
  let tries = 10;
  while (remainingLetters > 0 && tries > 0) {
    alert("Chances: " + tries + "\nYour word is: " + answerWord.join(" "));
    let letter = prompt("Write letter: ");
    let correct = false;
    if (letter === null) {
      alert(":( SAD!!! YOUR WORD WAS: " + word);
      break;
    } else if (letter.length > 1) {
      tries--; //tries-=1; tries = tries - 1;
      alert("Please write a single letter");
    } else {
      for (let index = 0; index < word.length; index++) {
        if (letter == word[index]) {
          correct = true;
          answerWord[index] = letter;
          remainingLetters--;
        }
      }
      if (correct == false) {
        tries--;
        alert("Your letter is missing! Try again!!!");
      }
    }
  }
  if (remainingLetters == 0 && tries > 0) {
    alert(
      name +
      "!!! You won the game! The word was: " +
      word +
      "\nFor new game click f5"
    );
  } else if (tries <= 0) {
    alert(":( You LOST!!!\nTry again!!!\nFor new game click f5");
  }
} else {
  alert(":( SAD!!! YOUR WORD WAS: " + word);
}