alert('hello');
var a=34;
var  b =66;
console.log(a+b);
document.writeln(a+b);

var c=10;
var c=20;
document.writeln(c);
let d=10.22;
let name = "John";
document.writeln(d);
document.writeln(typeof d);
document.writeln(typeof name);
//type casting
let num = 10;
let str = "20";
let result = num + Number(str);
document.writeln(result);
//number to string
let num1 = 10;
let str1 = String(num1);
document.writeln(str1);
//string to number
let str2 = "30";
let num2 = Number(str2);
document.writeln("</br>" + num2);

document.writeln("<br>Type of str1: " + typeof str1); // string
document.writeln("<br>Type of num2: " + typeof num2); // number
 
  let x = 10.22;
  let y = 20;
  document.writeln(x.toFixed(5)); // 10.22000
  //user input
  //input name color use prompt
  let usercolor = prompt("Enter a color:"); 
    document.writeln("<br>Color: " + usercolor);
  let userfastname = prompt("Enter a name:");
  let userlastname = prompt("Enter a last name:");

    document.writeln("<br><span style='color:blue;'>Full Name: " + userfastname + " " + userlastname + "</span>"); 
