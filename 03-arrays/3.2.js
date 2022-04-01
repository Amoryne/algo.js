const readlineSync = require("readline-sync");


const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
    
const result = average( [ 1, 2, 3, 4, 5 ] );
    
console.log(result);
