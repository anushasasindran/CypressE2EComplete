describe('Cypress and non cypress commands', () => {

    it('Should log the messages',() => {
        //cy.readFile('cypress/fixtures/example.json')
        cy.writeFile('cypress/fixtures/example.json',{
            "test" :"sampletest"
        })
        console.log("This is non cypress command - test executed") 
        cy.log("This is cypress asynchronous command - test executed")
        Cypress.log({ 
            name : 'Positive Test',
            displayName : 'Log message',
            message : 'Cypress synchronous command - test executed',
      })   
    })

    it('Should use promise to handle the synchronous command ',() => {
        //cy.readFile('cypress/fixtures/example.json')
        cy.writeFile('cypress/fixtures/example.json',{
            "test" :"sampletest"
        }).then(() => {
            Cypress.log({ 
                name : 'Positive Test',
                displayName : 'Log message',
                message : 'Cypress synchronous command - test executed',
            })   
        })
        cy.log("This is cypress asynchronous command - test executed")
    })
})