/*16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/

// Define the original array of people to invite to dinner
let dinnerGuests: string[] = ["Khaliq", "Abubakar", "Sajan"];

// Print invitations to each person
function printInvitations(guestList: string[]) {
    guestList.forEach(guest => {
        console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. I would be honored to have your presence and engage in stimulating conversations.\nLooking forward to seeing you!\nBest regards,\n[M Suleman]`);
    });
}

// Print initial invitations
console.log("Initial Invitations:");
printInvitations(dinnerGuests);

// Simulate a bigger dinner table
console.log("\nGood news! We found a bigger dinner table.");

// Add one new guest to the beginning of the array
const newGuestBeginning = "M Usman";
dinnerGuests.unshift(newGuestBeginning);

// Add one new guest to the middle of the array
const newGuestMiddle = "Ahmed";
const middleIndex = Math.floor(dinnerGuests.length / 2);
dinnerGuests.splice(middleIndex, 0, newGuestMiddle);

// Use append() to add one new guest to the end of the list
const newGuestEnd = "Imran";
dinnerGuests.push(newGuestEnd);

// Print new set of invitations
console.log("\nNew Set of Invitations:");
printInvitations(dinnerGuests);
