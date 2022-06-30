class PropertiesController < ApplicationController
    def index
        @properties = Property.all
        render json: @properties.to_json(:include =>:tenants)
    end
    def create
        @new_property = Property.create(name: params[:name], monthly_rate: params[:monthly_rate].to_i)
        #notify all tenants in the market that the new property is available via a notification
        tenants = Tenant.all
        tenants.each do |tenant|
            notification = Notification.create(message: "#{@new_property.name} is now on the market!",
            Tenant_id: tenant.id)
        end
        render json: @new_property
    end
    def update
        @target_property = Property.find_by_id(params[:id])
        @target_property.update(name: params[:name], monthly_rate: params[:monthly_rate].to_i)
        render json: @target_property
    end
    def destroy
        @all_properties = Property.all
        @property_to_delete = Property.find_by_id(params[:id])
        @property_to_delete.destroy
        render json: @all_properties

    end
    private

    
end
