// //  Assignment 4.1 of Advanced Array Methods (pending)
// // Array slice() Methode

// // Example 1:
// let numbers = [10, 20, 30, 40, 50, 60, 70];
// let newArray = numbers.slice(2, 5);
// let lastThree = numbers.slice(4);
// console.log(newArray); // Output : 30 40 50 60
// console.log(lastThree); // Output : 50 60 70
// console.log(numbers); //(7) [10, 20, 30, 40, 50, 60, 70]

// // Example 2:
// let songs = [`Song1`, `Song2`, `Song3`, `Song4`, `Song5`, `Song6`];
// let morningPlaylist = songs.slice(0, 3);
// let eveningPlalist = songs.slice(4);
// let noonSong = songs.slice(1, 6);
// console.log(morningPlaylist); //(4) ['Song1', 'Song2', 'Song3',]
// console.log(eveningPlalist); //(2) ['Song5', 'Song6']
// console.log(noonSong); //(4) [`Song2`,'Song3', 'Song4', 'Song5', 'Song6']

// // splice() method
// // Example 1:
// let colors = [`red`, `green`, `blue`, `yellow`, `purple`, `orange`];
// let removedElements = colors.splice(2, 2);
// console.log(removedElements); // Output: blue yellow
// console.log(colors); // Output: red , green purple orange

// // Example 2:
// let inputNumbers = [1, 2, 3, 7, 9];
// inputNumbers.splice(3, 0, 4, 5, 6);
// console.log(inputNumbers); // Output:

// // sort() Method
// let fruits = [`Banana`, `Apple`, `Mango`, `Cherry`, `Orange`];
// fruits.sort();
// console.log(fruits);

// let nums = [5, 10, 1, 100, 25];
// nums.sort();
// console.log(nums);//output : 1,10,100,5,25

// Example 3:
let scores = [78,92,85,88,95,73];
scores.sort((a,b) => a-b);
console.log(scores);//73,75,85,88,92,95, Increasing Order
scores.sort((a,b) => b-a);//95,92,85,88,78,73 Decreasing Order


// Array Join Method
// Exaple 1:
let words = [`JavaScript` , `is` , `awesome`];
let sentence = words.join(` `);
let hyphenatedString = words.join(`-`);
let mergedSentence = words.join(``);
console.log(sentence);
console.log(hyphenatedString)
console.log(mergedSentence);

// Example 2:
let dateArray = [`2026` , `12`, `6`]
let date = dateArray.join(`/`);
let stringDate = dateArray.join(`-`);
console.log(date);
console.log(stringDate);

// Example 3:
let array = [ `14` ,`30` , `00`];
let time  = array.join(`:`);
console.log(time);

// 