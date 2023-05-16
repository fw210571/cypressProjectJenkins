Feature: empty the cart and logout
  Background: Lifestyle Store
  Given I am on the homepage

    Scenario: empty the cart and logout
    When I click on the login button
    And I enter valid credentials
    And click on the login button
    And I should be logged in successfully
    And Click on the Basket icon
    And Click on the VIEW BASKET button
    And Verify remove button
    And Click remove button
    And Verify empty cart Heading
    And Verify empty cart Logo
    And Verify website Logo
    And Click on website Logo
    And Click user icon and click on Signout
    Then User should be Signout
