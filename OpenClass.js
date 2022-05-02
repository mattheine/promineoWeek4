//1
// convert function into arrow function 
/*function myFunction(num1, num2){
    return num1 ^num2;
} */
var a = 5
var b = 6

let xor = (a,b) => a^b;
console.log(xor(a,b));

//2
/*Convert the following function into an arrow function. Refer to the new function as pythagoras.

function myFunction(num1, num2) { return Math.sqrt((num1*num2)+(num2*num2)); } */
let pythagoras = (num1, num2) => Math.sqrt((num1*num2)+(num2*num2));

//3
/* Convert the following function into an arrow function. Refer to the new function as revert.

function myFunction(value){ return !value; } */

let revert = (value) => !value;

//4
/* Convert the following function into an arrow function. Refer to the new function as returnNumber.

Note: The returned value is a template literal. Remember to use backticks.
function myFunction(num){
        return `Your number is $(num)`
} */
let returnNumber = (num) => `Your number is ${num}`;

//5
/* Convert the following function into an arrow function. Refer to the new function as returnSum.

function addTwoInputs(a,b) { return a+b; } */

let retunSum = (a,b) => a+b;

//6
/*Convert the following function into an arrow function. Refer to the new function as fancyAlgorithm.
function myFunction (num1, num2, num3){
    let value = 0;
    for (let i =0; i <num3; i++){
        value = (value +num2) * num1;
    }
    return value / (num1 *(num3 *10));
} */
let fancyAlgorithm = (num1, num2, num3) => {
    let value = 0;
    for(let i = 0; i < num3; i++){
        value = (value + num2) * num1;
    }
    
    return value / (num1 * (num3 * 10));
}


//7
/* Convert the following function into an arrow function. Refer to the new function as returnSquareRoot.

function myFunction(num) { return Math.sqrt(num); } */

let returnSquareRoot = (num) => Math.sqrt(num);

//8
/* Convert the following function into an arrow function. Refer to the new function as monthlyPayment.
function myFunction (yearlyPayment){
    let monthly = yearlyPayment/12;
    return monthly.toFixed(2);
} */

let monthlyPayment = (yearlyPayment) =>{
    let monthly = yearlyPayment/12;
    return monthly.toFixed(2)
}

