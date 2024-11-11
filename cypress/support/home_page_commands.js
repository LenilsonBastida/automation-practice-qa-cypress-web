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

/// <reference types="cypress" />

// Elementos
const elements = {
    buttons: {
        register: '.fa-lock'
    },
    fields: {
        name: '#user',
    }
}

// Ações/métodos/funções
Cypress.Commands.add('acessRegisterPage', () => {
    cy.visit('/')
        .get('.header-logo')

    cy.get(elements.buttons.register)
        .click()

    cy.get(elements.fields.name)
        .should('be.visible')

})