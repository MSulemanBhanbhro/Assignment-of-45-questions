/*24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array.  */
// Define variables for testing
var nam = 'John';
var age = 30;
var fruits = ['apple', 'banana', 'orange'];
// Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings:");
console.log(nam == 'John'); // True
console.log(nam != 'Doe'); // True
console.log(nam == 'john'); // False (case sensitive comparison)
console.log(nam != 'John'); // False
// Tests using the lower case function
console.log("\nTests using the lower case function:");
console.log(nam.toLowerCase() == 'john'); // True
console.log(nam.toLowerCase() == 'doe'); // False
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\nNumerical tests:");
console.log(age == 30); // True
console.log(age != 25); // True
console.log(age > 25); // True
console.log(age < 40); // True
console.log(age >= 30); // True
console.log(age <= 35); // True
// Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators:");
console.log(age > 25 && age < 35); // True
console.log(age > 35 || age < 25); // True
// Test whether an item is in an array
console.log("\nTest whether an item is in an array:");
console.log(fruits.includes('banana')); // True
console.log(fruits.includes('grape')); // False
// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
console.log(!fruits.includes('grape')); // True
console.log(!fruits.includes('banana')); // False
