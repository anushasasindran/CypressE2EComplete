import notesPage from '../POM/notesPage';
describe('Add a note', () => {
let notesPageLocator = new notesPage();
const categories = ['Home','Work','Personal']

before(() => {
    cy.writeFile('cypress/fixtures/UI/noteID.json','[]');
    });

it("should add a note",() => {
cy.intercept('POST', '/notes/api/notes/').as('addNote')  
categories.forEach(category => {
const title = `${category} title`
cy.log(title)

const description = `${category} description`
cy.log(description)
notesPageLocator.clickAddNote();
notesPageLocator.addNoteWithDetails(category,title,description)
cy.wait('@addNote').then((interception) => {
    const response = interception.response.body;
    expect(interception.response.statusCode).to.equal(200);
    expect(response.success).to.equal(true)
    expect(response.message).to.equal("Note successfully created")
    expect(response.status).to.equal(200)
    expect(response.data).to.have.property('id')
    const noteId = response.data.id
    expect(response.data.title).to.equal(title);
    expect(response.data.category).to.equal(category);
    expect(response.data.description).to.equal(description);
    //expect(response.data.user_id).to.equal(Cypress.env('USERID'))
    cy.appendToJSONFile('cypress/fixtures/UI/noteID.json',{
       category:category,
       title : title,
       description:description,
       noteId:noteId
    })
})

})

})
it("should view the notes",() => {
   cy.fixture('UI/noteID').then((noteData) => {
        const viewAndVerifyNote = (index) => {
            notesPageLocator.getNoteCard(index).then(($note) => {
        const cardTitle = $note.find(notesPageLocator.cardTitle).text();
        cy.log(cardTitle);
        const note = noteData.find(n => n.title === cardTitle)
        cy.intercept('GET', `/notes/api/notes/${note.noteId}`).as('getNote') 
        cy.wrap($note).find(notesPageLocator.viewNotes).click();
        if(note){
            notesPageLocator.clickNoteView($note);
            cy.wait(2000);
            notesPageLocator.checkURLForNoteId(note.noteId); 
       cy.wait('@getNote').then((interception) => {
        const response = interception.response.body;
        expect(interception.response.statusCode).to.equal(200);
        expect(response.success).to.equal(true)
        expect(response.message).to.equal("Note successfully retrieved")
        expect(response.status).to.equal(200)
        expect(response.data.id).to.equal(note.noteId)
            })
            notesPageLocator.verifyNoteTitle(note.title);
            notesPageLocator.verifyNoteDescription(note.description);
        cy.wait(2000)
        }
        else{
            cy.log(`Warning : Title ${cardTitle} not found in noteData`)
        }
        notesPageLocator.clickHome();
        cy.wait(3000)
        })
        }
        for(let i=0;i<3;i++){
            viewAndVerifyNote(i)
        }
        })
        })
})


