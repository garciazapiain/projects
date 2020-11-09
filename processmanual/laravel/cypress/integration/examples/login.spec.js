/// <reference types="cypress" />

context('visit page', () => {
    beforeEach(() => {
      cy.visit('http://www.processmanual.test:8080/#/')
    })
    it('login', () => {
        cy.get('#email').click();
        cy.get('#email').type('juan@gmail.com');
        cy.get('#password').click();
        cy.get('#password').type('12345678');
        cy.get('input:nth-child(7)').click();
        cy.get('form').submit();
    })
})