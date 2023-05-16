Feature: Adding a product to cart or Basket
  Background: Lifestyle Store
  Given I am on the homepage

    Scenario: Add a to product from men's products
    When I click on the login button
    And I enter valid credentials
    And click on the login button
    And I should be logged in successfully
    And Hover on the Men on the navigation bar
    And Click on the Casual Shirts
    And Verify new page
    And Verify count of the Items or products
    And Hover on the first Item
    And Select size of the Shirt
    And Verify the button Add to Basket
    And Click on Add to Basket button
    Then Verify the Basket icon and Count of the Added products