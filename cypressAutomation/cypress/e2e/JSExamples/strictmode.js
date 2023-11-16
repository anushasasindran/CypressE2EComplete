//strict mode prevents the semantics error in JS
// it prevents any undeclared variable
// prevents the the use of system defined keywords like implements, interface, let, package, private, protected,public, static and yield as identifers
"use strict"
a= 1; //undeclared global variable
console.log(a) // without using strict mode it prints the value of a
// when you use the strict mode get an error that ReferenceError: a is not defined
//suppose if we have 100 of lines of code , we did not declare any of the variable. 
let package = " any package"
console.log(package)
// if strict mode is used - SyntaxError: Unexpected strict mode reserved word
//if strict mode not using it prints any package