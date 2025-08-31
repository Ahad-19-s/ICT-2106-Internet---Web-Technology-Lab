
var a = 10;

if (a > 5) {
    console.log("a is greater than 5");
} else {
    console.log("a is not greater than 5");
}

document.write(a < 5 ? "a is less than 5<br>" : "a is not less than 5<br>");

document.write(
    (a > 10)
        ? ((a == 5) ? "a is greater than 10 and equal to 5<br>" : "a is greater than 10 and not equal to 5<br>")
        : "a is not greater than 10<br>"
);

// 2. User input and comparison
let b = Number(prompt("Enter a number:"));

if (b > 10) {
    document.write("b is greater than 10<br>");
} else if (b == 10) {
    document.write("b is equal to 10<br>");
} else {
    document.write("b is less than 10<br>");
}

// 3. Function to square a number (with prompt)
function squarePrompt() {
    let c = Number(prompt("Enter a number to square:"));
    document.write("<span style='color:blue'>The square of " + c + " is " + (c * c) + "</span><br>");
    return c; // return c for later use
}

let c = squarePrompt();

// 4. Function to square a number (with parameter)
function squareWithParam(num) {
    document.write("<span style='color:blue'>The square of " + num + " is " + (num * num) + "</span><br>");
}

squareWithParam(c);

// 5. Function to square a number (with return)
function squareWithReturn(num) {
    return num * num;
}

let result = squareWithReturn(6);
document.write("<span style='color:blue'>The square of 6 is " + result + "</span><br>");

// 6. Immediately Invoked Function Expression (IIFE)
(function() {
    let d = Number(prompt("Enter a number to square using IIFE:"));
    document.write("<span style='color:blue'>The square of " + d + " is " + (d * d) + "</span><br>");
})();
array 
let arr={
    name: "John",
    age: 30,
    city: "New York"
}

let arr1 = [1, 2, 3, 4, 5];

document.writeln("<span style='color:blue'>Array elements: " + arr1 + "</span><br>");

//associate array

//push
arr1.push(6);
document.writeln("<span style='color:blue'>Array elements after push: " + arr1 + "</span><br>");
//pop
arr1.pop();
document.writeln("<span style='color:blue'>Array elements after pop: " + arr1 + "</span><br>");
//shift
arr1.shift();
document.writeln("<span style='color:blue'>Array elements after shift: " + arr1 + "</span><br>");
//unshift
arr1.unshift(0);
document.writeln("<span style='color:blue'>Array elements after unshift: " + arr1 + "</span><br>");
//splice
arr1.splice(2, 0, 2.5);
document.writeln("<span style='color:blue'>Array elements after splice: " + arr1 + "</span><br>");
//reverse
arr1.reverse();
document.writeln("<span style='color:blue'>Array elements after reverse: " + arr1 + "</span><br>");
//sort
arr1.sort((a, b) => a - b);
document.writeln("<span style='color:blue'>Array elements after sort: " + arr1 + "</span><br>");
//2d array
let arr2d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];      
document.writeln("<span style='color:blue'>2D Array elements:</br> " + arr2d.map(row => row.join(", ")).join("<br>") + "</span><br>");
