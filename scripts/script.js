// basic math functions
//////////////////////////////////////////////////////

function add(a,b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a*b;
}

function divide(a,b) {
  if (b === 0) return "Don't be silly!";
  return a/b;
}

//////////////////////////////////////////////////////

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a,b);
    case '-':
      return subtract(a,b);
    case '*':
      return multiply(a,b);
    case '/':
      return divide(a,b);
    default:
      return "Invalid Operator";
  }
}

//////////////////////////////////////////////////////

function displayInput(a) {
  // appends the input number to the current display
  const display = document.querySelector(".display-text");
  display.textContent = `${display.textContent}${a}`;
}

//////////////////////////////////////////////////////



//////////////////////////////////////////////////////

function keyPress() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener("click", () => {

      if (button.getAttribute("class") === "number") {
        displayInput(button.textContent);
      } else if (button.getAttribute("class") === "operator") {

      }

    })
  });
}

//////////////////////////////////////////////////////

(() => {
  let firstNumber;
  let secondNumber;
  keyPress();

})();
