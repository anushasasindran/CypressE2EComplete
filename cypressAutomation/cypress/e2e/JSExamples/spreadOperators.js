//Spread operators
//to copy arrays
const arr1 = [1,2,3,4,5] //copy this to array 2
const arr2 =[...arr1]
console.log("Spread opertor to copy:",arr2) //array 1 is copied to array

//to concatenate arrays
const arr3 = [6,7,8,9,10]
const arr4 =[...arr1,...arr3]
console.log("Spread operator to concatenate:",arr4)


//To merge object. an important use case in automation, where we want to merge the result of different test cases
//example from authenticate API, we get token, from register API we get userID, name.To merge this use as in input of other API
const obj1 ={
    product : 'test',
    category:"automation",
    productID : "12345"
 }

 const obj2 ={
    product : 'test',
    service : 'test service',
    serviceId : "9876",
    productID : "10002220"
 }

 const mergedObj = {...obj1,...obj2}
 console.log("Spread operator to merge objects:",mergedObj) 
 //it merges two objects. since product : test is common in both, it keep the one
 //since productID has two values, it overwrites the first one
 /*
 Output
 {
  product: 'test',
  productID: '12345',
  service: 'test service',
  serviceId: '9876'
}

 */
//Partical use case in Cypress where when we deal with JSON, we want to overwrite a specific field, by not all the existing part
/* suppose there is a JSON
{
username :
email:
password :
}
We want to overwrite only the email field . other fields should keep the existing data
cy.readFile('cypress/fixtures/UI/registerData.json').then((existingData)=> {
      const updatedData ={
        ...existingData,
        email:"testemail@test.com"
      }
cy.writeFile('cypress/fixtures/UI/registerData.json', updatedData)
*/