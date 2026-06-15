// Control Flow Introduction

// The if Statement
let age = 18;
if (age >= 18) {
  console.log(`You are eligible to vote!`);
}

// Example 2

let driverAge = 20;
if (driverAge >= 18) {
  console.log(`Eligible to get a license `);
}

// Temperature Check

let temperature = 35;
if(temperature >= 30){
    console.log(`It's hot outside`);
}
// Example 3
let password = "secure123";
if (password.length >= 8) {
console.log("Strong password");
}
// Output: Strong password

// The else if Statement

// Example 1
let studentGrade = prompt(`Enter Student Grade`);
if (studentGrade === `A`) {
  console.log(`Outstanding`);
} else if (studentGrade === `B`) {
  console.log(`Good`);
} else if (studentGrade === `C`) {
  console.log(`Doing Good`);
} else {
  console.log(`Improve Now!`);
}

// Example 2

let score = 55;

if (score >= 90) {
  console.log(`Grade A`);
} else if (score >= 75) {
  console.log(`Grade B`);
} else if (score >= 60) {
  console.log(`Grade C`);
} else if (score >= 33) {
  console.log(`Grade D`);
} else {
  console.log(`Improve Now!`);
}

// Example 3
let speed = 85;
if (speed > 100) {
console.log("Severe speeding - Heavy fine");
} else if (speed > 80) {
console.log("Speeding - Warning");
} else if (speed > 60) {
console.log("Normal speed");
}
// Output: Speeding - Warning

// The else Statement
// Example 1
let number = 7;
if(number%2 === 0){
    console.log(`The number is even`);
}else{
    console.log(`THe number is odd`);
}

// Example 2

let cityTemperature = 45;
if (cityTemperature > 30) {
console.log("Hot");
} else if (cityTemperature > 20) {
console.log("Warm");
} else if (cityTemperature > 10) {
console.log("Cool");
} else {
console.log("Cold");
}

// Example 3
// Login System
let userName = `admin`;
let userPassword = `1232@`;

if(userName === `admin` && userPassword=== `1232@`){
    console.log(`Password is correct`);
}else{
    console.log(`Password is invalid`);
}

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

// Example 2 
let studentAge = 25;
let isStudent = true;

if(studentAge< 18){
  console.log(`Child ticket is 5$`);
}else{
  if(isStudent){
    console.log(`Student ticket is 8$`);
  }else{
    console.log(`Adult icket is 12$ `);
  }
}// Output: Student ticket: $8

// // Example 3

// let num = 15;
// if (num > 0) {
// if (num % 2 === 0) {
// console.log("Positive even number");
// } else {
// console.log("Positive odd number");
// }
// } else if (num < 0) {
// console.log("Negative number");
// } else {
// console.log("Zero");
// }// Output: Positive odd number



// // Logical Operators

// // EXample 1 &&
// let age = 25;
// let hasLicense = true;

// if((age >= 18) && (hasLicense)){
//   console.log(`Can drive`);
// }else{
//   console.log(`Cannot Drive`);
// }

// // Example 2

// let username = "admin";
// let password = "secret";
// if (username === "admin" && password === "secret") {
// console.log("Access granted");
// } else {
// console.log("Access denied");
// }// Output: Access granted

// // Example 3
// let isWeekend = true;
// let isSunny = true;
// if (isWeekend && isSunny) {
// console.log("Let's go to the beach!");
// }
// // Output: Let's go to the beach!

// // Example1 of ||
// let day = `Saturday`;

// if((day === `Saturday`) || (day ===`Sunday`)){
//   console.log(`It's  weekend`);
// }else{
//   console.log(`It's not weekend `)
// }
// //Output: It's the weekend!
// // First condition is true, so result is true 


// // Example 2
// let userAge = 65;

// if((userAge< 5) || (userAge>60)){
//   console.log(`Free Admission`);
// }else{
//   console.log(`Regular fees`);
// }
// // output Fee Admission

// // Example 3
// let isHoliday = false;
// let isBirthday = true;
// if (isHoliday || isBirthday) {
// console.log("Day off!");
// }
// // Output: Day off!
// // isBirthday is true

// // Example 1: Not Operator

// let isAdult = true
// if(!(isAdult)){
//   console.log(`Eligible for vote`);
// }else{
//   console.log(`Not eligible for vote`);
// }

// // Example 2 
// console.log(!(5 > 3)); // false (inverts true)
// console.log(!(10 < 2)); // true (inverts false)
// console.log(!true); // false
// console.log(!false); // true

// // example 3
// let userName = "";
// if (!userName) {
// console.log("Username is required");
// }
// // Output: Username is required
// // empty string is falsy, !falsy = true


// // Combining Logical Operators
// // Example 1
// let citizenAge = 25;
// let isCitizen = true
// let hasVoted = true;

// if((citizenAge >= 18) && (isCitizen) && (hasVoted)){
//   console.log(`Eligible to vote`);
// }else{
//   console.log(`Not eligible to vote`);
// }//Output : Eligible to vote
// // citizenAge >= 18 (true) AND isCitizen (true) AND !hasVoted (true) = true


// // Example 2
// let isAdmin = false;
// let isModerator = true;
// let isOwner = false;
// if (isAdmin || isModerator || isOwner) {
// console.log("Access granted");
// }
// // Output: Access granted

// // example 3

// let temperature = 25;
// let isRaining = true;

// if((temperature > 20 && temperature < 30 ) && !(isRaining) ){
//   console.log(`Perfectd temperature i.e ${temperature} degress with Raining Sataus ${isRaining}.`);
// }else{
//   console.log(`NOT PEERFECT RAINING!`);
// }//Perfectd temperature i.e 25 degrees with Raining Sataus true.


// IMPORTANT NOTE
// 1. ! (NOT) - highest precedence
// 2. && (AND)
// 3. || (OR) - lowest precedence