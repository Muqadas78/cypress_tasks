describe('Task2', () => {
    it('visit resizable', () => {
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
    

   //Resizing for max width and height 
   cy.get('#resizableBoxWithRestriction > span')
   .trigger('mousedown', { which: 1, clientX: 0, clientY: 0 })
   .trigger('mousemove', { clientX: 500, clientY: 300 }) // Simulate resizing to a new size
   .trigger('mouseup', { force: true }); // Release the mouse button
 

 // Verify the properties after resizing
 cy.get('#resizableBoxWithRestriction').then($box => {
  const boxHeight = parseFloat($box.css('height'));
  const boxWidth = parseFloat($box.css('width'));

  // Verify properties after resizing
  expect(boxHeight).to.be.within(150, 300);
  expect(boxWidth).to.be.within(150, 500);


});
 
});

    });
  
  
  