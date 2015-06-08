Rails.application.routes.draw do

  root 'welcome#index'
  get 'welcome/projects'

  get '/blogs/all' => 'blogs#all'

  get 'welcome/mail'
  resources :contacts, only: [:new, :create]

  resources :blogs
  resources :comments, only: [:create]

  get '/sign_in' => "users#sign_in"
  post '/sign_in' => "users#p_sign_in"
  get '/sign_out' => "users#sign_out"



end
