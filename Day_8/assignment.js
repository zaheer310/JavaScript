// // Assignment Day-8
// // This Keyword

// // problem 1: Create a Car Object

// const car = {
//   brand: `Toyota`,
//   model: `Camry`,
//   price: 25000,
//   displayInfo() {
//     console.log(
//       `the car info is ${this.brand} , ${this.model} , ${this.price}`,
//     );
//   },
//   applyDiscount(price) {
//     return this.price * 0.9;
//   },
// };

// const discountAmount = car.applyDiscount();
// car.displayInfo();
// console.log(`The discounted amount is  ${discountAmount}`); // Output: The discounted amount is  22500

// Problem 2: Student grade calculator

const student = {
  name: `Zaheer`,

  subjects: {
    JavaScript: 80,
    React: 85,
    HTML: 95,
    CSS: 86,
  },

  calculateAverage() {
    let scores = 0;
    let denominator = 0;
    for (let key in this.subjects) {
      scores += this.subjects[key];
      denominator++;
    }
    const avgMarks = scores / denominator;
    return avgMarks;
  },
};

let studentMArks = student.calculateAverage();
console.log(studentMArks);
