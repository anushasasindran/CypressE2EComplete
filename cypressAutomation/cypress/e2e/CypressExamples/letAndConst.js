describe("test suite",() => {
const constVariable = "prod url" //declaring and initializing const variable globally
let letVariable = "prod URL"//declaring and initializing let variable globally
//const constCount; //Error const variable unintialized
let count;//Let variable can declare with out initializing


    it("test case1",() => {
    count = 10; //Let value can initialize later
    cy.log(count) //prints 10
    cy.log(constVariable)//prints prod URL
    cy.log(letVariable)//prints prod URL
    const constVariable2 = "QA url" //const and let are block scopped. The variable declared in block cannot use in other blocks
    let letVariable2 = "QA url"//const and let are block scopped. The variable declared in block cannot use in other blocks
    })

    it("test case2",() => {
        //cy.log(constVariable2)//error variable not defined
        //cy.log(letVariable2)//error let variable not defined
    })

    it("test case3",() => {
       //constVariable = "dev url" //error const variable cannot reassign
       letVariable = "dev url"//let variable can reassign
       cy.log(letVariable)//dev url
       const constVariable2 = "changed QA URL" //same variable name can be used again in other blocks
        let letVariable2 = "changed QA URL"//same variable name can be used again in other blocks
        cy.log(constVariable2,letVariable2)
    })

})

