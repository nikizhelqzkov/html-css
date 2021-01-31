console.log("hello Js");
document.write("<h2>Hello js</h2>");
document.write("<h3>Hello js</h3>");
//alert("Hello");
document.getElementById("hey").innerHTML = "Hey what's up!";
document.querySelector("h1").innerHTML = "H1 JS";

let name1 = "Anji";
let name2 = "Aleks";
let age = 19;
let olderThan18 = false;
console.log(name2);
console.log(name1);
console.log(olderThan18);
let p = document.getElementById("parag");
console.log(p);
p.style.color = "pink";
p.style.backgroundColor = "black";
let name3 = name1 + ", " + name2 + " " + (age + 25);
console.log(name3);
console.log(Math.round(age / 10) % 10);
if (olderThan18 === false) {
  olderThan18 = true;
  console.log("Mi shte stane pulnoleten");
} else {
  console.log("Palnoleten");
}
let arr = [1, 2, 5, 9, 4, 5];
let arr2 = [1, 2, 5, 9, 4, 5];
console.log(arr);
console.log(arr.length);
console.log(arr[arr.length - 1]);
arr.push(20);
console.log(arr);
arr.unshift(15);
console.log(arr);
arr.pop();
console.log(arr);
arr[2] = 52;
console.log(arr);
for (let i = 1; i < arr.length; i += 2) {
  if (arr[i] % 2 === 0) {
    arr[i] += 8;
  } else {
    arr[i] -= 20;
  }
}
while (age === 14) {}
console.log(...arr);

function sum(a) {
  let s = 0;
  for (let i = 0; i < a.length; i += 1) {
    s += a[i];
  }
  return s;
}

console.log(sum(arr));
console.log(sum(arr2));

let btn = document.getElementById("btn");
let body = document.querySelector("body");
console.log(btn);
console.log(body);
function change() {
  if (btn.innerHTML === "Change background - Black") {
    btn.innerHTML = "Change background - Blueviolet";
    body.style.backgroundColor = "black";
    
    body.style.color = "white";
  } else if (btn.innerHTML === "Change background - Blueviolet") {
    btn.innerHTML = "Change background - Black";
    body.style.backgroundColor = "blueviolet";body.style.color = "black";
  }
}
