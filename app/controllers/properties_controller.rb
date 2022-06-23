class PropertiesController < ApplicationController
    def index
        @properties = Property.all
        render json: @properties.to_json(:include =>:tenants)
    end
    def create
    end
    def update
    end
    def destroy
    end
end
