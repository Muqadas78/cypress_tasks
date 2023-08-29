describe('Form Submission Test', () => {
  it('Submits the form and verifies the modal', () => {
    cy.visit('https://demoqa.com/');

    // Click on the Forms Button
    cy.contains('Forms').click();

    // Click on Practice Form button 
    cy.contains('Practice Form').click();

     // Enter form data
     cy.get('#firstName').type('Cowlar');
     cy.get('#lastName').type('Developer');
     cy.get('#userEmail').type('qaengineer@cowlar.com');
     cy.get('#gender-radio-1').check({ force: true });
     cy.get('#userNumber').type('0123456789');
    cy.get('.subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3')
    .click(); 
    cy.get('.subjects-auto-complete__input').type('Computer Science');
    cy.get('.subjects-auto-complete__input').type('{enter}');

     cy.get('#hobbies-checkbox-3').check({ force: true });
     cy.get('#currentAddress').type('Address 1');
     cy.get('#react-select-3-input').type('NCR', { force: true }).type('{enter}', { force: true });
     cy.get('#react-select-4-input').type('Delhi', { force: true }).type('{enter}', { force: true });
   
 
     // Click on the Submit button
     cy.contains('Submit').click({ force: true });
   
 //Validate the data

   cy.contains('Cowlar');
    cy.contains('Developer');
    cy.contains('qaengineer@cowlar.com');
    cy.contains('Male');
    cy.contains('0123456789');
    cy.contains('Computer Science');
    cy.contains('Music');
    cy.contains('Address 1');
    cy.contains('NCR');
    cy.contains('Delhi');

    // Close the modal
    cy.get('#closeLargeModal').click({force:true});

   cy.end();
  });
});
