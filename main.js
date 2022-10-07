/*
The plus sign (+) is used to add numbers in JavaScript
The asterisk (*) is used to multiply numbers in JavaScript

You need to write two functions.
A function to add two values together. This function needs to define two parameters - the two numbers that you want to add together.

A function to multiply a single number by 2. This function takes one parameter - the number you want to multiply by 2.

In the adding function, add the values of the two parameters and return the result

In the multiplication function, multiply the value of the single parameter by 2 and return the result.
*/

const addTwoNumbers = (firstNumber, secondNumber) => {
  const sum = firstNumber + secondNumber;
  return sum;
};

const multiplyByTwo = (firstNumber) => {
  const product = firstNumber * 2;
  return product;
};

const testOne = addTwoNumbers(25, 100);
const testTwo = multiplyByTwo(testOne);
console.log(testTwo);
