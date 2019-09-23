Feature: getUserAllUsers
  get users
  
  Scenario: getUserslist
    Given precondition
    And Invoke get all users service
    Then I validate the statuscode
    And I validate the contenttype