//Question 21: Think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.
let person: {
    Name: String ;
    Age: Number ;
    Class: String ;
    Email: String ;
} = {
    Name: "Ayaan",
    Age: 23,
    Class: "3rd Year",
    Email:"ayaan@gamil.com"
};
console.log(`Person's Name: ${person.Name}, Person's Age: ${person.Age}, Person's Email: ${person.Email} `);