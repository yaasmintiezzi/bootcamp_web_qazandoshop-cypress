/// <reference types = "cypress" />

 beforeEach('Acessar a aplicação',() => {
    // Dado
    // Acesso a aplicação
    cy.visit('/login') // beforeEach = "antes de cada" cenário ele executa | completei a URL base
 });

 describe('Login', () => {

    it ('Validar login com sucesso', () => {
        
        // Preencher as credenciais
        cy.get('#user').type('yasmintiezzi@gmail.com')
        cy.get('#password').type('16122001')
        
        // Quando
        // Clicar em entrar
        cy.get('#btnLogin').click()


        // Então
        // Vejo mensagem de sucesso - asserts
        cy.get('#swal2-title').should('have.text','Login realizado') // assert -> .should (deve...)
        cy.url().should('include','/my-account')
    });

    it ('Senha invalida', () => {

        // Preencher as credenciais
        cy.get('#user').type('yasmintiezzi@gmail.com')
        cy.get('#password').type('123')

        // Quando
        // Clicar em entrar
        cy.get('#btnLogin').click()

        // Então
        // Vejo mensagem de senha incorreta - asserts
        cy.get('.invalid_input').should('have.text','Senha inválida.')

    });

    it ('E-mail invalido', () => {

        // Preencher as credenciais
        cy.get('#user').type('yasgmail.com')
        cy.get('#password').type('16122001')

        // Quando
        // Clicar em entrar
        cy.get('#btnLogin').click()

        // Então
        // Vejo mensagem de senha incorreta - asserts
        cy.get('.invalid_input').should('have.text','E-mail inválido.')
    });

    it ('Senha vazia',() => {

        // Preencher as credenciais
        cy.get('#user').type('yasmintiezzi@gmail.com')

        // Quando
        // Clicar em entrar
        cy.get('#btnLogin').click()

        // Então
        // Vejo mensagem de senha incorreta - asserts
        cy.get('.invalid_input').should('have.text','Senha inválida.')
    });

    it ('E-mail vazio',() => {

        // Preencher as credenciais
        cy.get('#password').type('16122001')

        // Quando
        // Clicar em entrar
        cy.get('#btnLogin').click()

        // Então
        // Vejo mensagem de senha incorreta - asserts
        cy.get('.invalid_input').should('have.text','E-mail inválido.')
    });

    it ('Campos vazios',() => {

        // Preencher as credenciais

        // Quando
        // Clicar em entrar
        cy.get('#btnLogin').click()

        // Então
        // Vejo mensagem de senha incorreta - asserts
        cy.get('.invalid_input').should('have.text','E-mail inválido.')
    });
 })