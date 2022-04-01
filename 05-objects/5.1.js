const readlineSync = require("readline-sync");




let a = readlineSync.question("The name?");
let b = readlineSync.question("The product year?");
let c = readlineSync.question("The names of the cast members?");

let myObject = {
name: a ,
prod: b,
cast: c};

console.log((myObject["name"]+" "+myObject["prod"]+" "+myObject["cast"]));

