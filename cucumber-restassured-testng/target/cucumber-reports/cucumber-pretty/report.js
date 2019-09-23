$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("getAllUsers.feature");
formatter.feature({
  "line": 1,
  "name": "getUserAllUsers",
  "description": "get users",
  "id": "getuserallusers",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "getUserslist",
  "description": "",
  "id": "getuserallusers;getuserslist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "precondition",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Invoke get all users service",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I validate the statuscode",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I validate the contenttype",
  "keyword": "And "
});
formatter.match({
  "location": "GetAllUsers.precondition()"
});
formatter.result({
  "duration": 163318659,
  "status": "passed"
});
formatter.match({
  "location": "GetAllUsers.invoke_get_all_users_service()"
});
formatter.result({
  "duration": 2589542652,
  "status": "passed"
});
formatter.match({
  "location": "GetAllUsers.i_validate_the_statuscode()"
});
formatter.result({
  "duration": 5057505,
  "status": "passed"
});
formatter.match({
  "location": "GetAllUsers.i_validate_the_contenttype()"
});
formatter.result({
  "duration": 2895949,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [application/json1; charset\u003dutf-8] but found [application/json; charset\u003dutf-8]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:47)\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:31)\r\n\tat stepDefinations.GetAllUsers.i_validate_the_contenttype(GetAllUsers.java:42)\r\n\tat ✽.And I validate the contenttype(getAllUsers.feature:8)\r\n",
  "status": "failed"
});
formatter.uri("getUserperPage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "getUser",
  "description": "get user list based on id",
  "id": "getuser",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 23,
  "name": "getUserlist",
  "description": "",
  "id": "getuser;getuserlist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I want to write a step with precondition",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Invoke get service",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I validate the status code",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I validate the content type",
  "keyword": "And "
});
formatter.match({
  "location": "Getuserlist_steps.i_want_to_write_a_step_with_precondition()"
});
formatter.result({
  "duration": 102633,
  "status": "passed"
});
formatter.match({
  "location": "Getuserlist_steps.invoke_get_service()"
});
formatter.result({
  "duration": 208814542,
  "status": "passed"
});
formatter.match({
  "location": "Getuserlist_steps.i_validate_the_status_code()"
});
formatter.result({
  "duration": 341538,
  "status": "passed"
});
formatter.match({
  "location": "Getuserlist_steps.i_validate_the_content_type()"
});
formatter.result({
  "duration": 100922,
  "status": "passed"
});
});