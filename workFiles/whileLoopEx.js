let a = 8925541586851361;
let arr = [];
while (a > 9) {
  let currentElement = a % 10;
  arr.push(currentElement);
  a = parseInt(a/10);
}
arr.push(a);
console.log(arr);
