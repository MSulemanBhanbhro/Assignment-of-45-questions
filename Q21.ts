/*23. Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let car = 'subaru';

// Test 1: Check if car is equal to 'subaru'
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // Prediction: True

// Test 2: Check if car is equal to 'ford'
console.log("Is car == 'ford'? I predict False.");
console.log(car == 'ford'); // Prediction: False

// Test 3: Check if car is not equal to 'toyota'
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // Prediction: True

// Test 4: Check if car is equal to 'Subaru' (case sensitive)
console.log("Is car == 'Subaru'? I predict False.");
console.log(car == 'Subaru'); // Prediction: False

// Test 5: Check if car contains the letter 'b'
console.log("Does car contain 'b'? I predict True.");
console.log(car.includes('b')); // Prediction: True

// Test 6: Check if car starts with the letter 's'
console.log("Does car start with 's'? I predict True.");
console.log(car.startsWith('s')); // Prediction: True

// Test 7: Check if car ends with the letter 'u'
console.log("Does car end with 'u'? I predict True.");
console.log(car.endsWith('u')); // Prediction: True

// Test 8: Check if car length is less than 6
console.log("Is car length < 6? I predict True.");
console.log(car.length < 6); // Prediction: True

// Test 9: Check if car length is greater than 7
console.log("Is car length > 7? I predict False.");
console.log(car.length > 7); // Prediction: False

// Test 10: Check if car is equal to 'subaru' and length is 6
console.log("Is car == 'subaru' && length == 6? I predict True.");
console.log(car == 'subaru' && car.length == 6); // Prediction: True
