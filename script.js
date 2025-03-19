let operator;
let array = [];

document.querySelector("#btn-7").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (array.length === 3) {
    array = [];
    displayContent.textContent = "";
    displayContent.textContent += "7";
  } else if (array.length === 1) {
    array.push(Number("0"));
    displayContent.textContent = "";
    displayContent.textContent += "7";
  } else {
    displayContent.textContent += "7";
  }
});

document.querySelector("#btn-8").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (array.length === 3) {
    array = [];
    displayContent.textContent = "";
    displayContent.textContent += "8";
  } else if (array.length === 1) {
    array.push(Number("0"));
    displayContent.textContent = "";
    displayContent.textContent += "8";
  } else {
    displayContent.textContent += "8";
  }
});

document.querySelector("#btn-9").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (array.length === 3) {
    array = [];
    displayContent.textContent = "";
    displayContent.textContent += "9";
  } else if (array.length === 1) {
    array.push(Number("0"));
    displayContent.textContent = "";
    displayContent.textContent += "9";
  } else {
    displayContent.textContent += "9";
  }
});

document.querySelector("#btn-4").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (array.length === 3) {
    array = [];
    displayContent.textContent = "";
    displayContent.textContent += "4";
  } else if (array.length === 1) {
    array.push(Number("0"));
    displayContent.textContent = "";
    displayContent.textContent += "4";
  } else {
    displayContent.textContent += "4";
  }
});

document.querySelector("#btn-5").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (array.length === 3) {
    array = [];
    displayContent.textContent = "";
    displayContent.textContent += "5";
  } else if (array.length === 1) {
    array.push(Number("0"));
    displayContent.textContent = "";
    displayContent.textContent += "5";
  } else {
    displayContent.textContent += "5";
  }
});

document.querySelector("#btn-6").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (array.length === 3) {
    array = [];
    displayContent.textContent = "";
    displayContent.textContent += "6";
  } else if (array.length === 1) {
    array.push(Number("0"));
    displayContent.textContent = "";
    displayContent.textContent += "6";
  } else {
    displayContent.textContent += "6";
  }
});

document.querySelector("#btn-1").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (array.length === 3) {
    console.log("Triggered === 3 btn-1");
    array = [];
    displayContent.textContent = "";
    displayContent.textContent += "1";
    console.log(array);
  } else if (array.length === 1) {
    console.log("triggered array.length === 1 btn-1");
    array.push(Number("0"));
    displayContent.textContent = "";
    displayContent.textContent += "1";
    console.log(array);
  } else {
    console.log("triggered standard btn-1");
    displayContent.textContent += "1";

    console.log(displayContent.textContent);
    console.log(array);
  }
});

document.querySelector("#btn-2").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (array.length === 3) {
    console.log("Triggered === 3 btn-2");
    array = [];
    displayContent.textContent = "";
    displayContent.textContent += "2";
    console.log(array);
  } else if (array.length === 1) {
    console.log("triggered array.length === 1 btn-2");
    array.push(Number("0"));
    displayContent.textContent = "";
    displayContent.textContent += "2";
    console.log(array);
  } else {
    console.log("triggered standard btn-2");
    displayContent.textContent += "2";

    console.log(displayContent.textContent);
    console.log(array);
  }
});

document.querySelector("#btn-3").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (array.length === 3) {
    console.log("Triggered === 3 btn-3");
    array = [];
    displayContent.textContent = "";
    displayContent.textContent += "3";
    console.log(array);
  } else if (array.length === 1) {
    console.log("triggered array.length === 1 btn-3");
    array.push(Number("0"));
    displayContent.textContent = "";
    displayContent.textContent += "3";
    console.log(array);
  } else {
    console.log("triggered standard btn-3");
    displayContent.textContent += "3";

    console.log(displayContent.textContent);
    console.log(array);
  }
});

document.querySelector("#btn-0").addEventListener("click", (event) => {
  const displayContent = document.querySelector("#display-content");

  if (array.length === 3) {
    array = [];
    displayContent.textContent = "";
    displayContent.textContent += "0";
  } else if (array.length === 1) {
    array.push(Number("0"));
    displayContent.textContent = "";
    displayContent.textContent += "0";
  } else {
    displayContent.textContent += "0";
  }
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

//Logic for equals button
// Use the function in the event listener
document.querySelector("#btn-equals").addEventListener("click", (event) => {
  if (array.length === 3) {
  } else {
    const displayContent = document.querySelector("#display-content");
    array.push(Number(displayContent.textContent));
    console.log(array);
    const result = opSelect(operator, array);
    displayContent.textContent = result;
  }
});

// Logic to select correct operator, which will call the reduce method on the current array.
function opSelect(operator, array) {
  if (operator === "+") {
    return array.reduce((total, element) => total + element, 0);
  } else if (operator === "-") {
    return array.reduce((total, element) => total - element, 0);
  } else if (operator === "*") {
    return array.reduce((total, element) => total * element, 0);
  } else if (operator === "/") {
    return array.reduce((total, element) => total / element, 0);
  }
}
