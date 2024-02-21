/*35. Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
• Modify your program to print a statement about each animal, such as
A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet! */

// Store the names of animals with a common characteristic in an array
let animals: string[] = ['dog', 'cat', 'rabbit'];

// Print the name of each animal using a for loop
console.log("Animals with a common characteristic:");
for (let animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

// Print a statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
