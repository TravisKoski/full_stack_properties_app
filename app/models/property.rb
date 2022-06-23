class Property < ApplicationRecord
    has_many :tenants, dependent: :destroy
end
