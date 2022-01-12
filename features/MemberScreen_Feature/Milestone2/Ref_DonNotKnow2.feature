Feature: TC_REF_DONT_KNOW_002 Regression suite

  Scenario Outline: With reference & without team name, user provide information about request

    Given I am on the login page 
    When click on button Submit request with a reference
    When click on donot know button
    Then I enter firstname and lastname 
    Then user insert reference and memberNI 
    Then selects the date    
    Then I insert the address and postcode  
    Then I fill email and number 
    When click on continue button
    Then user tell us about request
    # Then user upload the document
    Then user submit the request
  
