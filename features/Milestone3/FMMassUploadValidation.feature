@DIC-5540 @Regression
Feature:Verify Mass Upload page access as Fund manager

    Scenario Outline: Fund Manager user logs into the application

        Given I am on the mercercollect login page
        When External user enter <username> <password>
        Then the user has logged into the Mercer Collect successfully
        And the user has been authenticated as Fund Manager user role
        And the user observes left menu
        And Data Source Mass Upload link should be displayed to user
        And Data Source Mass Upload link should be placed between Data Sources and FM Data Source View links
        And user logout from application

        Examples:
            | username                                            | password       |
            | qatestregression1.dheeraj.vashisht@gisqa.mercer.com | Password@12345 |