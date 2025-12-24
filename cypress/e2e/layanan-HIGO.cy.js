describe('Layanan HIGO Menu', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display Layanan HIGO dropdown menu', () => {
    cy.contains('Layanan HIGO').trigger('mouseover')
    cy.contains('HIGOspot').should('be.visible')
    cy.contains('WiFi Advertising').should('be.visible')
  })

  it('should navigate to HIGOspot page', () => {
    cy.contains('Layanan HIGO').trigger('mouseover')
    cy.contains('HIGOspot').click()

    cy.url().should('include', 'higospot')
    cy.contains('HIGOspot').should('be.visible')
  })

  it('should navigate to WiFi Advertising page', () => {
    cy.contains('Layanan HIGO').trigger('mouseover')
    cy.contains('WiFi Advertising').click()

    cy.url().should('include', 'wifi')
    cy.contains('WiFi').should('be.visible')
  })
})
