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

// let city = "London";
// console.log(city[0]); // "L" - first character
// console.log(city[1]); // "o" - second character
// console.log(city[2]); // "n" - third character
// console.log(city[3]); // "d" - fourth character
// console.log(city[4]); // "o" - fifth character
// console.log(city[5]); // "n" - sixth (last) character


// // First and Last Characters of string

// let word = `JavaScript`;
// // First character
// console.log(word[0]); // "J"
// // Last character
// console.log(word[word.length - 1]); // "t"


// // Out of Bounds Access

// let name = "Alice";

// console.log(name[0]); // "A" - valid
// console.log(name[4]); // "e" - valid
// console.log(name[5]); // undefined - out of bounds
// console.log(name[-1]); // undefined - negative index not supported  


// // Checking First Character

// let email = "alice@example.com";
// if (email[0] === '@') {
// console.log("Email cannot start with @");
// } else {
// console.log("Email format might be valid");
// }

// // Getting Initials 
//  let firstName = `Alice`;
//  let lastName = `Smith`;
//  let initials = firstName[0] + lastName[0];
//  console.log(initials); // "AS"

// //  with dots
// let formalInitials = firstName[0] + "." + lastName[0] + ".";
// console.log(formalInitials); // "A.S."

// // Pasword Validation

// let password = `Pass123`;
// let firstChar = password[0];
// let lastChar = password[password.length -1];

// console.log("First character: " + firstChar); // "P"
// console.log("Last character: " + lastChar); // "3"

// if(lastChar >= 0 && lastChar <= 9){
//     console.log("Password is valid");
// }

// // Strings are Immutable
// let word = "Hello";
// word[0] = "J"; // This does NOT work!
// console.log(word); // Still "Hello"
// // To "change" a string, create a new one
// let newWord = "J" + word.slice(1);
// console.log(newWord); // "Jello"

// // String Concatenation
// let firstName = "Alice";
// let lastName = "Smith";
// let fullName = firstName + " " + lastName;
// console.log(fullName); // "Alice Smith"

// // Adding space
// let fullNameWithSpace = firstName + " " + lastName;
// console.log(fullNameWithSpace); // "Alice Smith"

// // Multipple Concatination
// let greeting = "Hello, " + firstName + " " + lastName + "!";
// console.log(greeting); // "Hello, Alice Smith!"

// // Concatenating Numbers and Strings
// // Number + String = String
// let score = 100;
// let message1 = "Your score is: " + score;
// console.log(message1); // "Your score is: 100"
// console.log(typeof message1); // "string"
// // String + Number = String
// let message2 = "Player " + 1;
// console.log(message2); // "Player 1"
// // Multiple numbers and strings
// let age = 25;
// let message3 = "I am " + age + " years old";
// console.log(message3); // "I am 25 years old"


// // Example Creating URLs

// let domain = `example.com`;
// let protocol = `https://`;
// let page = `/about`;
// let fullUrl = domain + protocol +page;
// console.log(fullUrl); // "https://example.com/about"

// // += Operator for Concatination

// // Example 1
// let message = `Hello`;
// message += ` `;
// message +=`World`;
// message += `!`;
// console.log(message); // "Hello World!"

// // Example 2
// let htmlContent = `<div>`;
// htmlContent += `<h1>tittle<h1>`;
// htmlContent += `<p>lorem*5<p>`;
// htmlContent += `</div>`;
// console.log(htmlContent); // "<div><h1>tittle<h1><p>lorem*5<p></div>"

// // Number Addition Vs String Concatenation
// // All numbers - addition
// console.log(10 + 20); // 30 (number addition)
// // String first - concatenation
// console.log("10" + 20); // "1020" (string concatenation)
// // Number first, then string - concatenation
// console.log(10 + "20"); // "1020" (string concatenation)
// // Mixed operations
// console.log(10 + 20 + "30"); // "3030" (10+20=30, then "30"+"30")
// console.log("10" + 20 + 30); // "102030" (all concatenation)
// // Ussing Paranthesis
// console.log(`result:` + (10+20)); // "result:30" (10+20=30, then concatenation)
// console.log(`result:` + 10 + 20); // "result:1020" (all concatenation)

// Concatiation Vs Template Literals
let name = `alice`;
let age = 25;
let city = `New York`;
let message = "my name is " + name + "," +"i am "+ age +"years old," +"ilive in "+ city ;
let betterMessage = `my name is ${name}, i am ${age} years old, i live in ${city} city.`;
console.log(message);
console.log(betterMessage);

// null and undefined
let loggedInUser = null; // No one logged in initially
function login(username) {
loggedInUser = username;
}
function logout() {
loggedInUser = null; // Explicitly clear the user
}
login("Alice");
console.log(loggedInUser); // "Alice"
logout();
console.log(loggedInUser); // null