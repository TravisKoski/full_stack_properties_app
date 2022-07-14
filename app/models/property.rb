class Property < ApplicationRecord
    has_many :tenants, dependent: :destroy
    has_many :rental_requests, dependent: :destroy
end
