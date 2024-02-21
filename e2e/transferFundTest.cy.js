// transferFundsTest.js

import TransferFundsPage from "../pages/TransferFunds";
import LoginPage from "../pages/LoginPage";

describe('Transfer Funds Test', () => {
  const transferFundsPage = new TransferFundsPage();

  beforeEach(() => {
    LoginPage.navigateToLoginPage('/login.html');
    cy.fixture('loginCred.json').then((loginCred) => {
      LoginPage.logintoApp(loginCred.userName, loginCred.passWord);
    })

    transferFundsPage.visit();
  });

  it('should transfer funds successfully', () => {
    transferFundsPage.fillTransferForm('1', '2', '100', 'Monthly Expense');
    transferFundsPage.submitTransferForm();
    transferFundsPage.verifySuccessMessage();
  });
});
