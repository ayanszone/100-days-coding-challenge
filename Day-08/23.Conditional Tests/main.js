//Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
//Equality Comparison (True)
var car = "Toyota";
console.log("Is car == 'Toyota'? I predict True");
console.log(car == 'Toyota'); //true
console.log("Is car == 'Tesla'? I predict false");
console.log(car == 'Tesla'); //false
//Strict Equality Comparison (True)
var motorcycle = "Harley-Davidson";
console.log("Is motorcycle === 'Harley-Davidson'? I predict True");
console.log(motorcycle === 'Harley-Davidson'); //(True)
console.log("Is motorcycle === 'Kawasaki Ninja'? I predict False");
console.log(motorcycle === 'Kawasaki Ninja'); //(false)
//Inequality Comparison
var country = "Pakistan";
console.log("Is country != 'Canada'? I predict true.");
console.log(country != 'Canada'); //True
console.log("Is country != 'Pakistan'? I predict false");
console.log(country != 'Pakistan'); //False
//Strict Inequality Comparison
var game = "Counter Strike";
console.log("Is game !== 'GTA'? I predict True.");
console.log(game !== 'GTA'); //True
console.log("Is game !== 'Counter Strike'? I predict false.");
console.log(game !== 'Counter Strike'); //false
//Less than comparison
console.log("Is car < 'Toyota'? I predict false");
console.log(car < 'Toyota'); //false Lexicographic comparison
//Greater than comparison
console.log("Is car > 'Toyota'? I predict false");
console.log(car > 'Toyota'); //false Lexicographic comparison
//Less than or equal comparison
console.log("Is car <= 'Toyota'? I predict false");
console.log(car <= 'Toyota'); //true
//Greater than or equal comparison
console.log("Is car >= 'Toyota'? I predict false");
console.log(car >= 'Toyota'); //true
