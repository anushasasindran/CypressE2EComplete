import loginPage from '../POM/loginPage';
describe('Register a new user', () => {
let loginPageLocator = new loginPage();
before(() => {
cy.fixture('UI/urls.json').then((envData) => {
const QAEnv = envData.QA;
cy.visit(QAEnv)
})
})

it('Should login with registered user', () => {
    cy.intercept('POST', '/notes/api/users/login').as('login')  
    cy.intercept('GET', '/notes/api/notes').as('notes')  
    cy.readFile('cypress/fixtures/UI/registerData.json').then((registerData) => {
    const email = registerData.email
    const password = registerData.password
    cy.get('.btn-primary').click({multiple: true })
    cy.login(email,password)
    cy.wait('@login').then((interception) => {
        const response = interception.response.body;
        expect(interception.response.statusCode).to.equal(200);
        expect(response.success).to.equal(true)
        expect(response.message).to.equal("Login successful")
        expect(response.status).to.equal(200)
        expect(response.data).to.have.property('token')
        const token = response.data.token
        Cypress.env('TOKEN',token)
    })
    cy.wait('@notes').then((interception) => {
        if(interception.response.statusCode === 304){
        cy.log("No notes are added yet")
        const response = interception.response.body;
        expect(interception.response.statusCode).to.equal(304);
        expect(response.success).to.equal(true)
        expect(response.message).to.equal("No notes found")
        expect(response.status).to.equal(200)
    
        }
        if(interception.response.statusCode === 200){
        
            const response = interception.response.body;
            expect(interception.response.statusCode).to.equal(200);
            expect(response.success).to.equal(true)
            //expect(response.message).to.equal("No notes found")
            expect(response.status).to.equal(200)
          
        }
    })
})
})
})