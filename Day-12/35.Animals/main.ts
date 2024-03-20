//Question 35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
//Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. 
//You could print a sentence such as Any of these animals would make a great pet!

let animals: string[] = ["Cat","Dog","Rabbit"];

// Loop through the array and print each animal name
for(let animal of animals){
    console.log(animal);
}

// Modify the program to print a statement about each animal
for(let animal of animals){
    console.log(`A ${animal} would make a great pet`)
}

// Add a line at the end stating the common characteristic
console.log("Any of these animals would make a great pet!")