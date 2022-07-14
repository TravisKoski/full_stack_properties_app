class RentalRequest < ApplicationRecord
  belongs_to :Property
  belongs_to :Tenant
end
