// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Select radio option by text based of the parent element provided.
Cypress.Commands.add(
  "selectRadioOptionByText",
  { prevSubject: 'element' },
  (element, text) => {
    cy.get(element).find(".wp-c-form-radio label").each(($item) => {
      if ($item.text() == text) {
        cy.wrap($item).should("have.text", text).click();
    }
  }
)})
