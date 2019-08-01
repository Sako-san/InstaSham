Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:index, :show, :create, :edit, :destroy]
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:index, :create, :show, :destroy]
  end
end
