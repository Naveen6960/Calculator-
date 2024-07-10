// Get all button elements and display element
var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

var operand1 = null;
var operand2 = null;
var operator = null;

// Add event listeners to buttons
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.textContent;

    if (value === "AC") {
      // Clear the display and reset variables
      display.value = "";
      operand1 = null;
      operand2 = null;
      operator = null;
    } else if (value === "+/-") {
      // Toggle the sign of the displayed value
      display.value = parseFloat(display.value) * -1 || 0;
    } else if (value === "%") {
      // Calculate the percentage of the displayed value
      display.value = parseFloat(display.value) / 100;
    } else if (value === "=") {
      operand2 = parseFloat(display.value);
      // Perform the calculation based on the operator
      var result;
      switch (operator) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          // Check for division by zero
          if (operand2 === 0) {
            display.value = "Error: Division by zero";
            return;
          }
          result = operand1 / operand2;
          break;
      }
      // Display the result
      display.value = result;
      // Reset variables
      operand1 = null;
      operand2 = null;
      operator = null;
    } else if (["+", "-", "*", "/"].includes(value)) {
      operand1 = parseFloat(display.value);
      operator = value;
      display.value = "";
    } else {
      // Append the clicked value to the display
      display.value += value;
    }
  });
}
