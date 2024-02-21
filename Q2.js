var suleman = "Hello Suleman";
console.log("Uppercase", suleman.toUpperCase());
console.log("Lowercase", suleman.toLowerCase());
console.log("Titlecase:", suleman.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
