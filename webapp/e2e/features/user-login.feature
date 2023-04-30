Feature: User login

Scenario: The user owns a solid POD and wants to log into the application
  Given A registered user
  When I click on the login button and fill my Inrupt credentials
  Then A confirmation message should be shown in the screen