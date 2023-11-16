describe('Login API', () => {

    it('Should generate token for registered user', () => {
     cy.fixture('outputs/registerResponse').then((authData) => {
        const modifiedAuthData = {
            email : authData.email,
            password :authData.password
        }
        cy.apiRequest('POST','notes/api/users/login', modifiedAuthData, null)
            .then((response) => {
               const responseBody = response.body;
               expect(response.status).to.equal(200)
               expect(responseBody.data).to.have.property("token")
              
                const expectedData = {
                    success: true,
                    message: 'Login successful',
                    'data.id': authData.id,
                    'data.name': authData.name,
                    'data.email': authData.email,
                };
                Object.entries(expectedData).forEach(([key, value]) => {
                    expect(responseBody).to.have.nested.property(key, value);
                });
               //expect(responseBody.success).to.equal(true)
               //expect(responseBody.message).to.equal('Login successful')
               //expect(responseBody.data.id).to.equal(authData.id)
               //expect(responseBody.data.name).to.equal(authData.name)
               //expect(responseBody.data.email).to.equal(authData.email)
               cy.writeFile('cypress/fixtures/outputs/authResponse.json', 
                {
                id:responseBody.data.id,
                email:responseBody.data.email,
                name : responseBody.data.name,
                token:responseBody.data.token
                }).then(() => {
                Cypress.log({
                    name : 'Positive Test',
                    displayName : 'Authentication of registered user',
                    message : 'Authentication was successful',
              })
            })
     })
    })
 })
})