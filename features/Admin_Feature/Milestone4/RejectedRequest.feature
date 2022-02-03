    Feature: TC_Rejected_Request_001 Regression suite
    Scenario Outline: User select Rejected request
   
    Given I open admin Dashboard login page
    Then user select rejected from dropdown
    Then user verify rejected list
