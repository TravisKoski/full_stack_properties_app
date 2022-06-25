class CreateTenants < ActiveRecord::Migration[7.0]
  def change
    create_table :tenants do |t|
      t.string :name
      t.integer :age
      t.belongs_to :property,foreign_key: true

      t.timestamps
    end
  end
end
