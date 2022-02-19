let a = 5;
let b = 5;
console.log(Math.floor(a / b));
let c = 569;
console.log(parseInt(c/10))
console.log(c%10)
let d1 = c%10;
c = parseInt(c/10);
let d2 = c%10;
c = parseInt(c/10);
d3 = c;
const arr = [];
arr.push(d3);
arr.push(d2);
let size = arr.push(d1);
console.log(arr)
console.log(size)
let newA = a++;
let newA2 = ++b;
console.log(a,b)
console.log(newA,newA2);

let sc = "1f";

console.log(+sc);

// False values: 0 , "", null, undefined, NaN 
//NaN = NOT A NUMBER
let f = a <= b;
console.log(f)

// 0 1 0 1 1 01 10 11 100 010    110 XOR(^)
let ar = [1,2,3,45,6,6,"5423","egwrf",true,false,[1,2,3,45,6]];
console.log(ar[6])
console.log(ar[ar.length-1])
console.log(ar[ar.length]+1)//NaN
let ar2 = ar.flat(1);
console.log(ar2[ar2.length-1]);

let isEven = b % 2 === 0;
console.log(isEven)

