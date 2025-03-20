let array = [];
let operator = "";

function numberHandler(num) {
  return function (event) {
    const displayContent = document.querySelector("#display-content");

    if (array.length === 2) {
      array = [];
      displayContent.textContent = "";
      displayContent.textContent += num;
    } else if (array.length === 1) {
      displayContent.textContent = "";
      displayContent.textContent += num;
      array.push(Number(displayContent.textContent));
    } else {
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

function operatorHandler(currentoperator) {
  return function (event) {
    const displayContent = document.querySelector("#display-content");

    if (array.length === 2) {
      const result = opSelect(operator, array);
      displayContent.textContent = result;
      array = [result];
      operator = currentoperator;
    } else if (array.length === 1) {
      if (
        operator === "/" ||
        operator === "*" ||
        operator === "-" ||
        operator === "+"
      ) {
        const result = opSelect(operator, array);
        displayContent.textContent = result;
        operator = currentoperator;
      } else {
        operator = currentoperator;
      }
    } else {
      array.push(Number(displayContent.textContent));
      operator = currentoperator;
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

document.querySelector("#btn-percent").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");
  displayContent.textContent = displayContent.textContent * 0.01;
});

document.querySelector("#btn-point").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (displayContent.textContent.includes(".")) {
    return;
  } else {
    displayContent.textContent = displayContent.textContent + ".";
  }
});

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

document.querySelector("#btn-clear").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");
  operator = "";
  array = [];
  displayContent.textContent = "";
});

document.querySelector("#btn-equals").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (array.length === 0) {
    return;
  } else if (array.length === 1) {
    array.push(Number(displayContent.textContent));
    if (array[1] === 0 && operator === "/") {
      displayContent.textContent = "Can't divide by zero!";
      array = [];
      return;
    } else {
      const result = opSelect(operator, array);
      displayContent.textContent = result;
      array = [result];
    }
  } else {
    const result = opSelect(operator, array);
    displayContent.textContent = result;
    array = [result];
  }
});
