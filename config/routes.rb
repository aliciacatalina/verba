Rails.application.routes.draw do
  root "today#show"

  resources :users, only: [:new, :create]
  get "/profile" => "profile#show"

  resources :posts, only: [:create, :update]
  post "/publish/:post_id" => "posts#publish", as: :publish
  post "/unpublish/:post_id" => "posts#unpublish", as: :unpublish

  resources :archive, only: [:index]
  get "/download" => "archive#download", as: :download

  get "/login" => "sessions#new", as: :login
  post "/login" => "sessions#create"
  post "/logout" => "sessions#destroy", as: :logout
end
