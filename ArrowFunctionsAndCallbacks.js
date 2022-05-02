//Var let and const var let const var let const

var x = 10;  // establishing the overall value of variable x throughout program
{
    let x = 2;  // setting x =2 within a block of code only
}
 const pi  = 3.14159; // const sets a variable whos value can not be changed


 //Template Literals Template Literals Template Literals Template Literals
 // enhance the way we work with strings
 //use the back ticks to make  a template literal
 let myString= `Hello
 world
 my name
 is Matt.`;
 console.log (myString);

 console.log(`six times five = ${5*6}`); //this is making the code more dynamic by writing a function within a string

 //Arrow Functions Arrow Functions Arrow Functions
 //first example is one line NO curly braces are needed
 let createFullName= (firstName, lastName) => `${firstName} ${lastName}`; 
 console.log(createFullName('Tom', 'Sawyer'));

 const someFunction = (a, b) => {  // use curly braces if more than one line
     let result = '';
     for (let i = 0; i <b; i++){
        result += a;
     }
     return result;
 };
 console.log(someFunction('hello', 3));
// best practice to use const when assigning function so that it can not change

//Callback Callbacks Callbacks Callbacks
//when we pass a function into another function to be executed once the first is complete
function logUsername(user){
    console.log(user);
}
sendHttpRequest('getUser', logUsername);  // do not put () after function name because it is defined within the function

sendHttpRequest('getUser', user => console.log(user)); 

//Promises Promises Promises- something that will happen in the future  either successful or a failure
doSomethingThatReturnsAPromise()
.then((value)=>{  //if its successfull then do this
    console.log(value);
}).catch((err)=>{  // if its unseccessfull log out the error
    console.error(err);
});


//CLASS NOTES CLASS NOTES

/* AIM TO USE CONST MORE OFTEN THEN NOT WHEN DECLASRING VARIABLES.  LET IS HELD WITHIN A FUNCTION THEN DISAPPEARS.  VAR IS USED BUT NOT MUCH OF INDUSTRY STANDARD.

TEMPLATE LITERALS-  all about the backtic ``.   Use ${} to wrap around code or variables, they help clean up code and make it easier to read.

A function is an Object- assign it to a variable => pass it to a function
There are multiple ways to declare an arrow function and write it out
-->google difference between arrow function and regular function

CALLBACKS- when you pass a function into another function
callbacks also accept a second argument for a timer delay in milliseconds. with setInterval(function, timerDelay)

PROMISES --> goog async 08
then, catch, finally => promises  follow this path of logic to execute its code

hackerrank -extra practice and help with coding