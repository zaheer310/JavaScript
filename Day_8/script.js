// // Day_8
// // The `This` Keyword
// const student = {
//     name: `Alex`,
//     JS: 95,
//     Node: 80,
//     MongoDb : 70,
//     getAvg() {
//         // `this` refers to the `student` object
//         let avg = (this.JS + this.MongoDb + this.MongoDb) / 3;
//         return avg;
//     }
// };

// console.log(student.getAvg());



// // Exceptional Handling : Try & Catch 

// console.log(`Start of program!`)

// try{
//     console.log(undefinedVariable)
//     // This variable does not exist
// }catch(error){
// console.log(`An error occurred. but we caught it ! ${error}` );
// // You can even print the error
// }


// Arrow Function



// // Explicit returns
//  const sumOfNumbers = (a,b) => {
//  return a+b;    
// }

// // Implicit returns
// const sumOfNumber = (a,b) => a + b;


// // setTimeout - Execute Once
// // Syntax: setTimeout(callback , timeInMs);
// console.log(`Hi there!`)

// setTimeout( () => {
//     console.log(`This prints after 4 seconds`)
// },4000)

// console.log(`Welcome`);

// setTimeout( () => {
//     console.log(`This prints after 8 seconds`)
// },8000)

// console.log(`Welcome`);


// // setInterval -Execute Repeatedly
// // Syntax : setInterval( callback , timeInMs);

// let id = setInterval( ()=>{
//     console.log(`I will repeat every two secodes`)
// },2000)


// // The this Keyword

// const student = {
//     name : `Zaheer`,
//     age : 22,
//     JS : 80,
//     Node : 86,
//     React : 81,
//     avgMarks(){
//         return((this.JS + this.Node + this.React) / 3);
//     }
// }

// console.log(`${student.name}'s Average Marks are  ${student.avgMarks()}.`)




// // Example 2: Bank Account

// const account ={
//     name :`Sarah`,
//     balance: 5000,
//     deposite(amount){
//         this.balance += amount;
//         return(`${this.name} deposited ${amount}, the balance is ${this.balance} `) 
//     }
// }

// console.log(account.deposite(500));


// // Example 3: Shopping Cart

// const cart = {
//     items : [`Apple` , `Orange`],
//     total : 2,
//     addItem (item){
//         this.items.push(item)
//         this.total = this.items.length
//         return(`${this.items[this.items.length -1]} is added to your cart ,Total items are ${cart.items}`);
//     }
// }

// let cartStatus = cart.addItem(`Banana`);
// console.log(cartStatus)




// // Exceptional Handling Try & Catch
// // Example 1: Handling Missing Variables

// console.log("Program starts");
// try {
// console.log(undefinedVariable); // This doesn't exist!
// } catch (error) {
// console.log("Caught an error: Variable not found");
// }
// console.log("Program continues"); // This runs!



// // Example 2: Division Error

// function divide (a,b){

//     try{
//         if(b === 0){
//             throw `cannot divide by "0".`
//         }
//         return a/b
//     }catch(error){
//         console.log(`Error1SS: ${error} `)
//         return null;
//     }
// }

// console.log(divide(10 ,2))validAge(
// console);.log(divide(10 ,0))

// // Example 3: User Input Validation

// function validAge(age){
//     try{
//         if(age < 0){
//             throw `Age cannot be negative`
//         }else if(age > 150){
//             throw `Unrealistic age`
//         }
//     }catch(error){
//         console.log(`Error: ${error}`);
//         return null;
//     }
//     return(`This is valid Age!!!!`)
// }

// console.log(validAge(-5));
// console.log(validAge(160));
// console.log(validAge(60));


// // Arrow Function

// // this Example is of explicit return
// // Example 1: basic arrow function


// const greet = (name) =>{
//     return (`Hello ${name}`)
// }

// let sta = greet(`Zaheer`);
// console.log(sta)

// // this example is of implicit return
// const greet =(name) => `Hello ${name}`
// let  sta = greet(`Zaheer`);
// console.log(sta)

// //Example 2: Implicit Return
// const square = (num) => num * num;
// console.log(square(5)); // 25
// console.log(square(10)); // 100

// //Example 3: Single Parameter (No Parentheses Needed)
// const double = num => num * 2;
// console.log(double(7)); // 14

// // example 4: Multiple Statements
// const calculateTotal = (price, tax) => {
// let total = price + (price * tax);
// return total;
// };
// console.log(calculateTotal(100, 0.1)); // 110


// Example 4:Array Methods with Arrow Functions
let number = [1,2,3,4,5]
let doubled = number.map(num => num*2)
console.log(doubled)

let evenNumber = number.filter(num => num % 2 === 0);
console.log(evenNumber)

continue from pg 6