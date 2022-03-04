Feature: TC_One&Done_Req_001 Regression suite

  Scenario Outline: One and Done for Selected request - Send mail
  
    Given I open admin Dashboard login page
    Then click on take button for recent request2
    # Then click on reassign and select team 
    Then User on email reference number page
    Then click on email
    Then select the template
    Then click on send email
    Then click on download

   