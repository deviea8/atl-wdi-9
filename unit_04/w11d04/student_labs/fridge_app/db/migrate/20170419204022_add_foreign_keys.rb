class AddForeignKeys < ActiveRecord::Migration[5.0]
  def change
    add_column :food_models, :fridge_model_id, :integer
    add_column :drink_models, :fridge__model_id, :integer
  end
end
