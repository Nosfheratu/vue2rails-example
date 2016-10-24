Rails.application.routes.draw do
  resources :employees
  root 'employees#index'
end
