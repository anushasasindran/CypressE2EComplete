describe('Edit notes API', () => {
    let headers, token;
before(() => {
    cy.fixture('outputs/authResponse').then((authData) =>{
        token = authData.token;
        headers = {
        'Content-Type':'application/json',
        'x-auth-token':token
        }
    })
})
it('Should edit notes',() => {
     cy.fixture('outputs/notesResponse').then((responseData) =>{
    const modifiedData = {
       id : responseData.noteId,
       title : responseData.title + 'Edited',
       category : 'Personal',
       completed : false,
       description : responseData.description + 'Edited'
    }

    cy.apiRequest('PUT',`notes/api/notes/${responseData.noteId}`, modifiedData, headers)
       .then((response) => {
        const responseBody = response.body;
        expect(response.status).to.equal(200)
        expect(responseBody.success).to.equal(true)
        expect(responseBody.message).to.equal('Note successfully Updated')

    })
})
})
})
