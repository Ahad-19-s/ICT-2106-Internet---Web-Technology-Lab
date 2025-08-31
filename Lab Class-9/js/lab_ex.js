let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

// String to Number conversion
num1 = Number(num1);
num2 = Number(num2);

let sum = num1 + num2;

document.writeln("<br><span style='color:orange;'>" + num1 + " + " + num2 + " = " + sum + "</span>");
let difference = num1 - num2;
document.writeln("<br><span style='color:green;'>" + num1 + " - " + num2 + " = " + difference + "</span>");
let product = num1 * num2;
document.writeln("<br><span style='color:purple;'>" + num1 + " * " + num2 + " = " + product + "</span>");
let quotient = num1 / num2;
document.writeln("<br><span style='color:blue;'>" + num1 + " / " + num2 + " = " + quotient + "</span>");
let remainder = num1 % num2;
document.writeln("<br><span style='color:red;'>" + num1 + " % " + num2 + " = " + remainder + "</span>");
