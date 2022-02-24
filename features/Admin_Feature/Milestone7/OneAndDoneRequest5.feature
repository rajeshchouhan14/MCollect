Feature: TTC_One&Done_Req_005 Regression suite

  Scenario Outline: One and Done for Selected request -3rd Party- Save  record

    Given I open admin Dashboard login page
    Then click on take button for recent request
    Then verify OneAndDone & case button should be disabled 
    # Then click on reassign and select blue team    
    Then click on edit and select request type
    Then select scheme name
    Then click on save button
    Then verify OneAndDone & case button should be enabled
    Then click on one and done request
    Then click on phone

    # Then User on phone reference number page

    Then Select third party on Member represenatation
    Then Enter the third Party name
    Then Enter authority name
    Then Enter member name
    Then Enter Record of conversation
    Then Click on Save Record
    Then click on download


  
   