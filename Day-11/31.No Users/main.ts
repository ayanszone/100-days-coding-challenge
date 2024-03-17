//Question 31: No Users: Ensure your user list isn’t empty.
let usernames: string[] = ["Admin","user1","user2","user3","user4","user5",];
// for(let user of usernames){
//     if(user==="Admin"){
//         console.log("Hello Admin, would you like to see a status report?");
//     }
// else[
//     console.log(`Hello ${user}, Thank you for logging in again.`)
// ]
// }
usernames = [];
if(usernames.length === 0){
    console.log("There are no users to greet.");
}
else{
    console.log(`Hello ${usernames}, Thank you for logging in again.`)
}