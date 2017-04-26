Rails.application.routes.draw do
  # Our JSON endpoints
  # We'll hit these with Angular
  namespace :api do
    resources :appointments
    resources :doctors
  end

  # Our Devise routes
  # All server side rendering
  devise_for :users

  # Because we aren't using UI router,
  # We use these routes to ultimately serve up Angular views
  resources :doctors
  resources :appointments, only: [:index]

  root to: 'doctors#index'
end
