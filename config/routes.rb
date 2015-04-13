Rails.application.routes.draw do


  get 'welcome/index'

  get 'blogs/index'

  root 'welcome#index'

  resources :comments, only: [:index]


end
