
//Named function  that returns an action
function addTwoNumbers(num1, num2){
    let sum = num1+num2 //statement of function
    return sum
}

//calling the function
let total = addTwoNumbers(5,7)
console.log("calling with two number:",total)

let total1 = addTwoNumbers("five","two")
console.log("calling with two strings:",total1) //though given string data it give answes as fivetwo, since it has concatenated two strings with + opertaor

let total2 = addTwoNumbers() //not providing arguments
console.log("No arguments provided:",total2)//since no arguments passed it gives NAN . undefined +undefined = NAN

let total3 = addTwoNumbers(5) //giving one argument
console.log("giving one argument:",total3)//5 + undefined = NAN

let total4 = addTwoNumbers(10,20,30) //giving more arguments. it ignores the more values. it takes first two
console.log("giving more arguments:",total4) // print 10 + 20 = 30

console.log(addTwoNumbers) //what will happen if you print the function name. the ouput is
//[Function: addTwoNumbers]

console.log("type of the function:",typeof addTwoNumbers)//type of function is a function
console.log("Type of calling function:",typeof addTwoNumbers(4,2))//Call the function with type of. type should be number, since the sum is a number


//Function that returns no action
//when we write the function in pageobject modal , say typing email field, that returns the email address.
//But when we write a function for login button submit there is no need of return anything

function typeEmail(email){
//cy.get(locator).type(email)
console.log("the email address is returned")
return email
}

function loginSubmit(){
    //cy.get(locator).click()
    console.log("clicking the login button")
}

typeEmail('test@test.com')


loginSubmit()



//Annomyous function - the function does not have name - also called as function expression
//its use is call back function . what is call back function. One function use another function as its argument
//function without name is assigned to a variable
let addTwoNumber = function(num1,num2){
    let sum = num1 +num2
    return sum
}


console.log("function without name:",addTwoNumber(5,6))

//function with name is assigned to variable

let sumFn = function addTwoNum(num1,num2){
    let sum = num1 +num2
    return sum
}
//here we cannot call the function with the function name.

//addTwoNum(2,3)//gets error that addTwoNum is not defined
//call it with the variable name
console.log("function calling with variable:",sumFn(2,3))  // this prints the sum



 