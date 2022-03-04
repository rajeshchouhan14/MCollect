Feature: TTC_One&Done_Req_003 Regression suite

  Scenario Outline: One and Done for Selected request - Send Phone record- Save record

    Given I open admin Dashboard login page
    Then click on take button for recent request3
    # Then click on reassign and select team 
    Then User on email reference number page   
    Then click on phone
    Then Select member name
    Then Select Home address
    Then Select Date of Birth
    Then Select NI Number
    Then Select Designation
    Then Enter the Phone record
    Then Click on Save Record
    Then click on download


  
   