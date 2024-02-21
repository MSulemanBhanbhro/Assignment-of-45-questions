/*45. Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature. 
Print the Object that’s returned to make sure all the information was
stored correctly. */


// Define the function to store information about a car
function store_car_info(manufacturer: string, model: string, ...extras: [string, any][]): { manufacturer: string, model: string, [key: string]: any } {
    let car_info: { manufacturer: string, model: string, [key: string]: any } = { manufacturer, model };
    for (let [key, value] of extras) {
        car_info[key] = value;
    }
    return car_info;
}

// Call the function with required information and additional name-value pairs
let car = store_car_info('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);

// Print the object returned to ensure all information was stored correctly
console.log(car);
