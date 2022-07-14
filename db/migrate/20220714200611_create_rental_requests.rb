class CreateRentalRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :rental_requests do |t|
      t.belongs_to :Property, null: false, foreign_key: true
      t.belongs_to :Tenant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
