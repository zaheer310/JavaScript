// Output Methods
// console.log("Hello, World!"); // Logs to the console
// alert("Welcome to JavaScript!"); // Displays an alert dialog

// let product = `Laptop`;
// let price =  999;
// console.log(`product: ` , product);
// console.log(`Price: `, price);

// // printing calculations 
// console.log(`sum: `, (5+10));//15
// console.log(`difference: `, (10-5));//5
// console.log(`product: `, (5*10));//50
// console.log(`quotient: `, (10/5));//2

// // Other Console Methodes

// // Warning message(yellow in console)
// console.warn("This is a warning!");
// // Error message(red in console)
// console.error("This is an error!");
// // Info message(blue in console)
// console.info("This is an informational message!");

// //  clears the console, this will clear the entire console output, providing a clean slate for new logs and messages.
// //  console.clear();

// // Easy Multi-line Strings

// // regular string with newline 
// let oldWay = "Line 1\nLine 2\nLine 3";
// console.log(oldWay);
// // Template literals with backticks
// let newWay =`Line 1
// Line 2
// line 3`;
// console.log(newWay);

// // Embed Expressions 
// let a = 10;
// let b = 20;
// console.log(`The sum of ${a} and ${b} is ${a + b}.`); // The sum of 10 and 20 is 30.
// console.log(`product: ${a*b}`); // product: 200
// console.log(`difference: &{b-a}`); // difference: 10
// console.log(`quotient: ${b/a}`); // quotient: 2

// // example 2
// let userName = `bob`;
// let hour = 14;

// let greeting = `good ${hour < 12 ? `Morning` : `Afternoon`} ${userName} !`;
// console.log(greeting); // good Afternoon bob!

// // Shopping Cart Example
// let item = `Apple`;
// let quatity = 5;
// let price = 2.5;
// let total = price*quantity;

// let reciept = `item: ${item}
// quantity: ${quantity}
// total: ${total}`;
// console.log(reciept);

// Expression and Function calls

function getFullName(first, last){
    return `${first} ${last}`;
}
let firstname = `Zaheer`;
let lastName = `Uddin`;
let message = `I am ${getFullName(firstname, lastName)}`;
console.log(message);// I am Zaheer Uddin
 
// Conditional logic
let age = 20;
let status = `You are ${age >= 18 ? `an Adult` : `a Minor`}`;
console.log(status); // You are an Adult
    