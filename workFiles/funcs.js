// let a = 5;
// let b = 6;

// let c = a + b;

// function sum(a, b) {
//   return a + b;
//   //   console.log(a + b);
// }
// function sum2(a, b) {
//   console.log(a + b);
// }

// c = sum(8, 25);
// console.log(c);
// function isABiggerThanB(a, b) {
//   return a > b;
// }
// if (!isABiggerThanB(a, b)) {
//   console.log("B is bigger than A");
// }
// // console.log(sum2(3, 5));

// function sum(...elements) {
//   let result = 0;
//   for (let i = 0; i < elements.length; i++) {
//     result += elements[i];
//   }
//   return result;
// }

// let sumNum = sum(a, b, c);
// function average(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum / args.length;
// }
// let av = average(sumNum, a, b, c, 25, 9, 8, 2, 85, 4);
// console.log(av);

// const sub = function (a, b) {
//   return a - b;
// };

// console.log(sub(3, 5));

// const multiply = (a, b) => {
//   return a * b;
// };
// let d = multiply(sub(6, 5) + 20, 3);
// console.log(d);

function aver(...elements){
  let sum  = 0;
  for(let i  = 0; i <elements.length; i++){
    sum += elements[i];
  }
  return sum / elements.length; 
}
function aver2(n,...elements){
  let sum  = 0;
  for(let i  = 0; i <n; i++ ){
    sum += elements[i];
  }
  return sum / n; 
}

console.log(aver2(3,2,3,8,5,9));
