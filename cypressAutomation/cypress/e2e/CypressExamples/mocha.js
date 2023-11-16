describe('Search functionality', () => {
    beforeEach(() => {
        //Write code to restore the local storage
        cy.log("BeforeEach executed - The local storage data is restored")
    })

    afterEach(() => {
         //Write code to save the local storage
         cy.log("AfterEach executed - The local storage data is saved")
    });

    before(() => {
        //write code to get data from the fixture file
        cy.log("Before Executed - The data is loaded from fixture")
    });
    after(() => {
        //write code to clear the searchbox
        cy.log("After Executed - The search boxes are cleared")
    });

    it("Search for ID",() => {
        //write code to search the ID
        cy.log("Search with ID is finished")
    })

    it("Search for Name",() => {
        //write code to search the Name
        cy.log("Search with Name is finished")
    })
})