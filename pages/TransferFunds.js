// TransferFundsPage.js

import selectors from "../utils/selectors";

class TransferFundsPage {
  visit() {
    cy.visit('/bank/account-summary.html');
    cy.contains('Transfer Funds').click();
  }

  fillTransferForm(sourceAccount, destinationAccount, amount, description) {
    cy.get(selectors.transferFromDropdown).select(sourceAccount);
    cy.get(selectors.transferToDropdown).select(destinationAccount);
    cy.get(selectors.transferAmountInput).type(amount);
    cy.get(selectors.transferDescriptionInput).type(description);
  }

  submitTransferForm() {
    cy.get(selectors.transferSubmitButton).click();
    cy.get(selectors.transferSubmitButton).click();
  }

  verifySuccessMessage() {
    cy.contains('successfully submitted').should('be.visible');
  }
}

export default TransferFundsPage;
