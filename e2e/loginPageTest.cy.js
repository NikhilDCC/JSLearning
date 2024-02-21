// loginTest.js

import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

describe('Login Test', () => {
  const homePage = new HomePage();
  const loginPage =new LoginPage();

  beforeEach(() => {
  //   loginPage.visit();
  LoginPage.navigateToLoginPage('/login.html');
  });

  it('should login with valid credentials', () => {
   // LoginPage.navigateToLoginPage();
    //loginPage.visit();
    cy.fixture('loginCred.json').then((loginCred) => {
     // loginPage.fillUsername(loginCred.userName);
     LoginPage.fillUsername(loginCred.userName);
      LoginPage.fillPassword(loginCred.passWord);
    })
    LoginPage.submitLoginForm();
    homePage.verifyLandingPage();
  });

  it('should display an error message with invalid credentials', () => {
    LoginPage.fillUsername('invalid_username');
    LoginPage.fillPassword('invalid_password');
    LoginPage.submitLoginForm();
    cy.contains('Login and/or password are wrong.').should('be.visible');
  });
});
