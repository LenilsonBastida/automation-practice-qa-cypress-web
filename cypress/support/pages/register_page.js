/// <reference types="cypress" />

// Elementos
const elements = {
    buttons: {
        register: '#btnRegister'
    },

    fields: {
        name: '#user',
        email: '#email',
        password: '#password'
    },
    
    messages: {
        error: '#errorMessageFirstName',
        successTitle: '#swal2-title',
        successSubtitle: '#swal2-html-container'        
    }
}

// Ações/métodos/funções
export default {
    saveRegister() {
        cy.get(elements.buttons.register)
            .should('be.visible')
            .click()
    },
        
    fillEmail(email) {
        cy.get(elements.fields.email)
            .should('be.visible')
            .type(email)
    }, 
    
    fillName(name) {
        cy.get(elements.fields.name)
            .type(name)
    },
    
    fillPassword(password) {
        cy.get(elements.fields.password)
            .should('be.visible')
            .type(password)
    }, 
    
    checkMessage(message) {
        cy.get(elements.messages.error)
            .should('have.text', message)
    },
    
    checkRegisterSuccess(name) {
        cy.get(elements.messages.successTitle)
            .then((element) => {
            expect(element.text()).eq('Cadastro realizado!')
            expect(element).to.be.visible
            expect(element).not.disabled
        })
    
        cy.get(elements.messages.successSubtitle)
            .should('have.text', `Bem-vindo ${name}`)
    }
    
}