//To create data, update data and manipulate data , that we pretty much do in test automation
//Strings
let str = "hello"
let str1 = 'goodmorning'
//template literal = 
//this is used for concatenating strings. The one common usage is when we do API chaining
let str3 = `${str} ${str1}`
console.log("Concatenated string using template literal:",str3)

//number
let num = 5
let num1 = 5.5

//boolean
let flag = true;

//object
let obj = {}//object in curly spaces
//usage in many places, example API headers, which has many parameters, token, application type

//Array
let arr =[] //Array we use in many places to store data in form of array

//Regular experssion
let re =/abc/ 
//when we want to replace a particular string 

//undefined and null
let val; //implicity value is undefined
let val1 = undefined
let val2 = null;
//Javascipt is a dynamic lanugage. Type is determined during the run time.
//Type is determined during run time. So typeof operator is needed to determine the type of data during run time.
//typeOf string is string
console.log(`the type of str is :${typeof(str)}`)//This is one syntax for typeOf operator
console.log(`the type of str is :${typeof str}`)//This is another syntax for typeOf operator
console.log(`the type of str3 is :${typeof(str)}`)
//type of number is number
console.log(`the type of num1 is :${typeof(num1)}`)
//typeOf boolean is boolean
console.log(`the type of flag is :${typeof(flag)}`)
//type of object is object
console.log(`the type of obj is :${typeof(obj)}`)
//type of array is object
console.log(`the type of arr is :${typeof(arr)}`)
//type of regexp is object
console.log(`the type of re is :${typeof(re)}`)
//type of undefined is undefined
console.log(`the type of val is :${typeof(val)}`)
console.log(`the type of val1 is :${typeof(val1)}`)
//type of null is object
console.log(`the type of val2 is :${typeof(val2)}`)


//truth falsy and nullish values
/*
false
undefined
null
0
NaN
" "
*/
//only the above 6 are falsy values 
let val3 = " "// give all falsy values one by one. The result goes to else block //give empty object or empty array the results goes to if block
if(val3){
console.log("condition met")
}
else{
console.log(`Given value ${val3} is a falsy value`)
}
//everything else than the 6 falsy value is evaluating as true. Example an emty object {}., empty array []

//boolean and numeric context of falsy values
let val4 = 5 + undefined //numeric context of undefined
console.log("the value of val4",val4) //the result is NAN

let val5 = 5 + null //numeric context of null
console.log("the value of val5",val5)//the result is 5, the null is treating as 0

//datatype conversions
//parseInt() - to convert a string to number
let userId = "123456"
console.log("type of userId",typeof(userId)) //type string
let userIdNumber = parseInt(userId) //convert to number
console.log("type of userIdNumber",typeof(userIdNumber)) //type number
console.log("ParseInt convert string to number:",userIdNumber)

//parseFloat() - to convert a string to floating point number
let id = "123.00123" //type string now
let userIdFloat = parseFloat(id) //convert to floating point number
console.log("type of userIdFloat",typeof(userIdFloat))//type number 
console.log("ParseFloat convert string to floating number:",userIdFloat)
//unary plus operator
//instead of parseInt and parsefloat we can use unart + operator to convert to number
let number = +userId;
console.log("+ operator to convert string to number:",number)
console.log("type of number",typeof(number)) //type number

let floatnumber = +id;
console.log("+ operator to convert string to floating number:",floatnumber)
console.log("type of floatnumber",typeof(number)) //type number

//toString() method - to convert to String 
let num5 = 2345678
let strVal = num5.toString();
console.log("toString to convert to string:",strVal)
console.log("type of strVal",typeof(strVal)) //type number

