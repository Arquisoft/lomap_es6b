Feature: Adding a new review comment to a place

  Scenario: The user wants to add an review comment to a place
    Given A logged user and a place
    When I click on the add review comment button, make the review comment and submit it
    Then A confirmation message should be shown in the screen and the review comment should be added to the place