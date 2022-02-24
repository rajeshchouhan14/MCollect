Feature: TC_Reject_ Request_001 Regression suite

  Scenario Outline: Reject Request

    Given I open admin Dashboard login page
    Then click on take button for recent request2
    Then click on Reject
    Then select the reason and send mail
    # Then click on send email
    # Then click on reassign and select blue team   
   
  
   