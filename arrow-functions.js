/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a,b) {
//     //code block
//     return a + b
// }
// let sum = addTwoNumbers(3, 5)
// console.log(sum)

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    //code block
    return a + b
}
let sum = addTwoNumbers(3, 5)
console.log(sum)

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b); also valid
const addTwoNumbers2 = (a, b) => a + b;

let sum2 = addTwoNumbers2(8, 10);
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message)
saySomething("I'm Ronnie Pickering! Let's have a bare-knuckle then!")

const saySomething2 = () => console.log("Hello!")
saySomething2();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        Here is some text!
    </p>`
);

console.log(returnMultipleLines())