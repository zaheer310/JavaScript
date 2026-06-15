// // Advanced Array Methods - Study Notes
// Day_4.1 notes (pending)

// // slice()
// // Syntax: arrayName.slic(startingIndex, endIndex)

// // Exapmle 1: Basic Slicing
// let numbers = [1,2,3,4,5,6];
// let sliced = numbers.slice(1,4)
// console.log(sliced);// Output:
// console.log(numbers);// Output :

// //Example 2: Slicing from index to end
// let fruits = [`Apple` , `Banana` , `Mango` , `Orange` , `grapes`];
// let lastThree = fruits.slice(2);
// console.log(lastThree);// Output:
// console.log(fruits);

// // Example 3: Getting first few elements
// let colors = [`Red` ,`Green` ,`Blue` ,`Purple`];

// let firstTwo = colors.slice(0,2);
// console.log(firstTwo);// Output:

// // Example 4: Using Negative Indices
// let letters = [`a` , `b` ,`c`,`d`,`e`]
// console.log(letters.slice(-2));//Output : d ,e
// console.log(letters.slice(1,-1));//Output : b,c,d,e

// // Example 5: Creating a copy of entire array
// let original = [10, 20, 30];
// let copy = original.slice();
// copy[0] = 99;
// console.log(original); // [10, 20, 30] (unchanged)
// console.log(copy); // [99, 20, 30]

// // Array Splice Method
// // Syntax : arrayName.splice(startingIndex, deleteCount, item1,item2...);

// // Example 1: Removing & capturing deleted elements
// let inputColors = [`red` , `green` ,`blue` ,`yellow` ,`purple`];
// let removed = inputColors.splice(1,2);
// console.log(removed); // ["green", "blue"]
// console.log(colors); // ["red", "yellow", "purple"]

// // Example 2: Replacing multiple elements
// let inputNumbers = [1, 2, 3, 4, 5];
// inputNumbers.splice(1, 3, 10, 20, 30);
// console.log(inputNumbers); // [1, 10, 20, 30, 5]

// // Example 3: Inserting multiple elements without deletion
// let arr = [1, 5];
// arr.splice(1, 0, 2, 3, 4);
// console.log(arr); // [1, 2, 3, 4, 5]

// // Example 4: Removing from end using negative index
// let items = [`a` ,`b`, `c` , `d`,`e`];
// items.splice(-2,2)
// console.log(items);

// // Example 5: Replacing single element
// let inputFruits = ["apple", "banana", "mango"];
// inputFruits.splice(1, 1, "orange");
// console.log(inputFruits); // ["apple", "orange", "mango"]

// // Array sort() Method
// // The .sort() method sorts the elements of an array in place and returns the sorted array. By default, it converts elements to strings and sorts them alphabetically.
// // Syntax: arrayName.sort()

// // Exaple 1: Sorting string alphebetic
// let userFruits = [`Banana` , `Apple` , `Mango` ,`cherry`];
// console.log(userFruits.sort());

// Example 2: Sorting numbers (WARNING: unexpected behavior!)
let numbers = [10, 5, 40, 25, 1000];
numbers.sort();
console.log(numbers); // [10, 1000, 25, 40, 5] (sorted as strings!)

// Example 3: Sorting numbers correctly with compare function
let scores = [85, 92, 78, 95, 88];
scores.sort((a, b) => a - b);
console.log(scores);

// Example 4: Sorting in descending order
let marks = [34, 56, 78, 90, 52];
marks.sort((a, b) => b - a);
console.log(marks); // Output:

// Example 5: Case-insensitive string sorting
let names = [`charlie`, `ALICE`, `BOb`, `DAVid`];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names); // ["Alice", "bob", "charlie", "David"]

// Array join() Method
// The .join() method creates and returns a new string by concatenating all elements of an array, separated by a specified separator.
// Syntax: arrayName.join()

// Example 1:Basic join with default separator
let colors = [`red`, `green`, `blue`];
let result = colors.join();
console.log(result); // Output:red,green,blue
console.log(typeof result); // Output:string
console.log(typeof colors); //Output: object

// Example 2: join with space seperators
let words = [`Hello`, `World`, `JavaScript`];
let sentence = words.join(` `);
console.log(sentence); // Output : Hello World JavaScript

// Example 3: Join with hyphen
let date = ["2024", "12", "25"];
let formatted = date.join("-");
console.log(formatted); // "2024-12-25"

// Example 4: join with empty string
let letters = [`J`, `A`, `V`, `A`];
let newWords = letters.join(``);
console.log(newWords); // Output: JAVA
