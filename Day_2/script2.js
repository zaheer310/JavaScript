// // Comparison Operators
// console.log(5 == '5'); // true (loose equality)
// console.log(5 === '5'); // false (strict equality)
// console.log(5 != '5'); // false (loose inequality)
// console.log(5 !== '5'); // true (strict inequality)
// console.log(5 > 3); // true
// console.log(5 < 10); // true
// console.log(5 >= 5); // true
// console.log(5 <= 4); // false

// let age = 18;
// console.log(age>=18); // true

// // example 
// let age= 17;
// if(age>=18){
//     console.log(`You are eligible to vote.`);

// }else{
//     console.log(`You are not eligible to vote.`);}
// // output: You are not eligible to vote.


// // example 2 for Grade checking
// let marks = 85;
// if(marks >= 90){
//     console.log(`Grade: A`);
// }else if(marks >= 80){
//     console.log(`Grade: B`);
// }else if(marks >= 70){
//     console.log(`Grade: C`);
// }else if(marks >= 60){
//     console.log(`Grade: D`);
// }else{
//     console.log(`Grade: F`);
// }// output: Grade: B

// // loose and strict equality

// let userInput = "10"; // From a form field (always a string)

// // Loose equality - might hide bugs

// if (userInput == 10) {
// console.log("Input is 10"); // This runs! (type conversion)
// }

// // Strict equality - more reliable

// if (userInput === 10) {
// console.log("Input is 10"); // This does NOT run
// }

// // Proper way
// let numericInput = Number(userInput);
// if(numericInput === 10){
//     console.log(`Input is number 10`);
// }else{
//     console.log(`Input is not a number`);
// }

// // Boolean Checks

// let isActive = true;
// // Loose Equality
// if(isActive == 1){
//     console.log(`Active (loose check)`); // This runs
// }
// //Strict Equality
// if(isActive === true){
//     console.log(`Active (strict check)`); // Better
// }

// // Even better - direct boolean check
// if (isActive) {
// console.log("Active"); // Best!
// }

// // example of APIResponse
// let apiResponse = {
// status: "200", // String from API
// success: true
// };

// // Loose comparison
// if (apiResponse.status == 200) {
// console.log("Success"); // Works but not ideal
// }

// // Fix: Convert to number first
// if(Number(apiResponse.status) ===200){
//     console.log(`Success`); // Better
// }


// // String Comparision

// // Basic Comparision
// console.log(`a` > `A`); // true (lowercase > uppercase in Unicode)
// console.log(`b`> `c`); // false (b < c)
// // String Comparision
// console.log(`apple` > `banana`); // false (a < b)
// console.log(`cat` > `dog`); // false (c < d)

// // Character-by-Character Comparison
// // Compares first different character
// console.log("apple" < "application"); // true
// // Compares: a=a, p=p, p=p, l=l, e < i, so "apple" < "application"
// console.log("hello" > "help"); // false
// // Compares: h=h, e=e, l=l, l < p, so "hello" < "help"
// console.log("cat" < "catalog"); // true
// // Compares: c=c, a=a, t=t, then "cat" ends (shorter < longer when prefix matches)



// Number Strings

// String comparison (character by character)
console.log("10" < "2"); // true 
// Why? Compare first character: "1" < "2" (49 < 50)
console.log("100" < "20"); // true 
// Why? Compare first character: "1" < "2"
// Actual number comparison
console.log(10 < 2); // false 
console.log(100 < 20); // false 