/// <reference types="cypress" />

describe('SauceDemo Website Automation', () => {
    // beforeEach(() => {
    //     // Clear cookies and local storage before each test
    //     cy.clearCookies();
    //     cy.clearLocalStorage();
    
    //     // Other setup steps...
    //   });
   
    it('Should login with valid credentials', () => {
        // Visit the login page
        
        cy.visit('https://www.saucedemo.com/');
    
        // Type username and password
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
    
        // Click on the login button
        cy.get('#login-button').click();
    
        // // Assertion to verify successful login and navigation to products page
        // cy.url().should('include', '/inventory.html');
        // cy.get('.product_label').should('be.visible');
      });
    
      // it('Should add item to the cart', () => {
      //   // Login if not already logged in (assuming login is a prerequisite for adding items to cart)
      //   cy.visit('https://www.saucedemo.com/');
      //   cy.get('#user-name').type('standard_user');
      //   cy.get('#password').type('secret_sauce');
      //   cy.get('#login-button').click();
    
      //   // Add an item to the cart
      //   cy.get('.inventory_item').first().find('.btn_inventory').click();
    
      //   // Assertion to verify item is added to the cart
      //   cy.get('.shopping_cart_badge').should('contain.text', '1');
      // });
    
      // it('Should remove item from the cart', () => {
      //   // Login if not already logged in (assuming login is a prerequisite for removing items from cart)
      //   cy.visit('https://www.saucedemo.com/');
      //   cy.get('#user-name').type('standard_user');
      //   cy.get('#password').type('secret_sauce');
      //   cy.get('#login-button').click();
    
      //   // Add an item to the cart
      //   cy.get('.inventory_item').first().find('.btn_inventory').click();
    
      //   // Remove the item from the cart
      //   cy.get('.shopping_cart_badge').click();
      //   cy.get('.cart_item').first().find('.cart_button').click();
    
      //   // Assertion to verify item is removed from the cart
      //   cy.get('.shopping_cart_badge').should('not.exist');
      // });
    
      // it('Should logout', () => {
      //   // Login if not already logged in (assuming login is a prerequisite for logging out)
      //   cy.visit('https://www.saucedemo.com/');
      //   cy.get('#user-name').type('standard_user');
      //   cy.get('#password').type('secret_sauce');
      //   cy.get('#login-button').click();
    
      //   // Logout
      //   cy.get('#react-burger-menu-btn').click();
      //   cy.get('#logout_sidebar_link').click();
    
      //   // Assertion to verify successful logout
      //   cy.url().should('include', '/index.html');
      //   cy.get('#login-button').should('be.visible');
      // });

  });
  