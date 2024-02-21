/*42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified. */
// Define the show_magicians function
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define the make_great function to modify the array of magicians
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Create an array of magician's names
var magicians = ['Salman', 'Amir', 'Peter', 'Abbas'];
// Call the make_great function to modify the array of magicians
make_great(magicians);
// Call the show_magicians function to see the modified list of magicians
show_magicians(magicians);
