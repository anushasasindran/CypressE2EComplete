//Function paramter
/*
Default paramter
Passing undefined/any falsy values if not known
passing primitives, object type as arg

*/
//Default paramter

function greet(name,greeting){
    console.log(`${greeting}, ${name}`)
}
greet("Rob","Hello")

//if we want to make Hello constant here, we can make it as a default parameter
function greet1(name,greeting ="Hello"){
    console.log(`${greeting}, ${name}`)
}

greet1("rob")  
//you can still replace the default paramter with any arg
greet1("Test","Hi")

//Passing undefined/any falsy values if not known
function printFullName(firstName, middleName, lastName){
    if(middleName){
    console.log(`The full name is ${firstName} ${middleName} ${lastName}`)
    }
    else{
        console.log(`The full name is ${firstName} ${lastName}`) 
    }
}
printFullName("rob", "john", "jack")
printFullName("rob",null, "jack") //if the middle name is not known we can pass any falsy value like null, "" , undefined
//this is useful when we write a function, but some fields are not mandatory for all test cases
//examples - headers and body is not mandatory for all the HTTP methods, GET, authenticate etc

//passing primitive objects as parameter - object value is passing as the parameter

function fullOrgName(companyObj){
    console.log(`The full name is ${companyObj.firstName} ${companyObj.middleName} ${companyObj.lastName}`)
}
//calling the function
fullOrgName({
firstName : "happiest",
middleName : "minds",
lastName : "technologies"

})

// if you give like this console.log(`The full name is ${firstName} ${middleName} ${lastName}`)
//we are not calling the firstName from object. so it gives firstName undefined

//Rest parameters and arguments object
/*
The rest param is denoted by <paramName>
The rest parameter syntax allows us to represent an indefinite number of arguments as array
Arguments object made available within the function body
the arguments can be access by array-like notation arguments[i]
it has a length property
*/

//We have already seen a function two add 2 numbers. suppose if we want to add more.
// it is not wise to add the parameters as num1, num2, num3, num4 and so
//here is the use of Rest parameter. if we give ...NumN it denotes anything 
//you can call the function with any arguments you need

function addNumbers(num1, num2, ...numN){
    let sum =0

console.log(arguments)//we can print arguments inside the function to see the arguments
console.log(arguments.length) //prints the length
for(let i=0; i<arguments.length; i++){
    sum +=arguments[i]
}
return sum
}

let val = addNumbers(2,3,4,5)
console.log(val)

/* output of the arguments
[Arguments] { '0': 2, '1': 3, '2': 4 }
*/

