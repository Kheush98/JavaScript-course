'use strict';

let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 50 + 1);

let sum = `${x} + ${y} = ${x+y}`;
let difference = `${x} - ${y} = ${x-y}`;
let product = `${x} x ${y} = ${x*y}`;
let quotient = `${x} / ${y} = ${x/y}`;
let reminder = `${x} % ${y} = ${x%y}`;

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(reminder);

// const z = Math.floor(Math.random() * (100 - 50) + 50);

// console.log(z);