Feature: Mercer Collect Regression suite

  Scenario Outline: As a user, Login into Mercer Collect

    Given I am on the mercercollect login page
    When user click on internal user link and enter <username>
    Then the user has logged into the Mercer Collect successfully
    Then Verify the landing page

    Examples:
      | username               |
      | rajesh.chouhan@mmc.com |








