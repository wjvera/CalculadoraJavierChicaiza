let screen = document.getElementById('output');
let currentInput = '';

function appendToScreen(value) {
  currentInput += value;
  screen.textContent = currentInput;
}

function clearScreen() {
  currentInput = '';
  screen.textContent = '0';
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    screen.textContent = currentInput;
  } catch (error) {
    screen.textContent = 'Error';
  }
}
