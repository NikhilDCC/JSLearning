// PayBillPage.js

import selectors from "../utils/selectors";

class PayBillPage {
  visit() {
    cy.visit('/bank/account-summary.html');
    cy.contains('Pay Bills').click();
  }

  fillPayBillForm(payee, account, amount, date, description) {
    cy.get(selectors.payeeDropdown).select(payee);
    cy.get(selectors.accountDropdown).select(account);
    cy.get(selectors.billAmountInput).type(amount);
    cy.get(selectors.dueDateInput).type(date);
    cy.get(selectors.billDescriptionInput).type(description, { force: true });
  }

  submitPayBillForm() {
    cy.get(selectors.payButton).click();
  }

  verifySuccessMessage() {
    cy.contains('successfully submitted').should('be.visible');
  }
}

export default PayBillPage;
