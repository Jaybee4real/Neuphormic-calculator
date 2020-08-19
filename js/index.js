let display = document.querySelector(".display");

setInterval(() => {
  if (display.innerHTML === "") {
    display.innerHTML = "0";
  }
}, 100);
document.querySelectorAll(".number").forEach((el) => {
  el.addEventListener("click", () => {
    if (display.innerHTML == "0") display.innerHTML = el.innerHTML;
    else {
      display.innerHTML += el.innerText.toString();
    }
    // if(buffer[1] == undefined){
    //   buffer[1] = display.innerHTML
    // }
  });
});

document.querySelector(".clear").addEventListener("click", () => {
  display.innerHTML = 0;
  buffer = [];
  operation = "";
});

let buffer = [];
let operation = ""
document.querySelectorAll(".operation").forEach((el) => {
  el.addEventListener("click", () => {
    if (buffer.length === 0) {
      operation = el.innerHTML;
      buffer[0] = display.innerHTML;
      display.innerHTML = "";
    }
    if (buffer.length === 1){
      operation = el.innerHTML
      display.innerHTML = ""
    }
    if (buffer.length > 1) {
      calculate();
      buffer[1] = display.innerHTML;
      display.innerHTML = "";
      console.log(buffer)
    }
  });
});

function calculate() {
  if (buffer[1] == undefined){
    buffer[1] = display.innerHTML
    display.innerHTML = ""
  }

  if(buffer[1] == undefined){
    console.log("work on this")
  }
    
  switch (operation) {
    case "÷":
      display.innerHTML = parseFloat(buffer[0]) / parseFloat(buffer[1])
      buffer.length = 0
      buffer[0] = display.innerHTML
      operation = ""
      break;
    case "+":
      display.innerHTML = parseFloat(buffer[0]) + parseFloat(buffer[1]);
      buffer.length = 0
      buffer[0] = display.innerHTML
      operation = ""
      break;
    case "-":
      display.innerHTML = parseFloat(buffer[0]) - parseFloat(buffer[1]);
      buffer.length = 0
      buffer[0] = display.innerHTML
      operation = ""
      break;
    case "x":
      display.innerHTML = parseFloat(buffer[0]) * parseFloat(buffer[1]);
      buffer.length = 0
      buffer[0] = display.innerHTML
      operation = ""
      break;
  }
}

document.querySelector(".equals").addEventListener("click", calculate)