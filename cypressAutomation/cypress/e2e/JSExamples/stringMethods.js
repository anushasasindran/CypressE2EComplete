//Extract string - use of slice method
/*
slice method requires start and end index(end index not needed)
you can specify only the start index
you can specific the negative range
*/
let date = "2023-09-16"
/* extract only year - 0 index 
extract only yy-mm-dd format - start from 2 index
extract only month - start from 5 index
extract only date - start from 8 index
*/
//we can use slice and substring. Slice is preferred as it can specify negative range also
//extract only yy-mm-dd format
let yymmdd = date.slice(2)
console.log("extract date format:",yymmdd)
//extract only year 
let year = date.slice(0,4)
console.log("extract year:",year)
//extract only month
let month = date.slice(5,7)
console.log("extract month:",month)
//extract only date
let day = date.slice(8,10)
console.log("extract day:",day)

//you can print in reverse order also. the last index is -1
let day1 = date.slice(-2)
console.log("in reverse print day:",day1)

//Replace and ReplaceALL method
/* Replace method accepts a string or regexp as its first argument
returns the modified string value
Scenario
1. get only the file name
2. replace the .pdf with .txt
3. replace the table name with accounts
4. Convert the given date format to YYYYMMDD
*/
let file = "testData.pdf"
let query = 'select * from {{table_name}}'
let dt = "2023-09-17"

//get only the file name
let fileName = file.replace(".pdf", "") //finding .pdf and replacing with nothing
console.log("print only filename:",fileName)

let filetxt = file.replace(".pdf",".txt")//replacing pdf with txt
console.log("replace file extension:",filetxt)

let modifiedQuery = query.replace("{{table_name}}","Account")
console.log(modifiedQuery)
//Convert the given date format to YYYYMMDD
let dtReplaced = dt.replace("-","")
console.log("replace method replace first occurance only:",dtReplaced) // prints output as 202309-17, it replaced the first- only

//to replace all - we need to use regexp. whatever inside // should be replaced
// the regExp with g, means it found all the occurance 
let dtReplaceAll = dt.replace(/-/g,"") //it prints 20230917
console.log("Replaceall with regExp:",dtReplaceAll)

//Extract substring - split method
/*
It spilts the string
need to provide a seperator to split the string
the seperator (string or regexp) is omitted from the returned array
if the very first.last char is given as seperator it add a empty string in the first/last positions
returns an array with the splited strings. example if the seperator in the middle, it gives array with leftside and rightside values

Scenario
1. get only the date part of the time stamp
2. split by space/first or last character
3. get only the file name
*/

let timestamp = "2023-09-16T10:51:52:2072"
let str5 = "hello world"
let file1 = "testcases.pdf"

//1. get only the date part of the time stamp. When we split with T we get array of two values 
// ["2023-09-16", "10:51:52:2072"]
//to get the date part array index 0

let resultDate = timestamp.split('T')
console.log("Split method to split string:",resultDate) //[ '2023-09-16', '10:51:52:2072' ]
console.log(resultDate[0]) //this to get the date part 2023-09-16

//2. split by space/first or last character
let str5result = str5.split(" ")//split with space
console.log("split method with space:",str5result) //[ 'hello', 'world' ]
let str5result1 = str5.split("h")//split with first char. you can see the empty string in the output
console.log("split method with first char:",str5result1) //[ '', 'ello world' ]

//3. get only the file name 
//you can split with . to get only the filename

let filenew = file1.split('.')
console.log("The split method to get only file name:",filenew)// [ 'testcases', 'pdf' ]
console.log(filenew[0])//testcases

//Extract string -indexOf method
//suppose we get a log message like this. we need to extract only the application number
let log = "Application #{12345} submitted"
//if this is a static test, then slice works. 
//but if it is dynamic say next time the message is "App #{12345} submitted"
//if the application number always display in the same format as {}
let start = log.indexOf("{")
console.log("To get the start indexof:",start) //index returned
let end = log.indexOf("}")
console.log("To get the end indexof:",end) //index returned

let appnum = log.slice(start +1 , end) 
console.log(appnum)
