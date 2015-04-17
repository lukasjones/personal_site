Rails.application.routes.draw do


  get 'welcome/index'

  get 'blogs/index'
  get 'welcome/mail'
  root 'welcome#index'
  resources :contacts, only: [:new, :create]

  resources :comments, only: [:index]


end
