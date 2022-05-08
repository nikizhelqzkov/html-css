const h1 = document.getElementById('h1First');
console.log(h1);

let subtitles = document.getElementsByClassName('subtitle');
console.log(subtitles);
// subtitles = [...subtitles];
// subtitles = Array.from(subtitles);
// console.log(subtitles);

const h2Elements = document.getElementsByTagName('h2');
console.log([...h2Elements]);

const el = document.querySelector('h2')
const elH1 = document.querySelectorAll('#h1First')
const els = Array.from(document.querySelectorAll('.subtitle'));
console.log(elH1);

h1.innerHTML = 'h1 New';

// for (let i = 0; i < els.length; i++) {
//     els[i].innerHTML = 'subtitle ' + (i+1);
    
// }
for (let i = 0; i < subtitles.length; i++) {
    subtitles[i].innerHTML += ' subtitle ' + (i+1); 
}
const body = document.body;
h1.style.textAlign = 'center';
body.style.backgroundColor = 'red';
for (let i = 0; i < subtitles.length; i++) {
    subtitles[i].style.color = 'blue';
    subtitles[i].style.border = '5px solid green';
}
// const body = document.getElementsByTagName('body')[0];
console.log(body);
