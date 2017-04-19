class CreateFoodModels < ActiveRecord::Migration[5.0]
  def change
    create_table :food_models do |t|
      t.string :name
      t.integer :weight
      t.boolean :vegan
      t.datetime :timestamp

      t.timestamps
    end
  end
end
