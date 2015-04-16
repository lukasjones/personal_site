Rails.application.routes.draw do


  get 'welcome/index'

  get 'blogs/index'
  get 'welcome/mail'
  root 'welcome#index'

  resources :comments, only: [:index]


end
