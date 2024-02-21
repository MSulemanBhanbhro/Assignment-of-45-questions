/* 41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array. */

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
let magicians: string[] = ['Salman', 'Deffy', 'Peter', 'Derren Brown'];

// Call the function to print the names of magicians in the array
show_magicians(magicians);
