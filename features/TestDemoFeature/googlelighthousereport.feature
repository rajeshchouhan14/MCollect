Feature: Mercer Collect Regression suite

    Scenario Outline: Generate light house report of Mercer Collect application

        Given I am on the mcollect login page
        And User enter external username <uname>
        And User enter external password <pwd>
        And User click on submit button
        Then Verify the landing page
        Then Run Lighthouse report


        Examples:
            | uname                                               | pwd            |
            | qatestregression1.dheeraj.vashisht@gisqa.mercer.com | Password@12345 |







