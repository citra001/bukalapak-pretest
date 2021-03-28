describe('Buka Lapak Automated Test', function() 
{
    it('Login Positive Case 01', function() 
    {
    cy.visit("https://bukalapak.com/")
    cy.title().should('eq', 'Situs Belanja Online dan Jual Beli Mudah Terpercaya | Bukalapak')
  
    })

    it('.click() - Go To Login Page', () => {
        cy.contains('Login').click()
    })

    it('.type() - Typing Username', () => {
        cy.get('input#user_session_username')
          .type('citrasekaripb@email.com').should('have.value', 'citrasekaripb@email.com')
    })
    it('.type() - Typing Password', () => {
        cy.get('input#user_session_password')
          .type('taqwa123').should('have.value', 'taqwa123')
    })

    it('.click() - Click Login Button', () => {
        cy.get('button.c-btn.c-btn--red.c-btn--block.js-btn-menu-login').click()
    })

    it('Login Negative Case 02 - Username Null', function() 
    {
    cy.visit("https://bukalapak.com/")
    cy.title().should('eq', 'Situs Belanja Online dan Jual Beli Mudah Terpercaya | Bukalapak')
  
    })

    it('.click() - Go To Login Page', () => {
        cy.contains('Login').click()
    })

    it('.type() - Typing Username', () => {
        cy.get('input#user_session_username')
          .type('').should('have.value', '')
    })
    it('.type() - Typing Password', () => {
        cy.get('input#user_session_password')
          .type('taqwa123').should('have.value', 'taqwa123')
    })

    it('.click() - Click Login Button', () => {
        cy.get('button.c-btn.c-btn--red.c-btn--block.js-btn-menu-login').click()
    })

    it('Login Negative Case 03 - Password Null', function() 
    {
    cy.visit("https://bukalapak.com/")
    cy.title().should('eq', 'Situs Belanja Online dan Jual Beli Mudah Terpercaya | Bukalapak')
  
    })

    it('.click() - Go To Login Page', () => {
        cy.contains('Login').click()
    })

    it('.type() - Typing Username', () => {
        cy.get('input#user_session_username')
          .type('citrasekaripb@gmail.com').should('have.value', 'citrasekaripb@gmail.com')
    })
    it('.type() - Typing Password', () => {
        cy.get('input#user_session_password')
          .type('').should('have.value', '')
    })

    it('.click() - Click Login Button', () => {
        cy.get('button.c-btn.c-btn--red.c-btn--block.js-btn-menu-login').click()
    })

    it('Login Negative Case 04 - Username and Password Null', function() 
    {
    cy.visit("https://bukalapak.com/")
    cy.title().should('eq', 'Situs Belanja Online dan Jual Beli Mudah Terpercaya | Bukalapak')
  
    })

    it('.click() - Go To Login Page', () => {
        cy.contains('Login').click()
    })

    it('.type() - Typing Username', () => {
        cy.get('input#user_session_username')
          .type('').should('have.value', '')
    })
    it('.type() - Typing Password', () => {
        cy.get('input#user_session_password')
          .type('').should('have.value', '')
    })

    it('.click() - Click Login Button', () => {
        cy.get('button.c-btn.c-btn--red.c-btn--block.js-btn-menu-login').click()
    })

    it('Login Negative Case 05 - Account Not Found', function() 
    {
    cy.visit("https://bukalapak.com/")
    cy.title().should('eq', 'Situs Belanja Online dan Jual Beli Mudah Terpercaya | Bukalapak')
  
    })

    it('.click() - Go To Login Page', () => {
        cy.contains('Login').click()
    })

    it('.type() - Typing Username', () => {
        cy.get('input#user_session_username')
          .type('aa@gmail.com').should('have.value', 'aa@gmail.com')
    })
    it('.type() - Typing Password', () => {
        cy.get('input#user_session_password')
          .type('12345').should('have.value', '12345')
    })

    it('.click() - Click Login Button', () => {
        cy.get('button.c-btn.c-btn--red.c-btn--block.js-btn-menu-login').click()
    })

    it('Validation error account invalid', () => {
        cy.wait(10)
        cy.get('login-error.c-fld__error').should('contain', 'E-mail atau password yang kamu masukkan salah. Silakan coba lagi.')

    })
   
    it('Login Negative Case 06 - Wrong Password', function() 
    {
    cy.visit("https://bukalapak.com/")
    cy.title().should('eq', 'Situs Belanja Online dan Jual Beli Mudah Terpercaya | Bukalapak')
  
    })

    it('.click() - Go To Login Page', () => {
        cy.contains('Login').click()
    })

    it('.type() - Typing Username', () => {
        cy.get('input#user_session_username')
          .type('citrasekaripb@gmail.com').should('have.value', 'citrasekaripb@gmail.com')
    })
    it('.type() - Typing Password', () => {
        cy.get('input#user_session_password')
          .type('12345').should('have.value', '12345')
    })

    it('.click() - Click Login Button', () => {
        cy.get('button.c-btn.c-btn--red.c-btn--block.js-btn-menu-login').click()
    })

    it('Validation error account invalid', () => {
        cy.wait(10)
        cy.get('login-error.c-fld__error').should('contain', 'E-mail atau password yang kamu masukkan salah. Silakan coba lagi.')

    })
    

    it('Login Negative Case 07 - Username Invalid', function() 
    {
    cy.visit("https://bukalapak.com/")
    cy.title().should('eq', 'Situs Belanja Online dan Jual Beli Mudah Terpercaya | Bukalapak')
  
    })

    it('.click() - Go To Login Page', () => {
        cy.contains('Login').click()
    })

    it('.type() - Typing Username', () => {
        cy.get('input#user_session_username')
          .type('citrajajsjfdjs').should('have.value', 'citrajajsjfdjs')
    })
    it('.type() - Typing Password', () => {
        cy.get('input#user_session_password')
          .type('12345').should('have.value', '12345')
    })

    it('.click() - Click Login Button', () => {
        cy.get('button.c-btn.c-btn--red.c-btn--block.js-btn-menu-login').click()
    })

    it('Validation error account invalid', () => {
        cy.wait(10)
        cy.get('login-error.c-fld__error').should('contain', 'Username atau password yang kamu masukkan salah. Silakan coba lagi.')

    })
   

   
})