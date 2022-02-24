Feature: TC_Add_Group_001 Regression suite

  Scenario Outline: Add Group
  
    Given I open admin Dashboard login page
    Then Click on Settings tool Icon
    Then Click on groups tile
    Then Click on Add group
    Then Enter group name
    Then Select allowed workflow
    Then Select permission for this group
    Then Add the group  

  
   