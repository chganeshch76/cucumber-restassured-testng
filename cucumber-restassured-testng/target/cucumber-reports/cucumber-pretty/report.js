$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sample.feature");
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
  "duration": 119918190,
  "status": "passed"
});
formatter.match({
  "location": "Getuserlist_steps.invoke_get_service()"
});
formatter.result({
  "duration": 2316075855,
  "status": "passed"
});
formatter.match({
  "location": "Getuserlist_steps.i_validate_the_status_code()"
});
formatter.result({
  "duration": 3724992,
  "status": "passed"
});
formatter.match({
  "location": "Getuserlist_steps.i_validate_the_content_type()"
});
formatter.result({
  "duration": 124299,
  "status": "passed"
});
});