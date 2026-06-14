// // Assignment 1
// // Section 1: Basic Object Literals

// // Example 1: 
// let car = {
//     brand : `Tesla`,
//     model : `Model 3`,
//     year : 2024,
//     color : `black`
// }

// console.log(car)

// // Example 2: Create an object called movie with properties:

// let movie = {
//     tittle : `Inception`,
//     director : `Christopher Nolan`,
//     year : 2010,
//     rating : 8.8
// }
// console.log(movie);



// // Modifying Objects

// // problem 1: Create an object student with
// let student = {
//     name : `Jhon`,
//     age : 20,
//     grade : `B`
// }

// student.grade = `A`
// delete student.age;
// console.log(student)

// // Problem 2: Create an object product with:
// let product = {
//     name : `Laptop`,
//     pice : 50000,
// }

// product.pice = 40500;
// product.brand = `Dell`;
// product.inStock = true;

// console.log(product)


// // Nested Objects
// // problem 1:
// let classroom = {
//     teacher : {name : `Ms.Smith` , subject : `Maths`},
//     student1 : {name : `Alice` , grade : `A`},
//     student2 : {name : `Bob` , grade : `B+`}
// }

// console.log(classroom.teacher.name);
// console.log(classroom.student1.grade);
// console.log(classroom.student2.name)

// // problem 2: Create an object company with nested objects:
// let company = {
//    engineering: { employees : 40, manager : `Jhon`},
//    sales : {employees : 25, manager : `Zaheer`},
// }

// console.log(company.engineering.employees)
// console.log(company.sales.manager)
// company.engineering.employees = 45;
// console.log(company)



// Array of Objects
// problem 1:
let student = [
     {name: `Emma` , age : 20 , grade : `A`},
     {name: `Liam` , age : 21 , grade : `B`},
     {name: `Olivia` , age : 19 , grade : `A+`},
]

console.log(student[0].name)
console.log(student[2].grade)
console.log(student.length)


