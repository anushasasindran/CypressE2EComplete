const { generateUniqueEmail } = require("../../support/utils")

describe('Register API', () => {
let email;

  it('Should register a new user if valid, else throw error', () => {
    cy.fixture('inputs/register').then((testData) => {
      testData.forEach((userData) => {
        if (userData.email.includes('{{uniqueEmail}}'))
        {
  
          email = generateUniqueEmail();
          userData.email = email
        }
        
       if (userData.email.includes('{{conflictEmail}}'))
        {
          userData.email = email;
        }
   
    cy.apiRequest('POST','notes/api/users/register', userData, null)
    .then((response) => {
    const responseBody = response.body;
    const statusCode  = response.status;
    if(response.status === 201){
    expect(statusCode).to.equal(201)
    expect(responseBody.success).to.equal(true)
    expect(responseBody.message).to.equal('User account created successfully')
    expect(responseBody.data).to.have.property("id")
    expect(responseBody.data.name).to.equal(userData.name)
    expect(responseBody.data.email).to.equal(email)
    cy.writeFile('cypress/fixtures/outputs/registerResponse.json', 
    {
    id:responseBody.data.id,
    email:responseBody.data.email,
    name : userData.name,
    password :userData.password
    })
    }
    else if(response.status === 409)
    {
      expect(statusCode).to.equal(409);
      expect(responseBody.success).to.equal(false)
      expect(responseBody.message).to.equal('An account already exists with the same email address')
    }
    else if(response.status === 400)
    {
      expect(responseBody.success).to.equal(false)
      expect(statusCode).to.equal(400);
    }
    else {
      cy.log(`Failed with status code - ${statusCode}`)
    }
  })

})
  })

})
  })
