// // Truthy and Falsy Values
// let userName = "Mohd Abdul Zaheer Uddin";
// if (userName) {
// console.log(`Welcome , ${userName}!`);
// } else {
// console.log("Please enter a userName");
// }
// // Output: Welcome , Mohd Abdul Zaheer Uddin!
// // Empty string is truthy

// // Example 2
// let score = 0;
// if (score) {
// console.log("You have " + score + " points");
// } else {
// console.log("No points yet");
// }
// // Output: No points yet
// // 0 is falsy

// // Example 3
// let userInput = prompt("Enter your name:");
// if (userInput) {
// console.warn("Hello, " + userInput);
// } else {
// console.warn("You didn't enter a name");
// }
// // If user enters nothing or cancels, empty string is falsy



// The Switch Statement

// Example 1 of traffic signal
let color = `red`;
switch(color){

    case `red` : console.log(`Stop!`);
                    break;
    case `green`: console.log(`Go!`);
                    break;
    case `yellow`: console.log(`Wait!`);
                    break;  
    default : console.log(`GADDI SIDE MAI LE!!!!!`);          
} //Output : Stop!

continue from pg 17
