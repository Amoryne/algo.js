const readlineSync = require("readline-sync");

let s = readlineSync.question("What's your shoe size ?");
let b = readlineSync.question("Whats your birth day ?");


console.log(s*2+5*50-b+1766);

