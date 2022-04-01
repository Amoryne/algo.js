const readlineSync = require("readline-sync");

let a = readlineSync.question("What is your favorite number ?");



while (a!=42){
  let a = readlineSync.question("What is your favorite number ?");
  if (a==42){
    console.log("perfect");
    break
  }
  else {
    console.log("Are you sur?");
  }
}



