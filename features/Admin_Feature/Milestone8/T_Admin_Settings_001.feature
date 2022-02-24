Feature: T_Admin_Settings_001 Regression suite

  Scenario Outline: Navigate to Admin Settings

    Given I open admin Dashboard login page
    Then Click on Settings tool Icon
    Then verify Settings page should be displayed with six tiles
    # (Clients, Client Settings, Groups, Reporting, Member Import , Scheme import) 


  
   