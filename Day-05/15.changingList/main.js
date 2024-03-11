/*Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set
of invitations with a replacement guest.*/
var guestList = ["Kumail", "Umar", "Aliyan", "Shariq"];
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(guestList[i], ", Would you like to join me for dinner tonight?"));
}
console.log("\n");
var newGuest = "Asad";
guestList[1] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(guestList[i], ", Would you like to join me for dinner tonight?"));
}
