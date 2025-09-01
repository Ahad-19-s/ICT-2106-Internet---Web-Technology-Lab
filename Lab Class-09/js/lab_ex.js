const output = document.getElementById("output");

// helper function to print formatted lines
function printLine(text) {
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = text;
  output.appendChild(div);
}

// Basic Numbers
let x = 23, y = 12;
printLine(`Sum of x + y: <span class="highlight">${x + y}</span>`);

let a = 13, b = 16;
printLine(`Value of a: ${a}`);
printLine(`Value of b: ${b}`);

// Different types
let c = 14, d = 34.675;
let fullName = "Shaon Khan";
printLine(`Type of c: ${typeof c}`);
printLine(`Type of d: ${typeof d}`);
printLine(`Full Name: ${fullName}`);

// Type conversion
let age = 25;
age = age.toString();
printLine(`Age as string: ${age} (Type: ${typeof age})`);

let temp = "100";
temp = parseInt(temp);
printLine(`Temp as number: ${temp} (Type: ${typeof temp})`);

let r = 5.6;
printLine(`r as number: ${Number(r)}`);

let z = "9.7";
z = parseFloat(z);
printLine(`z as float: ${z}`);

let g = 1000.02;
printLine(`g.toFixed(2): ${g.toFixed(2)}`);
printLine(`g.toPrecision(3): ${g.toPrecision(3)}`);

// User input numbers
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

num1 = Number(num1);
num2 = Number(num2);

if (isNaN(num1) || isNaN(num2)) {
  printLine("❌ Invalid input! Please enter valid numbers.");
} else {
  printLine(`Addition: ${num1 + num2}`);
  printLine(`Subtraction: ${num1 - num2}`);
  printLine(`Multiplication: ${num1 * num2}`);
  printLine(`Division: ${num2 !== 0 ? (num1 / num2).toFixed(2) : '⚠️ Cannot divide by zero'}`);
  printLine(`Area of Rectangle (num1 × num2): ${num1 * num2}`);

  let celsius = (num1 - 32) * 5 / 9;
  printLine(`Converted to Celsius: ${celsius.toFixed(2)} °C`);
}
