const header = document.getElementById("header");
console.log(header);
header.innerHTML = "Hlqb";
const headers = document.getElementsByClassName("headers");
console.log(headers);

for (let i = 1; i < headers.length; i++) {
  headers[i].innerHTML = "Selski hlqb nomer: " + (i + 1);
}
//more advance steps:
let body = document.getElementsByTagName("body");
console.log(body[0]);
body[0].style.background = "red";
body[0].style.borderTop = "15px solid green";

let element2 = document.querySelector("div #test");
let element = document.querySelectorAll("div");
console.log(element);
console.log(element2);
let p = document.createElement("p");
p.textContent = "Hello, kak si";
console.log(p);
document.body.appendChild(p);
let specialZone = document.querySelector("div #p");
p.style.color = "skyblue";
specialZone.appendChild(p);

let div = document.getElementById("changer");
console.log(div);
let button = document.getElementById("button");
button.onclick = click;
function click() {
  let div = document.getElementById("changer");
  if (div.style.backgroundColor == "" || div.style.backgroundColor == "red") {
    div.style.backgroundColor = "blue";
  } else if (div.style.backgroundColor == "blue") {
    div.style.background = "yellow";
  } else {
    div.style.backgroundColor = "red";
  }
}
let newButton = document.createElement("button");
console.log(newButton);
newButton.textContent = "CLick me";
newButton.addEventListener("click", function () {
  if (
    document.body.style.backgroundColor == "" ||
    document.body.style.backgroundColor == "red"
  ) {
    document.body.style.backgroundColor = "blue";
  } else if (document.body.style.backgroundColor == "blue") {
    document.body.style.background = "yellow";
  } else {
    document.body.style.backgroundColor = "red";
  }
});
document.body.appendChild(newButton);
