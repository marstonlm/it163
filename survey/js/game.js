/*
const button = document.querySelector("button");
button.addEventListener("click", clickHandler, false);
button.style.cursor = "pointer";

fuction clickHandler() 
{
    var input = document.querySelector('#input');
    var output = document.querySelector('#output');
    output.innerHTML = input.value
}
*/





var output = document.querySelector('#output');

output.innerHTML = "Hello World!";

const button = document.querySelector("button");
button.addEventListener("click", clickHandler, false);

function clickHandler() {
    let input = document.querySelector('#input');
    let output = document.querySelector('#output');
    output.innerHTML = input.value;
    console.log("Button clicked");
}