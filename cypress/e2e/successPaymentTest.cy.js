/// <reference types="cypress" />

describe('Check that user redirects to success page', () => {
    beforeEach(() => {
      cy.visit('https://payment-form-test-0101.azurewebsites.net/')
    })
  
    it('displays two todo items by default', () => {
      cy.get('.button').contains('Buy Now');
      cy.get('.button').click(); 
      cy.get('.card h1').should('have.text', 'Success')
    })})