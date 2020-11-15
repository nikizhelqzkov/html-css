//[1,2,885,5,5];
let arr = [11];
//ako e chetno - da izvezhda che e chetno
// ako e nechetno - dali se deli na 5 
// inache - stadartno nechetno
//true && false = false
if(arr[0]%2==0 && arr[0]%5===0){
    console.log(`${arr[0]} e chetno i se deli na 5`);
}
else if(arr[0]%2==0){
    console.log(`${arr[0]} e chetno`);
}
else if(arr[0]%5==0){
    console.log(`${arr[0]} se deli na 5`);
}
else{
    console.log(`${arr[0]} e nechetno `);
}


