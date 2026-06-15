// // Methods
// // Syntax :-variableName.methodeName();

// // Exaple 1: Using Console.log() method
// console.log(`Hello`);

// // Example 2: Using  Alert() method
// alert(`Welcome to JavaScript`);

// // Example 3:Calling methods to string
// let text = `JavaScript`;
// text.toUpperCase(text);
// console.log(text);

// // Example 4: methods  return values
// let message = `    hello.   `;
// let newMessage = message.trim();
// console.log(newMessage);

// // Example 5:
// // Some methods take arguments
// let word = `Mountains`;
// console.log(word.slice(0, 5));

// // The .trim() Method
// // Syntax: variableNmae.trim();
// // Example 1
// let username = " coding_wizard ";
// let clean = username.trim();
// console.log(clean); // "coding_wizard"

// // Example 2: Trimming user input
// let email = " user@example.com ";
// let cleanEmail = email.trim();
// console.log(cleanEmail); // "user@example.com"

// // Example 3 Orignal Sting unchanged
// let orignalString = `  test.   `; //string withh spaces
// let newString = orignalString.trim(); //string with spaces at start and at end
// console.log(orignalString); // Unchanged
// console.log(newString);

// // Example 4: Trimming empty spaces
// let input = " ";
// console.log(input.trim()); // "" (empty string)

// // Strings are Immutable
// // Example 1: Must store the result
// let message = "javascript";
// let upper = message.toUpperCase();
// console.log(message); // "javascript" (original unchanged)
// console.log(upper); // "JAVASCRIPT" (new string)

// // Example 2:
// let word = `cat`;
// word[0] = `b`;
// console.log(word); // word is not changged

// // Example 3: Multiple operations create multiple strings

// let text = `    hello   `;
// let newText = text.trim().toUpperCase();
// console.log(text); //    hello
// console.log(newText);

// // Example 4: Concatenation creates new strings
// let firstWord = `Mohd`;
// let secondWord = `Abdul`;
// let thirdWord = `Zaheer`;
// let FourthhWord = `Uddin`;

// let fullName = ` ${firstWord} ${secondWord} ${thirdWord} ${FourthhWord}`;
// console.log(fullName); // Mohd Abdul Zaheer Uddin

// // Case Conversion Methods
// // 1.toUpperCase(): Converts all characters to uppercase
// //2.toLowerCase(): Converts all characters to lowercase

// // Example 1: Converting to uppercase
// let msg = "JavaScript is Fun";
// console.log(msg.toUpperCase()); // "JAVASCRIPT IS FUN"

// // Example 2:
// let message = `stop yelling`;
// console.log(message.toUpperCase());

// // Example 3:
// let userInput = `YES`; //String in UpperCase
// let newUserInput = userInput.toLowerCase();
// if (newUserInput === `yes`) {
//   console.log(`Verified User!`);
// } else {
//   console.log(`nikal yahan se!`);
// }

// // Example 4: Working with email addresses
// let email = "User@EXAMPLE.COM";
// console.log(email.toLowerCase()); // "user@example.com"

// // String Methods with Arguments - indexOf()
// // Syntax: String_Variable_Name.indexOf(arguments)

// // Example 1:
// let str = `hello`;
// console.log(str.indexOf(`h`));
// console.log(str.indexOf(`e`));

// // example 2:
// let sentence = `i love javascript`;
// console.log(sentence.indexOf(`love`)); //2
// console.log(sentence.indexOf(`java`)); //7

// Example 3:
let message = "Welcome to coding";
if (message.indexOf("coding") == -1) {
  console.log("Found the word coding!");
} else {
  console.log(`NOT FOUND!`);
}
