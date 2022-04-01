const readlineSync = require("readline-sync");

let a = readlineSync.question("What's your age ?");
if (a >=18) {
console.log("You are an adult");}
else {
console.log("Your not an adult!");}
