// LoginPage.js

import selectors from "../utils/selectors";

class LoginPage {

  // visit() {
  //   cy.visit('/login.html');
  // }

  static navigateToLoginPage(url='/login.html') {
    cy.visit(url);
   // cy.visit('/login.html');
  }

  static fillUsername(username) {
    cy.get(selectors.usernameInput).type(username);
  }

  static fillPassword(password) {
    cy.get(selectors.passwordInput).type(password);
  }

   static submitLoginForm() {
    cy.get(selectors.loginButton).click();
  }

  static logintoApp(username, password) {

    this.fillUsername(username);
    this.fillPassword(password);
    this.submitLoginForm();
  }
}

export default LoginPage;
