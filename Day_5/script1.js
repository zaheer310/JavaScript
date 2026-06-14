// // Nested Loops with Arrays

// // Example 1: Basic Pattern

// for(let i = 0; i <= 3; i++){
//     for(let j = 0; j <=3; j++){
//         console.log(`i = ${i} , j = ${j}`)
//     }
// }

// // Example 2: Multiplication table 
// for(let i = 1; i<= 5 ; i ++){
//     for(let j = 1; j <= 5; j++){
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }

//  // Example 3: Star Pattern - Right Triangle
//  for(let i = 0; i <= 5; i++){
//      let row =``;
//      for(let j = 0; j <= i; j++){
//          row += `* `;

//    }
//      console.log(row)
//  }

// // Example 2:
// for(let i = 0; i<=4; i++){
//     let line = ``;
//     for(let j = 1 ; j<=4; j++) {
//         line += `${j} `
//         console.log(line);
//     }
//     console.log(line);
// }

// // Example 4:
// for(let i = 0; i<= 4; i++){
//     let line = ``;
//     for(let j = 0; j<=4; j++){
//         line += `# `;
//     }
//     console.log(line);
// }



// // for Loops with Nested Arrays

// // Example 1:
// let matrix =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// for(let i = 0; i<matrix.length ; i++){
//     for(let j = 0; j<matrix[i].length ; j++){
//         console.log(matrix[i][j]);
//     }
// }//Output: 1, 2, 3, 4, 5, 6, 7, 8, 9

// // Example 2:Teams and Players
// let teams = [
// ["Alice", "Bob"],
// ["Charlie", "David"],
// ["Eve", "Frank"]
// ];
// for (let i = 0; i < teams.length; i++) {
// console.log(`Team ${i + 1}:`);
// for (let j = 0; j < teams[i].length; j++) {
// console.log(` - ${teams[i][j]}`);
// }
// }

// // Example 3: Student Grades
// let grades = [
//     [34,56,67],
//     [34,56,89],
//     [21,76,90]
// ]

// for(let i =0; i< grades.length ; i++){
//     let sum = 0;
//     for(let j = 0; j < grades[i].length ; j++){
//          sum += grades[i][j];
//     }
//  let average = sum /grades[i].length;
//  console.log(`The average marks of student ${i+1} is ${average}`);
// }

// // Example 4,5 Pending !!!!!!




// // Nested for...of Loops

// // Example 1:
// let groups = [
//     [`A`,`B`,`C`],
//     [`D`,`E`],
//     [`F`,`G`,`H`]
// ]

// for(let words of groups){
//     for(let word of words){
//         console.log(word);
//     }
// }// Output: A, B, C, D, E, F, G, H


// // Example 2:
// let company = [
//     [`Alice`, `Jhon`],
//     [`Zah` , `jon`],
//     [`Sam` , `Don`]
// ]

// for(let teams of company){
//     for(let employee of teams){
//         console.log(employee);
//     }
// }

// // Example 3,4,5 are pending


// // for...of Loops with Nested Arrays

// // Example 1:
// let matrix = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ];
// for (let row of matrix) {
// for (let value of row) {
// console.log(value);
// }
// }// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9




// // Example 2: Shopping Lists

// let shoppingList = [
//     [`Milk`, `Bread`,`Eggs`],
//     [`Apple`, `Banana` ],
//     [`Chicken` , `Rice` , `Beans` ,`Salad`],
//     [`brinjal`],
// ]

// let listNumber = 0;

// for(let lists of shoppingList){
//     listNumber++;
//     console.log(`List Number ${listNumber}`);
//     for(let items of lists){
//         console.log(items);
//     }
// }



// Exercise 3,4,5 are pending!!!!

// Pending topic is Comparison: for vs for...of with Nested Arrays
// pending practicle examples 1,2,3,4,5 & Quick Reference