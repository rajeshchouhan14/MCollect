Feature: addNewUserlist Regression suite
    Scenario Outline: As a user, Verify user list of Mercer Collect application

        Given I am on the mercercollect login page
        When user click on internal user link and enter <username>
        Then the user has logged into the Mercer Collect successfully
        Then Verify the landing page
        Then Verify the users page
        Then Click on add new user
        Then Enter user details
        Then select roles type
        Then save user details

        Then Verify the users page
        Then Verify Active user List
        Then Filter the list by first name
        Then Filter the list by last name
        Then Filter the list by roles
        Then Search the user using search box
        Then Clear the search box and verify search result
        Then user logout from application

        Examples:
            | username  | pwd            |
            | r@mmc.com | Password@12345 |
