/*Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set
of invitations with a replacement guest.*/
var guestList = ["Kumail", "Umar", "Aliyan", "Shariq"];
// for(let i=0; i<guestList.length; i++){
//     console.log(`${guestList[i]}, Would you like to join me for dinner tonight?`);
// }
console.log("\n");
var newGuest = "Asad";
guestList[1] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(guestList[i], ", Would you like to join me for dinner tonight?"));
}
//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
console.log("\nGood News! We found a bigger dinner table, so there's room for more guests.\n");
guestList.unshift("Maham");
guestList.splice(3, 0, "Zain");
guestList.push("Zunaira");
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(guestList[i], ", Would you like to join me for dinner tonight?"));
}
