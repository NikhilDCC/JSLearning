///<reference types="cypress"/>
describe('Training test of restore me',()=>{
    it('Mouse over',()=>{
        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('#checkBoxOption1').click()
        // cy.get('#checkBoxOption2').click()
        // cy.reload(true)
        // cy.wait(6000)
        // cy.get('#alertbtn').trigger('mousemove').trigger('mousedown').trigger('mouseup',{force:true})       
        // // cy.get('#checkBoxOption1').trigger('mousedown').trigger('mouseup')
        // // cy.get('#mousehover').trigger('mousemove')
        // cy.screenshot('Alert')
        cy.visit('http://zero.webappsecurity.com/login.html')
        //Logged in
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('input[value="Sign in"]').should('be.visible').should('be.enabled');
        
        //cy.get('input[value="Sign in"]').trigger("mousemove").trigger("click")
       // cy.wait(2000)
        cy.get('input[value="Sign in"]').trigger('click',{force:true})
        // cy.get('.brand').should('contain','Zero Bank')

    })
})

