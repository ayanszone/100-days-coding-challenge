//Question 30: Hello Admin: Greet users differently, especially 'admin'.
var usernames = ["Admin", "user1", "user2", "user3", "user4", "user5"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var user = usernames_1[_i];
    if (user === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else
        [
            console.log("Hello ".concat(user, ", Thank you for logging in again."))
        ];
}
