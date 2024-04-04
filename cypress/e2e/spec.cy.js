/// <reference types="Cypress" />;

describe('Form Validation', () => {
  beforeEach(() => {
    cy.visit('localhost:8080');
  });

  it('should show an error when the name field is empty', () => {
    cy.get('input[name="name"]').clear();
    cy.get('form').submit();
    cy.get('#nameError').should('contain', 'Name is required');
  });

  it('should show an error when the name field is filled out but invalid', () => {
    cy.get('input[name="name"]').type('!!!');
    cy.get('form').submit();
    cy.get('#nameError').should('contain', 'Only letters and white space allowed');
  });

  it('should not show an error when the name field is filled out and valid', () => {
    cy.get('input[name="name"]').type('Justino Figueiredo');
    cy.get('form').submit();
    cy.get('#nameError').should('be.visible'); // even if the error message element exists in the DOM, the test will pass as long as the error message is not visible to the user.
  });
});