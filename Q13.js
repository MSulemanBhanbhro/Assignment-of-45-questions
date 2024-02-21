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
// Simulate a guest not being able to make it
var unableToAttend = dinnerGuests.shift();
console.log("Unfortunately, ".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest who can't make it with a new guest
var newGuest = "Ada Lovelace";
dinnerGuests.push(newGuest);
// Print second set of invitations
console.log("\nSecond Set of Invitations:");
printInvitations(dinnerGuests);
