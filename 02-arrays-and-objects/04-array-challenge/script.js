'use strict';

//Challenge 1
const arr = [1, 2, 3, 4,5];

arr.reverse().unshift(6);
arr.push(0);

console.log(arr);

//Challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5,6,7,8, 9, 10];

arr1.pop();
const arr3 = [...arr1, ...arr2];

console.log(arr3);