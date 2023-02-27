Feature: VerifyFMportalAccess Regression suite

  Scenario Outline: As a user, Verify portal access of FM

    Given I am on the login page 
    Then Verify the landing page
    # Then Verify the dashboard page
    # Then Verify the data change logs page
    # Then Verify the integration logs page
    # Then Verify the clients page
    # Then Verify the users page     
    # Then Verify the Data source view RK page should not visible
    # Then Verify the FM Data source view page
    Then Verify the sent email page
    Then Verify the RK Data source view page
    Then Verify the DOT screen
    Then Verify the Data sources FM page should not visible

   
