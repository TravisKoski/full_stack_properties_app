class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string :name
      t.integer :monthly_rate

      t.timestamps
    end
  end
end
