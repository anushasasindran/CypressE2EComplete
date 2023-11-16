import notesPage from '../POM/notesPage';
describe('Delete a note', () => {
let notesPageLocator = new notesPage();
let initialNoteCount;
describe('Delete a note', () => {
    let notesPageLocator = new notesPage();
    let initialNoteCount;

it("should delete the notes",() => {
  
    notesPageLocator.getNoteCount().then((noteCount) => {
                initialNoteCount = noteCount
                cy.log(initialNoteCount)
        })
    cy.readFile('cypress/fixtures/UI/noteID.json').then((noteData) => {
        noteData.slice(0, 3).forEach(note => {
            if (note.title) {
                cy.intercept('DELETE', `/notes/api/notes/${note.noteId}`).as('deleteNote');

                notesPageLocator
                    .findNoteCardByTitle(note.title)
                    .then(($noteCard) => {
                        notesPageLocator
                            .clickDeleteOnNoteCard($noteCard)
                            .confirmDelete();

                        cy.wait('@deleteNote').then((interception) => {
                            const response = interception.response.body;
                            expect(interception.response.statusCode).to.equal(200);
                            expect(response.success).to.equal(true);
                            expect(response.message).to.equal("Note successfully deleted");
                            expect(response.status).to.equal(200);
                        });
                    });
            } else {
                cy.log(`Warning : Title ${note.title} not found in noteData`);
            }
        });

        notesPageLocator.verifyRemainingNoteCount(initialNoteCount - 3);
    });
});
});
})

