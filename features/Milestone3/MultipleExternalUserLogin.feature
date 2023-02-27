@Sanity
Feature: Multiple User login into MercerCollect application

    Scenario Outline: Login with multiple user id & password into Mercer Collect application

        Given I am on the mercercollect login page
        When External user enter <username> <password>
        Then the user has logged into the Mercer Collect successfully
        And user logout from application


        Examples:
            | username                                            | password       |
            | qatestregression1.dheeraj.vashisht@gisqa.mercer.com | Password@12345 |
            | qatestfund.dheeraj.vashisht@gisqa.mercer.com        | Password@12345 |








