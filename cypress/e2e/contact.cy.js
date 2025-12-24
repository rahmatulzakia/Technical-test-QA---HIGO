describe('Hubungi HIGO Page', () => {

  beforeEach(() => {
    cy.visit('https://higo.id/contact-us') 
  })

  it('should fill and submit contact form', () => {
    
    cy.get('input').filter(':visible').eq(0).type('Zakia', { force: true })

    cy.get('input[placeholder*="gmail.com"]').type('zakia@test.com')

    cy.get('input[placeholder*="+628"]').type('+6287805672350')


    cy.get('textarea').type('Testhing HIGO')

    cy.contains('button', 'Submit')
      .scrollIntoView()
      .click({ force: true })
      
  })
})