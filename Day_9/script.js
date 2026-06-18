// // Day_9
// // Advanced Array methods :- forEach , map , filter some/every ,  reduce

// // forEach method
// // Example : Print all numbers
// let numbers = [10, 20,30,40]
// numbers.forEach((num) =>{
// console.log(num)
// }); //Output: 10,20,30,40


// // Example 2: Add price Symbol
// let prices = [70,80,69,96]
// prices.forEach((num)=>{
//     console.log(`$${num}`)
// });

// // Example 3: print with index
// let fruits = [`Apple` ,`Banana` ,`Mango`]
// fruits.forEach((fruit,index) =>{
//     console.log(`${index + 1} . ${fruit}`)
// })

// // Example 4: Calculate total in forEach
// let scores = [85,90,78,92]
// let acumulator = 0;

// scores.forEach((score) =>{
//     acumulator += score;

// })

// console.log(acumulator);// Output : 345


// // Example 5: modify external array

// let names = [`Zaheer` , `Sahil` ,`Shaker` ,`Anas`];
// let capitalNames = [];

// names.forEach((name) =>{
//     capitalNames.push(name.toLocaleUpperCase())
// })

// console.log(capitalNames)



// .map method
// Syntax:- let newArr = array.map((element) =>{
    // return num *2});


// // Example 1: Double all numbers
// let numbers = [2,4,5,6];
// let doubleArr = numbers.map((num) =>{
//     return num*2;
// })

// console.log(doubleArr);// Output:- (4) [4, 8, 10, 12]

// // Example 2:-Convert to uppercase

// let names = [`zaheer` , `sahil`,`anas`];

// let uppArr = names.map((name) =>{
//     return name.toUpperCase();
// })
// console.log(uppArr);


// // Example 3:- Extract properties from objects

// let students = [
//     {name : `Zaheer` , age : 22 },
//     {name : `Shaker` , age : 22 },
//     {name : `Sahil` , age : 21 },
//     {name : `Anas` , age : 20 },
// ];

// let nameOfFriends = students.map((student)=>{
//     return student.name;
// })

// console.log(nameOfFriends);// Output :- (4) ['Zaheer', 'Shaker', 'Sahil', 'Anas']



// // Example 4:- Add sales tax
// let prices = [ 100,200,150]

// let taxArr = prices.map(price=> price*1.18);
// console.log(taxArr);//Output:-(3) [118, 236, 177]


// //Example 5:- Create HTML elements
// let items = [`Home` , `About` ,`Contact`];

// let menuItems = items.map(item => `<li>${item}</li>`)
// console.log(menuItems);// Output:-(3) ['<li>Home</li>', '<li>About</li>', '<li>Contact</li>']





// // The .fiter method
// // Syntax:- let newArr = arr.filter((elemnt)=>{
//     // return element (if condition is true)});


// // Example 1:-
//     let numbers = [1,2,3,4,5,6,7,8]
//     let evenNumbers = numbers.filter((number) => number % 2 === 0);

//     console.log(evenNumbers)// Output:-(4) [2, 4, 6, 8]


// // Example 2:- Get Passing Grades
// let grades = [65,34,78,90,35];

// let passedgrades = grades.filter( grade => grade > 40)
// console.log(passedgrades)// Output:-(3) [65, 78, 90]


// // Example 3:- Filter by string length

// let names = [`Zaheer` , `Shaker` , `Sahil` , `Anas`];

// let filterNames = names.filter( name => name.length <= 5)
// console.log(filterNames);// Output :-(2) ['Sahil', 'Anas']


// // Example 4:- Filter Adults

// let ages = [23,26,19,20,17]

// let adults = ages.filter(age => age > 18 );
// console.log(adults) //Output:-(4) [23, 26, 19, 20]


// // Example 5:- Remove Specific items

// let cart = [`Apple` , `Banana` ,`Orange` ,`Cherry`]

// let filterItems = cart.filter(fruit => fruit !== `Cherry`)

// console.log(filterItems)//Output:- (3) ['Apple', 'Banana', 'Orange']





// // some & every methods

// // Example 1:- Check if all are adults 
// let ages = [21,25,26,54,28];

// console.log(ages.every(age => age > 18))

// // Example 2:- Check if any teenager exists
// let ages = [ 20,25,17,30]

// let isTeenager = ages.every(age => age > 18)
// console.log(isTeenager)


// // Example 3:- Validate from fields 

// let fromFields = [`Jhon` , `jhon@email.com` , `password@123`];

// let isFailed = fromFields.every(field => field.length > 0 )
// console.log(isFailed)


// // Example 4:- Check if any negative number
// let numbers = [ 10,23,45,-45];

// let isAllPositive = numbers.every(number => number > 0)
// console.log(isAllPositive); // Output:- false


// // Example 5:- Check if all prices are affordable
// let prices = [50,70,60,98];
// let isAllAfordable = prices.every(price => price < 75);
// console.log(isAllAfordable) //Output:- false




// // reuduce Method
// // Syntax :- let result = array.reduce((accumulator, currentElement) => {
// // return updated accumulator
// // }, initialValue);

// // Example 1:-Sum of all numbers
// let numbers = [1,2,3,4,5];
// let accumulator1 =0;
// let accumulator = numbers.reduce((accumulator1, number) => accumulator1 += number )
// console.log(accumulator); // Output :-15


// Example 2:- Find Maximum Value 
let values = [ 45,78,12,89,34]

let total = 0;

let accumulator = values.reduce((total, num) => {
    return num = num > total? num : total;
})
console.log(accumulator); // Output:- 258