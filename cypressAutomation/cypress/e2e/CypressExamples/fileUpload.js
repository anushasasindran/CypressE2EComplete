describe('Test File Upload via webdriveruni', () => {
    it('Upload a file....', () => {
        cy.visit("https://www.webdriveruniversity.com/File-Upload/index.html");


        cy.get("#myFile").selectFile("cypress/fixtures/National-symbols-of-India.png");
        cy.get("#submit-button").click();
    });

    it.skip('Upload No file...', () => {
        cy.visit("https://www.webdriveruniversity.com/File-Upload/index.html");
     
        cy.get("#submit-button").click();
    });
});
