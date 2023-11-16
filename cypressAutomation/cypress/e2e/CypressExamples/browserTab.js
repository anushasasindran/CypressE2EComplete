describe("Handling multiple browser tabs and Navigations", () => {
    before(() => {
        cy.visit("https://www.webdriveruniversity.com")
    })

    it("Should click to open in new tab and check browser navigation", () => {
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'contactus')
        //browser navigations
        cy.reload()  //Reload the current page
        cy.url().should('include', 'contactus')
        cy.go('back') //goes back to previous page
        cy.url().should('include', 'https://www.webdriveruniversity.com/')
        cy.go('forward')// goes forward one page
        cy.url().should('include', 'contactus')
    })
})