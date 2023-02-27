Feature: VerifyProAnalystportalAccess Regression suite

  Scenario Outline: As a user, Verify portal access of ProAnalyst

    Given I am on the PROanalyst login page 
    Then Verify the landing page
    Then Verify the dashboard page
    Then Verify the clients page
    Then Verify the FM Data source view page
    Then Verify the RK Data source view page
    Then Verify the sent email page

    Then Verify the DOT screen should not visible  
    Then Verify the data change logs page should not visible
    Then Verify the integration logs page should not visible
    Then Verify the Data source view RK page should not visible
    Then Verify the Data sources FM page should not visible
    Then Verify the users page should not visible   
 

