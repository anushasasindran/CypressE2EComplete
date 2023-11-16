//Objects.Objects is very important in JS. In JS almost all are objects
//Object is a collection of property(key:value)

//Object creation - different ways
/*
1. using object lierals/initializer(commonly used in test automation)
2. using constructors
3. object create method
from Es5 objects can be created using classes
*/
//using object lierals/initializer . This is the most common method
let obj1 ={
    email :"test@test.com",
    id : "12345",
    name : "jill"
}
console.log("Print the object:",obj1)
console.log("Print only the name:",obj1.name)
console.log("type of object:",typeof obj1)


//instead of iterating with for.in , we can use Object.keys() method to iterate through the object and print the keys
//Object.keys() method returns an array

//object methods 
let obj ={
    email :"test@test.com",
    id : "12345",
    name : "jill"
}
const keys = Object.keys(obj);
console.log("Object.Keys method to get only keys:",keys);

//Object.values() method to iterate through the object and get the values. this method returns the values in array
const values = Object.values(obj);
console.log("Object.values method to get only values:",values);

//Object.entries() method to iterate through the object and get the key value pair. This method return the values in array
const entries = Object.entries(obj)
console.log("Object.entries method to get the entries:",entries)
//these metjod provides a more structured way to iterate over the object properties compared the for..in loop

/*suppose we have an JSON payload as input for API saved as 
const expectedData{
    email:
    platform:
    product :
}

We have a response
responseData ={
    productId : 
    product:
    platform:
    email:
}
In order to assert the payload and response data we can use the forloop and object entries method like this
 Object.entries(expectedData).forEach(([property, expectedValue]) => {
      expect(response.body[property]).to.equal(expectedValue);
    });
*/

