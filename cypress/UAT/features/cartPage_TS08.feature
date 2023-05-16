Feature: Go to cart and verify the product
  Background: Lifestyle Store
  Given I am on the homepage

    Scenario: Go to cart and verify the product
    When I click on the login button
    And I enter valid credentials
    And click on the login button
    And I should be logged in successfully
    And Verify basket icon
    And Click on Basket icon
    And Verify the Added Item
    And Verify the VIEW BASKET
    And click on the VIEW BASKET
    And Verify Cart page
    And Click on Checkout button
    And Verify checkout page and go back
    Then Assert on the Total Price
    
