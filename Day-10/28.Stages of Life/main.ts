//Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
let age: number = 23;
if(age < 1){
    console.log("Infancy");
}
else if(age >= 1 && age < 13){
    console.log("Childhood");
}
else if(age >=13 && age < 20){
    console.log("Adolescene");
}
else if(age >=20 && age < 65){
    console.log("Adulthood");
}
else if(age >= 65){
    console.log("Seniority");
}
else{
    console.log("Invalid Age");
}