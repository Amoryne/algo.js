const readlineSync = require("readline-sync");

let min = readlineSync.question("Enter a number ?");
let max = readlineSync.question("Enter a second number ?");
let current = readlineSync.question("Enter a other number ?");

if ((current >=min) && (current <=max)) {
console.log(current + min + max);
}
else if (min>max) {
console.log("Sorry, but i don't understand what you want to say");}
