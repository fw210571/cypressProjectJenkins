import {
    before,
    Given,
    When,
    And,
    Then,
  } from "cypress-cucumber-preprocessor/steps";


//  <-------- TS-07 ---------> 
//  >>> Signin Process 
Given("I am on the homepage", () => {
    cy.visit("https://www.lifestylestores.com/in/en/");
    cy.wait(2000);
   
  });
  When("I click on the login button", () => {
    cy.contains("Sign Up / Sign In").click();
  });
  
  And("I enter valid credentials", () => {
    cy.get("#mobileNumber").type("8810407997"); //8810407997
  });
  
  And("click on the login button", () => {
    cy.contains("Continue").click();
    cy.wait(18000);
    // this time is for entering mobile  OTP manually
      cy.get('#moe-dontallow_button').click();
      cy.wait(2000);
  });
  
  And("I should be logged in successfully", () => {
    cy.get( 'button[aria-label="user-icon"]' ).click() ;
    cy.contains('My Account').should('exist') ;
    cy.log("Login successfull") ;
    cy.wait(2000);
  });


//  >>> going to product page
And("Hover on the Men on the navigation bar", () => {
  cy.get('.MuiButton-label').contains('Men').should('have.text' , 'Men') ;
  cy.get('a[href="/in/en/department/men"]').contains('Men').invoke('show') ;
});

And("Click on the Casual Shirts", () => {
  cy.get('a').contains('Casual Shirts').click({force:true}) ;
  cy.wait(5000)
});

And("Verify new page", () => {
  cy.get('h1').should('have.text', 'Casual Shirts' ) ;
  cy.url().should('include', 'casualshirt') ;
});

And("Verify count of the Items or products", () => {
  cy.get('.MuiBox-root').contains('Products').then(($eleData)=>{
    cy.log($eleData.text()) ;
  })
});

And("Hover on the first Item", () => {
  cy.get('#product-1').scrollIntoView().trigger('mouseover')
  cy.get('.select-size-container').contains('select size').click({force:true}) ;
  cy.get('.MuiListItem-button').contains('XL').click({force:true}) ;
  cy.get('.MuiButton-containedPrimary').should('have.text', 'add to basket') ;
  cy.get('.MuiButton-containedPrimary').click({force:true}) ;
});

And("Select size of the Shirt", () => {
  cy.get('.select-size-container').click({force:true}) ;
  cy.get('.MuiListItem-button').contains('XL').click({force:true}) ;
});

And("Verify the button Add to Basket", () => {
  cy.get('.MuiButton-containedPrimary').should('have.text', 'add to basket') ;
});

And("Click on Add to Basket button", () => {
  cy.get('.MuiButton-containedPrimary').click({force:true}) ;
});

Then("Verify the Basket icon and Count of the Added products", () => {

  cy.wait(1500) ;
  cy.get('.MuiBadge-anchorOriginTopRightRectangle').then(($ele)=>{
    const count = +($ele.text()) ;
    if(count > 0){
      cy.log(`product added`) ;
      cy.log(count) ;
    }
  })
});
