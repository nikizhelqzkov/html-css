//Първа задача
let arr = [10, 2, 3, 4, 5, 6, 7, 8, 9, 1];


if (arr[0] > arr[arr.length - 1]) {
    let tA = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = tA;
}

//Втора задача
let a = 123;


if (a < 1) {
    alert("Otricatelno");
} else if (a < 100) {
    alert("Dvucifreno");
} else if (a < 1000) {
    alert("Tricifreno");
} else if (a < 10000) {
    alert("Chetiricifreno");
}