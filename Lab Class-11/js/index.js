// Random students
var student1 = { name: "Arif", roll: 1001, year: "1st", courses: ["Math", "Physics", "CSE"] };
var student2 = { name: "Tanvir", roll: 1002, year: "2nd", courses: ["English", "History", "Programming"] };

document.writeln(`Name: ${student1.name}, Roll: ${student1.roll}, Year: ${student1.year}, Courses: ${student1.courses}<br>`);
document.writeln(`Name: ${student2.name}<br>Roll: ${student2.roll}<br>Year: ${student2.year}<br>Courses: ${student2.courses}<br>`);

// Constructor function
function Student(name, age, roll, year, courses) {
  this.name = name; this.age = age; this.roll = roll; this.year = year; this.courses = courses;
  this.display = function () {
    document.writeln(`<br>Name: ${this.name}<br>Age: ${this.age}<br>Roll: ${this.roll}<br>Year: ${this.year}<br>Courses: ${this.courses}`);
  };
}
var std = new Student("Rony", 21, 1003, "2nd", ["DS", "Algorithms"]);
std.display();
document.writeln(`<br>The student has enrolled in <span class="highlight">${std.courses[1]}</span>`);

// Math object
document.writeln(`<br><br>Math.pow(2,8) = ${Math.pow(2,8)}`);
document.writeln(`<br>Random (1-10): ${Math.floor(Math.random()*10+1)}`);

// Date object
var date = new Date();
document.writeln(`<br><br>Year: ${date.getFullYear()} | Hour: ${date.getHours()}`);

// DOM Manipulation
document.getElementById("header3").innerHTML = "Welcome to Random Students Portal";
document.getElementsByClassName("head")[0].innerHTML = "<span style='color:green;'>Updated student info</span>";

// Query Selector
document.querySelector(".my-div a").innerHTML = "Contact Admin";

// Another constructor
function Stud(name, age, roll) {
  this.name = name; this.age = age; this.roll = roll;
  this.display = function () {
    document.writeln(`<br><span style='color:purple;'>Name: ${this.name}, Age: ${this.age}, Roll: ${this.roll}</span>`);
  };
}
var totalStudents = [
  new Stud("Farhan", 22, 1004),
  new Stud("Hasib", 20, 1005),
  new Stud("Imran", 23, 1006)
];
for (var i=0; i<totalStudents.length; i++) totalStudents[i].display();
