const readlineSync = require("readline-sync");

let a = readlineSync.question("Enter a number between 1-7: "); 
let jour = ['wrong','lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];


console.log(jour[a]);




