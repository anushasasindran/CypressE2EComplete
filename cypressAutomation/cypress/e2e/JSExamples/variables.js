//this is how we define a variable and prints in value
let start;
console.log(start) //ouput is undefined as no value is intialized for let
//can assign values to let after declare
start = "lets begin code"
console.log(start)


let greeting = "hello world!"
console.log(greeting)

//Let can be reassigned
greeting = "goodmorning"
console.log(greeting)

//const noValue; //const variable cannot declare with out initialization . SyntaxError: Missing initializer in const declaration

//const need to intialize with value and cannot reassign also
const test = 30
console.log(test)

//test = 50; //if we reassign a value to constant error - Assignment to const variable

//why variable is not used
var count =0;
if(true){
    var count = 10
    console.log("the value of var in if block",count)//10
}
console.log("the value of var outside block",count)//10
//globally scopped
//here inside the block and outside the block prints 10
//suppose if we want to use a same variable name in many blocks, var leads to a buggy code

//when we use let instead of var
let count1 =0;
if(true){
    let count1 = 10
    console.log("the value of let in if block",count1)
}
console.log("the value of let outside block",count1)
//block scopped
//here inside the block prints 10, outside block prints 0

