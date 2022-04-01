const readlineSync = require("readline-sync");

let myFunction = (a, b) => {
return a * b;
}


let a = readlineSync.question("The lenght? ?");
let b = readlineSync.question("The width ?");

console.log("The surface is: " + myFunction(a, b));
