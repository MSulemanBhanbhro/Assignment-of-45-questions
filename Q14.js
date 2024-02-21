/*16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/


// Define the original array of people to invite to dinner
var dinnerGuests = ["Khaliq", "Abubakar", "Sajan"];
// Print invitations to each person
function printInvitations(guestList) {
    guestList.forEach(function (guest) {
        console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place. I would be honored to have your presence and engage in stimulating conversations.\nLooking forward to seeing you!\nBest regards,\n[M Suleman]"));
    });
}
// Print initial invitations
console.log("Initial Invitations:");
printInvitations(dinnerGuests);
// Simulate a bigger dinner table
console.log("\nGood news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array
var newGuestBeginning = "M Usman";
dinnerGuests.unshift(newGuestBeginning);
// Add one new guest to the middle of the array
var newGuestMiddle = "Ahmed";
var middleIndex = Math.floor(dinnerGuests.length / 2);
dinnerGuests.splice(middleIndex, 0, newGuestMiddle);
// Use append() to add one new guest to the end of the list
var newGuestEnd = "Imran";
dinnerGuests.push(newGuestEnd);
// Print new set of invitations
console.log("\nNew Set of Invitations:");
printInvitations(dinnerGuests);
