describe('HIGO Navigation Menu', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should navigate to Tentang HIGO page', () => {
    cy.contains('Tentang HIGO').click()
    cy.url().should('include', 'about-us')
  })

  it('should navigate to Studi Kasus page', () => {
    cy.contains('Studi Kasus').click()
    cy.url().should('include', 'studi-kasus')
  })

  it('should navigate to Blog page', () => {
    cy.contains('Blog').click()
    cy.url().should('include', 'blog')
  })
})
