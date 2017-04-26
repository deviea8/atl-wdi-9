class Fact < ApplicationRecord
  def self.get_cat_facts(num = 30)
  url = "http://catfacts-api.appspot.com/api/facts?number=#{num}"
  cat_facts_json = HTTParty.get(url)
  parsed_facts = JSON.parse(cat_facts_json)["facts"]
  end
end
