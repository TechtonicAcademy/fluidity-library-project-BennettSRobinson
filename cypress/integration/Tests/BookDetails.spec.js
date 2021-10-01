/// <reference types="cypress" />

context('Book Details Tests', () => {
  beforeEach(() => {
    cy.visit('localhost:1234/bookshelf');
  });
  it('Verify Book details title, author, and date', () => {
    cy.get('.main a')
      .last()
      .find('.book__details')
      .first()
      .then(() => {
        cy.get('.main a').last().click();
        cy.get('.bookPg__details--desktop').should('have.text', 'test');
      });

    cy.get('.bookPg__details--author').should('have.text', 'testman');
  });
  it('Cancel Button', () => {
    cy.get('.main a').last().click();
    cy.get('[type=button]').last().click();
    cy.get('.title').should(
      'have.text',
      "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn"
    );
  });
  it('Edit this Book Button', () => {
    cy.get('.main a').last().click();
    cy.get('[type=button]').contains('Edit').click();
    cy.get('.title').should('have.text', 'Edit Book');
  });
  it('Testing Deleting a Book', () => {
    cy.get('.main a')
      .its('length')
      .then((initialLength) => {
        cy.get('.main a').last().click();
        cy.get('[type=button]').contains('Delete').click();
        cy.get('.title').should(
          'have.text',
          "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn"
        );
        cy.get('.main a').should('have.length', initialLength - 1);
      });
  });
});
