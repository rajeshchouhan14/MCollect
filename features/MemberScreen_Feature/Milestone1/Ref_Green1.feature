Feature: TC_REF_GREEN_001 Regression suite

  Scenario Outline: User submit request with reference as green team

    Given I am on the login page 
    When click on button Submit request with a reference
    When click on green button
    Then I enter firstname and lastname 
    Then user insert reference and memberNI 
    Then selects the date    
    Then I insert the address and postcode  
    Then I fill email and number 
    When click on continue button
  
