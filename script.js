let operator;
let array = [];

function numberHandler (num) {
  return function(event) {
  const displayContent = document.querySelector("#display-content");
  console.log("Button was pressed!")

  if (array.length === 3) {
    console.log("array.length === 3  num-btn activated");
    array = [];
    displayContent.textContent = "";
    displayContent.textContent += num;
  }
  
  else if ((array.length === 1 && operator === "*") || (array.length === 1 && operator === "/")) {
    console.log("push 1");
    console.log(operator);
    console.log(array);
    array.push(Number("1"));
    displayContent.textContent = "";
    displayContent.textContent += num;
  } 
  
  else if (array.length === 1) {
    console.log("array.length === 1 num-btn activated");
    console.log(operator);
    console.log(array);
    array.push(Number("0"));
    displayContent.textContent = "";
    displayContent.textContent += num;
  } 
  
  else {
    console.log("Standard num-btn activated");
    console.log(operator);
    console.log(array);
    displayContent.textContent += num;
  };
};
};

document.querySelector("#btn-7").addEventListener("click", numberHandler("7"));
document.querySelector("#btn-8").addEventListener("click", numberHandler("8"));
document.querySelector("#btn-9").addEventListener("click", numberHandler("9"));
document.querySelector("#btn-4").addEventListener("click", numberHandler("4"));
document.querySelector("#btn-5").addEventListener("click", numberHandler("5"));
document.querySelector("#btn-6").addEventListener("click", numberHandler("6"));
document.querySelector("#btn-1").addEventListener("click", numberHandler("1"));
document.querySelector("#btn-2").addEventListener("click", numberHandler("2"));
document.querySelector("#btn-3").addEventListener("click", numberHandler("3"));
document.querySelector("#btn-0").addEventListener("click", numberHandler("0"));

document.querySelector("#btn-percent").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");
  displayContent.textContent = displayContent.textContent * .01;
});

document.querySelector("#btn-point").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

    if (displayContent.textContent.includes(".")) {
    console.log("Has point!");
    return;  } else {
    displayContent.textContent = displayContent.textContent + ".";
  }
});

document.querySelector("#btn-plus-min").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");
  if (displayContent.textContent.charAt(0) === "-") {
    console.log("Minus triggered");
    console.log(displayContent.textContent);
    displayContent.textContent = displayContent.textContent.replace("-", "");
    console.log(displayContent.textContent);
  } else {
    displayContent.textContent = "-" + displayContent.textContent;
  };

}); 

document.querySelector("#btn-clear").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");
  operator = "";
  array = "";
  displayContent.textContent = "";

  console.log(displayContent.textContent);
});

document.querySelector("#btn-add").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");
  operator = "+";

  if (array.length === 2) {
    console.log("Triggered array.lengh === 2 btn-add");
    array.push(Number(displayContent.textContent));
    const result = opSelect(operator, array);
    displayContent.textContent = result;
    array = [Number(displayContent.textContent)];
    console.log(operator);
    console.log(array);
  } else {
    console.log("standard btn-add");
    array = [Number(displayContent.textContent)];
    console.log(operator);
    console.log(array);
  }
});

document.querySelector("#btn-subtract").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");
  operator = "-";

  if (array.length === 2) {
    console.log("Triggered array.lengh === 2 btn-subtract");
    array.push(Number(displayContent.textContent));
    const result = opSelect(operator, array);
    displayContent.textContent = result;
    array = [Number(displayContent.textContent)];
    console.log(operator);
    console.log(array);
  } else {
    console.log("standard btn-subtract");
    array = [Number(displayContent.textContent)];
    console.log(operator);
    console.log(array);
  }
});

document.querySelector("#btn-multiply").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");
  operator = "*";

  if (array.length === 2) {
    console.log("Triggered array.lengh === 2 btn-add");
    console.log(array);
    array.push(Number(displayContent.textContent));
    console.log(operator);
    console.log(array);
    const result = opSelect(operator, array);
    displayContent.textContent = result;
    array = [Number(displayContent.textContent)];
    console.log(operator);
    console.log(array);
  } else {
    console.log("standard btn-add");
    array = [Number(displayContent.textContent)];
    console.log(operator);
    console.log(array);
  }
});

document.querySelector("#btn-divide").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");
  operator = "/";

  if (array.length === 2) {
    console.log("Triggered array.lengh === 2 btn-add");
    console.log(array);
    array.push(Number(displayContent.textContent));
    console.log(operator);
    console.log(array);
    const result = opSelect(operator, array);
    displayContent.textContent = result;
    array = [Number(displayContent.textContent)];
    console.log(operator);
    console.log(array);
  } else {
    console.log("standard btn-add");
    array = [Number(displayContent.textContent)];
    console.log(operator);
    console.log(array);
  }
});

//Logic for equals button
document.querySelector("#btn-equals").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");
  array.push(Number(displayContent.textContent));

  if (array.length === 2 || array.length === 1) {
    console.log("Equals do nothing triggered!");
    console.log(array);
  } else {
    console.log("Standard equals triggered");
    console.log(array);
    const result = opSelect(operator, array);
    displayContent.textContent = result;
  }
});


function opSelect(operator, array) {
  if (operator === "+") {
    return array.reduce((total, element) => total + element);
  } else if (operator === "-") {
    return array.reduce((total, element) => total - element);
  } else if (operator === "*") {
    return array.reduce((total, element) => total * element, 1);
  } else if (operator === "/") {
    return array.reduce((total, element) => total / element);
  }
};