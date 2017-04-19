class CreateErinsModels < ActiveRecord::Migration[5.0]
  def change
    create_table :erins_models do |t|
      t.string :name
      t.integer :age
      t.string :occupation

      t.timestamps
    end
  end
end
