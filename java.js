console.log("hello");
const first = document.getElementById("p1");
first.innerHTML = "Amudhan";

function example(){
    console.log("hello");
}

const input = document.getElementById("input");
const output = document.getElementById("inputField");

input.addEventListener("input",()=>{
    output.textContent = input.value;
})

const second = document.createElement("h1");
second.textContent = "New  Paragraph";
document.body.appendChild(second);

//second.remove();