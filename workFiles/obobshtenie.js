//-- ex4
// let arr = [1, 5, 5, 2, 5, 1, 7, 23, 4, 5, 78, 6];
// let size = arr.length;
// let sum = 0;
// let count = 0;
// // for (let i = 0; i < size; i++) {
// //     if(i % 2===0){
// //         sum+=arr[i];
// //         ++count;
// //     }
// // }
// for (let i = 0; i < size; i += 2) {
//   sum += arr[i];
//   ++count;
// }
// console.log(sum / count);

// ex3
// let multiply = 1;
// for (let i = 3; i < 300; i += 3) {
//   multiply *= i;
// }
// console.log(multiply);
//ex5
// let a = [1, 2, 25, 5, 2, 85, 56, 8];
// let halfSize = parseInt(a.length / 2);
// let index = 0;
// while (index < halfSize) {
//   console.log(a[index]);

//   ++index;
// }

let a = [1, 2, 25, 5, 2, 85, 56];
// let element =  a.at(-1);
let element = a[a.length - 1];
console.log(element);
