describe('Custom commands functionality', () => {
    let body ={
        email:"sasindran.anusha@gmail.com",
        password:"test123"
    }
    it('Should authenticate the API(not using custom command)',() => {
        cy.request({
            method: 'POST',
            url: '/notes/api/users/login', 
            body :body
          }).then((response) => {
            expect(response.status).to.equal(200)
		})
    })
    it('Should authenticate the API(using custom command)',() => {
        cy.apiRequest('POST','/notes/api/users/login',body,null)
        .then((response) => {
            expect(response.status).to.equal(200)  
        })
    })

    it('Should login with out custom command',() => {
       cy.visit('https://practice.expandtesting.com/notes/app/login')
       cy.get('input[data-testid = "login-email"]').type(body.email)
       cy.get('input[data-testid = "login-password"]').type(body.password)
       cy.get('button[data-testid = "login-submit"]').click()
    })
    it('Should login with custom command',() => {
        cy.visit('https://practice.expandtesting.com/notes/app/login')
        const email = body.email
        const password = body.password
        cy.login(email,password)
     })
})