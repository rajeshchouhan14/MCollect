  Feature: TC_All_Request_001 Regression suite

  Scenario Outline: User select All request
    Given I open admin Dashboard login page
    Then user select all from dropdown
    Then user verify all list
