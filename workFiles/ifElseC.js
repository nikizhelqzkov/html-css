let a = 360; 
let p = +prompt("Napichete chislo:");
console.log(p)
if(a>=0 && a<10){
    console.log("a e ednocifreno");
}
else if(a>=10 && a<100){
    console.log("a e dvucifreno")
}
else if(a>=100 && a<1000){
    console.log("a e tricifreno")
}
else if(a>=1000){
    console.log("a e mnogocifreno")
}
else{
    console.log("a e  otricatelno chislo");
}


if(a>=10 && a<100){
  console.log("Yes it is") 
  a+=10;
  ++a;
  console.log(a);
}
else{
    console.log("No it isn't");
    a-=50;
    a--;
    console.log(a);

}

if(a % 2 == 0){
    console.log("a e chetno")
}
else{
    console.log("a e nechetno")
}



let b = [1,2,4,65,4,21];
let len = b.length;
console.log(len);
console.log(b[b.length - 1]);

