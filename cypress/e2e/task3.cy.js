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

    

      
      cy.request('GET', 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574').as('bookdetails')
      cy.get('@bookdetails')
      .its('body')
      .should('include',{isbn:'9781593277574'})  
      .should('include',{title: 'Understanding ECMAScript 6'}) 
      .should('include',{subTitle: 'The Definitive Guide for JavaScript Developers'})
      .should('include',{ author: 'Nicholas C. Zakas'})
      .should('include',{ publish_date: '2016-09-03T00:00:00.000Z'})
      .should('include',{ publisher: 'No Starch Press'})
      .should('include',{ pages: 352})
      .should('include',{ description : 'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E'})
      .should('include',{ website: 'https://leanpub.com/understandinges6/read'})

    
    
  });
});
  
  