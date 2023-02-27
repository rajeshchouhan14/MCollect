Feature: addNewUserlist Regression suite

    Scenario Outline: As a user, Add & Verify user list of Mercer Collect application

        Given I am on the mcollect login page
        When user click on internal user link
        And User enter username <uname>
        # And User enter external username <uname>
        # And User enter external password <pwd>
        And User click on submit button
        Then Verify the landing page
        Then Verify the users page
        And Click on add new user
        Then Enter user details <eml>
        And select roles type
        And select status
        Then save user details
        Then Verify the users page
        Then Verify Active user List
        Then Search the user using <eml>
        Then Clear the search box and verify search result
        Then user logout from application

        Examples:
            | uname     | pwd            | eml                      |
            | r@mmc.com | Password@12345 | TestActiveuser16@mmc.com |
            | r@mmc.com | Password@12345 | TestActiveuser17@mmc.com |