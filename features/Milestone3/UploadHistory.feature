@DIC-5663
Feature: Verify Upload history on mass upload page

    Scenario Outline: Record Retention in "Upload History" table

        Given I am on the mercercollect login page
        When user click on internal user link and enter <username>
        Then the user has logged into the Mercer Collect successfully
        And Data Source Mass Upload link should be displayed to user
        And the user should be able to see records of last 90 days only in Upload History table
        And user verifies the disclaimer text
        And user logout from application
        Examples:

            | username  |
            | r@mmc.com |