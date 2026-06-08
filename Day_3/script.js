// // Control Flow Introduction

// // The if Statement
// let age = 18;
// if (age >= 18) {
//   console.log(`You are eligible to vote!`);
// }

// // Example 2

// let driverAge = 20;
// if (driverAge >= 18) {
//   console.log(`Eligible to get a license `);
// }

// // Temperature Check

// let temperature = 35;
// if(temperature >= 30){
//     console.log(`It's hot outside`);
// }
// // Example 3
// let password = "secure123";
// if (password.length >= 8) {
// console.log("Strong password");
// }
// // Output: Strong password

// // The else if Statement

// // Example 1
// let studentGrade = prompt(`Enter Student Grade`);
// if (studentGrade === `A`) {
//   console.log(`Outstanding`);
// } else if (studentGrade === `B`) {
//   console.log(`Good`);
// } else if (studentGrade === `C`) {
//   console.log(`Doing Good`);
// } else {
//   console.log(`Improve Now!`);
// }

// // Example 2

// let score = 55;

// if (score >= 90) {
//   console.log(`Grade A`);
// } else if (score >= 75) {
//   console.log(`Grade B`);
// } else if (score >= 60) {
//   console.log(`Grade C`);
// } else if (score >= 33) {
//   console.log(`Grade D`);
// } else {
//   console.log(`Improve Now!`);
// }

// // Example 3
// let speed = 85;
// if (speed > 100) {
// console.log("Severe speeding - Heavy fine");
// } else if (speed > 80) {
// console.log("Speeding - Warning");
// } else if (speed > 60) {
// console.log("Normal speed");
// }
// // Output: Speeding - Warning

// // The else Statement
// // Example 1
// let number = 7;
// if(number%2 === 0){
//     console.log(`The number is even`);
// }else{
//     console.log(`THe number is odd`);
// }

// // Example 2

// let temperature = 45;
// if (temperature > 30) {
// console.log("Hot");
// } else if (temperature > 20) {
// console.log("Warm");
// } else if (temperature > 10) {
// console.log("Cool");
// } else {
// console.log("Cold");
// }

// // Example 3
// // Login System
// let userName = `admin`;
// let password = `1232@`;

// if(userName === `admin` && password === `1232@`){
//     console.log(`Password is correct`);
// }else{
//     console.log(`Password is invalid`);
// }

// Nested Conditionals
// Example 1
let marks = 80;

if (marks >= 34) {
  if (marks >= 50) {
    console.log(`Performing Well!`);
  } else {
    console.log(`Improve now!`);
  }
} else {
  console.log(`F`);
}

// Example 2 pg 7
