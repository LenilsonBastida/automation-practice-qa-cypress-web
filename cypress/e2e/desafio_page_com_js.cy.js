/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

const user_data = require('../fixtures/desafio_valid_data.json')
import home_page from '../support/pages/home_page'
import register_page from '../support/pages/register_page';

describe('Cadastro de usuário', () => {

    beforeEach('Acessando página de cadastro', () => {
        home_page.acessRegisterPage()
    })

    it('Validar campo nome vazio', () => {
        register_page.saveRegister()
        register_page.checkMessage('O campo nome deve ser prenchido')
    })

    it('Validar campo e-mail vazio', () => {
        register_page.fillName(user_data.name)
        register_page.saveRegister()
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo e-mail inválido', () => {
        register_page.fillName(user_data.name)
        register_page.fillEmail('emailinvalido')
        register_page.saveRegister()
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })
    
    it('Validar campo senha inválido', () => {
        register_page.fillName(user_data.name)
        register_page.fillEmail(user_data.email)
        register_page.fillPassword('12345')
        register_page.saveRegister()
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro realizado com sucesso', () => {

        const name = faker.person.fullName()
        const email = faker.internet.email()

        register_page.fillName(name)
        register_page.fillEmail(email)
        register_page.fillPassword(user_data.password)
        register_page.saveRegister()
        register_page.checkRegisterSuccess(name)        
    })

})  