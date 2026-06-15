// // Assignment 1
// // Control Flow with Loops
// // Part A: for Loop Basics (15 points)

// // Problem 1: Print Numbers (3 points), Write a for loop that prints all numbers from 1 to 10.

// for(let i = 1; i <11 ; i++){
//     console.log(i);
// }

// // Problem 2: Print Even Number
// // Write a for loop that prints only even numbers from 2 to 20.
// for(let i =2; i<21; i+2){
//     console.log(i);
// }


// // Problem 3: Countdown
// // Write a for loop that counts down from 10 to 1, then prints "Blast off!".
// for(let i = 10; i >=1; i--){
//     console.log(i);
// }
// console.log(`Blast Off!`);

// // Problem 4: Multiplication Table (3 points)
// // Write a for loop that prints the multiplication table of 7 (from 7 × 1 to 7 × 10).

// for(let i =1 ; i< 11 ; i++){
//     console.log(`7 * ${i} = ${7*i}`);
// }



// // Problem 5: Sum of First N Numbers (3 points)

// // Write a for loop that calculates the sum of numbers from 1 to 20. Store the result in a variable called sum and print it.
// let sum = 0;
// for( let i =1; i<=20 ; i++){
// sum += i;
// }
// console.log(sum);//Output :210


// // Nested Loops
// // Problem 6: Number Grid (5 points)

// for(let i = 1; i <= 4; i++){
//     let row = ``;
//     for(let j =1; j<= 4; j++){
//         row += `${j} `;
//     }
//     console.log(row)
// }

// Problem :Right Triangle Pattern (5 points)

for(let i = 1; i <= 4; i++){
    let row = ``;
    for(let j =1; j<= i; j++){
        row += `* `;
    }
    console.log(row)
}

// Pending from pg 3

