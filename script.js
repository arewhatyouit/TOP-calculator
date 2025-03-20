// Global variables:
// array - Stores the operands for calculations. Can contain 0, 1, or 2 elements.
// operator - Stores the current operation (+, -, *, /).
// num2Marker - Flag to track whether we're entering the second number after an operator.

let array = [];
let operator = "";
let num2Marker = false;

// Creates an event handler for number buttons

function numberHandler(num) {
  return function (event) {
    const displayContent = document.querySelector("#display-content");

    if (array.length === 2) {
      // Starts a new calculation and stores the last output in index 0 of the array
      array = [];
      displayContent.textContent = "";
      displayContent.textContent += num;
    } else if (array.length === 1 && !num2Marker) {
      // Start entering the second number after an operator
      displayContent.textContent = "";
      displayContent.textContent += num;
      num2Marker = true;
    } else if (array.length === 1 && num2Marker) {
      // Continue entering digits for the second number
      displayContent.textContent += num;
    } else {
      // First number entry or continuing to enter the first number
      displayContent.textContent += num;
    }
  };
}
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

// Creates an event handler for operator buttons

function operatorHandler(currentoperator) {
  return function (event) {
    const displayContent = document.querySelector("#display-content");

    if (array.length === 2) {
      // If we already have two numbers in the array, perform the calculation and prepare for next operation
      const result = opSelect(operator, array);
      displayContent.textContent = result;
      array = [result]; // Store result as first array item for next operation
      operator = currentoperator;
      num2Marker = false;
    } else if (array.length === 1) {
      // If we have one array item, just store the operator for next number
      operator = currentoperator;
      num2Marker = false;
    } else {
      // If array is empty, store the current display value as first operand
      array.push(Number(displayContent.textContent));
      operator = currentoperator;
      num2Marker = false;
    }
  };
}

document
  .querySelector("#btn-add")
  .addEventListener("click", operatorHandler("+"));
document
  .querySelector("#btn-subtract")
  .addEventListener("click", operatorHandler("-"));
document
  .querySelector("#btn-multiply")
  .addEventListener("click", operatorHandler("*"));
document
  .querySelector("#btn-divide")
  .addEventListener("click", operatorHandler("/"));

// Performs the selected arithmetic operation on the array

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
}

// Handles pressing the % button, multiplying the displayed number by 0.01
document.querySelector("#btn-percent").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");
  displayContent.textContent = displayContent.textContent * 0.01;
});

// Handles pressing the . button, adding a . at the end of the displayed number
document.querySelector("#btn-point").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (displayContent.textContent.includes(".")) {
    return;
  } else {
    displayContent.textContent = displayContent.textContent + ".";
  }
});

// Handles pressing the "-" button. Adds or removes a "-" in front of the number being displayed.
document.querySelector("#btn-plus-min").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");
  if (displayContent.textContent.charAt(0) === "-") {
    displayContent.textContent = displayContent.textContent.replace("-", "");
    array = [Number(displayContent.textContent)];
  } else {
    displayContent.textContent = "-" + displayContent.textContent;
    array = [Number(displayContent.textContent)];
  }
});

// Handles the clear button. Clearing the displayed number.
document.querySelector("#btn-clear").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");
  operator = "";
  array = [];
  num2Marker = false;
  displayContent.textContent = "";
});

// Handles the equals button
document.querySelector("#btn-equals").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (array.length === 0) {
    return;
  } else if (array.length === 1) {
    array.push(Number(displayContent.textContent));
    if (array[1] === 0 && operator === "/") {
      displayContent.textContent = "Can't divide by zero!";
      array = [];
      num2Marker = false;
      return;
    } else {
      const result = opSelect(operator, array);
      displayContent.textContent = result;
      array = [result];
      num2Marker = false;
    }
  } else {
    const result = opSelect(operator, array);
    displayContent.textContent = result;
    array = [result];
    num2Marker = false;
  }
});
