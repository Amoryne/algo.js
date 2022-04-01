const readlineSync = require("readline-sync");

let x = readlineSync.question("Dog or cat ?");
let y = readlineSync.question("Red or Yellow ?");
let z = readlineSync.question("How many?");
console.log("You will have " + z +" " + y +" " + x + " and die alone" );
