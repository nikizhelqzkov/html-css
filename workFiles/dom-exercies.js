let element = document.getElementById('result');
let tags = document.getElementsByTagName('p');
element.innerHTML = "Razmer: "+ tags.length;
console.log(element)
function sayHello(){
    alert("Hello");
}

element.onclick = sayHello;
for(let index = 0; index<tags.length; index++){
    tags[index].onclick = sayHello;
}