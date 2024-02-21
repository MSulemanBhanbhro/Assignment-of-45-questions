/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
// Define an array of people to invite to dinner
var dinnerguests = ["Khaliq", "Abubakar", "Sajan"];
// Print invitations to each person
dinnerguests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place. I would be honored to have your presence and engage in stimulating conversations.\nLooking forward to seeing you!\nBest regards,\n[M Suleman]"));
});
