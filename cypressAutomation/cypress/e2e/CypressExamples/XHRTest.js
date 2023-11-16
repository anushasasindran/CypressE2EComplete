describe('XHR Testing with Cypress', () => {
    let data ={
        email:"sasindran.anusha@gmail.com",
        password:"test123"
    }
    it('should login and  check the network request', () => {
    cy.intercept('POST', '/notes/api/users/login').as('login')  
    cy.intercept('GET', '/notes/api/notes').as('notes')  
    cy.visit('https://practice.expandtesting.com/notes/app/login')
    cy.get('input[data-testid = "login-email"]').type(data.email)
    cy.get('input[data-testid = "login-password"]').type(data.password)
    cy.get('button[data-testid = "login-submit"]').click()
    cy.wait('@login').then((interception) => {
        const response = interception.response.body;
        expect(interception.response.statusCode).to.equal(200);
        expect(response.success).to.equal(true)
        expect(response.message).to.equal("Login successful")
        expect(response.status).to.equal(200)
        expect(response.data).to.have.property('token')
    })
    cy.wait('@notes').then((interception) => {
        const response = interception.response.body;
        expect(interception.response.statusCode).to.equal(200);
        expect(response.success).to.equal(true)
    })
    });
});
