//Question 32: Checking Usernames: Ensure uniqueness in usernames. 
let current_users : string[] = ["Admin","Anna","White","khan","fatima","Ayaan"];
let new_users : string[] = ["White","Admin","user2","user1","user4"];

let current_users_lower: string[] = current_users.map(user => user.toLowerCase());

for(let new_user of new_users){
    if(current_users_lower.includes (new_user.toLowerCase())){
        console.log(`${new_user} will need to enter a new username.`)
    }
    else {
        console.log(`${new_user} is available.`);
    }
};