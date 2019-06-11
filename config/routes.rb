Rails.application.routes.draw do
  post '/login', to: 'auth#login'
  # get '/user', to: 'users#show_user'
  # # resources :users
  # resources :homes, except: [:new, :edit]
  # resources :favorites, except: [:new, :edit, :update]

  # http://localhost:3000/api/v1/resource
  namespace :api do
    namespace :v1 do
      get '/user', to: 'users#show_user'
      resources :homes, except: [:new, :edit]
      resources :favorites, except: [:new, :edit, :update]
    end
  end
end
