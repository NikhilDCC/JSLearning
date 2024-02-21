// HomePage.js

import selectors from "../utils/selectors";

class HomePage {
  visit() {
    cy.visit('/');
  }

  verifyLandingPage() {
    cy.url().should('include', '/bank/account-summary.html');
    cy.get('.icon-user').should('be.visible');
  }

}

export default HomePage;
