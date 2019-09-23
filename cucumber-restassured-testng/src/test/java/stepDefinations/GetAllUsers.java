package stepDefinations;

import static io.restassured.RestAssured.given;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;

public class GetAllUsers {
	
	Response getAllUsersresp;
	SoftAssert sAssert = new SoftAssert();
	
	@Given("^precondition$")
	public void precondition() throws Throwable {
	  System.out.println("In pre condition");
	  }

	@Given("^Invoke get all users service$")
	public void invoke_get_all_users_service() throws Throwable {
	   
		getAllUsersresp=given().when().get("https://reqres.in/api/users").andReturn();
		System.out.println(getAllUsersresp.asString());

	}

	@Then("^I validate the statuscode$")
	public void i_validate_the_statuscode() throws Throwable {
		System.out.println(getAllUsersresp.statusCode());
		sAssert.assertEquals(getAllUsersresp.statusCode(), 200);
		sAssert.assertAll();

	}

	@Then("^I validate the contenttype$")
	public void i_validate_the_contenttype() throws Throwable {
		System.out.println(getAllUsersresp.contentType());
		sAssert.assertEquals(getAllUsersresp.contentType(), "application/json1; charset=utf-8");
		sAssert.assertAll();
	}

	
}
