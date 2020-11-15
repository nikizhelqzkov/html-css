let number = 6579846;
let arr = [];
while(number>9){
    arr.push(number%10);
    number = parseInt(number/10);
}
arr.push(number);
arr.reverse();
console.log(arr);


let i = 0;
while(i<10){
    console.log(i);
    i++;
    // if(i===4){
    //     break;
    // }
}//i = 10

do{
    console.log(i);
    i++;
    if(i===4){
        break;
    } 
}while(i<10);
