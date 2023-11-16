describe("Interact with dropdown list, radio buttons and checkboxes", () => {
    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    })
    it("Select specific values via select dropdown lists", () => {
        cy.get('#dropdowm-menu-1').select('Python')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')
    });
    it("Select check and uncheck the checkboxes", () => {
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check().should('be.checked')
        cy.get('@option-1').uncheck().should('not.be.checked')
        //multiple check box actions
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"])
        .should('be.checked')
    });
    it("Select check specific radiobuttons", () => {
        //to select the first one
        cy.get('#radio-buttons').find("[type='radio']").first().click()
        //to select with index
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
        //to select with value
        cy.get('input[value = "orange"]').check()
        //to check disabled
        cy.get("[value='cabbage']").should('be.disabled')
        //to check enabled
        cy.get("[value='lettuce']").should('be.enabled')
    });

})






