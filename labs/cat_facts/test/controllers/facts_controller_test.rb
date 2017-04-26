require 'test_helper'

class FactsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get facts_index_url
    assert_response :success
  end

end
