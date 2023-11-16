//loops
//to iterate over a collection
//use case - to find specific element from the collection
//do something with all elements

//different types of loops
//standard for loop
//forEach - to iterate through an array
//while and do while
//for in  - specific to JS . To iterate through an object we use for in loop
//for of can be used to iterate over array


//standard for loop is explained before


//for example we have response from API . that has a status closed, open , pending.
// We need to find all the requests with open status
let found;
let reqStatus = ["open","closed","inprogress","inQA","fixed"]
for(let i=0;i<reqStatus.length;i++){
    if(reqStatus[i] === "fixed")
    found = true;
   
}
if(found)
{
    console.log("found the  fixed status")
}
else{
    console.log("not found")
}
//use of break statement. Once the condition is met it breaks the loop and come out
//real time scenario - Imagine in UI we handle with multiple  windows. If switch to a particular window, stay there

let winArr = ["google","amazon", "youtube"]
for(let i =0; i<winArr.length; i++){
 let window = winArr[i]
 if(window === "amazon"){
 //write code to do some action here
console.log("printing before break")
 break
 console.log("printing after break")
 }
}

//use of forEach = This is commonly used to iterate to JSON arrays in practical
//it iterate to each element in the array

//forEach is a call back function.


winArr.forEach((windowData,index,arr)=> {
    console.log("Data in the array:",windowData) 
    console.log("Index in array:",index)
    console.log("the array:",arr)
    })




//for..in and for..of loops
//for..in in Objects and for..of in arrays


//for..of loop
console.log("Using for of to iterate through array")
for(let ele of winArr){
    console.log(ele)
}

//for..in loop
console.log("Using for in to iterate through object")
let obj ={
    email :"test@test.com",
    id : "12345",
    name : "jill"
}
for(let ele1 in obj){
    console.log(ele1)
}
/*
//while loop. Why we need to use. Until a condition is met (or when the end condition is not known)
//example retry until you get a response
//Scenarios- waiting for API response.. retry max of 10 times
let count =1
while(true){
    console.log(count)
    if(count == 10) break
    count++
}
//if we did not give an end condition that count ==10, it goes infinite

let isDatareturned = false;
let count1 = 1;

while(isDatareturned===false && count<=10){
    console.log(count1)
    if(count1 ==5){
        isDatareturned = true;
    }
    count1++
}
*/