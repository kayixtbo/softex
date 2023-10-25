let result = "0";

function clearResult() {
  result = "0";
  updateDisplay();
}

function appendToResult(value) {
  if (value === "%") {
    appendPercentage();
  } else {
    appendValue(value);
  }
  updateDisplay();
}

function appendValue(value) {
  if (result === "0") {
    result = value;
  } else {
    result += value;
  }
}

function appendPercentage() {
  result += " / 100";
  calculateResult();
}

function calculateResult() {
  try {
    result = eval(result).toString();
  } catch (error) {
    result = "Erro";
  }
  updateDisplay();
}

function removeLastDigit() {
  if (result.length === 1 || result === "Erro") {
    result = "0";
  } else {
    result = result.slice(0, -1);
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("result").value = result;
}
