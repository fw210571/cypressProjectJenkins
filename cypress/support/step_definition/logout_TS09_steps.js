import {
    before,
    Given,
    When,
    And,
    Then,
  } from "cypress-cucumber-preprocessor/steps";


//  <-------- TS-09 ---------> 

//  >>> Signin Process 
Given("I am on the homepage", () => {
    cy.visit("https://www.lifestylestores.com/in/en/");
    cy.wait(2000);
   
  });
  When("I click on the login button", () => {
    cy.contains("Sign Up / Sign In").click();
  });
  
  And("I enter valid credentials", () => {
    cy.get("#mobileNumber").type("9953534918"); //8810407997
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

  And("Click on the Basket icon", () => {
    cy.get('#root-nav-mini-basket').click() ;
    cy.get('#mini-view-basket a').click() ;
  });

  And("Click on the VIEW BASKET button", () => {
    
    cy.wait(2000) ;
  });


  And("Verify remove button", () => {
    cy.get('.MuiGrid-container').find('button').contains('Remove').should('exist') ;
  }); 

  And("Click remove button", () => {
    cy.get('.MuiGrid-container').find('button span').contains('Remove').each(($item , $index , $list)=>{
        cy.wrap($item).click() ;
        cy.wait(500)
        cy.get('.MuiGrid-item button span').contains('Yes, remove').click() ;
    }) ;
  });

  And("Verify empty cart Heading", () => {
    cy.get('h1').contains('waiting to be added').should('have.text', 'The best fashion is waiting to be added in your cart !');
    cy.wait(2000) ;
}); 

  And("Verify empty cart Logo", () => {
    cy.get('#emptyBasketSection img[alt="Empty Basket Icon"]').scrollIntoView().should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fi1.lmsin.net%2Fwebsite_images%2Fin%2Fcheckout%2Fempty-basket.svg&w=640&q=75');
  }); 

  And("Verify website Logo", () => {
    cy.get('#page-header a[href="/in/en/"]').should('exist') ;
 }); 

  And("Click on website Logo", () => {
    cy.get('#page-header a[href="/in/en/"]').click() ;
    cy.wait(3000) ;
  }); 

  And("Click user icon and click on Signout", () => {
    cy.get('button[aria-label="user-icon"]').should('exist') ;
    cy.get('button[aria-label="user-icon"]').click() ;
    cy.get('.MuiListItem-button').contains('Sign Out').click() ;

  }); 

  Then("User should be Signout", () => {
    cy.wait(5000)
    cy.get('#account-actions-signup').should('exist') ;
  });