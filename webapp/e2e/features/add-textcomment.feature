Feature: Adding a new text comment to a place

  Scenario: The user wants to add a text comment to a place
    Given A logged user and a place
    When I click on the add comment button, write the comment and submit it
    Then A confirmation message should be shown in the screen and the text comment should be added to the place