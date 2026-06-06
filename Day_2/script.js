//camelCase : Naming conventions

// Bad - unclear names
// let x = 25;
// let y = "John";
// let z = true;

// Good - descriptive names

// let userAge = 25;
// let firstName = "John";
// let isEmailVerified = true;

// Bad - too short

// let fn = "Alice";
// let ln = "Smith";

// Good - clear and readable

// let firstName = "Alice";
// let lastName = "Smith";

// Bad - abbreviations

// let usrAddr = "123 Main St";
// let empSal = 50000;

// Good - spelled out

// let userAddress = "123 Main St";
// let employeeSalary = 50000;





// Boolean expression

// let isLoggedIn = true;
// let isOver18 = false;
// let hasPermission = true;
// let isEmailVerified = false;
// console.log(isLoggedIn);

// let age = 20;
// let isAdult = age >= 18;
// console.log(isAdult);

// let score = 75;
// let isPassing = score >= 60;
// console.log(isPassing);

// let temperature = 30;
// let isHot = temperature >= 25;
// console.log(" Is the temperature hot " + isHot);

//Common Boolean Use Cases

// Toggle states

// let isMenuOpen = false;
// let isDarkMode = true;
// let isPlaying = false;

// User states

// let isLoggedIn = true;
// let isAdmin = false;
// let isVerified = true;

// Feature flags

// let isFeatureEnabled = true;
// let isBetaUser = false;

// Validation

// let isEmailValid = true;
// let isPasswordStrong = false;
// let isFormComplete = true;


// JavaScript: Dynamically Typed

// let x = 5;
// console.log(typeof x);

// x = `Hello`;
// console.log(typeof x);

// x = true ;
// console.log(typeof x);

// x = [1,2,3];
// console.log(typeof x);

// // JavaScript: Dynamically Typed

// function addNumbers(a, b) {
//     return a + b;
// }

// console.log(addNumbers(5, 10)); // 15
// console.log(addNumbers(10, "5")); // "105"
// console.log(addNumbers("5", 10)); // "510"

// // TypeScript: Statically Typed

// // let x: number = 5;
// console.log(x);

// x = `Hello`; // Error: Type 'string' is not assignable to type 'number'

// x = true; // Error: Type 'boolean' is not assignable to type 'number'

// this will only accept numbers
// x = 10; // Valid



// function addNumbers(a: number, b: number): number {
// return a + b;
// }
// console.log(addNumbers(5, 10)); // 15 ✓
// console.log(addNumbers("5", 10)); // ❌ ERROR at compile time!
// console.log(addNumbers(5, "10"));

// Strings in JavaScript

// Nesting Quotes
// Use double quotes on outside, single quotes inside

// let message1 = "It's a beautiful day"; // ✓ Works!
// let message2 = "He said, 'Hello there!'"; // ✓ Works!

// Use single quotes on outside, double quotes inside

// let message3 = 'She said, "Good morning!"'; // ✓ Works!
// let message4 = 'The word "hello" is friendly'; //✓ Works!


//Length of a string

// let name = `Alice`;
// console.log(name.length); // 5

// let message = "Hello, World!";
// console.log(message.length); // 13

// let emptyString = "";
// console.log(emptyString.length); // 0

// // Common String Methods (Preview)

// let text = `Hello,World!`;
// // convert to uppercase
// console.log(text.toUpperCase()); // "HELLO, WORLD!"
// // convert to lowercase
// console.log(text.toLowerCase()); // "hello, world!" 
// // find index of a substring
// console.log(text.indexOf("World")); // 7
// // extract a substring
// console.log(text.substring(0, 5)); // "Hello"
// // replace a substring
// console.log(text.replace("World", "Everyone")); // "Hello, Everyone!"

// // Escape Sequences

// let newLine = `First line\nSecond line`;
// console.log(newLine);

// let tab = `Name:\tAlice`;
// console.log(tab);

// let backslash = `This is a backslash: \\`;
// console.log(backslash);

// let quote = `she said, \"Hello!\"`;
// console.log(quote);

// String Indexing

let city = "London";
console.log(city[0]); // "L" - first character
console.log(city[1]); // "o" - second character
console.log(city[2]); // "n" - third character
console.log(city[3]); // "d" - fourth character
console.log(city[4]); // "o" - fifth character
console.log(city[5]); // "n" - sixth (last) character