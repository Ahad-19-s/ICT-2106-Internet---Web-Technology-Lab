
  // Circle Area
  let radius = Number(prompt("Enter radius of the circle:"));
  let circleArea = Math.PI * radius * radius;

  // Square Area
  let side = Number(prompt("Enter side of the square:"));
  let squareArea = side * side;

  // Rectangle Area
  let length = Number(prompt("Enter length of the rectangle:"));
  let width = Number(prompt("Enter width of the rectangle:"));
  let rectangleArea = length * width;

  // Triangle Area
  let base = Number(prompt("Enter base of the triangle:"));
  let height = Number(prompt("Enter height of the triangle:"));
  let triangleArea = 0.5 * base * height;

  // Pentagon Area (Regular)
  let pentagonSide = Number(prompt("Enter side of the regular pentagon:"));
  let pentagonArea = (5 * pentagonSide * pentagonSide) / (4 * Math.tan(Math.PI / 5));

  // Hexagon Area (Regular)
  let hexagonSide = Number(prompt("Enter side of the regular hexagon:"));
  let hexagonArea = (3 * Math.sqrt(3) * hexagonSide * hexagonSide) / 2;

  // Output all areas
  document.writeln("<h2>Area Results</h2>");
  document.writeln("Circle Area: " + circleArea.toFixed(2) + "<br>");
  document.writeln("Square Area: " + squareArea.toFixed(2) + "<br>");
  document.writeln("Rectangle Area: " + rectangleArea.toFixed(2) + "<br>");
  document.writeln("Triangle Area: " + triangleArea.toFixed(2) + "<br>");
  document.writeln("Pentagon Area: " + pentagonArea.toFixed(2) + "<br>");
  document.writeln("Hexagon Area: " + hexagonArea.toFixed(2) + "<br>");

// next class tarnnary operator