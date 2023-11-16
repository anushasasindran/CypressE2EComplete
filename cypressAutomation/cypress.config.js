const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  pageLoadTimeout:120000,
  fixturesFolder: 'cypress/fixtures',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  projectId: "gdn6tr",
  e2e: {
    setupNodeEvents(on, config) {
    
      // implement node event listeners here
    },
    testIsolation: false,
    specPattern: [
      'cypress/e2e/order.api.cy.js',
      'cypress/e2e/order.ui.cy.js',
      'cypress/e2e/order.cypress.cy.js'
    ],
    baseUrl:
    'https://practice.expandtesting.com/'
  },
});
