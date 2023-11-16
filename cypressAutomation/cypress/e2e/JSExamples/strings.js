//Strings
//most of the test data are in string format
//It is a sequence of characters
//index start from 0
//length returns the length
let str = "helloworld"
//charAt tells the specific character at the given index
console.log("to get char at given index:",str.charAt(0))
console.log("string length:",str.length)
//we can create string 
/*
1. Literal forms 
  a. double quotes
  b. single quotes
  c. template lieral // concatenation is supported. this is the preferred method
2. Object form
*/
let str1 = "hello world" //double quotes
let str2 = 'hello world'//single quotes
let str3 = `hello world`//template literals
//use the string object
let str4 = String("hello world")
console.log(str1 === str2) //true


//string comparison
/* full match
partical match  - includes() method
startsWith()
endsWith()
All these return a boolean result
*/
//use of template literals and comparison
let productText = 'amazon'
let product = 'amazon'

console.log(`Comparing product: '${productText}' === '${product}' => ${productText === product}`);
//this prints Comparing product: 'amazon' === 'amazon' => true
let filename = 'invoice-123.pdf'
//full match
if(filename === 'invoice-123.pdf'){
  console.log("the file name matches")
}
//case match
if(filename === 'Invoice-123.pdf'){
  console.log("the file name matches")
}
else{
  console.log("the file name not matches")
}
//because of case sensitivity that failed. use toUpperCase() and toLowerCase() to deal with this

if(filename.toUpperCase()=== 'INVOICE-123.PDF'){
  console.log("the file name matches")
}
else{
  console.log("the file name not matches")
}
//trim method - to trim the leading and trailing white spaces
if(filename.toUpperCase().trim() === 'INVOICE-123.PDF'){
  console.log("the file name matches")
}
else{
  console.log("the file name not matches")
}

//partial match
if(filename.startsWith("invoice")){
  console.log("yes, it starts with invoice")
}
//if you want to check the file extension
if(filename.endsWith("pdf")){
  console.log("yes, it ends with pdf")
}

if(filename.includes("-123")){
  console.log("yes, it includes -123")
}


