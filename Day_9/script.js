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


// // Example 2:- Find Maximum Value 
// let values = [ 45,78,12,89,34]

// let total = 0;

// let accumulator = values.reduce((total, num) => {
//     return num = num > total? num : total;
// })
//  console.log(accumulator); // Output:- 258



// // Example 3: Count Occurences

// let fruits = [`Apple` , `Banana` ,`Mango` , `Apple` , `Apple` , `Mango` , `Banana`];

// let counter = fruits.reduce((count,fruit) =>{
//  count[fruit] = (count[fruit] || 0) + 1;

//  return count; 
// } ,{})
//  console.log(counter)


// // Example 4: Calculate total price 
// let cart = [
//     {item:`Shirt` , price:500},
//     {item:`Shoes` , price:1200},
//     {item:`Hat` , price:300},
// ];
// let amount =0;
// let total = cart.reduce((amount ,row) => amount + row.price, 0);
// console.log(total);// Output: 2000



// // Example 5:- Flattens nested arrays
// let nested = [[1,2],[3,4]];
// let accum = [];
// let flatten = nested.reduce((accum , innerArray) => {
//     accum.push(...innerArray)
//     return accum
//  },[]);
// console.log(flatten);// Output : (4) [1, 2, 3, 4]


// // Alternative
// let nested1 = [[1,2] ,[3,4]];
// let flat = nested1.reduce((acc, arr) => acc.concat(arr),[]);
// console.log(flat);// Output : (4) [1, 2, 3, 4]



// // Default parameter
// // function functionName(param1 = defaultValue1, param2 = defaultValue2) {
// // function body
// // }



// // Example 1: Simple greeting
// function greet(name =`User`) {
//  console.log(`Hello ${name}`);
// }

// console.log(greet(`Shaker`));//Output : Hello Shaker
// console.log(greet());// Output : Hello User



// // Example 2: Calculate with default rate

// function calculateTax(amount, tax = 1.18){
//     return amount*tax;
// }
// console.log(calculateTax(1000));// Output:1180
// console.log(calculateTax(1500,0.10)); //Output: 150



// // Example 3:Create User Profile
// function createProfile(name = `Anas` , age = 19 , country = `HYD`){
//     return {name , age , country};
// }
// console.log(createProfile(`Shaker` , 22 , `HYD`)); // Output: {name: 'Shaker', age: 22, country: 'HYD'}
// console.log(createProfile(`Zaheer` , 22 , `HYD`)); //Output :{name: 'Zaheer', age: 22, country: 'HYD'}
// console.log(createProfile(`Sahil` , 21 , `HYD`));// Output:{name: 'Sahil', age: 21, country: 'HYD'} 
// console.log(createProfile());// Output: {name: 'Anas', age: 19, country: 'HYD'}


// // Example 4: Power Function

// function power(number , exponentialValue = 2){
//     return number **exponentialValue;
// }

// console.log(power(2, 5)) // Output: 32
// console.log(power(3))// Output: 9



// // Example 5: Array Operatins 
// function getSlice(arr, start =0, end = arr.length){
//     return arr.slice(start , end);
// }

// let slicedArr = getSlice([1,2,3,4,5] , 0, 3); 
// console.log(slicedArr); // Output: (3) [1, 2, 3] 




// // The spread Operator
// // Example 1: Copy an Array
// let orignal = [1,2,3,4];

// let newArr = [...orignal];
// newArr.push(10,12);
// console.log(newArr); //Output: (6) [1, 2, 3, 4, 10, 12]

// console.log(orignal); //Unchanged array


// // Example 2: Merged Array

// let fruits = [ `Apple` , `Banana`];
// let vegetables = [`Brinjal` , `Tomato`, `Potato`];

// let food = [...fruits ,...vegetables]
// console.log(food)//Output :(5) ['Apple', 'Banana', 'Brinjal', 'Tomato', 'Potato']



// //Example 3: Copy andupdate object

// let numbers = [2,3,4];
// let moreNumbers = [ 1,...numbers,5,6];
// console.log(moreNumbers); //Output:  (6) [1, 2, 3, 4, 5, 6]


// // Example 4: Copy and update object

// let user = {
//     name : `Zaheer Shaker Sahil Anas`,
//     email: `mohad@gamil.com`,
//     }

// let updatedUser ={
//     ...user,
//     age :19,
//     city : `HYD`
// }

// console.log(updatedUser); //Output : {name: 'Zaheer Shaker Sahil Anas', email: 'mohad@gamil.com', age: 19, city: 'HYD'}


// // Example 5: Convert String to Array
// let name = `HELLO`;

// let words = [...name];
// console.log(words) //Output : (5) ['H', 'E', 'L', 'L', 'O']




// //The Rest Operator

// // Syntax : function functionName(...rearParams){
// // restParams is an array
// // }


// // Example 1: Sum any number of arguments

// function sum(...numbers){
//     return numbers.reduce((total,num) => total += num)
// }
// console.log(sum(1,2,3,4,5)) //Output :15
// console.log(sum(3,4,5,6))//Output : 18


// // Example 2:First and Rest
// function announce(first , ...others){
//     console.log(`The Winner is ${first}`); //Output :The Winner is Alex
//     console.log(`Others are ${others.join(",")}`) //Output :Others are David,Harry,May
// }

// announce(`Alex` ,`David` ,`Harry` ,`May`);




// // Example 3: Combine with regular parameters
// function createTeam (captain , viceCaptain , ...players){
//     return {
//         captain,
//         viceCaptain,
//         players
//     }
// }

// let team = createTeam(`Virat` ,`Rohit`,`Dhoni`,`Hardik`,`Bumrah`);
// console.log(team);



// // Example 4: Find Maximum

// function maxNum (...num){
//  return Math.max(...num)
// }

// let maxElem = maxNum(2,3,4,5,6,78); 
// console.log(maxElem)// Output: 78



// // Example 5: Multiply All Numbers
// function multiply(multiplier , ...numbers){
//     return numbers.map((num) =>num*multiplier)
// }

// let multipliedArr = multiply(2,1,2,3,4,5);
// console.log(multipliedArr);// Output: (5) [2, 4, 6, 8, 10]

// multipliedArr = multiply(10,2,3,4,5);
// console.log(multipliedArr)//Output: (4) [20, 30, 40, 50] 



// // SPREAD - Expands
// let arr = [1, 2, 3];
// console.log(...arr); // 1 2 3 (separate values)
// // REST - Collects
// function collect(...items) {
// console.log(items); // [1, 2, 3] (array)
// console.log(typeof(items));
// }
// collect(1, 2, 3);



// // Array Destructor
// // Syntax: let [variable1, variable2,....] = arrayName


// // Example 1: Basic destructuring
// let colors = [`Red` ,`Blue`,`Green`]

// let [first , second ,third] = colors

// console.log(first); //Output: Red
// console.log(second); //Output: Blue
// console.log(third); //Output: Green


// // Example 2: Skip elements
// let numbers = [1,2,3,4,5];

// let [first ,,third,,fifth] = numbers
// console.log(first) // 1
// console.log(third)//3
// console.log(fifth)//5


// // Example 3: Swap variables
// let a = 10;
// let b = 20;
//  [a,b] = [b,a];
//  console.log([a,b]);

// // Example 4: with degault values
// let [a =5 , b =10] = [1];
// console.log(a) //Output: 1
// console.log(b)//10 (default, because array has only one element)


// // Example 5: Get first and rest
// let scores = [95,87,92,78,85]

// let [highest , ...remaining] = scores

// console.log(highest); //Output: 95
// console.log(remaining); // Output:(4) [87, 92, 78, 85]


// Object Destructuring
// Syntax: let { property1, property2 } = object;
// Syntax for Renaiming : let { property: newName } = object; // Renaming


// // Example 1:Basic object destructuring
// let students = {
//     name: `Zaheer`,
//     age : 22,
//     rollNo : 122
// }

// let {name , age , rollNo} = students

// console.log(name) //Zaheer
// console.log(age)// 22
// console.log(rollNo)//122


// // Example 2:Renaiming Variables
// let user = {
//     username : `Karan123`,
//     email : `karan@123gmail.com`
// }

// let { username : id , email : mail} = user;

// console.log(id);// Output : Karan123
// console.log(mail); // Output : karan@123gmail.com


// // Example 3: With default values

// let settings = {
//     theme : `dark`,
// }
// let {theme , language = `English`} = settings

// console.log(theme);// dark
// console.log(language);//English (default)


// // Example 4 : Nested Destruction
// let person = {
//     name : `Jhon`,
//     address :  {
//     city : `NewYork`,
//     country : `USA`,
//     pin : 400404,
//     }
// }

// let {name , address :{city, country}} = person;
// console.log(name); // Output: Jhon
// console.log(city); // Output: NewYork
// console.log(country) ; // Output : USA


// Example 5: Function Parameters
function displayUser({ name, age, country = "India" }) {
    console.log(`${name} is ${age} years old from ${country}`);
}

displayUser({ name: "Neha", age: 22, country: "USA" });

displayUser({ name: "Priya", age: 22, country: "Germany" });

