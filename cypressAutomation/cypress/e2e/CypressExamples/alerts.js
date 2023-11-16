describe("Handle js alerts", () => {
    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com/Popup-Alerts/index.html")
    })

    it("Confirm js alert contains the correct text", () => {
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    })

    it("Confirm js alert by pressing Ok", () => {
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return true
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    })
    
    it("Confirm js alert by pressing Cancel", () => {
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return false
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    })
    it("Validate js confirm alert box using a stub", () => {
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
            }).then(() => {
            return true;
            }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    })
})