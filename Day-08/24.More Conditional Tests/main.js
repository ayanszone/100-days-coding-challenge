//Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
var car = "Toyota";
var age = 23;
var number = [1, 2, 3, 4];
//Equality
console.log("Is car == 'Toyota'? I predict True");
console.log(car == "Toyota"); //True
console.log("Is car == 'toyota'? I predict False");
console.log(car == "toyota"); //false
//Inequality
console.log("Is car != 'Tesla'? I predict True");
console.log(car != "Tesla"); //True
//Inequality
console.log("Is car != 'Toyota'? I predict False");
console.log(car != "Toyota"); //False
//Using the lower case function
console.log("Testing with lower case:");
console.log(car.toLowerCase() == "Toyota"); //false
//Using the upper case function
console.log("Testing with upper case:");
console.log(car.toUpperCase() == "Toyota"); //false
//Numerical tests
console.log("Numerical Tests");
console.log("Is age > 25? I predict false.");
console.log(age > 25); //false
console.log("Is age < 25? I predict true.");
console.log(age < 25); //true
console.log("Is age == 25? I predict false.");
console.log(age == 25); //false
console.log("Is age != 25? I predict true.");
console.log(age != 25); //true
console.log("Is age !== 25? I predict true.");
console.log(age !== 25); //true
//Logical Operators
//AND
console.log("Is age > 20 && age < 30? I predict true.");
console.log(age > 20 && age < 30); //True
//OR
console.log("Is age < 20 || age > 30? I predict false.");
console.log(age < 20 || age > 30); //False
console.log("Is age < 20 || age < 30? I predict false.");
console.log(age < 20 || age < 30); //True
//Array Tests
console.log("Is 5 in the numbers? I predict false.");
console.log(5 in number); //False
console.log("Is 2 in the numbers? I predict false.");
console.log(2 in number); //True
