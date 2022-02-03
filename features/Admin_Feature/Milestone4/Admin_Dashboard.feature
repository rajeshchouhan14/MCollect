Feature: TC_Dashboard_001 Regression suite

  Scenario Outline: Admin - Dashboard Summary
    Given I open admin Dashboard login page
    Then user select all from dropdown
    Then I search the queue
    Then select all from dropdown and arrange request queue
