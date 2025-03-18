const add = function (num1, num2) {
  let sum = [num1, num2];
  return sum.reduce((total, current) => total + current);
};

const subtract = function (num1, num2) {
  let sum = [num1, num2];
  return sum.reduce((total, current) => total - current);
};

const multiply = function (num1, num2) {
  let sum = [num1, num2];
  return sum.reduce((total, current) => total * current);
};

const divide = function (num1, num2) {
  let sum = [num1, num2];
  return sum.reduce((total, current) => total / current);
};

document.querySelector("#btn-7").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (displayContent.textContent === "0") {
    displayContent.textContent = "7";
  } else {
    displayContent.textContent += "7";
  }

  console.log(displayContent.textContent);
});

document.querySelector("#btn-8").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (displayContent.textContent === "0") {
    displayContent.textContent = "8";
  } else {
    displayContent.textContent += "8";
  }

  console.log(displayContent.textContent);
});

document.querySelector("#btn-9").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (displayContent.textContent === "0") {
    displayContent.textContent = "9";
  } else {
    displayContent.textContent += "9";
  }

  console.log(displayContent.textContent);
});

document.querySelector("#btn-4").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (displayContent.textContent === "0") {
    displayContent.textContent = "4";
  } else {
    displayContent.textContent += "4";
  }

  console.log(displayContent.textContent);
});

document.querySelector("#btn-5").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (displayContent.textContent === "0") {
    displayContent.textContent = "5";
  } else {
    displayContent.textContent += "5";
  }

  console.log(displayContent.textContent);
});

document.querySelector("#btn-6").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (displayContent.textContent === "0") {
    displayContent.textContent = "6";
  } else {
    displayContent.textContent += "6";
  }

  console.log(displayContent.textContent);
});

document.querySelector("#btn-1").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (displayContent.textContent === "0") {
    displayContent.textContent = "1";
  } else {
    displayContent.textContent += "1";
  }

  console.log(displayContent.textContent);
});

document.querySelector("#btn-2").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (displayContent.textContent === "0") {
    displayContent.textContent = "2";
  } else {
    displayContent.textContent += "2";
  }

  console.log(displayContent.textContent);
});

document.querySelector("#btn-3").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (displayContent.textContent === "0") {
    displayContent.textContent = "3";
  } else {
    displayContent.textContent += "3";
  }

  console.log(displayContent.textContent);
});

document.querySelector("#btn-0").addEventListener("click", (event) => {
    const displayContent = document.querySelector("#display-content");
  
    if (displayContent.textContent === "0") {
      displayContent.textContent = "0";
    } else {
      displayContent.textContent += "0";
    }
  
    console.log(displayContent.textContent);
  });
document.querySelector("#btn-clear").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  displayContent.textContent = "";

  console.log(displayContent.textContent);
});


document.querySelector("#btn-add").addEventListener("click", (event) =>{
    const displayContent = document.querySelector("#display-content");
    let op = "+";
    let array = [`${displayContent.textContent}`];
    displayContent.textContent = "";
    console.log(array);
    console.log(op);
});

document.querySelector("#btn-equals").addEventListener("click", (event) =>{
    const displayContent = document.querySelector("#display-content");
    array = array.push(displayContent.textContent);
    displayContent.textContent = "";
    console.log(array);
    console.log(op);
});

function operate(num1, num2, op) {
  return op(num1, num2);
}

console.log(operate(10, 2, subtract));
