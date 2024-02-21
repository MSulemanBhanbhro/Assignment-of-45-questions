/*45. Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature.
Print the Object that’s returned to make sure all the information was
stored correctly. */
// Define the function to store information about a car
function store_car_info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car_info = { manufacturer: manufacturer, model: model };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var _b = extras_1[_a], key = _b[0], value = _b[1];
        car_info[key] = value;
    }
    return car_info;
}
// Call the function with required information and additional name-value pairs
var car = store_car_info('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
// Print the object returned to ensure all information was stored correctly
console.log(car);
