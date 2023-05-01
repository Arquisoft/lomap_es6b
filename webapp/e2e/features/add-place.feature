Feature: Adding a new place

  Scenario: The user wants to add a new place
    Given A logged user
    When I fill the form, click on the map and press 'Add Place'
    Then A confirmation message should be shown in the screen