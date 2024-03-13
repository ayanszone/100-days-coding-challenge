/*Question 18: Seeing the World: Think of at least five places you’d like to visit*/
let places: string[] = [`Kyoto`, `Machu Picchu`,`Mecca`,`Santorini`,`Banff National Park`];

console.log(`Original Order: ` + places);

console.log(`Alphabetical Order: ` +[...places].sort());

console.log(`Original Order: ` + places);

console.log(`Reverse Alphabetical Order: ` +[...places].sort().reverse());

console.log(`Original Order: ` + places);

places.reverse();
console.log(`Reverse Order ` + places);

places.reverse();
console.log(`Original Order: ` + places);

places.sort();
console.log(`Alphabetical Order: ` + places);
