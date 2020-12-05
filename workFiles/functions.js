let a = 5;
let elem = [1, 2, 3, 5, 1, 5, 5, 2121, 5];
let elem2 = [1, 2, 434, 425, 1234, 52,413, 56, 2121, 5];

function sOfRectangle(a, b) {
  console.log("S of our rectangle is: " + a * b);
  return a*b;
}

function isElemEven(arr) {
    for(let i = 0; i<arr.length;i++){
        if(arr[i]%2===0){
            console.log(arr[i] + " is Even");
        }
        else {
            console.log(arr[i] + " is not Even");
        }
    }
}

sOfRectangle(5, 9);
sOfRectangle(20, 70);

let sum = sOfRectangle(5,9) + sOfRectangle(20,70);
let s = sOfRectangle(prompt("Your a: "),prompt("Your b: "));
alert("Your s of rectangle is: " + s);
console.log(sum);
// isElemEven(elem);
// isElemEven(elem2);
