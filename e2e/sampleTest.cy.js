// describe('OrangeHRM Login Page', () => {
//   beforeEach(() => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   });

//   it('Should display the login page title', () => {
//     cy.get(".oxd-text--h5").should('be.visible');
//   });

//   it('Should display the username and password input fields', () => {
//     cy.get('input[name="username"]').should('be.visible');
//     cy.get('input[name="password"]').should('be.visible');
//   });

//   it('Should display the login button', () => {
//     cy.get('button[type="submit"]').should('be.visible');
//   });

//   it('Should display the "Forgot your password?" link', () => {
//     cy.contains("Forgot your password?").should('be.visible');
//   });

//   it('Should display an error message for empty username field on login attempt', () => {
//     cy.get('button[type="submit"]').click();
//     cy.get(".oxd-input-group > .oxd-text").should('be.visible');
//   });

//   it('Should display an error message for empty password field on login attempt', () => {
//     cy.get('button[type="submit"]').click();
//     cy.get(".oxd-input-group > .oxd-text").should('be.visible');
//   });

//   it('Should display an error message for invalid credentials', () => {
//     cy.get('input[name="username"]').type('invalidUsername');
//     cy.get('input[name="password"]').type('invalidPassword');
//     cy.get('button[type="submit"]').click();
//     cy.get('div[role="alert"]').should('be.visible');
//   });

// });

// describe('OrangeHRM Dashboard Page', () => {
//   beforeEach(() => {
//     // Visit the login page and perform login
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     cy.get('input[name="username"]').type('Admin');
//     cy.get('input[name="password"]').type('admin123');
//     cy.get('button[type="submit"]').click();
//   });

//   it('Should successfully login and navigate to the Dashboard page', () => {
//     // Verify if the dashboard span element is visible
//     cy.get('span[class="oxd-topbar-header-breadcrumb"]').should('be.visible');
//   });

//   it('Should display the Admin button on the Dashboard page', () => {
//     // Click on the Admin button and assert the navigation
//     cy.contains("Admin").click();
//     cy.url().should('include', '/admin/viewSystemUsers');
//   });

//   it('Should display the My Info button on the Dashboard page', () => {
//     // Click on the My Info button and assert the navigation
//     cy.contains("My Info").click();
//     cy.url().should('include', '/viewPersonalDetails');
//   });

//   it('Should display the user dropdown icon on the Dashboard page', () => {
//     // Verify if the user dropdown icon is visible
//     cy.get(".oxd-userdropdown-tab > .oxd-icon").should('be.visible');
//   });
// });

// MOUSE ACTIONS

// describe('Mouse Actions on The Internet Herokuapp', () => {
//   beforeEach(() => {
//     // Visit The Internet Herokuapp before each test
//     cy.visit('https://the-internet.herokuapp.com/');
//   });

//   it('Should perform a click action', () => {
//     // Click on an element
//     cy.contains('Checkboxes').click();
//     // Verify that the correct page is loaded after the click
//     cy.url().should('include', 'checkboxes');
//   });

//   it('Should perform a double click action', () => {
//     // Double click on an element
//     cy.contains('Hovers').dblclick();
//     // Verify that the correct page is loaded after the double click
//     cy.url().should('include', 'hovers');
//   });

//   it('Should perform a right click action', () => {
//     // Right click on an element
//     cy.contains('Context Menu').click();
//     cy.get('#hot-spot').rightclick();
//     // Verify that the correct context menu appears after the right click
   
//     cy.on('window:alert', (alertText) => {
//       // Assert that the alert text is not empty
//       expect(alertText).to.not.be.empty;
//       // Optionally, you can log the alert text for debugging purposes
//       cy.log('Alert Text:', alertText);
//     });
//   });

//   it('Should perform a hover action', () => {
//     // Hover over an element
//     cy.contains('Dropdown').trigger('mouseover');
//     // Verify that the correct tooltip or submenu appears after the hover
//     cy.get('.dropdown-menu').should('be.visible');
//   });

//   it('Should perform a mouse down action', () => {
//     // Trigger a mouse down action on an element
//     cy.contains('Inputs').trigger('mousedown');
//     // Perform assertions or verifications based on the mouse down action
//     // For example, you could check the CSS styling of the element after the mouse down action
//   });

//   it('Should perform a mouse up action', () => {
//     // Trigger a mouse up action on an element
//     cy.contains('Form Authentication').trigger('mouseup');
//     // Perform assertions or verifications based on the mouse up action
//     // For example, you could check the CSS styling of the element after the mouse up action
//   });
//  });

// describe('Mouse Actions - Drag and Drop', () => {
//   beforeEach(() => {
//     // Visit the page before each test
//     cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
//   });

//   it('Should perform mouse down and mouse up actions on draggable elements', () => {
    
//     cy.get('#column-a').trigger('mousedown');
//     cy.get('#column-b').trigger('mouseup');


//     // // Verify that the draggable element has been moved to column B
//     // cy.get('#column-a header').should('contain', 'B');
//     // cy.get('#column-b header').should('contain', 'A');
//   });
// });

Cypress.config("defaultCommandTimeout", 40000);

describe("dnd spec", () => {
  it("should drag-and-drop to 40%", () => {
    cy.visit("https://x2f9rh.csb.app/?standalone");

    // the value corresponding to the 100% of the slider
    const maxValue = 20;

    // drag-and-drop target value in percentage
    const targetValue = 0.4; // 40%

    cy
      // retrieving the slider HTML element
      .get(".ant-slider.ant-slider-horizontal")
      .first()
      .then((slider) => {
        // defining the CSS selector for the slider handle HTML element
        const sliderHandleSelector = ".ant-slider-handle";

        // retrieving the slider handle HTML element
        const sliderHandle = cy.get(sliderHandleSelector).first();

        // getting the slider bounding box size
        const sliderBoundingBox = slider.get(0).getBoundingClientRect();

        // performing the drag-and-drop interaction
        // with the cypress-drag-drop drag function
        sliderHandle.drag(sliderHandleSelector, {
          force: true,
          target: {
            // moving the slider to the target value in %
            x: sliderBoundingBox.width * targetValue,
            y: 0,
          },
        });

        cy
          // retrieving the input HTML element
          .get(".ant-input-number-input")
          .first()
          // getting the "value" HTML attribute
          .invoke("attr", "value")
          .then((value) => {
            // calculating the expected value
            const expectedValue = `${maxValue * targetValue}`;

            cy.wrap(value).should("be.eq", expectedValue);
          });
      });
  });
});

describe("dnd spec", () => {
  it("should drag-and-drop to 40%", () => {
    cy.visit("https://x2f9rh.csb.app/?standalone");

    // the value corresponding to the 100% of the slider
    const maxValue = 20;

    // drag-and-drop target value in percentage
    const targetValue = 0.4; // 40%

    cy
      // retrieving the slider HTML element
      .get(".ant-slider.ant-slider-horizontal")
      .first()
      .then((slider) => {
        // defining the CSS selector for the slider handle HTML element
        const sliderHandleSelector = ".ant-slider-handle";

        // retrieving the slider handle HTML element
        const sliderHandle = cy.get(sliderHandleSelector).first();

        // getting the slider bounding box size
        const sliderBoundingBox = slider.get(0).getBoundingClientRect();

        // performing the drag-and-drop interaction
        // by simulating the mouse interaction
        sliderHandle
          .trigger("mousedown")
          .trigger("mousemove", {
            pageX: sliderBoundingBox.x + (sliderBoundingBox.width - sliderBoundingBox.x) * targetValue,
            pageY: 33,
          })
          .trigger("mouseup");

        cy
          // retrieving the input HTML element
          .get(".ant-input-number-input")
          .first()
          // getting the "value" HTML attribute
          .invoke("attr", "value")
          .then((value) => {
            // calculating the expected value
            const expectedValue = `${maxValue * targetValue}`;

            cy.wrap(value).should("be.eq", expectedValue);
          });
      });
  });
});