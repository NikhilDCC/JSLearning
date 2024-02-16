/// <reference types="cypress" />

describe('Zero Bank Website Automation', () => {
  beforeEach(() => {
    // Preserve the session before running each test
    cy.session('preserveOnce', () => {
      // Visit the login page
      cy.visit('http://zero.webappsecurity.com/login.html');

      // Type username and password
      cy.get('#user_login').type('username');
      cy.get('#user_password').type('password');

      // Click on the login button
      cy.get('input[name="submit"]').click();

      // Assertion to verify successful login
      cy.url().should('include', '/bank/account-summary.html');
      cy.get('.icon-user').should('be.visible');
    });
  });

  it('Should check for account transactions', () => {
    // Navigate to the account transactions page
    cy.visit('http://zero.webappsecurity.com/bank/account-summary.html');
    cy.contains('Account Activity').click();

    // Check for presence of account transactions
    cy.get('#all_transactions_for_account').should('be.visible');
  });

  it('Should transfer funds successfully', () => {
    // Navigate to the transfer funds page
    cy.visit('http://zero.webappsecurity.com/bank/account-summary.html');
    cy.contains('Transfer Funds').click();

    // Fill out transfer form
    cy.get('#tf_fromAccountId').select('1'); // Assuming '1' is the ID of the source account
    cy.get('#tf_toAccountId').select('2');   // Assuming '2' is the ID of the destination account
    cy.get('#tf_amount').type('100');        // Transfer amount
    cy.get('#tf_description').type('Monthly Expense');

    // Click on the submit button
    cy.get('#btn_submit').click();
    cy.get('#btn_submit').click();

    // Check for success message
    cy.contains('successfully submitted').should('be.visible');
  });

  it('Should pay bill successfully', () => {
    // Navigate to the pay bill page
    cy.visit('http://zero.webappsecurity.com/bank/account-summary.html');
    cy.contains('Pay Bills').click();

    // Fill out pay bill form
    cy.get('#sp_payee').select('apple');    // Select payee
    cy.get('#sp_account').select('3');      // Assuming '3' is the ID of the account
    cy.get('#sp_amount').type('50');       // Bill amount
    cy.get('#sp_date').type('2024-02-12'); // Due date
// Force type into the input field
cy.get('#sp_description').type('Monthly Phone Bill', { force: true });

    // Click on the pay button
    cy.get('#pay_saved_payees').click();

    // Check for success message
    cy.contains('successfully submitted').should('be.visible');
  });

  it('Should logout', () => {
    // Navigate to the logout page
    cy.visit('http://zero.webappsecurity.com/logout.html');

    // Assertion to verify successful logout
    cy.url().should('include', '/index.html');
    cy.get('#signin_button').should('be.visible');

  })
});

describe('Zero Bank Login Page Test', () => {
  beforeEach(() => {
    // Visit the login page
    cy.visit('http://zero.webappsecurity.com/login.html');
  });

  it('Should display the login form', () => {
    // Assert the presence of username and password input fields using CSS selector
    cy.get('input[name="user_login"]').should('be.visible');
    cy.get('input[name="user_password"]').should('be.visible');
  });

  it('Should wait for and click the login button', () => {
    // Wait for the login button to become clickable using explicit wait (10 seconds)
    cy.get('input[type="submit"]').should('be.visible').wait(10000).click();
  });

  it('Should assert error message for invalid login credentials', () => {
    // Enter invalid username and password
    cy.get('input[name="user_login"]').type('invalidUsername');
    cy.get('input[name="user_password"]').type('invalidPassword');

    // Click on the login button
    cy.get('input[type="submit"]').click();

  });

  it('Should assert visibility of "Forgot your password?" link', () => {
    // Assert the visibility of "Forgot your password?" link using contains and class selector
    cy.contains('.offset3 > a', 'Forgot your password ?').should('be.visible');
  });

  it('Should assert focus on username input field after page load', () => {
    // Assert that the username input field has focus after page load
    cy.focused().should('have.attr', 'name', 'user_login');
  });
});



describe('Zero Bank Login Page Test', () => {
  beforeEach(() => {
    // Visit the login page
    cy.visit('http://zero.webappsecurity.com/login.html');
  });

  it('Should display the login form', () => {
    // Assert the presence of username and password input fields using 'and'
    cy.get('input[name="user_login"]').should('be.visible').and('have.attr', 'type', 'text');
    cy.get('input[name="user_password"]').should('be.visible').and('have.attr', 'type', 'password');
  });

  it('Should wait for and click the login button', () => {
    // Wait for the login button to become clickable and click it using 'expect'
    cy.get('input[type="submit"]').should('be.visible').and(($btn) => {
      expect($btn).to.contain('Sign in');
    }).click();
  });

  it('Should assert error message for invalid login credentials', () => {
    // Enter invalid username and password
    cy.get('input[name="user_login"]').type('invalidUsername');
    cy.get('input[name="user_password"]').type('invalidPassword');

    // Click on the login button
    cy.get('input[type="submit"]').click();

    // Assert the presence of error message using 'assert'
    cy.contains('.alert-error', 'Login and/or password are wrong.').should('be.visible').then(($errMsg) => {
      assert.notEqual($errMsg.text(), 'Login and/or password are wrong.');
    });
  });

  it('Should assert visibility of "Forgot your password?" link', () => {
    // Assert the visibility of "Forgot your password?" link using 'expect'

    cy.contains('.offset3 > a', 'Forgot your password ?').should('be.visible').and(($link) => {
      expect($link).to.have.attr('href').and.include('/forgot-password.html');
    });
  });

  it('Should assert focus on username input field after page load', () => {
    // Assert that the username input field has focus after page load using 'and'
    cy.focused().should('have.attr', 'name', 'user_login').and('have.attr', 'type', 'text');
  });

  it('Should assert that the title contains the word "Zero"', () => {
    // Assert that the title contains the word "Zero" using 'expect'
    cy.title().should('include', 'Zero').then((title) => {
      expect(title).to.include('Zero');
    });
  });

  it('Should assert the value of the username input field', () => {
    // Assert the value of the username input field using 'expect'
    cy.get('input[name="user_login"]').invoke('val').should('eq', '');
  });

  it('Should assert the visibility of an element using its text', () => {
    // Assert the visibility of an element using its text using 'assert'
    cy.contains('Sign in').should('be.visible').then(($btn) => {
      assert.isTrue($btn.is(':visible'));
    });
  });

  it('Should assert the URL of the page', () => {
    // Assert the URL of the page using 'expect'
    cy.url().should('eq', 'http://zero.webappsecurity.com/login.html').then((url) => {
      expect(url).to.eq('http://zero.webappsecurity.com/login.html');
    });
  });
});
