@DIC-5540 @Regression
Feature: Verify Mass Upload page access as Record Keeper & Consultant

    Scenario Outline: Any user other than Fund Manager logs into the application

        Given I am on the mercercollect login page
        When External user enter <username> <password>
        Then the user has logged into the Mercer Collect successfully
        And the user has been authenticated as any user role other than Fund Manager
        And the user observes left menu
        And Data Source Mass Upload link should not be displayed to user
        And user logout from application

        Examples:
            | username                                            | password       |
            | qatestfund.dheeraj.vashisht@gisqa.mercer.com        | Password@12345 |
            | qatestconsultant1.dheeraj.vashisht@gisqa.mercer.com | Password@12345 |
