const out = msg => document.getElementById("output").innerHTML += msg + "\n";

// Inputs
let a = +prompt("Enter a number:");
let b = +prompt("Enter another number:");
let n = +prompt("How many names?");
let names = Array.from({length:n},(_,i)=>prompt(`Name ${i+1}:`));

// Condition check
out(`Conditional: <span class='red'>${a>10?(a===12?"A=12":"A>10 but not 12"):"A<=10"}</span>`);

// Functions
let cube = x => x**3;
let mul = (x,y) => x*y;
out(`Square of ${a}: <span class='red'>${a**2}</span>`);
out(`Cube of ${a}: <span class='red'>${cube(a)}</span>`);
out(`Area: <span class='red'>${mul(a,b)}</span>`);

// IIFE
(()=>{out(`IIFE Square: <span class='red'>${b**2}</span>\nIIFE Cube: <span class='red'>${cube(b)}</span>`);})();

// Arrays
out(`Names: <span class='blue'>${names}</span>`);
let arr = names.slice(0,3);
arr.unshift("AAA"); arr.splice(1,1,"InsertedName"); arr.push("NewName"); arr.pop(); arr.shift();
out(`Modified: ${arr}`);

let arr2D=[[1,'A'],[3,'B'],[4,'C']];
arr2D.forEach(r=>out(r.join(" ")));

out(`Sorted Strings: ${[32,45,78].sort()}`);
out(`Sorted Numbers: ${[1230000000,125499999,12000000].sort((x,y)=>x-y)}`);

// Type conversion
let bNum=+prompt("Enter number:"), cStr=prompt("Enter string:"), vNum=+prompt("Float:");
out(`bNum: ${typeof bNum}, cStr: ${typeof cStr}, vNum: ${typeof vNum}`);
out(`Num→Str: ${bNum.toString()} (${typeof bNum.toString()})`);
out(`Str→Num: ${parseFloat(prompt("Enter numeric string:"))}`);
out(`Invalid Num: ${Number("ASDDDF")}`);
out(`Fixed(3): ${vNum.toFixed(3)}, Precision(5): ${vNum.toPrecision(5)}`);
