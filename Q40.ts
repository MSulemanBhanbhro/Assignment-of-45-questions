/*42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified. */

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function to modify the array of magicians
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// Create an array of magician's names
let magicians: string[] = ['Salman', 'Amir', 'Peter', 'Abbas'];

// Call the make_great function to modify the array of magicians
make_great(magicians);

// Call the show_magicians function to see the modified list of magicians
show_magicians(magicians);
