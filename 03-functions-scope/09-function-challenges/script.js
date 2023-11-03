// Challenge 1 Fahrenheit to Celsius
function getCelsius(F) {
  return (F - 32) * 5 / 9;
}

console.log(`The temperature is ${getCelsius(40)}\xB0C`);

// Challenge 2
const minMax = numbers => console.log(`min: ${Math.min(...numbers)}, max: ${Math.max(...numbers)}`);

minMax([1, 2, 3, 10, 4, 5]);

// Challenge 3
(function aera(length, width) {
  console.log(`The aera of the rectangle with a length of ${length} and a width of ${width} is ${length * width}`);
})(10, 6);