// // Introduction to Loops
// // The for Loop

// // Example 1:
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// // Output: 1, 2, 3, 4, 5

// // Example 2: print odd numbers from 1 to 15
// for (let i = 1; i <= 15; i += 2) {
//   console.log(i);
// }

// // Example 3: Print even numbers from 1 to 10
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// // Example 4: print multiplication table of 5
// for (let i = 1; i <= 10; i++) {
//   console.log(i * 5);
// }

// // Example 5: print numbers from 10 to 1
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// // Nested Loops

// // Example 1: Basic Nested loops
// for (let i = 1; i <= 3; i++) {
//   console.log(`Outer loop: ${i}`);
//   for (let j = 1; j <= 3; j++) {
//     console.log(`Inner Loop: ${j}`);
//   }
// }

// // Example 2: Multiplication table from 1 to 5
// for(let i = 1;i<=5; i++){
//     let row = ``;
//     for(let j = 1; j<=5;j++){
//             row += `${(i*j)}` + `\t`;
//     }
//     console.log(row);
// }

// // Example 3: Pattern printing -Right Triangle
// for(let i = 1; i<=5;i++){
//     let star = ``;
//     for( let j = 1; j<=i; j++ ){
//         star += `* `;
//     }
//     console.log(star);

// }

// // Example 4:
// for (let i = 1; i <= 4; i++) {
//   let row = ``;
//   for (let j = 1; j <= 4; j++) {
//     row += `( ${i},${j}) `;
//   }
//   console.log(row);
// }

// // Example 5:Inverted Right Angled Triangle Pattern
// for (let i = 5; i >= 1; i--) {
//   let line = ``;
//   for (let j = 1; j <= i; j++) {
//     line += `* `;
//   }
//   console.log(line);
// }

// The While Loop
// The while loop is used when you want to execute code as long as a condition is true, especially when you don't know in advance how many iterations you'll need.

// Syntax of while loop

// let i= 1;(initialization)

// while(condition){
// code to execute
// i++(Updation)
// }

// // Example 1:
// let i = 1;
// while (i !== 6) {
//   console.log(i);
//   i++;
// }

// // Example 2:sum Numbers Until Target Reached
// let sum = 0;
// let num = 1;
// while (num !== 50) {
//   sum += num;
//   num++;
// console.log(`Added ${num} , the sum is ${sum}`);
// }
// console.log(`The final sum is ${sum}`);
