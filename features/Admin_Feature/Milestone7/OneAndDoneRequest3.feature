Feature: TTC_One&Done_Req_003 Regression suite

  Scenario Outline: One and Done for Selected request - Send Phone record- Save record

    Given I open admin Dashboard login page
    Then click on take button for recent request3
    Then verify OneAndDone & case button should be disabled   
    # Then click on reassign and select blue team  

    Then click on edit and select request type
    Then select scheme name
    Then click on save button
    Then verify OneAndDone & case button should be enabled
    Then click on one and done request
    Then click on phone

    #  Then User on phone reference number page

    Then Select member name
    # Then Select Home address
    Then Select Date of Birth
    Then Select NI Number
    Then Select Designation
    Then Enter the Phone record
    Then Click on Save Record
    Then click on download


  
   