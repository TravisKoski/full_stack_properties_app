class TenantsController < ApplicationController
    def index
        tenants = Tenant.all
        render json: tenants.to_json(:include =>:notifications)
    end
    def create
        new_tenant = Tenant.create(
            name: params[:name],
        age: params[:age].to_i
        )
        render json: new_tenant
    end
    def show
        tenant = Tenant.find_by_id(params[:id])
        render json: tenant.to_json(:include =>:notifications)
    end
    def destroy
        tenants = Tenant.all
        target_tenant = Tenant.find_by_id(params[:id])
        target_tenant.destroy
        render json: tenants
    end
    #Adds a tenant to a property
    def rentProperty
        renter = Tenant.find_by_id(params[:id])
        property_of_interest = Property.find_by_id(params[:property_id])
        property_of_interest.tenants << renter
        render json: property_of_interest
    end    

        
end
