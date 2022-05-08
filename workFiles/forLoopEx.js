let sum = 0;
let arr = [1,2,5,1,5,23,46,2,2,85,84];

for(let i = 0; i<arr.length; i++){
    if(arr[i]% 2 === 0){
        sum = sum + arr[i];
        //sum+=arr[i];
    }
}
console.log(sum);