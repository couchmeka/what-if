const prompt = require('prompt-sync')({sigint: true});

let enterAge = Number(prompt("please enter your age: "));

console.log(enterAge);