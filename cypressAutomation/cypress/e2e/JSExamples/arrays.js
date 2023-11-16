//Array are list-like objects that can store multiple values in a single variable. 

const arr1 = ["banana","kiwi","apple", "pear", "mango"]
const length = arr1.length
console.log("the length of array is:",length)

//push and pop method
//push add element to the end , pop removes the element from end
arr1.push("grapes")
console.log("push method add element to end:", arr1)
arr1.pop()
console.log("Pop method remove element from end:",arr1)
//shift and unshift()
//add element to the start and removes elements from the start
arr1.unshift("grapes")
console.log("Unshift method add element to start :",arr1)
arr1.shift()
console.log("Shift method remove element from start:",arr1)

//merge arrays - concat
arr2 = ["cucumber", "carrot", "beetroot"]
const mergedArr = arr1.concat(arr2)
console.log("Merged array using concat :",mergedArr)

//slice()Extracts a section of the array.
const fewFruits = arr1.slice(1,3)//Gets elements from index 1 to 2 (3 is not inclusive)
console.log("Sliced array using slice method :",fewFruits)

//splice() Changes content by removing/replacing existing elements and/or adding new elements.
/*
start: The index at which to start changing the array.
deleteCount (optional): The number of elements to remove.
*/
arr2 =[1,2,3,4,5,6,7,8,9,10]
console.log(arr2)
const newArr = arr2.splice(1, 1)
//it starts from index 1 and removed 1 element
console.log("Splice returns the removed elements in array:",newArr) //here it removed 2 and returns like this [2]

//adding elements
//at index 1, 0 elements to remove, but add new elements
const newArr1 = arr2.splice(1, 0, "20")
console.log("Splice method returns empty array:",newArr1) // it did not remove any elements. so []
console.log("Inserted element using splice method:",arr2) //it inserted 20 on 1st index
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
//An array containing the elements that were deleted.

//replacing elements
const newArr2 = arr2.splice(2,2,"30","40")//in index 2 , 2 elements are removed and replaced with new 2 elements
console.log("Splice removing multiple elements:",newArr2)//it returns deleted array of 2
console.log("After splice method:",arr2)

//forEach
console.log("ForEach to iterate to array")
arr1.forEach(arr1 => {
    console.log(arr1)
})

//map method
// map method creates a new array based on the condition check. it returns the modified array
dataArr =["10","20","30","40","50"] //this array has all strings. convert it to number and store in a new array
const modifiedArr = dataArr.map(ele => parseInt(ele))
console.log("Map method creates a new array:",modifiedArr) 

//filter method
//creates a new array if the elements pass the condition
//imagine we have a JSONfile in the project where the data is stored as array
let data = [
    {
        empId : 1200,
        empEmail : "test1@test.com",
        userrole : "admin"
    },
    {
        empId : 500,
        empEmail : "test2@test.com",
        userrole : "user"
    },
    {
        empId : 200,
        empEmail : "test3@test.com",
        userrole : "admin"
    }

]
//map funtion to get all the ID's in an array
const Idarr = data.map(ele => ele.empId)
console.log("Map to get all ID's:",Idarr)

//filter element
const filterArr = data.filter(ele => ele.empId <1000)
console.log("Filter to filter empID less than 1000 :",filterArr)
//it filter the empID that has less than 1000 

/*
difference in map and filter
map creates a array with result. 
filter gives the array itself that passes the result
*/
//find element - it returns the first matching result. that array it returns
//find index returns the index of the first element matching the element
const findArr = data.find(ele => ele.empId <1000)
console.log("find to get first matching result:",findArr)
const findIndex = data.findIndex(ele => ele.empId <1000)
console.log("find index to get index of matching element:",findIndex)

//includes
console.log("include method return boolean result:",dataArr.includes("30"))

//sort and reverse
const unsortedArray = ["mnop", "defg", "klmn", "abcd"]
console.log("Sorted array :",unsortedArray.sort())
console.log("Reverse array:",unsortedArray.reverse())

//array join
//it joins the array to a string
const nameArr = ["first name", "middle name", "last name"]
const strResult = nameArr.join()
console.log("joined array to string:",strResult)

//partical example  //Generating a URL query string from an array of parameters:
const queryParams = ['user=123', 'page=4', 'sort=asc'];
const urlString = `https://example.com/api?${queryParams.join('&')}`;
console.log("URL formed with Join:",urlString); // "https://example.com/api?user=123&page=4&sort=asc"
