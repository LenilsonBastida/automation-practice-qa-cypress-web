/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

const user_data = require('../fixtures/desafio_valid_data.json')

describe('Cadastro de usuário', () => {

    beforeEach('Acessando página de cadastro', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock')
            .click()

        cy.get('#user')
            .should('be.visible')
    })

    it('Validar campo nome vazio', () => {
        cy.get('#btnRegister')
            .should('be.visible')
            .click()

        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo nome deve ser prenchido')

    })

    it('Validar campo e-mail vazio', () => {
        cy.get('#user')
            .type(user_data.name)

        cy.get('#btnRegister')
            .should('be.visible')
            .click()

        cy.get('#errorMessageFirstName')
            .then((element) => {
                expect(element.text()).eq('O campo e-mail deve ser prenchido corretamente')
                expect(element).to.be.visible
                expect(element).not.disabled
        })

    })

    it('Validar campo e-mail inválido', () => {
        cy.get('#user')
            .type(user_data.name)
        
        cy.get('#email')
            .type('emailinvalido')

        cy.get('#btnRegister')
            .should('be.visible')
            .click()

        cy.get('#errorMessageFirstName')
            .then((element) => {
                expect(element.text()).eq('O campo e-mail deve ser prenchido corretamente')
                expect(element).to.be.visible
                expect(element).not.disabled
        })
    })
    
    it('Validar campo senha inválido', () => {
         cy.get('#user')
            .type(user_data.name)
        
        cy.get('#email')
            .type(user_data.email)

        cy.get('#password')
            .type('12345')

        cy.get('#btnRegister')
            .should('be.visible')
            .click()

        cy.get('#errorMessageFirstName')
            .then((element) => {
                expect(element.text()).eq('O campo senha deve ter pelo menos 6 dígitos')
                expect(element).to.be.visible
                expect(element).not.disabled
        })
    })

    it('Cadastro realizado com sucesso', () => {

        const name = faker.person.fullName()
        const email = faker.internet.email()

        cy.get('#user')
            .type(name)
        
        cy.get('#email')
            .type(email)

        cy.get('#password')
            .type(user_data.password)

        cy.get('#btnRegister')
            .should('be.visible')
            .click()

        cy.get('#swal2-title')
            .then((element) => {
                expect(element.text()).eq('Cadastro realizado!')
                expect(element).to.be.visible
                expect(element).not.disabled
        })
        
        cy.get('#swal2-html-container')
            .should('have.text', `Bem-vindo ${name}`)
        
    })

})

    
