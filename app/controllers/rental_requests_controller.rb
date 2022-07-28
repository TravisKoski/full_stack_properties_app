class RentalRequestsController < ApplicationController
  def create
    newRequest = RentalRequest.create!(Property_id: params[:Property_id].to_i, Tenant_id: params[:Tenant_id].to_i)
    render json: newRequest
  end

  def show
    rentalRequests = RentalRequest.where(Property_id: params[:property_id])
    render json: rentalRequests.to_json(:include => :Tenant)
  end

  # approves the rental request, and adds the corresponding tenant to the property
  def approve
      activeRequest = RentalRequest.find_by_id(params[:id])
      renter = Tenant.find_by_id(activeRequest.Tenant_id)
      property_of_interest = Property.find_by_id(activeRequest.Property_id)
      if not property_of_interest.tenants.include?(renter)
        property_of_interest.tenants << renter
        #notify the tenant that their request has been approved
        note = Notification.create!(message: "Your rental request has been approved for #{property_of_interest.name}", Tenant_id: renter.id)
        #We can now delete this request since the rental has taken place Successfully
        render json: property_of_interest
        activeRequest.destroy!
      else
        render json: {error: "You are already listed as a renter of this property", status: 400}
      end
      
end
  #denies the request, tenant will not be added to the property
  def deny
    #Grab the tenant information from the request itself, create the rejection notice, then delete the request
    activeRequest = RentalRequest.find_by_id(params[:id])
    renter = Tenant.find_by_id(activeRequest.Tenant_id)
    property_of_interest = Property.find_by_id(activeRequest.Property_id)
    rejectionNote = Notification.create!(message: "Sorry, but your request for #{property_of_interest.name}
    has been rejected, we wish you the best of luck!", Tenant_id: renter.id)
    render json: rejectionNote
    activeRequest.destroy!
  end
end
