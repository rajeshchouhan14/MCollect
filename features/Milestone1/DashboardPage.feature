Feature: Mercer Collect Regression suite

  Scenario Outline: As a user, Verify dashboard of Mercer Collect application

    Given I am on the mercercollect login page
    When user click on internal user link and enter <username>
    Then the user has logged into the Mercer Collect successfully
    Then Verify the landing page
    Then Verify the dashboard page
    Then User verify selected fund manager
    Then User verify unselected record keeper
    Then User verify overall completion data
    Then User verify performance holdings cashflows
    Then User verify request percentage
    Then User verify total number of requests
    Then User verify client plans strategies data
    # Then User verify either select month or quarter
    Then User verify plans for recent quarter
    # Then User verify order of quarter

    Examples:
      | username               |
      | rajesh.chouhan@mmc.com |








