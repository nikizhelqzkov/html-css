let arr = [1, 2, 3, 5, 2, 5, 2, 3];

if (arr[0] % 2 === 0) {
  arr[0] = parseInt(arr[0] / 10);
  console.log(arr[0]);
} else if (arr[arr.length - 1] % 2 === 0 && arr[arr.length - 1] > 20) {
    arr[arr.length - 1]*=2;
}
else{
    arr[3]++;
    console.log(arr[0]);
}
