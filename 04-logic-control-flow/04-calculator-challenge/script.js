'use strict';

function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 !== 0) {
        result = num1 / num2;    
      } else {
        result = 'Impossible de deviser par 0';
        break;
      }
    default:
      result ='Invalid opertor';
      break;
  }

  console.log(result);
}

calculator(4, 0, '/');