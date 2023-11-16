const { generateUniqueEmail } = require("../../support/utils")
import loginPage from '../POM/loginPage';
describe('Register a new user', () => {
let loginPageLocator = new loginPage();
before(() => {
cy.fixture('UI/urls.json').then((envData) => {
const QAEnv = envData.QA;
cy.visit(QAEnv)
})
})

it('Should register a new user', () => {
cy.intercept('POST', '/notes/api/users/register').as('register')
cy.fixture('UI/registerData').then((registerData) => {
const uniqueEmail = generateUniqueEmail();
cy.log(uniqueEmail)
const password = registerData.password;
const name = registerData.name
cy.updateEmailInFixture(uniqueEmail);
cy.register(uniqueEmail,password,name,password)
cy.wait('@register').then((interception) => {
    const response = interception.response.body;
    expect(interception.response.statusCode).to.equal(201);
    expect(response.success).to.equal(true)
    expect(response.message).to.equal("User account created successfully")
    expect(response.status).to.equal(201)
    expect(response.data).to.have.property("id")
    const userId = response.data.id
    Cypress.env('USERID',userId)
})

loginPageLocator.checkMessageAndURL();
loginPageLocator.clickToLogin();
})
})

it('Should login with registered user', () => {
    cy.intercept('POST', '/notes/api/users/login').as('login')  
    cy.intercept('GET', '/notes/api/notes').as('notes')  
    cy.readFile('cypress/fixtures/UI/registerData.json').then((registerData) => {
    const email = registerData.email
    const password = registerData.password
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
            expect(response.message).to.equal("No notes found")
            expect(response.status).to.equal(200)
          
        }
    })
})
})
})
//cy.get('div.b').contains('User account created successfully');
//URL changed to https://practice.expandtesting.com/notes/app/register
//a[data-testid = "login-view"].click();
//URL change to https://practice.expandtesting.com/notes/app/login
//input[data-testid = "login-email"].type(email)
//input[data-testid = "login-password"].type(email)
//button[data-testid = "login-submit"].click();
//cy.intercept('POST', '/api/users/login').as('login')
/*

cy.wait('@login').then((interception) => {
    const response = interception.response.body;
    expect(interception.response.statusCode).to.equal(200);
    expect(response.success).to.equal(true)
    expect(response.message).to.equal("Login successful")
    expect(response.status).to.equal(200)
    expect(response.status.data.id).
    verify the userId in register is same as here
    expect(response.status.data).to.have.property('token')
    get the token and save as environment variable
   cy.intercept('POST', '/api/notes').as('notes')
   cy.wait('@notes').then((interception) => {
    if(interception.response.statusCode === 304){

    }
    if(interception.response.statusCode === 200){
        
    }
cy.intercept('POST', '/api/notes/').as('addNote')
cy.wait('@addNote').then((interception) => {
    status code 200
    {
    "success": true,
    "status": 200,
    "message": "Note successfully created",
    "data": {
        "id": "64e5adefd1562c00f7253977",
        "title": "add123",
        "description": "add3333",
        "category": "Personal",
        "completed": true,
        "created_at": "2023-08-23T06:57:51.621Z",
        "updated_at": "2023-08-23T06:57:51.621Z",
        "user_id": "64e5abaad1562c00f725396d"
    }
}

*/
