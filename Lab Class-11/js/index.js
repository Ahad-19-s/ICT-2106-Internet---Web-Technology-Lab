// This is a comment
// console.log("Hello, World!");

// var student = {
//     name: "tuhin",
//     roll: "cse-1957",
//     age: 20,
//     year: "2nd year",
//     subjects: ["IWT", "DLD", "Statistics", "OOP"]
// };

// // Displaying student information
// document.writeln(student.name + " " + student.roll + "<br>");

// // Constructor function
// function studentInfo(name, roll, age, year, subjects) {
//     this.name = name;
//     this.roll = roll;
//     this.age = age;
//     this.year = year;
//     this.subjects = subjects;
//     this.display = function() {
//         document.writeln("Name: " + this.name + "<br>");
//         document.writeln("Roll: " + this.roll + "<br>");
//         document.writeln("Age: " + this.age + "<br>");
//         document.writeln("Year: " + this.year + "<br>");
//         document.writeln("Subjects: " + this.subjects.join(", ") + "<br>");
//     };
// }


// var student1 = new studentInfo("shaon", "CSE-1986", 19, "2nd year", ["NA", "DSA", "Stat", "OOP"]);
// student1.display();
// document.writeln("Subject at number 2 : " + student1.subjects[1] + "<br>");

// //math.sqrt() example
// var num = 16;
// var squareRoot = Math.sqrt(num);
// document.writeln("The square root of " + num + " is " + squareRoot + "<br>");

// //abs
// var negativeNum = -10;
// var absoluteValue = Math.abs(negativeNum);
// document.writeln("The absolute value of " + negativeNum + " is " + absoluteValue + "<br>");

// //sin
// var angle = 30; // in degrees
// var radians = angle * (Math.PI / 180); // convert degrees to radians
// var sineValue = Math.sin(radians);
// document.writeln("The sine of " + angle + " degrees is " + sineValue + "<br>");

// //math.cos
// var cosineValue = Math.cos(radians);
// document.writeln("The cosine of " + angle + " degrees is " + cosineValue +  "<br>");

// //math.power
// var base = 2;
// var exponent = 3;
// var powerValue = Math.pow(base, exponent);
// document.writeln(base + " raised to the power of " + exponent + " is " + powerValue + "<br>");

// //math.cell
// var decimalNumber = 4.7;
// var ceilingValue = Math.ceil(decimalNumber);
// document.writeln("The ceiling value of " + decimalNumber + " is " + ceilingValue + "<br>");
// //math.round
// var roundValue = Math.round(decimalNumber);
// document.writeln("The rounded value of " + decimalNumber + " is " + roundValue + "<br>");
// //math.floor
// var floorValue = Math.floor(decimalNumber); 
// document.writeln("The floor value of " + decimalNumber + " is " + floorValue + "<br>"); 

// //math.max

// var maxNumber = Math.max(10, 20, 30, 40, 50);
// document.writeln("The maximum number among 10, 20, 30, 40, and 50 is " + maxNumber + "<br>");
// //math.min
// var minNumber = Math.min(10, 20, 30, 40, 50);

// document.writeln("The minimum number among 10, 20, 30, 40, and 50 is " + minNumber + "<br>");
// //math.random
// var randomNumber = Math.random(); // Generates a random number between 0 and 1
// document.writeln("A random number between 0 and 1 is " + randomNumber + "<br>");


// Math.random()* 100;
//  // Generates a random number between 0 and 100  
// document.writeln("A random number between 0 and 100 is " + (Math.random() * 100) + "<br>");

// //date object
// var Date = new Date();
// //date.getFullYear();
// document.writeln("Current Date: " + Date + "<br>");
// document.writeln("Current Year: " + Date.getFullYear() + "<br>");
// document.writeln("Current Month: " + (Date.getMonth() + 1) + "<br>"); // Months are zero-indexed
// //gettimezoneoffset
// document.writeln("Timezone Offset: " + Date.getTimezoneOffset() + " minutes<br>");//
// //DATE.getDate()
// document.writeln("Current Date: " + Date.getDate() + "<br>"); //
// //date.getseconds
// document.writeln("Current Seconds: " + Date.getSeconds() + "<br>"); //
// //date.getminutes
// document.writeln("Current Minutes: " + Date.getMinutes() + "<br>"); //

// var  t=new Date("2023-10-11T10:20:30Z"); // ISO 8601 format
// document.writeln("Parsed Date: " + t + "<br>");
// // date.getDay()
// document.writeln("Day of the Week: " + t.getDay() + "<br>"); // 0-6 (0 = Sunday, 1 = Monday, etc.)
// // date.getTime()
// document.writeln("Time in milliseconds since January 1, 1970: " + t.getTime() + "<br>"); // Time in milliseconds
// // date.getHours()
// //




// var b = document.getElementById("header");
// document.writeln(b);
// b.innerHTML = "Hello, World! This is a new text.";
// document.writeln("<br>Updated text in header: " + b.innerHTML + "<br>");

// var c = document.getElementsByTagName("h3");
// document.writeln(c[0].innerHTML);


var student =[
    {
        name: "nahid",
        roll: "CSE-1981",
        age: 21,
        year: "3rd year",
        subjects: ["oop", "iWt", "dsa", "stat"]
    },
    {
        name: "rahim",
        roll: "CSE-1982",
        age: 22,
        year: "3rd year",
        subjects: ["oop", "iWt", "dsa", "stat"]
    },
    {
        name: "karim",
        roll: "CSE-1983",
        age: 23,
        year: "3rd year",
        subjects: ["oop", "iWt", "dsa", "stat"]
    }
]

document.writeln("<br>All Students Information:<br>");
for(var i=0;i<student.length;i++){
    document.writeln("Name: " + student[i].name + "<br>");
    document.writeln("Roll: " + student[i].roll + "<br>");
    document.writeln("Age: " + student[i].age + "<br>");
    document.writeln("Year: " + student[i].year + "<br>");
    document.writeln("Subjects: " + student[i].subjects.join(", ") + "<br><br>");
}

var a= document.getElementsByTagName("h1");

//print  tag name color all elements by loop


for(var i=0;i<a.length;i++){
    document.writeln("<br><span style='color:blue;'> + " + a[i].innerHTML +"</span><br>");


}

