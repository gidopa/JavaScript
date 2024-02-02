let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString.trim().split("/n");

let A = input[0];
let B = input[1];

console.log(number(A) + number(B));
