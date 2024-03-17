//Question 32: Checking Usernames: Ensure uniqueness in usernames. 
var current_users = ["Admin", "Anna", "White", "khan", "fatima", "Ayaan"];
var new_users = ["White", "Admin", "user2", "user1", "user4"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("".concat(new_user, " will need to enter a new username."));
    }
    else {
        console.log("".concat(new_user, " is available."));
    }
}
;
