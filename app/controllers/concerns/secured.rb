# app/controllers/concerns/secured.rb

# frozen_string_literal: true
require_relative "../../../lib/json_web_token"
module Secured
    extend ActiveSupport::Concern
  
    included do
      before_action :authenticate_request!
    end
  
    private
  
    def authenticate_request!
      auth_token
    rescue JWT::VerificationError, JWT::DecodeError
      render json: { errors: ['Not Authenticated'] }, status: :unauthorized
    end
  
    def http_token
      if request.headers['Authorization'].present?
        request.headers['Authorization'].split(' ').last
      end
    end
  
    def auth_token
      JsonWebToken.verify(http_token)
    end
  end