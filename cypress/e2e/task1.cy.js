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
     cy.get('label[for="gender-radio-1"]').click();
     cy.get('#userNumber').type('0123456789');
    cy.get('.subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3')
    .click(); 
    cy.get('.subjects-auto-complete__input').type('Computer Science');
    cy.get('.subjects-auto-complete__input').type('{enter}');

     cy.get('label[for="hobbies-checkbox-3"]').click();
     cy.get('#currentAddress').type('Address 1');
     cy.get('#state').scrollIntoView().should('be.visible');

     // Click on the State dropdown to open it
     //cy.get('#state').click();
     
     // Select the desired state (e.g., 'NCR')
     //cy.contains('.css-1uccc91-singleValue', 'NCR').click();

     cy.get('#react-select-3-input').type('NCR', { force: true }).type('{enter}', { force: true });
     cy.get('#react-select-4-input').type('Delhi', { force: true }).type('{enter}', { force: true });

   // Assertions
   cy.get('#firstName').should('have.value', 'Cowlar');
   cy.get('#lastName').should('have.value', 'Developer');
   cy.get('#userEmail').should('have.value', 'qaengineer@cowlar.com');
   cy.get('#gender-radio-1').should('be.checked');
   cy.get('#userNumber').should('have.value', '0123456789');
   cy.get('.subjects-auto-complete__value-container').should('contain', 'Computer Science');
   cy.get('#hobbies-checkbox-3').should('be.checked');
   cy.get('#currentAddress').should('have.value', 'Address 1');
    cy.contains('Submit').click({ force: true });
   
 //Validate the data

 cy.get('.modal-content')  // 
 .should('contain', 'Cowlar')
 .should('contain', 'Developer')
 .should('contain', 'qaengineer@cowlar.com')
 .should('contain', 'Male')
 .should('contain', '0123456789')
 .should('contain', 'September')
 .should('contain', 'Computer Science')
 .should('contain', 'Music')
 .should('contain', 'Address 1')
 .should('contain', 'NCR')
 .should('contain', 'Delhi');

    // Close the modal
    cy.get('#closeLargeModal').click({force:true});

   cy.end();
  });
});
