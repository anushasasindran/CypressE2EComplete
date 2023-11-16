//Logical operators
/*
&&
||
!
*/
// two main purpose of locial operators in test automation.
// In conditional statments. eg if ..else
//to have  a default value
//Use case 1 - AND && - if the conditions all are true
let val = "tuesday"
if(typeof val === 'string' && val.length > 2){
    console.log(`Given val ${val} is valid string`) //here it prints as valid string
}
else{
    console.log(`Given val ${val} is not valid string`)
}
//If  you put any empty string or any number for val, you can see && condition is not met or change val to any string with less than 2 characters

//use case 2 - OR || . If any condition met

let day = "wednesday"
if(typeof day === 'string' || day.length > 20){
    console.log(`Given val ${day} is valid string`) //here it prints as valid string. since one condition is met. It is a string. but length is not greater than 20
}
else{
    console.log(`Given val ${day} is not valid string`)
}

//use case 3 - Logical NOT
//denoted by !. it does the reverse. If given value is true it reverse to false and vice versa
let userExists
if(!userExists){
    console.log("the user not present,create one") //this will print
}
else{
    console.log("the user is present, skip creating new")
}