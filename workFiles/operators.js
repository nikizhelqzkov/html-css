let arr = [54, 1, 2, 3, 2, 6, 6, 1, 5, 3];
let firstEl = arr[0];
let lastEl = arr[arr.length - 1];
let res = (firstEl + lastEl) % 2 === 1;
let r = (firstEl + lastEl);


if ("20" + 20 == "2021" || res) {
    console.log(`Yeaaah`);
}
else {
    console.log(`Noooo`);
}

if(lastEl<10 && lastEl >5){
    console.log(`${lastEl} is between 5 and 10`);
}
else if(lastEl>=10){
    console.log(`${lastEl} is higher and equal than 10`);
}
else if(lastEl===5){
     console.log(`${lastEl} is equal to 5`);
}
else{
    console.log(`${lastEl} is lower than 5`);
}