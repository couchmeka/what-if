const prompt = require('prompt-sync')({sigint: true});

let enterAge = Number(prompt("please enter your age: "));

if (enterAge < 16){
    console.log("You can't drive");
} else if (enterAge === 16,17) 
{
    console.log("you can drive and not vote")
}

console.log(enterAge);