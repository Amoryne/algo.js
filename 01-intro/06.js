const readlineSync = require("readline-sync");

let N = readlineSync.question("Enter an integer number: ")

let I = readlineSync.question("Enter the second integer number: ")

console.log(Math.floor(N) % Math.floor(I));
