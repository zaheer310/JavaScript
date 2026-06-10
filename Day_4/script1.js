// String Methods with Arguments

// method 1
// indexOf()
// Syntax: string_variable_name.indexOf(`searchValue`);
// The .indexOf() method searches for a value in a string and returns the index (position) of its first occurrence. If the value is not found, it returns -1 .

// // Example 1
// let message = "Welcome to coding";
// if (message.indexOf("coding") == -1) {
//   console.log("Found the word coding!");
// } else {
//   console.log(`NOT FOUND!`);
// }
// // Example 2
// let sentence = `I Love Codding In Java`;
// console.log(sentence.indexOf(`I`));

// // Example 3: Character not found
// let text = "Hello World";
// console.log(text.indexOf("z")); // -1

// // Example 4: Case sensitivity
// let word = "JavaScript";
// console.log(word.indexOf("java")); // -1 (case matters!)
// console.log(word.indexOf("Java")); // 0

// // Example 5:
// let userMessage = `Welcome to Codding in JavaScript`;
// let indexValue = userMessage.indexOf(`Codding`);
// if (indexValue === -1) {
//   console.log(`Substring not Found !`);
// } else {
//   console.log(`Substring Found at index = ${indexValue}`);
// } //Output:

// // Method Chaining

// // Example 1: Basic Chaining
// let msg = `   hello.  `;
// let result = msg.trim().toUpperCase();
// console.log(msg);
// // Output:

// // Example 2: Cleaning user input
// let userName = " UserName123 ";
// let processed = userName.trim().toLowerCase();
// console.log(processed); // "username123"

// // Example 3: Order matters in chaining

// let inputWord = `javascript`;
// console.log(inputWord.slice(0, 4).toUpperCase()); //JAVA
// console.log(inputWord.slice(4).toUpperCase()); //SCRIPT
// console.log(inputWord.slice(-6).toUpperCase()); //SCRIPT

// Slicing String
// The .slice() method extracts a portion of a string and returns it as a new string without modifying the original.
// Syntax : String_variable_name.slice(startingIndex , enddingIndex);

// Start index is included
// End index is NOT included
// If only one argument is provided, slices from that index to the end

// // Example 1: Basic slicing
// let word = "Mountains";
// console.log(word.slice(0, 5)); // "Mount"
// console.log(word.slice(5)); // "ains"

// // Example 2: Extracting middle portion
// let text = "JavaScript";
// console.log(text.slice(4, 10)); // "Script"

// // Example 3: Slicing from an index to end
// let message = "Hello World";
// console.log(message.slice(6)); // "World"

// // Example 4: Using negative indices (from end)
// let lang = "JavaScript";
// console.log(lang.slice(-6)); // "Script"
// console.log(lang.slice(0, -6)); // "Java"

// // Example 5: Getting first and last characters
// let name = "Alexander";
// console.log(name.slice(0, 1)); // "A" (first)
// console.log(name.slice(-1)); // "r" (last)

// // Replacing Substring
// // The .replace() method searches for a value in a string and replaces it with a new value. It only replaces the first occurrence it finds.
// //string_variable_name.replace(old_value , new_value);

// // Example 1:Basic Replacement
// let fruit = `I love apple pie`;
// console.log(`love`, `hate`);

// // Example 2: Only first occurrence is replaced
// let inputText = `I love apple pie and apple juice`;
// console.log(inputText.replace(`apple`, `orange`));

// // Example 3: Case sensitivity
// let inputMessage = "Hello hello HELLO";
// console.log(inputMessage.replace("hello", "hi")); // "Hello hi HELLO"

// // Example 4: Replacing spaces
// let sentence = `Hello World`;
// console.log(sentence.replace(` `, `_`));

// // Example 5: Chaining with replace
// let str = " javascript ";
// let result = str.trim().replace("java", "type");
// console.log(result); // "typescript"

// // Arrays
// // Syntax : let array_name = [item1 , item2 , item3];

// // Example 1:
// let colors = [`Red`, `White`, `Orange`];
// console.log(colors); // Output: ["red", "green", "blue"]

// // Example 2: Accessing array elements (0-indexed)
// let fruits = ["apple", "banana", "mango"];
// console.log(fruits[0]); // "apple"
// console.log(fruits[2]); // "mango"

// // Example 3: Arrays with different data types
// let mixedArray = [`Apple`, `Orange`, 12, true, 3.14];
// console.log(mixedArray[0]);
// console.log(mixedArray[1]);
// console.log(mixedArray[3]);
// console.log(mixedArray[4]);
// console.log(mixedArray[2]);

// // Example 4: Array length property
// let numbers = [10, 20, 30, 40];
// console.log(numbers.length); // 4

// // Example 5:
// let prizes = [`first`, `second`, `third`, `fourth`];
// let lastPrize = prizes.length - 1;
// console.log(lastPrize);
// // Output : fourth

// // Arrays are Mutable

// // Example 1: Changing an element
// let inputFruits = ["mango", "apple", "litchi"];
// inputFruits[0] = "banana";
// console.log(inputFruits); // ["banana", "apple", "litchi"]

// // Example 2: Modifying multiple elements
// let arrayNumbers = [1, 2, 3, 4];
// arrayNumbers[0] = 10;
// arrayNumbers[3] = 40;
// console.log(arrayNumbers); // [10, 2, 3, 40]

// // Example 3: Changing last element
// let input_colors = ["red", "green", "blue"];
// colors[input_colors.length - 1] = "yellow";
// console.log(input_colors); // ["red", "green", "yellow"]

// // Example 4: Arrays vs Strings mutability
// let arr = ["a", "b", "c"];
// arr[0] = "z"; // Works!
// console.log(arr); // ["z", "b", "c"]

// // Strings are IMMUTABBLE
// // let str = "abc";
// // str[0] = "z"; // Doesn't work
// // console.log(str); // "abc" (unchanged)

// Example 5: Updating based on conditions
let scores = [85, 90, 76, 91];
if (scores[2] > 80) {
  scorescores[2] = ++scores[2];
} else {
  scores[2] = --scores[2];
}
console.log(scores); //(4) [85, 90, 75, 91]

// Basic Array Methods

// .push(item), .pop() ,.unshift(item) , .shift()
// Syntax : arrayName.push(inputValue);

// .push(item) : Add to the end
// .pop() : Remove from the end (returns removed item)
// .unshift(item) : Add to the start
// .shift() : Remove from the start (returns removed item)

// Example 1: Using push() to add to end
let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits); // ["apple", "banana", "mango"]

// Example 2:
let numbers = [122, 124, 132];
numbers.push(147);
console.log(numbers); //(4) [122 , 124 , 132 , 147]

// Example : Using unshift() to add to start
let num = [2, 3, 4];
num.unshift(1);
console.log(num); // [1, 2, 3, 4]

// Example : Using pop() to remove from end
let colors = ["red", "green", "blue"];
let removed = colors.pop();
console.log(removed); // "blue"
console.log(colors); // ["red", "green"]

// Example  : Using shift() to remove from start

let vegetables = [`Tomato`, `Brinjal`, `Potato`, `Carrot`];
vegetables.shift();
console.log(vegetables); //Output : (3) ['Brinjal', 'Potato', 'Carrot']

// Search & Merge Methods
// 1  .indexOf(item) Returns the index of an item (or -1 if not found)
// 2  .includes(item) Returns true if item exists, false otherwise
// 3  .concat(array) Merges arrays into a new array
// 4  .reverse() Reverses the array in place

// Example : .indexOf(item)
let inputFruits = ["apple", "banana", "mango"];
console.log(inputFruits.indexOf("banana")); // 1
console.log(inputFruits.indexOf("grape")); // -1

// Example 2: Using includes()
let inputColors = ["red", "green", "blue"];
console.log(inputColors.includes("green")); // true
console.log(inputColors.includes("yellow")); // false

// Example
let cars = [`Ferrari`, `Bugati`, `Mechlaren`, `BMW`, `Mercedes`];
if (cars.includes(`Bugati`)) {
  cars.shift();
}
console.log(cars);//(4) ['Bugati', 'Mechlaren', 'BMW', 'Mercedes']

// Example for Concat()
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combinedArray = arr1.concat(arr2);
console.log(combinedArray); // Output :[1, 2, 3, 4, 5, 6]

// Example to revese an array
let digits = [1, 2, 3, 45];
digits.reverse();
console.log(digits); // [5, 4, 3, 2, 1]

// Example to combine the arrays
let items = [`a` , `b` , `c`];
let moreItems = [`d` , `e`];
let all = items.concat(moreItems);
console.log(all.includes(`c`));//true
console.log(all.indexOf(`d`));//3


// The  .splice() METHOD
// The .splice() method is a powerful tool that can remove, replace, or add elements at any position in an array. It modifies the original array.
// Syntax : arrayName.splice(startIndex ,deleteCount, item1 ,item2,....);
// startIndex : Where to start the operation
// deleteCount : How many elements to remove
// item1, item2... : Elements to add (optional)

// Example 1:
let months = [`Jan` , `Feb` , `Mar` , `Jun`];
months.splice(1,2, `july` , `april` , `May`);
console.log(months);//(5) ['Jan', 'july', 'april', 'May', 'Jun']

// Example 2: Removing elements
let inputColors1 = [`Red` , `Blue` , `Green` , `Orange`];
inputColors1.splice(0,3);
console.log(inputColors1);// Output: ['Orange']

// Example 3: Replacing Elemnts
let InputFruits = [`Apple` , `Banana` ,`Mango` , `Orange`];
InputFruits.splice(0, 2, `Cherry` , `Strawberry`);
console.log(InputFruits);// Output: (4) ['Cherry', 'Strawberry', 'Mango', 'Orange']

// Example : Removing Multiple Elements
let words = [`a` ,`b` , `c` , `d` , `e`];
words.splice(0,4);
console.log(words);// Output : ['e']

// pending topics are 14 & 15