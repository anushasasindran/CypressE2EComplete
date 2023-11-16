import notesPage from '../POM/notesPage';
describe('Notes actions', () => {
    let notesPageLocator = new notesPage();
it("should verify the total notes, completed and non completed notes",() => {

    notesPageLocator.verifyNotesCompleteStatus();
    })
it("should verify the complete and non complete notes after unchecking all",() => {
notesPageLocator.uncheckAllNotes();
    notesPageLocator.verifyNotesCompleteStatus()
})
it("should verify the complete and non complete notes after checking a few",() => {
    notesPageLocator.checkfewNotes();
    notesPageLocator.verifyNotesCompleteStatus()
})
it("should verify the complete and non complete notes after checking all",() => {
    notesPageLocator.checkAllNotes();
    notesPageLocator.verifyNotesCompleteStatus()
})
})




