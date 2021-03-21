// Zad 1 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let htmlElements = ["<p>", "<p>", "<h1>", "<img>"];
let element = htmlElements[2];


let temp = htmlElements[0];
htmlElements[0] = htmlElements[htmlElements.length - 1];
htmlElements[htmlElements.length - 1] = temp;
console.log(htmlElements[0]);

