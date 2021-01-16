const element = document.getElementById("secondHeader");
console.log(element);
const tags = document.getElementsByTagName("p");
console.log(tags);
console.log(tags[0]);
const result = document.getElementById("result");
result.innerHTML = "Our paragraphs are: " + tags.length;

const classes = document.getElementsByClassName("dom");
console.log(classes);
result.innerHTML += " " + classes[1].src;
const img = document.querySelector("img");
console.log(img);
const hovering = document.querySelectorAll(".dom");
console.log(hovering);

for (let i = 0; i < hovering.length; i++) {
  hovering[i].style.backgroundColor = "red";
}

const h3 = document.createElement("h3");
const h2 = document.createElement("h2");
h3.innerHTML = "Header 3";
h2.innerHTML = "Header 2";
console.log(h3);
result.innerHTML += h3.innerHTML;
console.log(result);
let body = document.querySelector("body");
// body.appendChild(h3);
result.appendChild(h3);
result.appendChild(h2);
result.removeChild(h2);
console.log(body.children);

let h1 = document.querySelector("h1");
//h1.onclick = hello;
function hello() {
  if (h1.style.backgroundColor == "red") {
    h1.style.backgroundColor = "yellow";
  } else if (h1.style.backgroundColor == "yellow") {
    h1.style.backgroundColor = "red";
  } else {
    h1.style.backgroundColor = "red";
  }
}
h1.addEventListener("click", hello);
let button = document.createElement("button");
let button2 = document.createElement("button");
button.innerHTML = "Hide the img!";
button2.innerHTML = "Show the img!";
//button.value = "";
console.log(button);
button.addEventListener("click", function () {
  if (img.style.display !== "none") {
    img.style.display = "none";
  }
});
button2.addEventListener("click", function () {
  if( img.style.display === "none"wwwwwww)
  img.style.display = "inline-block";
});

result.appendChild(button);
result.appendChild(button2);
