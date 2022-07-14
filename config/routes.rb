Rails.application.routes.draw do
  post 'rental_requests/create', to: "rental_requests#create"
  get 'rental_requests/:property_id/show', to: "rental_requests#show"
  put "rental_requests/:id/approve", to: "rental_requests#approve"
  put "rental_requests/:id/deny", to: "rental_requests#deny"
  delete 'rental_requests/:id/destroy', to: "rental_requests#destroy"
  get 'notifications/create'
  resources :tenants
  resources :properties
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.httsml
  put "tenants/:id/properties/:property_id/rent", to: "tenants#rentProperty"

  # Defines the root path route ("/")
  # root "articles#index"
end
