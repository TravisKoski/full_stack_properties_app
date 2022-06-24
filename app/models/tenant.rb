class Tenant < ApplicationRecord
  belongs_to :Property, optional: true
end
