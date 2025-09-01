// Internal Data
const internalData = { valueA: 18, valueB: 32 };

function internalSum() {
  const result = internalData.valueA + internalData.valueB;
  document.getElementById("internalResult").textContent = `Internal JS Sum: ${result}`;
}

function displayCurrentTime() {
  const now = new Date();
  document.getElementById("currentTime").textContent = `Current Time: ${now.toLocaleTimeString()}`;
}

// External Data
const externalData = { x: 23, y: 12 };

function externalSum() {
  const result = externalData.x + externalData.y;
  document.getElementById("externalResult").textContent = `External JS Sum: ${result}`;
}

// Form Input
function calculateFormSum() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("formResult").textContent = "⚠️ Please enter valid numbers.";
    return;
  }
  const sum = num1 + num2;
  document.getElementById("formResult").textContent = `Form JS Sum: ${sum}`;
}

// User Greeting
function greetUser() {
  const name = prompt("Please enter your name:");
  if (name && name.trim() !== "") {
    document.getElementById("greetResult").textContent = `👋 Hello, ${name}. Welcome to the demo page.`;
  } else {
    document.getElementById("greetResult").textContent = "No name entered.";
  }
}

// Event Listeners
document.getElementById("externalBtn").addEventListener("click", externalSum);
document.getElementById("formBtn").addEventListener("click", calculateFormSum);
document.getElementById("greetBtn").addEventListener("click", greetUser);
