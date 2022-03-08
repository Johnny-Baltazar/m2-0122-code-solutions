const divide = require('./divide');
const add = require('./add.js');
const subtract = require('./subtract.js');
const multiply = require('./multiply');

if (typeof process.argv[2] !== typeof Number && typeof process.argv[4] !== typeof Number) {
  const x = Number(process.argv[2]);
  const y = Number(process.argv[4]);
  if (process.argv[3] === 'times' || process.argv[3] === 'multiply' || process.argv[3] === 'x') {
    console.log(`Result: ${multiply.multiply(x, y)}`);
  } else if (process.argv[3] === 'divide' || process.argv[3] === 'over' || process.argv[3] === '/') {
    console.log(`Result: ${divide.divide(x, y)}`);
  } else if (process.argv[3] === 'add' || process.argv[3] === 'plus' || process.argv[3] === '+') {
    console.log(`Result: ${add.add(x, y)}`);
  } else if (process.argv[3] === 'subtract' || process.argv[3] === 'minus' || process.argv[3] === '-') {
    console.log(`Result: ${subtract.subtract(x, y)}`);
  }
}
