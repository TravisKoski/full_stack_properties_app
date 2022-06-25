class Tenant < ApplicationRecord
  belongs_to :property, optional: true
end
