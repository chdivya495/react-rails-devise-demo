Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  devise_scope :user do
    get '/auth/sign_out' => "devise_token_auth/sessions#destroy"
  end
end
