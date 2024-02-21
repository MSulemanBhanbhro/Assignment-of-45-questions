/* 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. */
let suleman:string = "Hello Suleman";
console.log("Uppercase" , suleman.toUpperCase());
console.log("Lowercase" , suleman.toLowerCase());
console.log("Titlecase:", suleman.replace(/\b\w/g, (char) => char.toUpperCase()));