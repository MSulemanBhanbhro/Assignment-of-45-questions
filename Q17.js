/* 17. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
of people you are inviting to dinner.*/
// Define an array of people to invite to dinner
var dinnerGuests = ["Khaliq", "Abubakar", "Sajan"];
// Print invitations to each person
function printInvitations(guestList) {
    guestList.forEach(function (guest) {
        console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place. I would be honored to have your presence and engage in stimulating conversations.\nLooking forward to seeing you!\nBest regards,\n[M Suleman]"));
    });
}
// Print the number of people being invited to dinner
console.log("You are inviting ".concat(dinnerGuests.length, " people to dinner."));
// Print invitations to each person
console.log("\nInvitations:");
printInvitations(dinnerGuests);
