class Tenant < ApplicationRecord
  belongs_to :property, optional: true
  has_many :notifications, dependent: :destroy
end
