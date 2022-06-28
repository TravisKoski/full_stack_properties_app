Rails.application.routes.draw do
  resources :tenants
  resources :properties
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.httsml
  put "tenants/:id/properties/:property_id/rent", to: "tenants#rentProperty"

  # Defines the root path route ("/")
  # root "articles#index"
end
