Feature: TC_WO_REF_GREEN_002 Regression suite

  Scenario Outline: As a user, I can log into CMA application

    Given I am on the login page 
    When click on button Submit request without a reference
    When click on green button
    Then I enter firstname and lastname 
    Then I insert reference and memberNI 
    Then select the date    
    Then I insert the address and postcode  
    Then I fill email and number 
    Then I enter the employer and scheme
    When click on continue button
    Then select the request type
    Then user tell us about request
    # Then user upload the document
    Then user submit the request
  
