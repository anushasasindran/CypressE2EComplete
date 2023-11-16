describe('Add notes API', () => {
    let headers, token,userId;
before(() => {
    cy.fixture('outputs/authResponse').then((authData) =>{
        token = authData.token;
        userId = authData.id;
        headers = {
        'Content-Type':'application/json',
        'x-auth-token':token
        }
    })
})
it('Should add notes',() => {
    cy.fixture('inputs/notes.json').then((notesData) =>{
     notesData.id = userId;
      cy.apiRequest('POST','notes/api/notes', notesData, headers)
       .then((response) => {
        const responseBody = response.body;
        expect(response.status).to.equal(200)
        expect(responseBody.success).to.equal(true)
        expect(responseBody.message).to.equal('Note successfully created')
        expect(responseBody.data).to.have.property("id")
        cy.writeFile('cypress/fixtures/outputs/notesResponse.json', 
        {
        noteId:responseBody.data.id,
        title:responseBody.data.title,
        description : responseBody.data.description,
        userId:responseBody.data.user_id,
        category:responseBody.data.category
        })
        Cypress.log({ //cypress method that is synchronous and run immediately
            name : 'Positive Test',
            displayName : 'Notes creation',
            message : 'Notes creation was successful',
      })
})
})
})
})