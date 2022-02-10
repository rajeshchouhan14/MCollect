Feature: TC_Edit_Request_001 Regression suite

  Scenario Outline: Edit Request for team
    Given I open admin Dashboard login page
    Then click on take button for green team InScope request
    Then verify OneAndDone & case button should be disabled   
    Then click on edit and select request type
    Then select scheme name
    Then click on save button
    Then verify OneAndDone & case button should be enabled

   