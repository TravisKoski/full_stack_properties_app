require "test_helper"

class RentalRequestsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get rental_requests_create_url
    assert_response :success
  end

  test "should get show" do
    get rental_requests_show_url
    assert_response :success
  end

  test "should get destroy" do
    get rental_requests_destroy_url
    assert_response :success
  end
end
