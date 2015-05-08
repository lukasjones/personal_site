class UsersController < ApplicationController

  def p_sign_in
    email = params["/sign_in"][:email]
    password = params["/sign_in"][:password]
    user = User.where(email: email)[0]

    if user.authenticate(password)
      session[:id] = user.id
      redirect_to root_path
    else
      sleep(1)
      redirect_to sign_in_path
    end

  end

end
