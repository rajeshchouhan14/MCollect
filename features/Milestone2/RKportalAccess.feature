Feature: VerifyRKportalAccess Regression suite

  Scenario Outline: As a user, Verify portal access of RK

    Given I am on the RK login page 
    Then Verify the landing page
    Then Verify the Data source view RK page

    
    Then Verify the dashboard page should not visible
    Then Verify the DOT screen should not visible  
    Then Verify the data change logs page should not visible
    Then Verify the integration logs page should not visible
    Then Verify the clients page should not visible
    Then Verify the users page should not visible   
    Then Verify the FM Data source view page should not visible
    Then Verify the RK Data source view page should not visible 
    Then Verify the Data sources FM page should not visible
    Then Verify the sent email page should not visible

