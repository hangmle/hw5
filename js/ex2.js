/* HW5
  Example 2 JavaScript code
*/

const array = [];
for (i = 1; i <= 10; i++) {
  array.push(i);
}

// array of odd numbers
const odd = array.filter(num => num%2 !== 0);
console.log(odd);

// array of numbers divisible by 2 or 5
const div2or5 = array.filter(num => (num%2 === 0) || (num%5 === 0));
console.log(div2or5);

// array of numbers divisible by 3 squared (square the numbers that are divisible by 3)
const sqrt = array.filter(num => num%3 === 0).map(num => num**2);
console.log(sqrt);

// sum of the following: square the numbers divisible by 5
const sumSqrt = array.filter(num => num%5 === 0).map(num => num**2).reduce((total, num) => total + num, 0);
console.log(sumSqrt);