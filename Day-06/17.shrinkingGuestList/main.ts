/*Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set
of invitations with a replacement guest.*/
let guestList: string[] = ["Kumail","Umar","Aliyan","Shariq"];
// for(let i=0; i<guestList.length; i++){
//     console.log(`${guestList[i]}, Would you like to join me for dinner tonight?`);
// }
console.log("\n");
let newGuest: string = "Asad";
guestList[1] = newGuest;
// for(let i=0; i<guestList.length; i++){
//     console.log(`${guestList[i]}, Would you like to join me for dinner tonight?`);
// }
//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
// console.log("\nGood News! We found a bigger dinner table, so there's room for more guests.\n");
guestList.unshift("Maham");
guestList.splice(3, 0, "Zain");
guestList.push("Zunaira");
// for(let i=0; i<guestList.length; i++){
//     console.log(`${guestList[i]}, Would you like to join me for dinner tonight?`);
// }
console.log("\nUnfortunately, our new table won’t be able to arrive on time, we can only invite two guests.\n");
while(guestList.length>2){
    let removeGuests = guestList.pop();
    console.log(`Sorry ${removeGuests}, You're not invited for the dinner.`);
}
console.log("\n")
for(let i=0; i<guestList.length; i++){
        console.log(`${guestList[i]}, You're still invited for the dinner.`);
    }
guestList.splice(0,2);
console.log(guestList);