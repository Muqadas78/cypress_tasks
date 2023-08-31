describe('Task3', () => {
    it('BookDeatils', () => {
      // visit the URL and Verify page
      cy.visit('https://demoqa.com/');
      cy.url().should('eq', 'https://demoqa.com/')
  
      // Click on Interactions and Verify page
      cy.contains('Book Store Application').click();  
      cy.url().should('eq', 'https://demoqa.com/books')
      cy.contains('Book Store').should('be.visible');

      //Click on book store and book 
      cy.contains('Book Store').click();     
      cy.contains('Understanding ECMAScript 6').click();

    
 // Intercept the API call and create alias
 cy.intercept('GET', 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574').as('bookdetails');

 // Visit the page
 cy.visit('https://demoqa.com/books');

 // Click on book
 cy.contains('Understanding ECMAScript 6').click();
 cy.wait('@bookdetails').then((interception) => {
   const responseBody = interception.response.body;

   expect(responseBody).to.deep.include({
     isbn: '9781593277574',
     title: 'Understanding ECMAScript 6',
     subTitle: 'The Definitive Guide for JavaScript Developers',
     author: 'Nicholas C. Zakas',
     publish_date: '2016-09-03T00:00:00.000Z',
     publisher: 'No Starch Press',
     pages: 352,
     description: 'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E',
     website: 'https://leanpub.com/understandinges6/read'
   });
  });
  });
});
  
  