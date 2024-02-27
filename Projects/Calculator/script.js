let arrayofoperator = ["+","-","*","/"];
let input = document.getElementById("display");
console.log(input)
let Button = document.querySelectorAll("button");
Button.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("button is clicked")
    if (input.value === '0' && !isNaN(parseInt(element.value))) {
      input.value = element.value;
    } else {
    switch (element.value) {
      case "+":
        checkOperator();
        break;
      case "-":
        checkOperator();
        break;
      case "*":
      checkOperator();
        break;
      case "/":
        checkOperator();
        break;

      case "=":
        input.value = eval(input.value);
        break;

      case "CE":
        input.value = "0";
        break;

        case "C":
        input.value = "0";
        break;

        case "X":
          input.value = input.value.slice(0, -1);
          break;

      default:
        input.value += element.value;
        break;
    }
  }

  });

  function checkOperator(){
    if (arrayofoperator.includes(input.value.charAt(input.value.length - 1))) {
           
      input.value = input.value.slice(0, -1) + element.value;
    } else {
  
      input.value += element.value;
    }
  }
});