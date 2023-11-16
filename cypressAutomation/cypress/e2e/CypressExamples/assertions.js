describe('Assertions', () => {
    
it('Login to application',() => {
       cy.visit('https://practice.expandtesting.com/notes/app/login')
       cy.get('input[data-testid = "login-email"]')
       .type('sasindran.anusha@gmail.com')
       .get('input[data-testid = "login-password"]')
       .type('test123')
       .get('button[data-testid = "login-submit"]')
       .contains('Login')
       .click()
    })

it('should capture the text my notes',() =>{
    //using should
     cy.get('[data-testid="home"]').should('contain.text','MyNotes')
   
   //using expect
   cy.get('[data-testid="home"]').then(($el) => {
       expect($el.text()).to.contain('MyNotes');
   });
   // using assert
   cy.get('[data-testid="home"]').then(($el) => {
       assert.include($el.text(), 'MyNotes');
   });
})
})