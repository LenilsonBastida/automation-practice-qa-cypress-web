describe('Get Elements', () => {

    it('Encontrar/Selecionar elementos', () => {
        // get() - selecionar elementos
        cy.visit('/')
            .get('.header-logo')

        // contains() - para encontrar elementos por texto
        // onde geralmente diminuimos o escopo com get()
        cy.get('#top_header').as('cabecalho')
            .contains('Login')

        // find() - para encontrar elementos
        // onde geralmente diminuimos o escopo com get()
        cy.get('#top_header')
            .find('.fa-user')

        // as() - alias
        // serve para criar apelidos ou atalhos para grandes comandos
        cy.get('@cabecalho')
            .find('.fa-user')
    })
})