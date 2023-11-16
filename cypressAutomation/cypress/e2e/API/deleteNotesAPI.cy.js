describe('Delete notes API', () => {
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

    it('Should Delete notes if exists, else throw 404 error' ,() => {
         cy.fixture('outputs/notesResponse').then((responseData) =>{  
            const attempts =2;
            for(let i=0;i<attempts;i++){
            cy.wrap(i).then(()=> {
            
        cy.apiRequest('DELETE',`notes/api/notes/${responseData.noteId}`, null, headers)
           .then((response) => {
            const responseBody = response.body;
            const statusCode = response.status
            if(statusCode === 200){
            expect(response.status).to.equal(200)
            expect(responseBody.success).to.equal(true)
            expect(responseBody.message).to.equal('Note successfully deleted')
            }
            else if(statusCode === 404){
                expect(response.status).to.equal(404)
                expect(responseBody.success).to.equal(false)
                expect(responseBody.message).to.equal('No note was found with the provided ID, Maybe it was deleted')
            }
        }) 
            })
        }
        })
    })

    it('Should throw 400 error for invalid note Id',() => {
      const noteId = "64e47116d1562c00f"
        cy.apiRequest('DELETE',`notes/api/notes/${noteId}`, null, headers)
        .then((response) => {
         const responseBody = response.body;
         const statusCode = response.status
         expect(response.status).to.equal(400)
         expect(responseBody.success).to.equal(false)
         expect(responseBody.message).to.equal('Note ID must be a valid ID')
         
    })
    })
   
})
 