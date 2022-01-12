Feature: TC_WO_REF_BLUE_002 Regression suite

  Scenario Outline: Without reference blue team user provide information about request

    Given I am on the login page 
    When click on button Submit request without a reference
    When click on blue button
    Then I enter firstname and lastname 
    Then I insert reference and memberNI 
    Then select the date   
    Then I enter the employer and scheme 
    Then I insert the address and postcode  
    Then I fill email and number 
    When clicks on the continue button
    Then user tell us about type of request
    Then user tell us about request
    # Then user upload the document
    Then user submit the request
  
