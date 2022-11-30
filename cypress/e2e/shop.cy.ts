import { } from 'cypress'
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('ul')
    cy.get('.button--cart').click()
    cy.url().should('include', '/cart')
    cy.get('h2').should('have.text', 'Корзина пустая 😕')
    cy.get('.cart--empty').get('p').should('have.text', 'самая вкусная пицца во вселеннойВероятней всего, вы не заказывали ещё пиццу.Для того, чтобы заказать пиццу, перейди на главную страницу.')
    cy.get('img')
    cy.get('.button--black').click()
  })
})