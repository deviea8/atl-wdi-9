class FridgeModel < ApplicationRecord
  has_many :food_models
  has_many :drink_models
end
