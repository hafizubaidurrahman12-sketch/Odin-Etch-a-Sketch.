let currentColor = "blue";
const container = document.querySelector(".container");
const color = document.querySelector(".color");
function small() {
  container.innerHTML = "";
  for(i = 1; i<= 256; i++){
 const div = document.createElement("div");
   div.style.height = (100 / 16)+"%";
   div.style.width = (100 / 16)+"%";
  div.style.boxSizing = "border-box";        div.style.border = "0.01px solid cyan";
  div.style.backgroundColor = "white";
  div.addEventListener("mouseenter", function() {
    div.style.backgroundColor = currentColor;
    });
    
   container.appendChild(div);
   } 
}   
function med() {
     container.innerHTML = "";
    for(i = 1; i<= 1024; i++){
  const div = document.createElement("div");
    div.style.height = (100 / 32)+"%";
    div.style.width = (100 / 32)+"%";
    div.style.boxSizing = "border-box";
div.style.border = "0.01px solid cyan";
    div.style.backgroundColor = "white";
    div.addEventListener("mouseenter", function() {
    div.style.backgroundColor = currentColor;
});

    container.appendChild(div);
    }
}    
function l() { 
    container.innerHTML = "";
    for(i = 1; i<= 2304; i++){
  const div = document.createElement("div");
    div.style.height = (100 / 48)+"%";
    div.style.width = (100 / 48)+"%";
    div.style.boxSizing = "border-box";
div.style.border = "0.01px solid cyan";
    div.style.backgroundColor = "white";
    div.addEventListener("mouseenter", function() {
    div.style.backgroundColor = currentColor;
});

    container.appendChild(div);
    }
}    
 function xl() {
  container.innerHTML = "";
  for(i = 1; i<= 4096; i++){
  const div = document.createElement("div");
    div.style.height = (100 / 64)+"%";
    div.style.width = (100 / 64)+"%";
    div.style.boxSizing = "border-box";
div.style.border = "0.01px solid cyan";
    div.style.backgroundColor = "white";
    div.addEventListener("mouseenter", function() {
    div.style.backgroundColor = currentColor;
});

    container.appendChild(div);
    } 
 }
 const smallBtn = document.querySelector(".small");
smallBtn.addEventListener("click", small);
 const medBtn = document.querySelector(".medium");
medBtn.addEventListener("click", med);
 const lBtn = document.querySelector(".large");
lBtn.addEventListener("click", l);
 const xlBtn = document.querySelector(".xl");
xlBtn.addEventListener("click", xl);
function resetCanvas() {
  const pixels = container.querySelectorAll("div");
  pixels.forEach(div => {
    div.style.backgroundColor = "white";
  });
}

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", resetCanvas);
const red = color.querySelector(".red");
function redColor() {
     currentColor = "red";
}
red.addEventListener("click", redColor);
const blue = color.querySelector(".blue");
function blueColor() {
     currentColor = "blue";
}
blue.addEventListener("click", blueColor);
const black = color.querySelector(".black");
function blackColor() {
     currentColor = "black";
}
black.addEventListener("click", blackColor);
const green = color.querySelector(".green");
function greenColor() {
     currentColor = "green";
}
green.addEventListener("click", greenColor);