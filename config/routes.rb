Rails.application.routes.draw do
  post '/login', to: 'auth#create'
  delete '/logout', to: 'auth#destroy'
  get '/get_current_user', to: 'auth#get_current_user'

  post '/search_home', to: 'zillow#search_home'
  post '/search_comps', to: 'zillow#search_comps'

  namespace :api do
    namespace :v1 do
      resources :homes, only: [:create, :destroy]
      resources :favorites, only: [:create, :destroy]
      post '/signup', to: 'users#create'
      delete '/unsubscribe', to: 'users#destroy'
    end
  end
end
