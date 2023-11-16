describe('Get notes API', () => {
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
it('Should get notes',() => {
    cy.fixture('outputs/notesResponse.json').then((notesData) =>{
    const noteId = notesData.noteId;
    cy.apiRequest('GET',`notes/api/notes/${noteId}`, null, headers)
       .then((response) => {
        const responseBody = response.body;
        expect(response.status).to.equal(200)
        expect(responseBody.success).to.equal(true)
        expect(responseBody.message).to.equal('Note successfully retrieved')
    })
})
})
})
