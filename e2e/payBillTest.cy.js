// payBillTest.js

import PayBillPage from "../pages/PayBill";
import LoginPage from "../pages/LoginPage";

describe('Pay Bill Test', () => {
  const payBillPage = new PayBillPage();

  beforeEach(() => {
    LoginPage.navigateToLoginPage('/login.html');
    cy.fixture('loginCred.json').then((loginCred) => {
      LoginPage.logintoApp(loginCred.userName, loginCred.passWord);
    })

    payBillPage.visit();
  });

  it('should pay bill successfully', () => {
    payBillPage.fillPayBillForm('apple', '3', '50', '2024-02-12', 'Monthly Phone Bill');
    payBillPage.submitPayBillForm();
    payBillPage.verifySuccessMessage();
  });
});
