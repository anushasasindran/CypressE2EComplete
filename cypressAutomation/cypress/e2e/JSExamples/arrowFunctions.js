//arrow functions

//With parameters
let sum =(num1,num2) => {
let sum = num1+num2;
return sum
}
let total = sum(4,5)
console.log("The sum of numbers:",total)


//no params
let arrowFn = () => 10>5
let res = arrowFn()
console.log(res)

//single param
let greeting = (name) => console.log(`Hello,${name}`)
greeting("Rob")

//this keyword cannot be used in arrow function
/*
suppose this scenario. if the data is empty we should skip the test case and goes to next
  it('Should capture the latest config ID in grid',function() {
    if(configEmpty){
      cy.log("No configurations are added yet.");
      this.skip();
//code to capture the configID
  }

since this.skip is used, we define this test case as named function

else, the it block looks like
it('Should click on the Create Configuration button', () => {
//code to create configuration
})
*/