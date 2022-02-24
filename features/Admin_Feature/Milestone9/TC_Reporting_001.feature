Feature: TC_Reporting_001 Regression suite

  Scenario Outline: Reporting

    Given I open admin Dashboard login page
    Then Click on Settings tool Icon
    Then Click on reporting tile
    Then Select start date
    Then Select end date
    Then Select client
    Then Download the csv

  
   