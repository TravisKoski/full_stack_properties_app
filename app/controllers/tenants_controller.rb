class TenantsController < ApplicationController
    def index
        tenants = Tenant.all
        render json: tenants
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
        render json: tenant
    end
    def destroy
        tenants = Tenant.all
        target_tenant = Tenant.find_by_id(params[:id])
        target_tenant.destroy
        render json: tenants
    end    

        
end
