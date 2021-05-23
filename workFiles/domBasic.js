const header = document.getElementById("header");
console.log(header);
header.innerHTML = "Hlqb";
const headers = document.getElementsByClassName("headers");
console.log(headers);

for (let i = 0; i < headers.length; i++) {
  headers[i].innerHTML = "Selski hlqb nomer: " + (i + 1);
}
