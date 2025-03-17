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

function operate(num1, num2, op) {
  return op(num1, num2);
}

console.log(operate(10, 2, subtract));

const displayOutput = document.getElementById("display");

document.addEventListener()