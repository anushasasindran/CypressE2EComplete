describe('Locators', () => {
   //global timeout given in config.json  defaultCommandTimeout: 30000
   //"pageLoadTimeout": 10000
   //"requestTimeout": 5000,
  //"responseTimeout": 30000

    it('should find with different type of locators', () => {
        cy.visit('https://practice.expandtesting.com/notes/app')
        //by default cy.get wait for 4 seconds
        cy.get('[data-testid="open-register-view"]').click()
        //to add additional timeout
        cy.get('#email',{ timeout:6000}).type('sep29@test.com')

        cy.get('[data-testid="register-password"]').type('test123')
        cy.get('[data-testid="register-name"]').type('test')
        cy.get('[data-testid="register-confirm-password"]').type('test123')
        cy.get('[data-testid="register-submit"]').click()
        //Although not a recommended approach for handling timeouts, 
        //cy.wait() can be used to force Cypress to wait for a specific amount of time.
        cy.wait(2000)
    })
})