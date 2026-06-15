// Introduction to Object Literals
// Syntax : let variableName = { key1 : value1, key2 : value3....};

// // Example 
// let product = {
//     name : `Laptop`,
//     model : `A0679`,
//     price: 23000,
//     inStock : true
// };


// // Accessing Object Properties
// // Example 1:Using dot notation
// let student = { name: `Alice`, age: 17, city: `hyderabad` }
// console.log(student.name);
// console.log(student.age)

// // Example 2:Using bracket notation
// console.log(student[name]);
// console.log(student[city]);


// // Example 3: When to use bracket notation (spaces in key)
// let person = { "first name": "John", "last name": "Doe" };
// console.log(person["first name"]); // "John"

// // Example 4: Mixed access
// let car = { brand: "Toyota", model: "Camry", year: 2024 };
// console.log(car.brand); // "Toyota"
// console.log(car["model"]); // "Camry"



// // Modifying Objects (Add, Update, Delete)

// // Example 1: Updating existing properties
// let student = { name: `Alex`, age: 21, city: `Hyderabad` };
// student.age = 25;
// student.city = `Boston`;
// console.log(student);

// // Example 2:Adding new properties
// student.grade = `+A`;
// student.yearOfGraduation = 2023;
// console.log(student);
// // { name: "Alex", age: 22, city: "Boston", grade: "A+", major: "Computer Science" }

// // Example 3: Deleting properties
// delete student.city;
// console.log(student);

// // Example 4: Multiple modifications
// let product = { name: "Phone", price: 30000 };
// product.price = 28000; // Update
// product.brand = "Samsung"; // Add
// delete product.name; // Delete
// console.log(product); // { price: 28000, brand: "Samsung" }

//  // Example 5: Using bracket notation for modifications
// let car = { brand: "Honda" };
// car["model"] = "Civic";
// car["year"] = 2024;
// console.log(car); // { brand: "Honda", model: "Civic", year: 2024 }



// // Nested Objects( Objects of Objects)

// // Example 1: 
// let userDatabase ={
//     user1: {name: `Alice` , grade : `+A`, city : `Austin`},
//     user2: {name : `Bob` , grade : `B`, city:`Denver`}
// };
// console.log(userDatabase.user1.name);
// console.log(userDatabase.user1.grade)


// // Example 2: Company departments
// let company ={
//     engineering : {employees :30 , manager : `jhon`},
//     sales : {employees : 30, manager : `sarah`},
//     hr : {employees : 10, manager:`Mike`}
// }

// console.log(company.engineering.employees)//50
// console.log(company.engineering.manager);//jhon

// // Example 3:Student records with subject
// let student ={
//     student1 : {name : `Emma` , Math : 89, Science :67 },
//     student2 :{name : `Oliver` , Math : 79, Science :97 }
// }

// console.log(student.student1.name);
// console.log(student.student2.Math)

// // Example 4: Product inventory by ctegory
// let invetory = {
//     electronic : {laptop : 25, phones : 50},
//     clothing : { shirts : 100, pants : 75}
// }

// console.log(invetory.electronic.laptop);//25
// console.log(invetory.clothing.pants)// Output: 75



// // Example 5: Accessing and modifying nested values
// let school = {
// classA: { students: 30, teacher: "Ms. Smith" },
// classB: { students: 28, teacher: "Mr. Brown" }
// };
// school.classA.students = 32;
// school.classB.teacher = "Ms. Johnson";
// console.log(school.classA.students); // 32
// console.log(school.classB.teacher); // "Ms. Johnson"


// //Array of Objects 
// // Example 1: List od Students
// let students = [
//     {name : `Alex` , age : 21, grade :`+A`},
//     { name : `Ali` , age : 22, grade :`B`},
//     {name : `Harry` , age : 23, grade :`A`}
// ]

// console.log(student[0].name)//Alex
// console.log(student[1].name)//Ali
// console.log(student[2].name)//Harry


// // Example 2: Product catalog
// let products = [
// { id: 101, name: "Laptop", price: 45000 },
// { id: 102, name: "Mouse", price: 500 },
// { id: 103, name: "Keyboard", price: 1500 }
// ];
// console.log(products[0].name); // "Laptop"
// console.log(products[2].price); // 1500

// // Example 3: Social media posts
// let posts = [
// { username: "user1", content: "Hello World!", likes: 50 },
// { username: "user2", content: "JavaScript is fun", likes: 120 },
// { username: "user3", content: "Coding daily", likes: 85 }
// ];
// console.log(posts[1].username); // "user2"
// console.log(posts[0].likes); // 50

// // Example 4: Course list
// let courses = [
// { name: "Math", id: 101, credits: 3 },
// { name: "Physics", id: 102, credits: 4 },
// { name: "Chemistry", id: 103, credits: 3 }
// ];
// console.log(courses[0].credits); // 3
// console.log(courses[1].name); // "Physics"



// // Example 5: Modifying array of objects
// let cars = [
//     {brand :`Toyota` , model : `Hilux_Altex`, year:2027},
//     {brand :`ford` , model : `Intercepter`, year:2028}
// ]
// cars[0].year = 2026
// cars[1].model = `Flex`;
// cars.push({brand :`BMW` , model : `M7`, year:2029})

// console.log(cars[0].brand)//Toyota
// console.log(cars[2].brand)//BMW
// console.log(cars[2])//{brand :`BMW` , model : `M7`, year:2029}


// // The Math Object - Intoduction
// // Example 1: Math constants
// console.log(Math.PI);//3.141592653589793
// console.log(Math.E)//2.718281828459045 

// // Example 2: Absolute Value
// console.log(Math.abs(-42)); // 42
// console.log(Math.abs(15)); // 15
// console.log(Math.abs(-7.5)); // 7.5

// // Example 3: Power (exponentiation)
// console.log(Math.pow(2, 3)); // 8 (23)
// console.log(Math.pow(5, 2)); // 25 (52)
// console.log(Math.pow(10, 3)); // 1000 (103)

// // Example 4: Rounding down and up
// console.log(Math.floor(4.9)); // 4
// console.log(Math.floor(4.1)); // 4
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.ceil(4.9)); // 5

// // Example 5: Using Math.PI for calculations
// let radius = 5;
// let circumference = 2 * Math.PI * radius;
// let area = Math.PI * radius * radius;
// console.log(circumference); // 31.41592653589793
// console.log(area); // 78.53981633974483

 
// // Math.random()
// // Example 1: Basic random decimal
// console.log(Math.random()); // 0.6472... (different each time)
// console.log(Math.random()); // 0.2851...
// console.log(Math.random()); // 0.9234...


// // Example 2: Random decimal scaled to 10
// let num = Math.random() * 10;
// console.log(num); // 4.637... (between 0 and 10)

// // Example 3: Random decimal scaled to 100
// let percentage = Math.random() * 100;
// console.log(percentage); // 73.245... (between 0 and 100)

// // Example 4: Multiple random numbers
// console.log(Math.random() * 5); // 0 to 5
// console.log(Math.random() * 20); // 0 to 20
// console.log(Math.random() * 50); // 0 to 50



// // Example 5: Understanding the range
// console.log(Math.random()); // Could be: 0.000... to 0.999...
// console.log(Math.random() * 10); // Could be: 0.000... to 9.999...
// console.log(Math.random() * 100); // Could be: 0.000... to 99.999...




// // Generating Rnadom Integers
// // Example 1: Random integer from 1 to 10 (step by step)
// let step1 = Math.random();// 0.3409 to (0.9833 ~ 1)
// let step2 = step1 *10 //0.048 to 9.0834
// let step3 = Math.floor(step2) // 0 to 9
// let step4 = step3 +1 ; // 1 to 10

// console.log(step4);


// // Example 2: Random integer from 1 to 10 (one line)
// let random = Math.floor(Math.random() * 10) + 1;
// console.log(random); // Could be: 1, 2, 3, 4, 5, 6, 7, 8, 9, or 10

// // Example 3: Random integer from 1 to 100
// let random100 = Math.floor(Math.random() * 100) + 1;
// console.log(random100); // 1 to 100

// // Example 4: Random integer from 1 to 6
// let random6 = Math.floor(Math.random() *6) + 1;
// console.log(random6); // 1 to 6

// // Example 5: Random integer from 1 to 5
// let rating = Math.floor(Math.random() * 5) + 1;
// console.log(rating); // 1, 2, 3, 4, or 5



// // Random Number Formula

// // General Formula: Math.floor(Math.random() * (max - min + 1)) + min


// // Example 1: 1 to 10

// let num = Math.floor(Math.random() *(10 -1 +1)) + 1
// console.log(num);

// // Example 2: Random number from 5 to 10
// let num2 = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

// console.log(num2); // 5, 6, 7, 8, 9, or 10

// Example 5: Random number from -10 to 10
let num5 = Math.floor(Math.random() * (10 - (-10) + 1)) + (-10);
// Simplifies to: Math.floor(Math.random() * 21) - 10
console.log(num5);