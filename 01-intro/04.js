const readlineSync = require("readline-sync");

let username = readlineSync.question("What's your name ?");
let firstname = readlineSync.question("Whats your first name ?");
let city = readlineSync.question("Where you live in ?");

console.log("Your name is " + username +" "+ firstname + " and you live in " + city);
