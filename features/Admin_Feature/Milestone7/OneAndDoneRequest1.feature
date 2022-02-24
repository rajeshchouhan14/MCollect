Feature: TC_One&Done_Req_001 Regression suite

  Scenario Outline: One and Done for Selected request - Send mail
  
    Given I open admin Dashboard login page
    Then click on take button for recent request
    Then verify OneAndDone & case button should be disabled 
    # Then click on reassign and select blue team  
    Then click on edit and select request type
    Then select scheme name
    Then click on save button
    # Then verify OneAndDone & case button should be enabled
    Then click on one and done request
    Then click on email
    Then select the template
    Then enter email template subject
    Then enter email content
    Then click on send email
    Then click on download

   