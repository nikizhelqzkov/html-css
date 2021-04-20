// let element = 846539;

// while (element > 9) {
//   console.log(element % 10);
//   element = parseInt(element / 10);
// }
// console.log(element);

let arr2 = [1, 2, 3, 5, 2, 5, 2, 3];
let i = 0;
while (i < arr2.length) {
  // continue;
  console.log(arr2[i]);
  i++;
  //break;
}

// for(let i = 0; i<arr.length;i++){
//     console.log(arr[i]);
// }
// let sum = 0;
// for(let i = 1; i<=37; i+=3){
//     if(i%2===0){
//         sum+=i;
//     }
// }
// console.log(sum);

let arr = [1, 2, 3, 5, 2, 5, 2, 3];
console.log(...arr);
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let c = arr[j];
      arr[j] = arr[i];
      arr[i] = c;
    }
  }
}
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}
console.log(...arr);

for (const element of arr) {
  console.log(element);
}
let a = [];

//------------------
let m = 0,
  s = 1,
  q = 0;
let array = [1, 2, 5, 5, 2, 5, 8, 5, 4, 56];
for (let i = 0; i < array.length; i++) {
  m += array[i];
  if (array[i] % 2 === 0) {
    s *= array[i];
  } else {
    q += array[i];
  }
}
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     s *= array[i];
//   } else {
//     q += array[i];
//   }
// }

console.log(((m + s) / q) * array.length);
