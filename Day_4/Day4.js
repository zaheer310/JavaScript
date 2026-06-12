// Advanced Array Methods - Study Notes

// slice()
// Syntax: arrayName.slic(startingIndex, endIndex)

// Exapmle 1: Basic Slicing
let numbers = [1,2,3,4,5,6];
let sliced = numbers.slice(1,4)
console.log(sliced);// Output:
console.log(numbers);// Output :


//Example 2: Slicing from index to end
let fruits = [`Apple` , `Banana` , `Mango` , `Orange` , `grapes`];
let lastThree = fruits.slice(2);
console.log(lastThree);// Output:
console.log(fruits);

// Example 3: Getting first few elements
let colors = [`Red` ,`Green` ,`Blue` ,`Purple`];

let firstTwo = colors.slice(0,2);
console.log(firstTwo);// Output:

// Example 4: Using Negative Indices
let letters = [`a` , `b` ,`c`,`d`,`e`]
console.log(letters.slice(-2));//Output : d ,e
console.log(letters.slice(1,-1));//Output : b,c,d,e


// Example 5: Creating a copy of entire array
let original = [10, 20, 30];
let copy = original.slice();
copy[0] = 99;
console.log(original); // [10, 20, 30] (unchanged)
console.log(copy); // [99, 20, 30]


// Array Splice Method
// Syntax : arrayName.splice(startingIndex, deleteCount, item1,item2...);


// Example 1: Removing & capturing deleted elements
let colors = [`red` , `green` ,`blue` ,`yellow` ,`purple`];
let removed = color.splice(1,2);
console.log(removed); // ["green", "blue"]
console.log(colors); // ["red", "yellow", "purple"]

// Example 2: Replacing multiple elements
let numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 3, 10, 20, 30);
console.log(numbers); // [1, 10, 20, 30, 5]

// Example 3: Inserting multiple elements without deletion
let arr = [1, 5];
arr.splice(1, 0, 2, 3, 4);
console.log(arr); // [1, 2, 3, 4, 5]

// Example 4: Removing from end using negative index
let items = [`a` ,`b`, `c` , `d`,`e`];
items.splice(-2,2)
console.log(items);

// Example 5: Replacing single element
let fruits = ["apple", "banana", "mango"];
fruits.splice(1, 1, "orange");
console.log(fruits); // ["apple", "orange", "mango"]


// Array sort() Method
// The .sort() method sorts the elements of an array in place and returns the sorted array. By default, it converts elements to strings and sorts them alphabetically.
// Syntax: arrayName.sort()
