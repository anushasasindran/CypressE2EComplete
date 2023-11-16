//Return statement
/*
Return a single primitive value
Return an expression [that evaluates to a value]
Return an object type
Return a function itself
Return statement in conditional statement
*/

//Return a single primitive value - we have seen before. it returns the sum
//Return an expression [that evaluates to a value] . Instead of sum = num1 +num2 . return(sum), we can return the expression as return(num1+num2)
//Return an object type
//suppose you have a getUserData that fetches some user data based on the userId
function getUserDetails(name,age){
    return{
        username : name,
        userage :age
    }

}
const user = getUserDetails('test','10')
console.log("Return an expression:",user)

function getUserData(userId){
    const users ={
        '1':{
            name : 'Alice',
            email :'alice@test.com',
            age : 30
        },
        '2':{
            name : "Bob",
            email : 'bob@test.com',
            age : 25
        }
    }
    return users[userId]  //the return type is object
}

let userData = getUserData('1')
console.log("Returns an object:",userData)
/*
output
{ name: 'Alice', email: 'alice@test.com', age: 30 }
*/

//Return a function itself
function createGreeting(greeting){
    return function(name){
        return `${greeting}, ${name}`
    }
}

const sayHello = createGreeting("hello") // if you print here it gives function anonymous
sayHello('Alice') // Have to call the child function
console.log("Return a function:",sayHello('Alice')) 
//use - encapsulation - higher order functions allows you to encapsulate specific behaviours. this is like a
//higher order and child functions

//Return statement inside in conditional statement
//using a return statement inside a conditional in a function allows you to exit the function early based on some condition

function isAdult(age){
  if(age<0) return "invalid age"
  else if(age<18) return false
 else return true

 }

 const adult = isAdult(30)
 console.log("Return boolean",adult)
 //practical example in automation if statuscode ===400 return "bad request"