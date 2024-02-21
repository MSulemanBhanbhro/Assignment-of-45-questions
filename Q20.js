/* 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the program.*/
// Define an array
var colors = ["red", "green", "blue"];
// Attempt to access an index that doesn't exist
console.log(colors[3]); // This will produce an array index error
// Define an array
var color = ["red", "green", "blue"];
// Check if the index is within bounds before accessing it
var index = 3;
if (index >= 0 && index < color.length) {
    console.log(color[index]);
}
else {
    console.log("Index is out of bounds.");
}
