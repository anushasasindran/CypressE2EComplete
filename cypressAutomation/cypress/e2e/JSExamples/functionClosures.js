/*Closure is a function, same like inheritance in Java . 
That has access to the parent scope's variables, even after the parent function is closed.
 This is fundamental concept in JS and is widely used in various scenarios,
especially in creating private or factory functions.
When a function in JS execute they use a scope chain. This scope chain is essentially a list of objects 
that the function references to look up variables.
When you create a closure, the function being defined creates its own scope chain. 
This scope chain consists of the function own variables and also the variables from the enclosing scope(the function within its defined)
*/

//Basic closure

function outerFunction(){
   let count =0; //outer function has just the variable defined
    return function innerFunction(){
     count++  //the logic is inside the inner function. Inner function can access the count variable of outer function
     return count
    }
}

const counter = outerFunction()
console.log(counter) //if you print this get[Function: innerFunction]. we have to call the inner function for result
console.log(counter()) // it gives result 1. if you call again it gives result 2

//Creating private variables with closures
function makePerson(name){
let age =0; //this is a private variable. the outer function just have a single variable age
return{ //this outerfunction returns and object. the object has several methods such as set name,getname etc
  setname : function(newName)  { //this method allows you to update the value of the name variables
    name = newName
  },
  getname : function(){//this returns the value of name
    return name;
  },
  getage : function(){ // this returns the age
    return age;
  },
  haveBirthday : function(){ //this increments the age by 1
    age ++
  }
  };
}

const person = makePerson('Alice')
console.log(person) // it gives all the methods name. when the function is called, it creates an object with method inside it
console.log(person.getname()) //output - Alice
console.log(person.getage()) //output - 0
person.haveBirthday()//it increments the age
console.log(person.getage()) //it prints 1
