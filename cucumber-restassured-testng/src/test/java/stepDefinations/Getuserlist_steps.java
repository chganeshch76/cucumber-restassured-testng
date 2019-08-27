package stepDefinations;


import static io.restassured.RestAssured.given;

import org.testng.Assert;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;

public class Getuserlist_steps {

	Response resp;
	
	
	@Given("I want to write a step with precondition")
	public void i_want_to_write_a_step_with_precondition() {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new cucumber.api.PendingException();
		
	}

	@Given("Invoke get service")
	public void invoke_get_service() {
	    // Write code here that turns the phrase above into concrete actions
	 //   throw new cucumber.api.PendingException();
		
		resp=given().when().get("https://reqres.in/api/users?page=2").andReturn();
		System.out.println(resp.asString());

		
	}

	@Then("I validate the status code")
	public void i_validate_the_status_code() {
	    // Write code here that turns the phrase above into concrete actions
	  //  throw new cucumber.api.PendingException();
		

		System.out.println(resp.statusCode());
		Assert.assertEquals(resp.statusCode(), 200);

	}

	@Then("I validate the content type")
	public void i_validate_the_content_type() {
	    // Write code here that turns the phrase above into concrete actions

		System.out.println(resp.contentType());
		Assert.assertEquals(resp.contentType(), "application/json; charset=utf-8");
	}

	
}
