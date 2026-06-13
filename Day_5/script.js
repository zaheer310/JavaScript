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

// // Example 3:
// let password = "";
// let attempts = 0;
// while (password !== "secret123" && attempts < 3) {
//   password = prompt("Enter password:");
//   attempts++;
//   if (password === "secret123") {
//     console.log("Access granted!");
//   } else if (attempts < 3) {
//     console.log(`Wrong password. ${3 - attempts} attempts remaining.`);
//   } else {
//     console.log("Access denied. Too many attempts.");
//   }
// }

// // Example 4:
// let number = 500;

// while (number > 1) {
//   number = number / 2;
//   console.log(number);
// }

// // Example 5: finding first power of 2 Greater than Value

// let target = 500;
// let power = 1;
// let exponent = 0;
// while (power < 500) {
//   exponent++;
//   power = 2 ** exponent;
//   console.log(power);
// }

// Do While Loop

// Example 1: Menu System

// let choice = ``;

// do {
//   console.log(`Menu`);
//   console.log(`1.Play`);
//   console.log(`2.Settings`);
//   console.log(`3.Exit`);

//   choice = prompt(`Enter your choice`);
//   if (choice === `1`) {
//     console.log(`Starting Game`);
//   } else if (choice === `2`) {
//     console.log(`Openning Settigs`);
//   }
// } while (choice !== `3`);

// console.log(`Goodbye!!!`);

// // Example 2:
// let roll;
// let attempts = 0;

// do {
//   roll = Math.floor(Math.random() * 6) + 1; // random 1-6

//   attempts++;
//   console.log(`Roll ${attempts} : ${roll}`);
// } while (roll !== 6);


// // Example 3: Input Validation - Number Must be Positive & not Undefined

// let number;

// do{
// number = prompt(`Enter a Valid Number`);
// number = Number(number);
// if((number <= 0) || (isNaN(number))){
//   console.log(`Not a valid Number!!`);
// }else {
// console.log(`You have entered the valid number!!!`);
// }
// }while((number <=0) || (isNaN(number)));


// // Example 4: Countdown with At Least One Execution

// let count = 0;
// do{
//   console.log(`The Count is ${count}`);
//   count++;
// }while(count < 0);


// // Exapmle 5: ATM Withdrawal
// let balance = 1000;
// let continueTransaction ;
// do{
//   let amount = Number(prompt(`Balance : ${balance} , Enter your withdrawal amount`));

//   if((amount > 0 ) && (amount <= balance)){
//    balance -= amount;
//     console.log(`Your Balance is ${balance}`);
//   }else{
//    console.log(`Invalid Transaction`);

//     continueTransaction = prompt(`Do you want to continue (Yes/No)`);
//   }
// }while(continueTransaction === `Yes`);


// // Loop Control : break and continue

// // Example 1: Find First Number Divisible by 7
// for(let i =1 ; i <= 100; i++){
//   if(i % 7 === 0 ){
//     console.log(`First number is divisible by 7`);
//     break;
//   }
// }


// // Example 2: Search in Array
// let fruits = ["apple", "banana", "orange", "grape", "mango"];
// let searchFor = "orange";
// for (let i = 0; i < fruits.length; i++) {
// if (fruits[i] === searchFor) {
// console.log(`Found ${searchFor} at index ${i}`);
// found = true;
// break; // No need to continue searching
// }
// }


// // Example 3: Password Attempts Limits
// let correcrPassword = `sec123`;
// let maxAttempts = 3;

// for(let i =1; i<= maxAttempts; i++){
//   let password = prompt(`Enter your password`);
//   if((password === correcrPassword) ){
//     console.log(`Acces Granted!!`);
//     break;
//   }else if(i === maxAttempts){
//     console.log(`Access denied, No more Attempts`)
//   }else{
//     console.log(`Access denied!!`);
//   }
// }



// // Continue Statement

// // Example 1: Print Numbers, Skip 3
//  for (let i = 0; i <= 5; i++) {
// if (i === 3) {
// continue; // Skip when i is 3
// }
// console.log(i);
// }// Output: 0, 1, 2, 4, 5 (3 is skipped)


// // Example 2: Print Only Even Numbers Using continue
// for (let i = 1; i <= 10; i++) {
// if (i % 2 !== 0) {
// continue; // Skip odd numbers
// }
// console.log(i);
// }// Output: 2, 4, 6, 8, 10



// //Iterating Over Arrays

// // Example 1: Print All Array Elements

// let cities = ["London", "Paris", "Tokyo", "New York", "Sydney"];
// for (let i = 0; i < cities.length; i++) {
// console.log(`${i}: ${cities[i]}`);
// }// Output: 0: London 1: Paris 2: Tokyo 3: New York 4: Sydney

// // Ecxample 2: Find sum Value
// let numbers = [23 ,45 ,56, 78];
// let sum = 0;

// for( let i = 0 ; i < numbers.length ; i++){
//  sum += numbers[i];
// }
// console.log(`The sum of numbers is ${sum}`);// Output: The sum of numbers is 202

// // Example 3: Find the maximum sum 

// let numbers = [23,67,12,89,45,91,34];
// let maxnumber = numbers[0];
// let sum = 0;
// for(let i = 0; i < numbers.length ; i++){
//   if(maxnumber < numbers[i]){
//     maxnumber = numbers[i];
//     sum += maxnumber;
//   }
// }
// console.log(`The maximum sum is ${sum}`); //The maximum sum is 247


// // Example 4: Find Maximum Value
// let numbers = [23,67,12,89,45,91,34];
// let maxnumber = numbers[0];
// let sum = 0;
// for(let i = 0; i < numbers.length ; i++){
//   if(maxnumber < numbers[i]){
//     maxnumber = numbers[i];
    
//   }
// }console.log(`The maximum value is ${maxnumber}`);


// // Example 4: Reverse Print an Array

// let colors = [`red`,`green`,`blue`, `yellow`];
// console.log(`Orignal order`);
// for(let i = 0 ; i < colors.length; i++){
//   console.log(colors[i]);
// }

// console.log("\nReverse order:");
// for (let i = colors.length - 1; i >= 0; i--) {
// console.log(colors[i]);
// }

// // Example 5: Filter Array(Create new array with conditions)

// let ages = [12,25,17,30,15,40,19];
// let adults = [];

// for(let i = 0 ; i <ages.length ; i++){
//   if(ages[i] >= 18){
//     adults.push(ages[i]);
//   }
// }
// console.log(adults);//(4) [25, 30, 40, 19]




// //Nested Arrays (2D Array)

// // Example 1: Iterate Through 2D Array
// let teams = [
//   [`Alice`,`Bob`],
//   [`Charlie`,`David`],
//   [`Eve`, `Frank`],
//   [`jhon` , `devil`],
//   [`thomas`],
//   [`janes`]
// ]

// for(let i = 0; i < teams.length ; i++){
//   console.log(`Team ${i +1}`);
//   for(let j = 0; j < teams[i].length ; j++){
//     console.log(`- ${teams[i][j]}  `);
//   }
// }// Output : 


// // Example 2:2D Array - Student Grades
// let grades = [
// [85,90,78],
// [92,88,95],
// [76,82,80]
// ];

// for(let student = 0; student < grades.length ; student++){
// let sum = 0;
//   for(let grade = 0; grade < grades[student].length ; grade++){
//  sum += grades[student][grade];
//   }

//   let average = sum / grades[student].length; 
//   console.log(`The average marks scored by student ${student +1} is ${average}`)
// }



// Example 3: Matrix Addition
let matrix1 = [[1,2],[3,4]]
let matrix2 = [[5,6],[7,8]]

let result = [];
for(let i = 0; i< matrix1.length; i++){
  result[i] =[]; 
  for(let j = 0; j <matrix2[i].length; j++){
     result[i][j] = matrix1[i][j] + matrix2[i][j];
     console.log(result[i][j]);
  }
}
console.log(result);// Output: 6,8,10,12