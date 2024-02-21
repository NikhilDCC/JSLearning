
describe('Login Test', () => {

     it('should log in successfully', () => {
      cy.login('/login.html','username', 'password');
     });

     //File Read and Write 

     it.only('n successfully', () => {

     // cy.writeFile('cypress\InputFiles\message.txt', 'Hello World')
     cy.readFile('cypress/InputFiles/textFile.txt').then((text) => {
     expect(text).to.equal ('Hello World')
     
      })
     });

     //Scrolling into View 
     it('should log in successfully', () => {
      cy.get('#user_password').scrollIntoView();
      cy.login('username', 'password');
     });



});