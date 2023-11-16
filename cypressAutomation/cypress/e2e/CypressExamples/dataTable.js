describe("Handle Auto complete list", () => {
    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com/Data-Table/index.html")
    })

it("Should find the age based on first name and lastname",() => {
    const firstName = 'Michael';
    const lastName = 'Doe';
    const expectedAge = '20';
    // Get all the rows of the table
    cy.get('#t01 tr').as('rows')
    // Iterate over each row and validate the data
    cy.get('@rows').each(($row,index) => {
        // Skip the header row
        if(index === 0) return
        // Get all cells of the row
        const cells =$row.find('td')
        // Check if the first and second cells match the first name and last name
        if(cells.eq(0).text() === firstName && cells.eq(1).text() === lastName)
        // Validate the content of the third cell (Age)
        cy.wrap(cells).eq(2).should('have.text',expectedAge)
    })
})
it("Should find the total age ",() => {
    let totalAge = 0;
    // Get all the rows of the table
    cy.get('#t01 tr').as('rows')
    // Iterate over each row and validate the data
    cy.get('@rows').each(($row,index) => {
        // Skip the header row
        if(index === 0) return
        // Get all cells of the row
        const age = Number($row.find('td').eq(2).text());
        totalAge += age;
    }).then(() => {
        cy.log('Total age of all people',totalAge)
    })

    })
})
