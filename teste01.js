const fs = require('fs');

const file = fs.readFileSync('./oscar_best_pictures.csv', 'utf8');

var input = fs.readFileSync('./oscar_best_pictures.csv').toString();
let lines = input.split("\n");

console.log(lines);