Feature: TC_BLUE_INSCOPE_002 Regression suite

  Scenario Outline: As a user, I can log into CMA application

    Given I am on the login page 
    When click on button Submit request with a reference
    When click on blue button
    Then I enter firstname and lastname 
    Then user insert reference and memberNI 
    Then selects the date    
    Then I insert the address and postcode  
    Then I fill email and number 
    When click on continue button
    Then user tell us about request
    # Then user upoad the document
    Then user submit the request
  
