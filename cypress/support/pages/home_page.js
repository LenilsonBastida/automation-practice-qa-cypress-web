/// <reference types="cypress" />

export default {
    acessRegisterPage(){
        // acessa a aplicação
        cy.visit('/')
            .get('.header-logo')

        // entrou no registro
        cy.get('.fa-lock')
            .click()

        // verifica se esta na página de cadastro    
        cy.get('#user')
            .should('be.visible')
        
    }
}