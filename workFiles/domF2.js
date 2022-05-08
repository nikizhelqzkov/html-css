const main = document.getElementById("main");

/* 
<ToDO>
Random number: prompt("Enter a MIN number between 1 and 100");
Random number: prompt("Enter a MAX number between MIN and 100");
IF MIN>MAX -> alert("MIN must be less than MAX");RETURN;
IF MIN=MAX -> alert("MIN must be less than MAX");RETURN;
then addRandomNumber(min, max)

</ToDO>


*/

function addRandomH3Elements() {
  const newNumber = document.createElement("h3");
  newNumber.innerHTML = Math.floor(Math.random() * 100).toString();
  newNumber.classList.add("number");
  newNumber.classList.add("subtitle");
  newNumber.classList.add("random");
  console.log(newNumber);
  console.log(main);
  main.appendChild(newNumber);
}
const showHidden = () => {
  const el = document.querySelector("#hidden");
  el.style.display = "block";
};
const hide = () => {
  const el = document.querySelector("#hidden");
  if (el) {
    el.style.display = "none";
  }
};
function removeLastRandomH3Element() {
  let randomNumbersList = document.getElementsByClassName("random");
  if (randomNumbersList.length === 0) {
    alert("No random numbers to remove");
    return;
  }
  randomNumbersList = Array.from(randomNumbersList);
  let lastRandomNumber = randomNumbersList.pop();
  //other solution for getting the last element of the array
  //lastRandomNumber = randomNumbersList[randomNumbersList.length - 1];
  main.removeChild(lastRandomNumber);
}
function removeAllRandomH3Elements(){
    let randomNumbersList = document.getElementsByClassName("random");
    if (randomNumbersList.length === 0) {
        alert("No random numbers to remove");
        return;
    }
    randomNumbersList = Array.from(randomNumbersList);
    for (let i = 0; i < randomNumbersList.length; i++) {
        main.removeChild(randomNumbersList[i]);
    }
}

const showButton = document.getElementById("show");
showButton.addEventListener("click", showHidden);
