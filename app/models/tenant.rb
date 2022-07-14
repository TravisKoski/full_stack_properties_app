class Tenant < ApplicationRecord
  belongs_to :property, optional: true
  has_many :notifications, dependent: :destroy
  has_many :rental_requests, dependent: :destroy
end
