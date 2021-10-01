/// <reference types="cypress" />

context('Edit Book Tests', () => {
  beforeEach(() => {
    cy.visit('localhost:1234/bookshelf');
  });

  it('Adding all passing inputs to the last book', () => {
    cy.toEdit();
    cy.get('#title')
      .clear()
      .type('Best Title')
      .should('have.value', 'Best Title');
    cy.get('#author')
      .clear()
      .type('Best Author')
      .should('have.value', 'Best Author');
    cy.get('#summary')
      .clear()
      .type('Cthulhu is amazing')
      .should('have.value', 'Cthulhu is amazing');
    cy.get('#published')
      .clear()
      .type('12/13/1932')
      .should('have.value', '12/13/1932');
    cy.get('#pages').clear().type(52).should('have.value', 52);
    cy.get('.star').eq(2).click();
    cy.get('[type=submit]').contains('Submit').click();
    cy.get('.title').should(
      'have.text',
      "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn"
    );
  });
  it('Edit Book Invalid Title', () => {
    cy.toEdit();
    cy.get('[name=title]').clear();
    cy.get('[type=submit]').contains('Submit').click();
    cy.on('window:alert', (text) => {
      expect(text).contains('Invalid submission: ');
    });
  });
  it('Edit Book Invalid Date', () => {
    cy.toEdit();
    cy.get('[name=published]')
      .clear()
      .type('12345678')
      .should('have.value', '12345678');
    cy.get('[type=submit]').contains('Submit').click();
    cy.on('window:alert', (text) => {
      expect(text).contains('Invalid Date: ');
    });
  });
  it('Test Cancel Button', () => {
    cy.toEdit();
    cy.get('[type=button]').last().click();
    cy.get('.bookPg__details--title').last().should('have.text', 'Best Title');
  });
});
