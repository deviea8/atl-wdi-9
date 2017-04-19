class CreateDrinkModels < ActiveRecord::Migration[5.0]
  def change
    create_table :drink_models do |t|
      t.string :name
      t.integer :size
      t.boolean :alcholic

      t.timestamps
    end
  end
end
