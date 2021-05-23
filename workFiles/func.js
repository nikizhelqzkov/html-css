function average(arr, size) {
  let sum = 0;
  if (size > arr.length) {
    console.error("Your size is bigger than your array");
    return undefined;
  }
  for (let i = 0; i < size; i++) {
    sum += arr[i];
  }
  return sum / size;
}

let arr2 = [1, 2, 5, 23, 45, 23, 5, 4];
let arr3 = [1, 2, 5, 2483, 55, 23, 5, 4];
console.log(average(arr2, 2));
console.log(average(arr3, arr3.length));
console.log(average(arr3, arr3.length));
console.log(average(arr3, arr3.length));
console.log(average(arr3, arr3.length));
