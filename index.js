
const num1d = prompt("Enter the first number:");
const num2d = prompt("Enter the second number:");

const num1=parseInt(num1d)
const num2=parseInt(num2d)

const sum1 = +num1 + num2
alert(`The sum of ${num1} and ${num2} is ${sum1}`);

const y = "A program that accepts and add two number inputs from a user";

const length = y.length

console.log(length)

const nam1 = prompt("Enter your first name:");
const nam2 = prompt("Enter your last name:");
const nam3 = nam1 + nam2
alert(`Your full name is; ${nam1}  ${nam2}, and your username is; ${nam3}`);

const nam1s = nam1.slice(0,4);
const nam2s = nam2.slice(0,1)
const unam = nam1s + nam2s
alert(`Your CapacityBay username is; ${unam}`);

const lower = unam.toLocaleLowerCase();

alert(`Your lower case CapacityBay username is; ${lower}`);