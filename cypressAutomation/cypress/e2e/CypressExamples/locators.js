describe('Locators', () => {
   
    it('should find with different type of locators', () => {
        cy.visit('https://practice.expandtesting.com/notes/app')
        cy.get('[data-testid="open-register-view"]').click()
        
        cy.get('#email').type('sep28@test.com')
        cy.get('[data-testid="register-password"]').type('test123')
        cy.get('[data-testid="register-name"]').type('test')
        cy.get('[data-testid="register-confirm-password"]').type('test123')
        cy.get('[data-testid="register-submit"]').click()
    })
})