//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var name1 = "Ayaan Ahmed";
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase()); // Shows the name with the First Letter Big
//"name.slice(1)" ka matlab hai ke ye code name string ka ek hissa nikalta hai jo index 1 se shuru hota hai 
//(yani doosra character) aur string ka aakhir tak jaata hai. Jsaise agar name mein "Ahmed" hai, to "name.slice(1)" "hmed" ko nikalega.
console.log(name1.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
