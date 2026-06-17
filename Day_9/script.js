// Day_9
// Advanced Array methods :- forEach , map , filter some/every ,  reduce

// forEach method
// Example : Print all numbers
let numbers = [10, 20,30,40]
numbers.forEach((num) =>{
console.log(num)
}); //Output: 10,20,30,40


// Example 2: Add price Symbol
let prices = [70,80,69,96]
prices.forEach((num)=>{
    console.log(`$${num}`)
});

// Example 3: print with index
let fruits = [`Apple` ,`Banana` ,`Mango`]
fruits.forEach((fruit,index) =>{
    console.log(`${index + 1} . ${fruit}`)
})

// Example 4: Calculate total in forEach
let scores = [85,90,78,92]
let acumulator = 0;

scores.forEach((score) =>{
    acumulator += score;

})

console.log(acumulator);// Output : 345


// Example 5: modify external array

let names = [`Zaheer` , `Sahil` ,`Shaker` ,`Anas`];
let capitalNames = [];

names.forEach((name) =>{
    capitalNames.push(name.toLocaleUpperCase())
})

console.log(capitalNames)


// .map method
