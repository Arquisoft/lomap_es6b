Feature: Adding a new image comment to a place

  Scenario: The user wants to add an image comment to a place
    Given A logged user and a place
    When I click on the add image comment button, write the image comment and submit it
    Then A confirmation message should be shown in the screen and the image comment should be added to the place