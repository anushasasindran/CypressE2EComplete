describe("Handling iframe", () => {
    before(() => {
        cy.visit("https://www.webdriveruniversity.com/IFrame/index.html")
    })

    it("Should click on iframe", () => {
        //Get the iFrame Element
        cy.get('#frame').then($iframe => {
            // Grab the iFrame's document object
            const doc = $iframe.contents()
            //use cy.wrap() to wrap the iFrame's document and use it with Cypress commands
            cy.wrap(doc).as('iframe')
        })
        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')
        cy.get('@modal').should(($expectedText) => {
            const text = $expectedText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods');
        })
        cy.get('@modal').contains('Close').click()
    });
})
