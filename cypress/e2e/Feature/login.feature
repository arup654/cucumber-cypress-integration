Feature: Verify the login functionality of the application.

  Feature Verify login functionality for all combinations.
  Background:
  Given user visits the homepage

 Scenario: User logins with valid credentials.
   
   And click on the Sign-in button
   When enters his 'arup111@mail.com' and 'tsunami'
   And clicks on the sign-in button
   Then user should successfully login

   Scenario: User logins with invalid credentials.
   
   And click on the Sign-in button
   When enters his incorrect credentials
   |usermail|password         |
   |arup111@mail.com|faultypwd|
   And clicks on the sign-in button
   Then he should not be signed in 