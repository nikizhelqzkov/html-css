let arr = [1, 32, 5, 5, 51, 56, 98, 9874, 12826, 252, 129, -9, -78, -95623];
              
function sum(arr) {
  let s = 0;
  for (var i = 0; i < arr.length; i++) {
   // s = s + arr[i];
    if(arr[i]%2==0){
        s=s+arr[i];
    } 
    else{
        s=s-arr[i];
    }  
  }

  return s;
}
console.log(sum(arr));
