Feature: TC_WO_REF_BLUE_001 Regression suite

  Scenario Outline: User submit request without reference as blue team
  
    Given I am on the login page 
    When click on button Submit request without a reference
    When click on blue button
    Then I enter firstname and lastname 
    Then I insert reference and memberNI 
    Then select the date   
    Then I enter the employer and scheme 
    Then I insert the address and postcode  
    Then I fill email and number 
    When click on continue button
  
