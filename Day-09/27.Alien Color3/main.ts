//Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
//Version that runs the if block:
let alien_color: string = "green";
if(alien_color == "green"){
    console.log("The player just earned 5 points");//Green alien version
}
else if(alien_color == "red"){
    console.log("The player just earned 10 points");
}
else if(alien_color == "yellow"){
    console.log("The player just earned 15 points");
}

alien_color = "red";
if(alien_color == "green"){
    console.log("The player just earned 5 points");//Red alien version
}
else if(alien_color == "red"){
    console.log("The player just earned 10 points");
}
else if(alien_color == "yellow"){
    console.log("The player just earned 15 points");
}

alien_color = "yellow";
if(alien_color == "green"){
    console.log("The player just earned 5 points");//Yellow alien version
}
else if(alien_color == "red"){
    console.log("The player just earned 10 points");
}
else if(alien_color == "yellow"){
    console.log("The player just earned 15 points");
}