Feature: TC_WHITELABEL_TBBT_001 Regression suite

  Scenario Outline: As a user, I can log into CMA application

    Given I open contact login page
    When Click on get in touch button
    Then I am inserting1 firstname and lastname 
    Then I am inserting InsuranceNumber and employerName
    Then I am inserting2 CaseReference and memberNumber
    Then select the date    
    Then I am inserting3 address and postcode  
    Then I am inserting4 email and number  
    When clicks on continue button
    Then selects the request type
    Then user tells us about request
    # Then user upoad the document
    Then user submits the request
  
