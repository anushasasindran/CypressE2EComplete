import notesPage from '../POM/notesPage';
describe('Edit a note', () => {
let notesPageLocator = new notesPage();
it("should edit the notes", () => {
    cy.fixture('UI/noteID').then((noteData) => {
        for(let i=0; i<3; i++) {
            let cardTitle, cardDescription;
            
            notesPageLocator.getCardTitleByIndex(i).then(title => {
                cardTitle = title;
                return notesPageLocator.getCardDescriptionByIndex(i);
            }).then(description => {
                cardDescription = description;
                
                const note = noteData.find(n => n.title === cardTitle);

                if(!note){
                    cy.log(`Warning : Title ${cardTitle} not found in noteData`);
                    return;
                }
                cy.intercept('PUT', `/notes/api/notes/${note.noteId}`).as('editNote');

                notesPageLocator.clickEditOnNoteByIndex(i)
                                .setNoteTitle(cardTitle + 'Edited')
                                .setNoteDescription(cardDescription + 'Edited')
                                .submitNote();

                cy.wait('@editNote').then((interception) => {
                    const response = interception.response.body;
                    expect(interception.response.statusCode).to.equal(200);
                    expect(response.success).to.equal(true)
                    expect(response.message).to.equal("Note successfully Updated")
                    expect(response.status).to.equal(200)
                    expect(response.data.id).to.equal(note.noteId)
                    expect(response.data.title).to.equal(cardTitle + 'Edited')
                    expect(response.data.description).to.equal(cardDescription + 'Edited')
                    note.title += 'Edited';
                    note.description += 'Edited';
                    cy.writeFile('cypress/fixtures/UI/noteID.json', noteData);
                });
            });
        }
        cy.wait(3000);
    });
});
})