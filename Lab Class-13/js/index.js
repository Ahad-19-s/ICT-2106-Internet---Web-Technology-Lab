const para = document.querySelector('#paraId');
const addButton = document.querySelector('#addButton');
const removeButton = document.querySelector('#removeButton');
const outputSection = document.querySelector('#output-section');

// Toggle and remove style
function toggleStyle() {
  para.classList.toggle('para-style');
}
function removeStyle() {
  para.classList.remove('para-style');
}

if (addButton) addButton.addEventListener('click', toggleStyle);
if (removeButton) removeButton.addEventListener('click', removeStyle);

// Back button function (for next.html)
const backButton = document.querySelector('#backButton');
if (backButton) backButton.addEventListener('click', () => window.history.back());

// Output helper
function writeOutput(text) {
  const p = document.createElement('p');
  p.innerHTML = text;
  outputSection.appendChild(p);
}

// Demo Outputs
const names = ['Arif', 'Nadia', 'Tanvir', 'Mou', 'Rafi'];
names.forEach(name => writeOutput("Name: " + name));

const person = { id: 101, name: "Random User" };
for (let key in person) {
  writeOutput(`${key}: ${person[key]}`);
}

const numbers = [2, 5, 8, 11];
numbers.forEach(num => writeOutput("Number: " + num));

const display = () => "Hello There!";
writeOutput(display());

const add = (a, b) => a + b;
writeOutput("Add (3+7): " + add(3, 7));

const evenNumbers = numbers.filter(num => num % 2 === 0);
writeOutput("Even Numbers: " + evenNumbers.join(', '));

const squares = numbers.map(num => num * num);
writeOutput("Squares: " + squares.join(', '));
