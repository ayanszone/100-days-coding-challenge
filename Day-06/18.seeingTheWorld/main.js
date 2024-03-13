var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*Question 18: Seeing the World: Think of at least five places you’d like to visit*/
var places = ["Kyoto", "Machu Picchu", "Mecca", "Santorini", "Banff National Park"];
console.log("Original Order: " + places);
console.log("Alphabetical Order: " + __spreadArray([], places, true).sort());
console.log("Original Order: " + places);
console.log("Reverse Alphabetical Order: " + __spreadArray([], places, true).sort().reverse());
console.log("Original Order: " + places);
places.reverse();
console.log("Reverse Order " + places);
places.reverse();
console.log("Original Order: " + places);
places.sort();
console.log("Alphabetical Order: " + places);
