Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('HIGO Blog Page', () => {
  beforeEach(() => {
    cy.visit('https://blog.higo.id')
  })

  it('should open an article and verify content', () => {

    cy.get('h2').first().should('be.visible').click({ force: true })
    
    cy.get('h1', { timeout: 10000 }).should('be.visible')
    
    cy.url().should('include', '/blog/')
  })
})