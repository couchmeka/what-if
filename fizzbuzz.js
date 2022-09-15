const prompt = require('prompt-sync')({sigint: true});

let num1 =  Number(prompt("Pick a number: "));


 if (num1 % 15 ===0)
{
    console.log("fizzbuzz");
} else if (num1 % 3 ===0)
{
    console.log("fizz");

} else if (num1 % 5 ===0)
{
    console.log("buzz");
} else
{
    console.log("no fizz")
}