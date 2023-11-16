//to demostrate asynchronous nature of JS
function a()
{
    console.log("function a executed")
}
function b()
{
    console.log("function b executed")
}
function c()
{
    console.log("function c executed")
}
//function calling
a()
b()
c()

//When  you run this code what is the expectation. It runs in sequential order
/*
function a executed
function b executed
function c executed
*/

//But if the code is changed to include a timeout function
console.log("After timeout is added in seconf function")
function a1()
{
    console.log("function a1 executed")
}
function b1()
{
    setTimeout(()=> {
        console.log("function b1 executed")
    },2000)
    
}
function c1()
{
    console.log("function c1 executed")
}
//function calling
a1()
b1()
c1()
/*
Output
function a1 executed
function c1 executed
function b1 execut

not in sequential order
because setTimeOut function takes more time, so the next command wont wait for the previous one
*/