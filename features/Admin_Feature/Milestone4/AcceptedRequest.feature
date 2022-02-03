     Feature: TC_Accepted_Request_001 Regression suite
    Scenario Outline: User select Accepted request
  
    Given I open admin Dashboard login page
    Then user select accepted from dropdown
    Then user verify accepted list
