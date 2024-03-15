//Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
//Version that runs the if block:
let alien_color: string = "green";
if(alien_color == "green"){
    console.log("The player just earned 5 points");//Version that runs the if block
}
else{
    console.log("The player just earned 10 points");
}


alien_color = "red";
if(alien_color == "green"){
    console.log("The player just earned 5 points");//Version that runs the else block
}
else{
   console.log("The player just earned 10 points");
}