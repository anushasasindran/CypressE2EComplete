
describe("Handle Auto complete list", () => {
    before(() => {
        cy.visit("https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html")
    })

it("Should search in searchbox and find the match",() => {
    cy.get('input[name="food-item"]').type('ca')
    cy.get('#myInputautocomplete-list > *').each(($el,index,$list) => {
        const result = $el.text()
        cy.log(result)
        if (result === "Catfish"){
            cy.log("Found the match")
            $el.click()
            cy.get('#submit-button').click();
            cy.url().should('include',result)
        }
        if(index===$list.length-1){
            cy.log('total items', $list.length)
        }
    })
})
})

    //If not giving star it prints the elements in list like cabbagecarrotcatfish
    //When you use * in the selector, cy.get('#myInputautocomplete-list > *'), you are targeting all the immediate child elements of the container.
    // Therefore, when you iterate over them with .each(), you are dealing with each individual list item, which is why you get "cabbage", "carrot", and "catfish" separately.