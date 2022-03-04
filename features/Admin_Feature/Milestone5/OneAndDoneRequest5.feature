Feature: TTC_One&Done_Req_005 Regression suite

  Scenario Outline: One and Done for Selected request -3rd Party- Save  record

    Given I open admin Dashboard login page
    Then click on take button for recent request2
    # Then click on reassign and select team 
    Then User on email reference number page   
    Then click on phone
    Then Select third party on Member represenatation
    Then Enter the third Party name
    Then Enter authority name
    Then Enter member name
    Then Enter Record of conversation
    Then Click on Save Record
    Then click on download


  
   