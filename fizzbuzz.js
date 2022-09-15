const prompt = require('prompt-sync')({sigint: true});

let num1 =  Number(prompt("Pick a number: "));

if (num1 % 3)
{
    console.log("fizz");

} else if (num1 % 5)
{
    console.log("buzz");

} else if (num1 % 5 == num1 % 3)
{
    console.log("fizzbuzz");
} else
{
    console.log("no fizz")
}