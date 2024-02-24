let allButtons = document.querySelectorAll("button");
let input = document.getElementById("display");
let currentInput = "";
let previousInput = "";
let operator = "";
let result = "";

allButtons.forEach((element) => {
  element.addEventListener("click", () => {
    const buttonValue = element.value;

    switch (buttonValue) {
      case "CE":
        input.value = " 0";
        currentInput = "";
        previousInput = "";
        operator = null;
        result = null;
        break;

      case "C":
        input.value = "0";
        currentInput = "";
        previousInput = "";
        operator = null;
        result = null;
        break;

      case "=":
        if (operator) {
          currentInput = operate(operator, previousInput, currentInput);
          input.value = currentInput;
        }
        break;

      
       


      default:
        currentInput += buttonValue;
        input.value = currentInput;
        break;
    }
  });
});

