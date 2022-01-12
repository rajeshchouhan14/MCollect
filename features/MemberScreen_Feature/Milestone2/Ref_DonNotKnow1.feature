Feature: TC_REF_DONT_KNOW_001 Regression suite

  Scenario Outline: User submit request with reference without team

    Given I am on the login page 
    When click on button Submit request with a reference
    When click on donot know button
    Then I enter firstname and lastname 
    Then user insert reference and memberNI 
    Then selects the date    
    Then I insert the address and postcode  
    Then I fill email and number 
    When click on continue button
  
