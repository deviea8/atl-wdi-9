class FactsController < ApplicationController
  def index
    @facts = Fact.get_cat_facts(30)
  end
end
