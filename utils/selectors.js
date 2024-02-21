// selectors.js

const selectors = {
    // Common selectors
    header: '#navbar',
    footer: '#footer',
  
    // Home page selectors
    homePageTitle: 'h2',
  
    // Login page selectors
    usernameInput: '#user_login',
    passwordInput: '#user_password',
    loginButton: 'input[name=submit]',
  
    // Account summary page selectors
    transferFundsLink: 'a[href="/bank/transfer-funds.html"]',
    payBillsLink: 'a[href="/bank/pay-bills.html"]',
  
    // Transfer funds page selectors
    transferFromDropdown: '#tf_fromAccountId',
    transferToDropdown: '#tf_toAccountId',
    transferAmountInput: '#tf_amount',
    transferDescriptionInput: '#tf_description',
    transferSubmitButton: '#btn_submit',
  
    // Pay bills page selectors
    payeeDropdown: '#sp_payee',
    accountDropdown: '#sp_account',
    billAmountInput: '#sp_amount',
    dueDateInput: '#sp_date',
    billDescriptionInput: '#sp_description',
    payButton: '#pay_saved_payees',
  
    // Additional selectors for other pages...
  };
  
  export default selectors;
  