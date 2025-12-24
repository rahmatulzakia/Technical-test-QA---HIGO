describe('HIGO Home Page', () => {

  beforeEach(() => {
   
    cy.visit('https://higo.id/')
  })

  it('should load home page correctly', () => {
 
    cy.get('nav').find('a').first().should('be.visible')

    cy.contains('Solusi', { timeout: 10000 }).should('be.visible')
  })

  it('should navigate to Studi Kasus', () => {
    
    cy.contains('nav a', 'Studi Kasus').click()
    
  
    cy.url().should('include', '/case-study')
    
    cy.contains('Berbagi cerita dari kolaborasi HIGO').should('be.visible')
  })

})