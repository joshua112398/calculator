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
    case 'x':
      return multiply(a,b);
    case '/':
      return divide(a,b);
    default:
      return 0;
  }
}

//////////////////////////////////////////////////////

function displayInput(a) {
  // appends the input number to the current display
  const display = document.querySelector(".display-text");
  display.textContent = `${display.textContent}${a}`;
}

//////////////////////////////////////////////////////

function clearDisplay() {
  const display = document.querySelector(".display-text");
  display.textContent = "";
}

////////////////////////////d//////////////////////////

function clearData(obj) {
  obj.firstNumber = 0;
  obj.secondNumber = 0;
  obj.operator = "";
  return obj;
}

//////////////////////////////////////////////////////

function ifEqualsInput(obj) {
  if (obj.operator === "") {
    return obj;
  }
  const display = document.querySelector(".display-text");
  obj.secondNumber = +(display.textContent);
  let solution = operate(obj.operator, obj.firstNumber, 
      obj.secondNumber);
  solution = solution;
  clearDisplay();
  displayInput(solution);
  obj = clearData(obj);
  // place the solution as the first number, in case
  // user wants to do further calculations with
  // the result
  obj.firstNumber = solution;
  console.log(obj);
  return obj;
}
//////////////////////////////////////////////////////

function ifOperatorInput(obj, operatorButton, lastButton) {
  if (lastButton === "+" || lastButton === "-" || lastButton === "x" ||
      lastButton === "/") {
    obj.operator = operatorButton;
    return obj;
  }
  // Two cases: if previous operator was empty,
  // which only happens after pressing '=' or
  // after pressing CLEAR
  if (obj.operator === "") {
    const display = document.querySelector(".display-text");
    obj.firstNumber = +(display.textContent);
    obj.operator = operatorButton.textContent;
    console.log(obj);
    return obj;
  }
  // If previous operator was also +,-,x, or /, then find its
  // solution, then use the solution as the first number for a new
  // operation, with the new operator being the operator inputted
  // to this function.
  else {
    obj = ifEqualsInput(obj);
    obj.operator = operatorButton.textContent;
    return obj;
  }
}

//////////////////////////////////////////////////////

function onKeyPress() {
  let equation = {
    firstNumber: 0,
    secondNumber: 0,
    operator: "",
  };

  displayInput(0);

  let lastClicked = "";

  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener("click", () => {

      if (button.getAttribute("class") === "number") {
        const display = document.querySelector(".display-text");
        if (display.textContent === "0") {
          clearDisplay();
        } 
        if (lastClicked === "=") {
          clearDisplay();
          equation = clearData(equation);
        }
        else if (lastClicked === "/" ||lastClicked === "x" ||
            lastClicked === "-" ||lastClicked === "+" ) {
          clearDisplay();
        }
        displayInput(button.textContent);
        lastClicked = button.textContent;

      } else if (button.getAttribute("class") === "operator") {
        equation = ifOperatorInput(equation, button, lastClicked);
        lastClicked = button.textContent;

      } else if (button.textContent === "=") {
        if (lastClicked !== "/" &&lastClicked !== "x" &&
            lastClicked !== "-" &&lastClicked !== "+" ) {
          equation = ifEqualsInput(equation);
          lastClicked = button.textContent;
        }

      } else {
        clearDisplay();
        displayInput(0);
        equation = clearData(equation);
        lastClicked = "";
        console.log(equation);
      }

    })
  });
}

//////////////////////////////////////////////////////

(() => {
  onKeyPress();

})();
