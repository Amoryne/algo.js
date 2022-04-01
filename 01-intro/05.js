const readlineSync = require("readline-sync");

let N = readlineSync.question("Enter a number with decimal part: ")

let I = readlineSync.question("Enter the second decimal number: ")

console.log(Math.floor(N) * I);
