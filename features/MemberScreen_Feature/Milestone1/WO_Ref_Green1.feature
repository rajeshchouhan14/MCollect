Feature: TC_WO_REF_GREEN_001 Regression suite

  Scenario Outline: User submit request without reference as green team

    Given I am on the login page 
    When click on button Submit request without a reference
    When click on green button
    Then I enter firstname and lastname 
    Then I inserts reference and memberNI 
    Then select the date    
    Then I insert the address and postcode  
    Then I fill email and number 
    Then I enter the employer and scheme
    When clicks on the continue button
    # Then user tell us about request
    # Then select the request type
    # # Then user upload the document
    # Then user submit the request
  
