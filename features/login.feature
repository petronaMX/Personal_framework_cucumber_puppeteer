Feature: Login
    As a user
    I can login to the application
    
    Scenario: User can login to de application
        Given I open the login page
        When I enter my username and password
        And I click the login button
        Then I should be redirected to the application content
