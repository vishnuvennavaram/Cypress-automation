/// <reference types="cypress" />

describe('Credit card application', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://bank.westpac.co.nz/wone/app.html#select-credit-card-public')
    })
  
    it('select Credit card', () => {
      // We use the `cy.get()` command to get all elements that match the selector.
      cy.get('#eligibilityCheck + label').click()
  
      // Then, we use `should` to assert that there are two matched items,
      // We can go even further and check that the default todos each contain
      // the correct text. We use the `first` and `last` functions
      // to get just the first and last matched elements individually,
      // and then perform an assertion with `should`.
      cy.get('#purposeOfUseContainer').find('.wp-c-form-radio').should('have.length', 4) // To check if 4 options are displayed

      // Below is an example of simplying using not just a custom command but also a child custom command for which parent element is an attribute.
      //cy.get('#purposeOfUseContainer').find('.wp-c-form-radio label').last().should('have.text', 'Unexpected situations or emergency funds').click()
      cy.get('#purposeOfUseContainer').selectRadioOptionByText('Unexpected situations or emergency funds')

      cy.get('#ccBtnContinue').should('be.disabled')
      cy.get('.vedaIdentificationCheck .wp-c-form-checkbox__control').click()
      cy.get('#ccBtnContinue').should('not.be.disabled').click()
    })
})