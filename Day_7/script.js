// // Day_7
// // Functions and scope
// // practice : Calculate Average
// function calcAverage(a, b, c) {
//   let avg = (a + b + c) / 3;
//   console.log(avg);
// }

// calcAverage(3, 3, 3); // Output:3

// // The Return Keyword

// function sum(a, b) {
//   let sum = a + b;
//   return sum;
// }
// let sumOfDigits = sum(10, 5);
// console.log(sumOfDigits); // Output : 15

// // function Expression
// const multiply = function (a, b) {
//   return a * b;
// };

// const divide = (a, b) => {
//   return a / b;
// };

// console.log(multiply(3, 4));
// console.log(divide(12, 4));

// Types of declaring a function

// // 1. Normal Way

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(3, 3));

// // 2.Expression Way

// const sum = function (a, b) {
//   return a + b;
// };

// // console.log(sum(3, 3));

// // 3.Arrow Function Way(modern)
// const sum = (a,b) => {
//     return a*b;
// }
// console.log(sum(3,8))

// // Higher-Order Functions
// // Example :
// function repeatTask(func, n) {
//   for (let i = 0; i <= n; i++) {
//     func();
//   }
// }

// const alertUser = () => {
//   console.log(`Alert!`);
// };

// repeatTask(alertUser, 3);

// // Practice:

// function applyDiscount(price, discountFunc) {
//   return discountFunc(price);
// }

// const tenPercent = (price) => price * 0.9;
// const twentyPercent = (price) => price * 0.8;

// console.log(applyDiscount(100, tenPercent)); // Output: 90
// console.log(applyDiscount(100, twentyPercent)); // Output: 80

// // Methods - Syntax
// // Example 1:
// // Long Hand
// const car = {
//   brand: `Tesla`,
//   start: function () {
//     console.log(`Engine On!`);
//   },
//   stop: function () {
//     console.log(`engine off!`);
//   },
// };

// car.start();//Engine On!
// car.stop();//engine off!

//Short Hand
const mathTools = {
  sum: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
};

console.log(mathTools.sum(3, 3)); // Output:
console.log(mathTools.sub(3, 3)); // Output:
console.log(mathTools.mul(3, 3)); // Output:

