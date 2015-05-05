class UsersController < ApplicationController

  def p_sign_in
    # p params["/sign_in"]
    # p "#@@@@@@@@@@@@@@@@@@@@@@@@}"
    email = params["/sign_in"][:email]
    password = params["/sign_in"][:password]
    user = User.where(email: email)[0]

    if user.authenticate(password)
      session[:id] = user.id
      redirect_to root_path
    else
      redirect_to sign_in_path
      sleep(1)
    end

  end

end
