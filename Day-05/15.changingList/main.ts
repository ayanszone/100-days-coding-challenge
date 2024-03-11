/*Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set
of invitations with a replacement guest.*/
let guestList: string[] = ["Kumail","Umar","Aliyan","Shariq"];
for(let i=0; i<guestList.length; i++){
    console.log(`${guestList[i]}, Would you like to join me for dinner tonight?`);
}
console.log("\n");
let newGuest: string = "Asad";
guestList[1] = newGuest;
for(let i=0; i<guestList.length; i++){
    console.log(`${guestList[i]}, Would you like to join me for dinner tonight?`);
}