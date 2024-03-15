//Question 30: Hello Admin: Greet users differently, especially 'admin'.
let usernames: string[] = ["Admin","user1","user2","user3","user4","user5"];
for(let user of usernames){
    if(user==="Admin"){
        console.log("Hello Admin, would you like to see a status report?");
    }
else[
    console.log(`Hello ${user}, Thank you for logging in again.`)
]
}