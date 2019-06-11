Rails.application.routes.draw do
  post '/login', to: 'auth#login'
  get '/user', to: 'users#show_user'
  # resources :users
  resources :homes, except: [:new, :edit]
  resources :homes, except: [:new, :edit, :update]
end
