let a = [1, 5, 5, 5, 8, 74, 5, 8, 85, 85];
let count = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 == 1) {
    //document.write(a[i] + " ");
    //count+=1;//
    count++;
    console.log(a[i] + " ");
  }
}
console.log(count);
