const readlineSync = require("readline-sync");

let username = readlineSync.question("What's your first name?");

console.log("Hello " + username);
