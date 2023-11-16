//In testing basically we want to check the expected value to actual value
//comparison operator we use lot in testing to compare the results
//Assignment operator
// = += -=
let count = 1 //Assignment operator basic
let count1 = count2 = 2; //Assignment operator chaining
console.log("assignement chaining operators:",count1,count2)

//Arthmetic operators - All mathematical operators.
//not covering the basics like addition, subraction etc
//use case 1 - Remainder
let a= 5;
console.log("remainder operator:",a % 2) //remainder . useful to find even or odd number


//use case 3 - unary plus
//the data conversion from string to number or viceversa
// + operator converts one type to another
console.log("unary plus to convert string:","3" + 3) //here "3" is string and 3 is number
// If one of the operator is string + operator converts the other also to string

console.log(typeof("3" + 3)) //type is string

//how we can convert the string to number. use + operator in front of string.It converts string to number
console.log("to convert string to number with + :",+"3" + 3)// it prints 6 since "3" is converted to number 3

//Comparison operator
//very important for test automation. There are 8 comparison operator. All have different functions.
/*
==
===
!==
!=
>
<
>=
<=
*/
// == and === 
// == checks only the value. === checks type and value.
//Comparison operator always return a boolean value . true or false
let val1 = 1
let val2 = 1
console.log(val1 == val2) // return true
console.log(val1 === val2) //true , since the type of both are numbers

let val3 = "2"
let val4 = 2
console.log("Loose comparator:",val3 == val4) // return true
console.log("Strict comparator:",val3 === val4) //false , since the type of both are different
//in automation we use === more, since we get accurate results

let val5 = "two"
let val6 = 2
console.log(val5 == val6) // return false
console.log(val5 === val6)//return false

//!== this is strict not equal to
console.log(1 !== 1) // return false
console.log(1 !== 2) //retun true
console.log(1 !== "1") //return true. since type of both are different

//!= 
console.log(1 != "1")//return false, since it checks the value only



//Ternary operator
//as name suggests it requires three operators
// syntax any expression that return the boolean value
// <expression> ? 'val1':'val2' . If the expression is true it returns val1, if the expression is false it returns val2
//basic use case 
let runner = "local"
let log = runner === "local" ? "Info" : "Error"
console.log(log) // this print info. If you change the runner to any value else than local it prints error

//advance use
runner = "cloud";
let loglevel = runner === "local"?"info":runner === "cloud"?"silent" : "Error"
console.log("Ternary operator use:",loglevel)
//In place of second varnovalue, another expression is written
//if runner != local, it is checking if runner is cloud. if runner is cloud , then slient
//if runner local prints info
//if runner cloud prints silent
//if runner anything else say remote, it prints error
let userToUse;
let userPresent = true;
userToUse = userPresent?"use existingUserID":"use newUserID"
console.log(userToUse) 
//if configExists is true, it should use existing config ID
//if configExists is false, use created config ID