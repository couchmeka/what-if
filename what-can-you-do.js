const prompt = require('prompt-sync')({sigint: true});

let enterAge = Number(prompt("please enter your age: "));

if (enterAge < 16){
    console.log("You can't drive");
} else if (enterAge <= 17) {
    console.log("you can drive and not vote");
}   else if (enterAge <= 24) {
    console.log("you can vote but not rent a car");
}   else {
    console.log("You can pretty much do anything");
}



console.log(enterAge);