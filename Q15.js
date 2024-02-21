/*17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.*/
// Define the original array of people to invite to dinner
var dinnerGuests = ["Khaliq", "Abubakar", "Sajan"];
// Print invitations to each person
function printInvitations(guestList) {
    guestList.forEach(function (guest) {
        console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place. I would be honored to have your presence and engage in stimulating conversations.\nLooking forward to seeing you!\nBest regards,\n[Your Name]"));
    });
}
// Print initial invitations
console.log("Initial Invitations:");
printInvitations(dinnerGuests);
// Inform about the limitation
console.log("\nUnfortunately, due to unforeseen circumstances, we can only invite two people for dinner.");
// Remove guests until only two remain
while (dinnerGuests.length > 2) {
    var removedGuest = dinnerGuests.pop();
    console.log("Sorry, ".concat(removedGuest, ", but we can't invite you to dinner."));
}
// Print invitations to the two remaining guests
console.log("\nInvitations to remaining guests:");
printInvitations(dinnerGuests);
// Remove the last two names from the list
dinnerGuests.pop();
dinnerGuests.pop();
// Print the list to ensure it's empty
console.log("\nFinal Guest List:");
console.log(dinnerGuests); // This should print an empty array
