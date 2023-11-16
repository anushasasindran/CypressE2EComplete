describe('Cypress fixtures', () => {
    it('Should load the file using cy.fixture',() => {
        cy.fixture('example').then((data) => {
        let token = data.token
        cy.log(token)
        })
    })   
    it('Should write the file using cy.writeFile',() => {
        cy.writeFile('cypress/fixtures/example.json',{
         token:'updatedToken'
        })
    })
    it('Should read the file using cy.fixture after update',() => {
        cy.fixture('example').then((data) => {
            let token = data.token
            cy.log(token)
         })
     })
     it('Should read the file using cy.readFile',() => {
        cy.readFile('cypress/fixtures/example.json').then((data) => {
            let token = data.token
            cy.log(token)
         })
     })
}) 
