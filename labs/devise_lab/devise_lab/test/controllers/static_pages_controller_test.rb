require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get static_pages_home_url
    assert_response :success
  end

  test "should get welcome" do
    get static_pages_welcome_url
    assert_response :success
  end

  test "should get support" do
    get static_pages_support_url
    assert_response :success
  end

  test "should get configure" do
    get static_pages_configure_url
    assert_response :success
  end

end
