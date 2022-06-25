class CreateTenants < ActiveRecord::Migration[7.0]
  def change
    create_table :tenants do |t|
      t.string :name
      t.integer :age
      t.string :Property
      t.string :belongs_to

      t.timestamps
    end
  end
end
