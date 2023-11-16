//If ...else and Switch statments
//If...else
//Just if 
//use case 1- handling popup. in some condition popup appears. In case of random popup click on it. otherwise do not do anything
console.log("to demonstrate Just if")
let popupExists = true;
if(popupExists){
    console.log("Click on the popup")
}
//use case 2 - Just if NOT - to check falsy values
console.log("to demonstrate Just if NOT")
let data;
if(!data){
    console.log("no valid data")
}

//use case 3 - if and else
console.log("to demonstrate If and else")
let fileExists;//undefined value, since let is not initialzed
if(!fileExists){
console.log("create the file")
}
else{
console.log("read the file")
}

console.log("to demonstrate nested if real case scenario")
//usecase 4 - nested if else loop
//real time we use this on API response assertions as. since API returns many status code, we can use the same test case
//to run different status codes with different data
let statusCode = 500 //give different statuscodes here. if any other status code than given say 500, it goes to else block and print the status code
if(statusCode === 201){
    console.log("the request is created")
}
else if(statusCode === 409){
    console.log("conflict error")
}
else if(statusCode ===400){
    console.log("Bad request error")
}
else{
    console.log(`failed with error ${statusCode}`)
}

console.log("to demonstrate If else inner conditions")
//use case 5 - If else inner conditions. else block can have inner conditions
let statusCode1 = 201 //give different statuscodes here. if any other status code than given say 500, it goes to else block and print the status code
if(statusCode1 === 400){
    console.log("the request is created")
}
else{
    console.log("some error") 
    errorCode = 403
    if(errorCode === 400){
        console.log("bad request error")
    }
    else{
       console.log("forbidden error") 
    }
}
//Output
//some error
//forbidden error



console.log("to demonstrate switch with real scenario")
//Switch case [comes with break, default keywords]
//suppose in an API response we are getting the status. based on that we have predefined actions
//if we know the predifined set of cases, switch case is ideal
let responseStatus = "inactive" //pending, inactive, 

switch(responseStatus){
    case 'active' :
    console.log("call another API to get the data")
    break;
    case 'inactive' :
    console.log("call active API to make it active")
    break
    case 'pending' :
    console.log("the status are still pending")
    break
    case 'error' :
    console.log("some error occurred")
    break

    default :
    console.log("unknown status error")
    break
}
//ouput - if the response status is active first switch case will execute. If any that is apart from the above the default one will execute