Rails.application.routes.draw do


  get 'welcome/index'
  get 'welcome/projects'

  get 'blogs/index'
  get 'welcome/mail'
  root 'welcome#index'
  resources :contacts, only: [:new, :create]

  resources :comments, only: [:index]

  get '/sign_in' => "users#sign_in"
  post '/sign_in' => "users#p_sign_in"



end
