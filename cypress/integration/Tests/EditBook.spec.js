/// <reference types="cypress" />

context('Edit Book Tests', () => {
  beforeEach(() => {
    cy.visit('localhost:1234/bookshelf');
  });

  it('Adding all passing inputs to the last book', () => {
    cy.get('.main a').last().click();
    cy.get('[type=button]').contains('Edit').click();
    cy.get('.title').should('have.text', 'Edit Book');
    cy.get('#summary')
      .clear()
      .type('Cthulhu is amazing')
      .should('have.text', 'Cthulhu is amazing');
    cy.get('#published')
      .clear()
      .type('12/13/1932')
      .should('have.value', '12/13/1932');
    cy.get('#pages').clear().type(52).should('have.value', 52);
    cy.get('.star').eq(2).click();
  });
});
