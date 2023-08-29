describe('Task2', () => {
    it('verify resizing', () => {
      // visit the URL
      cy.visit('https://demoqa.com/');
     
  
      // Click on Interactions 
      cy.contains('Interactions').click();
  
      // Verify Interaction Page
      cy.contains('Interaction').should('be.visible');
    
      cy.contains('Elements').should('be.visible');
      cy.contains('Forms').should('be.visible');
      cy.contains('Alerts, Frame & Windows').should('be.visible');
      cy.contains('Widgets').should('be.visible');
      cy.contains('Interactions').should('be.visible');
      cy.contains('Book Store Application').should('be.visible');
     //Click on Resizable
      cy.contains('Resizable').click();
  // Verify Resizable on top
  cy.get('.main-header').should('contain', 'Resizable');

  // Verify the current height and width of Box 1
  cy.get('#resizableBoxWithRestriction')
  .should('have.css', 'height', '200px')
  .should('have.css', 'width', '200px');

  
   //Resizing 
   cy.get('#resizableBoxWithRestriction')
   .invoke('attr', 'style', 'min-height: 150px; min-width: 150px; max-height: 300px; max-width: 500px;');
 
 // Verify the properties after setting them
 cy.get('#resizableBoxWithRestriction').should('have.css', 'min-height', '150px');
 cy.get('#resizableBoxWithRestriction').should('have.css', 'min-width', '150px');
 cy.get('#resizableBoxWithRestriction').should('have.css', 'max-height', '300px');
 cy.get('#resizableBoxWithRestriction').should('have.css', 'max-width', '500px');
 cy.end();
});

    });
  
  
  