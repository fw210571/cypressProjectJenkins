/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />
import {
    before,
    Given,
    When,
    And,
    Then,
  } from "cypress-cucumber-preprocessor/steps";


//  <-------- TS-08 ---------> 

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


  // >>> Cart Process

    And("Verify basket icon", () => {
      cy.get('#root-nav-mini-basket').click() ;
    });

    And("Click on Basket icon", () => {
     cy.get('.MuiBox-root').contains('Cart').then(($ele)=>{
      cy.log($ele.text()) ;
     })
    });

    And("Verify the Added Item", () => {
      cy.get('a').contains('Casual Shirt').should('exist') ;
    });

    And("Verify the VIEW BASKET", () => {
      cy.get('#mini-view-basket a span').should('have.text' , 'VIEW BASKET') ;
    });

    And("click on the VIEW BASKET", () => {
      cy.get('#mini-view-basket a').click() ;
      cy.wait(4000) ;
    });

    And("Verify Cart page", () => {
      cy.url().should('include', 'cart') ;
      cy.wait(3000) ;
    });

    And("Click on Checkout button", ()=>{
      cy.get('button span').contains('Checkout now').click() ;
      cy.wait(3000) ;
    }) ;

    And("Verify checkout page and go back", ()=>{
      cy.url().should('include', 'newCheckout') ;
      cy.go('back') ;
      cy.wait(2500) ;
    }) ;

    Then("Assert on the Total Price", () => {
        cy.get('.MuiGrid-container .MuiGrid-grid-md-7').should('exist') ;
        cy.get('.MuiGrid-container').then(($ele)=>{
          const total = $ele.text() ;
          cy.log(total) ;
        })
    });