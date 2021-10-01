/// <reference types="cypress" />

context('Add Book tests', () => {
  beforeEach(() => {
    cy.visit('localhost:1234/add');
  });

  it('Add Book with passing Title and Author', () => {
    cy.get('#title').type('test').should('have.value', 'test');
    cy.get('#author').type('testman').should('have.value', 'testman');
    cy.get('[type=submit]').click();
    cy.get('.main a')
      .last()
      .find('.book__details')
      .first()
      .should('have.text', 'test');
    cy.get('.main a')
      .last()
      .find('.book__details')
      .last()
      .should('have.text', 'testman');
  });
  it('Add Book with incorrect Title and Author', () => {
    cy.get('[type=submit]').click();
    cy.on('window:alert', (text) => {
      expect(text).contains('Invalid submission: ');
    });
  });
  it('Add Book with passing Date', () => {
    cy.get('#title').type('test').should('have.value', 'test');
    cy.get('#author').type('testman').should('have.value', 'testman');
    cy.get('#published').type('12/30/2019').should('have.value', '12/30/2019');
    cy.get('[type=submit]').click();
    cy.get('.main a')
      .last()
      .find('.book__details')
      .first()
      .should('have.text', 'test');
    cy.get('.main a')
      .last()
      .find('.book__details')
      .last()
      .should('have.text', 'testman');
  });

  it('Add Book with not passing Date', () => {
    cy.get('#title').type('test').should('have.value', 'test');
    cy.get('#author').type('testman').should('have.value', 'testman');
    cy.get('#published').type('12302019').should('have.value', '12302019');
    cy.get('[type=submit]').click();
    cy.on('window:alert', (text) => {
      expect(text).contains('Invalid Date:');
    });
  });
  it('Add Book with full submission ', () => {
    cy.get('#title').type('test').should('have.value', 'test');
    cy.get('#author').type('testman').should('have.value', 'testman');
    cy.get('#published').type('12/30/2019').should('have.value', '12/30/2019');
    cy.get('#summary')
      .type("The world of the amazing cthulhu sleeps in his kingdom of r'leh")
      .should(
        'have.value',
        "The world of the amazing cthulhu sleeps in his kingdom of r'leh"
      );
    cy.get('#pages').type(32).should('have.value', 32);
    cy.get('.star-container').first().next().next().click();
    cy.get('[type=submit]').click();
    cy.get('.main a')
      .last()
      .find('.book__details')
      .first()
      .should('have.text', 'test');
    cy.get('.main a')
      .last()
      .find('.book__details')
      .last()
      .should('have.text', 'testman');
  });
  it('Pressing the cancel button', () => {
    cy.get('[type=button]').last().click();
    cy.get('.title').should(
      'have.text',
      "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn"
    );
  });
});
