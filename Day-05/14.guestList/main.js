"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
/*Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
var guestList = ["Kumail", "Umar", "Aliyan", "Shariq"];
exports.guestList = guestList;
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(guestList[i], ", Would you like to join me for dinner tonight? "));
}
