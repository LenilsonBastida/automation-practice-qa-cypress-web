/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

const user_data = require('../fixtures/desafio_valid_data.json')

describe('Cadastro de usuário', () => {

    beforeEach('Acessando página de cadastro', () => {
        cy.acessRegisterPage()
    })

    it('Validar campo nome vazio', () => {
        cy.saveRegister()
        cy.checkMessage('O campo nome deve ser prenchido')
    })

    it('Validar campo e-mail vazio', () => {
        cy.fillName(user_data.name)
        cy.saveRegister()
        cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo e-mail inválido', () => {
        cy.fillName(user_data.name)
        cy.fillEmail('emailinvalido')
        cy.saveRegister()
        cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })
    
    it('Validar campo senha inválido', () => {
        cy.fillName(user_data.name)
        cy.fillEmail(user_data.email)
        cy.fillPassword('12345')
        cy.saveRegister()
        cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro realizado com sucesso', () => {

        const name = faker.person.fullName()
        const email = faker.internet.email()

        cy.fillName(name)
        cy.fillEmail(email)
        cy.fillPassword(user_data.password)
        cy.saveRegister()
        cy.checkRegisterSuccess(name)        
    })

})  
