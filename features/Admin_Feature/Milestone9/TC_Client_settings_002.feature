Feature: TC_Client_settings_002 Regression suite

  Scenario Outline: Delete Google Font

    Given I open admin Dashboard login page
    Then Click on Settings tool Icon
    Then Click on client settings tile
    Then Select the font                                                                               
    Then Add the font
    Then Delete the font  
      
   