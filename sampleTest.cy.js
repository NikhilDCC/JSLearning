describe('OrangeHRM Login Page', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('Should display the login page title', () => {
    cy.get(".oxd-text--h5").should('be.visible');
  });

  it('Should display the username and password input fields', () => {
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
  });

  it('Should display the login button', () => {
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('Should display the "Forgot your password?" link', () => {
    cy.contains("Forgot your password?").should('be.visible');
  });

  it('Should display an error message for empty username field on login attempt', () => {
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-input-group > .oxd-text").should('be.visible');
  });

  it('Should display an error message for empty password field on login attempt', () => {
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-input-group > .oxd-text").should('be.visible');
  });

  it('Should display an error message for invalid credentials', () => {
    cy.get('input[name="username"]').type('invalidUsername');
    cy.get('input[name="password"]').type('invalidPassword');
    cy.get('button[type="submit"]').click();
    cy.get('div[role="alert"]').should('be.visible');
  });

});

describe('OrangeHRM Dashboard Page', () => {
  beforeEach(() => {
    // Visit the login page and perform login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
  });

  it('Should successfully login and navigate to the Dashboard page', () => {
    // Verify if the dashboard span element is visible
    cy.get('span[class="oxd-topbar-header-breadcrumb"]').should('be.visible');
  });

  it('Should display the Admin button on the Dashboard page', () => {
    // Click on the Admin button and assert the navigation
    cy.contains("Admin").click();
    cy.url().should('include', '/admin/viewSystemUsers');
  });

  it('Should display the My Info button on the Dashboard page', () => {
    // Click on the My Info button and assert the navigation
    cy.contains("My Info").click();
    cy.url().should('include', '/viewPersonalDetails');
  });

  it('Should display the user dropdown icon on the Dashboard page', () => {
    // Verify if the user dropdown icon is visible
    cy.get(".oxd-userdropdown-tab > .oxd-icon").should('be.visible');
  });
});
